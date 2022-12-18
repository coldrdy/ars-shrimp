import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Gallery = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="gallery"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
                        >
                            Galeri{" "}
                        </motion.h3>
                        <motion.p
                            className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                            variants={scrollAnimation}
                        >
                            Lihat aktivitas kami
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <img
                                src="/assets/ars/1.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/2.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/3.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/4.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <img
                                src="/assets/ars/5.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/6.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/7.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/8.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <img
                                src="/assets/ars/9.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/10.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                            <img
                                src="/assets/ars/11.webp"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                loading="lazy"
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
