import CreateCard from "@/components/cards/cards"
import DashBoardTabs from "@/components/tabs"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const { user } = useAuth()
  console.log("currentUser-->", user)
  const navigate = useNavigate()

  return (
    <div className="px-4">
      <div className="flex flex-col items-start justify-between w-full gap-2 mt-3 md:flex-row">
        <div className="w-[290px]">
          <h2 className="text-2xl font-bold">Hey, {user?.email}!</h2>
          <p className="mt-2 text-gray-500">What do you want to create.</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row justify-evenly">
          <CreateCard
            handleClick={() => navigate("/select")}
            title="Resume"
            subTitle="Better resume builder"
          />
        </div>
      </div>
      <DashBoardTabs />
    </div>
  )
}

export default Dashboard
