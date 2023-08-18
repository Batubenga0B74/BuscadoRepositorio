 type searchProps = {
    loadUser: (userName:string)=> Promise<void>;
 }
import { useState,KeyboardEvent } from "react";

import {BsSearch} from "react-icons/bs";

import Classes from "./Search.module.css";



const Search = ({loadUser}:searchProps) => {

        const[userName,setUserName] = useState("");

        const handlekeyDown = (e:KeyboardEvent)=>{
         if(e.key === "Enter"){
            loadUser(userName);
            
         }
      
         
      };
  return(
     <div className={Classes.search}>
        <h2> busca por usuario</h2>
        <p>conheça seus melhores repositorios</p>
        <div className={Classes.search_container}>
             <input type="text" placeholder='Digite o nome do usuario'
              onChange={(e)=> setUserName(e.target.value)}
              onKeyDown={handlekeyDown}
             />
             <button
              onClick={()=> loadUser(userName)}
             ><BsSearch/></button>
        </div>
     </div>
  );
}

export default Search;