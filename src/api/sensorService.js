/**
 * Servicio de simulación de API IoT.
 * En un entorno real, aquí se realizaría el 'fetch' a tu servidor en la nube.
 */
export const getSensorData = async () => {
  return new Promise((resolve) => {
    // Simulamos latencia de red de 800ms
    setTimeout(() => {
      // ORIGEN DE LOS DATOS:
      // Estos valores son los que eventualmente verás en los 'Text' de tu pantalla.
      const simulatedResponse = {
        // Datos principales solicitados
        temperature: (Math.random() * (30 - 18) + 18).toFixed(1), // Genera un valor entre 18.0 y 30.0
        humidity: (Math.random() * (80 - 30) + 30).toFixed(1),    // Genera un valor entre 30.0 y 80.0
        
        // Datos adicionales para enriquecer el panel AR
        pressure: (Math.random() * (1020 - 1000) + 1000).toFixed(0), // hPa
        battery: Math.floor(Math.random() * 100), // Nivel de energía del sensor (0-100%)
        sensorId: "SN-7845-TX",
        lastUpdate: new Date().toLocaleTimeString(),
        status: "Online"
      };

      resolve(simulatedResponse);
    }, 800);
  });
};
