import React, { useState, useEffect} from "react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Projects = props => {
  const [cards, setCards] = useState('')

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
    <div>
      <img src={d.img} />
      <p className="legend">this<h4><a target="_blank" rel="noopener noreferrer" href={d.link}>{d.name}</a></h4>
</p>
    </div>
  )
})

  useEffect(()=>{
    if (cards === '') {
      getProjects();
    }
  })

  return (
    <div className="projects">
      <h1><u>Projects</u></h1>
      <div className='projectWrapper'>
        <Carousel autoPlay width="40vw" infiniteLoop>
          {display}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
