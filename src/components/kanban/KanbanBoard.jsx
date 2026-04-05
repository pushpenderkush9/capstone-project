import KanbanColumn from "./KanbanColumn"

export default function KanbanBoard({ tasks, setTasks }) {

const onDragStart = (e,id)=>{
e.dataTransfer.setData("taskId",id)
}

const onDrop = (e,status)=>{
const id = e.dataTransfer.getData("taskId")

setTasks(prev =>
prev.map(task =>
task.id === Number(id)
? { ...task, status }
: task
)
)
}

const allowDrop = (e)=>e.preventDefault()

return(

<div className="flex gap-6 overflow-x-auto pb-6">

<KanbanColumn
title="To Do"
status="todo"
tasks={tasks.filter(t=>t.status==="todo")}
onDragStart={onDragStart}
onDrop={onDrop}
allowDrop={allowDrop}
/>

<KanbanColumn
title="In Progress"
status="progress"
tasks={tasks.filter(t=>t.status==="progress")}
onDragStart={onDragStart}
onDrop={onDrop}
allowDrop={allowDrop}
/>

<KanbanColumn
title="Done"
status="done"
tasks={tasks.filter(t=>t.status==="done")}
onDragStart={onDragStart}
onDrop={onDrop}
allowDrop={allowDrop}
/>

</div>

)
}