import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { fakeUser } from "../data/fakeData"

export default function Profile(){

const [user,setUser] = useState(fakeUser)
const [editOpen,setEditOpen] = useState(false)

const [form,setForm] = useState({
name: fakeUser.name,
email: fakeUser.email,
role: fakeUser.role
})

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]: e.target.value
})
}

const saveProfile = ()=>{
setUser({
...user,
...form
})
setEditOpen(false)
}

return(

<div className="flex min-h-screen bg-black text-white">

{/* Sidebar */}
<Sidebar />

{/* Main Area */}
<div className="flex-1 flex flex-col">

{/* Topbar */}
<Topbar />

{/* Page Content */}
<div className="p-8 max-w-6xl mx-auto w-full">

<h1 className="text-3xl font-bold mb-8">
Profile
</h1>

{/* Profile Card */}
<div className="bg-darkcard border border-darkborder rounded-2xl p-8 shadow-lg mb-8">

<div className="flex items-center justify-between mb-8">

<div className="flex items-center gap-6">

<div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-3xl font-bold">
{user.name[0]}
</div>

<div>
<h2 className="text-2xl font-semibold">{user.name}</h2>
<p className="text-gray-400">{user.role}</p>
</div>

</div>

<button
onClick={()=>setEditOpen(true)}
className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600"
>
Edit Profile
</button>

</div>

{/* Details */}
<div className="grid grid-cols-2 gap-8 text-sm">

<div className="space-y-4">
<div>
<p className="text-gray-400">Email</p>
<p>{user.email}</p>
</div>

<div>
<p className="text-gray-400">Joined</p>
<p>{user.joined}</p>
</div>
</div>

<div className="space-y-4">
<div>
<p className="text-gray-400">Role</p>
<p>{user.role}</p>
</div>

<div>
<p className="text-gray-400">User ID</p>
<p>{user.id}</p>
</div>
</div>

</div>

</div>

{/* Stats */}
<div className="grid grid-cols-3 gap-6 mb-8">

<div className="bg-darkcard border border-darkborder rounded-xl p-6">
<p className="text-gray-400 text-sm mb-1">Tasks Completed</p>
<p className="text-xl font-semibold text-green-400">24</p>
</div>

<div className="bg-darkcard border border-darkborder rounded-xl p-6">
<p className="text-gray-400 text-sm mb-1">Tasks Assigned</p>
<p className="text-xl font-semibold">32</p>
</div>

<div className="bg-darkcard border border-darkborder rounded-xl p-6">
<p className="text-gray-400 text-sm mb-1">Projects</p>
<p className="text-xl font-semibold">5</p>
</div>

</div>

{/* Activity */}
<div className="bg-darkcard border border-darkborder rounded-xl p-6">

<h3 className="font-semibold mb-4">
Recent Activity
</h3>

<div className="space-y-3 text-sm text-gray-400">

<p>
Completed task <span className="text-white">Deploy Backend Server</span>
</p>

<p>
Commented on <span className="text-white">Payment Gateway Integration</span>
</p>

<p>
Created task <span className="text-white">Add Cart System</span>
</p>

</div>

</div>

</div>
</div>

{/* Edit Profile Modal */}
{editOpen && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-darkcard border border-darkborder rounded-xl p-6 w-[420px]">

<h2 className="text-xl font-semibold mb-6">
Edit Profile
</h2>

<div className="space-y-4">

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
className="w-full p-3 rounded bg-darkbg border border-darkborder"
/>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
className="w-full p-3 rounded bg-darkbg border border-darkborder"
/>

<input
type="text"
name="role"
value={form.role}
onChange={handleChange}
className="w-full p-3 rounded bg-darkbg border border-darkborder"
/>

</div>

<div className="flex justify-end gap-3 mt-6">

<button
onClick={()=>setEditOpen(false)}
className="px-4 py-2 border border-darkborder rounded"
>
Cancel
</button>

<button
onClick={saveProfile}
className="px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600"
>
Save
</button>

</div>

</div>

</div>

)}

</div>

)

}