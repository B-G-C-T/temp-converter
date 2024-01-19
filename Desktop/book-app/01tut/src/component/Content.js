

import { useState } from "react"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Content = ()=>{
    // handling clicks with use state
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: 'one way to know web'
        },
        {
            id: 2,
            checked: true,
            item: 'two way to know web'
        },
        {
            id: 3,
            checked: true,
            item: 'no way to know web'
        }
    ]);
    // creating a handlecheck for the list item
    const handlecheck = (id)=>{
// handling when the item is clicked it checked and when unclicked it is removed 
    const listItems = items.map((item) => item.id === id ? {...item,
    checked: !item.checked } : item);
    setItems(listItems);
    // local storage, when is checked we can pull it back later to make use of it
    localStorage.setItem(`shoppinglist`, JSON.stringify(listItems));
    }


    // handling the delete button 
    const handleDelete = (id) =>{
       const listItems = items.filter((item)=> item.id !== id);
       setItems(listItems);
       localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    return(
        <main>
            {/*when the list is empty we can decide to give a list is empty
              */}
              {items.length ? (





            <ul>
                {items.map((item)=>(
                    // going through the list with map
                    <li className="item" key={item.id}>
                        {/* each list item in react needs a key, to know which item has changed , removed , and added   */}
                        <input type="checkbox"
                        // onchange event
                        onChange={()=>handlecheck(item.id)}
                        checked={item.checked}
                        // checking the boolean value
                        />
                        <label
                        // for styling the click button it will give an underline under the item , if is unclicked the line is removed
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}



                        // the double clicking is to know when the item is clicked 2 times it checks
                        onDoubleClick={() => handlecheck(item.id)}>{item.item}</label>
                        <button onClick={()=> handleDelete(item.id)} 
                        >Delete</button>
                        {/* <faTrashAlt
                         role= "button"
                          tabIndex= "0"/> */}

                    </li>

                ))}
            </ul>
            ):(
                <p style={{marginTop: '2rem'}}>Your list is empty</p>
            )}
        </main>
    )
}
export default Content