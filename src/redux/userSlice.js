import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// URL of your JSON server
const USERS_API_URL = 'http://localhost:5000/users';

// Async thunk to fetch users from the JSON server
export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(USERS_API_URL);
      const users = await response.json();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  'user/signup',
  async (userData, { getState, rejectWithValue }) => {
    try {
      const { users } = getState().user; // Access users from the Redux store
      console.log('Users Before:', users);  // Debugging line
      
      if (users.find(user => user.email === userData.email)) {
        throw new Error('User already exists');
      }

      const response = await fetch(USERS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      console.log('User Data:', newUser);  // Debugging line

      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { getState, rejectWithValue }) => {
    try {
      const { users } = getState().user; // Access users from the Redux store
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        throw new Error('Invalid credentials');
      }
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  users: [],          // List of users
  userInfo: null,     // Logged in user info
  isLoggedIn: false,  // Authentication status
  error: null,        // Error message
  loading: false,     // Loading state
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetching users
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle user signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);  // Add new user to the list
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle user login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUsers } = userSlice.actions;
export default userSlice.reducer;
