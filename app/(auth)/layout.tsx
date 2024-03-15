import Header from '@/components/shared/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  ">
      <Header />
      <main className="flex justify-center items-center w-screen h-screen">
        {children}
      </main>
    </div>
  )
}
export default Layout
