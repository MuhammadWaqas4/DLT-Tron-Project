import React, { useRef } from "react";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Popover,
  Box,
  useTheme,
  Grid,
  Container,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Hidden,
} from "@material-ui/core";
import logo from "../../assets/images/1.png";
import clsx from "clsx";
import { Link, useHistory, useLocation, NavLink } from "react-router-dom";
import { FaUsers, FaHandHoldingUsd, FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { MdSecurity, MdSettings, MdAssessment } from "react-icons/md";
import { AiTwotoneFileText } from "react-icons/ai";
// import "../icons.css";
import "./index.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import store from "../../redux/store";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    // paddingLeft: 0,
    // paddingRight: 0,
    color: "white",
    flexGrow: 1,
    width: "100%",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
      border: "none",
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  navbar: {
    position: "fixed",
    bottom: "0%",
    height: "74px",
    width: "100%",
    backgroundColor: "#27273D",
    boxShadow: "0px 4px 8px #04041747 !important",
    // fontSize:20
    // background:
    //   "linear-gradient(90deg, rgba(57,55,62,1) 26%, rgba(54,73,108,1) 53%, rgba(28,35,47,1) 84%)",
  },
  favIcon: {
    borderRadius: 100,
    // paddingRight:3 ,
    zIndex: 3000,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "4rem",
      bottom: 40,
      right: 40,
    },
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: 40,
      right: 40,
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: 30,
      left: 1,
    },
  },

  // logo:{

  //   width:"8rem",

  // },

  selected: {
    color: "white",
    // fontSize: "10px !important",
  },
}));

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

export default function BottomNav() {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { pathname } = useLocation();
  const ids = useRef("simple-popover");
  const anchorPositions = { top: 390, left: 900 };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logout = () => {
    // localStorage.clear();
    // history.push('/auth');
  };

  const handleLogout = () => {
    localStorage.removeItem("_DTL_LOGIN_ADDRESS");
    store.dispatch({
      type: "LOGOUT",
    });
    window.location.reload();
  };

  // function a11yProps(index) {
  //   return {
  //     id: `scrollable-auto-tab-${index}`,
  //     'aria-controls': `scrollable-auto-tabpanel-${index}`,
  //   };
  // }

  return (
    <Container className="bottom_navi_gation">
      <Hidden mdUp>
        <AppBar>
          {/* <Tabs
       
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs> */}

          <Grid container mx>
            <Grid item xs={12}>
              <BottomNavigation
                value={value}
                onChange={handleChange}
                className={clsx(classes.navbar)}
                showLabels
              >
                {/* <BottomNavigationAction to="/Dashboard" component={NavLink} activeClassName={classes.selected} label="Dashboard" value="nearby" icon={<MdAssessment />} className={clsx(classes.root)} /> */}
                {/* <BottomNavigationAction to="/wallet" component={NavLink} activeClassName={classes.selected} label="Wallet" value="nearby" icon={<FaWallet />} className={clsx(classes.root)} /> */}
                <BottomNavigationAction
                  to="/transactions"
                  component={NavLink}
                  activeClassName={classes.selected}
                  label="Transactions"
                  value="favorites"
                  className={clsx(classes.root)}
                  icon={<BiTransfer style={{ fontSize: 20 }} />}
                />
                {/* <BottomNavigationAction
                  to="/stakes"
                  component={NavLink}
                  activeClassName={classes.selected}
                  label="Stakes"
                  value="recents"
                  className={clsx(classes.root)}
                  icon={<MdSecurity style={{ fontSize: 20 }} />}
                /> */}

                <div
                  onClick={() => history.push("/")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/wawelogo icon.png"
                    style={{
                      position: "relative",
                      top: -8,
                      width: "50px",
                      boxShadow:
                        "0 3px 6px rgba(0, 0, 0, .3), inset 0 0 10px 3px rgba(0, 0, 0, .2), 0 3px 20px #f6597282, 0 3px 35px rgba(250, 95, 59, 0.48)",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* <BottomNavigationAction disableRipple={true} to="/" component={Link} icon={<Box  className={classes.favIcon} >
            <img src="logo.png"  width="100"  className={classes.logo}  alt="logo" />
          </Box>} className={classes.root} /> */}
                {/* <BottomNavigationAction to="/dashboard/withdraw" component={NavLink} activeClassName={classes.selected} label="Withdraw" value="nearby" icon={<FaHandHoldingUsd />} className={clsx(classes.root)} /> */}
                <BottomNavigationAction
                  to="/withdraw"
                  component={NavLink}
                  activeClassName={classes.selected}
                  label="Withdraw"
                  value="nearby"
                  icon={<MdSecurity style={{ fontSize: 20 }} />}
                  className={clsx(classes.root)}
                />
                <BottomNavigationAction
                  aria-describedby={ids}
                  onClick={handleLogout}
                  label="Logout"
                  value="folder"
                  icon={<ExitToAppIcon style={{ fontSize: 20 }} />}
                  className={clsx(classes.root, { [classes.selected]: open })}
                />
              </BottomNavigation>
            </Grid>
          </Grid>
        </AppBar>
      </Hidden>
    </Container>
  );
}
