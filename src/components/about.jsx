import aboutImg from "../assets/about.svg"
const about = () => {
    return (
        <div className="w-screen min-h-screen bg-[#334431] relative">
            <h1 className="absolute -left-[20%] -top-12 font-['Montserrat'] font-bold pointer-events-none select-none text-[#fafafa0d] text-[12rem] text-[rgba(250, 250, 250, 0.05)]">
                ABOUT US
            </h1>
            <section className="h-full w-full py-16 px-10">
                <h1 className="text-white text-4xl font-['Montserrat'] font-bold">WHO WE ARE.</h1>
                <div className="flex mt-20 gap-x-20">
                    <img src={aboutImg} alt="" className="h-[55vh] w-[46%] object-cover max-h-[30rem]" />
                    <div className="flex flex-col w-[46%] h-[55vh]">
                        <div className="h-14"></div>
                        <div>
                            <p className="text-lg text-white break-words font-['Montserrat'] lowercase">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation and aesthetic appeal, our interface sets a new standard for user-centric excellence. Elevate your digital interactions with unparalleled precision and elegance.
                                centric excellence. Elevate your digital interactions with unparalleled precision and elegance.</p>
                        </div>
                        <div className="flex gap-x-12 mt-6">
                            <article className="flex flex-col">
                                <span className="font-['Montserrat'] font-bold text-white text-3xl">25</span>
                                <span className="font-['Montserrat'] text-[#FFFFFF99] text-sm">clients</span>
                            </article>
                            <article className="flex flex-col">
                                <span className="font-['Montserrat'] font-bold text-white text-3xl">25</span>
                                <span className="font-['Montserrat'] text-[#FFFFFF99] text-sm">projects</span>
                            </article>
                            <article className="flex flex-col">
                                <span className="font-['Montserrat'] font-bold text-white text-3xl">30</span>
                                <span className="font-['Montserrat'] text-[#FFFFFF99] text-sm">locations</span>
                            </article>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default about