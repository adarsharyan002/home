import Complogo from '../assets/compLogo.jpg'
const Footer = () => {
  return (
    <footer className='mt-2'>
      <div id="footer-border-line"></div>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="mt-4">
          <img src={Complogo} alt="" height="" width="100" />
          <div className="text-secondary">
            <p>About us</p>
            <p>Terms & Condition</p>
            <p>Privacy & Cookies</p>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="fw-semibold">ORGANISATIONS</h5>
          <div className="text-secondary">
            <p>Control Panel</p>
            <p>Discover the Marketplace</p>
            <p>Create Organisation Account</p>
          </div>
        </div>
        <div className="mt-4" id="footer_account">
          <h5 className="fw-semibold">YOUR ACCOUNT</h5>
          <div className="text-secondary">
            <p>Library</p>
            <p>Profile</p>
            <p>Projects</p>
            <p>Help</p>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="fw-semibold">EXPLORE</h5>
          <div className="text-secondary">
            <p>Metrics</p>
            <p>Networks</p>
            <p>Strategies</p>
            <p>Projects</p>
            
          </div>
        </div>
        
      </div>
      <div className="d-flex flex-wrap">
        <div id="chatBox" className="text-center bg-secondary p-2">
          <i className="bi bi-chat-fill fs-4 text-white"></i>
        </div>
        <div className="ms-4">
          <p className="text-secondary">Contact us:</p>
          <p className="text-secondary"><i className="bi bi-envelope"></i>&nbsp;contact@makerble.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
