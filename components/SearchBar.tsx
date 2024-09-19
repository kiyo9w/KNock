import React from 'react';
import { TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SearchBar = () => {
  return (
    <TextInput
      style={globalStyles.searchBar}
      placeholder="Search anything ..."
      placeholderTextColor="#aaa"
    />
  );
};

export default SearchBar;
