import { Canvas } from "@react-three/fiber";
import Avatar from "../components/3Dmodels/Avatar";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/Loading/CanvaLoader";
import { qualifications } from "../constants/qualifications";

export default function Qualifications() {

    const [animationName, setAnimationName] = useState("idle")

    return (
        <section className="w-full c-space">
            <div className="w-full text-white-600">

                <h1 className="head-text">
                    Qualifications
                </h1>

                <div className="work-container">

                    <div className="work-canvas">
                        <Canvas>

                            <ambientLight intensity={2} />
                            <directionalLight position={[10, 10, 10]} intensity={10} />
                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>

                                <Avatar
                                    scale={3}
                                    position-y={-3}
                                    animationName={animationName}
                                />
                            </Suspense>
                        </Canvas>

                    </div>


                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {qualifications.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5 ">
                                            {item.start} -- <span>{item.end}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
