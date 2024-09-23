import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from '../styles/SelectorLeagueArea.module.css';
import SecondaryTitle from './SecondaryTitle';

function SelectorLeagueArea(props) {
  const { dataArray, text, setSelectedLeagueId } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.league.id, label: item.league.name }
  ));

  const changeLeagueId = (event) => {
    setSelectedLeagueId(event.value);
  };

  return (
    <section className={ styles.selectorLeagueArea }>
      <SecondaryTitle text={ text } />
      <Select
        options={ mountOptions() }
        isDisabled={ dataArray.length === 0 }
        onChange={ changeLeagueId }
      />
    </section>
  );
}

export default SelectorLeagueArea;

SelectorLeagueArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedLeagueId: PropTypes.func.isRequired,
};
