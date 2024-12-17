import { Outlet } from "react-router"
import DashboardSidebar from "../../../components/DashboardSidebar/DashboardSidebar"
import { Toaster } from "react-hot-toast"

 

const DashboardLayour = () => {
  return (
<div className="flex h-screen">
<Toaster/>
      {/* Sidebar Section */}
      <section className="w-52 bg-red-300 fixed top-0 left-0 h-full">
        <DashboardSidebar />
      </section>

      {/* Main Content Section */}
      <section className="ml-52 w-full h-full overflow-y-scroll">
        <Outlet />
      </section>
    </div>
  )
}

export default DashboardLayour