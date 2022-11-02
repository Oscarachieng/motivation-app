import Post from "../post/Post";
import Shar from "../share/Shar";
import "./feed.css";
// import { Posts } from "../../dummyData";

export default function Feed({ currentUser, articles }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shar />
        {/* {articles.map((article) => (
            <Post
              key={article.id}
              article={article}
              currentUser={currentUser}
            />
          ))} */}
      </div>
    </div>
  );
}