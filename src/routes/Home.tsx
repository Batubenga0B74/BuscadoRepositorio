import React,{useState} from 'react';
import Search from '../components/Search';
import { UserProps } from '../types/user';
import Usuario from "../components/Usuario";

const  Home: React.FC = () => {
    const [User, setUser] = useState<UserProps | null>(null);
    const loadUser = async(userName:string)=>{

        const res = await fetch(`https://api.github.com/users/${userName}`)

         const data = await res.json();

        

          const{ avatar_url,login,location,followers, following} = data

          const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
          };
          setUser(userData)
    };
  return (
     <div>
        <Search loadUser = {loadUser}/>
        {User && <Usuario {...User}/>}
     </div>
  )
}

export default  Home;