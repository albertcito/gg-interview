// Modal as a separate component
import { useEffect, useRef } from "react";

export default function Modal({ openModal, closeModal, children }: { openModal: boolean, closeModal: () => void, children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="m-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-screen-md"
    >
      <div className="flex flex-col items-center justify-center gap-4 relative">
        <button
          className="absolute top-2 right-2"
          onClick={closeModal}
        >
          Close
        </button>
        {children}
      </div>
    </dialog>
  );
}
