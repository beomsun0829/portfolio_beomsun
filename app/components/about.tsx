import localFont from "next/font/local";

const hanson = localFont({
    src: "../hanson.woff2",
    display: "swap",
});

export default function About() {
    return (
        <div
            className="border border-stroke-1 rounded-out max-w-[1300px] w-full flex max-[880px]:flex-col overflow-clip"
            id="about">
            <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
                <h2 className="text-2 font-medium">About</h2>
                <div className="text-body leading-[220%]">
                    안녕하세요, 개발자 홍범순입니다. <br />
                    백엔드 개발과 인공지능 개발을 주로 하고 있습니다. <br /><br />
                    새로운 기술을 배우고, 새로운 것을 만드는 것을 좋아합니다. <br />
                    많은 프로젝트 경험을 통해 다양한 문제 상황을 경험하고 해결해왔습니다. <br /><br />
                    팀 프로젝트에서는 소통과 협력을 중요시하며,<br />
                    효율적이고 완성도 높은 개발을 지향합니다. <br />
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
    )
}