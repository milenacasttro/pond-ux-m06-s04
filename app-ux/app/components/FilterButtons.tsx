import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image"; // Usando expo-image para melhor gerenciamento de assets

const FilterButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sortButton}>
        <Text style={styles.buttonText}>Ordenar</Text>
        <Image
          source={require("../../assets/seta_icon.svg")}
          style={styles.sortIcon}
          contentFit="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Image
          source={require("../../assets/filtro_icon.svg")}
          style={styles.filterIcon}
          contentFit="contain"
        />
        <Text style={styles.buttonText}>Filtros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 14,
    width: "100%",
    justifyContent: "flex-end",
    gap: 10,
  },
  sortButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "space-between",
    width: 90,
  },
  filterButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "space-between",
    width: 80,
  },
  buttonText: {
    color: "#1E1E1E",
    fontSize: 12,
    fontWeight: "500",
  },
  sortIcon: {
    width: 13,
    height: 13,
  },
  filterIcon: {
    width: 14,
    height: 15,
    marginRight: 5,
  }
});

export default FilterButtons;