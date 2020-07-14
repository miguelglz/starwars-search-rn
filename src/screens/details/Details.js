import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './Details.style';
import {generateGoToRoute} from '../../helpers/navigation';
import Paragraph from './paragraph';
import ActionButton from '../../components/actionButton';

function Details({currentDetails, loading, navigation, title, detailsData}) {
  const linksData =
    !isNil(currentDetails) && currentDetails.linksData
      ? currentDetails.linksData
          .map((link) => link[detailsData.links.titleProperty])
          .join(', ')
      : `Loading Details...`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {isNil(detailsData) || loading ? (
          <Text>Loading Details...</Text>
        ) : (
          <>
            <Text style={styles.title}>{title}</Text>
            <Paragraph
              subTitle={detailsData.description.title}
              content={detailsData.description.text}
            />
            <Paragraph subTitle={detailsData.links.title} content={linksData} />
          </>
        )}
      </View>
      <ActionButton
        label={'back to search'}
        disabled={false}
        onPress={generateGoToRoute({
          navigation,
          routeName: 'Search',
        })}
      />
    </ScrollView>
  );
}

Details.propTypes = {
  currentDetails: PropTypes.object,
  loading: PropTypes.bool,
  navigation: PropTypes.object,
};

export default Details;
