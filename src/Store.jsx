import { Children, createContext } from "react";
import dog from './dog.png';
import dog1 from './dog1.png';

const postlist = createContext({})
let Postdetails= [{dogimage : dog,dogname : "Lebrador",dogft : "This dog is known for its smartness"},
    {dogimage : dog1,dogname : "Rottweiler",dogft : "This dog is known for its Strength"}];

function Postlistprovider({Children}){
    return(
        <postlist.Provider value={Postdetails}>
         {Children}
       
        </postlist.Provider>
      
    );
}
export default Postlistprovider