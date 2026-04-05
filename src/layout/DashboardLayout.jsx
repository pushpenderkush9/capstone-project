import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function DashboardLayout({ children }) {

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 flex flex-col">

<Topbar/>

<main className="p-6 min-h-screen bg-white dark:bg-darkbg">
{children}
</main>

</div>

</div>

)

}