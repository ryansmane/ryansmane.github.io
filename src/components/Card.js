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
            {!clicked && <p>{props.info.substring(0, 200)+ '. . .'}<button onClick={() => setClicked(true)}>Read More</button></p>}
            {clicked && 
            <>
            <p>{props.info}</p>
            <div className='specifics'>
            <p>Technologies used: {props.tech}</p>
            {props.special_note && <p>Special Note: {props.special_note}</p>}
            <button onClick={() => setClicked(false)}>Hide</button>
            </div>
            </>
            }
         </div>
      </>
   );
};

export default Card;
