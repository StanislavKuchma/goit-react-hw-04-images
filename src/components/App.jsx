import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import './styles.css';

const App = () => {
  const [arrayImages, setArrayImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [img, setImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleFormSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setArrayImages([]);
    setShowButton(true);
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
  const addButton = data => {
    setShowButton(data);
  };

  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery
        array={arrayImages}
        query={query}
        page={page}
        updateData={openModal}
        onShow={addButton}
      />

      {showButton && <Button onClick={addMoreImage} />}
      {showModal && <Modal onClose={toggleModal} image={img} />}
    </>
  );
};

export default App;
