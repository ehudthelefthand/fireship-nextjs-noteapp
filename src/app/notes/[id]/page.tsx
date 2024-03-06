async function getNote(noteId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`)
  const data = await res.json()
  return data
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)
  const { collectionId, title, content, created } = note
  return (
    <div className="bg-emerald-500 shadow-md shadow-emerald-200 p-2">
      <h1>Note: {collectionId}</h1>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{new Date(created).toString()}</p>
    </div>
  )
}