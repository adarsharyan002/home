import Accordion from 'react-bootstrap/Accordion';
import {
    
    MDBCardText,
    MDBCardBody,
    MDBProgress,
    MDBProgressBar,
    
  } from 'mdb-react-ui-kit';
import Tasks from './Tasks';

import { BsCalendarEventFill } from "react-icons/bs";


function ProfileAccordion() {
  return (
    <Accordion className='custom-accordion' defaultActiveKey="0">
      <Accordion.Item className='border-0 custom-accordion' eventKey="0">
        <Accordion.Header>Personal Progress</Accordion.Header>
        <Accordion.Body>
         <MDBCardBody className='text-start' >
                    <MDBCardText className="mb-4"> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress height='5' className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress height='5'  className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress height='5'  className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    
                    </MDBCardBody>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='border-0' eventKey="1">
        <Accordion.Header>Tasks</Accordion.Header>
        <Accordion.Body>
        <Tasks/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='border-0 d-block d-md-none' eventKey="2">
        <Accordion.Header>Events</Accordion.Header>
        <Accordion.Body>
        <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="m-0 text-muted">Contacts</p>
       </div>
       <div className='m-0 fs-5 p-1 cursor-pointer custom-hover-bg'>+</div>
       </div>

  
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="m-0 text-muted">Projects</p>
        </div>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="m-0 text-muted">Albums</p>
        </div>
        <div className='d-flex align-items-center gap-2 cursor-pointer'>
        <BsCalendarEventFill id='calendar' />
        <p className="m-0 text-muted">Contacts</p>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProfileAccordion;