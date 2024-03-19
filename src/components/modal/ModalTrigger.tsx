import Modal from "./Modal";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ModalTrigger = () => {

  const { ref, inView: isInView } = useInView();
  const [isOpen , setOpen] = useState(false);
  const animationOccured = useRef(false);

  // Open the Modal when the trigger component is in viewport.
  useEffect(() => {

    if (isInView && !animationOccured.current) {
      setOpen(true)
      animationOccured.current = true;
    }

  }, [isInView]);

  const handleClose = (reason: string) => {
    ( reason === 'backdropClick' || reason === 'escapeKeyDown' ) && 
      setOpen(false)
  };

  return (
    <>
      <div ref={ref} id="modalTrigger"></div>
      <Modal open={isOpen} handleClose={handleClose} />
    </>
  );
};

export default ModalTrigger;
