import React from "react";
import Hero from "../components/davidcomponents/Hero";
import Container from "../components/davidcomponents/Container";
import Row from "../components/davidcomponents/Row";
import Col from "../components/davidcomponents/Col";
import '../css/HomePage.css';

import {
    Link, 
} from 'react-router-dom'

//import ProfilePage from "./ProfilePage.jsx";
//import Search from "./Search.jsx";


const HomePage = () => (

  <div>
    <Hero backgroundImage="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg">
    {/* <Hero backgroundImage="https://media.giphy.com/media/ko7twHhomhk8E/giphy.gif"> */}
    
      <h1>Rate That Dev</h1>
      <h2>the best place to find the perfect developer</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          {/* <h1>Rate That Dev</h1> */}
        </Col>
      </Row>
      <Row>
        <Col size="md-12" className="appDescription">
          <p>
          There is not enough time in the world to learn all the programming languages and frameworks - all developers have certain areas of strength. 
          Likewise, all developers have certain areas of weakness or inexperience - the following survey will let you score yourself and then score your developer peers whom you know well. 

          </p>
          <p>
          Hiring managers or CTOs can pick their perfect shortlist of candidates from our results - in other words find you for your dream job!

          </p>
          <p>
          
          </p>

          <Link to="/profile"><button>I'm a Developer</button></Link> 
          <Link to="/search"><button>I'm Hiring</button></Link>
          
        </Col>
      </Row>
    </Container>

  
  </div>

);

export default HomePage;


//<Link to="/profile"><button>I'm a Developer</button></Link> 
//<Link to="/search"><button>I'm Hiring</button></Link>

//<a href="/profile"><button>I'm a Developer</button></a>
//<a href="/search"><button>I'm Hiring</button></a>