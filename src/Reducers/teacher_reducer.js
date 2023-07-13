import { createSlice } from "@reduxjs/toolkit";



const teacherReducer =createSlice({
  name:'teachers',
  initialState:{
    teachers:[{name:"Ama", gen:23,id:12356},
           {name:"Martha",  gen:23, id:27789},
           {name:"Sarah", gen:23, id: 29880},
           {name:"Abby",  gen:23, id:90082},
           {name:"Daniela",  gen:23, id:38890},
 ],
    
  },
  reducers:{
    createTeacher: (state) => {

    },

    updateTeacher: (state) => {

    },

    deleteTeacher: (state) => {

    },

    getTeacher: (state) => {
    return state.users
    },
  }


});

export const {createTeacher, updateTeacher,deleteTeacher,getTeacher}=teacherReducer.actions

export default teacherReducer.reducer;


