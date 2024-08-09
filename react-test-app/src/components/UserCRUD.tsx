import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addUser, updateUser, deleteUser } from "../store/reducers/userSlice";
import UserListItem from "./UserListItem";
interface User {
  id: number;
  name: string;
}
const UserCRUD: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");
  console.log("users>", users);
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        User CRUD Application
      </h1>
      <div className="mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Add User
        </button>
      </div>
      <ul className="space-y-2">
        {users.length != 0 ? (
          users.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
            />
          ))
        ) : (
          <h1 className="text-xl text-black">No Users... </h1>
        )}
      </ul>
    </div>
  );
};

export default UserCRUD;
