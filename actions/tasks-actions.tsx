"use server"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formdata: FormData) {
    const name = formdata.get("name")?.toString();
    const description = formdata.get("description")?.toString();
    const priority = formdata.get("priority")?.toString();

    console.log(name, description, priority)

    if (!name || !description || !priority) {
        return
    }
    const newTask = await prisma.task.create({
    data:{
        name:name,
        description:description,
        priority:priority,
      }
    })
    console.log(newTask)
    redirect("/")
}

export async function deleteTask(formData:FormData) {
    "use server"
    const tasksId = formData.get("taskId")?.toString();
    
    if(!tasksId){
        return;
    }

    await prisma.task.delete({
        where: {
            id: Number(tasksId),
        }
    })
    revalidatePath("/")
}

export async function updateTask(formData:FormData) {
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const priority = formData.get("priority")?.toString();

    if (!id || !name || !description || !priority) {
        return
    }

    await prisma.task.update({
        where: {
            id: Number(id),
        },
        data: {
            name: name,
            description: description,
            priority: priority,
        }}); 

    redirect("/")
}