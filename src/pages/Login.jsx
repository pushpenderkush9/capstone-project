import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

// Fake test credentials
const testUser = {
email: "test@task.com",
password: "123456"
}

const handleLogin = (e) => {

e.preventDefault()

if(email === testUser.email && password === testUser.password){

// Fake JWT token simulation
const fakeToken = "fake_jwt_token_123"

localStorage.setItem("token", fakeToken)

// Navigate to workspace selection
navigate("/workspace")

}else{

setError("Invalid email or password")

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

<source src="/login.mp4" type="video/mp4"/>

</video>

</div>


{/* RIGHT SIDE LOGIN FORM */}

<div className="w-[40%] flex items-center justify-center px-14">

<form
onSubmit={handleLogin}
className="w-full max-w-md"
>

<h2 className="text-3xl font-bold mb-6 text-center">

Login

</h2>


{/* Test Credentials */}

<div className="mb-4 p-3 rounded bg-gray-200 dark:bg-darkbg text-sm">

<p><strong>Test Email:</strong> test@task.com</p>
<p><strong>Password:</strong> 123456</p>

</div>


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


{/* Error Message */}

{error && (

<p className="text-red-500 text-sm mb-4">
{error}
</p>

)}


{/* Login Button */}

<button
type="submit"
className="w-full bg-silver text-black p-3 rounded-lg
font-semibold hover:opacity-90 transition"
>

Login

</button>


{/* Register Link */}

<p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">

Don't have an account?

<Link
to="/register"
className="ml-1 text-silver font-semibold hover:underline"
>

Register

</Link>

</p>

</form>

</div>

</div>

</div>

)

}