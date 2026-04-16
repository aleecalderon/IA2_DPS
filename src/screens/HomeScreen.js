import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getSensorData } from "../api/sensorService";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({
    ubicacion: "Cargando...",
    estado: "Cargando..."
  });

  const fetchData = async () => {
    try {
      const res = await getSensorData();

      setData({
        ubicacion: res.location || "San Salvador",
        estado: res.status || "Activo"
      });

    } catch (error) {
      console.log("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Monitoreo Ambiental</Text>

      <Text style={styles.label}>
        📍 Ubicación: {data.ubicacion}
      </Text>

      <Text style={styles.label}>
        ⚡ Estado: {data.estado}
      </Text>

      <View style={styles.button}>
        <Button title="Actualizar datos" onPress={fetchData} />
      </View>

      <View style={styles.button}>
        <Button 
          title="Ver en AR" 
          onPress={() => navigation.navigate("AR")}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold"
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    marginTop: 15,
    width: "60%"
  }
});