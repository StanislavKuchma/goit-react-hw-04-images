import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer} from 'react-toastify';
import './styles.css'

export class App extends React.Component {
  state = {
  page: 1,  
  query: '',
  showModal: false,
  showButton: false,
  }
  handleFormSubmit = searchQuery => {
    this.setState({ query: searchQuery, page: 1,showButton: true });
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  }
  openModal = largeImageURL => {
    this.setState({ img: largeImageURL });
    this.toggleModal();
  }  
  addMoreImage = () => {
    this.setState(prevState=>{return{page: prevState.page +=1}})
  }
  showButton = data => {
this.setState({ showButton: data });
  }

  render() {
    const { showModal,showButton } = this.state;
    return (
<>
        <ToastContainer/> 
        <Searchbar onSubmit={this.handleFormSubmit}/>

           <ImageGallery
          query={this.state.query}
          page={this.state.page}
          updateData={this.openModal}
          onShow={this.showButton}
        />

          {/* <Button onClick={this.addMoreImage}/> */}
    
        {showButton && <Button
          
          onClick={this.addMoreImage}
          />} 
        {showModal && <Modal
          onClose={this.toggleModal}
          image ={this.state.img}
          />}
  </>
     
  );
};
}
