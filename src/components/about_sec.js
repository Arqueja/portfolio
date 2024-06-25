import React from "react";

const SectionAbout = () => {
    return (
        <section id="about" className="sectionAbout bg-no-repeat bg-center">
            <div className="corpo">
                {/* <div className="homeTitle">
                    <h1 className="uppercase text-[5vw]">Hello, I’m <b> Carlos</b></h1>
                    <h3 className="uppercase text-[1.8vw]"> but you can call me <b> Arqueja</b></h3>
                </div> */}
                <div className="homeAbout flex items-center flow-root text-center">
                    <h1 className="uppercase text-[1.5vw]">
                        A young developer with a thirst for a <br /> <b> successful career!</b>
                    </h1>
                    <h1 className="uppercase text-[1.5vw]">
                        On this website, I’m showcasing some of my: <br /> work, projects, and knowledge.
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
