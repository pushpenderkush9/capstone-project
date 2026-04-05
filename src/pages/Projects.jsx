import { useState } from "react"
import { Plus, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Projects() {

  const navigate = useNavigate()

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce Website",
      description: "Online store platform",
      progress: 60,
      tasks: 24,
      startDate: "2026-04-01",
      endDate: "2026-05-20"
    },
    {
      id: 2,
      name: "AI Blog Generator",
      description: "Generate blogs using AI",
      progress: 40,
      tasks: 12,
      startDate: "2026-04-10",
      endDate: "2026-06-10"
    }
  ])

  const [openModal, setOpenModal] = useState(false)

  const [newProject, setNewProject] = useState({
    name: "",
    description: ""
  })

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    })
  }

  const createProject = (e) => {
    e.preventDefault()

    const project = {
      id: Date.now(),
      name: newProject.name,
      description: newProject.description,
      progress: 0,
      tasks: 0,
      startDate: startDate?.toISOString().split("T")[0],
      endDate: endDate?.toISOString().split("T")[0]
    }

    setProjects([...projects, project])

    setNewProject({
      name: "",
      description: ""
    })

    setStartDate(null)
    setEndDate(null)

    setOpenModal(false)
  }

  return (

    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-silver text-black px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          <Plus size={18} />
          Create Project
        </button>

      </div>


      {/* Projects Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map(project => (

          <div
            key={project.id}
            className="bg-white dark:bg-darkcard rounded-xl p-6 shadow-md border dark:border-darkborder hover:shadow-xl transition"
          >

            <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full mb-2 inline-block">
              Active
            </span>

            <h2 className="text-xl font-semibold mb-2">
              {project.name}
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              {project.description}
            </p>


            {/* Progress */}

            <div className="mb-4">

              <p className="text-sm mb-2 font-medium">
                Progress {project.progress}%
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                ></div>

              </div>

            </div>


            {/* Dates */}

            <div className="flex justify-between text-sm text-gray-500 mb-4">

              <span>
                Start: {project.startDate}
              </span>

              <span>
                End: {project.endDate}
              </span>

            </div>


            {/* Open Button */}

            <button
              onClick={() => navigate(`/project/${project.id}`)}
              className="w-full border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-darkbg transition"
            >
              Open Project
            </button>

          </div>

        ))}

      </div>


      {/* Modal */}

      {openModal && (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">

          <div className="bg-white dark:bg-darkcard w-full max-w-md p-6 rounded-xl shadow-lg relative">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>


            <h2 className="text-xl font-semibold mb-4">
              Create New Project
            </h2>


            <form onSubmit={createProject} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={newProject.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 bg-white text-black"
              />

              <textarea
                name="description"
                placeholder="Project Description"
                value={newProject.description}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 bg-white text-black"
              />


              {/* Start Date */}

              <div>

                <p className="text-sm mb-1">Start Date</p>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select start date"
                  className="w-full border rounded-lg px-3 py-2"
                />

              </div>


              {/* End Date */}

              <div>

                <p className="text-sm mb-1">End Date</p>

                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select end date"
                  minDate={startDate}
                  className="w-full border rounded-lg px-3 py-2"
                />

              </div>


              <button
                type="submit"
                className="w-full bg-silver text-black py-2 rounded-lg hover:opacity-90 transition"
              >
                Create Project
              </button>

            </form>

          </div>

        </div>

      )}

    </div>

  )

}