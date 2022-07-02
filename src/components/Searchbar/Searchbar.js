import React,{useState} from "react";
import PropTypes from 'prop-types';
import s from "./Searchbar.module.css";
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import Notiflix from "notiflix";


const Searchbar =({onSubmit})=> {
   const [searchQuery, setSearchQuery] = useState('');
  // state = {
  //   searchQuery: '',
  // }

const handleChange = e => {
     setSearchQuery( e.currentTarget.value );
    };

const handleSubmit = e => {
    e.preventDefault();

      if (searchQuery.trim() === '') {
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again. `);
         reset();
      return;
    }

  onSubmit(searchQuery)
     
    }
const reset = () => {
        setSearchQuery('');    
    }
    return<>
    <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton} >
            <span className=""><BsSearch /></span>
          </button>
          <input onChange = {handleChange}
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
Searchbar.propTypes = {
    searchQuery: PropTypes.string,
};
export default Searchbar;
