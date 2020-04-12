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
           <a href='https://github.com/ryansmane'><div className='link-and-text'>
             <img
               className='link-img'
               src={github}
               alt='project_image'
             />
             
           </div></a>
           <a href='https://linkedin.com/in/ryan-zimmer'><div className='link-and-text'>
             <img className='link-img' src={ln} alt='project_image' />
             
           </div></a>
           <a href='https://www.youtube.com/channel/UCCYXASVuBnXQDzpAi2dDe5A'><div className='link-and-text'>
             <img
               className='link-img'
               src={youtube}
               alt='project_image'
             />
             
           </div></a>
           <a href='mailto:ryanzimmer8@gmail.com'><div className='link-and-text'>
             <img
               className='link-img'
               src={gmail}
               alt='project_image'
             />
             
           </div></a>
         </div>
         </header>
         <main>
            <div className='lefthand-content'>
              
          
               <div className='special-border'></div>
               <p>
                  No dramatics here. My name is Ryan Zimmer. I have two
                  undergraduate degrees in Math and Economics and I want to be a
                  career software engineer. Following this paragraph, you will
                  find a list of technologies I have used enough to call my use
                  of them 'skillful' while being entirely sure that there exists
                  dozens, if not hundreds, if not thousands of people in the world
                  that can use them more skillfully than I can. Chances are, as you read this I've been
                  writing code for less than a year - or I've fallen too
                  catatonic to update this page. This is to say I am not
                  seasoned. And while some hide their inexperience on paper,
                  they will almost always reveal it in person so I find it best
                  to clear that path now. What I offer an instutition, a
                  company, a group, or even a single person as an engineer is
                  not wisdom - but strength in what I know, as well as a
                  personal potential to know much more.
               </p>

               <p>The list as promised (ordered by relative comfort):</p>
               <ul className='firstp'>
                  <li>
                     JavaScript (ES8, Typescript, ReactJS, NodeJS, Angular9)
                  </li>
                  <li>Python (Python3, Django)</li>
                  <li>Java (Java 10 - Nothing Special, Processing)</li>
                  <li>
                     C++ (Novice - I like to pretend I understand C++, so I'll
                     list it here)
                  </li>
               </ul>
               <p>Database Knowledge / General Knowledge</p>
               <ul className='firstp'>
                  <li>MongoDB (through Express)</li>
                  <li>PostgreSQL (through Python)</li>
                  <li>Object-Oriented Programming</li>
                  <li>Agile Development Methods</li>
                  <li>Test-Driven Development (React/Express specifically)</li>
               </ul>

               <p>
                  CSS and HTML too, of course. I just don't think they share the
                  same category as the above languages, so shouldn't be compared
                  by difficulty. In relation to design, I've used React
                  Bootstrap, Pug, and SASS to limited extents.
               </p>
               <p>
                  That's it for self-cherishment. Feel free to consult my projects,
                  and equally free to contact me using the links at the top of the page.
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
