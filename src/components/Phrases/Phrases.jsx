import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Elements } from './Elements.js';
import './Phrases.sass';

export const Phrases = (props) => {
  const [index, setIndex] = useState(0);
  const data = Elements.filter(item => item.page === props.page)[0];

  const handleClick = (index) => () => {
    setIndex(index);
  };

  return (
    <div className="Phrases">
      <div className="Phrases-content">
        <div
          dangerouslySetInnerHTML={{ __html: data.content[index].phrase }}
        />
      </div>
      <div className="Phrases-title">
        <ul>
          {data.content.map((item, i) => (
            <li
              key={`Phrases-title-${i}`}
              style={{height: `calc(100%/${data.content.length}`}}
            >
              <button
                onClick={handleClick(i)}
                className={index === i ? 'Phrases-button --active' : 'Phrases-button'}
                >
                  {item.title}
                </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Phrases.propTypes = {
  page: PropTypes.string,
};
