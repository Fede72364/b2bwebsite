// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import CallToAction from './CallToAction';
import CardMapper from './CardMapper';
import Text from './Text';
// Styling
const glassmorphism = {
  background: 'rgba(74, 144, 226, 0)',
  backdropFilter: 'blur(1px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};
const rowStyle = 'd-flex justify-content-center gap-lg-4';
const txtStyle = "d-flex flex-column justify-content-center"
const ctaStyle = 'd-flex align-items-center justify-content-center mt-4'

const Detail = () => (
  <section id="detail">
    <div style={glassmorphism}>
      <Container >
        <Row className={rowStyle}>

          <Col xs={11} xxl={9} className={txtStyle}>
            <Text />
          </Col>

          <Col xs={11} xxl={9}>
            <CardMapper />
          </Col>

          <Col xs={11} className={ctaStyle}>
            <CallToAction />
          </Col>

        </Row>
      </Container>
    </div>
  </section>
)

export default Detail