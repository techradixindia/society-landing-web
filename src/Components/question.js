
import React from "react";
import "./style.css"
import { Button } from 'primereact/button';

import { Card } from 'primereact/card';
function FrequentlyQuestion() {
    return (
        <>
            <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

            <h3 className="text-center mt-6 mb-6 font-semibold">FREQENTLY AKSED QUESTIONS </h3>
            <div className="container d-flex justify-content-center ">
                <div className="accordion d-flex justify-content-center flex-column col-10  " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item col-12 shadow-5 " style={{ borderRadius: "18px" }}  >
                        <h2 className="accordion-header " id="panelsStayOpen-headingOne"  >
                            <button className="accordion-button  text-purple-800" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                                <span className="font-medium"> 1. How does the free trial work?</span>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <br></br>
                    <div class="accordion-item col-12 shadow-5 " style={{ borderRadius: "18px" }}>
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed text-purple-800" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <span className="font-medium"> 2. Do i need to choose a plan now? </span>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <br></br>
                    <div className="accordion-item col-12 shadow-5 " style={{ borderRadius: "18px" }}>
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed text-purple-800" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <span className="font-medium">3. What payment types do you accept</span>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default FrequentlyQuestion;
            

          



