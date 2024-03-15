// BTS
import { Col } from "react-bootstrap";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from "../../../components/variants";
// Style
const h2style = "w-100 z-2 d-block position-relative";
const colStyle = "position-relative h2col"

const Header = () => (
    <Col className={colStyle}>
        <div className="blueBackg"></div>
        <motion.h2
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={h2style}
        >
            Nuestro diferencial
        </motion.h2>
    </Col>
)

export default Header