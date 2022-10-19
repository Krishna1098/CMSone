import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export class About extends Component{
render(){  
    return (
        <div className='container'>

        <header>
        <h3 className="d-flex justify-content-center header-1">About US</h3>
        </header>
        <marquee>Hexaware Technologies pvt.ltd</marquee>

    <MDBCard style={{ maxWidth: '1200px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage 
          src='https://mma.prnewswire.com/media/453147/PRNE_Hexaware_logo_Logo.jpg?p=twitter'          
          alt='...' 
          fluid 
          />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Always Transforming Dreams into Reality</MDBCardTitle>
            <MDBCardText>
            WE ARE HEXAWARE
            Our purpose is to create smiles through great people and technology. We believe technology is a magical thing and with the right people we deliver great experiences for our clients.

            </MDBCardText>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '1200px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw-Pwc0Cb7Rt-inre4EtXDb_ix9qMgGm5Gw&usqp=CAU'          
          alt='...' 
          fluid 
          />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Virtual Workspaces</MDBCardTitle>
            <MDBCardText>
            Hexaware VR is a simulated 3D environment that enables users to explore and interact with a virtual surrounding in a way that approximates reality, as it is perceived through the users' senses. The environment is created with computer hardware and software, although users might also need to wear devices such as helmets or goggles to interact with the environment. The more deeply users can immerse themselves in a VR environment -- and block out their physical surroundings -- the more they are able to suspend their belief and accept it as real.
            </MDBCardText>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '1200px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage 
          src='https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2021/03/Great-Place-to-Work-374-X-200.jpg'          
          alt='...' 
          fluid 
          />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Great Place to Work</MDBCardTitle>
            <MDBCardText>
            The Great Place to Work® certification recognizes Hexaware’s commitment to building a High-Trust, High-Performance Culture™

            Mumbai, March 24, 2021 - Hexaware Technologies, a leading global IT consulting and digital solutions provider, announced that it has been certified™ as a Great Place to Work®. This Great Place to Work® certification is an acknowledgement of the Company’s people practices and a recognition of its focus on building a great workplace culture.
            We are now on a journey of metamorphosing the experiences of our customer’s customers by leveraging our industry-leading delivery and execution model, built around the strategy— ‘AUTOMATE EVERYTHING®, CLOUDIFY EVERYTHING®, TRANSFORM CUSTOMER EXPERIENCES®.’ We serve customers in Banking, Financial Services, Capital Markets, Healthcare, Insurance, Manufacturing, Retail, Education, Telecom, Hi-Tech & Professional Services (Tax, Audit, Accounting and Legal), Travel, Transportation and Logistics. 
            </MDBCardText>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <a class="btn btn-primary m-2 float" href="/home" role="button">Back to Home</a>

    </div>
  );
    }
}