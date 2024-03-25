import { useEffect, useRef } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
  const headerRef = useRef(null);
  useEffect(() => {
   const node = headerRef.current;
   node.style.opacity = 1;
   return () => {
    node.style.opacity = 0;
   }
  }, []);
  return (
    <h1 ref={headerRef}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h1>
  );
}