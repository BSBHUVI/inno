import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './Card.css'
import Foot from './Foot';

import F from './F';

function Section2({backgroundimg}) {
  return (
    <Wrap bgImage={backgroundimg}>
        <Fade bottom>
        <ItemText>
        <div className="text2">
            <p className="p">
                3.Ideas once submitted can not be modified under any curcumstances
            </p>
        </div>
        <div className="text4">
            <p className="p">
               4.The final evaluation demo will be held virtually and the platform used for the same will be notified to the shortlisted teams via email.The decision taken by organising committee will be final and binding
            </p>
        </div>
        <div className="theme th">
        <h1>CONTACTS</h1>
        </div>
        <div className="clist">
            <h2 className='p pz '>Faculty Coordinator</h2>
            <h4 className='px '>Valarmathi C : 8072124069</h4>
            <h4 className='px'>valarmathi.cse@sairamce.edu.in</h4>
        </div>
        <div className="clist">
            <h2 className='p pz '>Student Coordinator</h2>
            <h4 className='px '>Valarmathi C : 8072124069</h4>
            <h4 className='px'>Bhuvan s : 9632042071 </h4>
        </div>
        <div className="foo">
            <Foot name="Prof.SIVAPRAKASH" role="Prof and Head"/>
            <Foot name="Dr.B.SHADAKSHARAPPA" role="Principal"/>
            <Foot name="Dr.ARUN KUMAR" role="Management Representative"/>
            <Foot name="SRI.SAIPRAKASH LEO MUTTU" role="Chairman & CEO,Sairam Institutions"/>
           
        </div>
        <div className="final">
           <F img=""/>
           <F img=""/>
           <F img=""/>
           <F img=""/>
           <F img=""/>
           <F img=""/>
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

export default Section2
const Wrap=styled.div`
width:100vw;

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