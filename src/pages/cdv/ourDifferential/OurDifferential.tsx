// BTS
import { Container, Row } from "react-bootstrap";
// Components
import Layout from "./BulletPointMapper";
import Header from "./Header";

const RelevantData = () => (
    <section id="ourDifferential">
        <Container>
            <Row className="mb-5">
                <Header />
            </Row>
            <Row className="mb-4">
                <Layout />
            </Row>
        </Container>
    </section>
)

export default RelevantData