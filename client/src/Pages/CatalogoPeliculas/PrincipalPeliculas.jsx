
import Tabla from "../../Components/Tabla";



import { useEffect, useState } from "react";
import {Typography} from "@material-tailwind/react";
import { getPeliculas } from "../../api/catalogoPeliculas";
import BtnPelicula from "../../Components/Btn/Peliculas/BtnPeliculas";
import { Spinner } from "@material-tailwind/react";



const Ajustes = () => {
  const propiedadesTb = ['nombre', 'categoria', 'marca', 'precio', 'stock'];
  const propiedades = ['nombre', 'marca', 'precio', 'stock', 'url', 'descripcion'];

  const categoria = ['laptops','celulares','gaming','componentes']
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
            <Tabla propiedadesBd={propiedadesTb} bd={pelicula} title={"Peliculas"}/>
            <div className="my-5">
              <BtnPelicula propiedadesBd={propiedades} type="new" titulo="producto" genero="f" />
            </div>
          </>
        )}
        
      </div>
    </div>
  )

}

export default Ajustes;