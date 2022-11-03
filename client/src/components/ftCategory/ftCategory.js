import React,{useEffect,useState} from 'react'
import "./ftCategory.css";




export default function Ftcategory({setCategories,categories}) {
const [category,setCategory] = useState("")

    // Handle submit
     function handleSubmit(e) {
        e.preventDefault();
        fetch("/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({category:category}),
        })
          .then((r) => r.json())
          // call the onAddItem prop with the newItem
          .then((newcategory) => {
            setCategories([...categories,newcategory])
            console.log([...categories,newcategory])
          } );
      }
    // End of handle submit
  return (
    <div className='Cat'>
        <form className='Cat1'> 
            <input name='Category' value={category} onChange={(e) => setCategory(e.target.value) } required placeholder="Enter the Category"/>               
               <button onClick = {handleSubmit} >Submit</button>
            </form>
    </div>
  )
}