import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Typography, createMuiTheme } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BsQuestionCircle } from "react-icons/bs";
import bgBanner from "../../assets/images/bg.jpg";
import "./referral.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
// import { environment } from "../../environment";

export default function Referral() {
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

    // typeoGrapyColor: theme.palette.text.secondary

    IconSvg: {
      // padding: theme.spacing(3, 2),
      height: 200,
      verticalAlign: "middle",
    },

    box1: {
      borderRadius: "20px",
      backgroundColor: "#222a31",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    },
  }));

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#222a31",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      // backgroundColor: "#27273d",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    // root: {
    //   "&:nth-of-type(odd)": {
    //     backgroundColor: theme.palette.action.hover,
    //   },
    // },
  }))(TableRow);

  const classes = useStyles();
  const getReducer = useSelector((state) => state.UserReducer);
  const { allRecentReferrals } = getReducer;

  return (
    <>
      <div style={{ borderRadius: "100%" }}>
        <Grid container>
          <Grid item lg={12} xs>
            <Box
              className={classes.box1}
              style={{
                color: "white",
                backgroundColor:
                  "linear-gradient(90deg, rgba(57,55,62,1) 26%, rgba(54,73,108,1) 53%, rgba(28,35,47,1) 84%)",
              }}
              m={1}
            >
              <Box
                className="table_top_border"
                textAlign="left"
                p={3}
                borderBottom={1}
                borderColor="borderColors.main !important"
              ></Box>

              <Box m={1}>
                <TableContainer>
                  <Table
                    className={classes.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="right">Data</StyledTableCell>
                        <StyledTableCell align="center">
                          {" "}
                          BlockChain Address{" "}
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody className="tablebodyBgImage">
                      {/* <div>  <BsQuestionCircle  /></div> */}
                      {allRecentReferrals.length
                        ? allRecentReferrals.map((i) => {
                            return (
                              <StyledTableRow>
                                <StyledTableCell
                                  align="right"
                                  style={{ color: "white" }}
                                >
                                  {moment.unix(i.date).format("MMM/DD/YYYY")}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  <a
                                    href={`https://etherscan.io/address/${i.add}`}
                                    style={{ color: "white" }}
                                    target="_blank"
                                  >
                                    {i.add}
                                  </a>
                                </StyledTableCell>
                              </StyledTableRow>
                            );
                          })
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
