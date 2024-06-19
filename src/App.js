import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux-toolkit/admin/api/api";
import Data from "./components/Data";

const App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <Data />
    </div>
  );
};

export default App;
