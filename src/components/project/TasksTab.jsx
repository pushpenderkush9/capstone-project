import { useState } from "react"
import { Plus } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function TasksTab(){

const members = [
{ id:"u1", name:"Rahul" },
{ id:"u2", name:"Anita" },
{ id:"u3", name:"Arjun" }
]

const [tasks,setTasks] = useState([
{
id:1,
title:"Create Product Page",
status:"todo",
assignee:"Rahul",
priority:"High",
due:new Date("2026-05-10")
},
{
id:2,
title:"Implement Payment Gateway",
status:"doing",
assignee:"Anita",
priority:"Medium",
due:new Date("2026-05-12")
}
])

const [title,setTitle] = useState("")
const [assignee,setAssignee] = useState("Rahul")
const [priority,setPriority] = useState("Medium")
const [due,setDue] = useState(null)


const addTask = () => {

if(!title) return

setTasks([
...tasks,
{
id:Date.now(),
title,
assignee,
priority,
due,
status:"todo"
}
])

setTitle("")
setDue(null)

}


return(

<div className="bg-white dark:bg-darkcard rounded-xl p-6 shadow">

<h2 className="text-xl font-semibold mb-6">
Tasks
</h2>


{/* Task List */}

<div className="space-y-4 mb-8">

{tasks.map(task=>(

<div
key={task.id}
className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-darkbg transition"
>

<div>

<p className="font-semibold">
{task.title}
</p>

<p className="text-sm text-gray-500">

Assigned: {task.assignee} • Priority: {task.priority}

</p>

<p className="text-xs text-gray-400">

Due: {task.due ? task.due.toDateString() : "No date"}

</p>

</div>

<span className={`px-3 py-1 text-xs rounded-full ${
task.status==="todo"
? "bg-gray-200 text-gray-700"
: "bg-yellow-200 text-yellow-700"
}`}>
{task.status}
</span>

</div>

))}

</div>


{/* Create Task Section */}

<div className="border-t pt-6">

<h3 className="font-semibold mb-4">
Create New Task
</h3>


{/* Title */}

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
placeholder="Task title"
className="w-full border rounded-lg px-3 py-2 mb-4 bg-white dark:bg-darkbg"
/>


{/* Member + Priority */}

<div className="grid grid-cols-2 gap-4 mb-4">

<select
value={assignee}
onChange={(e)=>setAssignee(e.target.value)}
className="border rounded-lg px-3 py-2 bg-white dark:bg-darkbg"
>

{members.map(m=>(
<option key={m.id}>{m.name}</option>
))}

</select>


<select
value={priority}
onChange={(e)=>setPriority(e.target.value)}
className="border rounded-lg px-3 py-2 bg-white dark:bg-darkbg"
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

</div>


{/* Calendar Picker */}

<div className="mb-4">

<DatePicker
selected={due}
onChange={(date)=>setDue(date)}
placeholderText="Select Due Date"
className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-darkbg"
/>

</div>


{/* Add Button */}

<button
onClick={addTask}
className="w-full flex items-center justify-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
>

<Plus size={18}/>
Add Task

</button>

</div>

</div>

)

}