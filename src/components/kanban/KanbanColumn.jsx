import { Circle, Loader2, CheckCircle2 } from "lucide-react"

export default function KanbanColumn({
title,
status,
tasks,
onDrop,
onDragStart,
allowDrop
}){

const iconMap = {
todo: Circle,
progress: Loader2,
done: CheckCircle2
}

const Icon = iconMap[status]

const priorityColor = (priority)=>{
if(priority==="High") return "bg-red-500/20 text-red-400"
if(priority==="Medium") return "bg-yellow-500/20 text-yellow-400"
return "bg-green-500/20 text-green-400"
}

return(

<div
onDrop={(e)=>onDrop(e,status)}
onDragOver={allowDrop}
className="min-w-[320px] bg-darkcard rounded-2xl p-5 border border-darkborder flex flex-col"
>

{/* Column Header */}

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-2">

<Icon size={18} className="text-gray-400"/>

<h3 className="font-semibold text-lg">
{title}
</h3>

</div>

<span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
{tasks.length}
</span>

</div>


{/* Tasks */}

<div className="space-y-4">

{tasks.map(task=>(

<div
key={task.id}
draggable
onDragStart={(e)=>onDragStart(e,task.id)}
className="bg-darkbg p-4 rounded-xl border border-gray-800 hover:border-indigo-500 hover:shadow-lg transition cursor-move"
>

<h4 className="font-semibold mb-3">
{task.title}
</h4>

<div className="flex justify-between items-center mb-2">

<span className={`text-xs px-2 py-1 rounded-full ${priorityColor(task.priority)}`}>
{task.priority}
</span>

<div className="flex items-center gap-2">

<div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">
{task.assignee[0]}
</div>

<span className="text-xs text-gray-400">
{task.assignee}
</span>

</div>

</div>

<p className="text-xs text-gray-400">
Due: {task.due}
</p>

</div>

))}

</div>

</div>

)
}