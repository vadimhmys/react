import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref}/>
});

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.display = "none";
  }

  return (
    <>
      <MyInput 
        type="text" 
        placeholder="Enter your message..."
        ref={inputRef}
        />
      <button onClick={handleClick}>Click to focus</button>
    </>
  );
}