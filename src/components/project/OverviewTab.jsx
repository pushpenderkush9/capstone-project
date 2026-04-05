import { useEffect, useState } from "react"

export default function OverviewTab({ projectId }){

const [overview,setOverview] = useState({
todo:0,
inProgress:0,
completed:0,
overdueTasks:[],
teamMembers:[],
recentActivity:[]
})

/* Fetch Data */

useEffect(()=>{

fetch(`http://localhost:8080/api/projects/${projectId}/overview`)
.then(res=>res.json())
.then(data=>setOverview(data))

},[projectId])


return(

<div className="grid grid-cols-3 gap-6">

{/* Task Status */}

<div className="bg-darkcard border border-darkborder rounded-xl p-5">

<h3 className="font-semibold mb-4">
Task Status
</h3>

<div className="space-y-3 text-sm">

<div className="flex justify-between">
<span className="text-gray-400">To Do</span>
<span>{overview.todo}</span>
</div>

<div className="flex justify-between">
<span className="text-gray-400">In Progress</span>
<span>{overview.inProgress}</span>
</div>

<div className="flex justify-between">
<span className="text-gray-400">Completed</span>
<span className="text-green-400">
{overview.completed}
</span>
</div>

</div>

</div>


{/* Overdue Tasks */}

<div className="bg-darkcard border border-darkborder rounded-xl p-5">

<h3 className="font-semibold mb-4">
Overdue Tasks
</h3>

<div className="space-y-2 text-sm">

{overview.overdueTasks.map((task,i)=>(
<p key={i} className="text-red-400">
{task}
</p>
))}

</div>

</div>


{/* Team Members */}

<div className="bg-darkcard border border-darkborder rounded-xl p-5">

<h3 className="font-semibold mb-4">
Team Members
</h3>

<div className="flex -space-x-2">

{overview.teamMembers.map((member,i)=>(

<div
key={i}
className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-xs"
>
{member.name[0]}
</div>

))}

</div>

</div>


{/* Recent Activity */}

<div className="col-span-3 bg-darkcard border border-darkborder rounded-xl p-5">

<h3 className="font-semibold mb-4">
Recent Activity
</h3>

<div className="space-y-3 text-sm text-gray-400">

{overview.recentActivity.map((activity,i)=>(
<p key={i}>{activity}</p>
))}

</div>

</div>

</div>

)

}