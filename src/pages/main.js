import React from "react";
import Header from "../components/navigation";

function Portfolio() {

    const downloadResume = () => {
        alert('Download Oluwaseyi Resume')
    }

    return(
        <div>
            <Header/>
            <main className=" mt-12 lg:mt-24 bg-lightmode-primary">
                <div className="w-full h-[600px] flex items-center justify-center p-6">
                    <div className="w-full max-w-6xl lg:px-8">
                        <h2 className="font-bold text-3xl md:text-7xl text-left lg:text-9xl leading-tight w-full">Hi, I am <code id="animateName" className=""></code>,<br/>Web Developer</h2>
                        <div className="flex flex-col lg:flex-row mt-2 items-start justify-between">
                            <p className="leading-relaxed w-full text-left lg:w-4/6">My name is Oyebanji Oluwaseyi, I am a Software Engineer, has over 6 years of programming experience. My interests are mostly in Web and Mobile app development.</p>
                            <button 
                                className="bg-lightmode-accents w-auto rounded text-white py-3 px-6 mt-6 lg:mt-0"
                                onClick={() => downloadResume()}>
                                    Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;