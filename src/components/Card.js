import React, {useState} from 'react';
 
const Card = function (props) {

    const [clicked, setClicked] = useState(false);

    
   return (
      <>

         <a href={props.link}><img
            className='card-img'
            src={props.image}
            alt='project_image'
           /></a>
         <div className='card-text'>
            <a href={props.link}><h1>{props.title}</h1></a>
            {!clicked && <p>{props.info.substring(0, 150)+ '. . .'}<button onClick={() => setClicked(true)}>Read More</button></p>}
            {clicked && 
            <>
            <p>{props.info}</p>
            <div className='specifics'>
            <p>Technologies used: {props.tech}</p>
            <p>Online Status: {props.status}</p>
            <button onClick={() => setClicked(false)}>Read Less</button>
            </div>
            </>
            }
         </div>
      </>
   );
};

export default Card;
