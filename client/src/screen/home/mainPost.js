import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect, useLayoutEffect } from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import './home.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AiOutlineLeft, AiOutlineRight, AiFillLike } from 'react-icons/ai';
import { FaShare, FaRegCommentAlt } from 'react-icons/fa';
import ItemsCarousel from "react-items-carousel";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LeftLazyshow from '../../components/LazyShow/LeftLazyshow';
import RightLazyshow from '../../components/LazyShow/RightLazyshow';
import PostModal from "../../components/postModal/PostModal"

import { useDispatch, useSelector } from 'react-redux';
import { SET_USER, SET_NAME } from "../../redux/features/auth/authSlice";
import { getUser } from "../../redux/features/auth/authService";
import Loader from '../../components/loading/Loading';
import { NavLink } from 'react-router-dom';
import { getPost, getPosts, selectPost, updatePost } from '../../redux/features/post/postSlice';
import Moment from 'react-moment';

const MainPost = (prop) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [chevronWidth, setChevronWidth] = useState(5);
  const [Screenwidth, ScreenHeight] = useWindowSize();
  const { post, posts, isError, isSuccess, message } = useSelector(state => state.post)

  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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


  const images = [
    "/assets/FbCreateStory.png",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


console.log(posts)

  return (
    <>
      <LeftLazyshow>
        <Card>
          <Box sx={{ width: '100%', typography: 'body1' }} className='mt-1 p-3'>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" >

                  <Tab label="Stories" value="1" className='story-tab-hove' style={{ width: "30%" }} />

                  <Tab label="Reels" value="2" className='story-tab-hove' style={{ width: "40%" }} />

                  <Tab label="Rooms" value="3" className='story-tab-hove' style={{ width: "30%" }} />

                </TabList>
              </Box>
              <TabPanel value="1">
                <>
                  <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                      requestToChangeActive={setActiveItemIndex}
                      activeItemIndex={activeItemIndex}
                      numberOfCards={Screenwidth < 520 ? 4 : 5}
                      gutter={20}
                      leftChevron={
                        <Avatar className='bg-light text-dark card'>
                          <AiOutlineLeft />
                        </Avatar>}
                      rightChevron={
                        <Avatar className='bg-light text-dark card'>
                          <AiOutlineRight />
                        </Avatar>}
                      outsideChevron
                      chevronWidth={chevronWidth}
                      style={{ margin: "20px" }}
                    >
                      {images.map((item, index) => {
                        return (<div key={index}>
                          <img src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png' alt='' className='position-absolute rounded-circle border bg-primary m-2' style={{width: "37px", padding:"3px", cursor:"pointer"}}/>
                          <img
                            alt="test product"
                            src={item}
                            key={index}
                            style={{ height: 190, width: "100px" }}
                            id="Itemcarosel"
                            className="rounded"
                          />
                          </div>

                        );
                      })}
                    </ItemsCarousel>
                  </div>
                </>

              </TabPanel>
              <TabPanel value="2">Reels</TabPanel>
              <TabPanel value="3">Rooms</TabPanel>
            </TabContext>
          </Box>
        </Card>
      </LeftLazyshow>
      <RightLazyshow>
        <Card className='mt-3 p-3'>
          <div className=''>
            <div className='d-flex'>

              <NavLink to={'/profile/' + profile?.firstName + '.' + profile?.lastName} className='menu-link '><Avatar src={profile?.profile_pic} className='me-4' /></NavLink>
              <input placeholder={`What's on your mind, ${profile?.firstName}?`} className='post-input py-2 ps-3 pe-5 w-100 ' style={{ borderRadius: "25px", border: "1px solid", background: "#ededed", borderColor: "#ededed" }} onClick={() => setModalShow(true)} />

              <PostModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

            </div><hr></hr>
            <div className='d-flex w-100 justify-content-between post-button-con overflow-hidden'>
              <button className='w-100'>
                <input type="file" id="file" />
                <label htmlFor="file"><VideoCallIcon className='text-danger' /> <span> Live video</span></label>
              </button>
              <button className='w-100'>
                <input type="file" id="file" />
                <label htmlFor="file"><InsertPhotoIcon className='text-success' /> <span> Photo/video</span></label>
              </button>
              <button className='w-100'>
                <input type="file" id="file" />
                <label htmlFor="file"><EmojiEmotionsIcon className='text-warning' /> <span> Feeling/activiy</span></label>
              </button>

            </div>
          </div>
          <div></div>
        </Card>
      </RightLazyshow>
      {/* --------------psots---------------------- */}
      <LeftLazyshow>
        {posts && posts.map((item, key) => {
          return <Card className='mt-3 py-2' key={item._id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader={item?.createdAt.slice(0, 16)}
            />
            <p className={item.description == 'null' ? 'd-none':'px-4'}>{item.description}</p>
            <CardMedia
              component="img"
              height="auto"
              style={{ maxHeight: "350px" }}
              image={item.image}
              className={item.image === 'null' ? 'd-none':'d-block'}
              alt={item.image === 'null' ? 'Paella dish':''}
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
        })}

      </LeftLazyshow>

    </>
  );
}

export default MainPost


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

