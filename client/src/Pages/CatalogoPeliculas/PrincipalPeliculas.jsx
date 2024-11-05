
import Tabla from "../../Components/Tabla";



import { useEffect, useState } from "react";
import {Typography} from "@material-tailwind/react";
import { getPeliculas } from "../../api/catalogoPeliculas";
import BtnPeliculas from "../../Components/Btn/Peliculas/BtnPeliculas";
import { Spinner } from "@material-tailwind/react";



const Ajustes = () => {
  const propiedadesTb = ['nombre', 'productora','categoria', 'descripcion','url'];
  const propiedades = ['nombre', 'productora','categoria'];

  const [pelicula, setPelicula] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPeliculas();
        setPelicula(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        console.log("Error en la carga de datos");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="m-10">

      <Typography variant="h2" className="text-center">
        Peliculas
      </Typography>

      <div>
        {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
            <Tabla propiedadesBd={propiedades} bd={pelicula} title={"Peliculas"}/>
            <div className="my-5">
              <BtnPeliculas propiedadesBd={propiedadesTb} type="new" titulo="pelicula" genero="f" />
            </div>
          </>
        )}
        
      </div>
    </div>
  )

}

export default Ajustes;