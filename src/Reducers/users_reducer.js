import { createSlice } from "@reduxjs/toolkit";



const usersSlice =createSlice({
  name:'users',
  initialState:{
    users:[{name:"Albert", gen:23,id:12356},
           {name:"Mark",  gen:23, id:27789},
           {name:"Sam", gen:23, id: 29880},
           {name:"Andrew", gen:23, id:90082},
           {name:"Dan",  gen:23, id:38890},
 ],
 chefs: [],
 editUsers: false,
 editData: {},
  },


  reducers:{
    createUser: (state,action) => {
      state.users=[...state.users,action.payload]

    },

    updateUsers: (state, action) => {
      const updatedUsers = state.users.map((item) => {
        if (action.payload.id === item.id) {
          return action.payload;
        } else {
          return item;
        }
      });

      state.users = updatedUsers;

    },

    deleteUser: (state,action) => {
      const newUsers=state.users.filter((item)=>{
      
         if (item.id!==action.payload) {
          return item;
         } 
      });
      state.users=newUsers;
    },
     
    
    
    editUsers: (state) => {
      if (state.editUsers === true) {
        state.editUsers = false;
      } else {
        state.editUsers = true;
      }
    },
  

    editData: (state, action)=>{
      state.editData=action.payload  
      },

    
    



    getUser: (state) => {
    return state.users
    },
  }


});

export const {createUser, updateUsers,deleteUser,getUser, editUsers,editData}=usersSlice.actions

export default usersSlice.reducer;


