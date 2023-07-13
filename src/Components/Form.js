import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  editUsers,
  updateUsers,
  editData,
} from "../Reducers/users_reducer";

const Form = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.students);
  console.log("EDIT DATA", edit);

  const [name_val, setName] = useState("");
  const [gen_val, setGen] = useState("");
  useEffect(() => {
   setName(edit.editData.name)
   setGen(edit.editData.gen)
  }, [edit.editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: name_val,
      gen: gen_val,
      id: Math.floor(Math.random() * 1000),
    };
    dispatch(createUser(newStudent));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const updateDetails = {
      name: name_val,
      gen: gen_val,
      id: edit.editData.id,
    };

    dispatch(updateUsers(updateDetails));

    dispatch(editUsers());
    setGen("");
    setName("");
  };

  return (
    <div>
      {edit.editUsers === true ? (
        <form onSubmit={handleEdit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="name"
            value={name_val}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="gen">Gen</label>
          <input
            id="gen"
            name="gen"
            placeholder="gen"
            value={gen_val}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="name"
            value={name_val}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="gen">Gen</label>
          <input
            id="gen"
            name="gen"
            placeholder="gen"
            value={gen_val}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};
export default Form;
