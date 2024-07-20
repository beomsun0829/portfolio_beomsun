import localFont from "next/font/local";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import Link from "next/link";

import * as fa from "react-icons/fa";
import Skills from "./components/skills";
import About from "./components/about";
import Careers from "./components/careers";
import Obsessed from "./components/obsessed";
import Project from "./components/project";

const hanson = localFont({
    src: "./hanson.woff2",
    display: "swap",
});


export default function Home() {
    const projectMetadata = getProjectMetadata();
    const projectPreviews = projectMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));

    return (
        <>
            <div className="flex flex-col max-w-[1300px] w-full pt-[150px] pb-[50px] gap-24">
                <div className="flex flex-col justify-center items-center">
                    <h1
                        className={`text-[50px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
                    >
                        홍범순 | Hong Beomsun
                    </h1>
                    <p className="text-body pt-[20px]">Backend, AI Developer</p>
                </div>
                <div className="flex flex-wrap gap-24 justify-center items-center">
                    <PrimaryButton
                        text="GitHub"
                        type="secondary"
                        link="https://github.com/beomsun0829"
                    />
                    <SecondaryButton text="Careers" type="primary" link="#careers" />
                    
                </div>
            </div>

            <About/>
            <Skills />
            <Careers />
            
            <Obsessed />

        </>
    );
}
