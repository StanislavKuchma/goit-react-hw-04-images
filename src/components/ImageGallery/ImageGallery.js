import React, { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
import Notiflix from 'notiflix';

const ImageGallery = ({ array, query, page, updateData, onShow }) => {
  const [images, setImages] = useState(array);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (page === 1) {
      setImages([]);
    }
    setLoading(true);
    fetchImages();
    onShow(true);
  }, [query, page]);

  async function fetchImages() {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${query}&image_type=foto&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
      );

      //     if (response.data.total ===0) {
      //       Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
      //       onShow(false);
      // }

      if (page * 12 > response.data.total) {
        Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        onShow(false);
      }

      setImages(state => [...state, ...response.data.hits]);
    } catch (error) {
      Notiflix.Notify.failure(
        `Sorry, there are no images matching your search query. Please try again. `
      );
    } finally {
      setLoading(false);
    }
  }
  // console.log(images)
  return (
    <>
      {loading && <ImSpinner size="64" />}
      {
        <ul className={s.ImageGallery}>
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
ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
};
export default ImageGallery;
