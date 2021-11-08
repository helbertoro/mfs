import React from 'react';
import PropTypes from 'prop-types';
import './Banner.sass';

export const Banner = (props) => {
  return (
    <div className="Banner" style={{backgroundColor: props.color}}>
      <div className="Banner-wrapper" style={{backgroundImage: `url(https://la-leyenda.com/img/demo/${props.image})`}}>
        <h3
          className={props.isWhite ? '--isWhite' : ''}
          dangerouslySetInnerHTML={{__html: props.title}}
        />
      </div>
      <img className="BannerHome-arrow" src="https://la-leyenda.com/img/demo/arrow.png" alt="Flecha scroll down" />
    </div>
  );
};

Banner.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  isWhite: PropTypes.bool,
};

Banner.defaultProps = {
  color: '#FFFFFF',
  isWhite: false,
};
