import React from 'react';

const Card = function (props) {
   return (
      <>

         <img
            className='card-img'
            src={props.image}
            alt='project_image'
         />
         <div>
            <h1>{props.title}</h1>
            <h6>{props.info}</h6>
         </div>
      </>
   );
};

export default Card;
