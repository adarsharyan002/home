import { Button, Form, InputGroup } from "react-bootstrap";



const AddTask = () => {
    return ( 

        <InputGroup className="mb-3 p-2 bg-white rounded-2">
        <Form.Control
          placeholder="New Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button size="sm"  variant="primary" id="button-addon2">
          Add
        </Button>
      </InputGroup>

     );
}
 
export default AddTask;