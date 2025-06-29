import React from 'react';
import { motion } from "framer-motion";

const SVG = () => {
    return (
        <motion.svg
            viewBox="0 0 512 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-6 opacity-60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
        >
            <motion.path
                d="M0 20 C 50 10, 100 30, 150 20 S 250 10, 300 20 S 400 30, 500 20"
                stroke="#a9adb0"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
            />
        </motion.svg>
    );
};

export default SVG;
