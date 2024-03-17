import Modal from "./Modal";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ModalTrigger = () => {

  const { ref, inView } = useInView();
  const isOpen = useRef(false);
  const animationOccured = useRef(false);

  // Update isOpenRef after rendering, triggered by inView change
  useEffect(() => {

    if (inView && !animationOccured.current) {
      isOpen.current = true;
      animationOccured.current = true;
    }

  }, [inView]);

  const handleClose = () => {

    if(isOpen.current){
      isOpen.current = false;
    }

  };

  return (
    <>
      <div ref={ref}>
        Modal Trigger
      </div>

      <Modal open={isOpen.current} handleClose={handleClose} />
    </>
  );
};

export default ModalTrigger;
