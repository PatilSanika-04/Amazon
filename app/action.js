'use server';
import { prisma } from "@/lib/prisma";

export default async function createUser(){
    await prisma.user.create({
        data:{
            name:"sanika",
            phone:"786756",
            age:"25"
        }
    })
}

export async function getUser(){
    const users = await prisma.user.findMany();
    return users
}