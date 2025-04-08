import CurrencyFormat from "react-currency-format";

import PropTypes from "prop-types";
import { useState, useMemo } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// third-party
import Chart from "react-apexcharts";

// project imports
import MainCard from "../mainCard";
import SkeletonTotalOrderCard from "../earningCard/skeletonEarningCard";

import ChartDataMonth from "../chart-data/total-order-month-line-chart";
import ChartDataYear from "../chart-data/total-order-year-line-chart";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: "#39b996",
  // theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&>div": {
    position: "relative",
    zIndex: 5,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading, stats }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(true);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };
  const chartDataMonth = useMemo(() => {
    return {
      type: "line",
      height: 90,
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#fff"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        yaxis: {
          min: 0,
          max: 100,
        },

        tooltip: {
          theme: "dark",
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: "Total Order",
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Savings",
          data: stats?.savingsHistory,
        },
      ],
    };
  }, [stats]);
  const chartDataYear = useMemo(() => {
    return {
      type: "line",
      height: 90,
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#fff"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        yaxis: {
          min: 0,
          max: 100,
        },
        tooltip: {
          theme: "dark",
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: "Total Order",
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Savings",
          data: stats?.yearlySavings,
        },
      ],
    };
  }, [stats]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: "#fff",
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? "contained" : "text"}
                      size="small"
                      sx={{
                        color: "inherit",
                        backgroundColor: timeValue ? "#095c46" : null,
                      }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? "contained" : "text"}
                      size="small"
                      sx={{
                        color: "inherit",
                        backgroundColor: !timeValue ? "#095c46" : null,
                      }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            <CurrencyFormat
                              value={`${
                                stats?.totalSavingsThisMonth
                                  ?.toString()
                                  .includes(".")
                                  ? stats.totalSavingsThisMonth.toLocaleString(
                                      undefined,
                                      {
                                        maximumFractionDigits: 2,
                                      }
                                    )
                                  : stats?.totalSavingsThisMonth
                                  ? `${stats?.totalSavingsThisMonth}.00`
                                  : `${0}.00`
                              }`}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            <CurrencyFormat
                              value={`${
                                stats?.totalSavingsThisYear
                                  ?.toString()
                                  .includes(".")
                                  ? stats.totalSavingsThisYear.toLocaleString(
                                      undefined,
                                      {
                                        maximumFractionDigits: 2,
                                      }
                                    )
                                  : stats?.totalSavingsThisYear
                                  ? `${stats?.totalSavingsThisYear}.00`
                                  : `${0}.00`
                              }`}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: theme.palette.primary[200],
                          }}
                        >
                          Total Savings
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? (
                      <Chart {...chartDataMonth} />
                    ) : (
                      <Chart {...chartDataYear} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;
