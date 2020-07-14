import {
  SET_RESULT_LIST,
  SET_CURRENT_DETAILS,
  SET_SEARCH_DATA,
} from './types/ResultsTypes';

export function setResultList(resultList) {
  return {
    type: SET_RESULT_LIST,
    payload: {
      resultList,
    },
  };
}

export function selectDetails(data) {
  return {
    type: SET_CURRENT_DETAILS,
    payload: {
      data,
    },
  };
}

export function setSearchData(searchType) {
  return {
    type: SET_SEARCH_DATA,
    payload: {
      searchType,
    },
  };
}
