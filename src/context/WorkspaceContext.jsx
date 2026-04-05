import { createContext, useContext, useState } from "react"

const WorkspaceContext = createContext()

export const WorkspaceProvider = ({ children }) => {

const [workspace,setWorkspace] = useState(null)

/*
workspace example

{
 type: "personal"
}

or

{
 type: "team",
 teamId: 1
}
*/

return(

<WorkspaceContext.Provider value={{workspace,setWorkspace}}>

{children}

</WorkspaceContext.Provider>

)

}

export const useWorkspace = () => useContext(WorkspaceContext)