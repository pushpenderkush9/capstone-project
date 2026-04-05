import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { ThemeProvider } from "./context/ThemeContext"
import { WorkspaceProvider } from "./context/WorkspaceContext"

ReactDOM.createRoot(document.getElementById("root")).render(

<ThemeProvider>

<WorkspaceProvider>

<App />

</WorkspaceProvider>

</ThemeProvider>

)