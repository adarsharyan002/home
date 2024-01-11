import Form from 'react-bootstrap/Form';
import AddTask from './AddTask';

function Tasks() {
  return (
    <Form>

        <AddTask/>
      
        <div  className="mb-3">

            
          <Form.Check
            reverse
            label="This is my first task"
            name="group1"
            type='checkbox'
            id='reverse-checkbox'
            className='flex justify-content-between'
          />
          
        </div>
      
    </Form>
  );
}

export default Tasks;