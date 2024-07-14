import Posts from "./Posts";
import App from "./App";


function PostList({Postdetails1}){
    return(
     <>
      {Postdetails1.map((post) => (<Posts Postdetail={post}></Posts>))}
     </>
    );
}
export default PostList