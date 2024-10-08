/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "./ui/button";
import { deleteTask } from "@/actions/tasks-actions";

export function TaskButtonDelete({taskId}:{taskId:number}) {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button className=" text-white rounded px-3 py-1" variant={"destructive"}>Delete</Button>            
        </form>
    );
}