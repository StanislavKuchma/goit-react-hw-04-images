import s from "./Button.module.css"
import PropTypes from 'prop-types'

const Button = ({onClick

}) => {
  return <>
    <button onClick={onClick }type="submit" className={s.Button} >Add more</button>
    </>
}

Button.propTypes = {
    onClick: PropTypes.func,
};
export default Button;