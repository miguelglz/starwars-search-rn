import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {selectDetails} from '../../../actions/ResultsActions';
import ResultItem from './ResultItem';
import {generateGoToRoute} from '../../../helpers/navigation';

export function ResultItemDataLayer({
  dispatchSelectDetails,
  data,
  navigation,
  searchData,
}) {
  function handleOnPress() {
    dispatchSelectDetails(data);
    generateGoToRoute({
      navigation,
      routeName: 'Details',
      stack: true,
    })();
  }

  return (
    <ResultItem
      title={data[searchData.titleProperty]}
      onPress={handleOnPress}
    />
  );
}
ResultItemDataLayer.propTypes = {
  dispatchSelectDetails: PropTypes.func.isRequired,
  resultList: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  searchData: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSelectDetails: (data) => dispatch(selectDetails(data)),
  };
};

const mapStateToProps = ({results: {searchData}}) => ({
  searchData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultItemDataLayer);
