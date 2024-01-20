import quotes from "../assets/quotes.svg"
import review1 from "../assets/review-1.svg"
import review2 from "../assets/review-2.svg"
import review3 from "../assets/review-3.svg"
import review4 from "../assets/review-4.svg"
import revBtnActive from "../assets/rev-btn-active.svg"
import revBtnInactive from "../assets/rev-btn-inactive.svg"
const reviews = () => {
    return (
        <div className="w-screen min-h-screen bg-[#102111] relative">
            <h1 className="absolute left-[55%] -top-12 whitespace-nowrap font-['Montserrat'] font-bold pointer-events-none select-none text-[#fafafa0d] text-[12rem] text-[rgba(250, 250, 250, 0.05)]">
                REVIEWS
            </h1>
            <section className="h-full w-full py-16 px-10">
                <h1 className="text-white text-4xl font-['Montserrat'] font-bold">CUSTOMER REVIEWS.</h1>
                <p className="font-['Montserrat'] font-lg lowercase text-[#FFFFFF99] inline-block w-[38%] mt-2">
                    Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation
                </p>
                <section className="flex gap-6 justify-center items-center mt-16">
                    <article className="bg-[#334431] px-6 py-4 border-2 border-solid border-[#102111]">
                        <img src={quotes} alt="" />
                        <p className="font-['Montserrat'] font-lg lowercase text-white inline-block mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex items-center mt-6">
                            <img src={review1} alt="" className="mr-6" />
                            <div>
                                <h3 className="text-white font-['Montserrat'] font-bold">John Stewart</h3>
                                <p className="text-[#ffffffb3] font-light font-['Montserrat']">Ceo Nivida</p>
                            </div>
                        </div>
                    </article>
                    <article className="bg-[#334431] px-6 py-4 border-2 border-solid border-[#102111]">
                        <img src={quotes} alt="" />
                        <p className="font-['Montserrat'] font-lg lowercase text-white inline-block mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex items-center mt-6">
                            <img src={review2} alt="" className="mr-6" />
                            <div>
                                <h3 className="text-white font-['Montserrat'] font-bold">John Stewart</h3>
                                <p className="text-[#ffffffb3] font-light font-['Montserrat']">Ceo Nivida</p>
                            </div>
                        </div>
                    </article>
                    <article className="bg-[#334431] px-6 py-4 border-2 border-solid border-[#102111]">
                        <img src={quotes} alt="" />
                        <p className="font-['Montserrat'] font-lg lowercase text-white inline-block mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex items-center mt-6">
                            <img src={review3} alt="" className="mr-6" />
                            <div>
                                <h3 className="text-white font-['Montserrat'] font-bold">John Stewart</h3>
                                <p className="text-[#ffffffb3] font-light font-['Montserrat']">Ceo Nivida</p>
                            </div>
                        </div>
                    </article>
                    <article className="bg-[#334431] px-6 py-4 border-2 border-solid border-[#102111]">
                        <img src={quotes} alt="" />
                        <p className="font-['Montserrat'] font-lg lowercase text-white inline-block mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex items-center mt-6">
                            <img src={review4} alt="" className="mr-6" />
                            <div>
                                <h3 className="text-white font-['Montserrat'] font-bold">John Stewart</h3>
                                <p className="text-[#ffffffb3] font-light font-['Montserrat']">Ceo Nivida</p>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
            <section className="w-full py-10 flex justify-center gap-0.5">
                <img src={revBtnInactive} className="cursor-pointer" alt="" />
                <img src={revBtnActive} className="cursor-pointer" alt="" />
                <img src={revBtnInactive} className="cursor-pointer" alt="" />
                <img src={revBtnInactive} className="cursor-pointer" alt="" />
            </section>
        </div>

    )
}

export default reviews