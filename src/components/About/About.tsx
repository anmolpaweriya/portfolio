import { useRef, useState } from "react";
import Globe, { GlobeMethods } from 'react-globe.gl';
import CustomButton from "../CustomButton/CustomButton";
export default function About() {

    const [hasCopied, setHasCopied] = useState(false);
    const globeEl = useRef<GlobeMethods | undefined>(undefined);

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };




    return (
        <section className="c-space my-20"
            id="about"
        >
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full text-white-600">

                <div className=" col-span-1 xl:row-span-3">
                    <div className="grid-container">

                        <img src="/assets/grid1.png"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>

                            <p className="grid-headtext">
                                Hi, I am Anmol
                            </p>
                            <p className="Grid-subtext">
                                I'm a MERN & Nextjs Developer. I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.
                            </p>
                        </div>
                    </div>

                </div>
                <div className=" col-span-1 xl:row-span-3">
                    <div className="grid-container">

                        <img src="/assets/grid2.png"
                            className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>

                            <p className="grid-headtext">
                                Tech Stack
                            </p>
                            <p className="Grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div
                            className="w-full flex justify-center"
                        >

                            <Globe
                                ref={globeEl}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    { lat: 29.7996588, lng: 76.3989903, text: 'Anmol Home Town', color: 'white', size: 1000 }
                                ]}
                            />

                        </div>
                        <div>
                            <p className="grid-headtext">
                                I’m very flexible with time zone communications & locations
                            </p>
                            <p className="grid-subtext">
                                I'm based in Kaithal, Haryana, India and open to remote work worldwide.
                            </p>
                            <a href="#contact">

                                <CustomButton
                                    name="Contact Me"
                                    isBeam
                                    containerClass="w-full mt-10"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">

                        <img src="/assets/grid3.png"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />


                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">

                        <img src="/assets/grid4.png"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">paweriyaanmol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}
