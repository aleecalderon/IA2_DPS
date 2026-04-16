import { useSensorData } from '@/src/hooks/useSensorData';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { data } = useSensorData();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PANEL AR FLOTANTE</Text>

      {data ? (
        <View style={styles.panel}>
          
          {/* 🔥 TÍTULO */}
          <Text style={styles.panelTitle}>🌐 Sensor Ambiental</Text>

          {/* 🔥 UBICACIÓN */}
          <Text style={styles.location}>📍 Ubicación: San Salvador</Text>

          {/* TEMPERATURA */}
          <Text style={styles.dataLabel}>Temperatura</Text>
          <Text style={styles.dataValue}>{data.temperature}°C</Text>

          {/* HUMEDAD */}
          <Text style={styles.dataLabel}>Humedad</Text>
          <Text style={styles.dataValue}>{data.humidity}%</Text>

          {/* DATOS EXTRA */}
          <View style={styles.extraContainer}>
            <Text style={styles.extraText}>🌡 Presión: {data.pressure} hPa</Text>
            <Text style={styles.extraText}>🔋 Batería: {data.battery}%</Text>

            <Text
              style={[
                styles.statusText,
                { color: data.status === 'Online' ? '#00ff88' : '#ff4444' },
              ]}
            >
              ⚡ Estado: {data.status}
            </Text>
          </View>

          {/* 🔥 BOTONES (TU PARTE) */}
          <View style={styles.buttonContainer}>
            <Button title="Actualizar" onPress={() => location.reload()} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Ir a AR" onPress={() => router.push('/explore')} />
          </View>

          {/* FOOTER */}
          <Text style={styles.footer}>
            Última sincronización: {data.lastUpdate}
          </Text>
        </View>
      ) : (
        <Text style={styles.loading}>Sincronizando con sensor IoT...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#050505' 
  },

  title: { 
    color: '#00fbff', 
    letterSpacing: 3, 
    fontSize: 14, 
    marginBottom: 20 
  },

  panel: { 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    padding: 25, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: '#00fbff',
    width: '85%'
  },

  panelTitle: {
    color: '#00fbff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },

  location: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15
  },

  dataLabel: { 
    color: '#aaa', 
    fontSize: 12 
  },

  dataValue: { 
    color: '#fff', 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },

  extraContainer: { 
    marginTop: 10, 
    borderTopWidth: 0.5, 
    borderTopColor: '#333', 
    paddingTop: 10 
  },

  extraText: { 
    color: '#eee', 
    fontSize: 14, 
    marginVertical: 2 
  },

  statusText: { 
    fontWeight: 'bold', 
    marginTop: 5 
  },

  buttonContainer: {
    marginTop: 10
  },

  footer: { 
    color: '#555', 
    fontSize: 10, 
    marginTop: 15, 
    textAlign: 'right' 
  },

  loading: { 
    color: '#00fbff' 
  }
});