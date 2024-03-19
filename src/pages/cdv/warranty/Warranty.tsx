// Components
import Header from './Header'
import Text from './Text'
// BTS
import { Container, Row, Col } from 'react-bootstrap'
// Style
const sectionStyle = {
    color: "white",
    background: "linear-gradient(27deg, rgba(16, 20, 70, 1) 0%, rgba(32, 37, 70, 1) 18%, rgba(30, 37, 73, 1) 38%, rgba(68, 77, 133, 1) 93%, rgba(106, 112, 147, 1) 100%)",
    padding: "20px 20px 50px 20px",
    borderRadius: "20px",
    border: "1px solid rgb(84 90 106)",
}
const h2colStyle = 'd-flex flex-column align-items-center justify-content-center text-center mb-4 mb-lg-0'
const hrStyle = 'd-block d-lg-none'
const detailColStyle = 'd-flex flex-column align-items-center justify-content-end '

const Warranty = () => (
    <section style={sectionStyle} className='mt-lg-5' id="warranty">
        <Container>
            <Row>

                <Col lg={6} className={h2colStyle}>
                    <Header />
                </Col>

                <hr className={hrStyle}/>

                <Col lg={6} className={detailColStyle}>
                    <Text />
                </Col>

            </Row>
        </Container>
    </section>
)
export default Warranty