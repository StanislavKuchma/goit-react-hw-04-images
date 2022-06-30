import React from "react";
import PropTypes from 'prop-types';
import s from "./Searchbar.module.css";
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import Notiflix from "notiflix";


export class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  }

  handleChange = e => {
     this.setState({ searchQuery: e.currentTarget.value });
    };

  handleSubmit = e => {
    e.preventDefault();

      if (this.state.searchQuery.trim() === '') {
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
         this.reset();
      return;
    }

  this.props.onSubmit(this.state.searchQuery)
     
    }
    reset = () => {
        this.setState({ searchQuery: ''});    
    }
    

  render() {
    return<>
    <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton} >
            <span className=""><BsSearch /></span>
          </button>
          <input onChange = {this.handleChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
 </>
  }
}
Searchbar.propTypes = {
    searchQuery: PropTypes.string,
};
export default Searchbar;
