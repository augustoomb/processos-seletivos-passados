import PropTypes from 'prop-types';
import styles from '../styles/SecondaryTitle.module.css';

function SecondaryTitle(props) {
  const { text } = props;

  return (
    <div className={ styles.titleArea }>
      <h1 className={ styles.titleText }>{text}</h1>
    </div>
  );
}

export default SecondaryTitle;

SecondaryTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
