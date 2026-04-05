export default function ProjectTabs({tab,setTab}){

return(

<div className="flex gap-6 border-b mb-6">

<button
onClick={()=>setTab("overview")}
className={tab==="overview" ? "text-indigo-500 border-b-2 border-indigo-500 pb-2" : ""}
>
Overview
</button>

<button
onClick={()=>setTab("tasks")}
>
Tasks
</button>

<button
onClick={()=>setTab("comments")}
>
Comments
</button>

<button
onClick={()=>setTab("analytics")}
>
Analytics
</button>

</div>

)

}