export default function StatsCards({tasks}){

const total =
tasks.todo.length +
tasks.doing.length +
tasks.done.length

const pending =
tasks.todo.length +
tasks.doing.length

const completed =
tasks.done.length

return(

<div className="grid grid-cols-3 gap-6 mb-8">

<div className="p-6 rounded-xl bg-white dark:bg-darkcard shadow">

<p className="text-gray-500 text-sm">
Total Tasks
</p>

<h2 className="text-3xl font-bold">
{total}
</h2>

</div>


<div className="p-6 rounded-xl bg-white dark:bg-darkcard shadow">

<p className="text-gray-500 text-sm">
Pending Tasks
</p>

<h2 className="text-3xl font-bold">
{pending}
</h2>

</div>


<div className="p-6 rounded-xl bg-white dark:bg-darkcard shadow">

<p className="text-gray-500 text-sm">
Completed Tasks
</p>

<h2 className="text-3xl font-bold">
{completed}
</h2>

</div>

</div>

)

}