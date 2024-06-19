import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser, updateUser } from "../redux-toolkit/admin/api/api";

const Data = () => {
  let email = useRef();
  let password = useRef();

  const [view, setview] = useState({});

  let result = useSelector((state) => state.userSlice.user);

  let dispatch = useDispatch();

  function addUser() {
    let user = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(user);
    dispatch(postUser(user));
  }

  //update

  function handleView(val) {
    setview(val);
  }

  function handle(e) {
    setview({ ...view, [e.target.name]: e.target.value });
  }

  function updateuser() {
    console.log(view);
    dispatch(updateUser(view));
  }

  return (
    <div>
      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={addUser}>Submit</button>
      <br />
      <br />
      <br />

      <input type="text" value={view.email} name="email" onChange={handle} />
      <input
        type="text"
        value={view.password}
        name="password"
        onChange={handle}
      />
      <button onClick={updateuser}>update</button>

      {result.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h1>{val.email}</h1>
            <h1>{val.password}</h1>
            <button onClick={() => handleView(val)}>View</button>
          </>
        );
      })}
    </div>
  );
};

export default Data;
