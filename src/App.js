import React from 'react';
import Card from './components/Card'
import {projects} from './data/projects'
import './App.css';

function App() {

  return (
    <>
    <header>
      <div className='head-padding'>
      
          <img
            className='link-img'
            src='https://cdn.vox-cdn.com/thumbor/Gw34NsuMX1fjz0dq8ILrEcvUPuE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10581345/acastro_180403_1777_youtube_0001.jpg'
            alt='project_image'
          />
            <h1>Platitudes are Poison.</h1>
          <img
            className='link-img'
            src='https://cdn.vox-cdn.com/thumbor/Gw34NsuMX1fjz0dq8ILrEcvUPuE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10581345/acastro_180403_1777_youtube_0001.jpg'
            alt='project_image'
          />
          
      
      </div>
    </header>
    <main>
    <div className='lefthand-content'>
      <p>No dramatics here. My name is Ryan Zimmer. I have an undergraduate degree in Math and Economics and I want to be a career software engineer. Following this paragraph, you will find a list of technologies I have used enough to call my use of them 'skillful' while being entirely sure that there exists dozens if not hundreds if not thousands of people in the world that can use them more skillfully than I can - <em>at present</em>. Chances are as you read this I've been writing code for less than a year - or I've fallen too catatonic to update this page. This is to say I am not seasoned. And while some hide their inexperience on paper, they will almost always reveal it in person so I find it best to clear that path now. What I offer an instutition, a company, a group, or even a single person as an engineer is not wisdom - but strength in what I know, as well as a personal potential to know much more.</p>

      <p>The list as promised (ordered by relative comfort):</p>
      <ul>
        <li>JavaScript (ES8, Typescript, ReactJS, NodeJS, Angular9)</li>
        <li>Python (Python3, Django)</li>
        <li>Java (Java 10 [Nothing special], Processing)</li>
        <li>C++ (Novice - I like to pretend I understand C++, so I'll list it here)</li>
      </ul>
      <p>Database Knowledge / General Knowledge</p>
      <ul>
        <li>MongoDB (through Express)</li>
        <li>PostgreSQL (through Python)</li>
        <li>Object-Oriented Programming</li>
        <li>Agile Development Methods</li>
        <li>Test-Driven Development (React/Express specifically)</li>
      </ul>


      <p>CSS and HTML too, of course. I just don't think they share the same fundamentals as the above languages, so shouldn't be compared by difficulty. In relation to design, I've used React Bootstrap, Pug, and SASS to limited extents.</p>
      <p>That's it for self-cherishment. Feel free to consult my work, and equally free to contact me.</p>
    </div>
    <div className='my-work-cont'>
    <h2>My Work</h2>
    <div className='my-work'>
    
    {projects.map(el => {
      return (
        <div className = 'card-box'>
        <Card title={el.title} info={el.info} image={el.image}/>
        </div>
      )
    })}
    </div>
    </div>
    </main>
    </>
  );
}

export default App;
