import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
 import bg from "../images/c6.png"

function Search() {
  
  const [post, setPost] = useState([]);

  
    const {id} = useParams();
  
    const job = post.find((e) => e.id === id);
  console.log(post )
  
  return (
   <>
    
  
{
  
   
 
}
   </>
  );
}

export default Search;