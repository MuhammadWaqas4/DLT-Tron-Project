import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Typography, createMuiTheme } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { BiBasket } from "react-icons/bi";
// import UnStakeModal from "../unStakeModal/unStakemodal";
import StakPopup from "../stakeModal/stakeModal";
// import { UstakeToken } from "../../userDataFunctions";
// import { environment } from "../../environment";
// import TronHelper from "../../utils/TronHelper";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import PausedTable from "../pausedTransactionsTable";
import {
  TableFooter,
  TablePagination,
  useTheme,
  IconButton,
} from "@material-ui/core";
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";

import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
// table data & styling

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  table: {
    minWidth: 500,
  },
}));

// import '../../App.css'
// import './stacks.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    // marginLeft: 30
  },
  table: {
    backgroundColor: "#222A31 !important",
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

  // typeoGrapyColor: theme.palette.text.secondary

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

  box1: {
    // backgroundColor: "#27273d",
    // backgroundImage:
    //   "linear-gradient(90deg, rgba(57,55,62,1) 26%, rgba(54,73,108,1) 53%, rgba(28,35,47,1) 84%)",
    borderRadius: "0px",
    /* opacity: 0.9; */
    /* background-position: cover; */
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  },

  Dashboard_boxButton: {
    // -webkit-appearance: "none",
    transition: "all 0.20s ease-in-out",
    backgroundColor: "#E9B743",
    // backgroundImage: "linear-gradient(45deg, #93c34a 0%, #52af4c 100%)",
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    background:
      "linear-gradient(90deg, rgba(57,55,62,1) 26%, rgba(54,73,108,1) 53%",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Stacks() {
  const classes = useStyles();
  const [openStake, setOpenStake] = React.useState(false);
  // const [unstakemodal, setUnstakeModal] = React.useState(false);
  const [totalstakes, setStakes] = React.useState([]);

  const getReducer = useSelector((state) => state.UserReducer);

  const { atStake, totalReward, userAccountAddress } = getReducer;

  const handleCloseStake = () => {
    setOpenStake(false);
  };

  const handleOpenStake = () => {
    setOpenStake(true);
  };

  React.useEffect(() => {
    const getEventsByContractAddress = async () => {
      try {
        let getData = await axios.get(
          `https://api.etherscan.io/api?module=account&action=tokentx&address=${userAccountAddress}&startblock=0&endblock=999999999&sort=asc&apikey=HA4NBKR4NTJDW2VX99Z57Z4FTDRAZWF9TA`
        );
        setStakes(getData.data.result);
        // console.log("here is the data===>", getData.data.result);
      } catch (error) {
        // console.error(error);
      }
    };
    getEventsByContractAddress();
  }, []);

  //new code
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows =
  totalstakes &&
  totalstakes.map((i, index) => {
      return createData(
        +index + +1,
        moment.unix(i.timeStamp.slice(0, 10)).format("MMM/DD/YYYY"),
        i.hash.slice(0, 10) + "....." + i.hash.slice(59),
        web3.utils.fromWei(i.value)
      );
    });
 
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item lg={6} xs className="box">
          <Box display="flex" className={classes.box1} m={1}>
            <Box
              width="200px"
              borderRadius="20px 0px 0px 20px"
              style={{}}
              p={1}
            >
              <Box m="10px" height="70px" className={classes.boxColor}>
                <AccountBalanceWalletIcon />
              </Box>
            </Box>

            <Box
              width="100%"
              height="auto"
              borderRadius="20px 20px 20px 20px"
              style={{ color: "#ffff" }}
              pt={2}
              alignItems="center"
            >
              <Typography color="colorText.main !important">
                {" "}
                Your stake
              </Typography>
              <Typography variant="h5" color="colorText.main !important">
                {" "}
                {atStake ? atStake : 0} DLT
              </Typography>
              <Typography color="colorText.main !important">
                {" "}
                0.25% Daily Reward
              </Typography>
            </Box>
            <Box
              borderRadius="0px 20px 20px 0px"
              width="100px"
              className="box_two"
              p={2}
              textAlign="center"
              style={{ color: "#ffff", backgroundColor: "#51383F" }}
            >
              <Typography variant="h5">
                $ <sup>USD</sup>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={6} xs>
          <Box display="flex" className={classes.box1} m={1}>
            <Box
              width="200px"
              borderRadius="20px 0px 0px 20px"
              style={{}}
              p={1}
            >
              <Box
                m="10px"
                // borderRadius="10px"
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
                {" "}
                Available Reward
              </Typography>
              <Typography variant="h5" color="colorText.main !important">
                {totalReward ? parseFloat(totalReward).toFixed(5) : 0} DLT
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid lg={12} xs style={{ textAlign: "center" }}>
        <Box m="10px" color="#E9B743">
          <Typography variant="h4" component="h4">
            Stake Your DLT
          </Typography>
          <Typography>Earn Reward upto 0.25% Daily !</Typography>
        </Box>
      </Grid>

      <Grid container>
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
                  // borderRadius="10px"
                  height="70px"
                  className={(classes.box_Ions, classes.boxColor)}
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
                <Typography variant="h6">
                  {" "}
                  Get Daily Reward on your Stake. 0.25% Daily Reward
                </Typography>
              </Box>
            </Box>
            <Box m="30px">
              <Button
                onClick={handleOpenStake}
                className={classes.Dashboard_boxButton}
                color="primary"
                variant="outlined"
                style={{
                  // backgroundColor: "#112C6B",
                  color: "#ffff",
                  padding: "5px 0px 5px 0px",
                }}
                fullWidth
              >
                Stake
              </Button>
            </Box>
            <Box textAlign="center" p={1}>
              {/* <Typography variant="h6" style={{ color: "#B01F2C" }}>
                {" "}
                Staking Paused !
              </Typography> */}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Table */}

      <PausedTable />
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.tableBox}>
            <div className={classes.top} style={{ marginTop: 20 }}>
              <h6 className="white">Recent Stake Transactions</h6>
              {/* <Button className={classes.btn}>Active</Button> */}
            </div>
            <TableContainer
              component={Paper}
              className={classes.tableTransparnet}
            >
              <Table
                className={classes.table}
                aria-label="custom pagination table"
              >
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell style={{ width: 160, color: "white" }}>
                      #
                    </TableCell>
                    <TableCell
                      style={{ width: 160, color: "white" }}
                      align="right"
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{ width: 160, color: "white" }}
                      align="right"
                    >
                      Transaction ID
                    </TableCell>
                    <TableCell
                      style={{ width: 160, color: "white" }}
                      align="right"
                    >
                      amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        style={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        {row.number}
                      </TableCell>
                      <TableCell
                        style={{ width: 160, color: "white" }}
                        align="right"
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        style={{ width: 160, color: "white" }}
                        align="right"
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell
                        style={{ width: 160, color: "white" }}
                        align="right"
                      >
                        {row.amount}
                      </TableCell>
                    </TableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      style={{ color: "white" }}
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true,
                      }}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>

      {/* <StakPopup open={openStake} handleClose={handleCloseStake} /> */}
      {/* <UnStakeModal open={unstakemodal} handleClose={UnstakeCloseModal} /> */}
    </div>
  );
}
export default Stacks;


function TablePaginationActions(props) {
  const classes = useStyles2();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <LastPage style={{ color: "white" }} />
        ) : (
          <FirstPage style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight style={{ color: "white" }} />
        ) : (
          <KeyboardArrowLeft style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft style={{ color: "white" }} />
        ) : (
          <KeyboardArrowRight style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <FirstPage style={{ color: "white" }} />
        ) : (
          <LastPage style={{ color: "white" }} />
        )}
      </IconButton>
    </div>
  );
}

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

function createData(number, calories, fat, amount) {
  return { number, calories, fat, amount };
}