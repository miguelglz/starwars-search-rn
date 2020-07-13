/**
 * Generates an array of objects to be used in the result list.
 *
 * @param {Array} results - Array of objects obtained as a result of a swAPI get request
 * @param {string} searchType - Type of entitity searched (or endpoind called in the search)
 *
 * @returns {Function} callback - Callback to navigate to a route.
 */

export function generateDataSet({results, searchType}) {
  return results.map((item) => {
    let displayTitle;
    switch (searchType) {
      case 'people':
        displayTitle = item.name;
        break;

      case 'films':
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
