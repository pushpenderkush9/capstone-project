import { useState } from "react"
import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
LineChart,
Line
} from "recharts"


/* ---------------- Custom Tooltip ---------------- */

const TaskTooltip = ({ active, payload }) => {

if (active && payload && payload.length) {

const data = payload[0].payload

return (
<div className="bg-gray-900 border border-gray-700 p-3 rounded-lg text-sm shadow text-white">

<p className="font-semibold mb-2">
{data.name || data.day}
</p>

{data.tasks && (
<ul className="space-y-1">
{data.tasks.map((task,i)=>(
<li key={i}>• {task}</li>
))}
</ul>
)}

</div>
)

}

return null

}


export default function Analytics(){

/* ---------------- Projects ---------------- */

const projects = [
{ id:1, name:"E-Commerce Website" },
{ id:2, name:"AI Blog Generator" }
]

const [selectedProject,setSelectedProject] = useState(projects[0].id)


/* ---------------- Analytics Data ---------------- */

const analyticsData = {

1:{

progress:[
{
name:"Completed",
value:4,
tasks:[
"Create Product Page",
"Database Setup",
"Auth API",
"Landing Page"
]
},
{
name:"Remaining",
value:6,
tasks:[
"Payment Gateway",
"Email Service",
"Admin Dashboard",
"Filters",
"Orders",
"Deployment"
]
}
],

health:[
{
name:"On Time",
value:7,
tasks:[
"Landing Page",
"Database Setup",
"Auth API",
"Product Page",
"User Profile"
]
},
{
name:"Overdue",
value:3,
tasks:[
"Payment Gateway",
"Email Notification",
"Security Middleware"
]
}
],

eta:[
{
day:"Day 1",
completed:1,
tasks:["Setup Repo"]
},
{
day:"Day 2",
completed:2,
tasks:["Database Schema","Auth API"]
},
{
day:"Day 3",
completed:3,
tasks:["Product API","Cart Feature"]
},
{
day:"Day 4",
completed:4,
tasks:["Checkout UI","Order API"]
}
],

overdue:[
{
name:"On Time",
value:8,
tasks:[
"Product UI",
"Database",
"Auth API",
"Dashboard",
"Filters",
"Cart",
"Orders",
"Reports"
]
},
{
name:"Delayed",
value:2,
tasks:[
"Payment Gateway",
"Email Service"
]
}
],

delayImpact:[
{
name:"High Priority",
impact:9,
tasks:[
"Payment Gateway",
"Checkout Integration",
"Security Middleware"
]
},
{
name:"Medium Priority",
impact:4,
tasks:[
"Email Notifications",
"Search Filters"
]
},
{
name:"Low Priority",
impact:1,
tasks:[
"Footer Design"
]
}
],

efficiency:[
{
name:"Rahul",
efficiency:1.25,
tasks:[
"Auth API",
"Product API",
"User Profile"
]
},
{
name:"Anita",
efficiency:0.95,
tasks:[
"Checkout UI",
"Cart Integration"
]
},
{
name:"Arjun",
efficiency:1.1,
tasks:[
"Search API",
"Product Filters"
]
}
]

},

2:{

progress:[
{
name:"Completed",
value:2,
tasks:["Model Setup","Dataset Import"]
},
{
name:"Remaining",
value:8,
tasks:[
"Training",
"API Setup",
"UI Integration",
"Testing",
"Deployment"
]
}
],

health:[
{
name:"On Time",
value:6,
tasks:[
"Dataset Import",
"Model Setup",
"API Design"
]
},
{
name:"Overdue",
value:4,
tasks:[
"Training Optimization",
"GPU Setup"
]
}
],

eta:[
{
day:"Day 1",
completed:1,
tasks:["Dataset Import"]
},
{
day:"Day 2",
completed:1,
tasks:["Model Setup"]
},
{
day:"Day 3",
completed:2,
tasks:["API Setup","UI Setup"]
},
{
day:"Day 4",
completed:2,
tasks:["Testing","Deployment"]
}
],

overdue:[
{
name:"On Time",
value:6,
tasks:[
"Dataset Import",
"Model Setup",
"API Setup"
]
},
{
name:"Delayed",
value:4,
tasks:[
"Training Optimization",
"GPU Setup"
]
}
],

delayImpact:[
{
name:"High Priority",
impact:6,
tasks:[
"Training Optimization"
]
},
{
name:"Medium Priority",
impact:3,
tasks:[
"API Integration"
]
},
{
name:"Low Priority",
impact:2,
tasks:[
"UI Styling"
]
}
],

efficiency:[
{
name:"Rahul",
efficiency:1.1,
tasks:["Model Setup","Dataset Import"]
},
{
name:"Anita",
efficiency:0.9,
tasks:["API Setup"]
},
{
name:"Arjun",
efficiency:1.0,
tasks:["UI Setup"]
}
]

}

}


const data = analyticsData[selectedProject]

const COLORS = ["#6366f1","#10b981","#ef4444"]


return(

<div>

<h1 className="text-3xl font-bold mb-8">
Analytics
</h1>


{/* -------- Project Dropdown -------- */}

<div className="mb-8">

<label className="mr-3 font-semibold">
Select Project:
</label>

<select
value={selectedProject}
onChange={(e)=>setSelectedProject(Number(e.target.value))}
className="p-2 border rounded bg-white dark:bg-darkbg"
>

{projects.map(project=>(
<option key={project.id} value={project.id}>
{project.name}
</option>
))}

</select>

</div>


<div className="grid grid-cols-3 gap-6">


{/* -------- Project Progress -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
Project Progress
</h3>

<ResponsiveContainer width="100%" height={220}>

<PieChart>

<Pie data={data.progress} dataKey="value" outerRadius={80}>

{data.progress.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip content={<TaskTooltip/>}/>

</PieChart>

</ResponsiveContainer>

</div>



{/* -------- Project Health -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
Project Health
</h3>

<ResponsiveContainer width="100%" height={220}>

<BarChart data={data.health}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip/>}/>

<Bar dataKey="value" fill="#10b981"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* -------- ETA -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
Estimated Completion
</h3>

<ResponsiveContainer width="100%" height={220}>

<LineChart data={data.eta}>

<XAxis dataKey="day"/>
<YAxis/>

<Tooltip content={<TaskTooltip/>}/>

<Line type="monotone" dataKey="completed" stroke="#6366f1"/>

</LineChart>

</ResponsiveContainer>

</div>



{/* -------- Overdue Tasks -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
Overdue Tasks
</h3>

<ResponsiveContainer width="100%" height={220}>

<PieChart>

<Pie data={data.overdue} dataKey="value" outerRadius={80}>

{data.overdue.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip content={<TaskTooltip/>}/>

</PieChart>

</ResponsiveContainer>

</div>



{/* -------- Delay Impact -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
Task Delay Impact
</h3>

<ResponsiveContainer width="100%" height={220}>

<BarChart data={data.delayImpact}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip/>}/>

<Bar dataKey="impact" fill="#f59e0b"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* -------- User Efficiency -------- */}

<div className="p-6 border rounded-xl">

<h3 className="mb-4 font-semibold">
User Efficiency
</h3>

<ResponsiveContainer width="100%" height={220}>

<BarChart data={data.efficiency}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip/>}/>

<Bar dataKey="efficiency" fill="#6366f1"/>

</BarChart>

</ResponsiveContainer>

</div>


</div>

</div>

)

}