import localFont from "next/font/local";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import Link from "next/link";

import * as fa from "react-icons/fa";

const hanson = localFont({
    src: "./hanson.woff2",
    display: "swap",
});

const icons = [
    { name: 'Python', component: fa.FaPython },
    { name: 'C', component: fa.FaCuttlefish },
    { name: 'C#', component: fa.FaCuttlefish },
    { name: 'C++', component: fa.FaCuttlefish },
    { name: 'Node.js', component: fa.FaNodeJs },
    { name: 'JavaScript', component: fa.FaJs },
    { name: 'TypeScript', component: fa.FaJs },
    { name: 'Go', component: fa.FaGoogle },
    { name: 'Java', component: fa.FaJava },
    { name: 'React', component: fa.FaReact },
    { name: 'Next.js', component: fa.FaReact },
    { name: 'Django', component: fa.FaPython },
    { name: 'Android', component: fa.FaAndroid },
    { name: 'PyTorch', component: fa.FaPython },
    { name: 'HTML', component: fa.FaHtml5 },
    { name: 'CSS', component: fa.FaCss3 },
    { name: 'Arduino', component: fa.FaRaspberryPi },
    { name: 'Linux', component: fa.FaLinux },
    { name: 'Windows', component: fa.FaWindows },
    { name: 'Azure', component: fa.FaMicrosoft },
    { name: 'AWS', component: fa.FaAws },
    { name: 'GCP', component: fa.FaGoogle },
    { name: 'Docker', component: fa.FaDocker },
    { name: 'Kubernetes', component: fa.FaDocker },
    { name: 'Git', component: fa.FaGithub },
    { name: '', component: fa.FaEllipsisH }
];


export default function Home() {
    const projectMetadata = getProjectMetadata();
    const projectPreviews = projectMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));

    return (
        <>
            <div className="flex flex-col max-w-[1300px] w-full py-[200px] gap-24">
                <div className="flex flex-col justify-center items-center">
                    <h1
                        className={`text-[86px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
                    >
                        Hong Beomsun
                    </h1>
                    <p className="text-body">Backend, AI Developer</p>
                </div>
                <div className="flex flex-wrap gap-24 justify-center items-center">
                    <PrimaryButton text="Logs" type="primary" link="#projects" />
                    <SecondaryButton
                        text="GitHub"
                        type="secondary"
                        link="https://github.com/beomsun0829"
                    />
                </div>
            </div>
            <div
                className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24"
                id="projects">
                <h2 className="text-2 font-medium">Logs</h2>
                <div className="grid grid-cols-4 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
                    {projectPreviews}
                </div>
            </div>

            <div
                className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip"
                id="about">
                <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
                    <h2 className="text-2 font-medium">About</h2>
                    <div className="text-body leading-[220%]">
                        안녕하세요, 재미를 찾는 개발자 홍범순입니다. <br />
                        백엔드 개발과 인공지능 개발을 주로 하고 있습니다. <br />
                        초등학교 때 재미로 시작한 프로그래밍이, 지금은 취미이자 직업이 되었습니다. <br /><br />
                        새로운 기술을 배우고, 새로운 것을 만드는 것을 좋아합니다. <br />
                        많은 프로젝트 경험을 통해 다양한 문제 상황을 경험하고 해결해왔습니다. <br /><br />
                        팀 프로젝트에서는 소통과 협력을 중요시하며, 적합한 기술과 방법론을 사용하여 효율적인 개발을 지향합니다. <br />
                        <br />

                        <div className="flex items-center gap-4">
                            {/* Tistory Link */}
                            <a href="https://beomsun0829.tistory.com/" target="_blank" style={{ backgroundColor: '#E56D29', color: 'white' }} className="bg-blue-100 hover:bg-blue-700 active:bg-blue-500 disabled:bg-blue-300 border border-stroke-2 w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
                                Tistory
                            </a>

                            {/* GitHub Link */}
                            <a href="https://github.com/beomsun0829" target="_blank" style={{ backgroundColor: '#555555', color: 'white' }} className="bg-gray-600 hover:bg-gray-700 active:bg-gray-500 disabled:bg-gray-300 text-white border border-stroke-2 w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
                                GitHub
                            </a>

                            {/* Gmail Link */}
                            <a href="mailto:ghsqjatns@gmail.com" style={{ backgroundColor: '#FF4500', color: 'white' }} className="bg-red-600 hover:bg-red-700 active:bg-red-500 disabled:bg-red-300 border border-stroke-2 w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
                                Gmail
                            </a>

                            {/* Baekjoon Link */}
                            <a href="https://solved.ac/profile/beomsun0829" target="_blank" style={{ backgroundColor: '#3E3E3E', color: 'white' }} className="bg-gray-900 hover:bg-gray-700 active:bg-gray-500 disabled:bg-gray-300 border border-stroke-2 w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
                                Baekjoon
                            </a>
                        </div>
                    </div>
                </div>
                <img src="/images/about_cover.jpg" alt="" width="600" height="500" style={{ "alignSelf": 'center' }} />
            </div>

            <div
                className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip"
                id="skills"
            >
                <img src="/images/404.jpg" alt="" width="500" height="500" style={{ "alignSelf": 'center' }} />

                <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit items-end">
                    <h2 className="text-2 font-medium text-right">Skills</h2>
                    <div className="flex justify-end gap-16 flex-wrap">
                        {icons.map(({ name, component: IconComponent }) => (
                            <div className="flex items-center gap-4" key={name}>
                                <IconComponent className="text-xl" /> <span>{name}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip">
                <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
                    <h2 className="text-2 font-medium">Obsessed with</h2>
                    <div className="grid grid-cols-4 gap-4 text-3 leading-[220%] p-4">
                        <div>Singularity</div>
                        <div>AI</div>
                        <div>Robotics</div>
                        <div>Technology</div>
                        <div>Quantum Physics</div>
                        <div>Space Physics</div>
                        <div>Formula 1</div>
                        <div>Game</div>
                    </div>
                </div>
            </div>

        </>
    );
}
