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


/* ---------------- Tooltip Component ---------------- */

const TaskTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {

    const data = payload[0].payload

    return (
      <div className="bg-gray-900 border border-gray-700 p-3 rounded shadow-lg text-sm">

        <p className="font-semibold mb-2">{data.name}</p>

        {data.tasks && data.tasks.length > 0 && (
          <ul className="space-y-1">
            {data.tasks.map((task, i) => (
              <li key={i}>• {task}</li>
            ))}
          </ul>
        )}

      </div>
    )
  }

  return null
}


/* ---------------- Analytics Component ---------------- */

export default function AnalyticsTab(){


/* -------- Project Progress -------- */

const progressData = [
{
name:"Completed",
value:4,
tasks:[
"Create Product Page",
"Database Setup",
"Auth API",
"Landing Page UI"
]
},
{
name:"Remaining",
value:6,
tasks:[
"Payment Gateway",
"Email Service",
"Admin Dashboard",
"Product Filters",
"Order History",
"Deployment"
]
}
]


/* -------- Health Score -------- */

const healthData = [
{
name:"On Time",
value:5,
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
value:2,
tasks:[
"Payment Gateway",
"Email Notification"
]
}
]


/* -------- ETA Graph -------- */

const etaData = [
{
day:"Day 1",
completed:2,
tasks:["Setup Repo","Database Schema"]
},
{
day:"Day 2",
completed:3,
tasks:["Login API","Signup API","UI Layout"]
},
{
day:"Day 3",
completed:4,
tasks:["Cart Feature","Checkout UI"]
},
{
day:"Day 4",
completed:5,
tasks:["Order API","Admin Panel"]
}
]


/* -------- Overdue Tasks -------- */

const overdueData = [
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
name:"Overdue",
value:2,
tasks:[
"Payment Gateway",
"Email Service"
]
}
]


/* -------- Delay Impact -------- */

const delayImpactData = [
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
]


/* -------- User Efficiency -------- */

const efficiencyData = [
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


const COLORS = ["#6366f1","#10b981","#f59e0b","#ef4444"]


return(

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


{/* -------- Progress Chart -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Project Progress
</h3>

<ResponsiveContainer width="100%" height={250}>

<PieChart>

<Pie data={progressData} dataKey="value" outerRadius={80}>

{progressData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip content={<TaskTooltip />} />

</PieChart>

</ResponsiveContainer>

</div>



{/* -------- Health Score -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Project Health Score
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={healthData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip />} />

<Bar dataKey="value" fill="#6366f1"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* -------- ETA Chart -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Estimated Completion (ETA)
</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={etaData}>

<XAxis dataKey="day"/>
<YAxis/>

<Tooltip content={<TaskTooltip />} />

<Line type="monotone" dataKey="completed" stroke="#10b981"/>

</LineChart>

</ResponsiveContainer>

</div>



{/* -------- Overdue Tasks -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Overdue Tasks
</h3>

<ResponsiveContainer width="100%" height={250}>

<PieChart>

<Pie data={overdueData} dataKey="value" outerRadius={80}>

{overdueData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip content={<TaskTooltip />} />

</PieChart>

</ResponsiveContainer>

</div>



{/* -------- Delay Impact -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Task Delay Impact
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={delayImpactData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip />} />

<Bar dataKey="impact" fill="#f59e0b"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* -------- User Efficiency -------- */}

<div className="bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
User Efficiency
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={efficiencyData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip content={<TaskTooltip />} />

<Bar dataKey="efficiency" fill="#10b981"/>

</BarChart>

</ResponsiveContainer>

</div>


</div>

)

}