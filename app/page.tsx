import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";

async function Home() {

  const tasks = await prisma.task.findMany()
  console.log(tasks)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-32 my-20">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      ) : (
        <p className="">No hay tareas aún</p> // Mensaje para cuando no hay tareas
      )}
    </div>
)}


export default Home;