import {
BarChart,
Bar,
PieChart,
Pie,
Cell,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

export default function OverviewAnalytics(){

/* Example Data */

const progressData = [
{ name: "Completed", value: 4 },
{ name: "Remaining", value: 6 }
]

const healthData = [
{ name: "Progress", value: 40 },
{ name: "OnTime", value: 30 },
{ name: "Overdue", value: 10 }
]

const overdueData = [
{ name: "Overdue Tasks", value: 2 },
{ name: "On Time Tasks", value: 8 }
]

const delayImpactData = [
{ name: "High Priority", impact: 9 },
{ name: "Medium Priority", impact: 4 },
{ name: "Low Priority", impact: 1 }
]

const efficiencyData = [
{ name: "User A", efficiency: 1.25 },
{ name: "User B", efficiency: 0.9 },
{ name: "User C", efficiency: 1.1 }
]

const COLORS = ["#6366f1","#10b981","#ef4444","#f59e0b"]

return(

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


{/* PROJECT PROGRESS */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Project Progress
</h3>

<ResponsiveContainer width="100%" height={200}>

<PieChart>

<Pie
data={progressData}
dataKey="value"
outerRadius={70}
>

{progressData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>



{/* PROJECT HEALTH */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Project Health Score
</h3>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={healthData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip/>

<Bar dataKey="value" fill="#6366f1"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* ETA PREDICTION */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Estimated Completion
</h3>

<p className="text-4xl font-bold text-indigo-500">
4 Days
</p>

<p className="text-sm text-gray-500 mt-2">
Based on team velocity
</p>

</div>



{/* OVERDUE TASKS */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Overdue Tasks
</h3>

<ResponsiveContainer width="100%" height={200}>

<PieChart>

<Pie
data={overdueData}
dataKey="value"
outerRadius={70}
>

{overdueData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>



{/* DELAY IMPACT */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Delay Impact
</h3>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={delayImpactData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip/>

<Bar dataKey="impact" fill="#f59e0b"/>

</BarChart>

</ResponsiveContainer>

</div>



{/* USER EFFICIENCY */}

<div className="bg-white dark:bg-darkcard p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
User Efficiency
</h3>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={efficiencyData}>

<XAxis dataKey="name"/>
<YAxis/>

<Tooltip/>

<Bar dataKey="efficiency" fill="#10b981"/>

</BarChart>

</ResponsiveContainer>

</div>


</div>

)

}