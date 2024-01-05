import React, { useEffect, useState, useTransition } from "react";
import Search from "./search";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgpro from "../images/products/6.png";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import datajop from "../../src/data/data";
  
import { Link } from "react-router-dom";
function Prodect(props) {
  const [po, setpo] = useState(false);
  const [cont, setcont] = useState("");
  const [locati, setlocati] = useState("");

 const [post, setPost] = useState();
   
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
  
  console.log(post )
  const locationSearchHandler = () => {
    const filteredData = post.filter( (job) =>
      job.attributes.name.toLowerCase().includes(  locati.toLowerCase()) ||
   job.attributes.dis.toLowerCase().includes(  locati.toLowerCase())
    );
    setpo(filteredData)
  }
  return (
    <div>
      <div className="  m-auto text-center  rounded-t-full bg-opacity-50 w-9/12  bg-sky-700  h-20  flex">
 
 <h1 className=" m-auto"> مرحبا بك  </h1>

</div>
      <Search />
      <br />
      <Navbar className="bg-body-tertiary justify-content-between rounded-2xl m-auto max-w-5xl">
        <Form inline>
          <InputGroup className=" ">
            <InputGroup.Text id="basic-addon1 ">🔎</InputGroup.Text>
            <Form.Control
              value={cont}
              onChange={(e) => {
                setcont(e.target.value);
              }}
              placeholder="searsh jop  "
              aria-describedby="basic-addon1"
              className="lt"
            />
          </InputGroup>
        </Form>
        <Form flex>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">🗺</InputGroup.Text>
            <Form.Control
              value={locati}
              onChange={(e) => {
                setlocati(e.target.value);
              }}
              placeholder="  location"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Col xs="auto">
          <Button onClick={()=>  locationSearchHandler() } type="submit">search🔍</Button>
        </Col>
      </Navbar>
      <br />
      <div className="  w-10/12  m-auto">
        <Row xs={1} md={2} lg={3} className="g-4">
          {po? po?.filter((job) => {
              if (cont === false) return job;
              if (
                job.attributes.name.toLowerCase().includes(cont) ||
                job.attributes.dis.toLowerCase().includes(cont)
              )
             
               
              return job;
            }).map((e) => (
              <Col key={e.id}>
                <Card>
                  <Link to={`/jop/${e.id}`}>
                    <Card.Img
                      variant="top"
                      className=" h-80 w-10"
                      src={ `http://localhost:1337${e.attributes.photo.data.attributes.url}`}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <Link to={`/jop/${e.id}`}>
                        {e.id} {e.attributes.name}
                      </Link>{" "}
                    </Card.Title>
                    <Card.Text className=" text-black">
                      {e.attributes.dis}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :post?.filter((job) => {
              if (cont === false) return job;
              if (
                job.attributes.name.toLowerCase().includes(cont) ||
                job.attributes.dis.toLowerCase().includes(cont)
              )
             
               
              return job;
            }).map((e) => (
              <Col key={e.id}>
                <Card>
                  <Link to={`/jop/${e.id}`}>
                    <Card.Img
                      variant="top"
                      className=" h-80 w-10"
                      src={`http://localhost:1337${e.attributes.photo.data.attributes.url}`}
                    />
                  </Link>
                  <div> </div>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <Link to={`/jop/${e.id}`}>
                        {e.id} {e.attributes.name}
                      </Link>{" "}
                    </Card.Title>
                    <Card.Text className=" text-black">
                      {e.attributes.dis}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default Prodect;
