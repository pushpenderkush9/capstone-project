import { useEffect, useState } from "react"
import StatsCards from "../components/StatsCards"
import KanbanBoard from "../components/kanban/KanbanBoard"
import { getTasks } from "../services/projectService"

export default function Dashboard(){

const [tasks,setTasks]=useState({
todo:[],
doing:[],
done:[]
})

useEffect(()=>{

const loadTasks=async()=>{

const res=await getTasks()

const todo=[]
const doing=[]
const done=[]

res.data.forEach(task=>{

if(task.status==="todo") todo.push(task)
if(task.status==="doing") doing.push(task)
if(task.status==="done") done.push(task)

})

setTasks({todo,doing,done})

}

loadTasks()

},[])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">
Dashboard
</h1>

{/* Task Stats */}

<StatsCards tasks={tasks}/>

{/* Kanban Board */}

<KanbanBoard tasks={tasks} setTasks={setTasks}/>

</div>

)

}