import React, { useMemo } from "react";
import Testimoni from "./Testimoni"
import ButtonPrimary from "./misc/ButtonPrimary"
import { motion } from "framer-motion"
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper"
import getScrollAnimation from "../utils/getScrollAnimation";
import Link from "next/link";

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
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
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
                                    <h5 className="text-black-500-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        Are you ready <br /> to join us?
                                    </h5>
                                    <h6 className="mt-3">Visit our store</h6><br />
                                    <li className="mt-2"><strong>Address:</strong> CV. Sumber KDH Gebang Kulon, Kec. Gebang, Kab. Cirebon, Jawa Barat, Indonesia 45190</li>
                                    <li className="mt-2"><strong>Monday - Thursday:</strong> 08.00 - 16.00 WIB</li>
                                    <li className="mt-2"><strong>Friday - Sunday:</strong> 08.00 - 17.00 WIB</li>
                                    
                                </div>
                                <li className="mt-2"><strong>Email:</strong><a href="mailto:arsshrimp@gmail.com"> arsshrimp@gmail.com</a></li>
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