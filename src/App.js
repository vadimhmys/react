import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    }
  }));
  return <input {...props} ref={realInputRef}/>
});

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    //inputRef.current.style.display = "none";
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