import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './Details.style';
import {generateGoToRoute} from '../../helpers/navigation';
import Paragraph from './paragraph';
import ActionButton from '../../components/actionButton';
import TextLink from '../../components/textLink';

function Details({
  currentDetails,
  loading,
  navigation,
  title,
  detailsData,
  onLinkPress,
}) {
  const linksData =
    !isNil(currentDetails) && currentDetails.linksData
      ? currentDetails.linksData.map((link, index) => (
          <View
            style={styles.linkContainer}
            key={`${new Date().valueOf()}${index}`}>
            <TextLink
              label={link[detailsData.links.titleProperty]}
              onPress={() => onLinkPress(link)}
            />
            {index + 1 < currentDetails.linksData.length && <Text>, </Text>}
          </View>
        ))
      : 'Loading Details...';

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
  title: PropTypes.string,
  detailsData: PropTypes.object,
  onLinkPress: PropTypes.func,
};

export default Details;
