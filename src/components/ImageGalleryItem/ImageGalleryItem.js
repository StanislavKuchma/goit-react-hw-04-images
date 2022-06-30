import React from "react";
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  updateData
}) => {

  return <>
   
    <li key={id}  className={s.ImageGalleryItem} onClick={()=>updateData(largeImageURL)}> 
  <img className={s.ImageGalleryItem_image} src={webformatURL} alt={largeImageURL} />
    </li> 
    </>
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
    updateData: PropTypes.func,
};
export default ImageGalleryItem;