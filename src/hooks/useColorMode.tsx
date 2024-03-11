import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/slice/settings";

const useColorMode = () => {
  const [currentMode, setCurrentMode] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentMode(JSON.parse(localStorage.getItem("mode") || "light"));
    dispatch(setMode(currentMode));
  }, [dispatch, currentMode]);

  return [currentMode, setCurrentMode];
};

export default useColorMode;
