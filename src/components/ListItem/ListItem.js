import React from 'react'
import "./ListItem.css"

const ListItem = ({title, description, price, itemImage}) => {

  const descriptionLines = description ? description.split('\n') : [];
 
  return (
    <div className="list-items">
        <ul>
            <li>
                {itemImage && <img src={itemImage} alt="hero" />}

                <div>
                    <h3 className='list-item-text-h3'>{title}</h3>
                    {description && 
                      <p className='list-item-text-p'>
                        {descriptionLines.map((line, index) => (
                          <span key={index}>
                            {line}
                            <br /> 
                          </span>
                        ))}
                      </p>}
                </div>

                <h3 className='list-item-text-h3'>${price}</h3>
            </li>
        </ul>
    </div>
  )
}

export default ListItem