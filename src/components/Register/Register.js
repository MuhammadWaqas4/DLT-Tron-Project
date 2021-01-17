import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { environment } from "../../environment";
import { getUserData } from "../../userDataFunctions";
import { toast } from "react-toastify";
import store from "../../redux/store";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  SignUpColor: {
    backgroundColor: "#636057",
    boxShadow: "2",
    borderRadius: "6",
    color: "#ffff",
    textAlign: "center",
    padding: "4rem",
    mt: "3rem",
    borderRadius: "20px",
  },
  SignUp_boxButton: {
    // -webkit-appearance: "none",
    border: "0",
    outline: "0",
    position: "relative",
    transition: "all 0.20s ease-in-out",
    backgroundColor: "#E3A81B !important",
    // backgroundImage: "linear-gradient(45deg, #fd6035 0%, #f75878 100%)",
    // boxShadow:
    //   "0 3px 6px rgba(0, 0, 0, .3), inset 0 0 10px 3px rgba(0, 0, 0, .2), 0 3px 20px #f6597282, 0 3px 35px rgba(250, 95, 59, 0.48)",
    backgroundSize: "100% 100%",
    borderRadius: "100px",
    fontSize: "1.3rem",
    lineHeight: "1.6rem",
    fontFamily: "Source Code Pro",
    borderRadius: "2px solid blue",
  },
}));

export default function SignIn() {
  // let getReferAdd = localStorage.getItem("refAddress");
  let getRefAdd = localStorage.getItem("_DLT_REF_ADD");

  
  const classes = useStyles();
  const [address, setAddress] = React.useState(getRefAdd ? getRefAdd : "");
  const [loader, setLoader] = React.useState(false);
  const getReducer = useSelector((state) => state.UserReducer);
  const {
    isUserAuthenticated,
    metaMaskDecentralized,
    userAccountAddress,
  } = getReducer;
  // console.log("---------------------->", metaMaskDecentralized);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isUserAuthenticated) {
      history.push("/");
    }
  }, [isUserAuthenticated]);

  const RegisterUser = async () => {
    // console.log(
    //   "came here====>",
    //   metaMaskDecentralized,
    //   "==>",
    //   userAccountAddress
    // );

    if (address === "") {
      toast.error("please enter address!");
    } else {
      setLoader(true)
      if (metaMaskDecentralized && userAccountAddress) {
        metaMaskDecentralized.methods
          .refusers(userAccountAddress)
          .call()
          .then((val) => {
            // console.log("is user exist??", val);
            if (val.isExist) {
              setLoader(false);
              toast.error("your are already registered please do login!");
            } else {
              // console.log("here is the address====>", address);
              metaMaskDecentralized.methods
                .regUser(address)
                .send(({ from: userAccountAddress, gas: 5000000 }))
                .then(() => {
                  // getUserData(userAccountAddress, metaMaskDecentralized).then(
                  //   () => {
                    setLoader(false)
                      localStorage.setItem(
                        "_DTL_LOGIN_ADDRESS",
                        userAccountAddress
                      );
                      store.dispatch({
                        type: "USER_AUTHENTICATED",
                      });
                  //   }
                  // );
                })
                .catch((err) => {
                  setLoader(false);
                  // console.log("====>", err);
                });
            }
          })
          .catch((err) => {
            setLoader(false);

            // console.log("here is the error===>", err);
          });
      }
    }
  };


  return (
    <div style={{ backgroundColor: "#222a31", height: "50rem" }}>
      <Container lg={12}>
        <Box textAlign="center" padding="3rem" borderRadius="20px">
          <img src="/logo.png" className="register-logo" />
        </Box>
        <Box
          className={classes.SignUpColor}
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          <Typography variant="h3" component="h4">
            Register
          </Typography>
          <Typography>Connect to Trust Wallet</Typography>
          <div className="login-space-line"></div>
          <Box textAlign="center">
            {" "}
            <div className="login-button">
              <input
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>{" "}
          </Box>
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
                onClick={RegisterUser}
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
              Connect to Your DApp wallet to enter the dashboard.{" "}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              component="h5"
              style={{ fontSize: "1rem" }}
            >
              <Link
                to="/login"
                style={{ cursor: "pointer" }}
                className="sinIn_alreadyRe"
              >
                Sign In
              </Link>{" "}
              if already registered{" "}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
