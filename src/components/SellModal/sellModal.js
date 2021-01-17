import React from "react";
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import clsx from "clsx";
import { SellToken } from "../../userDataFunctions";
import { useSelector } from "react-redux";

// import {useStyles} from './styles';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#222A31",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    maxHeight: 450,
    maxWidth: 900,
    borderRadius: 20,
    backgroundSize: "cover",
  },
  btn: {
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formField: {
    width: "100%",
    color: "#E9B743",
    backgroundColor: "transparent",
    borderColor: "#E9B743",
    "&:focus": {
      borderColor: "#E9B743",
    },
  },
  float: {},
  clearBtn: {
    backgroundColor: "#D33949",
    color: "white",
    borderRadius: 20,
    marginTop: 10,
    float: "right",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:hover": {
      backgroundColor: "#D33949",
    },
  },
  withDrawBtn: {
    background: "linear-gradient(90deg, #132660 10%, #0062cc 90%)",
    backgroundSize: "200% 100%",
    width: 150,
    color: "white",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 5,
    float: "right",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
}));

export default function SellPopup({ handleClose, open }) {
  const classes = useStyles();
  const [numberOfTokens, setNumberOfTokens] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const getReducer = useSelector((state) => state.UserReducer);

  const {
    metaMaskDecentralized,
    userAccountAddress,
    oneTokenPrice,
    eatherInUsdt,
    stakingDcentralized,
    supplyValue,
  } = getReducer;

  const closeTheModal=(isTrue)=>{
    if(isTrue){
      handleClose();
    }
  }

  const ManageLoader = (isFalse) => {
    setLoader(isFalse);
  };

  const BuyTokenFunction = async () => {
      if (numberOfTokens === "") {
      } else {
        setLoader(true);
        if (metaMaskDecentralized && userAccountAddress && stakingDcentralized) {
          let getVal = await metaMaskDecentralized.methods
            .ethereumTotoken(
              JSON.stringify(Number(numberOfTokens + "000000000"))
            )
            .call();
            // oneTokenPrice * numberOfTokens
            // let addZero = supplyValue ? Number(getVal + "0") : getVal;
          let amount = parseInt((1 / eatherInUsdt) * getVal);

          SellToken(
            metaMaskDecentralized,
            numberOfTokens,
            userAccountAddress,
            closeTheModal,
            amount,
            stakingDcentralized,
            getVal,
            ManageLoader
          );
        }
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <div>
                <h5 className="white"> Sell DLT Tokens</h5>
                {/* <small className="white">Fields with <span className="red">*</span> are mendatory</small> */}
              </div>
              <IconButton className={classes.btn} onClick={handleClose}>
                <Close className="white" />
              </IconButton>
            </div>
            <Grid container spacing={3}>
              {/* <Grid item   lg={6} xs className={classes.marginTop}>
              <TextField   className={classes.formField} id="outlined-basic" label="Select Currency *" variant="outlined" />
              </Grid> */}
              {/* <Grid item  lg={6} xs className={classes.marginTop}> */}
              {/* Select Amount (wave) * (Available Balance: 0 wave) */}
              {/* <TextField   className={classes.formField} id="outlined-basic" label="Select Amount (wave)" variant="outlined" />
              </Grid> */}
              {/* <Grid item xs={12} className={classes.marginTop}> */}
              {/* Approx. ETH You Will Recieve * (Your balance: 0 ETH) */}
              {/* <TextField className={classes.formField} id="outlined-basic" label=" your balance" variant="outlined" />
              </Grid> */}
              <Grid item xs={12} className={classes.marginTop}>
                <TextField
                  className={classes.formField}
                  value={numberOfTokens}
                  onChange={(e) => setNumberOfTokens(e.target.value)}
                  id="outlined-basic"
                  label="Enter number of tokens"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx(classes.marginTop, classes.float)}
              >
                {loader ? (
                  <Button className={classes.withDrawBtn} paddingRight="20px">
                    Loading...
                  </Button>
                ) : (
                  <Button
                    onClick={BuyTokenFunction}
                    className={classes.withDrawBtn}
                    paddingRight="20px"
                  >
                    Sell Tokens
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
