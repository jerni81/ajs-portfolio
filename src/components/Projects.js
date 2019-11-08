import React, { useState, useEffect} from "react";
import axios from 'axios';



const Projects = props => {
  const [cards, setCards] = useState()

  const getProjects = async() => {
    const drive = '1dtenl7Cc9R_UcKxnYvCeOFT9IaOwFw46JcxnquZYR_k'
    const data = await axios.get(`https://spreadsheets.google.com/feeds/list/${drive}/od6/public/values?alt=json`);
    const projects = data.data.feed.entry.map((d, i) => {
      let project = {
      name: d.gsx$title.$t,
      link: d.gsx$link.$t,
      img: d.gsx$image.$t,
      key: i
    }
    return project
    })
    setCards(projects)
  }

const display = cards && cards.map((d,i) => {
  return (
    <div className="project" key={i}>
    <h4><a target="_blank" rel="noopener noreferrer" href={d.link}>{d.name}</a></h4>
    <img src={d.img} alt={d.name} className='projectPic'/>
    </div>
  )
})

  useEffect(()=>{
      getProjects();
  })

  return (
    <div className="projects">
      <h1><u>Projects</u></h1>
      <div className='projectWrapper'>
        {display}
      </div>
    </div>
  );
};

export default Projects;
