// Components
import ModalTrigger from "../../../components/modal/ModalTrigger"
// BTS Grid
import { Container, Row, Col } from "react-bootstrap"
// Icons
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
// Style
const footerStyle = "bg-dark text-light text-center"
const colStyle = "d-flex flex-column text-lg-start mb-3 mb-lg-0"
const iconsCtStyle = "d-flex justify-content-center justify-content-lg-end align-items-lg-center gap-3"

const Footer = () => (
  <footer className={footerStyle}>
    <Container>
      <Row className='py-4'>

        <Col xs={12} lg={6} className={colStyle}>
          <span>
            Todos los derechos reservados
          </span>
          <ModalTrigger />

        </Col>

        <Col xs={12} lg={6} className={iconsCtStyle}>
          <FaFacebook />
          <FaTwitter />
          <FaTiktok />
          <FaInstagram />
        </Col>
      </Row>
    </Container>
  </footer>
)


export default Footer