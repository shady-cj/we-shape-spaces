import logo from "../assets/logo-icon.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import telephone from "../assets/bi_telephone.svg";
import location from "../assets/bytesize_location.svg";
import email from "../assets/carbon_email.svg";

const contact = () => {
    return (
        <>
            <div className="w-full h-[36rem] bg-no-repeat bg-cover bg-center bg-contact-img text-white">
                <section className='w-full h-full text-[#FAFAFA] h-hero-h flex flex-col justify-center items-center pt-48'>
                    <h1 className='relative text-8xl font-bold font-["Montserrat"] z-10'>WE SHAPE</h1>
                    <h1 className='relative -mt-5 text-8xl font-bold font-["Montserrat"]'>
                        SPACES
                        <div className='absolute h-[15rem] w-[100vw] -top-[90%] -left-[110%] z-0 bg-gradient-to-b from-transparent via-[#00000073] via-45% to-transparent to-60%'>

                        </div>
                    </h1>
                    <button className='bg-white mt-16 text-black rounded-[0.85rem] text-xs px-9 py-3 font-["Lato"] font-bold'>
                        Contact Us
                    </button>
                </section>
            </div>
            <div className="w-full bg-[#102111] px-8 py-14">
                <img loading='lazy' src={logo} alt="" className="w-8" />
                <section className="flex gap-x-6">
                    <div className="basis-[37%]">
                        <p className="text-lg text-[#FFFFFFCC] lowercase font-['Montserrat'] mt-2">Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation </p>
                        <div className="flex gap-2 mt-4">
                            <img loading='lazy' src={facebook} className="w-6 cursor-pointer" alt="" />
                            <img loading='lazy' src={twitter} className="w-6 cursor-pointer" alt="" />
                            <img loading='lazy' src={linkedin} className="w-6 cursor-pointer" alt="" />
                            <img loading='lazy' src={instagram} className="w-6 cursor-pointer" alt="" />
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
                    <div className="basis-[21%] flex flex-col gap-2 font-['Montserrat'] text-white ">
                        <h3 className="mb-2 font-bold">Contact</h3>
                        <div className="flex flex-row items-start gap-[15px]">
                            <img src={location} className="w-4 mt-2" alt="" />
                            <span>9400 S Normandie Ave #14 Los Angeles, CA</span>

                        </div>
                        <div className="flex gap-[15px]">
                            <img src={email} className="w-4" alt="" />
                            <span>contact@vet.com</span>

                        </div>
                        <div className="flex gap-[15px]">
                            <img src={telephone} className="w-4" alt="" />
                            <span>(323) 238 - 0696</span>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default contact

