import React,{useEffect, useState} from "react";

import "./Staff.css";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Category from "../Categoryfolder/Category";
import TelegramIcon from "@mui/icons-material/Telegram";
import Ftcategory from "../ftCategory/ftCategory";

export default function Staff({ currentUser,onDelete,articles }) {
  const [articleDetails,setArticleDetails] = useState({title:"",content:"",is_approved:false,likes:0,is_flagged:false,category_id:1,user_id:currentUser.id})
  const [categories, setCategories] = useState([])
  const [showArticleCreationForm, setShowArticleCreationForm] = useState(false)
  const [showcategory,setshowCategory] = useState(false)
  const [errors,setErrors] = useState("")
  

  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  useEffect(()=>{
        fetch('/categories')
        .then(response=>response.json())
        .then(categories=>setCategories(categories))
        .catch(error=>console.log(error))
  },[])

  function handleOnchange(event){
      setArticleDetails({...articleDetails,[event.target.name]:event.target.value})
  }

   function handleSubmit(e){
      e.preventDefault();
      fetch('/articles', {
         method: 'POST',
         body: JSON.stringify(articleDetails),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "Accept":"application/json"
         },
      })
      .then((response) =>{
        if(response.ok){
          response.json().then(data=>{
            alert(`${data.title} has been created succesfully.`)
          })
        }else{
          response.json().then(errors=>alert(errors.errors))
        }
      })
    }
    function handlePostClick(e){
      setShowArticleCreationForm(!showArticleCreationForm)
    }
    
// staffcategorycreation
function handleCategoryClick() {
  setshowCategory(!showcategory)
}

  return (
    <div className="card h-100 ">
      <div className=" card  " id="userbox" style={myStyles}>
        <div className="card-body bg-primary bg-gradient bg-opacity-25">
          <div className="fixer">
            <div className="card-body " id="student-page-profile">
              <img
                id="im-wd"
                className="rounded-circle img-fluid"
                src={currentUser.avatar_url.url}
                alt="avatar"
              />
              <div className="student-page-profile-text">
                {" "}
                <h6 className="card-title">
                  {currentUser.first_name + " " + currentUser.last_name}
                </h6>
                <p className="text mb-1">{currentUser.category}</p>
                <p className="text mb-1">About</p>
              </div>
            </div>

            {/* user profile section */}
            <div>
            <button className="postbutton" onClick={handleCategoryClick}>
              Create Category
              
            </button>
            {showcategory? <Ftcategory setCategories={setCategories} categories={categories}/> : null}
            </div>


            {/* user comment area */}
            <button onClick={handlePostClick} >Post</button>
            {showArticleCreationForm ? 
            <form onSubmit={handleSubmit} className="form-outline ">
              <label
                className="form-label"
                style={{ color: "#fa521c" }}
              >
                Say something...
              </label><br/>
              
              <select name="category">
                <option>Select the article category</option>
                {categories.map(category=><option key={category.id} value={category.id}>{category.category}</option>)}
              </select>
              <input
                name="title"
                className="form-control text-black opacity-50 mt-3"
                id="textArea"
                placeholder="Article Title"
                value = {articleDetails.title}
                onChange={handleOnchange}
              />
              
              <textarea
                name="content"
                className="form-control text-black opacity-50 mt-3"
                id="textArea"
                rows=""
                value = {articleDetails.content}
                onChange={handleOnchange}
              ></textarea>

              <p
              >{errors}</p>
                
          <button
          className="btn-rounded float-end"
          type="submit"
          value="Send"
          style={{ color: "#fa521c" }}>
          <TelegramIcon  /></button>
               
          <ShareIcon style={{ color: "#fa521c" }} />
      
      <CommentIcon style={{ color: "#fa521c" }} />  
            </form>: null}
            {/* user comment area section ends */}

          
          </div>

          <div className="media"></div>
          {/* Widget section */}
          <div className="card h-100">
            {articles.map((article) => (
              <Category key={article.id} article={article} currentUser = {currentUser} onDelete={onDelete}/>
            ))}
          </div>

          {/* widget section ends */}
        </div>
      </div>
    </div>
  );
}
