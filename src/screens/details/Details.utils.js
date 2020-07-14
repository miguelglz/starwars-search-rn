/**
 * Appends an array of objects to be used as data for the links to other details.
 *
 * @param {Object} data - object with the details as properties.
 * @param {Array} linksData - Array of objects with the data of the links.
 *
 * @returns {Object} Details with extra data.
 */

export function appendToDataSet({data, linksData}) {
  return {
    ...data,
    linksData,
  };
}

/**
 * Gets the array of urls depending on the search type.
 *
 * @param {Object} data - object with the details as properties.
 *
 * @returns {Array} Array of URLS to be fetched.
 */

export function getUrlsToFetch({data}) {
  switch (data.searchType) {
    case 'people':
      return data.films;

    case 'films':
      return data.characters;

    default:
      throw new Error(`${data.searchType} is not a valid search type.`);
  }
}

/**
 * Generates an array of objects to be used in the details screen.
 *
 * @param {Array} results - Array of objects obtained as a result of a swAPI get request
 * @param {string} searchType - Type of entitity searched (or endpoind called in the search)
 *
 * @returns {Object} Fetch result with title and search type.
 */

export function generateLinksDataSet({results, searchType}) {
  return results.map((item) => {
    let displayTitle;
    switch (searchType) {
      case 'films':
        displayTitle = item.name;
        break;

      case 'people':
        displayTitle = item.title;
        break;

      default:
        throw new Error(`${searchType} is not a valid search type.`);
    }

    return {
      ...item,
      displayTitle,
      searchType,
    };
  });
}
