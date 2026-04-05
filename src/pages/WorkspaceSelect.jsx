import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Plus, X } from "lucide-react"
import { useWorkspace } from "../context/WorkspaceContext"

export default function WorkspaceSelect(){

const navigate = useNavigate()
const { setWorkspace } = useWorkspace()

const [teams,setTeams] = useState([
{ id:1, teamName:"Frontend Team", leader:"lead_101", members:[] },
{ id:2, teamName:"Backend Team", leader:"lead_102", members:[] }
])

const [showForm,setShowForm] = useState(false)

const [teamName,setTeamName] = useState("")
const [leader,setLeader] = useState("")
const [memberInput,setMemberInput] = useState("")
const [members,setMembers] = useState([])


/* ---------- Select Personal Workspace ---------- */

const selectPersonal = () => {

setWorkspace({
type:"personal"
})

navigate("/dashboard")

}


/* ---------- Select Team Workspace ---------- */

const selectTeam = (teamId) => {

setWorkspace({
type:"team",
teamId
})

navigate("/dashboard")

}


/* ---------- Create Team ---------- */

const handleSubmit = (e) => {

e.preventDefault()

const newTeam = {
id: Date.now(),
teamName,
leader,
members: members.map(m => ({
id: m,
position: "Member"
}))
}

setTeams([...teams,newTeam])

setTeamName("")
setLeader("")
setMembers("")
setShowForm(false)

}


/* ---------- Add Temp Member ---------- */

const addTempMember = () => {

if(memberInput.trim()==="") return

setMembers([...members,memberInput])

setMemberInput("")

}


/* ---------- Remove Temp Member ---------- */

const removeTempMember = (index) => {

setMembers(members.filter((_,i)=>i!==index))

}


return(

<div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

<h1 className="text-5xl font-bold mb-12">
Who's working?
</h1>

<div className="flex gap-10 flex-wrap justify-center">


{/* Personal Workspace */}

<div
onClick={selectPersonal}
className="flex flex-col items-center cursor-pointer group"
>

<div className="w-36 h-36 bg-gray-700 rounded-lg flex items-center justify-center text-3xl font-bold group-hover:ring-4 ring-white transition">
P
</div>

<p className="mt-3 text-lg group-hover:text-white text-gray-400">
Personal
</p>

</div>


{/* Teams */}

{teams.map((team)=>(

<div
key={team.id}
onClick={()=>selectTeam(team.id)}
className="flex flex-col items-center cursor-pointer group"
>

<div className="w-36 h-36 bg-indigo-600 rounded-lg flex items-center justify-center text-3xl font-bold group-hover:ring-4 ring-white transition">

{team.teamName.charAt(0)}

</div>

<p className="mt-3 text-lg group-hover:text-white text-gray-400">
{team.teamName}
</p>

</div>

))}


{/* Create Team Button */}

<div
onClick={()=>setShowForm(true)}
className="flex flex-col items-center cursor-pointer group"
>

<div className="w-36 h-36 bg-gray-800 rounded-lg flex items-center justify-center group-hover:ring-4 ring-white transition">
<Plus size={40}/>
</div>

<p className="mt-3 text-lg group-hover:text-white text-gray-400">
Create Team
</p>

</div>

</div>


{/* ---------- Create Team Modal ---------- */}

{showForm && (

<div className="fixed inset-0 flex items-center justify-center bg-black/40">

<div className="bg-white dark:bg-darkcard p-8 rounded-xl w-[420px] text-black dark:text-white">

<h2 className="text-xl font-bold mb-6">
Create Team
</h2>

<form onSubmit={handleSubmit} className="space-y-6">


{/* Team Name */}

<div>

<label className="font-semibold">
Team Name
</label>

<p className="text-sm text-gray-500 mb-2">
Name of the team
</p>

<input
type="text"
placeholder="Frontend Team"
value={teamName}
onChange={(e)=>setTeamName(e.target.value)}
className="w-full p-3 border rounded bg-white dark:bg-darkbg text-black dark:text-white"
/>

</div>


{/* Leader */}

<div>

<label className="font-semibold">
Team Leader ID
</label>

<p className="text-sm text-gray-500 mb-2">
User ID of the leader
</p>

<input
type="text"
placeholder="leader_101"
value={leader}
onChange={(e)=>setLeader(e.target.value)}
className="w-full p-3 border rounded bg-white dark:bg-darkbg text-black dark:text-white"
/>

</div>


{/* Members */}

<div>

<label className="font-semibold">
Members
</label>

<p className="text-sm text-gray-500 mb-2">
Add member IDs
</p>

<div className="flex gap-2">

<input
type="text"
placeholder="Enter Member ID"
value={memberInput}
onChange={(e)=>setMemberInput(e.target.value)}
className="flex-1 p-3 border rounded bg-white dark:bg-darkbg text-black dark:text-white"
/>

<button
type="button"
onClick={addTempMember}
className="px-4 bg-silver rounded text-black"
>
Add
</button>

</div>


{/* Member Chips */}

<div className="flex flex-wrap gap-2 mt-3">

{members.map((member,index)=>(

<span
key={index}
className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-darkbg rounded-full text-sm"
>

{member}

<X
size={14}
className="cursor-pointer"
onClick={()=>removeTempMember(index)}
/>

</span>

))}

</div>

</div>


{/* Buttons */}

<div className="flex justify-end gap-4">

<button
type="button"
onClick={()=>setShowForm(false)}
className="px-4 py-2 border rounded"
>
Cancel
</button>

<button
type="submit"
className="px-4 py-2 bg-silver rounded text-black"
>
Create
</button>

</div>

</form>

</div>

</div>

)}

</div>

)

}