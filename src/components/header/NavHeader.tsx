// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../Logo';
import background from '/backgrounds/blue_bckg.png';
import animatedTriangles from '/backgrounds/animated_triangles.svg';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../pages/variants';
// Style
const rowStyle='d-flex flex-column align-items-center'

const NavHeader = () => {
  return (
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

                <Col xs={5} md={3} className='d-flex justify-content-center align-items-center'>
                    <div className='w-75 d-flex justify-content-center align-items-center' >
                        <Logo color="white"/>
                    </div>
                </Col>

                <Col className='d-flex justify-content-center flex-column text-center'>
                    <h1>La clave para tener éxito en tus estrategias de ventas B2B y B2C</h1>
                </Col>

            </Row>
        </Container>

    </motion.header>
  )
}
export default NavHeader