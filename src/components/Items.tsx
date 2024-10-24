import React, { useState } from "react";
import Card from "./Card";
import SmthModal from "./SmthModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteItem, updateItem,createItem } from "../store/ItemSliсe";

interface Album {
  id: number;
  name: string;
  imgSrc: string;
}

const Items: React.FC = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.items.albums || []);
  const [openSmthModal, setOpenSmthModal] = useState<boolean>(false);

  const handleSmthModal = () => {
    setOpenSmthModal((prev) => !prev);
  };

  const handleDelete = (albumId: number) => {
    dispatch(deleteItem(albumId));
  };

  const handleUpdate = (album: Album) => {
    dispatch(updateItem(album));
  };

  const handleCreate=(album:Album)=>{
    dispatch(createItem(album))
  }

  return (
    <div>
      <div className="container max-w-5xl w-full mx-auto px-32">
        <h1 className="mt-4 text-center font-bold">ASAP ROCKY FOREVER</h1>
        <div className="btn">
          <button
            onClick={handleSmthModal}
            className="text-white bg-green-500 hover:bg-green-400 px-3 py-1 rounded-lg flex items-center justify-start"
          >
            ADD
          </button>
        </div>
        <div className="containerItems flex items-center justify-center gap-7 mt-12">
          {albums.map((album) => (
            <Card
              key={album.id}
              name={album.name}
              imgSrc={album.imgSrc}
              albumId={album.id}
              onDelete={() => handleDelete(album.id)}
              onChange={(updatedAlbum: any) => handleUpdate(updatedAlbum)}
            />
          ))}
        </div>
      </div>

      {openSmthModal && <SmthModal handleSmthModal={handleSmthModal}  handleCreate={handleCreate} />}
    </div>
  );
};

export default Items;
