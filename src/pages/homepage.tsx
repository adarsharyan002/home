import { Container, Row, Col } from "react-bootstrap";
import StoryList from "../components/story/StoryList";
import ProfilePage from "../components/ProfileCard";
import Events from "../components/Events";
import Followers from "../components/Followers";
import People from "../components/People";

const Homepage = () => {

   
    return ( 

        <>
        
        <Container fluid>
            
            <Row>
                <Col md={3} className="p-1 p-sm-2">
                    <ProfilePage/>
                    <Events/>
                </Col>
                <Col xs={12} md={6} className="d-flex p-0 justify-content-center">
                    <StoryList/>
                </Col>
                <Col md={3} className="d-none d-md-block ">
                    <Followers/>
                    <People/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Homepage;
