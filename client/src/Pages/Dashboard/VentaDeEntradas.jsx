import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const VentaDeEntradas = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100 p-20">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">PRODUCTOS MAS VENDIDOS</h1>
    <LineChart
      xAxis={[{ data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }]}  // Meses del año
      series={[
        {
          data: [20, 35, 40, 50, 30, 60],  // Cantidad de entradas vendidas en cada mes
          name: 'Entradas Vendidas',
        },
      ]}
      width={500}
      height={300}
    />
    </div>
  )
}

export default VentaDeEntradas;