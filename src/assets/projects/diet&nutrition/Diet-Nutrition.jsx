import React from 'react';
// import Hero_img from "../../../assets/projects/e-commerce/hero1.png";
// import Colors from "../../../assets/projects/e-commerce/colors.png";

const Diet_n_Nutrition = () => {
    return (
        <>
            {/* hero section */}
            <div className="e-commerce-container">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="row justify-content-around ">
                                <div className="col-12 colors">
                                    {/* <img src={Colors} className="mx-auto d-block img-fluid" alt="Colors" /> */}
                                </div>
                            </div>
                            <div className="row justify-content-around align-items-center hero">
                                <div className="col-sm-12 col-lg-4 hero-text colors">
                                    <h1>Comming soon</h1>
                                    {/* <img src={Hero_img} className="mx-auto d-block img-fluid" alt="Hero image" /> */}
                                </div>

                                <div className="col-sm-12 col-lg-7 hero-text">
                                    <h1>DayLish Dish App</h1>
                                    <h1>UX/UI Challenge</h1>
                                    <p className="p-5">Your one-stop Diet & Nutrition plan with quick recipes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Diet_n_Nutrition