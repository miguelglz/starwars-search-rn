import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {setSearchData} from '../../actions/ResultsActions';
import {isNil} from 'lodash';
import Search from './Search';

export function SearchDataLayer({
  dispatchSetSearchData,
  navigation,
  searchData,
}) {
  const [searchText, setSearchText] = React.useState('');
  const canSearch = searchText !== '' && !isNil(searchData.type);
  const searchOptions = [
    {
      label: 'People',
      value: 'people',
    },
    {
      label: 'Movies',
      value: 'films',
    },
  ];

  return (
    <Search
      setSearchData={dispatchSetSearchData}
      searchData={searchData}
      navigation={navigation}
      setSearchText={setSearchText}
      searchText={searchText}
      options={searchOptions}
      disableSearchButton={!canSearch}
    />
  );
}
SearchDataLayer.propTypes = {
  navigation: PropTypes.object.isRequired,
  searchData: PropTypes.object,
  dispatchSetSearchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {dispatchSetSearchData: setSearchData};
const mapStateToProps = ({results: {searchData}}) => ({searchData});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDataLayer);
