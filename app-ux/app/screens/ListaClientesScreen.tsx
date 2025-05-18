import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text } from "react-native";
import ClienteItem from "../components/ClienteItem";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import { useThemeColor } from "../hooks/useThemeColor";

// Defina uma interface para os dados do cliente
interface ClienteData {
  id: string;
  initials: string;
  name: string;
  role: string;
  updateTime: string;
  imageUri: string;
}

const ListaClientesScreen: React.FC = () => {
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  
  // Estado para armazenar o texto de pesquisa
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data com IDs únicos
  const allClients: ClienteData[] = [
    {
      id: "1",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    },
    {
      id: "2",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    },
    {
      id: "3",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    },
    {
      id: "4",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    },
    {
      id: "5",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    },
    {
      id: "6",
      initials: "GN",
      name: "Gabriel Nascimento",
      role: "Analista",
      updateTime: "Atualizado há 1d",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac53cb238b231281854d2fc4bdd16352320e276?placeholderIfAbsent=true&apiKey=46bc948b7cc54a4ca993c1b27042eda8"
    }
  ];

  // Filtrar clientes com base na pesquisa
  const filteredClients = searchQuery 
    ? allClients.filter(client => 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allClients;

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <View style={styles.content}>
        <View style={[styles.searchSection, { backgroundColor: primaryColor }]}>
          <SearchBar onSearch={handleSearch} />
          <FilterButtons />
        </View>
        <ScrollView 
          style={styles.clientList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <ClienteItem
                key={client.id}
                initials={client.initials}
                name={client.name}
                role={client.role}
                updateTime={client.updateTime}
                imageUri={client.imageUri}
              />
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>Nenhum cliente encontrado</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  searchSection: {
    minHeight: 110,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  clientList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
  }
});

export default ListaClientesScreen;