import {faPius} from 'react-scripts'
const AddItem = () =>{
    return(
        <form className="addform">
            <label htmlFor="addItem">Add Item  </label>
            <input autoFocus id="additem"
            type="text"
            placeholder="Add item"
            required />
            <button type="submit" 
            aria-label="add item">

            </button>

        </form>
    )
}
