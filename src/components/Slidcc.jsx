import Carousel from 'react-bootstrap/Carousel';
 import img1 from "../images/you.jpg"
 import img2 from "../images/a.jpg"
 import img3 from "../images/b.jpg"
 import img4 from "../images/c.jpg"
 import img5 from "../images/d.jpg"
  
function Slidcc() {
  return (
    <div >
      <br/>
      <Carousel   className='    m-auto   '>
        <Carousel.Item  >
          <img src={ img1} className=' h-80  m-auto' alt="" srcset="" />
          
        </Carousel.Item>
        <Carousel.Item  >
        <img className='rounded-lg h-80 m-auto' src={img2} alt="" srcset="" />
          
        </Carousel.Item>
        <Carousel.Item >
        <img className=' rounded-lg h-80 m-auto' src={img3} alt="" srcset="" />
          
        </Carousel.Item>
        <Carousel.Item >
        <img className=' rounded-lg h-80 m-auto' src={img4} alt="" srcset="" />
          
        </Carousel.Item>
        <Carousel.Item >
        <img className=' rounded-lg h-80 m-auto' src={img5} alt="" srcset="" />
          
        </Carousel.Item>
      </Carousel>
       
    </div>

  );
}

export default Slidcc;