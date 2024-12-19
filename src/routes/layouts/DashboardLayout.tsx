import { Outlet } from "react-router-dom";
// import { BellIcon } from "lucide-react";
// import { Button } from "@nextui-org/button";
import react,{useState} from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/redesigned-components/components/navbars/AppSidebar";
// import SearchModal from "@/components/SearchModal";
import ShinyButton from "@/components/ShinyButton"

const DashboardLayout = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen)
   }
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        {isSidebarOpen && <AppSidebar />}

        <main className="w-full">
          <div className="flex items-center w-full gap-4 p-2 py-4 shadow-sm">
            <SidebarTrigger
              className="p-0 "
              onClick={toggleSidebar}
              isOpen={isSidebarOpen}
            />
            <div className="flex items-center justify-between w-full">
              <h2 className="hidden text-2xl font-bold md:block">
                My Dashboard
              </h2>
              <div className="flex items-center gap-3 ml-auto">
                {/* <SearchModal /> */}
                {/* <Button
                  isIconOnly
                  className="rounded-full bg-slate-100 hover:bg-slate-200 size-10"
                >
                  <BellIcon color="black" />
                </Button> */}
                {/* <Button
                  asChild
                  className="flex items-center justify-center font-bold bg-blue-700 hover:bg-blue-400"
                > */}
                {/* <NavLink to={"/select"}>
                    <PlusCircle />
                    Create New
                  </NavLink> */}
                {/* </Button> */}


                {/* <ShinyButton className="h-10 bg-button-gpt" href="/select">
                  Create New
                </ShinyButton> */}
                
              </div>
            </div>
          </div>
          <div className="p-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
};

export default DashboardLayout;