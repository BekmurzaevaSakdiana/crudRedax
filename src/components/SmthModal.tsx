import React, { useState } from "react";

interface SmthModalProps {
  handleSmthModal: () => void;
  handleCreate: (album: { id: number; name: string; imgSrc: string }) => void;
}

const SmthModal: React.FC<SmthModalProps> = ({
  handleSmthModal,
  handleCreate,
}) => {
  const [albumName, setAlbumName] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");

  // Функция для чтения файла и получения его URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newAlbum = {
      id: Date.now(),
      name: albumName,
      imgSrc: imgSrc, // URL изображения
    };

    handleCreate(newAlbum);
    handleSmthModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="cross flex items-center justify-between ">
          <h2 className="text-xl font-bold mb-4">Add Album</h2>
          <p onClick={handleSmthModal} className="font-bold text-black">
            cross
          </p>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Album Name</label>
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Album Image</label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded"
            onChange={handleFileChange} // обработка загрузки файла
          />
        </div>
        {imgSrc && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Preview</label>
            <img src={imgSrc} alt="Preview" className="w-full h-auto rounded" />
          </div>
        )}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={handleSmthModal}>
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmthModal;
