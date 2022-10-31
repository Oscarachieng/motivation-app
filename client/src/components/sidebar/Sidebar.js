import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Sidebar({setShowusers,showusers,setPosts,posts,setshowCategory,showcategory}) {
 function handleUsersClick(){
  setShowusers (!showusers)
  // alert("Test")
 }
 function handlePostClick(){
  setPosts (!posts)
  // alert("Test")
 }
 function handleCategoryClick(){
  setshowCategory (!showcategory)
  // alert("Test")
 }
 


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Videos
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Blogs
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
           {/* button submit */}
              <li className="link">
                <PermIdentity onClick= {handleUsersClick}  className="side"barIcon />
                Users
              </li>
          
            {/* <Link to="/products" className="link"> */}
              <li className="link">
                <Storefront  onClick= {handlePostClick}  className="sidebarIcon" />
                Flags
              </li>
            {/* Category Start */}
            <li className="sidebarListItem">
              <AttachMoney onClick= {handleCategoryClick}className="sidebarIcon" />
              Category
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Statitics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Videos
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
