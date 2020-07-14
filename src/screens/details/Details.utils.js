/**
 * Appends an array of objects to be used as data for the links to other details.
 *
 * @param {Object} data - object with the details as properties.
 * @param {Array} linksData - Array of objects with the data of the links.
 *
 * @returns {Object} Details with extra data.
 */

export function appendToDataSet({currentDetails, linksData}) {
  return {
    ...currentDetails,
    linksData,
  };
}

/**
 * Gets the detail's property names and titles to be used based on the search type.
 *
 * @param {Object} currentDetails - object with the details as properties.
 * @param {string} searchType - Current Search Type.
 *
 * @returns {Object} Array of URLS to be fetched.
 */

export function getPropertiesAndTitles({currentDetails, searchType}) {
  switch (searchType) {
    case 'people':
      const {
        films,
        birth_year,
        gender,
        eye_color,
        hair_color,
        height,
        mass,
      } = currentDetails;
      return {
        links: {
          title: 'Movies',
          urls: films,
          titleProperty: 'title',
          searchType: 'films',
        },
        description: {
          title: 'Details',
          text: `Birth Year: ${birth_year}
Gender: ${gender}
Eye Color: ${eye_color}
Hair Color: ${hair_color}
Height: ${height}
Mass: ${mass}`,
        },
      };

    case 'films':
      const {characters, opening_crawl} = currentDetails;
      return {
        links: {
          title: 'Characters',
          urls: characters,
          titleProperty: 'name',
          searchType: 'people',
        },
        description: {
          title: 'Opening Crawl',
          text: opening_crawl,
        },
      };

    default:
      throw new Error(`${searchType} is not a valid search type.`);
  }
}
