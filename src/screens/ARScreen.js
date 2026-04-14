import { ViroARScene, ViroARSceneNavigator } from '@viro-community/react-viro';
import { useEffect, useState } from 'react';
import ARPanel from '../components/ARPanel';
// Importamos la función que Daniel debe crear para traer los datos [cite: 78]
import { getSensorData } from '../api/sensorService';

const ARSceneContent = () => {
  // Estado inicial para almacenar los datos que Geisel gestionará
  const [sensorData, setSensorData] = useState({
    temp: 0,
    humedad: 0,
    ubicacion: 'Conectando...',
    estado: 'Iniciando'
  });

  // Función para obtener y procesar datos (Responsabilidad de Geisel) [cite: 74]
  const fetchData = async () => {
    try {
      const data = await getSensorData(); 
      setSensorData({
        temp: data.temperature,
        humedad: data.humidity,
        ubicacion: data.location,
        estado: data.status
      });
      console.log("Datos de IoT actualizados correctamente");
    } catch (error) {
      console.error("Fallo en la conexión IoT:", error);
    }
  };

  // Requisito: Actualización cada 5 segundos (Investigación Aplicada 2) [cite: 79]
  useEffect(() => {
    fetchData(); // Carga inicial de datos
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // 5000ms = 5 segundos 

    return () => clearInterval(interval); // Limpia el intervalo al salir [cite: 59]
  }, []);

  return (
    <ViroARScene>
      {/* Geisel pasa los datos actualizados al panel de AR [cite: 47, 81] */}
      <ARPanel 
        temp={sensorData.temp} 
        humedad={sensorData.humedad} 
        ubicacion={sensorData.ubicacion}
        estado={sensorData.estado}
      />
    </ViroARScene>
  );
};

// Componente principal que navega a la escena de AR
export default function ARScreen() {
  return (
    <ViroARSceneNavigator
      initialScene={{ scene: ARSceneContent }}
      style={{ flex: 1 }}
    />
  );
}