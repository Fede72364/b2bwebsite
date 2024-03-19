// Mui components
import ModalMui from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Assets
import softLogo from '/assets/soft_logo2.png'
import CtaBtn from '../ctaBtn/CtaBtn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    textAlign: "center",
    border: '2px solid #000',
    boxShadow: 24,
  };


const Modal = ({open, handleClose}:{open:boolean, handleClose:Function}) => {

    return (
      <div >
        <ModalMui
          open={open}
          onClose={ (_evt, reason) => handleClose(reason) }
          aria-labelledby="Oportunidad para comprar el servicio"
          aria-describedby="Texto y Botón con redirección a whatsapp para comprar el servicio"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2" className='d-flex flex-column align-items-center justify-content-center gap-3'>
              <img src={softLogo} style={{ height: "60px", width: "60px" }} alt="Warning logo" />
              Últimos Cupos para el Asesoramiento Gratuito
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }} >
              Si no reservas tu lugar ahora mismo, podrías quedar en lista de espera.
            </Typography>
            <div className='mt-4 d-flex justify-content-center'>
              <CtaBtn text='Reservar cupo' handleClick={()=>{}} />
            </div>
          </Box>
        </ModalMui>
      </div>
    );
}
export default Modal