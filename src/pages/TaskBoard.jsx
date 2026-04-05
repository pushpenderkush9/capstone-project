import { useState } from "react"
import KanbanBoard from "../components/kanban/KanbanBoard"

export default function TaskBoard(){

const projects = [
{ id:1, name:"E-Commerce Website" },
{ id:2, name:"AI Blog Generator" }
]

const [selectedProject,setSelectedProject] = useState(1)

const [tasks,setTasks] = useState([
{
id:1,
title:"Create Product Page",
status:"todo",
priority:"High",
assignee:"Rahul",
due:"2026-05-10",
projectId:1
},
{
id:2,
title:"Payment Gateway Integration",
status:"progress",
priority:"High",
assignee:"Anita",
due:"2026-05-12",
projectId:1
},
{
id:3,
title:"Add Cart System",
status:"todo",
priority:"Medium",
assignee:"Arjun",
due:"2026-05-15",
projectId:1
},
{
id:4,
title:"Deploy Backend Server",
status:"done",
priority:"Low",
assignee:"Rahul",
due:"2026-05-05",
projectId:1
}
])

const projectTasks = tasks.filter(
task => task.projectId === selectedProject
)

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-8">
Task Board
</h1>


{/* Project Selector */}

<div className="flex items-center gap-4 mb-10">

<span className="text-gray-400">
Project
</span>

<select
value={selectedProject}
onChange={(e)=>setSelectedProject(Number(e.target.value))}
className="bg-darkcard border border-darkborder px-4 py-2 rounded-lg"
>

{projects.map(project=>(
<option key={project.id} value={project.id}>
{project.name}
</option>
))}

</select>

</div>


<KanbanBoard
tasks={projectTasks}
setTasks={setTasks}
/>

</div>

)
}