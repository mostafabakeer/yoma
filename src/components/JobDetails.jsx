 import React, { useEffect } from 'react'
 import datajop from "../data/data"
 import { useParams } from 'react-router'
 import { useState } from 'react'
 import bg from "../images/p.jpg"
 
import axios  from 'axios'
 function JobDetails() {
  const {id}=useParams()
const [con, setcon] = useState(id);
const [post, setPost] = useState([]);
const [name, setname] = useState("");
const [number, setnumber] = useState("");
const [imag, setimag] = useState( );
const [creat, setcreat] = useState("" );
useEffect(() => {
 let config = {
 method: 'get',
 maxBodyLength: Infinity,
 url: 'http://localhost:1337/api/prodects?populate=*',
 headers: { 
   'Authorization':'Bearer 21dd054f8f51aadc236d48f56c7b57090a2290c5ff512f1051578fd6a6c869be8002e89e24bf63707f9aa546b1815dadeaf5e29e81432074ca57aa12737369968b50fdde591411b87a7093ce9ea8856295a32252980c2f0f36bd74f741a37cbb31056c65d191cc7f1632658f44895c9f048f514348f32930f38e0280734c0c4a'
 }
};

axios.request(config)
.then((response) => {
    setPost(response.data.data)
     ;
})
.catch((error) => {
 console.log(error);
});
}, [ ]);
///////////////////////////creat user
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Bearer 21dd054f8f51aadc236d48f56c7b57090a2290c5ff512f1051578fd6a6c869be8002e89e24bf63707f9aa546b1815dadeaf5e29e81432074ca57aa12737369968b50fdde591411b87a7093ce9ea8856295a32252980c2f0f36bd74f741a37cbb31056c65d191cc7f1632658f44895c9f048f514348f32930f38e0280734c0c4a");

var raw = JSON.stringify({
  "name":  name,
  "number": number
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


 console.log(post);
const creatuser= async(e)=>{
 await fetch("http://localhost:3001", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
 
const joop=post.find((jo)=>jo.id==id)
  console.log(con);
   return (
     <div className='  text-center relative  ' >
      <img src= {bg} alt="" srcset="" className= ' w-screen  h-full  absolute -z-10  ' />
      
     { joop?
     <div className='  '>
      <h4 className='     bg-slate-800 bg-opacity-40   w-2/6'>{joop.attributes.name}</h4>
      <img src= {`http://localhost:1337${joop.attributes.photo.data.attributes.url}`} alt="" srcset="" className=' m-auto w-2/12 max-w-52 rounded-lg'/>
      
      <p className=' bg-slate-900 rounded-full   max-w-md   m-auto'>  {joop.attributes.dis} <br/> اليوميه  {joop.attributes.pris}</p>
      <br/>
      <br/>
      <div className='  m-auto w-8/12  bg-opacity-50 rounded-xl  bg-slate-600    lt' >
  <div class=" mt-24 form-group m-auto w-10/12 ">
    <label for="exampleInputEmail1" className='  fontpro'> your name</label>
    <input type="name" onChange={(e)=>setname(e.target.value)} className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="  الاسم"/>
    
  </div>
  <br/>
  <div class="form-group m-auto w-10/12">
    <label for="exampleInputPassword1" className='   fontpro' >  your number</label>
    <input type="tel"onChange={(e)=>setnumber(e.target.value)}  className="   form-control" id="exampleInputPassword1" placeholder=" رقم التلفون"/>
      
  </div>
  
  <form>
  <div class="form-group">
    <label for="exampleFormControlFile1" className='  fontpro'> صوره البطاقه</label>
    <br/>
    <br/>
    <input type="file"   class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
  <br/>
  <button   onClick={creatuser} className="btn btn-primary"> send</button>
  <br/>
  <br/>
  <br/>
</div>
 
{/* <div className=' showjop sm:flex    lg:mt-56  justify-between'>
  <img src={bgm1} alt="" srcset="" />
  <img src={bgm2} alt="" srcset="" />
  
</div> */}
     </div>
   

     
     : <h1 className='  bg-orange-800 w-screen'>o......</h1>}
     
     </div>
   )
 }
 
 export default JobDetails