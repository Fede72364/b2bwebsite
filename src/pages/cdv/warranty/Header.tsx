// Img
import shield from '/assets/shield.png'
// Style
const shieldStyle = 'w-50 object-fit-contain'

const Header = () => (
    <>
        <img src={shield} className={shieldStyle} alt="Imagen decorativa (un escudo)" />
        <h2 className='mb-2'>Garantía Hotmart 100%</h2>
        <span>
            Si nuestro programa no cumple con tus expectativas, podrás solicitar un reembolso total de tu dinero.
        </span>
    </>
)

export default Header