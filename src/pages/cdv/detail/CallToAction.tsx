// BTS Grid
import { Col, Row } from "react-bootstrap"
// Components
import Chevron from "../../../components/chevron/Chevron";
import CtaBtn from "../../../components/ctaBtn/CtaBtn";
// Styles
const rowStyle = "align-items-center py-4 py-lg-0 mt-4 bg-light w-100 blueBorder"
const spanStyle = "d-block text-center"
const ctaStyle = "d-flex justify-content-center"

const CallToAction = () => (
    <Row className={rowStyle} id="detailCtaContainer">

        <Col xs={12} lg={5} >
            <span className={spanStyle}>
                ¿ Es compatible con mi empresa ?
            </span>
        </Col>

        <Col xs={12} lg={2} className="text-center">
            <Chevron />
        </Col>

        <Col xs={12} lg={5} className={ctaStyle}>
            <CtaBtn text="Consulta con un experto" />
        </Col>
    </Row>

)
export default CallToAction