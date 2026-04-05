import { useState } from "react"
import { fakeNotifications } from "../data/fakeData"

export default function Notifications(){

const [notifications,setNotifications] = useState(fakeNotifications)

const markRead = (id)=>{

setNotifications(prev =>
prev.map(n =>
n.id===id ? {...n,read:true} : n
)
)

}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">
Notifications
</h1>

<div className="space-y-4">

{notifications.map(n=>(

<div
key={n.id}
onClick={()=>markRead(n.id)}
className={`p-4 rounded-lg border cursor-pointer
${n.read
? "bg-darkcard border-darkborder"
: "bg-indigo-500/10 border-indigo-500"
}`}
>

<p className="text-sm">
{n.message}
</p>

<p className="text-xs text-gray-400 mt-1">
{n.time}
</p>

</div>

))}

</div>

</div>

)

}