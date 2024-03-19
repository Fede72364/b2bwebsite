// BTS
import Col from 'react-bootstrap/Col';
import { PossitiveBulletPoints, NegativeBulletPoints } from './BulletPointList';
// Animation
import { fadeIn } from '../../../components/variants';
import { motion } from 'framer-motion';
// Style
const colStyle = "d-flex flex-column gap-4 justify-content-center bulletCol";
const iconDimentions = {
    width: 25,
    height: 25,
    display: "inline-block"
}
const Layout = () => (
    <>
        <Col xs={12} lg={6} className={colStyle}>
            {PossitiveBulletPoints.map(bp => (
                <motion.div
                    key={bp.title}
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div style={iconDimentions}>
                        {bp.icon}
                    </div>
                    <span className='ms-1'>
                        <b>{bp.title}</b>
                    </span>
                    {bp.description}
                </motion.div>
            ))}
        </Col>

        <Col xs={12} lg={6} className={colStyle}>
            {NegativeBulletPoints.map((bp, i) => (
                <motion.div
                    key={i}
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div style={iconDimentions}>
                        {bp.icon}
                    </div>
                    <span className='ms-1'>{bp.description}</span>
                </motion.div>
            ))}
        </Col>

    </>
)

export default Layout