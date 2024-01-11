import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  
} from 'mdb-react-ui-kit';
import ProfileAccordion from './PorfileAccordion';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className=" p-0 mb-2">
        
        
            <MDBCard className='px-0'>
              <MDBCardBody className="text-center px-0">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (32).webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '3rem' }}
                  fluid />
                <p className="text-muted mb-1">Adarsh Aryan</p>
                
                  <ProfileAccordion/>

               
                  </MDBCardBody>
              
            </MDBCard>

            

      </MDBContainer>
    </section>
  );
}