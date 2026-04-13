import { useEffect, useState } from 'react';
import { getSensorData } from '../api/sensorService';

/**
 * Hook personalizado para manejar la suscripción de datos.
 * Aplica el principio de separación de responsabilidades (SOLID).
 */
export const useSensorData = () => {
  // Aquí se ALMACENAN los datos una vez llegan de la API
  const [data, setData] = useState(null);

  useEffect(() => {
    // Función asíncrona que coordina la petición
    const update = async () => {
      const result = await getSensorData();
      if (result) {
        // Aquí se actualiza el estado de la aplicación con los nuevos datos
        setData(result);
        console.log("Datos actualizados en memoria:", result);
      }
    };

    // 1. Ejecución inmediata al cargar el componente
    update();

    // 2. REPETICIÓN CADA 5 SEGUNDOS:
    // Esta es la "pulsación" que mantiene el panel AR actualizado.
    const intervalId = setInterval(update, 5000); 

    // Limpieza de memoria: Detiene el intervalo si el usuario sale de la pantalla
    return () => clearInterval(intervalId);
  }, []);

  // Retorna el objeto 'data' para que la UI pueda leerlo
  return { data };
};
