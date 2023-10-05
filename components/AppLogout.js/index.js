"use client";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const events = ["load", "mousedown", "click", "scroll", "keypress"];

const AppLogout = ({children}) => {
  const {exp} = useSelector(state => state.authReducer);
  const expire_time = new Date(exp).getTime() || 100000;
  console.log(expire_time);
  let timer;
  //   if (!exp) {
  //     return children;
  //   }
  // this function sets the timer that logs out the user after 10 secs
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      // clears any pending timer.
      resetTimer();
      // Listener clean up. Removes the existing event listener from the window
      Object.values(events).forEach(item => {
        window.removeEventListener(item, resetTimer);
      });
      // logs out user
      logoutAction();
    }, expire_time); // 10000ms = 10secs. You can change the time.
  };

  // this resets the timer if it exists.
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
