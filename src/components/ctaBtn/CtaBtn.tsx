// Constants
const wppLink = "https://wa.me/542302673802?text=Me+interesa+el+Programa+CDV+para+perfeccionar+mi+sistema+de+ventas+y+escalar+mi+facturaci%C3%B3n.+Quiero+verificar+si+es+un+proceso+compatible+con+mi+negocio.+%C2%BFC%C3%B3mo+reservo+una+asesor%C3%ADa+gratuita%3F";

const CtaBtn = ({ text }: { text: string }) => {

  const handleClick = () => {
    window.open(wppLink, '_blank');
  }

  return (
    <div className="ctaBtnContainer">
      <button className="ctaBtn w-100" onClick={handleClick}>
        <span>{text}</span>
      </button>
    </div>
  )

}
export default CtaBtn
