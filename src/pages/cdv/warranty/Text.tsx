// Components
import CtaBtn from "../../../components/ctaBtn/CtaBtn"
// Styles
const paragraphStyle = 'd-block mb-4'

const Text = () => (
    <>
        <h2 className="mb-4 text-center">Es apto para mi empresa?</h2>

        <span className={paragraphStyle}>
            Solicita una asesoría gratuita con uno de nuestros instructores estrella, para que podamos evaluar el funcionamiento de tu metodología de ventas actual y cómo optimizarlo.
        </span>
        <span className={paragraphStyle}>
            Nos aseguraremos de que nuestra metodología sea compatible con tu empresa y si podemos ayudarte a cumplir tu objetivo dentro los próximos 30 días, ¡entonces estás dentro! 
        </span>

        
        <CtaBtn text="Consulta con un experto" />
        
    </>
)

export default Text