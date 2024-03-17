// BTS
import { Row, Col } from "react-bootstrap";
import CtaBtn from "../../../components/ctaBtn/CtaBtn";
// Style
const rowStyle = "productRow justify-content-center position-relative";
const imgColStyle = "d-flex justify-content-center imgCol z-2";
const imgStyle = "mw-100 object-fit-contain";
const txtColStyle = "d-flex flex-column justify-content-center txtCol z-2";
const productNameStyle = "text-center text-lg-start fw-bold productName my-2 my-lg-0";
const bckgTxtStyle= "d-none d-lg-block backgroundText";

interface Props {
    title: string,
    img: string,
    description: () => JSX.Element,
}

const Card = ({title, img, description}: Props) => {
  return (
    <Row className={rowStyle}>

    <Col xs={12} className={bckgTxtStyle}>
        Rendimientos
    </Col>

    <Col xs={12} lg={4} className={imgColStyle}>
        <img
            src={img}
            className={imgStyle}
            alt={`Imagen del Campamento de ventas`}
        />
    </Col>

    <Col xs={12} lg={6} className={txtColStyle}>
        <span className={productNameStyle} style={{textWrap: "pretty"}}>
          {title}
        </span>

        <div className="mb-3">
            {description()}
        </div>

        <CtaBtn text="Mas información" handleClick={()=>{}} />
    </Col>
    <Col className="hrCol" xs={12}>
        <hr />
    </Col>
</Row>
  )
}
export default Card











