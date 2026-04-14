import { ViroFlexView, ViroNode, ViroText } from '@viro-community/react-viro';

// Recibe las propiedades (props) que Geisel conecta desde la API
const ARPanel = ({ temp, humedad, ubicacion, estado }) => {
  return (
    <ViroNode position={[0, 0, -1.5]}> {/* Posición a 1.5 metros frente al técnico */}
      <ViroFlexView 
        style={{ 
          flexDirection: 'column', 
          padding: .1, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente
          borderRadius: 0.05 
        }} 
        width={1.2} 
        height={0.9}
      >
        {/* Título del Sensor: Requerimiento de ubicación [cite: 66, 84] */}
        <ViroText 
          text={`Ubicación: ${ubicacion}`} 
          scale={[.2, .2, .2]} 
          style={{ color: '#00fbff', fontWeight: 'bold' }} 
        />

        {/* Datos de sensores: Requerimiento de temperatura y humedad [cite: 63, 76] */}
        <ViroText 
          text={`Temperatura: ${temp}°C`} 
          scale={[.18, .18, .18]} 
          style={{ color: 'white' }}
        />
        <ViroText 
          text={`Humedad: ${humedad}%`} 
          scale={[.18, .18, .18]} 
          style={{ color: 'white' }}
        />

        {/* Estado del sensor: Requerimiento de usabilidad [cite: 84, 89] */}
        <ViroText 
          text={`Estado: ${estado}`} 
          scale={[.12, .12, .12]} 
          style={{ color: estado === 'Activo' ? '#00ff00' : '#ff0000' }} 
        />
      </ViroFlexView>
    </ViroNode>
  );
};

export default ARPanel;