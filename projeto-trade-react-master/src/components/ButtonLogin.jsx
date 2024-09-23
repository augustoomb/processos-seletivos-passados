import PropTypes from 'prop-types';
import styles from '../styles/ButtonLogin.module.css';

function ButtonLogin(props) {
  const { text, onClick } = props;

  return (
    <button onClick={ onClick } className={ styles.btnLogin }>
      { text }
    </button>
  );
}

export default ButtonLogin;

ButtonLogin.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
