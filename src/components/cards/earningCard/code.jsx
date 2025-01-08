// import PropTypes from "prop-types"
// import { useState } from "react"

// // material-ui
// import { styled, useTheme } from "@mui/material/styles"
// import { Avatar, Box, Grid, Menu, MenuItem, Typography } from "@mui/material"

// // project imports
// import MainCard from "../mainCard"
// import SkeletonEarningCard from "./skeletonEarningCard"

// // assets
// import EarningIcon from "@/assets/images/icons/earning.svg"
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
// import GetAppTwoToneIcon from "@mui/icons-material/GetAppOutlined"
// import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyOutlined"
// import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfOutlined"
// import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveOutlined"

// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: '#39b996',
//   color: "#fff",
//   overflow: "hidden",
//   position: "relative",
//   "&:after": {
//     content: '""',
//     position: "absolute",
//     width: 210,
//     height: 210,
//     background:
//       theme.palette.secondary[800],
//     borderRadius: "50%",
//     top: -85,
//     right: -95,
//     [theme.breakpoints.down("sm")]: {
//       top: -105,
//       right: -140,
//     },
//   },
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     width: 210,
//     height: 210,
//     background: theme.palette.secondary[800],
//     borderRadius: "50%",
//     top: -125,
//     right: -15,
//     opacity: 0.5,
//     [theme.breakpoints.down("sm")]: {
//       top: -155,
//       right: -70,
//     },
//   },
// }))

// // ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

// const EarningCard = ({ isLoading }) => {
//   const theme = useTheme()

//   const [anchorEl, setAnchorEl] = useState(null)

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <>
//       {isLoading ? (
//         <SkeletonEarningCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2.25 }}>
//             <Grid container direction="column">
//               <Grid item>
//                 <Grid container justifyContent="space-between">
//                   <Grid item>
//                     <Avatar
//                       variant="rounded"
//                       sx={{
//                         ...theme.typography.commonAvatar,
//                         ...theme.typography.largeAvatar,
//                         backgroundColor:'#39b996',
//                           // theme.palette.secondary[800],
//                         mt: 1,
//                       }}
//                     >
//                       <img src={EarningIcon} alt="Notification" />
//                     </Avatar>
//                   </Grid>
//                   <Grid item>
//                     <Avatar
//                       variant="rounded"
//                       sx={{
//                         ...theme.typography.commonAvatar,
//                         ...theme.typography.mediumAvatar,
//                         backgroundColor:'#39b996',
//                           // theme.palette.secondary.dark,
//                         color: theme.palette.secondary[200],
//                         zIndex: 1,
//                       }}
//                       aria-controls="menu-earning-card"
//                       aria-haspopup="true"
//                       onClick={handleClick}
//                     >
//                       <MoreHorizIcon fontSize="inherit" />
//                     </Avatar>
//                     <Menu
//                       id="menu-earning-card"
//                       anchorEl={anchorEl}
//                       keepMounted
//                       open={Boolean(anchorEl)}
//                       onClose={handleClose}
//                       variant="selectedMenu"
//                       anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "right",
//                       }}
//                       transformOrigin={{
//                         vertical: "top",
//                         horizontal: "right",
//                       }}
//                     >
//                       <MenuItem onClick={handleClose}>
//                         <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
//                       </MenuItem>
//                       <MenuItem onClick={handleClose}>
//                         <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
//                       </MenuItem>
//                       <MenuItem onClick={handleClose}>
//                         <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
//                       </MenuItem>
//                       <MenuItem onClick={handleClose}>
//                         <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
//                       </MenuItem>
//                     </Menu>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid item>
//                 <Grid container alignItems="center">
//                   <Grid item>
//                     <Typography
//                       sx={{
//                         fontSize: "2.125rem",
//                         fontWeight: 500,
//                         mr: 1,
//                         mt: 1.75,
//                         mb: 0.75,
//                       }}
//                     >
//                       $500.00
//                     </Typography>
//                   </Grid>
//                   <Grid item>
//                     <Avatar
//                       sx={{
//                         cursor: "pointer",
//                         ...theme.typography.smallAvatar,
//                           backgroundColor:'#39b996',
//                             // theme.palette.secondary[200],
//                         color: theme.palette.secondary.dark,
//                       }}
//                     >
//                       <ArrowUpwardIcon
//                         fontSize="inherit"
//                         sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
//                       />
//                     </Avatar>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid item sx={{ mb: 1.25 }}>
//                 <Typography
//                   sx={{
//                     fontSize: "1rem",
//                     fontWeight: 500,
//                     color: theme.palette.secondary[200],
//                   }}
//                 >
//                   Total Savings
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Box>
//         </CardWrapper>
//       )}
//     </>
//   )
// }

// EarningCard.propTypes = {
//   isLoading: PropTypes.bool,
// }

// export default EarningCard

import PropTypes from "prop-types";
import { useState } from "react";

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

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

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
                            $110.00
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
                            $400.00
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
                      <Chart {...ChartDataMonth} />
                    ) : (
                      <Chart {...ChartDataYear} />
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
