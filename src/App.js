import React from 'react';
import Card from './components/Card';
import { projects } from './data/projects';
import ln from './imgs/lnlogo.png';
import gmail from './imgs/gmaillogo.png';
import github from './imgs/githublogo.png';
import youtube from './imgs/youtubelogo.png';
import './App.css';

function App() {
   return (
      <>
         <header>
            <h1>Platitudes are Poison.</h1>
            <div className='link-pos'>
               <a href='https://github.com/ryansmane'>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={github}
                        alt='project_image'
                     />
                  </div>
               </a>
               <a href='https://linkedin.com/in/ryan-zimmer'>
                  <div className='link-and-text'>
                     <img className='link-img' src={ln} alt='project_image' />
                  </div>
               </a>
               <a href='https://www.youtube.com/channel/UCCYXASVuBnXQDzpAi2dDe5A'>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={youtube}
                        alt='project_image'
                     />
                  </div>
               </a>
               <a href='mailto:ryanzimmer8@gmail.com'>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={gmail}
                        alt='project_image'
                     />
                  </div>
               </a>
            </div>
         </header>
         <main>
            <div className='lefthand-content'>
               <div className='special-border'></div>
               <p>
                  No dramatics here. My name is Ryan Zimmer. I don't try to sell
                  myself as a senior or seasoned developer. I am a passionate and
                  creative learner. Programming offered me the unique
                  opportunity to be an artist and an engineer, so I fell in love
                  with it.
               </p>

               <p>Here's what I'm good at:</p>
               <ul className='firstp'>
                  <li>
                     JavaScript (ES8, TypeScript, ReactJS, NodeJS, Express,
                     Angular9)
                  </li>
                  <li>Python (Python3, Django)</li>
                  <li>Java (Java 10, Processing)</li>
               </ul>
               <p>What I'm actively learning:</p>
               <ul className='firstp'>
                  <li>C/C++</li>
                  <li>Lua/Love2D</li>
                  <li>Neural Network Design</li>
               </ul>
               <p>My Database Knowledge / General Knowledge</p>
               <ul className='firstp'>
                  <li>MongoDB (through Express)</li>
                  <li>PostgreSQL (through Python)</li>
                  <li>Web Socketing</li>
                  <li>Object-Oriented Programming</li>
                  <li>Agile Development Methods</li>
                  <li>Test-Driven Development</li>
               </ul>
               <p>My Education:</p>
               <ul className='firstp'>
                  <li>General Assembly - Software Engineering, 2020 </li>
                  <li>
                     Central State University - Mathematics and Economics,
                     2018
                     </li>
               </ul>
               <p>
                  In relation to design, I've used React Bootstrap, Pug, and
                  SASS to limited extents. I'm looking for entry-level/associate
                  work in front-end or back-end development, surrounded by
                  other, more experienced, developers. Feel free to consult my
                  projects and repositories, and equally free to contact me using the links at
                  the top of the page.
               </p>
               <div className='special-border'></div>
            </div>
            <div className='link-cont'>
               <div className='my-work-cont'>
                  <div>
                     <h2>My Work</h2>
                     <div className='special-border2'></div>
                  </div>
                  <div className='my-work'>
                     {projects.map((el) => {
                        return (
                           <div className='card-box'>
                              <Card
                                 title={el.title}
                                 info={el.info}
                                 image={el.image}
                                 tech={el.technologies}
                                 status={el.deployed}
                                 link={el.link}
                                 special_note={el.special_note}
                              />
                           </div>
                        );
                     })}
                  </div>
               </div>
               {/* <div>
                  <section className='cr'>
                     <p>This website was created with React.</p>
                     <span>Last updated: Spring 2020</span>
                  </section>
               </div> */}
            </div>
         </main>
      </>
   );
}

export default App;
