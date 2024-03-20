// Components
import CtaBtn from "../../ctaBtn/CtaBtn"
// BTS
import { Container, Row, Col } from "react-bootstrap"

// Styles
const sectionStyle = {
    background: "url('/backgrounds/ctaBckg.svg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "3rem",
    borderTop: "1px solid #e9ecef",
}

const CtaSection = () => (
    <section id="ctaSection" style={sectionStyle}>

        <Container>
            <Row className="d-flex flex-column">
                <Col className="text-center">
                    <span>Es hoy, y es ahora.</span>
                </Col>
                <Col className="d-flex justify-content-center">
                    <div className="w-50 d-flex justify-content-center">
                        <CtaBtn text="Click aquí" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )

export default CtaSection