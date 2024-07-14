import App from "./App";
import PostList from "./PostList";
function Posts({Postdetail}){
    function handledetails(dgname){
        console.log(dgname);
        //if(dgname === "Lebrador")
        //window.open("https://www.akc.org/dog-breeds/labrador-retriever/","_blank", "noreferrer");
        //else if(dgname ===  "Rottweiler")
        //window.open("https://www.akc.org/dog-breeds/rottweiler/","_blank", "noreferrer");


    }

    return(
        <div className="card posts" style={{width: '18rem'}}>
        <img class="card-img-top" src={Postdetail.dogimage} alt="Card image cap"/>
        <div class="card-body">
         <h5 class="card-title">{Postdetail.dogname}</h5>
          <p class="card-text">{Postdetail.dogft}</p>
          <a href="#" class="btn btn-primary" onClick={handledetails(Postdetail.dogname)}>More Details</a>
           </div>
           </div>
    );
}
export default Posts