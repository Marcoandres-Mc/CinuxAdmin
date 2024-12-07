import React from 'react';
import { LineChart } from '@mui/x-charts';

const VentaDeEntradas = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl font-semibold mb-4">Ventas de Entradas</h2>
      <LineChart
        xAxis={[
          {
            scaleType: 'band',
            data: ['01 Ene', '02 Ene', '03 Ene', '05 Ene', '08 Ene', '10 Ene'],
            label: 'Fecha',
          },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            label: 'Entradas vendidas',
            color: 'blue',
          },
        ]}
        yAxis={[
          {
            label: 'Cantidad de Entradas',
          },
        ]}
        width={800}
        height={500}
      />
    </div>
  );
};

export default VentaDeEntradas;
