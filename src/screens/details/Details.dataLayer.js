import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {selectDetails, setSearchData} from '../../actions/ResultsActions';
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
  const [currentSeatchData, setCurrentSeatchData] = React.useState(searchData);

  function handleOnLinkPress(data) {
    const {searchType, titleProperty} = detailsData.links;
    setCurrentSeatchData({
      type: searchType,
      titleProperty,
    });
    dispatchSelectDetails(data);
  }

  React.useEffect(() => {
    async function appendLinksData() {
      try {
        const formattedDetailsData = getPropertiesAndTitles({
          currentDetails,
          searchType: currentSeatchData.type,
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
  }, [currentSeatchData]);

  return (
    <Details
      currentDetails={currentDetails}
      loading={loading}
      navigation={navigation}
      title={currentDetails[currentSeatchData.titleProperty]}
      detailsData={detailsData}
      onLinkPress={handleOnLinkPress}
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
