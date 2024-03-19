// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../../../components/Logo';
import background from '/backgrounds/blue_bckg_2.jpg';
import animatedTriangles from '/backgrounds/animated_triangles.svg';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/variants';
// Style
const rowStyle = 'd-flex flex-column align-items-center'
const colStyle = 'd-flex justify-content-center'
const logoCtStyle = 'w-75 d-flex justify-content-center align-items-center'

const NavHeader = () => (
    <motion.header
        variants={fadeIn("up")}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        id="header"
    >
        <img id="background" src={background} alt="background" />
        <img id="animatedTriangles" src={animatedTriangles} alt="background animation triangles" />

        <Container>
            <Row className={rowStyle}>

                <Col xs={5} md={3} className={colStyle}>
                    <div className={logoCtStyle} >
                        <Logo color="white" />
                    </div>
                </Col>

                <Col className={colStyle}>
                    <h1 className='text-center mt-3'>
                        La clave para tener éxito en tus estrategias de ventas
                    </h1>
                </Col>

            </Row>
        </Container>
    </motion.header>
)
export default NavHeader