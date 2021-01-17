import {
  Grid,
  Paper,
  makeStyles,
  Box,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  useTheme,
  IconButton,
  TableHead,
} from "@material-ui/core";
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
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

function Wallet() {
  const classes = useStyles();

  // const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [
    recentWalletTransactions,
    setrecentWalletTransactions,
  ] = React.useState([]);

  const rows =
    recentWalletTransactions &&
    recentWalletTransactions.map((i, index) => {
      return createData(
        +index + +1,
        moment.unix(i.timeStamp.slice(0, 10)).format("MMM/DD/YYYY"),
        i.hash.slice(0, 10) + "....." + i.hash.slice(59),
        web3.utils.fromWei(i.value)
      );
    });
  // .sort((a, b) => (a.calories < b.calories ? -1 : 1));

  const getReducer = useSelector((state) => state.UserReducer);

  const {
    atStake,
    userPersonalBalance,
    bonusBalanceAndAvailableRefReward,
    userAccountAddress
  } = getReducer;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    // console.log("came here=====================>");
    const getEventsByContractAddress = async () => {
      try {
        let getData = await axios.get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${userAccountAddress}&startblock=0&endblock=99999999&sort=asc&apikey=HA4NBKR4NTJDW2VX99Z57Z4FTDRAZWF9TA`
        );
        setrecentWalletTransactions(getData.data.result);
        // console.log("here is the data of transactions===>", getData);
      } catch (error) {
        console.error(error);
      }
    };

    getEventsByContractAddress();
  }, []);

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.card}>
          <div className={classes.left}></div>
          <div className={classes.right}>
            <p className="margin-none white">Total DLT Balance</p>
            <h6 className="white">
              {userPersonalBalance ? userPersonalBalance : 0} DLT
            </h6>
            <p className="margin-none small-para white">
              Stake and earn up to 3% Per Month, Stake Now
            </p>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.card}>
          <div className={classes.left}></div>
          <div className={classes.right}>
            <p className="margin-none white">Deposit Stakes</p>
            <h6 className="white">{atStake ? atStake : 0} DLT</h6>
            {/* <p className="margin-none small-para white">Stake and earn up to 3% Per Month, Stake Now</p> */}
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.card}>
          <div className={classes.left}></div>
          <div className={classes.right}>
            <p className="margin-none white">Bonus Balance</p>
            <h6 className="white">
              {bonusBalanceAndAvailableRefReward
                ? bonusBalanceAndAvailableRefReward
                : 0}{" "}
              DLT
            </h6>
            {/* <p className="margin-none small-para white">Stake and earn up to 3% Per Month, Stake Now</p> */}
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.tableBox}>
          <div className={classes.top}>
            <h6 className="white">Recent Wallet Transactions</h6>
            <Button className={classes.btn}>Active</Button>
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
  );
}

export default Wallet;

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
