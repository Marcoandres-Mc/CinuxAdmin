import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function PeliculasMasVistas() {

return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100 p-20">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Top 3 Películas Más Vistas</h1>
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'Robot Salvaje' },
                        { id: 1, value: 15, label: 'Shrek 2' },
                        { id: 2, value: 20, label: 'Coco' },
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

export default PeliculasMasVistas;