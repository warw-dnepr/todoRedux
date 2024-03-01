import './App.css'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Li from './Li';




export default function App(){
  const dispatch= useDispatch();
  const items = useSelector(state=> state.items)
  const[newItem,setNewItem]=useState('');
  // const[items,setItems]=useState([]);

  function addItem(){
    if(!newItem ) return alert('Add item in input !');
    const item = {
      id:Math.floor(Math.random()*1000),
      value:newItem
    }

    setNewItem('');
    dispatch({type:'add', item:item})
  }

  function deleteItem(id){
    dispatch({type:'delete', id:id});
  }

    
  return(
    <>
    <h1>TODO List</h1>
    <div className='todo-main'>
      <input id= 'input'  
      type="text" placeholder='Add new item' 
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}
      />
      <button onClick={addItem}>new todo</button>

      <ul>
        {items.map(item=>{
          return(
            <Li key={item.id} item={item} deleteItem={deleteItem}/>
          )
        })}
      </ul>
    </div>
    </>
  )

  
}
