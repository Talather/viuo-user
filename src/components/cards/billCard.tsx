/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Grid,
  IconButton,
  Stack,
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

// import { Grid, IconButton, Stack, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import EastIcon from "@mui/icons-material/East";
import CurrencyFormat from "react-currency-format";

import { deleteBill } from "@/lib/clientControllers/bills";
import { Button } from "@nextui-org/button";
import { db } from "@/lib/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Colors = [
  "#76D7C4",
  "#48C9B0",
  "#85C1E9",
  "#5DADE2",
  "#BB8FCE",
  "#A569BD",
  "#EB984E",
  "#E67E22",
  "#34495E",
  "#2E4053",
  "#EC7063",
  "#E74C3C",
  "#BDC3C7",
  "#A6ACAF",
  "#16A085",
  "#1ABC9C",
  "#2980B9",
  "#3498DB",
  "#9B59B6",
  "#8E44AD",
];

interface BillCardProps {
  bill?: any;
  cardtype?: string;
  onEdit?: () => void;
  onClick?: () => void;
  onDelete?: () => void;
  indexC?: number;
}

export default function FileRow({ indexC = 1, onClick, bill }: BillCardProps) {
  const [autoPayEnabled, setAutoPayEnabled] = useState(bill?.autoPay || false);
  const [nextPaymentDate, setNextPaymentDate] = useState(
    bill?.nextPaymentDate || false
  );
  console.log(nextPaymentDate);
  console.log(bill?.nextPaymentDate);
  const { user } = useAuth();
  const navigate = useNavigate();

  const dueDateMoment = moment(bill?.dueDate.split("T")[0]).format(
    "YYYY-MM-DD"
  );

  const getPaymentDate = (dueDate: any) => {
    const today = new Date();
    const due = new Date(dueDate);
    if (due < today) {
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    }
    const paymentDate = new Date(due);
    paymentDate.setDate(due.getDate() - 15);
    if (paymentDate < today) {
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    }
    return paymentDate.toISOString().split("T")[0];
  };

  // Enable AutoPay and update Firestore
  const enableAutoPay = async () => {
    try {
      if (!user) return;

      if (!autoPayEnabled) {
        if (!user.defaultPaymentMethod) {
          navigate("/setupAutoPay");
        }
        const billRef = doc(db, "bills", bill.id);
        await updateDoc(billRef, {
          autoPay: true,
          nextPaymentDate: getPaymentDate(bill.dueDate),
          // status: "pending",
        });

        setAutoPayEnabled(true);
      } else {
        const billRef = doc(db, "bills", bill.id);
        await updateDoc(billRef, {
          autoPay: false,
          // nextPaymentDate: getNextMonthDate(),
          // status: "unpaid",
        });

        setAutoPayEnabled(false);
      }
    } catch (error) {
      console.error("Error enabling AutoPay:", error);
      // alert("Failed to enable AutoPay. Try again.");
    }
  };
  const updatePaymentDate = async (date: string) => {
    if (autoPayEnabled) {
      const billRef = doc(db, "bills", bill.id);
      await updateDoc(billRef, {
        autoPay: true,
        nextPaymentDate: date,
      });
    }
  };
  const [isFlipped, setIsFlipped] = useState(false);
  // const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  async function deleteCard() {
    await deleteBill(bill?.id);
  }
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  // Format your due date into YYYY-MM-DD (you can pass a Date or string)
  const formatDate = (date: string | Date) => {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <Grid item sx={{ margin: "1em 1em" }}>
      <div
        className={`Frame1 ${isFlipped ? "flipped" : ""}`}
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="Card1"
          style={{
            width: 315,
            height: 184,
            position: "absolute",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
          }}
        >
          {bill.topPriority === true ? (
            <div
              style={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              <Chip
                label="Top Priority"
                color="primary"
                sx={{
                  "& .MuiChip-label": {
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>
          ) : (
            <div></div>
          )}

          <div
            className="Frame2"
            style={{
              width: 315,
              height: 184,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Card1bg"
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: "absolute",
                background: `linear-gradient(177deg, ${Colors[indexC]} 0%, ${
                  Colors[indexC + 1]
                } 100%)`,
                borderRadius: 30,
              }}
            />
            {/* <img className="Card1bg" style={{width: 315, height: 184, left: 0, top: 0, position: 'absolute'}} src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/card1bgpurple.png?alt=media&token=9769b66a-71ac-480c-904e-4925e6a722f1' />  */}
            <img
              className="Cardlayer"
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: "absolute",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/Frame.png?alt=media&token=81717bd6-32ac-4db5-8e4b-7b62979bf0b8"
            />
          </div>
          <div
            className="lendername"
            style={{
              // backgroundColor: "red",
              width: 205,
              height: 13,
              left: 30,
              top: 20,
              position: "absolute",
              color: "white",
              fontSize: 26,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            {bill?.name || ""}
          </div>

          <div
            className="Date"
            style={{
              width: 86,
              height: 13,
              left: 195,
              top: 146,
              position: "absolute",
              opacity: 0.9,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              letterSpacing: 0.5,
              wordWrap: "break-word",
            }}
          >
            {moment(dueDateMoment).format("MM-DD-YYYY")}
          </div>
          <div
            className="DueLabel"
            style={{
              width: 115,
              height: 13,
              left: 195,
              top: 124,
              position: "absolute",
              opacity: 0.75,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Due Date
          </div>

          <div
            className="Date"
            style={{
              width: 86,
              height: 13,
              left: 110,
              top: 146,
              position: "absolute",
              opacity: 0.9,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              letterSpacing: 0.5,
              wordWrap: "break-word",
            }}
          >
            {bill?.status}
          </div>
          {bill.autoPay === true && (
            <div
              className="Date"
              style={{
                width: 86,
                height: 13,
                left: 30,
                top: 80,
                position: "absolute",
                opacity: 0.9,
                color: "white",
                fontSize: 14,
                fontFamily: "Rubik",
                fontWeight: "500",
                letterSpacing: 0.5,
                wordWrap: "break-word",
              }}
            >
              AutoPay
            </div>
          )}
          {bill.autoPay === true && bill.nextPaymentDate && (
            <div
              className="Date"
              style={{
                width: 300,
                height: 13,
                left: 100,
                top: 80,
                position: "absolute",
                opacity: 0.9,
                color: "white",
                fontSize: 14,
                fontFamily: "Rubik",
                fontWeight: "500",
                letterSpacing: 0.5,
                wordWrap: "break-word",
              }}
            >
              NextPaymentDate:
              {moment(bill.nextPaymentDate).format("MM-DD-YYYY")}
            </div>
          )}

          <div
            className="DueLabel"
            style={{
              width: 115,
              height: 13,
              left: 110,
              top: 124,
              position: "absolute",
              opacity: 0.75,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Status
          </div>

          <div
            className="Apr"
            style={{
              width: 86,
              height: 13,
              left: 30,
              top: 146,
              position: "absolute",
              opacity: 0.9,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              letterSpacing: 0.5,
              wordWrap: "break-word",
            }}
          >
            <CurrencyFormat
              value={`${bill?.amount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}`}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div
            className="AprLabel"
            style={{
              width: 115,
              height: 13,
              left: 30,
              top: 124,
              position: "absolute",
              opacity: 0.75,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Amount
          </div>

          <div
            className="Balance"
            style={{
              width: 145,
              height: 26,
              left: 30,
              top: 72,
              position: "absolute",
              color: "white",
              fontSize: 28,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          ></div>

          <div
            className="flipbutton"
            style={{
              // width: 75,
              // height: 75,
              right: 5,
              top: 65,
              position: "absolute",
            }}
          >
            {/* <IconButton aria-label="flip" color="primary" onClick={handleFlip}>
              <EastIcon />
            </IconButton> */}
          </div>

          <div
            className="editbuttons"
            style={{
              width: 20,
              height: 40,
              right: 30,
              top: 10,
              position: "absolute",
            }}
          >
            <Stack direction="row">
              {/* <IconButton
                aria-label="edit"
                color="primary"
                //   onClick={props.onEdit}
              > */}
              {/* <EditIcon /> */}
              {/* </IconButton> */}
              <div className="">
                <IconButton
                  aria-label="delete"
                  color="primary"
                  size="large"
                  onClick={deleteCard}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Stack>
          </div>
        </div>

        {/* back side of the card */}
        <div
          className="Card2"
          style={{
            width: 315,
            height: 184,
            position: "relative",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="Frame2"
            style={{
              width: 315,
              height: 184,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Card2bg"
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: "absolute",
                background: `linear-gradient(177deg, ${Colors[indexC]} 0%, ${
                  Colors[indexC + 1]
                } 100%)`,
                borderRadius: 30,
              }}
            />
            {/* <img className="Card1bg" style={{width: 315, height: 184, left: 0, top: 0, position: 'absolute'}} src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/card1bgpurple.png?alt=media&token=9769b66a-71ac-480c-904e-4925e6a722f1' />  */}
            <img
              className="Cardlayer"
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: "absolute",
                transform: "rotateY(180deg)",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/Frame.png?alt=media&token=81717bd6-32ac-4db5-8e4b-7b62979bf0b8"
            />
          </div>
          <div
            className="lendername"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              color: "white",
              fontSize: 30,
              fontFamily: "Rubik",
              fontWeight: "1000",
              wordWrap: "break-word",
            }}
          >
            {/* RadioGroup Display */}

            {autoPayEnabled ? (
              <>
                {/* Date Picker for Next Payment Date */}
                {bill?.status === "unpaid" && (
                  <>
                    <label className="text-white text-lg mt-4 mb-2">
                      Select Next Payment Date
                    </label>
                    <input
                      type="date"
                      value={nextPaymentDate}
                      onChange={(e) => {
                        setNextPaymentDate(e.target.value);
                        updatePaymentDate(e.target.value);
                      }}
                      className="p-1 rounded-md text-black w-[70%] h-10 font-normal text-[1rem]"
                      min={getTomorrowDate()} // tomorrow
                      max={formatDate(bill?.dueDate)} // bill's due date
                    />
                  </>
                )}
                {/* Disable AutoPay Button */}
                <Button
                  onPress={enableAutoPay}
                  className="bg-red-500 text-white p-3 shadow-lg rounded-md mt-4"
                >
                  Disable AutoPay
                </Button>
              </>
            ) : (
              <>
                <RadioGroup value={autoPayEnabled ? "enabled" : "disabled"}>
                  <FormControlLabel
                    value="enabled"
                    control={<Radio disabled />}
                    label="AutoPay Enabled"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio disabled />}
                    label="AutoPay Disabled"
                  />
                </RadioGroup>
                <Button
                  onPress={enableAutoPay}
                  className="bg-button-gpt text-white p-3 shadow-lg rounded-md mt-4"
                >
                  Enable AutoPay
                </Button>
              </>
            )}
          </div>

          <div
            style={{
              width: 155,
              height: 144,
              left: 270,
              // right:,
              top: 70,
              position: "absolute",
              color: "white",
              fontSize: 30,
              fontFamily: "Rubik",
              fontWeight: "1000",
              wordWrap: "break-word",
              // backgroundColor:'red'
            }}
          >
            <IconButton aria-label="flip" color="primary" onClick={handleFlip}>
              <EastIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Grid>
  );
}
