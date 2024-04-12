import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Card, CardHeader, CardMedia, IconButton, Tab } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { AiFillLike, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { MdAddCircle, MdEdit } from 'react-icons/md'
import ItemsCarousel from "react-items-carousel";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loading/Loading';
import { getUser } from '../../redux/features/auth/authService';
import { SET_NAME, SET_USER } from '../../redux/features/auth/authSlice';
import { getPosts } from '../../redux/features/post/postSlice';
import './profile.css';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LeftLazyshow from '../../components/LazyShow/LeftLazyshow';
import RightLazyshow from '../../components/LazyShow/RightLazyshow';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Moment from 'react-moment';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [value, setValue] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const { post, posts, isError, isSuccess, message } = useSelector(state => state.post)

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      // console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.firstName));
      dispatch(getPosts());
    }
    getUserData();
  }, [dispatch]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile-page  bg-light">
      {!profile ? <Loading /> :
        <>

          <div className="">
            <img src="https://media.istockphoto.com/vectors/abstract-cube-round-display-for-product-on-website-in-modern-with-vector-id1288200291?k=20&m=1288200291&s=612x612&w=0&h=pu0lo7-Rv41tIAdVMrYYi-B-bMm2Ss_hRWCmjp2Kp00=" alt="profile-picture" className="profile-bg-img "  />


            <div className="profile-text-container" >
              <div className='position-absolute ' style={{ right: "20px", top: "5%", pointer: 'none' }}>
               <OverlayTrigger overlay={
              <Tooltip >Edit!</Tooltip>}>
                <span className="d-inline-block">
                  <button className='text-light rounded-circle' style={{ width: "45px", height: "45px", background: "#001F61" }}>
                    <MdEdit />
                  </button >
                </span>
              </OverlayTrigger>
              </div>
              
              <div className="">
                <img src={profile.profile_pic} alt="profile-picture" className="rounded-circle bg-light p-2" style={{ width: "180px", cursor:"pointer" }}  title="profile picture"/>
                <div className="">
                  <h2>{profile.firstName + " " + profile.lastName}</h2>
                  <p>343 friends</p>
                  
                  <div className='d-flex justify-content-center pb-3 friends-img-list ps-4'>
                    <img src="https://www.socialmirror.in/upload/media/posts/2021-09/19/professional-profile-pictures_1632045875-b.jpg" alt="" className="rounded-circle" />
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" className="rounded-circle friend-img-pos" />
                    <img src="https://www.tap2assist.me/content/images/Profile/man04-600-thumb.jpg" alt="" className="rounded-circle friend-img-pos" />
                    <img src="https://static-cse.canva.com/blob/951359/1600w-YTfEMXMuMCs.jpg" alt="" className="rounded-circle friend-img-pos" />
                    <img src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" alt="" className="rounded-circle friend-img-pos" />
                  </div>
                </div>

                <div className='d-flex px-5 justify-contnent-between'>
                  <button className="btn me-2 text-light" style={{ background: "#001F61" }}><MdAddCircle className='me-2' />Add to story</button>
                  <button className="btn btn-secondary ms-2"><MdEdit className='me-2' />Edit Profile</button>

                </div>

              </div>
            </div>
          </div>

          <div className="tab-container" style={{ background: "#f0f2f5" }}>
            <Box sx={{ width: '100%', typography: 'body1' }} className='mt-1'>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" className="bg-light">

                    <Tab label="Posts" value="1" className='story-tab-hove' style={{ width: "30%" }} />

                    <Tab label="Abouts" value="2" className='story-tab-hove' style={{ width: "40%" }} />

                    <Tab label="Friends" value="3" className='story-tab-hove' style={{ width: "30%" }} />

                  </TabList>
                </Box>
                <TabPanel value="1" className='px-0'>
                  <LeftLazyshow>
                    {(posts.length > 0) ? <></> : <Card styles={{ hight: "10030vh" }} className="text-center p-5">
                      {profile.firstName} you have no post yet!
                    </Card>}
                    {posts && posts.map((item, key) => {
                      return (
                        <Card className='mt-2 py-2 mx-0' key={item._id}>
                          <CardHeader
                            avatar={
                              <Avatar src={item.profile_pic} aria-label="recipe"/>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreHorizIcon />
                              </IconButton>
                            }
                            title={item.firstName + " " + item.lastName}
                            subheader={item?<Moment fromNow>{item.createdAt}</Moment>:<></>}
                          />
                          <p className={item.description == 'null' ? 'd-none' : 'px-4'}>{item.description}</p>
                          <CardMedia
                            component="img"
                            height="auto"
                            style={{ maxHeight: "350px" }}
                            image={item?.image.filePath}
                            className={item.image === 'null' ? 'd-none' : 'd-block'}
                            alt={item.image === 'null' ? 'Paella dish' : ''}
                          />
                          <div>
                            <div className='d-flex mt-2 justify-content-between px-2'>
                              <div className='d-flex'>
                                <ThumbUpAltIcon className='bg-primary text-light rounded-circle p-1' />
                                <FavoriteIcon className='bg-danger text-light rounded-circle p-1 ms-1' />

                                <p className='ps-1'>Nova, Kean and other 3170 other</p>
                              </div>

                              <div className='d-flex'>
                                <p >65 comment</p>
                                <p className='ms-2'>323 share</p>
                              </div>
                            </div><hr></hr>
                            <div className='d-flex w-100 justify-content-between post-button-con px-2'>
                              <button className='w-100 py-2'><AiFillLike className='' /> Like</button>
                              <button className='w-100 py-2  mx-2' ><FaRegCommentAlt className='' /> Comment</button>
                              <button className='w-100 py-2 ' ><FaShare className='' /> Share</button>
                            </div>
                          </div>
                        </Card>
                      )
                    })}

                  </LeftLazyshow>

                </TabPanel>
                <TabPanel value="2" className='px-0'>
                  <LeftLazyshow>
                    <Card className='mt-2 py-2'>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4"><img src='https://i.pinimg.com/originals/57/f6/58/57f658978f5fed9e81655a2394ef8f32.jpg' className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className='mt-3 p-2'>
                      <div>Hello</div>
                    </Card>
                  </LeftLazyshow>
                </TabPanel>
                <TabPanel value="3" className='px-0'>
                  <RightLazyshow>
                    <Card className='mt-2 py-2'>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src="https://i.pinimg.com/736x/18/02/64/18026433d81cf0bb68819bf28a358885.jpg" className="img-fluid rounded-start" alt="..." style={{ maxHeight: "200px" }} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </RightLazyshow>
                </TabPanel>
              </TabContext>
            </Box>

          </div>
        </>}

    </div>
  )
}

export default ProfilePage
