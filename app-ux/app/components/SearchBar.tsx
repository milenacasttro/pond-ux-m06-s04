import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";

interface SearchBarProps {
  onSearch?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require("../../assets/pesquisa_icon.svg")}
          style={styles.searchIcon}
          contentFit="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={handleChangeText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity 
            style={styles.clearButton}
            onPress={() => handleChangeText("")}
          >
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchBar: {
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 40,
    marginTop: 30
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 0,
    margin: 0,
  },
  clearButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#CCC",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: "#FFF",
    lineHeight: 20,
    textAlign: 'center',
  }
});

export default SearchBar;