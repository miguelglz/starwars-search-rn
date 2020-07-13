import PropTypes from 'prop-types';
import React from 'react';
import Search from './Search';

export function SerachDataLayer({}) {
  const [searchText, setSearchText] = React.useState('');

  return <Search setSearchText={setSearchText} searchText={searchText} />;
}
SerachDataLayer.propTypes = {
  defaultValue: PropTypes.string,
};

SerachDataLayer.defaultProps = {
  defaultValue: '',
};

export default SerachDataLayer;
