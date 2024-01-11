import {
    
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
  import Card from 'react-bootstrap/Card';


const People = () => {
    return ( 

        <Card className='mt-2 px-0 ' bg='Light' text='dark'>
        <Card.Header style={{color:'#337AB7',fontWeight:'500'}}>People You may Know</Card.Header>
        <Card.Body className='d-flex gap-3 justify-content-center flex-wrap'>

        <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '3rem' }}
                  fluid />
                   <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '3rem' }}
                  fluid />
                   <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '3rem' }}
                  fluid />
                   <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '3rem' }}
                  fluid />
                  
           </Card.Body>
           <div className='d-flex justify-content-end px-4 cursor-pointer'>
                  <p>See more</p>
                  </div>
      </Card>
     );
}
 
export default People;