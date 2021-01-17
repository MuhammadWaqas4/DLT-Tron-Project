import React from 'react';
const Exchange = () => {
    return (
        <>
            <section class="section section-highlight" id="exchange">
                <div class="container">
                    <div class="section-title mini-title text-center">
                        <h3>Partners</h3>
                    </div>
                    {/* <p class="lead p-3 centered-text text-center mx-auto">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p> */}



                    <div class="row align-items-center">

                        <div class="col mr-auto" style={{ textAlign: "center", marginTop:"1rem" }}>
                            <img src="images\waweimage/dapplogo.svg" height="70" />
                        </div>
              
                        <div class="col  mr-auto" style={{ textAlign: "center",marginTop:"1rem" }}>
                            <img src="images\waweimage/download.svg" />
                        </div>
                        {/* <div class="col-sm">
                       <img src="images\waweimage/wastarian.svg" />
                   </div> */}

                    </div>






                    <div class="row align-items-center" style={{marginTop:"3rem"}}>

                        <div class="col-sm" style={{marginTop:"2rem"}} >
                            <img src="images\waweimage/identifier_RETINA.png" />
                        </div>
                        <div class="col-sm">
                            <img src="images\waweimage/fhg.svg" />
                        </div>
                        <div class="col-sm">
                            <img src="images\waweimage/wastarian.svg" />
                        </div>

                    </div>


                </div>
            </section>
        </>

    );
}

export default Exchange;