import { useState } from "react"
import { Send } from "lucide-react"

export default function CommentsTab(){

/* Fake current user */

const currentUser = "Rahul"

/* Comments */

const [comments,setComments] = useState([
{
id:1,
author:"Anita",
text:"We should improve UI for checkout",
time:new Date().toLocaleString()
}
])

const [newComment,setNewComment] = useState("")


const addComment = () => {

if(!newComment.trim()) return

setComments([
...comments,
{
id:Date.now(),
author:currentUser,
text:newComment,
time:new Date().toLocaleString()
}
])

setNewComment("")

}


return(

<div className="bg-white dark:bg-darkcard rounded-xl p-6 shadow">

<h2 className="text-xl font-semibold mb-6">
Comments
</h2>


{/* Comment List */}

<div className="space-y-6 mb-6">

{comments.map(comment=>(

<div key={comment.id} className="flex gap-4">

{/* Avatar */}

<div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold">

{comment.author[0]}

</div>


{/* Comment Content */}

<div className="flex-1">

<div className="flex items-center gap-3 mb-1">

<span className="font-semibold">
{comment.author}
</span>

<span className="text-xs text-gray-400">
{comment.time}
</span>

</div>

<div className="p-3 rounded-lg border bg-gray-50 dark:bg-darkbg">

{comment.text}

</div>

</div>

</div>

))}

</div>


{/* Comment Input */}

<div className="flex gap-3 items-center">

<input
value={newComment}
onChange={(e)=>setNewComment(e.target.value)}
placeholder="Write a comment..."
className="flex-1 border rounded-lg px-4 py-2 bg-white dark:bg-darkbg"
/>

<button
onClick={addComment}
className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
>

<Send size={16}/>
Send

</button>

</div>

</div>

)

}