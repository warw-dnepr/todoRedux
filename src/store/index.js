import { createStore } from 'redux';

const todoReducer = (state = { items: [], }, action)=>{
   if(action.type == 'add' ){
      return {
         items:[...state.items, action.item],
      }
   }

   if(action.type == 'delete' ){

      const newTodoItems=state.items.filter(item=>item.id!==action.id)
      return {items:newTodoItems}
   }

   return state
}


export const store = createStore(todoReducer);

export default store;