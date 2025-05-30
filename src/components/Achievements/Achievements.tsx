import { achivements } from "../../constants/achivements";

export default function Testimonials() {
    return (
        <section className="c-space my-20">
            <h1 className="head-text ">
                Achievements
            </h1>

            <div className="client-container">
                {
                    achivements.map(achivement => (
                        <div key={achivement.id} className="client-review">


                            <p className="text-white-800 font-light">{achivement.desc}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={achivement.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{achivement.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{achivement.position}</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}
