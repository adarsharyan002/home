


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

            <div className=" rounded-3 p-2 mt-2">
              <div className="d-flex">
                
                <div >
                  <p className="text-secondary m-1">First posted at 13.10 on 12th Jan 2020 </p>
                  <p className="text-secondary m-1">Last edited at 13.10 on 13th feb 2020 </p>
                  <p className="btn btn-sm rounded-pill bg-success bi bi-clipboard-fill">&nbsp;PHQ9</p>
                </div>
              </div>
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eaque.</p></div>
              <hr />
              <div className="d-flex justify-content-between">
                <img src="./resource/image/boy1.png" alt="" />
                <input type="text" className="rounded-4 form-control w-75" placeholder="Write a Comment..." />
                <button style={{background:'#EE364A'}} className="btn text-white shadow-0  rounded-sm ">Post</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
     );
}
 
export default StoryCard;