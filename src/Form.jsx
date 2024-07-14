function Form(){
    return(
      <form>
      <div class="form-group">
        <label htmlFor="exampleInputEmail1">Post Title</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        
      </div>
      <div class="form-group">
        <label htmlFor="exampleInputPassword1">Post</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    );

}
export default Form