import React from 'react';
const TokenSale = () =>{
    return(
        <>
           <section class="section section-highlight" id="token">
        <div class="container">
            <div class="section-title mini-title">
                <h3>Token Sale</h3>
            </div>
            <p class="lead p-3 centered-text text-center mx-auto">Wave Exchange Token Pool is a fixed token economy set by the demand of the Coin Token Main Sale, which concluded on May 20
            </p>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-8">
                    <div class="table-responsive">
                        <table class="table table-striped token-table">
                            {/* <tr>
                                <td></td>
                                <td></td>
                            </tr> */}
                            <tr>
                                <td>Coin Name </td>
                                <td>Wave</td>
                            </tr>
                            <tr>
                                <td>Coin Symbol </td>
                                <td>WCN</td>
                            </tr>
                            <tr>
                                <td>Total Supply </td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>Wave Price: </td>
                                <td>latest price $</td>
                            </tr>
                            <tr>
                                <td>Smart Contract Address</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* <tr>
                                <td>Token Sale</td>
                                <td>85,000 ERC</td>
                            </tr> */}
                        </table>
                    </div>
                </div>
                 {/* <div class="col-lg-8">
						<div class="token-box">
							<div class="text-center">
								<div class="countdown-clock" data-datetime="January 28, 2019 10:30:00"></div>
							</div>
							
							<div class="text-center mt-5">
								<div class="btn btn-outline-secondary">Buy Token Now
									<img src="images/right-arrow.svg" alt="arrow">
								</div>
							</div>
						</div>
					</div>  */}
            </div>
            {/* <!-- <div class="row">
					<div class="col-12 col-md-6">
						<div class="section-title mini-title left-aligned">
							<h4>Token Distribution</h4>
						</div>
						<div class="d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 mb-md-0">
							<div class="flex-fill flex-shrink-1 w-50">
								<canvas id="distChart" class="donut-chart"></canvas>
							</div>
							<div id="dist_legend" class="flex-fill w-50 flex-grow-1 donut-legend"></div>
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="section-title mini-title left-aligned">
							<h4>Allocation of funds</h4>
						</div>
						<div class="d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 mb-md-0">
							<div class="flex-fill flex-shrink-1 w-50">
								<canvas id="alloChart" class="donut-chart"></canvas>
							</div>
							<div id="allo_legend" class="flex-fill w-50 flex-grow-1 donut-legend"></div>
						</div>
					</div>
				</div> --> */}
        </div>
    </section>
        </>

    );
}

export default TokenSale;