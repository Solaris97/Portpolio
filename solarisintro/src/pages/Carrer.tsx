import React, { useState, useEffect } from "react";

import carrerLogo1 from "../assets/logo/carrerLogo1.png"
import carrerLogo2 from "../assets/logo/carrerLogo2.png"

const Carrer: React.FC = () => {

    return (


        <div className="font-baseFont w-full h-[3400px] md:h-[2850px] lg:h-[2250px] text-center mx-0 my-auto bg-gray-100 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full flex items-center flex-col px-2 md:px-24 mt-10">
                <h2 className="font-bold text-5xl md:text-6xl m-6 cursor-default">
                    CARRER
                </h2>
                <div className="border-b-2 border-black w-32 h-2">
                </div>

                <div className="flex items-center flex-col justify-center mt-24 w-full">
                    <div className="flex flex-col lg:flex-row justify-center h-[1400px] md:h-[1400px] lg:h-[1100px]">
                        <div className="w-full lg:w-[300px] h-[300px] lg:h-[940px] lg:border-r lg:border-gray-300 flex flex-row justify-center">
                            <div className="rounded-full border-2 w-60 h-60 flex items-center flex-row justify-center bg-white">
                                <img src={carrerLogo2} className="w-44 h-30" />
                            </div>
                        </div>

                        <div className="md:w-[700px] sm:[100px] h-[1050px] md:h-[1100px] text-left ml-8">
                            <div className="border-b border-gray-300 h-[350px] md:h-[260px]">
                                <p className="text-4xl"><strong>보이노시스</strong></p>
                                <p className="text-gray-500 mt-6">2022.08 - 2023.11</p>
                                <p className="mt-6">음성을 분석하여 치매 관련 질병들을 조기 진단하는 AI 모델을 개발하고<br />
                                    이를 활용한 솔루션을 개발하는 헬스케어 회사입니다.</p>
                                <p className="mt-6"><strong>프론트엔드 포지션</strong>으로 신규 서비스의 개발 및 운영을 담당하였고 음성을 수집하는 UWP 앱의 유지보수를 담당하였습니다.</p>
                            </div>
                            <div className="my-6">
                                <p className="text-xl">▎ <strong>사내 데이터 관리 솔루션</strong></p>
                                <p className="text-gray-500 mt-6">2023.02 - 2023.06</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>JWT 토큰을 사용하여 로그인 구현 및 JWT 토큰을 Cookie에 저장하여 REST API 통신 시 이를 담아보내 사용자의 권한에 맞는 데이터를 받아오는 기능 개발</span></li>
                                    <li><span>Chunk 단위로 데이터 처리를 하여 대용량 파일 업로드 / 다운로드 기능 개발</span> </li>
                                    <li><span>애자일 방법론을 도입하여 사내 데이터 사이언티스트의 요구에 빠르게 대응하여 완성도 향상</span></li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p className="text-xl">▎ <strong>사전 문진 웹 서비스</strong></p>
                                <p className="text-gray-500 mt-6">2022.12 - 2023.03</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>CDD를 통해 개발과 디자인을 동시에 진행하여 개발 생산성을 높임</span> </li>
                                    <li><span>SVG 이미지를 컴포넌트로 활영하여 이미지에 다양한 인터랙션을 적용하여 UX를 향상</span></li>
                                    <li><span>Cloud(AWS)로 배포를 진행하여 사내에서도 체계적인 모니터링 및 유지보수를 진행</span></li>
                                    <li><span>브라우저에서 발생하는 브라우저 호환성 문제를 해결하기 위해 babel을 사용하여 구버전 브라우저 지원</span></li>

                                </ul>
                            </div>

                            <div className="my-6">
                                <p className="text-xl">▎ <strong>골든 타임 파인더</strong></p>
                                <p className="text-gray-500 mt-6">2022.08 ~ 2022.12</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>MediaRecorder를 활용하여 다양한 브라우저에서 녹음 기능 구현</span> </li>
                                    <li><span>canvas에 사용자가 현재 녹음중인 음성을 파형으로 시각적으로 표현하여 사용자가 녹음 상태를 쉽게 알 수 있게 보여줌</span></li>
                                    <li><span>캐러셀, 회원가입, 로그인, 보험사 API 연동 등의 기능을 구현</span></li>
                                    <li><span>Jenkins를 통한 배포 자동화 구축, 사내 코드 컨벤션 수립</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center h-[1850px] md:h-[1000px] lg:h-[1100px]">
                        <div className="w-full lg:w-[300px] h-[300px] lg:h-[740px] lg:border-r lg:border-gray-300 flex flex-row justify-center">
                            <div className="rounded-full w-60 h-60 flex items-center flex-row justify-center bg-white">
                                <img src={carrerLogo1} className="w-60 h-60 rounded-full border-2 " />
                            </div>
                        </div>


                        <div className="w-11/12 md:w-[700px] sm:[100px] h-[800px] md:h-[700px] text-left ml-8">
                            <div className="border-b border-gray-300 w-full h-[250px] md:h-[200px]">
                                <p className="text-4xl"><strong>씨앤에프시스템(주)</strong></p>
                                <p className="text-gray-500 mt-6">2021.03 - 2022.05</p>
                                <p className="mt-6">회계 및 인사 관리 ERP 올샵을 개발 및 판매하고 있는 회사입니다.</p>
                                <p className="mt-6"><strong>풀스택 포지션</strong>으로 인사 복무 급여 ERP의 신규 기능 개발 및 코드 리팩토링을 담당하였습니다.</p>
                            </div>
                            <div className="my-6">
                                <p className="text-xl">▎ <strong>기관 재직 인원 자동화 시스템 개선</strong></p>
                                <p className="text-gray-500 mt-6">2022.01 - 2022.03</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>DB 스케쥴러를 이용하여 기관의 인원을 계산하는 로직이 DB 종속성이 심해 Spring 스케쥴러로 변경</span> </li>
                                    <li><span>인사 정보 조회시 이미지 프리로딩을 구현하여 캐싱된 이미지를 가지고 오도록 변경, 기존 대비 이미지 로딩 시간을 줄임</span> </li>
                                </ul>
                            </div>
                            <div className="my-6">
                                <p className="text-xl">▎ <strong>교육 관리 기능 개발</strong></p>
                                <p className="text-gray-500 mt-6">2021.08 - 2021.12</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>사용자의 교육 신청, 이수, 수강 등을 관리하는 화면 개발</span> </li>
                                    <li><span>chart.js를 활용하여 관리자가 사용자별 교육 시간 통계를 쉽게 볼 수 있게 제공</span></li>
                                </ul>
                            </div>

                            <div className="my-6">
                                <p className="text-xl">▎ <strong>쿼리 마이그레이션</strong></p>
                                <p className="text-gray-500 mt-6">2021.06 - 2021.12</p>
                                <ul className="list-disc leading-6 list-inside mt-6">
                                    <li><span>Oracle로 작성되어 있던 쿼리를 MySQL, MSSQL 쿼리로 마이 그레이션</span> </li>
                                    <li><span>Oracle이 아닌 다른 DB를 사용하던 기관 사용자 확보에 큰 역할을 수행</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Carrer;