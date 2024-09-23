import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";

function Navbar () {
  return (
    
    <nav className="flex justify-between items-center mt-7 md:px-36 px-9" >
      <Link href="/">
      <h1 className="text-2xl font-bold">TO-DO App</h1>
      </Link>

      <div className="flex justify-center gap-5">
        <Link href="/new"
        className={buttonVariants({variant: "secondary"})} >Create Task</Link>
        <ModeToggle />
      </div>

    </nav>
   

  )
}

export default Navbar;