import React, { useRef, useState, useLayoutEffect } from "react";
import Register from "./components/Register/Register";
import { Route, Redirect } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import { useSelector } from "react-redux";
import Login from "./components/Register/SignIn";
// import LandingPage from "./LandingPage/src/App/App";
import SplashScreen from "./components/SplashScreen";
import store from "./redux/store";
// import Timer from "./components/TimerPage";
import Web3 from "web3";
import ABI from "./utils/contracts/tokenABI.json";
import stakingABI from "./utils/contracts/stakingABI.json";
import { environment } from "./environment";

/**
 * @author
 * @function MainApp
 **/

const AuthRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !authUser ? (
        <Redirect
          to={{
            pathname: "/login",
            // state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const MainApp = (props) => {
  const getReducer = useSelector((state) => state.UserReducer);
  const { isUserAuthenticated, currentUserStatus } = getReducer;

  const [metaMastAcc, setMetaMaskAcc] = useState();
  const [dcentralized, setDcentralized] = useState();

  // React.useEffect(() => {
  //   window.ethereum.on("accountsChanged", (accounts) => {
  //     if (accounts[0]) {
  //       const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
  //       store.dispatch({
  //         type: "USER_METAMASK_ACCOUNT",
  //         payload: web3.utils.toChecksumAddress(accounts[0]),
  //       });
  //     }
  //   });
  // }, []);

  //Ethereum implementation
  // 0x14F42cf0614620DdE33E45909eBf8b1364e92b57
  useLayoutEffect(() => {
    Ethereum();
    async function Ethereum() {
      window.ethereum && window.ethereum.enable();
      let connectAccount = setInterval(async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
        const account = await web3.eth.getAccounts();
        if (account[0]) {
          setMetaMaskAcc(account[0]);

          const dcentralized = new web3.eth.Contract(
            ABI,
            environment.REACT_APP_TOKEN_ADDRESS
          );

          const stakingDcentralized = new web3.eth.Contract(
            stakingABI,
            environment.REACT_APP_STAKE_ADDRESS
          );
          store.dispatch({
            type: "USER_METAMASK_ACCOUNT",
            payload: account[0],
          });
          store.dispatch({
            type: "METAMASK_STAKING_DCENTRALIZED",
            payload: stakingDcentralized,
          });
          store.dispatch({
            type: "METAMASK_DECENTRALIZED",
            payload: dcentralized,
          });

          setDcentralized(dcentralized);

          clearInterval(connectAccount);
        }
      }, 1000);
    }
  }, []);

  const getCurrentWallet = async () => {
    try {
      let getWalletAddress = await localStorage.getItem("_DTL_LOGIN_ADDRESS");
      // console.log("here is the getWallet===>",getWalletAddress,"=====>",metaMastAcc)
      if (
        getWalletAddress &&
        dcentralized &&
        metaMastAcc === getWalletAddress
      ) {
        // console.log("came here into first log");
        // await getUserData(getWalletAddress, tronWeb).then(() => {
        store.dispatch({
          type: "USER_AUTHENTICATED",
        });
        // });
      } else if (!getWalletAddress) {
        // console.log("came here into second log");
        store.dispatch({
          type: "AUTHENTICATED_FAILED",
        });
      } else if (metaMastAcc && metaMastAcc != getWalletAddress) {
        // console.log("came here into third log");
        store.dispatch({
          type: "AUTHENTICATED_FAILED",
        });
      }
    } catch (err) {
      // console.log("came here into catch log", err);
      store.dispatch({
        type: "AUTHENTICATED_FAILED",
      });
    }
  };

  React.useEffect(() => {
    getCurrentWallet();
  }, [dcentralized, metaMastAcc]);

  if (currentUserStatus === "") {
    return <SplashScreen />;
  } else
    return (
      <>
        {/* <Route path="/" component={() => <LandingPage />} /> */}
        <AuthRoute
          // exact
          path="/"
          authUser={isUserAuthenticated}
          component={DashboardRoutes}
        />

        {/* <Route
          exact
          path="/register"
          component={() =>
            isUserAuthenticated ? <Redirect to="/" /> : <Register />
          }
        /> */}
        <Route
          exact
          path="/login"
          component={() =>
            isUserAuthenticated ? <Redirect to="/" /> : <Login />
          }
        />
      </>
    );
};

export default MainApp;
