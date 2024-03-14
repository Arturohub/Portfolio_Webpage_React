import { useState, useEffect } from 'react';

export default function Experience() {
    const [showWorkExp, setShowWorkExp] = useState(false);
    const [showEduExp, setShowEduExp] = useState(false);

    
    const tasks1 = ["Responsible for starting from scratch with the tomato breeding program for the 5 main tomato typologies cultivated in Almería", 
    "Teaching and developing from scratch a team that manages the daily crop labors", 
    "Organizing, planning, leading and performing all breeding activities (from sowing to harvesting)", 
    "International collaboration for several R&D projects", 
    "First pre-commercial varieties already in trial"];

    const tasks2 = ["In charge of the Late Maturity Corn breeding program for Italy and Turkey", 
    "Organizing and leading working groups for the breeding nursery and yield trials, both in Italy and Turkey",
    "International collaboration for implementation of digital phenotyping technologies for data collection",
    "Several corn varieties released to the market"]

    const tasks3 = ["Master's internship (6months) + 12 month contract for performing several research projects in Cucurbits",
    "QTL mapping, phenotyping of Cucurbit's Genebank, start with MABC program in Melon..."]

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex1((prevIndex) => (prevIndex + 1) % tasks1.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [tasks1]);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex2((prevIndex) => (prevIndex + 1) % tasks2.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [tasks2]);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex3((prevIndex) => (prevIndex + 1) % tasks3.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [tasks3]);



    return (
        <div className="Experience">
            <div className="workexp-container" onClick={() => setShowWorkExp(!showWorkExp)}>
                <h1>Working Experience</h1>
                {showWorkExp && (
                    <div className="workinfo-container">
                        <h2>Tomato Breeder, KWS Spain</h2>
                        <h3>From August 2021 to December 2023</h3>
                        <h4>{tasks1[index1]}</h4>

                        <h2>Corn Breeder, KWS Italy</h2>
                        <h3>From December 2016 to August 2021</h3>
                        <h4>{tasks2[index2]}</h4>


                        <h2>Junior Researcher, Enza Zaden, The Netherlands</h2>
                        <h3>From June 2015 to November 2016</h3>
                        <h4>{tasks3[index3]}</h4>
                    </div>
                )}
            </div>
            <div className="eduexp-container" onClick={() => setShowEduExp(!showEduExp)}>
                <h1>Education Experience</h1>
                {showEduExp && (
                    <div className="experience-container">
                        <h2>Master Degree, Plant Sciences and Genetic Resources</h2>
                        <h3>From 2014 to 2016, at Wageningen University, The Netherlands</h3>

                        <h2>Bachelor Degree, Plant Biotechnology</h2>
                        <h3>From 2010 to 2014, at Madrid's University, Spain</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
