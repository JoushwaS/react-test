import React, { ChangeEvent, memo } from "react";
import { MdDelete } from "react-icons/md";

interface User {
  id: number;
  name: string;
}

interface UserListItemProps {
  user: User;
  onUpdateUser: (id: number, field: keyof User, value: string) => void;
  onDeleteUser: (id: number) => void;
}

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  onUpdateUser,
  onDeleteUser,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateUser(user.id, "name", e.target.value);
  };

  const handleDeleteClick = () => {
    onDeleteUser(user.id);
  };

  return (
    <li className="flex items-center space-x-2 border-b border-gray-200 pb-2">
      <input
        type="text"
        value={user.name}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 flex-1"
      />
      <button
        onClick={handleDeleteClick}
        className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default memo(UserListItem);
