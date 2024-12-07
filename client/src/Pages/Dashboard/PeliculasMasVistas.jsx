import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function PeliculasMasVistas() {
    return (
        <div className="flex justify-center items-center h-screen flex-col bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Top 3 Películas Más Vistas</h1>

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
                margin={40}
                width={800}
                height={400}
                sx={{
                    '& .MuiPieChart-sector': {
                        transition: 'all 0.3s ease-in-out',
                    },
                    '& .MuiPieChart-sector:hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            />
        </div>
    );
}

export default PeliculasMasVistas;
