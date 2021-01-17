import { Grid, Paper, Typography, Box, Button } from "@material-ui/core";
// import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";
import {
  WithDrawStakeEarning,
  WithDrawReferralReward,
} from "../../userDataFunctions";
import { useSelector } from "react-redux";
// import PausedTable from "../pausedTransactionsTable";

function WithDraw() {
  const classes = useStyles();
  const getReducer = useSelector((state) => state.UserReducer);

  const {
    totalWithdrawn,
    availableWithdrawn,
    bonusBalanceAndAvailableRefReward,
    withdrawRef,
    totalReward,
    metaMaskDecentralized,
    userAccountAddress,
    stakingDcentralized
  } = getReducer;

  const WithDrawStake = async () => {
    if (metaMaskDecentralized && userAccountAddress && stakingDcentralized) {
      WithDrawStakeEarning(
        metaMaskDecentralized,
        userAccountAddress,
        stakingDcentralized
      );
    }
  };

  const WithdrawRefReward = async () => {
    if (metaMaskDecentralized && userAccountAddress && stakingDcentralized) {
      WithDrawReferralReward(
        metaMaskDecentralized,
        userAccountAddress,
        stakingDcentralized
      );
    }
  };

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        {/* <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.card}>
            <div className={classes.left}></div>
            <div className={classes.right}>
              <p className="margin-none white">Pending Requests</p>
              <h6 className="white">0 WAVE</h6>
            </div>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.card}>
            <div className={classes.left}></div>
            <div className={classes.right}>
              <p className="margin-none white">Available Rewards</p>
              <h6 className="white">
                {totalReward ? parseFloat(totalReward).toFixed(3) : 0} DLT
              </h6>
              <p className="margin-none small-para white">
                Total Earned Rewards: {totalWithdrawn ? totalWithdrawn : 0} DLT
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.card}>
            <div className={classes.left}></div>
            <div className={classes.right}>
              <p className="margin-none white">Available Commissions</p>
              <h5 className="white">
                {bonusBalanceAndAvailableRefReward
                  ? bonusBalanceAndAvailableRefReward
                  : 0}{" "}
                DLT
              </h5>
              <p className="margin-none small-para white">
                Total Earned Commissions: {withdrawRef ? withdrawRef : 0} DLT
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.tableBox}>
            <div className={classes.top}>
              <h6 className="white">Withdraw Stake Earnings</h6>
              <Button className={classes.btn}>Active</Button>
            </div>
            <Grid container spacing={3} className={classes.tableContainer}>
              <Grid item xs={12} lg={6}>
                <div className={classes.stackBox}>
                  <div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <Typography variant="span" style={{ fontSize: 20 }}>
                        Total Available to Withdrawn:{" "}
                        <b style={{ color: "white" }}>
                          {totalReward ? parseFloat(totalReward).toFixed(3) : 0} DLT
                        </b>
                      </Typography>
                    </div>
                    <div
                      style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}
                    >
                      <Typography variant="span">
                        Total Withdrawn:{" "}
                        <b style={{ color: "white" }}>
                          {totalWithdrawn ? totalWithdrawn : 0} DLT
                        </b>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <div>
                <div className={classes.field}>
                  <p className={classes.fieldLeft}>Amount to withdraw</p>
                  <input
                    type="number"
                    className={classes.fieldRight}
                    value="0"
                  />
                </div>
                <div style={{ float: "right" }}>
                  <small className={clsx(classes.bottomBox, "small-num")}>
                    Withdrawal fee: 1 WAVE
                  </small>
                  <small className={clsx(classes.bottomBox, "small-num")}>
                    Amount to receive: NaN WAVE
                  </small>
                </div>
              </div> */}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  width="100%"
                >
                  {/* <Button className={classes.clearBtn}>Clear</Button> */}
                  <Button
                    className={classes.withDrawBtn}
                    onClick={WithDrawStake}
                  >
                    WithDraw Stake Earning
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <small className="white">
                  A Withdrawal fee of 1 DLT will be deducted.
                </small>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.tableBox}>
            <div className={classes.top}>
              <h6 className="white">Withdraw Referrals Rewards</h6>
              <Button className={classes.btn}>Active</Button>
            </div>
            <Grid container spacing={3} className={classes.tableContainer}>
              <Grid item xs={12} lg={6}>
                <div className={classes.stackBox}>
                  <div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <Typography variant="span" style={{ fontSize: 20 }}>
                        Total Available to Withdrawn:{" "}
                        <b style={{ color: "white" }}>
                          {bonusBalanceAndAvailableRefReward
                            ? bonusBalanceAndAvailableRefReward
                            : 0}{" "}
                          DLT
                        </b>
                      </Typography>
                    </div>
                    <div
                      style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}
                    >
                      <Typography variant="span">
                        Total Withdrawn:{" "}
                        <b style={{ color: "white" }}>
                          {withdrawRef ? withdrawRef : 0} DLT
                        </b>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <div>
                <div className={classes.field}>
                  <p className={classes.fieldLeft}>Amount to withdraw</p>
                  <input
                    type="number"
                    className={classes.fieldRight}
                    value="0"
                  />
                </div>
                <div style={{ float: "right" }}>
                  <small className={clsx(classes.bottomBox, "small-num")}>
                    Withdrawal fee: 1 WAVE
                  </small>
                  <small className={clsx(classes.bottomBox, "small-num")}>
                    Amount to receive: NaN WAVE
                  </small>
                </div>
              </div> */}
                <Box display="flex" flexDirection="row" width="100%">
                  {/* <Button className={classes.clearBtn}>Clear</Button> */}
                  <Button
                    className={classes.withDrawBtn}
                    onClick={WithdrawRefReward}
                  >
                    WithDraw Referral Reward
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <small className="white">
                  A Withdrawal fee of 1 DLT will be deducted.
                </small>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Box>
        </Grid>
      </Grid>
      {/* <PausedTable /> */}
    </>
  );
}

export default WithDraw;
