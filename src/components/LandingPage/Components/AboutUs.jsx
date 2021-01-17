import React from 'react';
const AboutUs = () =>{
    return(
        <>
        <section class="section" id="about-us">
        <div class="container">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-12 col-md-6">
                    <img src="images/waweimage/wavefee.svg" alt="illustration" class="img-fluid"/>
                </div>
                <div class="col-12 col-md-6">
                    <h6 class="text-info mb-4 text-uppercase">
                        WHY Wave Exchange
                    </h6>
                    <h2 class="mb-4">Together, We’re Modernizing Global Payments</h2>
                    <p class="lead mb-4">
                        It’s the fastest and most scalable digital asset, enabling real-time global payments anywhere in the world.
                    </p>
                    <p>
                        Today the world sends more than $155 trillion* across borders. Yet, the underlying infrastructure is dated and flawed. Wave Exchange connects banks, payment providers and digital asset exchanges via RippleNet to provide one frictionless expWave Exchange
                        to send money globally.
                    </p>
                    <a href="#" class="btn btn-outline-secondary mt-3">Read our Mission</a>
                </div>
            </div>
        </div>
    </section>

        </>

    );
}

export default AboutUs;