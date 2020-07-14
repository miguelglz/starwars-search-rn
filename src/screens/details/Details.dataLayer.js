import PropTypes from 'prop-types';
import React from 'react';
import Details from './Details';
import {
  appendToDataSet,
  getUrlsToFetch,
  generateLinksDataSet,
} from './Details.utils';
import swAPI from '../../helpers/api';

export function DetailsDataLayer({
  route: {
    params: {data},
  },
  navigation,
}) {
  const [loading, setLoading] = React.useState(true);
  const [detailsData, setDetailsData] = React.useState(data);

  React.useEffect(() => {
    async function appendLinksData() {
      try {
        const {searchType} = data;
        const urlsToFetch = getUrlsToFetch({data});
        const fetchPromises = urlsToFetch.map((url) => swAPI.getFromUrl({url}));
        const results = await Promise.all(fetchPromises);
        const linksData = generateLinksDataSet({results, searchType});
        const newDataSet = appendToDataSet({data, linksData});
        setDetailsData(newDataSet);
      } catch (e) {
        console.log(e);
        throw new Error(e.message);
      }
    }

    appendLinksData();
    setLoading(false);
  }, [data]);

  return (
    <Details data={detailsData} loading={loading} navigation={navigation} />
  );
}
DetailsDataLayer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default DetailsDataLayer;
