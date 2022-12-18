import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Kualitas Terbaik.",
  "100% Natural.",
  "Terpercaya.",
  "Higienis."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/ars/3.webp"
              alt="Ars Shrimp"
              layout="responsive"
              quality={75}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Kami menyediakan Udang dengan kualitas Terbaik
          </h3>
          <p className="my-2 text-black-500">
          Indonesia adalah salah satu produsen dan eksportir udang terbesar di dunia, Udang merupakan komoditas perikanan utama Indonesia yang merupakan komoditas ekspor dunia, Terdapat dua jenis komoditas udang yang utama, yaitu udang <strong>Vannamei</strong> dan udang <strong>Windu</strong>, Jawa Barat merupakan salah satu pusat udang di Indonesia, yaitu kota Cirebon yang diterjemahkan sebagai <strong>Kota Udang</strong>.</p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
