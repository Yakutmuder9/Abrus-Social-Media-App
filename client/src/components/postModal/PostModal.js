import Modal from 'react-bootstrap/Modal';
import Avator from "@mui/material/Avatar";
import '../../screen/home/home.css'
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../redux/features/auth/authService";
import Loader from '../loading/Loading';
import { useEffect, useState } from 'react';
import { createPost, selectPost } from '../../redux/features/post/postSlice';

const PostModal = (props) => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const postEdit = useSelector(selectPost);
    const [post, setPost] = useState(postEdit);

    const [postImage, setPostImage] = useState("");
    const [highlight, setHighlight] = useState(false);
    const [preview, setPreview] = useState("");
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function getUserData() {
            const data = await getUser();
            setProfile(data);
            setIsLoading(false);
            dispatch(SET_USER(data));
        }
        getUserData();
    }, [dispatch]);

    const handleInputDiscription = (value) => {
        setPost( value );
    };

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]);
    };


    const savePost = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("description", post);
        formData.append("image", postImage);

        console.log(...formData);
        dispatch(createPost(formData));
      
    };




    const handleEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("enter!");

        preview === "" && setHighlight(true);
    };

    const handleOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("over!");

        preview === "" && setHighlight(true);
    };

    const handleLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("leave!");
        setHighlight(false);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("drop!");
        setHighlight(false);
        setDrop(true);

        const [file] = e.target.files || e.dataTransfer.files;

        uploadFile(file);
    };

    function uploadFile(file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            // this is the base64 data
            const fileRes = btoa(reader.result);
            // console.log(`data:image/jpg;base64,${fileRes}`);
            setPreview(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
            console.log("There is a problem while uploading...");
        };
    }




    return (<>
        {!profile ? <Loader /> :
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered

                style={{ background: "ffffffb6" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-center w-100'>
                        Create Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex align-items-center profile-name'><Avator className='me-2' src={profile.profile_pic} /> {profile.firstName + ' ' + profile.lastName}</div>


                    <form onSubmit={savePost}>

                        <input id="firstName" placeholder={`What's on your mind, ${profile.firstName}?`} className="w-100 p-2 my-3 form-control" style={{ height: "100px", border: "none", outline: "none", fontSize: "22px" }}
                         type='text'   name="description" 
                            onChange={(e)=>handleInputDiscription(e.target.value)} />


                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                        <div className='w-100 d-flex align-items-center bg-light'>

                            <div className='file-upload-field w-100 d-flex align-items-center '>


                                <div
                                    onDragEnter={(e) => handleEnter(e)}
                                    onDragLeave={(e) => handleLeave(e)}
                                    onDragOver={(e) => handleOver(e)}
                                    onDrop={(e) => handleUpload(e)}
                                    className={`upload${highlight ? " is-highlight" : drop ? " is-drop" : ""
                                        }`}
                                    style={{ backgroundImage: `url(${preview})` }}
                                >
                                    <div className="my-form">
                                        <p>Drop image here</p>
                                        <div className="upload-button">
                                            <input
                                                type="file"
                                                className="upload-file" name='image'
                                                accept="image/*"
                                                onChange={(e) =>  {handleUpload(e);handleImageChange(e)}}
                                            />
                                            <button className='button'>Upload Here</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <hr></hr>
                        <button type="submit" className='btn btn-primary w-100 '
                            onClick={props.onHide}>Post</button>
                    </form>
                </Modal.Body>
            </Modal>
        }

    </>);
}

export default PostModal;
