import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Button,
  Typography,
  createMuiTheme,
  Input,
} from "@material-ui/core";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillCopy,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import AddIcon from "@material-ui/icons/Add";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SellModal from "../SellModal/sellModal";
// import '../../App.css'
import "./Dashboard.css";
import BuyModal from "../buyModal/index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    // marginLeft: 30
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  box: {
    borderRadius: 50,
    width: 50,
    style: { width: "5rem", height: "5rem" },
  },

  IconSvg: {
    // padding: theme.spacing(3, 2),
    height: 200,
    verticalAlign: "middle",
  },

  box_Ions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
  },

  boxColor: {
    backgroundColor: "#E9B743",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",

    alignItems: "center",
  },

  Dtt_box: {
    borderRadius: "100%",
  },

  Dtt_box: {
    borderRadius: "100%",
  },

  Dashboard_boxButton: {
    transition: "all 0.20s ease-in-out",
    backgroundColor: "#E9B743",
    // backgroundImage: "linear-gradient(45deg, #93c34a 0%, #52af4c 100%)",
    // boxShadow: "0 3px 6px rgba(0, 0, 0, .3), inset 0 0 10px 3px rgba(0, 0, 0, .2), 0 3px 20px #88c04aad, 0 3px 35px rgba(103, 174, 74, 0.28)",
    border: "0",
    outline: "0",
    position: "relative",
    backgroundSize: "100% 100%",
    borderRadius: "100px",
    fontSize: "1.3rem",
    lineHeight: "1.6rem",
    // fontFamily: "Source Code Pro",
    fontWeight: 400,
    borderRadius: "2px solid blue",
  },

  box1: {
    backgroundColor: "#222a31",
    borderRadius: "0",
    /* opacity: 0.9; */
    /* background-position: cover; */
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  },
}));

function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [openbuy, setOpenbuy] = React.useState(false);

  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuyOpen = () => {
    setOpenbuy(true);
  };

  const handleCloseBuy = () => {
    setOpenbuy(false);
  };
  const classes = useStyles();
  const getReducer = useSelector((state) => state.UserReducer);

  const {
    allRecentReferrals,
    userPersonalBalance,
    oneTokenPrice,
    totalReferralsCount,
    earnings,
    totalWithdrawn,
    availableWithdrawn,
    atStake,
    registeredDate,
    userWalletEthBalance,
    userAccountAddress,
    totalReward,
    waveCurrentPrice
  } = getReducer;

  const copyReferralLink = () => {
    let get = document.getElementById("refer").select();
    document.execCommand("copy");
    toast.success("Copied!");
  };

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item lg={4} xs>
          <Box display="flex" className={classes.box1} m={1}>
            <Box
              width="200px"
              borderRadius="20px 0px 0px 20px"
              style={{}}
              p={1}
            >
              <Box
                m="10px"
                borderRadius="10px"
                height="70px"
                className={classes.boxColor}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Box>

            <Box
              borderRadius="0px 20px 20px 0px"
              width="100%"
              height="auto"
              style={{ color: "#ffff" }}
              pt={3}
              alignItems="center"
            >
              <Typography color="colorText.main !important">
                DLT Balance
              </Typography>
              <Typography variant="h6" color="colorText.main !important">
                {" "}
                {userPersonalBalance ? userPersonalBalance : 0} DLT
              </Typography>
              <Typography color="colorText.main !important">
                {" "}
                DLT Price: $ {waveCurrentPrice ? waveCurrentPrice : 0}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} xs>
          <Box display="flex" className={classes.box1} m={1}>
            <Box
              width="200px"
              borderRadius="20px 0px 0px 20px"
              style={{}}
              p={1}
            >
              <Box
                m="10px"
                borderRadius="10px"
                height="70px"
                className={classes.boxColor}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Box>

            <Box
              borderRadius="0px 20px 20px 0px"
              width="100%"
              height="auto"
              style={{ color: "#ffff" }}
              pt={3}
              alignItems="center"
            >
              <Typography color="colorText.main !important">
                Total Referrals Count
              </Typography>
              <Typography variant="h6" color="colorText.main !important">
                {totalReferralsCount ? totalReferralsCount : 0}
              </Typography>
              <Typography color="colorText.main !important">
                {" "}
                Earnings: {earnings ? earnings : 0}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} xs>
          <Box display="flex" className={classes.box1} m={1}>
            <Box
              width="200px"
              borderRadius="20px 0px 0px 20px"
              style={{}}
              p={1}
            >
              <Box
                m="10px"
                borderRadius="10px"
                height="70px"
                className={classes.boxColor}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Box>

            <Box
              borderRadius="0px 20px 20px 0px"
              width="100%"
              height="auto"
              style={{ color: "#ffff" }}
              pt={3}
              alignItems="center"
            >
              <Typography color="colorText.main !important">
                Total Earning
              </Typography>
              <Typography variant="h6" color="colorText.main !important">
                {totalReward ? parseFloat(totalReward).toFixed(3) : 0} DLT
              </Typography>
              <Typography color="colorText.main !important">
                {" "}
                At Stake: : {atStake ? atStake : 0} DLT
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container style={{ backgroundColor: "#222a31" }}>
        <Grid item xs>
          <Box
            className={classes.box1}
            borderRadius="20px 20px 20px 20px"
            style={{}}
            m={1}
          >
            <Box display="flex">
              <Box
                borderRadius="20px 0px 0px 0px"
                width="100px"
                style={{}}
                p={1}
              >
                <Box
                  m="10px"
                  borderRadius="10px"
                  height="70px"
                  className={classes.box_Ions}
                  style={{ backgroundColor: "#E9B743" }}
                >
                  <BiBasket fontSize="large" />
                </Box>
              </Box>

              <Box
                width="300px"
                height="auto"
                style={{ color: "#ffff" }}
                pt={3}
                alignItems="center"
              >
                <Typography> Buy with ETH</Typography>
                <Typography variant="4">DLT Tokens</Typography>
                <Typography>Earn upto 0.25% daily staking reward</Typography>
              </Box>
            </Box>
            <Box m="30px" p={5}>
              <Button
                className={classes.Dashboard_boxButton}
                color="primary"
                variant="outlined"
                onClick={handleBuyOpen}
                style={{
                  // backgroundColor: "#458FDD",
                  color: "#ffff",
                  padding: "5px 0px 5px 0px",
                }}
                fullWidth
              >
                Buy
              </Button>
            </Box>
            {/* <Box textAlign="center" p={1} ><Typography variant="h6" style={{ color: "#B01F2C" }} > Staking Paused !</Typography></Box> */}
          </Box>
        </Grid>
        <Grid item xs>
          <Box
            className={classes.box1}
            borderRadius="20px 20px 20px 20px"
            style={{}}
            m={1}
          >
            <Box display="flex">
              <Box
                borderRadius="20px 0px 0px 0px"
                width="100px"
                style={{}}
                p={1}
              >
                <Box
                  m="10px"
                  borderRadius="10px"
                  height="70px"
                  className={classes.box_Ions}
                  style={{ backgroundColor: "#E9B743" }}
                >
                  <BiBasket fontSize="large" />
                </Box>
              </Box>

              <Box
                width="300px"
                height="auto"
                style={{ color: "#ffff" }}
                pt={3}
                alignItems="center"
              >
                <Typography> Withdraw to ETH</Typography>
                <Typography variant="5">DLT Tokens</Typography>
                <Typography>Earn upto 0.25% daily staking reward</Typography>
              </Box>
            </Box>
            <Box m="30px" p={5}>
              <Button
                p={1}
                className={classes.Dashboard_boxButton}
                onClick={handleOpen}
                color="primary"
                variant="outlined"
                style={{
                  // backgroundColor: "#112C6B",
                  color: "#ffff",
                  padding: "5px 0px 5px 0px",
                }}
                fullWidth
              >
                SELL
              </Button>
            </Box>
            {/* <Box textAlign="center" p={1} ><Typography variant="h6" style={{ color: "#B01F2C" }} > Staking Paused !</Typography></Box> */}
          </Box>
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#222a31", marginTop: 8 }}>
        <Grid item xs maxWidth="md">
          <Box
            className={classes.box1}
            borderRadius="20px 20px 20px 20px"
            style={{}}
            m={1}
          >
            <Box>
              <Box
                className="Account_success"
                display="flex"
                p={2}
                style={{ color: "#ffff" }}
              >
                <Typography variant="h6"> Account Overview</Typography>
                <div className="succse_badges">success</div>
              </Box>
              <div className="success-space-line"></div>

              <Box m={4} style={{ color: "#ffff" }}>
                <p>Registered</p>
                <p>
                  {registeredDate
                    ? moment.unix(registeredDate).format("DD MMM YYYY")
                    : 0}
                </p>
                <div className="success-page-space-line"></div>
              </Box>

              <Box m={4} style={{ color: "#ffff" }}>
                <p>Your ETH Balance</p>
                <p>
                  {userWalletEthBalance
                    ? parseFloat(userWalletEthBalance).toFixed(4)
                    : 0}{" "}
                  ETH
                </p>
                <div className="success-page-space-line"></div>
              </Box>

              <Box m={4} style={{ color: "#ffff" }} paddingBottom={5}>
                <p>Refferal URL</p>
                {/* AiOutlineTwitter,AiFillFacebook,AiFillYoutube */}

                <div>
                  {/* <span>
                    <FacebookIcon fontSize="large" />
                  </span>{" "}
                  <WhatsAppIcon fontSize="large" />
                  <span>
                    <TelegramIcon fontSize="large" />
                  </span> */}
                  {/* <span onClick={copyReferralLink}>
                    <AddIcon fontSize="large" />
                  </span> */}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography pt="2">
                    <Input
                      style={{ color: "white" }}
                      type="text"
                      id="refer"
                      value={`https://dashboard.decentralizedluxurytoken.com/login/?ref=${userAccountAddress}`}
                      readonly
                    />
                  </Typography>
                  <AiFillCopy
                    style={{ fontSize: 20, cursor: "pointer" }}
                    onClick={copyReferralLink}
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs>
          <Box
            className={classes.box1}
            borderRadius="20px 20px 20px 20px"
            style={{}}
            m={1}
          >
            <Box display="flex">
              <Box
                borderRadius="20px 0px 0px 0px"
                width="100px"
                style={{}}
                p={1}
              >
                <Box
                  m="10px"
                  borderRadius="10px"
                  height="70px"
                  className={classes.box_Ions}
                  style={{ backgroundColor: "#E9B743" }}
                >
                  <BiBasket fontSize="large" />
                </Box>
              </Box>

              <Box
                width="300px"
                height="auto"
                style={{ color: "#ffff" }}
                pt={2}
                alignItems="center"
              >
                <span>stake</span>
                <Typography variant="h6"> DLT Tokens</Typography>
                <span>Earn upto 0.25% daily staking reward</span>
              </Box>
            </Box>
            <Box m="30px">
              {/* <Button
                onClick={() => history.push("/stakes")}
                className={classes.Dashboard_boxButton}
                variant="outlined"
                style={{
                  // backgroundColor: "#112C6B",
                  color: "#ffff",
                  padding: "5px 0px 5px 0px",
                }}
                fullWidth
              >
                stake your DLT
              </Button> */}
            </Box>
            <Box textAlign="center" p={1}>
              <Typography variant="h6" style={{ color: "#B01F2C" }}>
                {" "}
                {/* Staking Paused ! */}
              </Typography>
            </Box>
          </Box>

          <Box
            className={classes.box1}
            borderRadius="20px 20px 20px 20px"
            style={{}}
            m={1}
          >
            <Box
              className={classes.box1}
              borderRadius="20px 20px 20px 20px"
              style={{}}
              m={1}
            >
              {/* <Box>
                <Box
                  className="Account_success"
                  display="flex"
                  p={2}
                  style={{ color: "#ffff" }}
                >
                  <Typography variant="h6"> Recent Referrals</Typography>
                  <div className="link_success_badges">
                    <a className=" success_Links "></a>
                  </div>
                </Box>
                <div className="success-space-line"></div>
                {allRecentReferrals && allRecentReferrals.length ? (
                  // <Box m={4}>
                  <div className="question_mark" style={{ paddingBottom: 1 }}>
                    <Link to="/dashboard/referrals" style={{ color: "white" }}>
                      View Referrals
                    </Link>
                  </div>
                ) : (
                  // </Box>
                  <Box m={4}>
                    <div className="question_mark">
                      <p>
                        <AiOutlineQuestionCircle />
                      </p>
                      <p> No Record Found</p>
                    </div>
                  </Box>
                )}
              </Box> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <BuyModal open={openbuy} handleClose={handleCloseBuy} />
      <SellModal open={open} handleClose={handleClose} />
    </div>
  );
}
export default Dashboard;
