import { UploadFiles } from "@/utility/UploadFiles";
import { NextResponse } from "next/server";

export const POST=async(req)=>{
try{
    const form = await req.formData();
    const image = await form.get("cover");
    const name = await form.get("name");
    if(!image || !name) throw new Error("Required Data is not given");
    //get data
    const uploads = await UploadFiles(image, "covers", name);
    if(!uploads.success) throw new Error("Error while Sending image");
    return NextResponse.json({ok:true})
}catch(error){
    console.log(error.message);
    return NextResponse.json({},{status:500})
}
}