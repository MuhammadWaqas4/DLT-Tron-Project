import React from 'react';
import clsx from 'clsx'
import { Box, Card, makeStyles } from '@material-ui/core';
// import Layout from '../components/layout';
import bgBanner from '../../assets/images/bg.jpg';

const useStyles = makeStyles({
  root:{
    height: "600px",
    borderRadius: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.03)",
    background: `linear-gradient(#3375BBdd, #3375BBdd), url(${bgBanner}) no-repeat center center`,
    backgroundSize: "cover",
    backgroundColor: "#326BB1",
  }
})

function Contract() {
  const classes = useStyles();
  return (
    // <Layout>
    <div className={clsx("container my-5 p-0", classes.root)}>
      <Card className="">
        <div className="card-header border-bottom">
          <h5 className="text-white">Contact Details</h5>
        </div>
        <div className="card-body text-white">
          <Box>
            <h6 className="m-0">Smart Contract</h6>
            <a className="text-decoration-none">
              0xd42ddae452e3fa2430ea72884fa0185ce8d38936 
              &nbsp;<i className="fas fa-external-link-alt"></i>
            </a>
            <hr className="border-bottom" />
          </Box>
          <Box>
            <h6 className="m-0">ERC20 Contract</h6>
            <a className="text-decoration-none">
              0xd42ddae452e3fa2430ea72884fa0185ce8d38936 
              &nbsp;<i className="fas fa-external-link-alt"></i>
            </a>
            <hr className="border-bottom" />
          </Box>
          <Box>
            <h6 className="m-0">Distributed Total/Supply</h6>
            <p>182745/777777</p>
          </Box>
          <Box>
            <h6 className="m-0">Referral Distributed/80,000 T7T</h6>
            <p>30870.55/(38.59%)</p>
          </Box>
        </div>
      </Card>
    </div>
    // </Layout>
  )
}

export default Contract
