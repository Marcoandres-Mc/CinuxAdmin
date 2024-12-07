import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const ProductoMasVendido = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100 p-20">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">PRODUCTOS MAS VENDIDOS</h1>
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 8, label: 'Canchita Gigante Mix' },
                        { id: 1, value: 10, label: 'Coca Cola Personal' },
                        { id: 2, value: 3, label: 'Hot Dog Jumbo' },
                        { id: 3, value: 3, label: 'Snickers' },
                    ],
                },
            ]}
            margin={0}
            width={800}
            height={300}
        />
    </div>
  )
}

export default ProductoMasVendido;