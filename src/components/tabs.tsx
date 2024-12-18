// import { Tabs } from "@nextui-org/react"

import { Tabs, Tab } from "@nextui-org/react"
// import Dashboard from '../pages/Dashboard';

function DashBoardTabs() {
  const sizes = ["sm", "md", "lg"]

  return (
    <div className="flex flex-wrap gap-4">
      
        <Tabs key={sizes[2]} aria-label="Tabs sizes" size={sizes[2]}>
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      
    </div>
  )
}

export default DashBoardTabs
