import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import './Header.css'
import Section1 from './Section1'
import Section2 from './Section2'


function Home() {
  return (
    <>
    <Container className='conta'>
    <Section backgroundimg="https://i.postimg.cc/43TF1K9V/baa.jpg"/>
    
     
      


     
      
      
      
      


      
    </Container>
    <Container className='conta'>
    <Section1 backgroundimg="https://i.postimg.cc/fLQGr2S2/aaaa.jpg"/>
      
     
      
      
      
      


      
    </Container>
    <Container className='conta'>
   
    <Section2 backgroundimg="https://i.postimg.cc/1z0ngz6v/a.jpg"/>
      
     
      
      
      
      


      
    </Container>
   
    </>
  )
}

export default Home
const Container=styled.div`


`
