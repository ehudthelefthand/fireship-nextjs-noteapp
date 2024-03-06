import Link from "next/link"
import CreateNote from "./CreateNote"

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records', { cache: 'no-store' })
  const data = await res.json()
  return data.items as any[]
}

export default async function NotesPage() {
  const notes = await getNotes()
  return (
    <div>
      <h1 className="text-2xl my-2 font-semibold text-emerald-400">Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        { notes.map(note => (<Note key={note.id} note={note} />)) }
      </div>
      <div className="flex justify-center mt-4">
        <CreateNote />
      </div>
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}
  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-emerald-500 shadow-md shadow-emerald-200 p-2">
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{new Date(created).toString()}</p>
      </div>
    </Link>
  )
}