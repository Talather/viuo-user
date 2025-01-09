import PropTypes from "prop-types";
import { AiFillFund, AiOutlineFund } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "./mainCard";
import TotalIncomeCard from "./totalOrderLineChartCard/totalIncomeSkeleton";
import { Tooltip } from "@nextui-org/react";
// assets
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //
import { NavLink } from "react-router-dom";

const TotalIncomeLightCard = ({ isLoading, user, buttons = true }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%", // Full-width container for proper spacing
                  }}
                >
                  {/* Left Content: Amount and Label */}

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          backgroundColor: theme.palette.warning.light,
                          color: theme.palette.warning.dark,
                        }}
                      >
                        <StorefrontTwoToneIcon fontSize="inherit" />
                      </Avatar>
                    </div>
                    <div>
                      <Typography variant="h4">
                        {user?.availableCredits?.toString().includes(".")
                          ? user.availableCredits
                          : `${user?.availableCredits}.00`}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.grey[500],
                          mt: 0.5,
                        }}
                      >
                        Available Credits
                      </Typography>
                    </div>
                  </Box>

                  {/* Right Content: Icon */}
                  {buttons && (
                    <div>
                      <Tooltip content="Add Credit">
                        <NavLink to="/transaction/credit/add">
                          <Avatar
                            variant="rounded"
                            sx={{
                              backgroundColor: "transparent",
                              color: "black",
                              marginBottom: "3px",
                            }}
                          >
                            {/* <AiFillFund size={30} /> */}
                            <GrTransaction size={25} />
                          </Avatar>
                        </NavLink>
                      </Tooltip>

                      <Tooltip content="Send Credit" placement="bottom">
                        {/* <a href="/transaction/credit/send"> */}
                        <NavLink to="/transaction/credit/send">
                          <Avatar
                            variant="rounded"
                            sx={{
                              backgroundColor: "transparent",
                              color: "black",
                            }}
                          >
                            {/* <AiOutlineFund  size={30}/> */}
                            <GrTransaction size={25} />
                          </Avatar>
                          {/* </a> */}
                        </NavLink>
                      </Tooltip>
                    </div>
                  )}
                </Box>
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalIncomeLightCard.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  buttons: PropTypes.boolean,
};

export default TotalIncomeLightCard;
