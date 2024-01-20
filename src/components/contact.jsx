import logo from "../assets/logo-icon.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"

const contact = () => {
    return (
        <>
            <div className="w-[100vw] bg-no-repeat bg-cover bg-center bg-contact-img min-h-screen text-white">
                <section className='w-full h-screen text-[#FAFAFA] h-hero-h flex flex-col justify-center items-center pt-16'>
                    <h1 className='relative text-8xl font-bold font-["Montserrat"] z-10'>WE SHAPE</h1>
                    <h1 className='relative -mt-5 text-8xl font-bold font-["Montserrat"]'>
                        SPACES
                        <div className='absolute h-[40vh] w-[100vw] -top-[90%] -left-[110%] z-0 bg-gradient-to-b from-transparent via-[#00000073] via-45% to-transparent to-60%'>

                        </div>
                    </h1>
                    <button className='bg-white mt-16 text-black rounded-[0.85rem] text-xs px-9 py-3 font-["Lato"] font-bold'>
                        Contact Us
                    </button>
                </section>
            </div>
            <div className="min-h-[60vh] w-screen bg-[#102111] px-8 py-14">
                <img src={logo} alt="" className="w-8" />
                <section className="flex gap-x-6">
                    <div className="basis-[37%]">
                        <p className="text-lg text-[#FFFFFFCC] lowercase font-['Montserrat'] mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex gap-2 mt-4">
                            <img src={facebook} className="w-6 cursor-pointer" alt="" />
                            <img src={twitter} className="w-6 cursor-pointer" alt="" />
                            <img src={linkedin} className="w-6 cursor-pointer" alt="" />
                            <img src={instagram} className="w-6 cursor-pointer" alt="" />
                        </div>
                    </div>
                    <div className="basis-[21%] font-['Montserrat'] text-white flex flex-col">
                        <h3 className="mb-2 font-bold">Navigation</h3>
                        <span className="text-[#FFFFFFCC] font-normal">Home</span>
                        <span className="text-[#FFFFFFCC] font-normal">About Us</span>
                        <span className="text-[#FFFFFFCC] font-normal">Projects</span>
                        <span className="text-[#FFFFFFCC] font-normal">Services</span>
                        <span className="text-[#FFFFFFCC] font-normal">Contact Us</span>
                    </div>
                    <div className="basis-[21%] font-['Montserrat'] text-white flex flex-col">
                        <h3 className="mb-2 font-bold">Services</h3>
                        <span className="text-[#FFFFFFCC] font-normal">Faq</span>
                        <span className="text-[#FFFFFFCC] font-normal">Privacy</span>
                        <span className="text-[#FFFFFFCC] font-normal">Projects</span>
                        <span className="text-[#FFFFFFCC] font-normal">Services</span>
                        <span className="text-[#FFFFFFCC] font-normal">Contact Us</span>
                    </div>
                    <div className="basis-[21%] flex flex-col font-['Montserrat'] text-white ">
                        <h3 className="mb-2 font-bold">Contact</h3>

                    </div>
                </section>
            </div>
        </>
    )
}

export default contact

