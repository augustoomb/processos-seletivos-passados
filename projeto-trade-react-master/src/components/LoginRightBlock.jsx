import PropTypes from 'prop-types';
import styles from '../styles/LoginRightBlock.module.css';
import ButtonLogin from './ButtonLogin';
import SpanErrors from './SpanErrors';

function LoginRightBlock(props) {
  const { value, onChange, onClick, errors } = props;
  return (
    <div className={ styles.rightBlock }>
      <div className={ styles.rightBlockContent }>
        <h1 className={ styles.title }>React Sports</h1>
        <input
          className={ styles.input }
          placeholder="Digite sua key"
          type="text"
          value={ value }
          onChange={ onChange }
        />

        <ButtonLogin text="Login" onClick={ onClick } />
        <SpanErrors text={ errors } />
      </div>
    </div>
  );
}

LoginRightBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default LoginRightBlock;
