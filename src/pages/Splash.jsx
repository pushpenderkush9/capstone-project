import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Splash(){

const navigate = useNavigate()

const message = "TASK AUTOMATE"
const subtitle = "Smart Task Management System"

const [text,setText] = useState("")
const [subText,setSubText] = useState("")

// typing main title
useEffect(()=>{

let i = 0

const typing = setInterval(()=>{

setText(message.slice(0,i))
i++

if(i > message.length){
clearInterval(typing)
}

},120)

return ()=> clearInterval(typing)

},[])


// typing subtitle
useEffect(()=>{

setTimeout(()=>{

let j = 0

const typing2 = setInterval(()=>{

setSubText(subtitle.slice(0,j))
j++

if(j > subtitle.length){
clearInterval(typing2)
}

},60)

},1500)

},[])


// redirect after 5 sec
useEffect(()=>{

setTimeout(()=>{
navigate("/login")
},5000)

},[navigate])

return(

<div className="h-screen flex flex-col items-center justify-center
bg-white dark:bg-darkbg">

{/* Main Title */}

<h1 className="text-6xl md:text-7xl font-bold tracking-wide
text-gray-900 dark:text-white">

{text}
<span className="animate-pulse">|</span>

</h1>

{/* Subtitle */}

<p className="mt-6 text-xl text-gray-500 dark:text-gray-400">

{subText}

</p>

{/* Loading Dots */}

<div className="flex gap-2 mt-8">

<span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></span>
<span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></span>
<span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></span>

</div>

</div>

)

}