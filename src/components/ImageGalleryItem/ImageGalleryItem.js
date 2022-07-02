import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, updateData }) => {
  return (
    <>
      <li
        className={s.ImageGalleryItem}
        onClick={() => updateData(largeImageURL)}
      >
        <img
          className={s.ImageGalleryItem_image}
          src={webformatURL}
          alt={largeImageURL}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  updateData: PropTypes.func,
};
export default ImageGalleryItem;
