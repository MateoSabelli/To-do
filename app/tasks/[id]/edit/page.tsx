import React from "react";
import { TaskForm } from "@/app/new/Task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function TaskPageEdit({params}:{params:{id:string}}){
    
    const task = await prisma.task.findFirst({
        where:{
            id: parseInt(params.id),
        }
    })

    if (!task){
        redirect("/")
    }
    console.log(task)

    
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className='flex items-center justify-center h-screen'>
            <TaskForm task={task}/>
        </div>
    )
}