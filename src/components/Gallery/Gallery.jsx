import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './Gallery.module.css';
import PropTypes from 'prop-types';

const Gallery = ({ images, updateData }) => {
  return (
    <>
      {
        <ul className={s.Gallery}>
          {images.map(data => (
            <ImageGalleryItem
              key={data.id}
              webformatURL={data.webformatURL}
              largeImageURL={data.largeImageURL}
              updateData={updateData}
            />
          ))}
        </ul>
      }
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
  updateData: PropTypes.func,
};
export default Gallery;
