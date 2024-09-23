import backgroundLeft from '../images/background-left-block.jpg';
import styles from '../styles/LoginLeftBlock.module.css';

function LoginLeftBlock() {
  return (
    <div
      className={ styles.leftBlock }
      style={ { backgroundImage: `url(${backgroundLeft})` } }
    >
      {/* <h3>Texto 123</h3> */}
    </div>
  );
}

export default LoginLeftBlock;
