"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                staggerDirection: -1,
            },
        },
    };
    const navItems = [
        { text: "Home", link: "/" },
        { text: "About", link: "/#about" },
        { text: "Skills", link: "/#skills" },
        { text: "Careers", link: "/#careers" },
        { text: "Tistory", link: "https://beomsun0829.tistory.com/" },
        { text: "GitHub", link: "https://github.com/beomsun0829" },
        { text: "Baekjoon", link: "https://solved.ac/profile/beomsun0829" },
    ];
    return (
        <nav className="fixed top-48 max-[630px]:top-24 place-self-center z-50 flex flex-col gap-12 max-w-[1300px] w-full mx-20">
            <div className="px-128 py-16 flex max-[630px]:px-32 w-full z-50 place-content-center place-items-center backdrop-blur-main bg-bg-1 border border-stroke-1 rounded-out max-[1300px]:border-x-0 max-[1300px]:rounded-none">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVars}
                    className="flex gap-32 max-[630px]:gap-16 max-[700px]:hidden"
                >
                    {navItems.map((link, index) => {
                        return <NavLink text={link.text} link={link.link} key={index} />;
                    })}
                </motion.div>
                <button
                    onClick={() => setNavbar(!navbar)}
                    className="hidden text-[28px] max-[700px]:block"
                >
                    {navbar ? <HiXMark /> : <HiBars3 />}
                </button>
            </div>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVars}
                className={`flex-col py-36 items-center content-center gap-32 max-[630px]:px-32 w-full z-50 place-content-between place-items-center backdrop-blur-main bg-bg-1 border border-stroke-1 rounded-out max-[1300px]:border-x-0 max-[1300px]:rounded-none ${navbar ? "flex" : "hidden"
                    }`}
            >
                {navItems.map((link, index) => {
                    return (
                        <NavLink textBig text={link.text} link={link.link} key={index} />
                    );
                })}
            </motion.div>
        </nav>
    );
}

const childVars = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
};
const NavLink = ({
    text,
    link,
    textBig,
}: {
    text: string;
    link: string;
    textBig?: boolean;
}) => {
    return (
        <motion.div variants={childVars}>
            <Link
                href={link}
                className={`hover:text-selected active:text-selected/75 duration-150 ${textBig ? "text-3" : "text-sub"
                    }`}
            >
                {text}
            </Link>
        </motion.div>
    );
};
