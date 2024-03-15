// Types
import { ReactNode } from 'react';
// Icons
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export interface Card_T {
    icon: ReactNode,
    hightlight: string,
    description: string,
}

export const cardList: Card_T[] = [
    {
        icon: <FaMoneyBillTrendUp />,
        hightlight: "Multiplica tus ventas ",
        description: "sin la necesidad de invertir más dinero en publicidad, tampoco ofrecer rebajas o un millón de cuotas.",
    },
    {
        icon: <FaCheckCircle />,
        hightlight: "Fideliza un sistema, ",
        description: "que se ocupe de hacerlo por ti, aumentando la facturación de tu negocio sin involucrar tu valioso tiempo.",
    },
    {
        icon: <FaShieldAlt />,
        hightlight: "Implementa un proceso anticrisis ",
        description: "traído desde USA, validado en LATAM, y puesto a prueba por los mejores expertos  con resultados asombrosos.",
    },
]
