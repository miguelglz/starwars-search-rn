import PropTypes from 'prop-types';
import React from 'react';
import Search from './Search';

export function SerachDataLayer({}) {
  const [searchText, setSearchText] = React.useState('');
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
      searchText={searchText}
      options={searchOptions}
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
