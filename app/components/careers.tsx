import localFont from "next/font/local";

const hanson = localFont({
    src: "../hanson.woff2",
    display: "swap",
});

export default function Careers() {
    return (
        <div className="border border-stroke-1 rounded-out max-w-[1300px] w-full p-8" id="careers">
            <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
                <h2 className="text-2 font-medium mb-4 text-left">Career</h2>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-24 ml-12">Awards</h3>
                    <div className="ml-24 space-y-8 tracking-wider">
                        <p>SKT FLY AI 4기 프로젝트 우수상 (2024.02.29) <a href="https://www.trendw.kr/news/articleView.html?idxno=10605" target="_blank" rel="noopener noreferrer" className="underline">[가상 피팅 Ai를 활용한 초간편 패션 중고 거래 플랫폼, 리클로스(ReClos) ... SKT 플라이 AI 챌린저]</a></p>
                        <p>2022년 소프트웨어학부 프로그래밍 경진대회 4위 (2022.11.30) 충북대학교 SW중심대학사업단</p>
                        <p>2021 군 장병 공개 소프트웨어 해커톤 육군참모총장상 (2021.12.09) 국방부 <a href="https://youtu.be/ZtyRS-xsiCs?si=HUBgufgm0FWpdDZg" target="_blank" rel="noopener noreferrer" className="underline">[Blockchain-Army, 블록체인을 활용한 광범위한 국방 데이터 유통 어플]</a></p>
                        <p>충북대학교 SW 중심대학사업단 알고리즘 경진대회 Lv.1 3위 (2019.12.06) 충북대학교 SW중심대학사업단 <a href="https://www.cbiz.kr/news/articleView.html?idxno=18399" target="_blank" rel="noopener noreferrer" className="underline">[‘2019 알고리즘 경진대회’ 성황리 개최]</a></p>
                        <p>충청북도 정보올림피아드 특선 (2018.05.04)</p>
                        <p>충청북도 컴퓨터 꿈나무축제 SW제작부문 특선 (2017.11.14)</p>
                        <p>충청북도 정보올림피아드 특선 (2017.05.31)</p>
                        <p>충청북도 정보화인재 표창 (2016.12.30)</p>
                        <p>충청북도 컴퓨터 꿈나무축제 SW제작부문 대상 (2016.11.03)</p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-24 ml-12">Certifications</h3>
                    <div className="ml-24 space-y-8 tracking-wider">
                        <p>토익스피킹 Intermediate High 140 (2024.03.31)</p>
                        <p>컴퓨터활용능력1급 (2017.08.25) | 대한상공회의소</p>
                        <p>정보처리기능사 (2016.06.07) | 한국산업인력공단</p>
                        <p>리눅스마스터 2급 (2018.06.22) | 한국정보통신진흥협회</p>
                        <p>네트워크관리사 2급 (2023.10.10) | 한국정보통신자격협회</p>
                        <p>Microsoft AI 900 (2024.02.06) | Microsoft</p>
                        <p>TOPCIT 465 (2023.10.28) | 정보통신기획평가원</p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-24 ml-12">External Activities</h3>
                    <div className="ml-24 space-y-8 tracking-wider">
                        <p>SKT FLY AI Challenger 4기 수료 (2024.02.29) SKT 대표이사 유영상 <a href="https://news.sktelecom.com/202325" target="_blank" rel="noopener noreferrer" className="underline">[FLY AI 챌린저 프로그램, “대학에서 들을 수 없는 AI 교육∙프로젝트 실습∙멘토링까지”]</a></p>
                        <p>LG AIMERS 3기 (2023.09.27)</p>
                        <p>충청북도 교육정보원 프로그래밍 마스터 집중과정 이수 (2017.08.10)</p>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3 font-semibold mb-24 ml-12">Employment History</h3>
                    <div className="ml-24 space-y-8 tracking-wider">
                        <p>씨큐브코딩 고급 프로그래밍반 전임강사(2023.03.01 ~ 2023.12.3)</p>
                        <p>디엘정보기술 VB to C# Migration 단기직</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
