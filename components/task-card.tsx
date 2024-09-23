import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge"
import { Task } from '@prisma/client';
import { TaskButtonDelete } from './task-button-delete';
import Link from 'next/link';

const TaskCard = ({task}:{task:Task}) => {
  return (
    <div>
      <Card key={task.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{task.name}</CardTitle>
            <Badge className={clsx({
              'bg-red-600': task.priority === 'Urgente',
              'bg-blue-600': task.priority === 'High',
              'bg-yellow-600': task.priority === 'Media',
              'bg-green-600': task.priority === 'Low',
            })}  >
              {task.priority}
              </Badge>
          </CardHeader>
          <CardContent>
            <p className="h-auto" >
            {task.description}
            </p>
            <span className="text-slate-600">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </CardContent>
          <CardFooter className="flex justify-between flex-wrap gap-5">
            <Link 
            href={`/tasks/${task.id}/edit`}
            className={buttonVariants({variant:"secondary"})}
            >Edit</Link>
            <TaskButtonDelete taskId={task.id}/>
          </CardFooter>  
        </Card>
    </div>
  )
}

export default TaskCard
