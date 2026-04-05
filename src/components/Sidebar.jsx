import { Home, FolderKanban, ListTodo, Users, LogOut } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

export default function Sidebar(){

const navigate = useNavigate()

/* Logout Function */

const handleLogout = () => {

localStorage.removeItem("token")
localStorage.removeItem("user")

navigate("/login")

}


return(

<div className="w-64 h-screen bg-white dark:bg-darkbg border-r dark:border-darkborder flex flex-col justify-between">

<div>

<h1 className="text-xl font-bold p-6 text-silver">
Task Automate
</h1>

<nav className="space-y-2">


<NavLink
to="/dashboard"
className={({isActive}) =>
`flex items-center gap-3 px-6 py-3 transition
${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-100 dark:hover:bg-darkcard"}`
}
>
<Home size={18}/> Dashboard
</NavLink>


<NavLink
to="/projects"
className={({isActive}) =>
`flex items-center gap-3 px-6 py-3 transition
${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-100 dark:hover:bg-darkcard"}`
}
>
<FolderKanban size={18}/> Projects
</NavLink>


<NavLink
to="/tasks"
className={({isActive}) =>
`flex items-center gap-3 px-6 py-3 transition
${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-100 dark:hover:bg-darkcard"}`
}
>
<ListTodo size={18}/> Tasks
</NavLink>


<NavLink
to="/teams"
className={({isActive}) =>
`flex items-center gap-3 px-6 py-3 transition
${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-100 dark:hover:bg-darkcard"}`
}
>
<Users size={18}/> Teams
</NavLink>

</nav>

</div>


{/* Logout */}

<button
onClick={handleLogout}
className="flex items-center gap-3 p-6 text-red-500 hover:bg-gray-100 dark:hover:bg-darkcard transition"
>
<LogOut size={18}/> Logout
</button>


</div>

)

}