import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action Creater: Create
export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
  const response = await fetch("https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(data)
  });
  try {
    const result = await response.json();
    return result;
  } catch (error) {
   rejectWithValue("Error Message: ", error);
  }
})

//Action Creater: Read
export const showUsers = createAsyncThunk("showUsers", async (args,{rejectWithValue}) => {
    const response = await fetch("https://645cd6e2e01ac6105894c93c.mockapi.io/CRUD-IN-REDUX");
    try {
      const result = await response.json();
      console.log("REs", result);
      return result;
    } catch (error) {
      console.log("Error");
      rejectWithValue("Error Message: ", error);
    }
  })

  const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const userDetails = createSlice({
   name: "userDetails",
   initialState,

   reducers:{

   },
   extraReducers: {
    [createUser.pending] : (state) => {
        state.loading = true;
    },
    [createUser.fulfilled] : (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
    },
    [createUser.rejected] : (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },

    [showUsers.pending] : (state) => {
        state.loading = true;
    },
    [showUsers.fulfilled] : (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    [showUsers.rejected] : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
}
 
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
  
})

//export const {} = userDetails.actions;

export default userDetails.reducer;
