import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './Card.css'

function Section({backgroundimg}) {
  return (
    <Wrap bgImage={backgroundimg}>
        <Fade bottom>
        <ItemText>
        
<div className="margin">

  <a  className="card">

      <div className="inner">
      
      <div className="start">
      <img className='logo' width="60" height="60" src="https://i.postimg.cc/RFFn6n6k/Sai-logo.png" alt="" />
      <h5 className="title">NATIONAL LEVEL VIRTUAL HACKATHON 2022 </h5>
      <h1 className='h1'>Innovathon</h1>
      <h1 className='h1'>2K22</h1>
   
      </div>
     
        
        
      </div>
      <div className="last">
      <img className='cse' src="https://i.postimg.cc/ncZykDYZ/cse.jpg" alt="" />
      </div>
  </a>
  <a className="card1">
  <div className="head">
    <h1>About The Event</h1>
    
  </div>
  <br />
  <div className="topic">
  <p><strong>Innovathon 2k22</strong> is an initiative by Innovathon-SSCE to come together with an objective of creating and implementing new ideas</p>
</div>
<div className="topic">
<p><strong>Sri Sairam College Of Engineering Bangalore CSE Department</strong> is organizing Innovathon to construct and strengthen the innovative environment </p>
</div>
<div className="topic">
  <p>The objective of this hackathon is to provide technical and innovative solutions to the existing local and community problems.The hackathon will help students to showcase their innovative intellectual ability to provide solutions for the real life challengesS</p>
</div>
</a>
</div>

        




        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
       
        </Fade>
        <DownArrow src="https://i.postimg.cc/MZ4gjpSj/arrow.jpg"/>
        </Buttons>
      
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;

background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props =>`url("${props.bgImage}")`};

`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`


const DownArrow=styled.img`
margin-top:20px;
height:20px;
cursor:pointer;
overflow-x:hidden;

animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`
`