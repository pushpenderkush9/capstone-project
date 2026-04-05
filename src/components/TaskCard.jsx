export default function TaskCard({task}){

return(

<div className="bg-white dark:bg-darkbg p-4 rounded-lg shadow mb-3">

<p className="text-sm font-medium">
{task.title}
</p>

</div>

)

}