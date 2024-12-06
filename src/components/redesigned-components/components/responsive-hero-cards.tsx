import { Card, CardHeader } from "@nextui-org/react";
import { Users, BarChart3, Clock, Zap } from "lucide-react";

export default function ResponsiveHeroCards() {
  return (
    <div className="w-full flex gap-5 flex-col md:flex-row items-end mx-auto p-4 ">
      <Card className="bg-[#1a3b3b] md:hidden xl:block w-full md:w-[300px] h-[300px]  text-white ">
        <CardHeader className="p-6 flex  h-full flex-col items-center justify-center text-center">
          <Zap className="w-8 h-8 mb-2" />
          <div className="text-sm">
            Achieve Optimal Efficiency and Boost Productivity
          </div>
        </CardHeader>
      </Card>
      {/* Clients Card */}
      <Card className="bg-[#1a3b3b] w-full md:w-[200px] lg:w-[300px] h-[250px]  text-white">
        <CardHeader className="p-6 flex  h-full flex-col items-center justify-center text-center">
          <Users className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold">100+</div>
          <div className="text-sm">Our Esteemed Clients and Partners</div>
        </CardHeader>
      </Card>

      {/* Projects Card */}
      <Card className="bg-white  w-full md:w-[220px] xl:w-[420px] h-[200px]">
        <CardHeader className="p-6  h-full flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#e8ffe8] p-2 rounded">
                <BarChart3 className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm">Total Projects</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-2">1951+</div>
          <div className="text-sm text-muted-foreground">
            Increase of <span className="text-green-500">126</span> this month
          </div>
        </CardHeader>
      </Card>

      {/* Years Card */}
      <Card className=" bg-[#1a3b3b] text-white w-full  md:w-[200px] lg:w-[300px] h-[250px]">
        <CardHeader className="p-6 flex flex-col  h-full items-center justify-center text-center">
          <Clock className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold">6+</div>
          <div className="text-sm">Years of Dedicated Service</div>
        </CardHeader>
      </Card>

      {/* Efficiency Card */}
      <Card className="bg-[#1a3b3b] md:hidden xl:block w-full md:w-[300px] h-[300px] text-white ">
        <CardHeader className="p-6 flex  h-full flex-col items-center justify-center text-center">
          <Zap className="w-8 h-8 mb-2" />
          <div className="text-sm">
            Achieve Optimal Efficiency and Boost Productivity
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
