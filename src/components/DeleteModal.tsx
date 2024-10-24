import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/ItemSliсe";

interface DeleteModalProps {
  handleDeleteModal: () => void;
  albumId: number;
  onDelete: (albumId: number) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  handleDeleteModal,
  albumId,
  onDelete,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    onDelete(albumId);
    handleDeleteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div
          onClick={handleDeleteModal}
          className="cross flex items-end justify-end mb-3 cursor-pointer"
        >
          <b>cross</b>
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">
          Are you sure you want to delete?
        </h2>
        <div className="flex justify-around mt-6">
          <button
            onClick={handleDelete}
            className="text-white rounded-lg bg-red-600 px-4 py-2"
          >
            Delete
          </button>
          <button
            onClick={handleDeleteModal}
            className="text-white rounded-lg bg-blue-500 px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
