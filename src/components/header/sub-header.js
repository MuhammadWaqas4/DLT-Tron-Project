import React, { useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Done } from "@material-ui/icons";
import bgBanner from "../../assets/images/bg.jpg";
import { logDOM } from "@testing-library/react";
import { useSelector } from "react-redux";
import { environment } from "../../environment";

const useStyles = makeStyles((theme) => ({
  Hcontainer: {
    display: "flex",
  },
  box: {
    paddingTop: 10,
    paddingBlockStart: 10,
    // paddingLeft: 20,
    // paddingRight: 20
  },
  btn: {
    backgroundColor: "#1282C2",
    borderRadius: 20,
    fontSize: 10,
    float: "right",
    color: "white",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:hover": {
      backgroundColor: "#1282C2",
    },
    [theme.breakpoints.down("md")]: {
      float: "left",
      marginTop: 15,
    },
  },
  btnRef: {
    // float: "right",
    // marginRight: 10,
    color: "#ffff",

    // background: "linear-gradient(90deg, rgba(80,55,62,2) 26%, rgba(54,73,108,1) 53%, rgba(50,35,47,1) 84%)",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    [theme.breakpoints.down("md")]: {
      float: "left",
      marginTop: 15,
    },
    [theme.breakpoints.down("md")]: {
      float: "left",
      marginTop: 15,
    },
  },
  contactBox: {
    borderRadius: 0,
    transition: "all 0.20s ease-in-out",
    // backgroundImage: "linear-gradient(45deg, #fd6035 0%, #f75878 100%)",
    // boxShadow:
    //   "0 3px 6px rgba(0, 0, 0, .3), inset 0 0 10px 3px rgba(0, 0, 0, .2), 0 3px 20px #f6597282, 0 3px 35px rgba(250, 95, 59, 0.48)",

    backgroundSize: "ceover",
    backgroundColor: "#E3A81B",
    // width: "max-content",
    opacity: 0.8,
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
  },

  Dashboard_boxButton: {
    // -webkit-appearance: "none",
    border: "0",
    outline: "0",
    // position: "relative",
    background:
      "linear-gradient(90deg, rgba(80,55,62,2) 26%, rgba(54,73,108,1) 53%, rgba(50,35,47,1) 84%)",
    // backgroundSize: "100% 100%",
    // borderRadius:"100px",
    fontSize: "1.3rem",
    lineHeight: "1.6rem",
    fontFamily: "Source Code Pro",
    borderRadius: "2px solid blue",
  },

  item2: {
    order: 3,
    [theme.breakpoints.up("sm")]: {
      order: 2,
    },
  },
  RLogo: {
    order: 2,
    [theme.breakpoints.up("sm")]: {
      order: 3,
    },
  },

  item3: {
    order: 3,
    [theme.breakpoints.up(780)]: {
      order: 3,
    },
  },

  // [theme.breakpoints.down('md')]: {
  // order:"1",

  // },

  // '@media(minWidth: 780px)' : {
  // order:"1"
  // }
}));

function SubHeader() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState(null);
  const isActive = useMediaQuery("(min-width:600px)");
  const getReducer = useSelector((state) => state.UserReducer);
  const { userAccountAddress } = getReducer;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguage = (event) => {
    setLang(event.currentTarget);
  };

  const handleLangClose = (event) => {
    setLang(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container alignItems="center">
      <Grid item lg={6} xs={12} md={6} sm={12} className="box">
        <Box display="flex" className={classes.box1} m={1}>
          <Box
            style={{ width: "100%", justifyContent: "center" }}
            p={1}
            display="flex"
            flexDirection="row"
            className={classes.contactBox}
          >
            <p className="white m-0">Contact Address:&nbsp;</p>
            {/* <a
              href={`https://etherscan.io/address/${environment.REACT_APP_STAKE_ADDRESS}`}
              className="white"
              target="_blank"
            >
              {environment.REACT_APP_STAKE_ADDRESS.slice(0, 12) +
                "..." +
                environment.REACT_APP_STAKE_ADDRESS.slice(34, 42)}
            </a> */}
          </Box>
        </Box>
      </Grid>
      {/* <Grid item lg={4} xs>
        <Box display="flex" m={1} justifyContent="center">
          <Box flexDirection="row" order="1">
            <img src="logo.png" />
          </Box>
        </Box>
      </Grid> */}
      <Grid item lg={6} xs={12} md={6} sm={12} className="box">
        <Box display="flex" className={classes.box1} m={1}>
          <Box
            style={{ width: "100%", justifyContent: "center", color: "white" }}
            p={1}
            display="flex"
            flexDirection="row"
            className={classes.contactBox}
          >
            {userAccountAddress
              ? userAccountAddress.slice(0, 12) +
                "..." +
                userAccountAddress.slice(34, 42)
              : "..."}
          </Box>
        </Box>
      </Grid>
    </Grid>

    // <Grid container className={classes.box}>
    //   <Grid item xs md={4}>
    //     <Box p={1} display="flex" flexDirection="row" className={classes.contactBox}>
    //       <p className="white m-0">Contact Address:&nbsp;</p>
    //       <a href="#" className="white">0x823458239jnasdas82342398werasdu89ser</a>
    //     </Box>
    //   </Grid>
    //   <Grid item xs md={4}   >
    // <Box   flexDirection="row"  >
    //    <img src="logo.png"/>
    //     </Box>

    //     </Grid>

    //   <Grid item xs md={4}>
    //     <Button aria-controls="simple-menu1" aria-haspopup="true" onClick={handleClick} className={classes.btnRef }>
    //     0x0c0c8c0ea38A608cC317cfC499353810379A5143
    //     </Button>
    //     <Menu
    //       id="simple-menu1"
    //       anchorEl={anchorEl}
    //       keepMounted
    //       open={Boolean(anchorEl)}
    //       onClose={handleClose}
    //       anchorOrigin={{
    //         vertical: '',
    //         horizontal: 'center',
    //       }}
    //       transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'center',
    //       }}
    //     >
    //       <MenuItem onClick={handleClose}>
    //         <Done /> English
    //         </MenuItem>
    //       {/* <MenuItem onClick={handleClose}>My account</MenuItem>
    //       <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    //     </Menu>

    //     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleLanguage} className={classes.btn}>
    //      English
    //     </Button>
    //     <Menu
    //       id="simple-menu"
    //       anchorEl={lang}
    //       keepMounted
    //       open={Boolean(lang)}
    //       onClose={handleLangClose}
    //     >
    //       <MenuItem onClick={handleLangClose}>
    //         <Done /> &nbsp;&nbsp;English
    //         </MenuItem>
    //       {/* <MenuItem onClick={handleClose}>My account</MenuItem>
    //       <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    //     </Menu>
    //   </Grid>
    // </Grid>
  );
}

export default SubHeader;
