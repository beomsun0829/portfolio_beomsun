import localFont from "next/font/local";

const hanson = localFont({
    src: "../hanson.woff2",
    display: "swap",
});

export default function Project() {
    return (
        <div className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-8" id="project">
            <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
                <h2 className="text-2 font-medium mb-4 text-left">Project</h2>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-8 ml-12">Awards</h3>
                    <div className="ml-24 space-y-4 tracking-wider">
                        <p>2022년 소프트웨어학부 프로그래밍 경진대회 4위 (2022.11.30) 충북대학교 SW중심대학사업단</p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-8 ml-12">Certifications</h3>
                    <div className="ml-24 space-y-4 tracking-wider">
                        <p>토익스피킹 Intermediate High 140 (2024.03.31)</p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-8 ml-12">External Activities</h3>
                    <div className="ml-24 space-y-4 tracking-wider">
                        <p>SKT FLY AI Challenger 4기 수료 (2024.02.29) SKT 대표이사 유영상 </p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-8 ml-12">Employment History</h3>
                    <div className="ml-24 space-y-4 tracking-wider">
                        <p>씨큐브코딩 고급 프로그래밍반 전임강사(2023.03.01 ~ 2023.12.3)</p>
                        <p>디엘정보기술</p>
                    </div>
                </div>
            </div>
        </div>
    );
}