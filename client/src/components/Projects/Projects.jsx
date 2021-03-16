import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem/ProjectItem';

function Projects() {
  return (
    <div className="projects-container">
      <div id="projects-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#projects-carousel" data-slide-to="0" className="active" />
          <li data-target="#projects-carousel" data-slide-to="1" />
          <li data-target="#projects-carousel" data-slide-to="2" />
          <li data-target="#projects-carousel" data-slide-to="3" />
          <li data-target="#projects-carousel" data-slide-to="4" />
          <li data-target="#projects-carousel" data-slide-to="5" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=101TekUD6RG10QzeVUHTZyD_kLhfnaa75"
              name="Poke-Decks"
              description="Poke-Decks is a database built around trading card game of Pokemon. You will be able to consult from all Pokemon's TCG sets to every existing card in the game. In addition, we offer a competitive tool such a deck editor."
              tags={['Javascript', 'HTML', 'CSS', 'React w/ Flux', 'Jest', 'Firebase', 'API', 'Material Design']}
              ghlink="https://github.com/algmebe1/poke-decks"
            />
          </div>
          <div className="carousel-item">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=1v8pysoh1Ncbcv4kje_zzSAvUb4A-ckmn"
              name="Get-Board-Games"
              description="Get Board Games is a mobile app that gathers features for every board game player, from board game database to forum, events and marketplace. CRUD is implemented in the user profile interface."
              tags={['Javascript', 'HTML', 'CSS', 'React Native', 'Redux', 'Jest', 'Firebase', 'ExpressJS', 'NodeJS', 'MongoDB']}
              ghlink="https://github.com/algmebe1/get-board-games"
              className="carousel-content"
            />
          </div>
          <div className="carousel-item">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=1NVWPMQVWX3nvGon6ijYa0TFEU3x1Mq_O"
              name="Rakuten TV"
              description="One of the first projects, this time developed along my classmate Akash (Akashh1996). A clone of the well-known media platform Rakuten TV"
              tags={['HTML', 'CSS', 'BEM', 'Responsive']}
              ghlink="https://github.com/algmebe1/rakuten-tv"
            />
          </div>
          <div className="carousel-item">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=1ecdOnTMjlklb7MdJo2QmflRXauYIE6nv"
              name="Maria Lunarillos"
              description="First approach to responsive design and flex-box. This project consist in replicate the website of Maria Lunarillos."
              tags={['HTML', 'CSS', 'BEM', 'Responsive']}
              ghlink="https://github.com/algmebe1/maria-lunarillos"
            />
          </div>
          <div className="carousel-item">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=1j2UGlomlL3Hynbc7IJRudSzYKLz18pOI"
              name="Bethany's Pie Shop"
              description="Little project just to put into practice media queries for responsive websites."
              tags={['HTML', 'CSS', 'BEM', 'Responsive']}
              ghlink="https://github.com/algmebe1/bethany-pie-shop"
            />
          </div>
          <div className="carousel-item">
            <ProjectItem
              previmg="https://drive.google.com/uc?id=1o1jQPSftwssEIuZjjSC5LlL3LeQ1IV4i"
              name="Game of Life"
              description="Project based in the 'Game of Life' from John Horton Conway."
              tags={['HTML', 'CSS', 'Javascript', 'BEM', 'Responsive']}
              ghlink="https://github.com/algmebe1/game-of-life"
            />
          </div>
        </div>
        <a className="carousel-control-prev" href="#projects-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#projects-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
