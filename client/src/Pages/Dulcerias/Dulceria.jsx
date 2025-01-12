
import Tabla from "../../Components/Tabla";
import {Typography} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getDulces } from "../../api/dulceria";
import { Spinner } from "@material-tailwind/react";
import BtnDulceria from "../../Components/Btn/Dulceria/BtnDulceria";


const Dulceria = () => {
  const propiedadesTb = ['nombre', 'categoria', 'marca', 'precio', 'stock', 'descripcion', 'url'];
  const propiedades = ['nombre', 'categoria', 'marca', 'precio', 'stock'];

  const [loading, setLoading] = useState(true);
  const [dulces, setDulces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getDulces();
        setDulces(data);
      } catch (error) {
        console.error('Error fetching dulces:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center mb-5">
        Dulceria
      </Typography>
      {loading ? (
        <div className="flex justify-center">
          <Spinner color="blue" size="xxl" className="flex justify-center m-20 w-28 h-28" />
        </div>
      ) : (
        <>
          <Tabla propiedadesBd={propiedades} bd={dulces} title="Dulces" />
          <div className="my-5">
            <BtnDulceria propiedadesBd={propiedadesTb} type="new" titulo="dulces" />
          </div>
        </>
      )}
    </div>
  );
};

export default Dulceria;
