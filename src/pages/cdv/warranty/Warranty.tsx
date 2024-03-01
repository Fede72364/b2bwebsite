// Components
import CtaBtn from '../../../components/ctaBtn/CtaBtn'
import Header from './Header'
import Text from './Text'
// BTS
import { Container, Row, Col } from 'react-bootstrap'
// Style
const sectionStyle = {
    color: "white",
    // background: "linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84))",
    background: "linear-gradient(27deg, rgba(16, 20, 70, 1) 0%, rgba(32, 37, 70, 1) 18%, rgba(30, 37, 73, 1) 38%, rgba(68, 77, 133, 1) 93%, rgba(106, 112, 147, 1) 100%)",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgb(84 90 106)",
}
const h2colStyle = 'd-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0'
const hrStyle = 'd-block d-lg-none'
const detailColStyle = 'd-flex flex-column align-items-center justify-content-end '
const btnColStyle = 'd-flex justify-content-center mt-4'

const Warranty = () => (
    <section style={sectionStyle} id="warranty">
        <Container>
            <Row>

                <Col lg={6} className={h2colStyle}>
                    <Header />
                </Col>

                <hr className={hrStyle}/>


                <Col lg={6} className={detailColStyle}>
                    <Text />
                </Col>
                
                <Col className={btnColStyle}>
                    <button onClick={()=>{}}>
                        Hablemos!
                    </button>
                </Col>

            </Row>
        </Container>
    </section>
)
export default Warranty