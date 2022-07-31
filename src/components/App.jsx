import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGalleryApi/ImageGalleryApi';
import { ToastContainer } from 'react-toastify';
import './styles.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [img, setImg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openModal = largeImageURL => {
    setImg(largeImageURL);
    toggleModal();
  };
  const addMoreImage = () => {
    setPage(state => (state += 1));
  };
  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery
        query={query}
        page={page}
        addMoreImage={addMoreImage}
        updateData={openModal}
        // showButton={addButton}
      />

      {showModal && <Modal onClose={toggleModal} image={img} />}
    </>
  );
};

export default App;
