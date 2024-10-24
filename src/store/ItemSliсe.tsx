import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Album {
  id: number;
  name: string;
  imgSrc: string;
}

interface AlbumState {
  albums: Album[];
}

const initialState: AlbumState = {
  albums: [
    { id: 1, name: "live.love.asap", imgSrc: "/png/album1.jpeg" },
    { id: 2, name: "long.live.asap", imgSrc: "/png/album2.jpeg" },
    { id: 3, name: "testing", imgSrc: "/png/album3.jpg" },
  ],
};

const albumSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    deleteItem: (state, action: PayloadAction<number>) => {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload
      );
    },
    updateItem: (state, action: PayloadAction<Album>) => {
      console.log(action, "ACION");

      const newValue = state.albums.map((item) =>
        item.id === action.payload?.id ? { ...item, ...action.payload } : item
      );
      return {
        ...state,
        albums: newValue,
      };
    },
    createItem: (state, action: PayloadAction<Album>) => {
      state.albums.push(action.payload);
    },
  },
});

export const { deleteItem, updateItem,createItem } = albumSlice.actions;
export default albumSlice.reducer;
