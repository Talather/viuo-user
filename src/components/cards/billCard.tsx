import { useEffect, useState } from 'react'
import { Grid, IconButton, Stack, Chip } from '@mui/material'
// import { useRouter } from "next/router";
import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit'
// import { format } from "date-fns";
import EastIcon from '@mui/icons-material/East'
import { deleteBill } from '@/lib/clientControllers/bills'
import { useNavigate } from 'react-router-dom'
// import { on } from "events";
// import * as moment from "moment/moment";

const Colors = [
  '#76D7C4',
  '#48C9B0',
  '#85C1E9',
  '#5DADE2',
  '#BB8FCE',
  '#A569BD',
  '#EB984E',
  '#E67E22',
  '#34495E',
  '#2E4053',
  '#EC7063',
  '#E74C3C',
  '#BDC3C7',
  '#A6ACAF',
  '#16A085',
  '#1ABC9C',
  '#2980B9',
  '#3498DB',
  '#9B59B6',
  '#8E44AD'
]

// interface Bill {
//   billName: string;
//   amountDue: string;
//   dueDate: string;
//   priority?: boolean;
// }

interface BillCardProps {
  bill?: any
  cardtype?: string
  onEdit?: () => void
  onClick?: () => void
  onDelete?: () => void
  indexC?: number
}

export default function FileRow ({ indexC = 1, onClick, bill }: BillCardProps) {
  useEffect(() => {}, [])

  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  async function deleteCard () {
    await deleteBill(bill?.id)
    navigate('/bills')
    window.location.reload()

  }
  console.log('chytr', bill)
  useEffect(() => {
    // if (props.cardtype === "milestonecard") {
    //   setIsFlipped(true);
    // } else if (props.cardtype === "prioritycard") {
    //   setIsFlipped(false);
    // } else {
    //   setIsFlipped(false);
    // }
  }, [])

  return (
    <Grid item sx={{ margin: '1em 1em' }}>
      <div
        className={`Frame1 ${isFlipped ? 'flipped' : ''}`}
        onClick={onClick}
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 10,
          display: 'inline-flex',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div
          className='Card1'
          style={{
            width: 315,
            height: 184,
            position: 'absolute',
            top: 0,
            left: 0,
            backfaceVisibility: 'hidden'
          }}
        >
          {bill.topPriority === true ? (
            <div
              style={{
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}
            >
              <Chip
                label='Top Priority'
                color='primary'
                sx={{
                  '& .MuiChip-label': {
                    color: 'white',
                    fontWeight: 'bold'
                  }
                }}
              />
            </div>
          ) : (
            <div></div>
          )}

          <div
            className='Frame2'
            style={{
              width: 315,
              height: 184,
              left: 0,
              top: 0,
              position: 'absolute'
            }}
          >
            <div
              className='Card1bg'
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: 'absolute',
                background: `linear-gradient(177deg, ${Colors[indexC]} 0%, ${
                  Colors[indexC + 1]
                } 100%)`,
                borderRadius: 30
              }}
            />
            {/* <img className="Card1bg" style={{width: 315, height: 184, left: 0, top: 0, position: 'absolute'}} src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/card1bgpurple.png?alt=media&token=9769b66a-71ac-480c-904e-4925e6a722f1' />  */}
            <img
              className='Cardlayer'
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: 'absolute'
              }}
              src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/Frame.png?alt=media&token=81717bd6-32ac-4db5-8e4b-7b62979bf0b8'
            />
          </div>
          <div
            className='lendername'
            style={{
              // backgroundColor: "red",
              width: 205,
              height: 13,
              left: 30,
              top: 20,
              position: 'absolute',
              color: 'white',
              fontSize: 26,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            {bill?.name || ''}
          </div>
          <div
            className='Date'
            style={{
              width: 86,
              height: 13,
              left: 195,
              top: 146,
              position: 'absolute',
              opacity: 0.9,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              letterSpacing: 0.5,
              wordWrap: 'break-word'
            }}
          >
            {bill?.due_date}
          </div>
          <div
            className='DueLabel'
            style={{
              width: 115,
              height: 13,
              left: 195,
              top: 124,
              position: 'absolute',
              opacity: 0.75,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            Due Date
          </div>
          <div
            className='Apr'
            style={{
              width: 86,
              height: 13,
              left: 30,
              top: 146,
              position: 'absolute',
              opacity: 0.9,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              letterSpacing: 0.5,
              wordWrap: 'break-word'
            }}
          >
            {bill?.amount || ''}
          </div>
          <div
            className='AprLabel'
            style={{
              width: 115,
              height: 13,
              left: 30,
              top: 124,
              position: 'absolute',
              opacity: 0.75,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            Amount
          </div>

          <div
            className='minpay'
            style={{
              width: 86,
              height: 13,
              left: 90,
              top: 146,
              position: 'absolute',
              opacity: 0.9,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              letterSpacing: 0.5,
              wordWrap: 'break-word'
            }}
          >
            {/* <NumericFormat
              value={parseFloat(file.minpay).toFixed(0)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            /> */}
            {bill?.status || ''}
          </div>
          <div
            className='minLabel'
            style={{
              width: 115,
              height: 13,
              left: 90,
              top: 124,
              position: 'absolute',
              opacity: 0.75,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            Status
          </div>

          <div
            className='Balance'
            style={{
              width: 145,
              height: 26,
              left: 30,
              top: 72,
              position: 'absolute',
              color: 'white',
              fontSize: 28,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            {/* <NumericFormat
              value={parseFloat(file.amount).toFixed(0)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            /> */}
          </div>
          {/* <div
            className="CurrentBalance"
            style={{
              width: 126,
              height: 13,
              left: 30,
              top: 50,
              position: "absolute",
              opacity: 0.75,
              color: "white",
              fontSize: 14,
              fontFamily: "Rubik",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Current Balance
          </div> */}

          <div
            className='flipbutton'
            style={{
              // width: 75,
              // height: 75,
              right: 5,
              top: 65,
              position: 'absolute'
            }}
          >
            <IconButton aria-label='flip' color='primary' onClick={handleFlip}>
              <EastIcon />
            </IconButton>
          </div>

          <div
            className='editbuttons'
            style={{
              width: 20,
              height: 40,
              right: 30,
              top: 10,
              position: 'absolute'
            }}
          >
            <Stack direction='row'>
              {/* <IconButton
                aria-label="edit"
                color="primary"
                //   onClick={props.onEdit}
              > */}
              {/* <EditIcon /> */}
              {/* </IconButton> */}
              <div className=''>
                <IconButton
                  aria-label='delete'
                  color='primary'
                  size='large'
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
          className='Card2'
          style={{
            width: 315,
            height: 184,
            position: 'relative',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div
            className='Frame2'
            style={{
              width: 315,
              height: 184,
              left: 0,
              top: 0,
              position: 'absolute'
            }}
          >
            <div
              className='Card2bg'
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: 'absolute',
                background: `linear-gradient(177deg, ${Colors[indexC]} 0%, ${
                  Colors[indexC + 1]
                } 100%)`,
                borderRadius: 30
              }}
            />
            {/* <img className="Card1bg" style={{width: 315, height: 184, left: 0, top: 0, position: 'absolute'}} src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/card1bgpurple.png?alt=media&token=9769b66a-71ac-480c-904e-4925e6a722f1' />  */}
            <img
              className='Cardlayer'
              style={{
                width: 315,
                height: 188,
                left: 0,
                top: 0,
                position: 'absolute',
                transform: 'rotateY(180deg)'
              }}
              src='https://firebasestorage.googleapis.com/v0/b/payoff-genius-app-8deb5/o/Frame.png?alt=media&token=81717bd6-32ac-4db5-8e4b-7b62979bf0b8'
            />
          </div>
          <div
            className='lendername'
            style={{
              width: 155,
              height: 13,
              left: 30,
              top: 14,
              position: 'absolute',
              color: 'white',
              fontSize: 16,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            Sadeem
          </div>

          <div
            className='chartlabel'
            style={{
              width: 86,
              height: 13,
              left: 198,
              top: 37,
              position: 'absolute',
              opacity: 0.9,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              letterSpacing: 0.5,
              wordWrap: 'break-word',
              textAlign: 'center'
            }}
          >
            {(12.43).toFixed(0)}% <br /> Paid{' '}
          </div>
          <div
            className='chartlabel'
            style={{
              width: 86,
              height: 13,
              left: 198,
              top: 37,
              position: 'absolute',
              opacity: 0.9,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              letterSpacing: 0.5,
              wordWrap: 'break-word',
              textAlign: 'center'
            }}
          >
            {(10021.32).toFixed(0)}% <br /> Paid{' '}
          </div>

          <div>
            <div
              className='payoffDate'
              style={{
                width: 86,
                height: 13,
                left: 210,
                top: 146,
                position: 'absolute',
                opacity: 0.9,
                color: 'white',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: '500',
                letterSpacing: 0.5,
                wordWrap: 'break-word'
              }}
            >
              12/12/2202
            </div>
            <div
              className='DueLabel'
              style={{
                width: 115,
                height: 13,
                left: 210,
                top: 124,
                position: 'absolute',
                opacity: 0.75,
                color: 'white',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word'
              }}
            >
              Payoff Date
            </div>
          </div>

          <div>
            <div
              className='nextDueDate'
              style={{
                width: 86,
                height: 13,
                left: 30,
                top: 146,
                position: 'absolute',
                opacity: 0.9,
                color: 'white',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: '500',
                letterSpacing: 0.5,
                wordWrap: 'break-word'
              }}
            >
              12/12/2203
            </div>
            <div
              className='nextDueDate'
              style={{
                width: 115,
                height: 13,
                left: 30,
                top: 124,
                position: 'absolute',
                opacity: 0.75,
                color: 'white',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word'
              }}
            >
              Due Date
            </div>
          </div>

          {/* <div
            className="minpay"
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
            <NumericFormat
              value={file.minpay}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div
            className="minLabel"
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
            Min Payment
          </div> */}

          <div
            className='flipbutton'
            style={{
              // width: 75,
              // height: 75,
              right: 5,
              top: 65,
              position: 'absolute'
            }}
          >
            <IconButton aria-label='flip' color='primary' onClick={handleFlip}>
              <EastIcon />
            </IconButton>
          </div>

          <div
            className='Balance'
            style={{
              width: 145,
              height: 26,
              left: 30,
              top: 72,
              position: 'absolute',
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            {/* <NumericFormat
              value={file.originalBalance}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            /> */}
          </div>
          <div
            className='OrigBalance'
            style={{
              width: 126,
              height: 13,
              left: 30,
              top: 50,
              position: 'absolute',
              opacity: 0.75,
              color: 'white',
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: '500',
              wordWrap: 'break-word'
            }}
          >
            Original Balance
          </div>
        </div>
      </div>
    </Grid>
  )
}
