import { Card, Typography } from "@material-tailwind/react";

import BtnDeleteA from "./Btn/Admin/BtnDeleteA";
import BtnDeleteU from "./Btn/User/BtnDeleteU";
import BtnDeleteP from "./Btn/Peliculas/BtnDeleteP";

import {Button} from "@material-tailwind/react";
import BtnUser from "./Btn/User/BtnUser";
import BtnAdmin from "./Btn/Admin/BtnAdmin";
import BtnProduct from "./Btn/Peliculas/BtnPeliculas";


 
export function Tabla({propiedadesBd, bd, title,propiedades}) {

  return (
    <>
      <Card className="h-full w-50 m-3">
        <table className="w-full min-w-max table-auto text-left">
          
          <thead>
            <tr>
              {
                Array.isArray(propiedadesBd) && propiedadesBd.map((propiedad, index) => (
                  <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal leading-none text-center"
                    >
                      {propiedad}
                    </Typography>
                  </th>
                ))
              }
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3  text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-center"
                  >
                    Editar
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-center"
                  >
                    Eliminar
                  </Typography>
                </th>

            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(bd) && bd.map((item, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  {
                    propiedadesBd.map((propiedad, propIndex) => (
                      <td key={propIndex} className="p-4 text-center">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item[propiedad]}
                        </Typography>
                      </td>
                    ))
                  }
                  <td className="p-4 text-center"> 
                    {title === "Admins" ? <BtnAdmin n={index} type="edit" bd={bd} titulo={title} /> : null}
                    {title === "Usuarios" ? <BtnUser type="edit" bd={bd} propiedadesBd={propiedadesBd} titulo={title} /> : null}
                    {title === "Productos" ? <BtnProduct type="edit" bd={bd} propiedadesBd={propiedadesBd} titulo={title} /> : null}
                  </td>

                  <td className="p-4 text-center">
                    <Button className="font-bold">
                      {title === "Admins" ? <BtnDeleteA type="delete" titulo={title} id={item._id} /> : null}
                      {title === "Usuarios" ? <BtnDeleteU type="delete" titulo={title} id={item._id} /> : null}
                      {title === "Productos" ? <BtnDeleteP type="delete" titulo={title} id={item._id} /> : null}
                      
                    </Button>
                  </td>
                </tr>
              ))
              
            }
          </tbody>
        </table>
      </Card>
    </>
  );
}




export default Tabla;