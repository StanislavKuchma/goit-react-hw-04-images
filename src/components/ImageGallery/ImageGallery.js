import React,{PureComponent} from "react";
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im'
// import { toast} from 'react-toastify';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import axios from "axios";
import Notiflix from 'notiflix';

export default class ImageGallery extends PureComponent {
 
  state = {
    images: [],
    loading: false,
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) { 
      this.setState({ loading: true, images: [] });
      this.fetchImages();
      this.props.onShow(true)
      return
    }

    if (prevProps.page !== this.props.page) { 
      this.setState({ loading: true });
      this.fetchImages();
      return
    }
  }

  async fetchImages() {
        this.setState({ loading: true });
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=26970425-ccd1377388b76d413dfca163b&q=${this.props.query}&image_type=foto&orientation=horizontal&safesearch=true&per_page=12&page=${this.props.page}`);
      // toast("Wow so easy!")
          if (response.data.total ===0) {
            Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
            this.props.onShow(false);
      }

          if (this.props.page * 12 >response.data.total) {
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
            this.props.onShow(false);
      }

      this.setState(prevState => {
        const newArray = [...prevState.images, ...response.data.hits]
        return { images: newArray }
      })
    } catch (error) {
    Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
    } finally {this.setState({ loading: false })}
  }
  render() {
  const images = this.state.images
    return <>
        {this.state.loading && <ImSpinner size="64"/>}
             
      <ul className={s.ImageGallery}  >
        {images.map(data =>
          <ImageGalleryItem
            key={data.id}
            webformatURL={data.webformatURL}
            largeImageURL={data.largeImageURL}
            updateData={this.props.updateData}
            />
     )} 
      </ul>  
      
      </>
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
}