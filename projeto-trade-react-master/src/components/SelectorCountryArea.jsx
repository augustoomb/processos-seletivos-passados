import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from '../styles/SelectorCountryArea.module.css';
import SecondaryTitle from './SecondaryTitle';

function SelectorCountryArea(props) {
  const { dataArray, text, setSelectedCountryName } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.name, label: item.name }
  ));

  const changeCountryName = (event) => {
    setSelectedCountryName(event.value);
  };

  return (
    <section className={ styles.selectorCountryArea }>
      <SecondaryTitle text={ text } />
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        onChange={ changeCountryName }
      />
    </section>
  );
}

export default SelectorCountryArea;

SelectorCountryArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedCountryName: PropTypes.func.isRequired,
};
