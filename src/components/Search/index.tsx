import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWeather } from "../../contexts/WeatherContext";
import { styles } from "./styles";

export default function Search() {
  const { weatherData, fetchData } = useWeather();
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = () => {
    if (searchCity.trim()) {
      fetchData(searchCity.trim());
      setModalVisible(false);
      setSearchCity("");
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.searchConteiner}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.localization}>
          {weatherData?.location.name}, {weatherData?.location.country}
        </Text>
        <Ionicons name="search-outline" size={22} color="#f3f3f3" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Buscar Cidade</Text>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Digite o nome da cidade"
                  value={searchCity}
                  onChangeText={setSearchCity}
                  autoFocus={true}
                />
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity
                    style={styles.modalButtonCancel}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonCancelText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButtonSearch}
                    onPress={handleSearch}
                  >
                    <Text style={styles.modalButtonSearchText}>Buscar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
