import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <p>Task Manager</p>
        </Link>
        <p>2024 Batik All Right reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
