import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectDetails from "./pages/ProjectDetails"


// Pages
import Splash from "./pages/Splash"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Teams from "./pages/Teams"
import WorkspaceSelect from "./pages/WorkspaceSelect"
import Profile from "./pages/Profile"
// Layout
import DashboardLayout from "./layout/DashboardLayout"
import Notifications from "./pages/Notifications"
// Future pages (create these later)
import Projects from "./pages/Projects"
import TaskBoard from "./pages/TaskBoard"
import Analytics from "./pages/Analytics"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Splash Screen */}
        <Route path="/" element={<Splash />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <DashboardLayout>
              <Projects />
            </DashboardLayout>
          }
        />

        {/* Task Board */}
        <Route
          path="/tasks"
          element={
            <DashboardLayout>
              <TaskBoard />
            </DashboardLayout>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={
            <DashboardLayout>
              <Analytics />
            </DashboardLayout>
          }
        />
      <Route path="/teams" element={ <DashboardLayout>
      <Teams/>
      </DashboardLayout>
      }
      />
      <Route path="/notifications" element={ <DashboardLayout>
      <Notifications/>
      </DashboardLayout>
      }
      />  


<Route path="/project/:id" element={<ProjectDetails/>}/>
<Route path="/workspace" element={<WorkspaceSelect/>}/>
<Route path="/profile" element={<Profile/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App