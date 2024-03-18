import Modal from "./Modal";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ModalTrigger = () => {

  const { ref, inView } = useInView();
  const [isOpen , setOpen] = useState(false);
  const animationOccured = useRef(false);

  // Update isOpenRef after rendering, triggered by inView change
  useEffect(() => {

    if (inView && !animationOccured.current) {
      console.log("if statement triggered")
      setOpen(true)
      animationOccured.current = true;
    }

  }, [inView]);

  const handleClose = (_evt: object, reason: string) => {


    
    if( reason === 'backdropClick' || reason === 'escapeKeyDown' ){
      setOpen(false)
    }

  };

  return (
    <>
      <div ref={ref}>
        Modal Trigger
      </div>

      <Modal open={isOpen} handleClose={handleClose} />
    </>
  );
};

export default ModalTrigger;
