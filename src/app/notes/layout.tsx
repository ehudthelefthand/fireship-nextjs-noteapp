import Link from "next/link"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto max-w-screen-lg mt-4">
      <nav className="space-x-3">
        <Link href={`/`} className="text-xl hover:text-orange-500 transition-colors duration-300 text-yellow-500 font-bold">Home</Link>
        <Link href={`/notes`} className="text-xl hover:text-orange-500 transition-colors duration-300 text-yellow-500 font-bold">Notes</Link>
      </nav>
      <div className="mt-2">{children}</div>
    </div>
  )
}