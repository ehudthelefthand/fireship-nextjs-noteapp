'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const create = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })   
    
    setTitle('')
    setContent('')

    router.refresh()
  }

  return (
    <form onSubmit={create} className="space-y-2 mt-4 bg-emerald-100 p-4 rounded w-2/4">
      <h3 className="text-emerald-600 text-lg font-semibold">Create a new note</h3>
      <div>
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="p-1 rounded text-emerald-900 w-full"
        />
      </div>
      <div>
        <textarea 
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="p-1 rounded text-emerald-900 w-full"
        />
      </div>
      <button type="submit" className="bg-emerald-500 rounded p-2 hover:bg-emerald-800 transition-colors">Create Note</button>
    </form>
  )
}