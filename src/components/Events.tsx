import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { BsCalendarEventFill } from "react-icons/bs";
import Modal from './Modal';
import { Link } from 'react-router-dom';
    

const Events = () => {

    const [modalShow, setModalShow] = useState(false);


    //handle open model
     const handleOpenModal = () => {
         setModalShow(true)
       };
     
 
       //hanling close model
       const handleCloseModal = () => {
         setModalShow(false);
       };
    return ( 

        <>

<Modal
        show={modalShow}
        onHide={handleCloseModal}
      />

        <Card className='d-none d-md-block' bg='Light' text='dark'>
        <Card.Header style={{color:'#337AB7',fontWeight:'500'}}>Events</Card.Header>
        <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <Link to='/project'><p className="color m-0 ">Projects</p></Link>
       </div>
       <div onClick={handleOpenModal} className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>
       <span><i className="fas fa-plus-circle fa-md"></i></span>

       </div>
       </div>

  
       <div className=' d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Contact</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>
       <span><i className="fas fa-plus-circle fa-md"></i></span>
       </div>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Organizations</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>
       <span><i className="fas fa-plus-circle fa-md"></i></span>
       </div>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Albums</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>
       <span><i className="fas fa-plus-circle fa-md"></i></span>
       </div>
       </div>
        </Card.Body>
      </Card>

      </>
     );
}
 
export default Events;