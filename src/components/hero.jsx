// import React from 'react'
import logoIcon from '../assets/logo-icon.svg';
import hamburger from '../assets/hamburger.png'
const hero = () => {
    return (
        <div className="w-[100vw] bg-no-repeat bg-cover bg-center bg-hero-img min-h-screen text-white">
            <header className='flex py-12 px-14 w-full justify-between'>
                <img className='w-8' src={logoIcon} alt="" />
                <nav className='flex items-center gap-x-6'>
                    <button className='bg-white text-black rounded-[0.85rem] text-xs px-8 py-2.5 font-["Lato"] font-bold'>
                        Lets Talk
                    </button>
                    <div className='h-10 w-10 rounded-full bg-white flex items-center justify-center'>
                        <img className='w-[1.1rem]' src={hamburger} alt="" />
                    </div>
                </nav>
            </header>
            <section className='w-full text-[#FAFAFA] h-hero-h flex flex-col items-center pt-16'>
                <h1 className='relative text-8xl font-bold font-["Montserrat"] z-10'>WE SHAPE</h1>
                <h1 className='relative -mt-5 text-8xl font-bold font-["Montserrat"]'>
                    SPACES
                    <div className='absolute h-[40vh] w-[100vw] -top-[90%] -left-[110%] z-0 bg-gradient-to-b from-transparent via-[#00000073] via-45% to-transparent to-60%'>

                    </div>
                    {/* <div className='absolute h-[40vh] w-[50vw] border-2 border-solid -top-[90%] -left-[0%] z-0 bg-gradient-to-r from-transparent via-[#00000080] via-45% to-transparent to-60%'> */}

                    {/* </div> */}
                    {/* bg-gradient-to-r from-transparent via-[#00000020] to-transparent */}
                    {/* bg-gradient-to-b from-[#00000040] to-[#FAFAFA] */}
                </h1>
                <button className='bg-white mt-16 text-black rounded-[0.85rem] text-xs px-9 py-3 font-["Lato"] font-bold'>
                    Lets Talk
                </button>
            </section>
        </div>
    )
}

export default hero
