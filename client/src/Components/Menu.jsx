import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  TruckIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";




export function Menu({isDrawerOpen}) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  
  const categorias = [
    {

        id: 1,
        nombre: 'Cuentas',
        icon: PresentationChartBarIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Admins',
                url: 'home/cuentas/admins'
            },
            {
                id: 2,
                nombre: 'Usuarios',
                url: 'home/cuentas/usuarios'
            }
        ]   
    },
    {
        id: 2,
        nombre: 'Peliculas',
        icon: ShoppingBagIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Principal',
                url: 'home/peliculas'

            },
        ]   
    },

    {
        id: 3,
        nombre: 'Dulceria',
        icon: CogIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Principal',
                url: 'home/dulceria'
            }
        ]
    },
    {
        id: 4,
        nombre: 'Sedes',
        icon: CogIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Principal',
                url: 'home/sedes'
            }
        ]
    }
];
 
  return (
    <div className="h-0 sm:h-[100%]" style={{ backgroundColor: '#ff7171'}}>
        <Drawer className=" mt-[75px] md:m-0 sm:p-0 h-full " style={{ backgroundColor: '#ff7171'}} open={isDrawerOpen} onClose={() => {}} overlay={false} >
            <Card className="w[250px] shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 flex items-center gap-4 p-6" style={{ backgroundColor: '#ff7171'}}>
            <Typography color="white" className="font-bold text-2xl " >Cinux </Typography>

            </div>
            
            <List className="w-full">
                {categorias.map((categoria) => (
                    <Accordion
                    key={categoria.id}
                    open={open === categoria.id}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === categoria.id ? "rotate-180" : ""}`}
                        />
                    }>
                        <ListItem className="p-0" selected={open === categoria.id}>
                            <AccordionHeader onClick={() => handleOpen(categoria.id)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <categoria.icon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                {categoria.nombre}
                            </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                {categoria.subcategorias.map((subcategoria) => (
                                        <NavLink key={subcategoria.id} to={`/${subcategoria.url}`} className=''>
                                            <ListItem>
                                                <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                {subcategoria.nombre}   
                                            </ListItem>
                                        </NavLink>
                                    ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))
            }

                <hr className="my-2 border-blue-gray-50" />
                </List>
            </Card>
        </Drawer>
      


    </div>
  );
}

export default Menu;




















