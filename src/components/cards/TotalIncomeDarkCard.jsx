// import PropTypes from 'prop-types';

// // material-ui
// import { styled, useTheme } from '@mui/material/styles';
// import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// // project imports
// import MainCard from './mainCard';
// import TotalIncomeCard from './totalOrderLineChartCard/totalIncomeSkeleton';

// // assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//     backgroundColor: theme.palette.primary.dark,
//     color: theme.palette.primary.light,
//     overflow: 'hidden',
//     position: 'relative',
//     '&:after': {
//         content: '""',
//         position: 'absolute',
//         width: 210,
//         height: 210,
//         background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//         borderRadius: '50%',
//         top: -30,
//         right: -180
//     },
//     '&:before': {
//         content: '""',
//         position: 'absolute',
//         width: 210,
//         height: 210,
//         background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//         borderRadius: '50%',
//         top: -160,
//         right: -130
//     }
// }));

// // ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

// const TotalIncomeDarkCard = ({ isLoading }) => {
//     const theme = useTheme();

//     return (
//         <>
//             {isLoading ? (
//                 <TotalIncomeCard />
//             ) : (
//                 <CardWrapper border={false} content={false}>
//                     <Box sx={{ p: 2 }}>
//                         <List sx={{ py: 0 }}>
//                             <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
//                                 <ListItemAvatar>
//                                     <Avatar
//                                         variant="rounded"
//                                         sx={{
//                                             ...theme.typography.commonAvatar,
//                                             ...theme.typography.largeAvatar,
//                                             backgroundColor: theme.palette.primary[800],
//                                             color: '#fff'
//                                         }}
//                                     >
//                                         <TableChartOutlinedIcon fontSize="inherit" />
//                                     </Avatar>
//                                 </ListItemAvatar>
//                                 <ListItemText
//                                     sx={{
//                                         py: 0,
//                                         mt: 0.45,
//                                         mb: 0.45
//                                     }}
//                                     primary={
//                                         <Typography variant="h4" sx={{ color: '#fff' }}>
//                                             $203k
//                                         </Typography>
//                                     }
//                                     secondary={
//                                         <Typography variant="subtitle2" sx={{ color: 'white', mt: 0.25 }}>
//                                             Total Bill Payment
//                                         </Typography>
//                                     }
//                                 />
//                             </ListItem>
//                         </List>
//                     </Box>
//                 </CardWrapper>
//             )}
//         </>
//     );
// };

// TotalIncomeDarkCard.propTypes = {
//     isLoading: PropTypes.bool
// };

// export default TotalIncomeDarkCard;





















import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { useTheme, styled } from '@mui/material/styles'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'

// third-party
import Chart from 'react-apexcharts'

// project imports
import MainCard from './mainCard'
import SkeletonTotalOrderCard from './earningCard/skeletonEarningCard'

import ChartDataMonth from './chart-data/total-order-month-line-chart'
import ChartDataYear from './chart-data/total-order-year-line-chart'

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor:'red',
        // '#ff2c2c',
  // theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}))

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme()

  const [timeValue, setTimeValue] = useState(false)
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue)
  }

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction='column'>
              <Grid item>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                    <Avatar
                      variant='rounded'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                          backgroundColor:'black',
                            //   theme.palette.primary[800],
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize='inherit'  />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? 'contained' : 'text'}
                      size='small'
                      sx={{
                        color: 'inherit',
                        backgroundColor: timeValue ? 'black' : null
                      }}
                      onClick={e => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? 'contained' : 'text'}
                      size='small'
                      sx={{
                        color: 'inherit',
                        backgroundColor: !timeValue ? 'black' : null
                      }}
                      onClick={e => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems='center'>
                  <Grid item xs={6}>
                    <Grid container alignItems='center'>
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: '2.125rem',
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75
                            }}
                          >
                            $108.00
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: '2.125rem',
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75
                            }}
                          >
                            $250.00
                          </Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            ...theme.typography.smallAvatar,
                            cursor: 'pointer',
                                                          backgroundColor:'black',
                                                            //   theme.palette.primary[200],
                            color: theme.palette.primary.dark
                          }}
                        >
                          <ArrowDownwardIcon
                                                          fontSize='inherit'
                                                          
                            sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' ,color: 'white'
}}
                          />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
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
  )
}

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
}

export default TotalOrderLineChartCard
