export default function TaskForm(){

return(

<div className="max-w-xl">

<h1 className="text-3xl font-bold mb-8">
Create Task
</h1>

<input placeholder="Task Title" className="w-full p-3 border mb-4"/>

<textarea placeholder="Description" className="w-full p-3 border mb-4"/>

<select className="w-full p-3 border mb-4">
<option>Priority</option>
<option>High</option>
<option>Medium</option>
<option>Low</option>
</select>

<button className="bg-silver px-6 py-2 rounded">
Create Task
</button>

</div>

)

}