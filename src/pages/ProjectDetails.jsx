import { useParams } from "react-router-dom"
import { useState } from "react"

import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

import OverviewTab from "../components/project/OverviewTab"
import TasksTab from "../components/project/TasksTab"
import CommentsTab from "../components/project/CommentsTab"
import AnalyticsTab from "../components/project/AnalyticsTab"

export default function ProjectDetails(){

const { id } = useParams()

const [tab,setTab] = useState("overview")

const project = {
name:"E-Commerce Website",
description:"Online shopping platform",
deadline:"2026-05-20",
progress:40,
tasks:24,
members:5
}

return(

<div className="flex min-h-screen bg-black text-white">

<Sidebar />

<div className="flex-1 flex flex-col">

<Topbar />

<div className="p-8">


{/* Project Header */}

<div className="bg-darkcard p-8 rounded-2xl mb-8 border border-darkborder">

<div className="flex justify-between items-start mb-6">

<div>

<h1 className="text-3xl font-bold mb-2">
{project.name}
</h1>

<p className="text-gray-400">
{project.description}
</p>

</div>

<span className="px-3 py-1 bg-indigo-600 text-xs rounded-full">
Active
</span>

</div>


{/* Project Stats */}

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="bg-darkbg p-4 rounded-lg">
<p className="text-xs text-gray-400">Deadline</p>
<p className="font-semibold">{project.deadline}</p>
</div>

<div className="bg-darkbg p-4 rounded-lg">
<p className="text-xs text-gray-400">Tasks</p>
<p className="font-semibold">{project.tasks}</p>
</div>

<div className="bg-darkbg p-4 rounded-lg">
<p className="text-xs text-gray-400">Team Members</p>
<p className="font-semibold">{project.members}</p>
</div>

</div>


{/* Progress */}

<div>

<div className="flex justify-between text-sm mb-2">

<span>Project Progress</span>

<span>{project.progress}%</span>

</div>

<div className="w-full bg-gray-800 rounded-full h-2">

<div
className="bg-indigo-500 h-2 rounded-full"
style={{width:`${project.progress}%`}}
></div>

</div>

</div>

</div>


{/* Tabs */}

<div className="flex gap-8 border-b border-gray-800 mb-8 text-sm">

<button
onClick={()=>setTab("overview")}
className={`pb-3 ${tab==="overview" ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-400"}`}
>
Overview
</button>

<button
onClick={()=>setTab("tasks")}
className={`pb-3 ${tab==="tasks" ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-400"}`}
>
Tasks
</button>

<button
onClick={()=>setTab("comments")}
className={`pb-3 ${tab==="comments" ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-400"}`}
>
Comments
</button>

<button
onClick={()=>setTab("analytics")}
className={`pb-3 ${tab==="analytics" ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-400"}`}
>
Analytics
</button>

</div>


{/* Tab Content */}

{tab === "overview" && <OverviewTab project={project}/>}

{tab === "tasks" && <TasksTab/>}

{tab === "comments" && <CommentsTab/>}

{tab === "analytics" && <AnalyticsTab/>}

</div>

</div>

</div>

)

}