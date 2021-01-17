import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import clsx from "clsx";
import { useStyles } from "./styles";
import { BuyToken } from "../../userDataFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import Web3 from "web3";

export default function BuyPopup({ handleClose, open }) {
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
    waveCurrentPrice,
    withoutwaveCurrentPrice,
    supplyValue
  } = getReducer;

  // console.log("here are the d center===>", metaMaskDecentralized);

  const closeTheModal = (isTrue) => {
    if (isTrue) {
      handleClose();
    }
  };

  const ManageLoader = (isFalse) => {
    setLoader(isFalse);
  };
  // const web3 = new Web3(Web3.givenProvider || "http://localhost8545");

  const BuyTokenFunction = async () => {
    if (numberOfTokens === "") {
    }
     else if (numberOfTokens > 30000) {
      toast.warning(
        "limit exceeded 30000 per transaction just for ETH handling!"
      );
    }
    else {
      console.log(metaMaskDecentralized, 'asdsadsadsad')
      setLoader(true);
      if (metaMaskDecentralized && userAccountAddress && stakingDcentralized) {
        let getVal = await metaMaskDecentralized.methods
          .tokenToEthereum(JSON.stringify(numberOfTokens * 1000000000))
          .call();
        // let addZero = supplyValue ? Number(getVal + "0") : getVal;
        let amount = (1 / eatherInUsdt) * getVal;

        let convert = parseInt(amount);

        BuyToken(
          metaMaskDecentralized,
          numberOfTokens,
          userAccountAddress,
          closeTheModal,
          convert,
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
                <h5 className="white">Buy DLT Token</h5>
                <small className="white" style={{ color: "#48C6C8" }}>
                  {/* 1 wave = ({price}) */}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* Your TRX balance = ({walletBalance + " TRX"}) */}
                </small>
              </div>
              <IconButton className={classes.btn} onClick={handleClose}>
                <Close className="white" />
              </IconButton>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} className={classes.marginTop}>
                <TextField
                  className={classes.formField}
                  id="outlined-basic"
                  label="Enter number of tokens"
                  variant="outlined"
                  value={numberOfTokens}
                  onChange={(e) => setNumberOfTokens(e.target.value)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                className={clsx(classes.marginTop, classes.float)}
              >
                {loader ? (
                  <Button className={classes.withDrawBtn}>Loading...</Button>
                ) : (
                  <Button
                    className={classes.withDrawBtn}
                    onClick={BuyTokenFunction}
                  >
                    Submit Request
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
