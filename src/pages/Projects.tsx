import logo2 from '../assets/logo2.png'

export default function Project(){
    return(
        <div className='container-sm d-flex justify-content-center'>
            <div className="w-100 border border-2 rounded-4 p-2 mt-4 bg-white">
                <div className="d-flex justify-content-between">
                    <span className="text-primary fw-semibold">Projects</span>
                    <button style={{background:'#EE364A'}} className="bi bi-plus btn btn-sm text-white fw-semibold">New Project</button>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={logo2} alt="" height="50" width="50" />
                        <span>Python Project</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={logo2} alt="" height="50" width="50" />
                        <span>Next Project</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div><div className="d-flex justify-content-between mt-2">
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={logo2} alt="" height="50" width="50" />
                        <span>React</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div><div className="d-flex justify-content-between mt-2">
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={logo2} alt="" height="50" width="50" />
                        <span>Node</span>
                    </div>
                    <div><i className="bi bi-gear-fill text-primary"></i></div>
                </div>
                <div className="text-end">
                    <span className="text-primary fw-semibold cursor-pointer">Show All</span>
                </div>
            </div>
        </div>
    )
}