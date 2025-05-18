import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { useThemeColor } from "../hooks/useThemeColor";

interface ClienteItemProps {
  initials: string;
  name: string;
  role: string;
  updateTime: string;
  imageUri: string;
  style?: StyleProp<ViewStyle>;
}

const ClienteItem: React.FC<ClienteItemProps> = ({
  initials,
  name,
  role,
  updateTime,
  imageUri,
  style = {},
}) => {
  const primaryColor = useThemeColor("primary");

  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      activeOpacity={0.8}
    >
      <View style={[styles.card, { backgroundColor: primaryColor }]}>
        <View style={styles.contentContainer}>
          <View style={styles.profileSection}>
            <View style={styles.initialsCircle}>
              <Text style={[styles.initialsText, { color: primaryColor }]}>{initials}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.roleText}>{role}</Text>
              <Text style={styles.updateText}>{updateTime}</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/check_icon.svg")}
            style={styles.actionIcon}
            contentFit="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  card: {
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  initialsCircle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  initialsText: {
    fontSize: 20,
    fontWeight: "600",
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  roleText: {
    color: "#D9D9D9",
    fontSize: 12,
    marginTop: 2,
  },
  updateText: {
    color: "#D9D9D9",
    fontSize: 9,
    marginTop: 8,
  },
  actionIcon: {
    width: 30,
    height: 30,
  }
});

export default ClienteItem;