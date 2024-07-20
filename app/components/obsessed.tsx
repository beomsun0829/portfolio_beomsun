import localFont from "next/font/local";

const hanson = localFont({
    src: "../hanson.woff2",
    display: "swap",
});

export default function Obsessed() {
    return (
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
    )
}