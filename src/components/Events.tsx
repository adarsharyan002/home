import Card from 'react-bootstrap/Card';
import { BsCalendarEventFill } from "react-icons/bs";

const Events = () => {
    return ( 

        <Card className='d-none d-md-block' bg='Light' text='dark'>
        <Card.Header style={{color:'#337AB7',fontWeight:'500'}}>Events</Card.Header>
        <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Contacts</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>+</div>
       </div>

  
       <div className=' d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Projects</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>+</div>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Organizations</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>+</div>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="color m-0 ">Albums</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>+</div>
       </div>
        </Card.Body>
      </Card>
     );
}
 
export default Events;