import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import store from "../../redux/store";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { environment } from "../../environment";
import { getUserData } from "../../userDataFunctions";
import { toast } from "react-toastify";
import TronHelper from "../../utils/TronHelper";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./index.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  SignUpColor: {
    background: "#636057",
    boxShadow: "2",
    borderRadius: "6",
    color: "#eae8e7",
    textAlign: "center",
    padding: "4rem",
    mt: "3rem",
    borderRadius: "20px",
  },
  SignUp_boxButton: {
    transition: "all 0.20s ease-in-out",
    backgroundColor: "#E3A81B !important",
    // backgroundImage: "linear-gradient(45deg, #fd6035 0%, #f75878 100%)",
    // boxShadow:
    //   "0 3px 6px rgba(0, 0, 0, .3), inset 0 0 10px 3px rgba(0, 0, 0, .2), 0 3px 20px #f6597282, 0 3px 35px rgba(250, 95, 59, 0.48)",
    border: "0",
    outline: "0",
    position: "relative",
    backgroundSize: "100% 100%",
    borderRadius: "100px",
    fontSize: "1.3rem",
    lineHeight: "1.6rem",
    fontFamily: "Source Code Pro",
    borderRadius: "2px solid blue",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loader, setLoader] = React.useState(false);
  const getReducer = useSelector((state) => state.UserReducer);
  const {
    isUserAuthenticated,
    metaMaskDecentralized,
    userAccountAddress,
  } = getReducer;

  React.useEffect(() => {
    if (isUserAuthenticated) {
      history.push("/");
    }
  }, [isUserAuthenticated]);

  const LoginFunction = async () => {
    setLoader(true);
    if (metaMaskDecentralized && userAccountAddress) {
      setLoader(false);
      localStorage.setItem("_DTL_LOGIN_ADDRESS", userAccountAddress);
      store.dispatch({
        type: "USER_AUTHENTICATED",
      });
    } else {
      toast.warning("please connect your wallet!");
      setLoader(false);
    }
    // metaMaskDecentralized.methods
    //   .refusers(userAccountAddress)
    //   .call()
    //   .then((val) => {
    //     if (val.isExist) {
    //       setLoader(false);
    //       localStorage.setItem("_DTL_LOGIN_ADDRESS", userAccountAddress);
    //       store.dispatch({
    //         type: "USER_AUTHENTICATED",
    //       });
    //     } else {
    //       setLoader(false);

    //       toast.error("user doesn't exist please register first!");
    //     }
    //   })
    //   .catch((err) => {
    //     setLoader(false);
    //   });
    // }
  };

  return (
    <div style={{ backgroundColor: "#222a31", height: "50rem" }}>
      <Container lg={12} maxWidth="md">
        <Box textAlign="center" padding="2rem">
          <img src="/logo.png" className="register-logo" />
        </Box>
        <Box className={classes.SignUpColor} mt="2rem">
          <Typography variant="h3" component="h4">
            Sign In
          </Typography>
          <Typography>Connect to Trust Wallet</Typography>
          <div className="login-space-line"></div>

          <div className="Wallet_Button">
            {loader ? (
              <button className={classes.SignUp_boxButton}>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ fontSize: "1rem" }}
                >
                  Loading...
                </Typography>
              </button>
            ) : (
              <button
                className={classes.SignUp_boxButton}
                onClick={LoginFunction}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ fontSize: "1rem" }}
                >
                  Connect to the wallet
                </Typography>
              </button>
            )}
          </div>

          <div className="login-space-line"></div>

          <Box>
            <Typography
              variant="h5"
              component="h5"
              style={{ fontSize: "1rem" }}
            >
              {" "}
              Connect to Your wallet to enter the dashboard.{" "}
            </Typography>
          </Box>
          {/* <Box>
            <Typography
              variant="h6"
              component="h6"
              style={{ fontSize: "1rem" }}
            >
              <Link
                to="/register"
                style={{ cursor: "pointer" }}
                className="sinIn_alreadyRe"
              >
                Register
              </Link>{" "}
              if don't have account{" "}
            </Typography>
          </Box> */}
        </Box>
      </Container>
    </div>
  );
}
