import ConnectDB from "@/DB_CONNECT/ConnectDB";
import { Auth } from "@/middleware/auth";
import user from "@/models/users";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    try{
      await ConnectDB();
      const auth = await Auth();
      if(!auth) throw new Error("Authentication failed!");
      const pwds = await req.json();
      if(!pwds) throw new Error("Data Not Found!")
      const check = pwds?.password === pwds?.repassword;
    if(!check) return NextResponse.json({error:true}, {status:400});
    const findUser = await user.findOne({role:"admin"});
    if(!findUser) throw new Error("Could not find admin");
    const verifyPwd = await compare(pwds?.oldpassword, findUser?.password);
    if(!verifyPwd) throw new Error("Incorrect old password!");
    const newpass = await hash(pwds?.password , 10);
    findUser.password = newpass;
    await findUser.save();
    return NextResponse.json({}, {status:200})

    }catch(error){
        console.log(error);
        return NextResponse.json({}, {status:500})
    }
}