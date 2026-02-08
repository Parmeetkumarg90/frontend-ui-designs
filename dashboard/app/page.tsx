"use client"
import style from "./style.module.css";
import { Badge, Button, Card, IconButton, InputAdornment, LinearProgress, TextField, Typography } from "@mui/material";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
import { useState } from "react";

export default function Home() {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <div className={style.grid}>
      <div className={style.leftPart}>
        <header className={style.leftHeader}>
          <img src="/Group 68.png" alt="/Group 68.png" className={style.logo} />
        </header>
        <div className={style.leftMain}>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 0 && style.activeTab}`} onClick={() => { setCurrentTabIndex(0); }}>
            <QueryStatsIcon />
            <p>
              Overview
            </p>
          </Button>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 1 && style.activeTab}`} onClick={() => { setCurrentTabIndex(1); }}>
            <FormatListBulletedIcon />
            <p>
              Transactions
            </p>
          </Button>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 2 && style.activeTab}`} onClick={() => { setCurrentTabIndex(2); }}>
            <CreditCardIcon />
            <p>
              Cards
            </p>
          </Button>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 3 && style.activeTab}`} onClick={() => { setCurrentTabIndex(3); }}>
            <InsertDriveFileIcon />
            <p>
              Invoices
            </p>
          </Button>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 4 && style.activeTab}`} onClick={() => { setCurrentTabIndex(4); }}>
            <MilitaryTechIcon />
            <p>
              Goals
            </p>
          </Button>
          <Button className={`${style.leftButton} ${style.latoFont} ${currentTabIndex === 5 && style.activeTab}`} onClick={() => { setCurrentTabIndex(5); }}>
            <SettingsIcon />
            <p>
              Settings
            </p>
          </Button>
        </div>
        <div className={style.leftBottom}>
          <img src="/Group 163.png" alt="/Group 163.png" />
          <Button className={`${style.premiumButton} ${style.quickSandFont}`}>
            <p>Upgrade to premium</p>
            <ArrowUpwardIcon />
          </Button>
        </div>
      </div>
      <div className={style.rightPart}>
        <header className={style.rightHeader}>
          <div>
            <Typography className={style.headerText}>Weekly sumup</Typography>
            <p className={style.greyText}>Get summary of your weekly online transactions here.</p>
          </div>
          <div className={`${style.flexRow} ${style.flexCenter}`}>
            <IconButton className={style.greyText}>
              <LocalPostOfficeIcon />
            </IconButton>
            <IconButton className={style.greyText}>
              <Badge color="error" badgeContent=" " variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <span className={`${style.flexRow} ${style.flexCenter}`}>
              <IconButton className={`${style.yellowIcon}`}>
                <img src="/Group 135.png" alt="/Group 135.png" />
              </IconButton>
              <div>
                <Typography>Andrew</Typography>
                <p className={style.greyText}>Admin Account</p>
              </div>
            </span>
          </div>
        </header>
        <div className={style.gridTwo}>
          <Card className={style.card}>
            <Typography className={style.cardHeaderText}>Cards</Typography>
            <div className={style.gridTwoCol}>
              <span className={`${style.flexRow} ${style.flexCenter} ${style.rightBorder} ${style.marginY}`}>
                <IconButton className={style.noPaddingMargin}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <img src="/Group 111.png" alt="/Group 111.png" />
                <IconButton className={style.noPaddingMargin}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </span>
              <span className={`${style.flexCol} ${style.flexEvenly}`}>
                <div className={style.textAlignRight}>
                  <span className={`${style.blueText} ${style.inRow}`}>
                    <Typography className={`${style.bigText1} ${style.latoFont}`}>2850.75</Typography>
                    <p>$</p>
                  </span>
                  <p>Current Balance</p>
                </div>
                <div className={style.textAlignRight}>
                  <span className={`${style.greenText} ${style.inRow}`}>
                    <Typography className={`${style.bigText2} ${style.latoFont}`}>1500.50</Typography>
                    <p>$</p>
                  </span>
                  <p>Income</p>
                </div>
                <div className={style.textAlignRight}>
                  <span className={`${style.redText} ${style.inRow}`}>
                    <Typography className={`${style.bigText3} ${style.latoFont}`}>350.60</Typography>
                    <p>$</p>
                  </span>
                  <p>Outcome</p>
                </div>
              </span>
            </div>
            <div className={style.gridTwoCol}>
              <div className={`${style.fullWidth} ${style.flexCol}`}>
                <LinearProgress variant="determinate" value={350 / 40} className={style.loader} />
                <span className={style.spaceBetween}>
                  <p className={style.greyText}>Weekly payment limit</p>
                  <p>$350.60 / $4000</p>
                </span>
              </div>
              <div className={`${style.fullWidth} ${style.flexEnd}`}>
                <IconButton className={style.bigText1}>
                  <ToggleOffTwoToneIcon />
                </IconButton>
                <p className={style.greyText}>Deactivate Card</p>
              </div>
            </div>
          </Card>
          <div className={style.card}>
            <span className={`${style.flexRow}`}>
              <Typography className={style.cardHeaderText}>Goals</Typography>
              <img src="/Group 129.png" alt="/Group 129.png" className={style.logo} />
            </span>
            <div className={`${style.flexRow} ${style.flexCenter}`}>
              <Card className={`${style.card} ${style.flexCol} ${style.goalCard}`}>
                <span>
                  <p className={style.goalPrice}>$550</p>
                  <p className={style.greyText}>12/20/20</p>
                </span>
                <span>
                  <img src="/maki_mountain-15.png" alt="/maki_mountain-15.png" />
                  <p className={style.goalPrice}>Holidays</p>
                </span>
              </Card>
              <Card className={`${style.card} ${style.flexCol} ${style.goalCard}`}>
                <span>
                  <p className={style.goalPrice}>$200</p>
                  <p className={style.greyText}>12/20/20</p>
                </span>
                <span>
                  <img src="/maki_mountain-15 (1).png" alt="/maki_mountain-15 (1).png" />
                  <p className={style.goalPrice}>Renovation</p>
                </span>
              </Card>
              <Card className={`${style.card} ${style.flexCol} ${style.goalCard}`}>
                <span>
                  <p className={style.goalPrice}>$820</p>
                  <p className={style.greyText}>12/20/20</p>
                </span>
                <span>
                  <img src="/maki_mountain-15 (2).png" alt="/maki_mountain-15 (2).png" />
                  <p className={style.goalPrice}>Xbox</p>
                </span>
              </Card>
              <IconButton className={style.bigText1}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
          </div>
          <span>
            <Card className={`${style.flexCol} ${style.card}`}>
              <Typography className={style.cardHeaderText}>Transaction History</Typography>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={style.greyText}>Receiver</TableCell>
                    <TableCell className={style.greyText}>Type</TableCell>
                    <TableCell className={style.greyText}>Date</TableCell>
                    <TableCell className={style.greyText}>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={1}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={style.flexRow}><LocalGroceryStoreTwoToneIcon /> Tesco Market</TableCell>
                    <TableCell className={style.greyText}>Shopping</TableCell>
                    <TableCell className={style.greyText}>13 dec 2020</TableCell>
                    <TableCell className={style.latoFont}>$75.67</TableCell>
                  </TableRow>
                  <TableRow
                    key={2}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={style.flexRow}><LocalShippingTwoToneIcon /> ElectroMen Market</TableCell>
                    <TableCell className={style.greyText}>Shopping</TableCell>
                    <TableCell className={style.greyText}>14 Dec 2020</TableCell>
                    <TableCell className={style.latoFont}>$250.00</TableCell>
                  </TableRow>
                  <TableRow
                    key={3}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={style.flexRow}><HistoryEduTwoToneIcon /> Fiorgio Restaurent</TableCell>
                    <TableCell className={style.greyText}>Food</TableCell>
                    <TableCell className={style.greyText}>07 Dec 2020</TableCell>
                    <TableCell className={style.latoFont}>$19.50</TableCell>
                  </TableRow>
                  <TableRow
                    key={4}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={style.flexRow}><PersonOutlineTwoToneIcon /> John Mathew Kayne</TableCell>
                    <TableCell className={style.greyText}>Sport</TableCell>
                    <TableCell className={style.greyText}>06 Dec 2020</TableCell>
                    <TableCell className={style.latoFont}>$350</TableCell>
                  </TableRow>
                  <TableRow
                    key={5}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={style.flexRow}><PersonOutlineTwoToneIcon /> Anna Marlin</TableCell>
                    <TableCell className={style.greyText}>Shopping</TableCell>
                    <TableCell className={style.greyText}>31 Nov 2020</TableCell>
                    <TableCell className={style.latoFont}>$430</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </span>
          <div className={`${style.card} ${style.moveUp}`}>
            <div className={`${style.flexCol} ${style.fullWidth}`}>
              <Typography className={style.cardHeaderText}>Outcome Statistics</Typography>
              <div className={`${style.fullWidth} ${style.progressBox}`}>
                <LocalGroceryStoreTwoToneIcon className={style.groceryIcon} sx={{
                  // padding:"10% 5%",
                  width: "10px",
                  height: "30px"
                }} />
                <span className={`${style.flexC} ${style.flexCenter}`}>
                  <span className={`${style.gridUnequal}`}>
                    <LinearProgress variant="determinate" value={52} sx={{
                      background: "#eff0f1",
                      margin: "2% 0 0 0",
                      minHeight: "10px",
                      borderRadius: "50px",
                      stroke: "red",
                      '& .MuiLinearProgress-barColorPrimary': {
                        backgroundImage: 'linear-gradient(to right, #F79042 0%, #FCAE73 100%)',
                        borderRadius: "50px"
                      },
                    }} />
                    <p className={style.progressPercentageText}>{52}%</p>
                  </span>
                  <p className={style.greyText}>Shopping</p>
                </span>
              </div>
              <div className={`${style.fullWidth} ${style.progressBox}`}>
                <LocalShippingTwoToneIcon className={style.electronicsIcon} sx={{
                  // padding:"10% 5%",
                  width: "10px",
                  height: "30px"
                }} />
                <span className={`${style.flexC} ${style.flexCenter}`}>
                  <span className={`${style.gridUnequal}`}>
                    <LinearProgress variant="determinate" value={21} sx={{
                      background: "#eff0f1",
                      margin: "2% 0 0 0",
                      minHeight: "10px",
                      borderRadius: "50px",
                      stroke: "red",
                      '& .MuiLinearProgress-barColorPrimary': {
                        backgroundImage: 'linear-gradient(to right, #209D43 0%, #2BC255 100%)',
                        borderRadius: "50px"
                      },
                    }} />
                    <p className={style.progressPercentageText}>{21}%</p>
                  </span>
                  <p className={style.greyText}>Electronics</p>
                </span>
              </div>
              <div className={`${style.fullWidth} ${style.progressBox}`}>
                <AirplanemodeActiveTwoToneIcon className={style.travelsIcon} sx={{
                  // padding:"10% 5%",
                  width: "10px",
                  height: "30px"
                }} />
                <span className={`${style.flexC} ${style.flexCenter}`}>
                  <span className={`${style.gridUnequal}`}>
                    <LinearProgress variant="determinate" value={74} sx={{
                      background: "#eff0f1",
                      margin: "2% 0 0 0",
                      minHeight: "10px",
                      borderRadius: "50px",
                      stroke: "red",
                      '& .MuiLinearProgress-barColorPrimary': {
                        background: "#70A6E8",
                        borderRadius: "50px"
                      },
                    }} />
                    <p className={style.progressPercentageText}>{74}%</p>
                  </span>
                  <p className={style.greyText}>Travels</p>
                </span>
              </div>
            </div>
            <div className={style.gridUnequal}>
              <Card className={style.card}>
                <Typography className={style.cardHeaderText}>New transaction</Typography>
                <div className={`${style.flexRow} ${style.flexEvenly} ${style.card}`}>
                  <span className={style.flexCol}>
                    <img src="/Ellipse 50.png" alt="/Ellipse 50.png" />
                    Ann
                  </span>
                  <span className={style.flexCol}>
                    <img src="/Ellipse 49.png" alt="/Ellipse 49.png" />
                    Monika
                  </span>
                  <span className={style.flexCol}>
                    <img src="/Ellipse 48.png" alt="/Ellipse 48.png" />
                    John
                  </span>
                  <span className={style.flexCol}>
                    <img src="/Ellipse 51.png" alt="/Ellipse 51.png" />
                    Mike
                  </span>
                  <span className={style.flexCol}>
                    <img src="/Ellipse 52.png" alt="/Ellipse 52.png" />
                    Mia
                  </span>
                  <span className={`${style.flexCol} ${style.flexCenter}`}>
                    <img src="/Group 129.png" alt="/Group 129.png" className={style.logo} />
                    Add new
                  </span>
                </div>
                <span className={`${style.flexRow}`}>
                  <TextField
                    value={0}
                    slotProps={{
                      input: {
                        className: `${style.transferInput} ${style.latoFont}`,
                        endAdornment: <InputAdornment position="end" className={`${style.icon} ${style.rightCurve} ${style.transferInput}`}>$</InputAdornment>,
                      },
                    }}
                  />
                  <Button className={`${style.premiumButton} ${style.quickSandFont}`}>Send the transfer</Button>
                </span>
              </Card>
              <div className={style.card}>
                <img src="/Group 153.png" alt="/Group 153.png" />
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
