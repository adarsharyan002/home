
import {
    MDBIcon,
    MDBTypography,
  } from "mdb-react-ui-kit";

  import { cardsData } from "../../types/types";

  

const StoryCard:React.FC<cardsData> = ({name,time,description,image}:cardsData) => {
    return ( 
        <div className="d-flex p-3 bg-white shadow-2 mb-2 rounded border-bottom ">
        <img
          src={image}
          className="rounded-circle"
          height="50"
          alt="Avatar"
          loading="lazy"
        />
        <div className="d-flex w-100 ps-3">
          <div>
            <a className="text-decoration-none" href="#!">
              <h6 className="text-body">
                {name}
               
                <span className="small text-muted font-weight-normal me-1">
                  •
                </span>
                <span className="small text-muted font-weight-normal me-1">
                  {time}h
                </span>
              
              </h6>
            </a>
            <p style={{ lineHeight: "1.2" }}>{description}</p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-start gap-3 mb-0 pe-xl-5"
            >
              <li>
                <MDBIcon far icon="comment" />
              </li>
             
              <li>
                <MDBIcon far icon="heart" />
                <span className="small ps-2">35</span>
              </li>
             
            </MDBTypography>
          </div>
        </div>
      </div>
     );
}
 
export default StoryCard;