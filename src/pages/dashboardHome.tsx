/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TotalIncomeDarkCard from "../../src/components/cards/TotalIncomeDarkCard";
import TotalIncomeLightCard from "../../src/components/cards/TotalIncomeLightCard";
import WeeklyChart from "../../src/components/charts/weekly";
import ExpenseChart from "../../src/components/charts/expenseChart";
import EarningCard from "@/components/cards/earningCard/code";
import TotalOrderLineChartCard from "@/components/cards/totalOrderLineChartCard/code";
import { Button } from "@nextui-org/button";
import { useAuth } from "@/hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  console.log(user);
  const [isLoading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly"); // To track selected period (monthly/yearly)




  useEffect(() => {
  // Preload any assets or data
  import('@/pages/creditTransaction')
}, [])

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleButtonClick = (period: any) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="container p-4 mx-auto">
      {/* Cards Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalOrderLineChartCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalIncomeDarkCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalIncomeLightCard isLoading={isLoading} user={user} />
        </Grid>
      </Grid>

      <div className="mt-12">
        {/* Charts Section */}
        <Grid container spacing={4} mt-8>
          <Grid item xs={12} sm={12} md={8}>
            <div className="p-6 bg-white rounded-lg shadow-2xl">
              <h2 className="mb-4 text-lg font-medium text-gray-800">
                Annually Overview
              </h2>
              <WeeklyChart />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-row justify-between ">
                <h2 className="mb-4 text-lg font-medium text-gray-800">
                  Bills Breakdown
                </h2>
                <div className="">
                  <Button
                    className="w-1"
                    size="sm"
                    style={{
                      width: "1px",
                      backgroundColor:
                        selectedPeriod === "monthly" ? "#0287c3" : "",
                      color: selectedPeriod === "monthly" ? "white" : "black",
                    }}
                    variant={selectedPeriod === "monthly" ? "solid" : "light"}
                    onClick={() => handleButtonClick("monthly")}
                  >
                    Monthly
                  </Button>
                  <Button
                    style={{
                      width: "1px",
                      backgroundColor:
                        selectedPeriod === "yearly" ? "#0287c3" : "",
                      color: selectedPeriod === "yearly" ? "white" : "black",
                    }}
                    size="sm"
                    variant={selectedPeriod === "yearly" ? "solid" : "light"}
                    onClick={() => handleButtonClick("yearly")}
                  >
                    Yearly
                  </Button>
                </div>
              </div>
              <div className="h-96">
                <ExpenseChart />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardHome;
