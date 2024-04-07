import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/slice/settings";

const useColorMode = () => {
  const [currentMode, setCurrentMode] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    const mode = storedMode ? JSON.parse(storedMode) : "light";
    setCurrentMode(mode);
    dispatch(setMode(currentMode));
  }, [dispatch, currentMode]);

  return [currentMode, setCurrentMode];
};

export default useColorMode;
