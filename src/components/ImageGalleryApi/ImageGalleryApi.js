import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im';
import Gallery from 'components/Gallery/Gallery';
import axios from 'axios';
import Notiflix from 'notiflix';

const ImageGallery = ({ query, page, updateData, showButton }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${query}&image_type=foto&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
      );
      console.log(response.data.hits);

      if (response.data.total === 0) {
        Notiflix.Notify.failure(
          `Sorry, there are no images matching your search query. Please try again. `
        );
        showButton(false);
        return;
      }

      if (page * 12 > response.data.total) {
        showButton(false);
        Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }
      setImages(state => [...state, ...response.data.hits]);
    } catch (err) {
      Notiflix.Notify.failure(
        `Sorry, there are no images matching your search query. Please try again. `
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (page === 1) {
      setImages([]);
    }
    setLoading(true);

    getResponse();

    // .catch(function () {
    //   // showButton(false);
    //   Notiflix.Notify.failure(
    //     `Sorry, there are no images matching your search query. Please try again. `
    //   );
    // })
    // .then(function () {
    //   setLoading(false);
    // });
  }, [query, page]);

  return (
    <>
      {loading && <ImSpinner size="64" />}
      <Gallery images={images} updateData={updateData} />
    </>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
};
export default ImageGallery;
