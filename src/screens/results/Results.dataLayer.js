import PropTypes from 'prop-types';
import React from 'react';
import Results from './Results';
import swAPI from '../../helpers/api';

export function ResultsDataLayer({
  route: {
    params: {searchType, searchText},
  },
  navigation,
}) {
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await swAPI.getBySearchTerm(searchType, searchText);
      console.log('respn', response);
      setResults(response.results);
    }

    fetchData();
    setLoading(false);
  }, [searchType, searchText]);

  return <Results data={results} loading={loading} searchType={searchType} />;
}
ResultsDataLayer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default ResultsDataLayer;
