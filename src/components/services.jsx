import service1Img from "../assets/services-1.svg"
import service2Img from "../assets/services-2.svg"
import service3Img from "../assets/services-3.svg"
const services = () => {
    return (
        <div className="w-screen min-h-screen bg-[#102111] relative">
            <h1 className="absolute left-1/2 -top-12 whitespace-nowrap font-['Montserrat'] font-bold pointer-events-none select-none text-[#fafafa0d] text-[12rem] text-[rgba(250, 250, 250, 0.05)]">
                OUR SERVICES
            </h1>
            <section className="h-full w-full py-16 px-10">
                <h1 className="text-white text-4xl font-['Montserrat'] font-bold">OUR SERVICES.</h1>
                <p className="font-['Montserrat'] font-lg lowercase text-[#FFFFFF99] inline-block w-[38%] mt-2">
                    Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation
                </p>
                <section className="flex justify-between mt-16">
                    <img src={service1Img} className="h-[75vh]" alt="" />
                    <img src={service2Img} className="h-[75vh]" alt="" />
                    <img src={service3Img} className="h-[75vh]" alt="" />
                </section>
            </section>
        </div>
    )

}

export default services