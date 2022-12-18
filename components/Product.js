import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Product = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="products"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                        >
                            Produk
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                        >
                            Pilih paket yang terbaik untuk Anda
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .1
                                    }
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <Image
                                        src="/assets/ars/p-1.jpg"
                                        width={500}
                                        height={500}
                                        alt="Vannamei"
                                    />
                                </div>
                                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                                Vannamei
                                </p>
                                <p className="text-md text-black-500 font-light text-justify mb-9">
                                Udang Vannamei atau udang putih merupakan spesies udang budidaya Indonesia yang berasal dari Amerika Tengah, jenis udang yang biasa disebut Pacific White Shrimp. Kelebihan udang Vannamei adalah mengandung lemak omega 3 dan astatanthin yang baik untuk kesehatan jantung. Kandungan tersebut dapat mencegah berbagai resiko penyakit jantung karena dapat mengatur kadar trigliserida dalam tubuh manusia.
                                </p>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative check custom-list my-2">
                                        Ukuran: 30-100
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Kemasan: Box Gaya Kotak Warna 
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Pembayaran: Down Payment
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                                        Free
                                    </p> */}
                                    <ButtonOutline><Link href="https://wa.me/6283103245728">Hubungi kami</Link></ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        {/* <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <Image
                                        src="/assets/Standard.png"
                                        width={145}
                                        height={165}
                                        alt="Standard Plan"
                                    />
                                </div>
                                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                                    Standard Plan{" "}
                                </p>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative check custom-list my-2">
                                        Unlimited Bandwitch
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Encrypted Connection
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        No Traffic Logs
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Works on All Devices
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Connect Anyware{" "}
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    <p className="text-2xl text-black-600 text-center mb-4 ">
                                        $9 <span className="text-black-500">/ mo</span>
                                    </p>
                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                            >
                                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                                    <Image
                                        src="/assets/Premium.png"
                                        width={145}
                                        height={165}
                                        alt="Premium Plan"
                                    />
                                </div>
                                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                                    Premium Plan{" "}
                                </p>
                                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                                    <li className="relative check custom-list my-2">
                                        Unlimited Bandwitch
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Encrypted Connection
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        No Traffic Logs
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Works on All Devices
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Connect Anyware{" "}
                                    </li>
                                    <li className="relative check custom-list my-2">
                                        Get New Features{" "}
                                    </li>
                                </ul>
                                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                    <p className="text-2xl text-black-600 text-center mb-4 ">
                                        $12 <span className="text-black-500">/ mo</span>
                                    </p>

                                    <ButtonOutline>Select</ButtonOutline>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;