import { useEffect } from "react";

// Hook that detects if component clicked outside of it
function useOutsideComponentDetect(ref, passedMethod) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("Setting");
        passedMethod(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, passedMethod]);
}
export default useOutsideComponentDetect;
