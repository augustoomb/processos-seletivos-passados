import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from '../styles/SelectorTeamArea.module.css';
import SecondaryTitle from './SecondaryTitle';

function SelectorTeamArea(props) {
  const { dataArray, text, setSelectedTeamId } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.team.id, label: item.team.name }
  ));

  const changeTeamId = (event) => {
    setSelectedTeamId(event.value);
  };

  return (
    <section className={ styles.selectorTeamArea }>
      <SecondaryTitle text={ text } />
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        onChange={ changeTeamId }
      />
    </section>
  );
}

export default SelectorTeamArea;

SelectorTeamArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedTeamId: PropTypes.func.isRequired,
};
