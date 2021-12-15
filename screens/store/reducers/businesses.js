import { UPDATE_BUSINESSES } from "../actions/businesses";

const businessState = {
    liked_businesses: []
}

export const businessReducer = (state = businessState,action) => {
    switch(action.type){
        case UPDATE_BUSINESSES: 
           return {
               ...state,
               liked_businesses: action.value,
           }
       default: 
       return state;
    }
   };
   
   export default businessReducer;