export default function ProjectHeader({project}){

return(

<div className="bg-white dark:bg-darkcard rounded-xl p-6 shadow mb-6">

<h1 className="text-3xl font-bold mb-2">
{project.name}
</h1>

<p className="text-gray-500 mb-2">
{project.description}
</p>

<p className="text-sm text-gray-400">
Deadline: {project.deadline}
</p>

</div>

)

}