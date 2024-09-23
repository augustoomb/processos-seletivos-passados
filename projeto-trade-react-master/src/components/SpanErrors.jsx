import PropTypes from 'prop-types';

function SpanErrors(props) {
  const { text } = props;

  return (
    <div>
      {
        text !== undefined ? (
          <span>{ text }</span>
        ) : (
          null
        )
      }
    </div>
  );
}

export default SpanErrors;

SpanErrors.propTypes = {
  text: PropTypes.string.isRequired,
};
