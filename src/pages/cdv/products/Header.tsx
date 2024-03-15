// BTS
import { Row, Col } from "react-bootstrap";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from "../../../components/variants";
// Styles
const h2style = "z-2 w-100 d-block position-relative";

const Header = () => (
    <Row>
        <Col className="h2col position-relative">
            <div className="blueBackg"></div>
            <motion.h2
                variants={fadeIn("left")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={h2style}
            >
                Recursos adicionales
            </motion.h2>
        </Col>
    </Row>
)

export default Header