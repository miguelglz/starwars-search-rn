import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {setResultList} from '../../actions/ResultsActions';
import Results from './Results';
import swAPI from '../../helpers/api';

export function ResultsDataLayer({
  dispatchSetResultList,
  resultList,
  route: {
    params: {searchText},
  },
  navigation,
  searchData,
}) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const {results} = await swAPI.getBySearchTerm({
          endpoint: searchData.type,
          search: searchText,
        });
        dispatchSetResultList(results);
      } catch (e) {
        console.log(e);
        throw new Error(e.message);
      }
    }

    fetchData();
    setLoading(false);
  }, [searchText]);

  return (
    <Results
      data={resultList}
      loading={loading}
      navigation={navigation}
      searchData={searchData}
    />
  );
}
ResultsDataLayer.propTypes = {
  dispatchSetResultList: PropTypes.func.isRequired,
  resultList: PropTypes.array,
  route: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  searchData: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetResultList: (resultList) => dispatch(setResultList(resultList)),
  };
};

const mapStateToProps = ({results: {resultList, searchData}}) => ({
  resultList,
  searchData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsDataLayer);
