import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Avator from "@mui/material/Avatar";
import { Formik, Field, Form } from 'formik';
import '../../screen/home/home.css'


const PostModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            style={{background:"ffffffb6"}}
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-center w-100'>
                    Create Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex align-items-center'><Avator className='me-1' /> Yakut Muder</div>
                <Formik
                    initialValues={{
                        post: '',
                        additional: ''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Field id="firstName" name="post" placeholder="What's on your mind, Yakut?"  className="w-100 p-2 my-3" style={{height:"100px", border:"none", outline:"none", fontSize:"22px"}}/>
                        

                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                        <Field
                            id="email"
                            name="additional"
                            placeholder="Add to your post"
                            className="w-100 p-2"
                        />
                        <hr></hr>
                        <Button type="submit" className='w-100 ' 
                         onClick={props.onHide}>Post</Button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default PostModal;
