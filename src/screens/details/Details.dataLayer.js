import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {selectDetails} from '../../actions/ResultsActions';
import Details from './Details';
import {appendToDataSet, getPropertiesAndTitles} from './Details.utils';
import swAPI from '../../helpers/api';

export function DetailsDataLayer({
  navigation,
  currentDetails,
  searchData,
  dispatchSelectDetails,
}) {
  const [loading, setLoading] = React.useState(true);
  const [detailsData, setDetailsData] = React.useState(null);

  React.useEffect(() => {
    async function appendLinksData() {
      try {
        const formattedDetailsData = getPropertiesAndTitles({
          currentDetails,
          searchType: searchData.type,
        });
        setDetailsData(formattedDetailsData);
        const fetchPromises = formattedDetailsData.links.urls.map((url) =>
          swAPI.getFromUrl({url}),
        );
        const linksData = await Promise.all(fetchPromises);
        const newDataSet = appendToDataSet({currentDetails, linksData});
        dispatchSelectDetails(newDataSet);
      } catch (e) {
        console.log(e);
        throw new Error(e.message);
      }
    }

    appendLinksData();
    setLoading(false);
  }, []);

  return (
    <Details
      currentDetails={currentDetails}
      loading={loading}
      navigation={navigation}
      title={currentDetails[searchData.titleProperty]}
      detailsData={detailsData}
    />
  );
}
DetailsDataLayer.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentDetails: PropTypes.object.isRequired,
  searchData: PropTypes.object.isRequired,
  dispatchSelectDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSelectDetails: (data) => dispatch(selectDetails(data)),
  };
};

const mapStateToProps = ({results: {currentDetails, searchData}}) => ({
  currentDetails,
  searchData,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDataLayer);
