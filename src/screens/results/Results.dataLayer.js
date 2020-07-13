import PropTypes from 'prop-types';
import React from 'react';
import Results from './Results';
import {generateDataSet} from './Results.utils';
import swAPI from '../../helpers/api';

export function ResultsDataLayer({
  route: {
    params: {searchType, searchText},
  },
  navigation,
}) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const {results} = await swAPI.getBySearchTerm(searchType, searchText);
        const dataSet = generateDataSet({results, searchType});
        setData(dataSet);
      } catch (e) {
        console.log(e);
        throw new Error(e.message);
      }
    }

    fetchData();
    setLoading(false);
  }, [searchType, searchText]);

  return <Results data={data} loading={loading} navigation={navigation} />;
}
ResultsDataLayer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default ResultsDataLayer;
