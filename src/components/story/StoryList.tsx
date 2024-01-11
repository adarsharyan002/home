
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBIcon,
    MDBTypography,
   
  } from "mdb-react-ui-kit";

import StoryCard from "./StoryCard";
import { cardData } from "../../data/cardData";


const StoryList = () => {

    
    return ( 

            <MDBContainer className="py-1 p-0 row justify-content-center">
              <MDBCard className="bg-transparent p-1 shadow-0 border-0">
                <div className="px-0 ">
                  
                  <MDBCard className="shadow-0 mb-4">
                    <MDBCardBody className="border-bottom pb-2">
                      <div className="d-flex">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (32).webp"
                          className="rounded-circle"
                          height="50"
                          alt="Avatar"
                          loading="lazy"
                        />
                        <div className="d-flex align-items-center w-100 ps-3">
                          <div className="w-100">
                            <input
                              type="text"
                              id="form1"
                              className="form-control form-status border-0 py-1 px-0"
                              placeholder="Share recent updates..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <MDBTypography
                          listUnStyled
                          className="d-flex flex-row ps-3 pt-3"
                          style={{ marginLeft: "50px" }}
                        >
                          <li>
                            <a href="#!">
                              <MDBIcon far icon="image" className="pe-2" />
                            </a>
                          </li>
                         
                          <li>
                            <a href="#!">
                              <MDBIcon fas icon="chart-bar" className="px-2" />
                            </a>
                          </li>
                          
                          <li>
                            <a href="#!">
                              <MDBIcon far icon="calendar-check" className="px-2" />
                            </a>
                          </li>
                        </MDBTypography>
                        <div className="d-flex align-items-center">
                          <MDBBtn style={{background:'#EE364A'}} className="border-0 shadow-0"  rounded>Post</MDBBtn>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                 <>
                
                  {cardData?.map((item,index)=>{
                     
                     return (<StoryCard 
                     key={index}
                    name={item.name}
                    time={item.time}
                    description={item.description}
                    image={item.image}
                    
                     />)

                  })}
                  </>
                 
                </div>
              </MDBCard>
            </MDBContainer>
          );
        }

       
     

export default StoryList;