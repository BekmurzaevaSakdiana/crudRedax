import React, { useState } from "react";

interface Album {
  id: number;
  name: string;
  imgSrc: string;
}

interface SmthModal2Props {
  handleSmthModal2: () => void;
  onChange: (value: any) => void; 
  album: Album;
}

const SmthModal2: React.FC<SmthModal2Props> = ({
  handleSmthModal2,
  onChange,
  album,
}) => {
  const [albumName, setAlbumName] = useState(album.name);
  const [albumImage, setAlbumImage] = useState<File | null>(null);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("id", album.id.toString());
    formData.append("name", albumName);
    if (albumImage) {
      formData.append("imgSrc", albumImage); 
    }
  
    const updatedAlbum: Album = {
      id: album.id,
      name: albumName,
      imgSrc: albumImage ? URL.createObjectURL(albumImage) : album.imgSrc,
    };
  console.log(updatedAlbum);
  
    onChange(updatedAlbum); 
    handleSmthModal2(); 
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="cross flex items-center justify-between ">
          <h2 className="text-xl font-bold mb-4">Edit Album</h2>
          <p onClick={handleSmthModal2} className="font-bold text-black cursor-pointer">cross</p>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Album Name</label>
          <input
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Album Image</label>
          <input
            onChange={(e) => {
              if (e.target.files) {
                setAlbumImage(e.target.files[0]);
              }
            }}
            type="file"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleSmthModal2}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmthModal2;
