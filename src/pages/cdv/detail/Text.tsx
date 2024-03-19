const headerStyle = "text-center mb-4 mt-2 h2";
const complexNboringSt = {color: "#c1121f"};
const simplifiedSt = {color: "#2ba84a"};

const Text = () => (
    <>
        <h3 className={headerStyle} style={{textWrap: "balance"}}>
            ¿Tu Departamento de Ventas es inmune a todo tipo de <b>capacitaciones</b>?
        </h3>
        <p>El Campamento de Ventas es un programa completo, listo para implantar en cualquier empresa (ya sea que esté funcionando o en sus inicios), cuyo objetivo es hacer que un vendedor ordinario, pueda generar resultados extraordinarios.<br />
        El <span style={complexNboringSt}>complejo y aburrido</span> proceso de ventas, ha sido <span style={simplifiedSt}>simplificado</span> en <u>5 sencillos pasos</u> para que los pueda comprender hasta adolescente distraído (lo cual lo vuelve absolutamente replicable). Nuestro objetivo, es que en menos de 30 días "vendedores ordinarios y sin resultados" puedan convertirse en un verdadero ejército de extraordinarios cerradores de ventas. O cerradoras, ya que entre nuestras filas del éxito también hay mujeres referentes en todo tipo de industrias.</p>
    </> 
)

export default Text