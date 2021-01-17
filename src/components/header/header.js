import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#112057",
  }
}))

function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} md={2}>
        <Box display="flex" flexDirection="row" py={1} px={4}>
           <img src={image1} width="25" height="25" className="mr-2" />
         <Box display="flex" flexDirection="column">
           <p className="m-0 white small-para">DTT/USD</p>
           <small className="lightgreen small-num">0.00000000</small>
         </Box>
       </Box>
      </Grid>
      <Grid item xs={4} md={2}>
          <Box display="flex" flexDirection="row" py={1} px={4} className="border-green">
          <img src={image2} width="25" height="25" className="mr-2" />
          <Box display="flex" flexDirection="column">
           <p className="m-0 white small-para">BTC/USD</p>
            <Box display="flex" flexDirection="row">
             <small className="lightgreen small-num">0.00000000</small>
              <small className="green small-num ml-3">0.00000000</small>
             </Box>
          </Box>
         </Box>
      </Grid>
      <Grid item xs={4} md={2}>
      <Box display="flex" flexDirection="row" py={1} px={4} className="border-green">
          <img src={image3} width="25" height="25" className="mr-2" />
          <Box display="flex" flexDirection="column">
            <p className="m-0 white small-para">ETH/USD</p>
            <Box display="flex" flexDirection="row">
              <small className="lightgreen small-num">0.00000000</small>
              <small className="green small-num ml-3">0.00000000</small>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} md={2}>
        <Box display="flex" flexDirection="row" py={1} px={4} className="border-green">
          <img src={image4} width="25" height="25" className="mr-2" />
          <Box display="flex" flexDirection="column">
            <p className="m-0 white small-para">LTC/USD</p>
            <Box display="flex" flexDirection="row">
              <small className="lightgreen small-num">0.00000000</small>
              <small className="green small-num ml-3">0.00000000</small>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} md={2}>
      <Box display="flex" flexDirection="row" py={1} px={4} className="border-green">
          <img src={image5} width="25" height="25" className="mr-2" />
          <Box display="flex" flexDirection="column">
            <p className="m-0 white small-para">XRP/USD</p>
            <Box display="flex" flexDirection="row">
              <small className="lightgreen small-num">0.00000000</small>
              <small className="green small-num ml-3">0.00000000</small>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} md={2}>
      <Box display="flex" flexDirection="row" py={1} px={4} className="border-green">
          <img src={image6} width="25" height="25" className="mr-2" />
          <Box display="flex" flexDirection="column">
            <p className="m-0 white small-para">DASH/USD</p>
            <Box display="flex" flexDirection="row">
              <small className="lightgreen small-num">0.00000000</small>
              <small className="green small-num ml-3">0.00000000</small>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
