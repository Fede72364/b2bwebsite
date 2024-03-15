// Img
import shield from '/assets/shield.png'
// Style
const shieldStyle = 'w-50 object-fit-contain'

const Header = () => (
    <>
        <img src={shield} className={shieldStyle} alt="Decorative image" />
        <h2>Garantía Hotmart 100%</h2>
        <span className='text-center'>
            Si nuestro programa no cumple con tus expectativas, podrás solicitar un reembolso total de tu dinero.
        </span>
    </>
)

export default Header