// Mui components
import ModalMui from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Assets
import softLogo from '/assets/soft_logo2.png'
import CtaBtn from '../ctaBtn/CtaBtn';
// Magic words
const ariaLabel = "Modal emergente con oportunidad para comprar el servicio";
const ariaDescr = "Texto y Botón con redirección a whatsapp para comprar el servicio";
// Styles
const imgStyle = { height: "70px", width: "70px" }
const titleStyle = 'd-flex flex-column align-items-center justify-content-center gap-3';
const btnContainerSt = 'mt-4 mb-2 d-flex justify-content-center'
const muiBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  textAlign: "center",
  border: '2px solid #000',
  boxShadow: 24,
};


const Modal = ({ open, handleClose }: { open: boolean, handleClose: Function }) => (
  <ModalMui
    open={open}
    onClose={(_evt, reason) => handleClose(reason)}
    aria-labelledby={ariaLabel}
    aria-describedby={ariaDescr}
  >
    <Box sx={muiBoxStyle}>

      <img src={softLogo} style={imgStyle} className='my-2' alt="Warning logo" />

      <Typography id="modal-title" variant="h4" className={titleStyle}>
        Últimos Cupos para el Asesoramiento Gratuito
      </Typography>

      <Typography id="modal-description" variant="h6" sx={{ mt: 2 }} >
        Si no reservas tu lugar ahora mismo, podrías quedar en lista de espera.
      </Typography>

      <div className={btnContainerSt}>
        <CtaBtn text='Reservar cupo' handleClick={() => { }} />
      </div>

    </Box>
  </ModalMui>
)
export default Modal