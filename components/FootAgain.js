import React, { useMemo } from "react";
import Testimoni from "./Testimoni"
import ButtonPrimary from "./misc/ButtonPrimary"
import { motion } from "framer-motion"
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper"
import getScrollAnimation from "../utils/getScrollAnimation";
import ButtonOutline from "./misc/ButtonOutline.";

const Foot = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-20"
            id="pricing"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
                        >
                            Trusted by Thousands of Happy Customer{" "}
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                        >
                            These are the stories of our customers who have joined us.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <Testimoni />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="relative w-full mt-16">
                        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        Visit our store <br/>
                                    </h5>
                                    <iframe className="mt-3 h-auto w-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253542.95235551294!2d108.460822025!3d-6.8173633999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f072fa7bc7d69%3A0x8a8e529e69e9876a!2sCV%20SUMBER%20REJEKI%20KDH!5e0!3m2!1sen!2ssg!4v1670947618897!5m2!1sen!2ssg" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <p className="mt-6">
                                    <ButtonOutline><a href="https://wa.me/6283103245728">Contact Us</a></ButtonOutline>
                                    </p>
                            </div>
                            <div
                                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                                style={{ filter: "blur(114px)" }}
                            ></div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Foot;