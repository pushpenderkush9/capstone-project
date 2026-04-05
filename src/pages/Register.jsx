import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerUser } from "../services/authApi"

export default function Register(){

const navigate = useNavigate()

const [userId,setUserId] = useState("")
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")
const [loading,setLoading] = useState(false)

const handleRegister = async (e) => {

 e.preventDefault()

 // Validation
 if(!userId || !name || !email || !password || !confirmPassword){
  alert("Please fill all fields")
  return
 }

 if(password !== confirmPassword){
  alert("Passwords do not match")
  return
 }

 const userData = {
  userId,
  name,
  email,
  password
 }

 try{

  setLoading(true)

  await registerUser(userData)

  alert("Registration Successful")

  navigate("/login")

 }catch(error){

  console.error("Register Error:", error)

  if(error.response?.data?.message){
   alert(error.response.data.message)
  }else{
   alert("Registration failed. Please try again.")
  }

 }finally{
  setLoading(false)
 }

}

return(

<div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-darkbg">

{/* Main Container */}

<div className="w-[1200px] h-[620px] flex rounded-2xl overflow-hidden
shadow-2xl border border-gray-200 dark:border-darkborder
bg-white dark:bg-darkcard">

{/* LEFT SIDE VIDEO */}

<div className="w-[60%] h-full">

<video
autoPlay
loop
muted
playsInline
className="w-full h-full object-cover"
>

<source src="/register.mp4" type="video/mp4"/>

</video>

</div>


{/* RIGHT SIDE REGISTER FORM */}

<div className="w-[40%] flex items-center justify-center px-14">

<form
onSubmit={handleRegister}
className="w-full max-w-md"
>

<h2 className="text-3xl font-bold mb-8 text-center">

Register

</h2>


{/* User ID */}

<input
type="text"
placeholder="User ID"
value={userId}
onChange={(e)=>setUserId(e.target.value)}
className="w-full p-3 mb-4 rounded-lg border
border-gray-300 dark:border-darkborder
bg-white dark:bg-darkbg text-black dark:text-white"
/>


{/* Full Name */}

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 mb-4 rounded-lg border
border-gray-300 dark:border-darkborder
bg-white dark:bg-darkbg text-black dark:text-white"
/>


{/* Email */}

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 mb-4 rounded-lg border
border-gray-300 dark:border-darkborder
bg-white dark:bg-darkbg text-black dark:text-white"
/>


{/* Password */}

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 mb-4 rounded-lg border
border-gray-300 dark:border-darkborder
bg-white dark:bg-darkbg text-black dark:text-white"
/>


{/* Confirm Password */}

<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
className="w-full p-3 mb-6 rounded-lg border
border-gray-300 dark:border-darkborder
bg-white dark:bg-darkbg text-black dark:text-white"
/>


{/* Register Button */}

<button
type="submit"
disabled={loading}
className="w-full bg-silver text-black p-3 rounded-lg
font-semibold hover:opacity-90 transition disabled:opacity-50"
>

{loading ? "Creating Account..." : "Register"}

</button>


{/* Login Link */}

<p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">

Already have an account?

<Link
to="/login"
className="ml-1 text-silver font-semibold hover:underline"
>

Login

</Link>

</p>

</form>

</div>

</div>

</div>

)

}