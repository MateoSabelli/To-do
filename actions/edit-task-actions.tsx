"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function editTask(formdata: FormData) {
    const id = formdata.get("id")?.toString(); // Asegúrate de obtener el id de la tarea
    const name = formdata.get("name")?.toString();
    const description = formdata.get("description")?.toString();
    const priority = formdata.get("priority")?.toString();

    console.log(name, description, priority);

    // Validación: asegúrate de que los campos no estén vacíos
    if (!id || !name || !description || !priority) {
        return;
    }

    try {
        // Actualizar la tarea en la base de datos
        const editTask = await prisma.task.update({
            where: {
                id: parseInt(id),  // Si el id es un número, conviértelo a entero
            },
            data: {
                name: name,
                description: description,
                priority: priority,
            },
        });

        console.log(editTask);
        redirect("/"); // Redirigir al usuario a la página principal
    } catch (error) {
        console.error("Error actualizando la tarea:", error);
    }
}
