import project1 from "../assets/projects-1.svg";
import project2 from "../assets/projects-2.svg";
import project3 from "../assets/projects-3.svg";
import project4 from "../assets/projects-4.svg";
import project5 from "../assets/projects-5.svg";
import project6 from "../assets/projects-6.svg";
import project7 from "../assets/projects-7.svg";
import project8 from "../assets/projects-8.svg";
import project9 from "../assets/projects-9.png";
import project10 from "../assets/projects-10.png"

const projects = () => {
    return (
        <div className="w-full pb-24 bg-[#334431] relative">
            <h1 className="absolute -left-[32%] -top-12 whitespace-nowrap font-['Montserrat'] font-bold pointer-events-none select-none text-[#fafafa0d] text-[12rem] text-[rgba(250, 250, 250, 0.05)]">
                PROJECTS
            </h1>
            <section className="h-full w-full py-16 px-10">
                <h1 className="text-white text-4xl font-['Montserrat'] font-bold">SELECTED PROJECTS.</h1>
                <p className="font-['Montserrat'] font-lg lowercase text-[#FFFFFF99] inline-block w-[38%] mt-2">
                    Experience the epitome of sophistication in our latest mobile app UI/UX design. Meticulously crafted for seamless navigation
                </p>
                <section className="flex mt-16 gap-x-4">
                    <div className="grid grid-cols-11 grid-rows-7 gap-4 basis-3/5 h-[50rem]">
                        <div className="col-start-1 col-end-6 row-start-1 row-end-3">
                            <img src={project1} className="w-full h-full object-cover aspect-auto" alt="" />
                        </div>
                        <div className="col-start-6 col-end-12 row-start-1 row-end-3">
                            <img src={project2} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="col-start-1 col-end-6 row-start-3 row-end-6" >
                            <img src={project3} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="col-start-6 col-end-12 row-start-3 row-end-6">
                            <img src={project4} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="col-start-1 col-end-8 row-start-6 row-end-8">
                            <img src={project5} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="col-start-8 col-end-12 row-start-6 row-end-8" alt="" >
                            <img src={project6} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-11 grid-rows-10 gap-4 basis-2/5 h-[50rem]">
                        <div className="col-start-1 col-end-7 row-start-1 row-end-5">
                            <img src={project7} className="w-full h-full object-cover aspect-auto" alt="" />
                        </div>
                        <div className="col-start-7 col-end-12 row-start-1 row-end-6">
                            <img src={project9} className="w-full h-full object-cover aspect-auto" alt="" />
                        </div>
                        <div className="col-start-1 col-end-7 row-start-5 row-end-11">
                            <img src={project8} className="w-full h-full object-cover aspect-auto" alt="" />
                        </div>
                        <div className="col-start-7 col-end-12 row-start-6 row-end-11">
                            <img src={project10} className="w-full h-full object-cover aspect-auto" alt="" />
                        </div>
                    </div>

                </section>
                <section className="w-full text-center">

                    <button className='bg-white mt-16 text-black rounded-[0.85rem] text-xs px-8 py-3 font-["Lato"] font-bold'>
                        More Projects
                    </button>
                </section>

            </section>
        </div>
    )
}

export default projects