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
               
          
            
         </header>
         <main>
            <div className='lefthand-content'>
               <div className='special-border'></div>
               <p>
                  No dramatics here. My name is Ryan Zimmer. I have an
                  undergraduate degree in Math and Economics and I want to be a
                  career software engineer. Following this paragraph, you will
                  find a list of technologies I have used enough to call my use
                  of them 'skillful' while being entirely sure that there exists
                  dozens if not hundreds if not thousands of people in the world
                  that can use them more skillfully than I can -{' '}
                  <em>at present</em>. Chances are as you read this I've been
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
                  <li>Java (Java 10 [Nothing special], Processing)</li>
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
                  That's it for self-cherishment. Feel free to consult my work,
                  and equally free to contact me.
               </p>
               <div className='special-border'></div>
            </div>
            <div className='link-cont'>
               <div className='link-pos'>
                  <div className='link-and-text'>
                     <img className='link-img' src={ln} alt='project_image' />
                     <p>linkedin/dada</p>
                  </div>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={gmail}
                        alt='project_image'
                     />
                     <p>linkedin/dada</p>
                  </div>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={github}
                        alt='project_image'
                     />
                     <p>linkedin/dada</p>
                  </div>
                  <div className='link-and-text'>
                     <img
                        className='link-img'
                        src={youtube}
                        alt='project_image'
                     />
                     <p>linkedin/dada</p>
                  </div>
               </div>

               <div className='my-work-cont'>
                  <h2>Projects:</h2>
                  <div className='my-work'>
                     {projects.map((el) => {
                        return (
                           <div className='card-box'>
                              <Card
                                 title={el.title}
                                 info={el.info}
                                 image={el.image}
                              />
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div>
                 <section className='cr'>
                   <p>This website was created with React.</p>
                   <p>Last updated: Spring 2020</p>
                   
                   </section>
              </div>
            </div>
         </main>
      </>
   );
}

export default App;
