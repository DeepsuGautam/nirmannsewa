import { Auth } from "@/middleware/auth";
import projects from "@/models/projects";
import { deleteFile } from "@/utility/DeleteFile";
import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";
import { join } from "path";

export const PUT=async(req)=>{
    try{
        const auth = await Auth();
        if(!auth) throw new Error("Not Authorized")
        const form=await req.formData();
        const id =await req?.url?.split("/")?.pop();
        const updates = await projects.findOne({_id:id});
        const dataStruct = {
            title:null,
            description:null,
            content:null,
            image:null,
            status:null            
        }
       for(const key in dataStruct){
        const data = await form.get(key);
        if(key==="image" && data instanceof File){
            const uploaded = await UploadFiles(data, "projects", updates?.image);
            dataStruct.image = uploaded?.path;
        }else if(key ==="image" && typeof(data)==="string"){
            dataStruct.image = data;
        }else{
                dataStruct[key] = data
          
        }
       }
       for(const key in dataStruct){
        updates[key] = dataStruct?.[key];
       }
       await updates.save();
       return NextResponse.json({msg:"Edited"})
    }catch(error){
        console.log(error?.message);
        return NextResponse.json({error:false}, {status:400})
    }
}
export const DELETE=async(req)=>{
    try{
        const auth = await Auth();
        if(!auth) throw new Error("Not Authorized")
        const url = await req?.url?.split("/")?.pop();
        const data =await projects.findOne({_id:url});
        const filePath = join("projects", data?.image);
        await deleteFile(filePath);
        await projects.findOneAndDelete({_id:url});
        return NextResponse.json({message:"deleted"})

    }catch(error){
        console.log(error?.message)
        return NextResponse.json({error:true},{status:500})
    }
}