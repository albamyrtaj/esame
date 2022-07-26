import React from 'react';

const Beers = ({item}) => {
    return (
      <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image_url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Beer:</strong> {item.tagline}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <strong>First brewed:</strong> {item.first_brewed}
            </li>
            <li>
              <strong>Volume:</strong> {item.attenuation_level}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
  
  export default Beers