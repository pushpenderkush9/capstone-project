import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"

export default function Teams(){

const [teams,setTeams] = useState([
{
id:1,
teamName:"Frontend Team",
leader:"Rahul",
members:[
{
id:"u1",
name:"Rahul",
email:"rahul@mail.com",
position:"Developer"
},
{
id:"u2",
name:"Anita",
email:"anita@mail.com",
position:"UI Designer"
}
]
},
{
id:2,
teamName:"Backend Team",
leader:"Arjun",
members:[
{
id:"u3",
name:"Arjun",
email:"arjun@mail.com",
position:"Backend Developer"
}
]
}
])

const [memberInput,setMemberInput] = useState("")


/* Add Member */

const addMember = (teamId) => {

if(!memberInput.trim()) return

setTeams(prev =>
prev.map(team => {

if(team.id === teamId){

return{
...team,
members:[
...team.members,
{
id:Date.now().toString(),
name:memberInput,
email:`${memberInput.toLowerCase()}@mail.com`,
position:"Member"
}
]
}

}

return team

})
)

setMemberInput("")

}


/* Remove Member */

const removeMember = (teamId,memberId) => {

setTeams(prev =>
prev.map(team => {

if(team.id === teamId){

return{
...team,
members:team.members.filter(m => m.id !== memberId)
}

}

return team

})
)

}


return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-10">
Teams
</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{teams.map(team=>(

<div
key={team.id}
className="bg-white dark:bg-darkcard p-6 rounded-xl border dark:border-darkborder shadow"
>


{/* Team Header */}

<div className="flex justify-between items-center mb-6">

<div>

<h2 className="text-xl font-semibold">
{team.teamName}
</h2>

<p className="text-sm text-gray-400">
Leader: {team.leader}
</p>

</div>

<span className="text-xs bg-indigo-500 px-3 py-1 rounded-full">
Team
</span>

</div>


{/* Members */}

<div className="space-y-4 mb-6">

{team.members.map(member=>(

<div
key={member.id}
className="flex items-center justify-between bg-gray-50 dark:bg-darkbg p-3 rounded-lg"
>

<div className="flex items-center gap-3">

{/* Avatar */}

<div className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">
{member.name[0]}
</div>

<div>

<p className="text-sm font-semibold">
{member.name}
</p>

<p className="text-xs text-gray-400">
{member.position}
</p>

</div>

</div>


<button
onClick={()=>removeMember(team.id,member.id)}
className="text-red-500 hover:text-red-600"
>
<Trash2 size={16}/>
</button>

</div>

))}

</div>


{/* Add Member */}

<div className="flex gap-2">

<input
type="text"
placeholder="Add new member"
value={memberInput}
onChange={(e)=>setMemberInput(e.target.value)}
className="flex-1 px-3 py-2 border rounded-lg bg-white dark:bg-darkbg"
/>

<button
onClick={()=>addMember(team.id)}
className="flex items-center gap-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
>

<Plus size={16}/>
Add

</button>

</div>

</div>

))}

</div>

</div>

)

}