import { Bell, Plus, Sun, Moon } from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"
import { fakeUser, fakeNotifications } from "../data/fakeData"

export default function Topbar(){

const { theme, toggleTheme } = useContext(ThemeContext)
const navigate = useNavigate()

const [notifications] = useState(fakeNotifications)

const unreadCount = notifications.filter(n=>!n.read).length

return(

<div className="h-16 flex items-center justify-end px-6 gap-6
bg-white dark:bg-darkbg
border-b border-gray-200 dark:border-darkborder">


{/* Theme */}

<button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400">

{theme==="dark" ? <Sun size={20}/> : <Moon size={20}/>}

</button>


{/* Notifications */}

<div className="relative">

<button
onClick={()=>navigate("/notifications")}
className="text-gray-500 dark:text-gray-400"
>
<Bell size={20}/>
</button>

{unreadCount>0 && (

<span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
{unreadCount}
</span>

)}

</div>




{/* Avatar */}

<div
onClick={()=>navigate("/profile")}
className="cursor-pointer"
>

{fakeUser.avatar ? (

<img
src={fakeUser.avatar}
className="w-9 h-9 rounded-full"
/>

) : (

<div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white">
{fakeUser.name[0]}
</div>

)}

</div>

</div>

)

}