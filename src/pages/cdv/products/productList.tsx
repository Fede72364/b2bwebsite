
const severalResourcesTitle = "Te equipamos con un amplio abanico de recursos:"
const severalResourcesImg = "/products/notebook.png";
const severalResourcesText = () => (
    <div className="my-3">
        <ul>
            <li>Instructores en línea.</li>
            <li>Automatizaciones.</li>
            <li>Guía para resolución de todo tipo de objeciones.</li>
            <li>Paquetes de Guiones.</li>
            <li>Clases ultra compactas y concretas.</li>
            <li>Practica entre compañeros para no dañar prospectos reales.</li>
        </ul>
        <span className="ms-2">Y más...</span>
    </div>
)

const severalResources = {
    title: severalResourcesTitle,
    img: severalResourcesImg,
    description: severalResourcesText,
}

/********************* */
/********************* */



const hiringModelTitle = "Apertura a nuevos modelos de contratación"
const hiringModelImg = "/products/people.svg"; // free commercial license: https://www.reshot.com/free-vector-illustrations/item/business-people-with-charts-Q4APUFRTWE/
const HiringModelText = () => (
    <>
        <span className="my-3 d-block">
            <i>Nuestros clientes aprendieron un sistema de compensación que incentiva la rotación como un medio de fomentar la sana competencia y la meritocracia dentro de cada equipo de ventas.</i>
        </span>

        <span className="mb-3 d-block">
            <i>Por esto, ya no tienen la necesidad de contratar a tiempo completo, pagar sueldos fijos, indemnizaciones o vacaciones. Depender de unos pocos vendedores por falta de tiempo para capacitar nuevo personal, dejó de ser una opción para ellos.</i>
        </span>
    </>
)

const hiringModels = {
    title: hiringModelTitle,
    img: hiringModelImg,
    description: HiringModelText,
}

/********************* */
/********************* */


const leadershipTitle = "Implementa la Cultura del Alto rendimiento"
const leadershipImg = "/products/cesar.png";
const LeadershipText = () => (
    <>
        <span className="my-3 d-block">
            <i>Nuestros instructores son seleccionados en función de resultados reales en el mercado y 100% verificables (como requisito excluyente).</i>
        </span>
        <span className="mb-3 d-block">
            <i>Hemos construido el total de nuestra empresa entorno a la responsabilidad total, la máxima productividad y un altísimo rendimiento.</i>
        </span>
        <span className="mb-3 d-block">
            <i>Comprendimos que la venta es un juego de técnica, estrategia y mentalidad, razón por la que no dejamos nada librado al azar y abarcamos el desarrollo de un vendedor en su totalidad.</i>
        </span>
    </>
)

const leadership = {
    title: leadershipTitle,
    img: leadershipImg,
    description: LeadershipText,
}

/********************* */
/********************* */

const softwareTitle = "Presencia absoluta, mantente en el radar."
const softwareImg = "/products/dragonChat.png";
const SoftwareText = () => (
    <>
        <span className="my-3 d-block">
            <i>El dinero fuerte está en la masividad, por eso desarrollamos un software que respalda nuestro sistema de contacto masivo anti-bloqueos. Para que tus bases de datos sean exprimidas al 100% y no se escape ningún prospecto nunca más.</i>
        </span>
        <span className="my-3 d-block">
            <i>El 80% de las ventas se cierran en el seguimiento y el 90% de los vendedores no hacen esto.</i>
        </span>
        <span className="mb-3 d-block">
            <i>Optimiza el seguimiento, aumenta el ciclo de vida de tus clientes y manten un contacto permanente con toda tu base de datos generando una relación a largo plazo (en el tiempo que te lleva escribir un solo mensaje).</i>
        </span>
        <span className="mb-3 d-block" style={{ color: "#2F3C87" }}>
            <i>Si solicitas un presupuesto sin obligación de compra hoy, podrás probar esta poderosa herramienta de forma gratuita.</i>
        </span>

    </>
)

const software = {
    title: softwareTitle,
    img: softwareImg,
    description: SoftwareText,
}

/********************* */
/********************* */

const products = [severalResources, hiringModels, leadership, software]
export default products;
