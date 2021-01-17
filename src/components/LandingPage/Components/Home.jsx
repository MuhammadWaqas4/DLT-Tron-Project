import React from 'react';
const Home = () => {
    return (
        <>
            <section class="site-header d-flex flex-column align-items-center justify-content-between" id="home">
                <div class="container">
                    <div class="row align-items-center mb-5">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="hero">
                                <h1>The {" "}
                            <span class="highlight">Digital Asset</span> for Payments
                        </h1>
                                <p class="lead mt-3 mx-auto">It’s the fastest and most scalable digital asset, enabling real-time global payments anywhere in the world.
                        </p>
                                <a href="#" class="btn btn-dark mt-3"  style={{fontSize:"20px"}} >Whitepaper
							<img src="images/right-arrow.svg" alt="arrow" />
                                </a>
                               


                            </div>
                            <br/>
                            {/* <h4>Download Klever wallet
                        </h4> */}
                         <div className="wallet_buttons"  ><a  href="https://play.google.com/store/apps/details?id=cash.klever.blockchain.wallet" target="blank"  className="google_play_store" ><img src="images/waweimage/googleplay.svg"/></a>
                          <a  href="https://apps.apple.com/us/app/id1525584688" target="blank" className="apple_wallet_store"  ><img   src="images/waweimage/appstore.svg"/></a> </div>
                        </div>


                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div id="svg-animation">
                           <img src="images/waweimage/HeaderSVG.svg" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="graph">
                    <img src="images/graph-dark.svg" alt="graph" class="img-fluid" />
                </div>
            </section>
        </>

    );
}

export default Home;