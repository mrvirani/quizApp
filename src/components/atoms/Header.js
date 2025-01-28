import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Matrics} from '../../constants';
const Header = ({title}) => {
    
  return (
    <View style={styles.headerContainer}>
      {title ? <Text style={styles.titleText}>{title}</Text> : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: Matrics.vs(16),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    textAlign: 'center',
  },
});
