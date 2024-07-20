import localFont from "next/font/local";

const hanson = localFont({
    src: "../hanson.woff2",
    display: "swap",
});

export default function Skills() {
    return (
        <div className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-8" id="skills">
            <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">

                <h2 className="text-2 font-medium mb-4 text-left">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="col-span-1 mb-24">
                        <h3 className="text-3 font-semibold mb-8">Programming Languages</h3>
                        <div className="flex flex-wrap gap-12">
                            <span className="badge">Python</span>
                            <span className="badge">C / C++</span>
                            <span className="badge">C#</span>
                            <span className="badge">JavaScript / TypeScript</span>
                        </div>
                    </div>

                    <div className="col-span-1 mb-24">
                        <h3 className="text-3 font-semibold mb-8">AI Frameworks and Libraries</h3>
                        <div className="flex flex-wrap gap-12">
                            <span className="badge">PyTorch</span>
                            <span className="badge">MLFlow</span>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-3 font-semibold mb-8">Backend Frameworks and Libraries</h3>
                        <div className="flex flex-wrap gap-12">
                            <span className="badge">Django</span>
                            <span className="badge">FastAPI</span>
                            <span className="badge">Nest.js</span>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-3 font-semibold mb-8">Platforms and Tools</h3>
                        <div className="flex flex-wrap gap-12">
                            <span className="badge">Arduino</span>
                            <span className="badge">AWS</span>
                            <span className="badge">GCP</span>
                            <span className="badge">Azure</span>
                            <span className="badge">Docker</span>
                            <span className="badge">Kubernetes</span>
                            <span className="badge">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
