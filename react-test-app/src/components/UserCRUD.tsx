import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addUser, updateUser, deleteUser } from "../store/reducers/userSlice";

const UserCRUD: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");

  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, name }));
    setName("");
  };

  const handleUpdateUser = (id: number, field: keyof User, value: string) => {
    dispatch(updateUser({ id, field, value }));
  };

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                handleUpdateUser(user.id, "name", e.target.value)
              }
            />
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCRUD;
