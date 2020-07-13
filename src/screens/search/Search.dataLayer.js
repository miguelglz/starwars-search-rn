import PropTypes from 'prop-types';
import React from 'react';
import {isNil} from 'lodash';
import Search from './Search';

export function SerachDataLayer() {
  const [searchText, setSearchText] = React.useState('');
  const [searchType, setSearchType] = React.useState();
  const canSearch = searchText !== '' && !isNil(searchType);
  const searchOptions = [
    {
      label: 'People',
      value: 'people',
    },
    {
      label: 'Movies',
      value: 'movies',
    },
  ];

  return (
    <Search
      setSearchText={setSearchText}
      setSearchType={setSearchType}
      searchText={searchText}
      searchType={searchType}
      options={searchOptions}
      disableSearchButton={!canSearch}
    />
  );
}
SerachDataLayer.propTypes = {
  defaultValue: PropTypes.string,
};

SerachDataLayer.defaultProps = {
  defaultValue: '',
};

export default SerachDataLayer;
