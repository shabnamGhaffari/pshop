"use client";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const events = ["load", "mousedown", "click", "scroll", "keypress"];

const AppLogout = ({children}) => {
  const {exp} = useSelector(state => state.authReducer);
  const expire_time = new Date(exp).getTime() || 100000;
  console.log(expire_time);
  let timer;
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach(item => {
        window.removeEventListener(item, resetTimer);
      });
      logoutAction();
    }, expire_time); 
  };
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach(item => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  const logoutAction = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return children;
};

export default AppLogout;
