
import Tabla from "../../Components/Tabla";
import {Typography} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import BtnUser from "../../Components/Btn/User/BtnUser";
import { getSedes } from "../../api/sedes.js";


const Sedes = () => {
  const propiedadesTb = ['nombre', 'direccion', 'telefono', 'email', 'url'];
  const propiedades = ['nombre', 'direccion', 'telefono', 'email', 'url'];

  const [loading, setLoading] = useState(true);
  const [sedes, setSedes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getSedes();
        setSedes(data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="m-10">  
      <Typography variant="h2" className="text-center">
        Sedes
      </Typography>
      <div>
        {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
          <Tabla propiedadesBd={propiedadesTb} bd={sedes} title={"Sedes"}/>
          <div className="my-5">
            <BtnUser propiedadesBd={propiedades} type="new" titulo="sedes" genero="f"/>
          </div>
          </>
        )}
      </div>

    </div>
  );
}

export default Sedes;