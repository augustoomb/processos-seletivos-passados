import PropTypes from 'prop-types';
import styles from '../styles/Title.module.css';

function Title(props) {
  const { text } = props;

  return (
    <div className={ styles.titleArea }>
      <h1 className={ styles.titleText }>{text}</h1>
    </div>
  );
}

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
