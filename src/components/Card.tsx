import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import SmthModal2 from "./SmthModal2";

interface CardProps {
  name: string;
  imgSrc: string;
  albumId: number;
  onDelete: () => void;
  onChange: (value: any) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  imgSrc,
  albumId,
  onDelete,
  onChange,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openSmthModal2, setOpenSmthModal2] = useState(false);

  const handleDeleteModal = () => {
    setOpenDelete((prev) => !prev);
  };

  const handleSmthModal2 = () => {
    setOpenSmthModal2((prev) => !prev);
  };

  return (
    <div className="card bg-gray-300 max-w-80 rounded-md">
      <div className="card-top relative">
        <div
          onClick={handleSmthModal2}
          className="change absolute top-3 right-1 bg-white rounded-s-full p-4 mx-auto"
        >
          <img className="w-6 cursor-pointer" src="/svg/pencil.png" alt="" />
        </div>
        <img className="max-w-60 w-full" src={imgSrc} alt="" />
      </div>
      <div className="card-bottom flex items-center justify-center gap-2">
        <h1 className="font-bold text-center mt-2 p-4">{name}</h1>
      </div>
      <div className="btn flex justify-center mb-6">
        <button
          onClick={handleDeleteModal}
          className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-lg"
        >
          DELETE
        </button>
      </div>

      {openDelete && (
        <DeleteModal
          handleDeleteModal={handleDeleteModal}
          albumId={albumId}
          onDelete={onDelete}
        />
      )}
      {openSmthModal2 && (
        <SmthModal2
          handleSmthModal2={handleSmthModal2}
          album={{ id: albumId, name, imgSrc }}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Card;
