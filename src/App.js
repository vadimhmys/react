import { useEffect, useRef } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => {
      dialog.close();
    }
  }, []);
  return (
  <dialog ref={dialogRef}>
    <p>Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>
  );
}