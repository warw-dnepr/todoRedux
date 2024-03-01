

export default function Li(props){

   function finish(event) { event.target.classList.toggle('click-state');}

   return (
   <li><span onClick={finish}>{ props.item.value}</span> <button onClick={()=>props.deleteItem(props.item.id)}>delete</button></li>
   )
}