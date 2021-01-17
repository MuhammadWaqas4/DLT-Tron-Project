import React from 'react';
const Affiliate = () =>{
    return(
        <>
        <section class="section" id="affiliate">
        <div class="container">
            <div class="section-title mini-title">
                <h3>Affiliate</h3>
            </div>
            <p class="lead p-3 centered-text text-center mx-auto">Invite your friends and earn rewards. <br/>Invite your friends to Wave and earn up to 15% Commission
            </p>
            <div class="row">
                <div class="col-lg-4">
                    <div class="steps">
                        <div class="steps-icon"><span>01</span><i class="fas fa-user-plus"></i></div>
                        <div class="steps-content">
                            <h3 class="steps-title">Login</h3>
                            <div class="steps-desc">
                                <p>Make Investment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="steps">
                        <div class="steps-icon"><span>02</span><i class="fas fa-share-alt"></i></div>
                        <div class="steps-content">
                            <h3 class="steps-title">Share</h3>
                            <div class="steps-desc">
                                <p>Invite your friends to Wave</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="steps">
                        <div class="steps-icon"><span>03</span><i class="far fa-smile"></i></div>
                        <div class="steps-content">
                            <h3 class="steps-title">Enjoy</h3>
                            <div class="steps-desc">
                                <p>Earn up to 15% Commission</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>

    );
}

export default Affiliate;