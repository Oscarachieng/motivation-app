import Poster from "../post/Poster";
import Shar from "../share/Shar";
import "./feed.css";
// import { Posts } from "../../dummyData";

export default function Feed({ currentUser, articles }) {
  console.log(articles)
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shar />
        {articles?.map((post) => (
            <Poster
              key={post.id}
              article={post}
              currentUser={currentUser}
            />
          ))}
      </div>
    </div>
  );
}