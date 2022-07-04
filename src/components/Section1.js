import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './Card.css'
import Cat from './Cat';
import Catimg from './Catimg';

function Section1({backgroundimg}) {
  return (
    <Wrap bgImage={backgroundimg}>
        <Fade bottom>
        <ItemText>
        <div className="theme">
        <h1>THEME</h1>
        </div>
        <div className="ab">
            <p className='p'>The Theme For <strong>Innovathon 2k22</strong> is <strong>'Innovation for life'</strong> which intends to innovative solutions for current real life problems</p>
        </div>
        <div className="theme">
        <h1>CATEGORIES</h1>
        </div>
        <div className="cats">
            <Cat name="1.Game development using AR and VR"/>
            <Cat name="2.Agriculture Robotic Development"/>
            <Cat name="3.ChatBot using AI"/>
            <Cat name="4.Delopment of E-Learing Platform"/>
        </div>
        <div className="cats">
        <Catimg imga="https://i.postimg.cc/PqsqhkLT/ai.jpg"/>
        <Catimg imga="https://i.postimg.cc/kg9nhvLg/arob.jpg"/>
        <Catimg imga="https://i.postimg.cc/Pr646T63/acc.jpg"/>
        <Catimg imga="https://i.postimg.cc/jqzmkYTy/aelarn.jpg"/>
        </div>
        <div className="theme th">
        <h1>RULES AND PROCESS</h1>
        </div>
        <div className="text">
            <p className='p' >1. Copyright: Participant represents that he or she is the sole author and copyright owner of the submission is an original work of the Participant ,or if the Submission is a work
             based on an existing application ,that the Participant sufficient rights to use and to authorize others;
             and that the submission does not infringe upon any copyright or upon any third party rights of which the Participant is aware ,and that the Submission is free of malware </p>
        </div>
        <div className="text1">
            <p className='p'>2.Strict adherence to deadlines is Mandatory</p>
        </div>

    

 

        




        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
       
        </Fade>
    
        </Buttons>
      
    </Wrap>
  )
}

export default Section1
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;

background-repeat:no-repeat;
display:flex;
flex-direction:column;


background-image:${props =>`url("${props.bgImage}")`};

`
const ItemText=styled.div`

`



const Buttons=styled.div`
`