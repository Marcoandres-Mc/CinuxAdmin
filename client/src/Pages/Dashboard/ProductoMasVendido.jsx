import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const ProductoMasVendido = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Productos Más Vendidos</h1>

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
                margin={40}
                width={800}
                height={400}
                sx={{
                    '& .MuiPieChart-sector': {
                        transition: 'all 0.3s ease-in-out',
                    },
                    '& .MuiPieChart-sector:hover': {
                        transform: 'scale(1.1)',
                        opacity: 0.8,
                    },
                }}
            />
        </div>
    );
};

export default ProductoMasVendido;
