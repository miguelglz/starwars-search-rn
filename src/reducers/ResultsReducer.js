import {
  SET_RESULT_LIST,
  SET_CURRENT_DETAILS,
  SET_SEARCH_DATA,
} from '../actions/types/ResultsTypes';

const INITIAL_STATE = {
  resultList: null,
  currentDetails: null,
  searchData: {},
};

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case SET_RESULT_LIST:
      return {
        ...state,
        resultList: payload.resultList,
      };

    case SET_CURRENT_DETAILS:
      return {
        ...state,
        currentDetails: payload.data,
      };

    case SET_SEARCH_DATA:
      const {searchType} = payload;
      let titleProperty;
      switch (searchType) {
        case 'people':
          titleProperty = 'name';
          break;
        case 'films':
          titleProperty = 'title';
          break;
        default:
          throw new Error(`${searchType} is not a valid search type.`);
      }

      return {
        ...state,
        searchData: {
          type: searchType,
          titleProperty,
        },
      };

    default:
      return state;
  }
}
