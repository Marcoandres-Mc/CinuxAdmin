import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts';

function IngresoUsuarios() {
  return (
    <div className="flex flex-col items-center p-7">
      <h2 className="text-2xl font-semibold ">Numero de Usuarios Registrados</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Gauge
          value={15}
          startAngle={-110}
          endAngle={110}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
              transform: 'translate(0px, 0px)',
            },
          }}
          text={({ value, valueMax }) => `${value} / ${valueMax}`}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default IngresoUsuarios;
