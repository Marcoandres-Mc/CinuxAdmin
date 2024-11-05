
import { useState } from "react"
import { Routes,Route } from "react-router-dom"
import Cuentas from "./Pages/Cuentas/Cuentas"
import Admins from "./Pages/Cuentas/Admins"
import Usuarios from "./Pages/Cuentas/Usuarios"
import CatalogoPeliculas from "./Pages/CatalogoPeliculas/CatalogoPeliculas"
import Ajustes from "./Pages/CatalogoPeliculas/Ajustes"
import VentasProductos from "./Pages/CatalogoPeliculas/VentasProductos"
import ImportacionProductos from "./Pages/CatalogoPeliculas/ImportacionProductos"
import PaginaNoDisponible from "./Pages/PaginaNoDisponible"
import Provedores from "./Pages/Provedores"
import Nav from "./Components/Nav"
import Menu from "./Components/Menu"
import BotonMenu from "./Components/BotonMenu"




const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex flex-col sm:flex-row bg-gray-300 h-full">
        <Menu className="hidden sm:block" isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="flex flex-col w-[100%] md:ml-[300px]">
          <Nav> 
            <BotonMenu  isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </Nav>
          <div className='h-full '>
            <Routes className="sm:w-full">
                <Route path="*" element={<PaginaNoDisponible />} />
                <Route path="/" element={<Admins />} />
                <Route path="/cuentas/*" element={<Cuentas/>}>
                    <Route path="admins" element={<Admins />} />
                    <Route path="usuarios" element={<Usuarios />} />
                </Route>

                <Route path="/catalogoPeliculas/*" element={<CatalogoPeliculas />}>
                    <Route path="ajustes" element={<Ajustes />} />
                    <Route path="ventas" element={<VentasProductos />} />
                    <Route path="importacion" element={<ImportacionProductos />}/>

                </Route>
        
              <Route path="/provedores" element={<Provedores />} />
              
            </Routes>
          </div>
          </div>
      </div>
  )
}

export default Home