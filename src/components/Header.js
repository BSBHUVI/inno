
import React from 'react'
import styled from 'styled-components'

import './Header.css'





function Header() {
   
 

  return (
    <Container>
      <a>
        <h1 className="clg">INNOVATHON 2K22</h1>
      </a>
      <Menu>
       
       <h1 className='clgg'>SRI SAIRAM COLLEGE OF ENGINEERING</h1>

      </Menu>
      <RightMenu>
       <img className='logo' width="100" height="100" src="https://i.postimg.cc/RFFn6n6k/Sai-logo.png" alt="" />
          
    
        
   
          
          
        
         
      </RightMenu>
    
    </Container>
  )
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
}
@media(max-width:768px){
    display:none;
}



`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin:10px;
  
}
`




