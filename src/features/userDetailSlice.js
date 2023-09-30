import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action Creater: Create
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue("Error Message: ", error);
    }
  }
);

//Action Creater: Read
export const showUsers = createAsyncThunk(
  "showUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue("Error Message: ", error);
    }
  }
);

//Action Creater: Delete
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue("Error Message: ", error);
    }
  }
);

//Action Creater: Update
export const updateUser = createAsyncThunk(
  "updateUser",
  async (updateData, { rejectWithValue }) => {
    const response = await fetch(
      `https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX/${updateData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue("Error Message: ", error);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  search: [],
};

export const userDetails = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    searchUser: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    [showUsers.pending]: (state) => {
      state.loading = true;
    },
    [showUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //     builder
  //       .addCase(createUser.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(createUser.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.users.push(action.payload);
  //       })
  //       .addCase(createUser.rejected, (state, action) => {
  //         state.loading = false;
  //         state.users = action.payload;
  //       })
  //       .addCase(showUsers.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(showUsers.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.users = action.payload;
  //       })
  //       .addCase(showUsers.rejected, (state, action) => {
  //         state.loading = false;
  //         state.users = action.payload;
  //         state.error = action.payload;
  //       });
  //   }
});

export const {searchUser} = userDetails.actions;

export default userDetails.reducer;
