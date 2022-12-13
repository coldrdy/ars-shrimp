import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Image from "next/image";

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
                            Gallery{" "}
                        </motion.h3>
                        <motion.p
                            className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                            variants={scrollAnimation}
                        >
                            See the activity of our shrimp farm and our shrimp processing
                            plant.
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <Image
                                src="/assets/ars/1.jpg"
                                className="h-44 w-auto mt-4 lg:mt-2"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/2.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/3.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/4.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <Image
                                src="/assets/ars/5.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/6.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/7.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/8.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <Image
                                src="/assets/ars/9.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/10.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                            <Image
                                src="/assets/ars/11.jpg"
                                className="h-44 w-auto mt-4 lg:mt-0"
                                alt="Ars Shrimp"
                                width={264}
                                height={176}
                                quality={50}
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
