import { useSensorData } from '@/src/hooks/useSensorData';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Consumimos el hook. 'data' contiene todo lo generado en sensorService.js
  const { data } = useSensorData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PANEL AR FLOTANTE</Text>

      {data ? (
        <View style={styles.panel}>
          {/* VISUALIZACIÓN DE DATOS: 
              Aquí es donde el usuario 've' la información generada en la API */}
          
          <Text style={styles.dataLabel}>Temperatura:</Text>
          <Text style={styles.dataValue}>{data.temperature}°C</Text>

          <Text style={styles.dataLabel}>Humedad:</Text>
          <Text style={styles.dataValue}>{data.humidity}%</Text>

          {/* DATOS ADICIONALES AÑADIDOS */}
          <View style={styles.extraContainer}>
            <Text style={styles.extraText}>Presión: {data.pressure} hPa</Text>
            <Text style={styles.extraText}>Batería: {data.battery}%</Text>
            <Text style={styles.statusText}>Estado: {data.status}</Text>
          </View>

          <Text style={styles.footer}>Última sincronización: {data.lastUpdate}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Sincronizando con sensor IoT...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#050505' },
  title: { color: '#00fbff', letterSpacing: 3, fontSize: 14, marginBottom: 20 },
  panel: { 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    padding: 30, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: '#00fbff',
    width: '85%'
  },
  dataLabel: { color: '#aaa', fontSize: 12, textTransform: 'uppercase' },
  dataValue: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginBottom: 15 },
  extraContainer: { marginTop: 10, borderTopWidth: 0.5, borderTopColor: '#333', paddingTop: 15 },
  extraText: { color: '#eee', fontSize: 14, marginVertical: 2 },
  statusText: { color: '#00ff88', fontWeight: 'bold', marginTop: 5 },
  footer: { color: '#555', fontSize: 10, marginTop: 20, textAlign: 'right' },
  loading: { color: '#00fbff' }
});
