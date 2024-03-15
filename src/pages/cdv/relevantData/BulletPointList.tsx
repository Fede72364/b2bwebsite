import { ReactNode } from "react";
import crossmark from '/assets/cross.png'
import checkmark from '/assets/checkmark.png'

export type BulletPoint_T = {
    icon: ReactNode,
    title?: string,
    description: string,
}

export const PossitiveBulletPoints = [
    {
        icon: <img src={checkmark} className="mw-100" alt="checkmark icon" />,
        title: "Teoría simple: ",
        description: "En menos de 3 horas, el vendedor aprende la mentalidad adecuada para ser un cerrador exitoso y comprende el proceso de ventas de principio a fin, adquiriendo una estructura lista para aplicar en cualquier tipo de venta o negociación.",
    },
    {
        icon: <img src={checkmark} className="mw-100" alt="checkmark icon" />,
        title: "Práctica completa: ",
        description: "Nuestros instructores se ocupan de acompañar, supervisar, y calificar el proceso del vendedor desde su inicio hasta su desarrollo.  Además, siembran ambición y gatillos mentales en cada encuentro para asegurar una transformación integral.",
    },
]
export const NegativeBulletPoints = [
    {
        icon: <img src={crossmark} className="mw-100" alt="crossmark icon" />,
        description: 'No se necesitan libros de refuerzo, imprimir cientos de hojas, ni salir a buscar "ese dato que falta" para completar la rueda y hacerla girar.',
    },
    {
        icon: <img src={crossmark} className="mw-100" alt="crossmark icon" />,
        description: "No contiene información cruzada, inconclusa, o contradictoria. Nuestros instructores, han sido formados integralmente bajo nuestra filosofía de ventas desde sus inicios.",
    },
    
]
