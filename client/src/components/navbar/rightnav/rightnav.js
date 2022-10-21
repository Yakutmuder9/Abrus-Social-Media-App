import { FaBell, FaBullhorn, FaUsersCog, FaSearch } from 'react-icons/fa'
import { FcVideoCall } from 'react-icons/fc'
import { FiMoreHorizontal } from 'react-icons/fi'
import Card from '@mui/material/Card';

const Rightnav = () => {
    return (
        <div className='d-none d-xl-block' >
            <h4>Sponsored</h4>
            
            <Card >
            <div className="row g-0">
                    <div className="col-md-4 d-flex  ">
                        <img src="https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?k=20&m=1279104620&s=612x612&w=0&h=Lit4OzCRPW6Z5Pq1L4b9ZjUJvx6McLJySTLnUjJsECE=" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 py-3 ps-2">
                        <div className="card-body">
                            <h6 className="card-title">Post job for free</h6>
                            <p className="card-text">This is a wider card with supporting text ....</p>

                        </div>
                    </div>
                </div>
            </Card>
            <Card className="mt-2" >
                <div className="row g-0">
                    <div className="col-md-4 d-flex  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ztdZ0xlqZXfh8MvGQfApwUqJph-o-LmqzMjLkPKcslITxLcttR19Z54lIPl8dxeSDVQ&usqp=CAU" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8  py-3 ps-2">
                        <div className="card-body">
                            <h6 className="card-title">Post job for free</h6>
                            <p className="card-text">This is a wider card with supporting text ....</p>

                        </div>
                    </div>
                </div>
            </Card> 
            



            <h5 className='mt-2'>Your Pages and profiles</h5>
            <div className="right-item w-100 d-flex align-items-center">
                <img src="https://hwencc.gallerycdn.vsassets.io/extensions/hwencc/html-tag-wrapper/0.2.3/1505878793186/Microsoft.VisualStudio.Services.Icons.Default" alt=''  style={{ height: "40px", width: "40px" }} className="rounded-circle border border-secondary me-3" />
                <h6>Habshi</h6>
            </div>
            <div className="w-100 ">
                <div className="right-item d-flex align-items-center ms-3 mt-3">
                    <FaBell style={{ height: "25px", width: "25px" }} className="me-1" />
                    <p>notification</p>
                </div>
                <div className="right-item d-flex align-items-center ms-3 mt-1">
                    <FaUsersCog style={{ height: "25px", width: "25px" }} className="me-1" />
                    <p>Switch in to page</p>
                </div>
                <div className="right-item d-flex align-items-center ms-3 mt-1">
                    <FaBullhorn style={{ height: "25px", width: "25px" }} className="me-1" />
                    <p>Create promotion</p>
                </div>

            </div>

            <h5 className='mt-2'>Birthdays</h5>
            <div className="right-item w-100 d-flex align-items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvc4QxRAmpo5zhfKjsus5yOkxQ_KrlLQoxg&usqp=CAU"  alt=''  style={{ height: "40px", width: "40px" }} className="  me-3" />
                <p className='d-flex align-items-center'><span>Gach Kurmah</span>'s bithday is today!</p>
            </div>

            <div className='d-flex w-100 align-items-center justify-content-between'>
                <h5 className='mt-2'>Contacts</h5>
                <div><FcVideoCall /><FaSearch className='mx-3' /> <FiMoreHorizontal className='me-4' /></div>
            </div>


            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
                <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNkMZEAYz4lzgRN7GtlVs8rDeskLfza59Ug&usqp=CAU" alt=''  style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px" ,background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Ehlas Menur</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-TKjpL_AABZnd84lYNjVJ6Nb5NHPC4qYixgL6B_LgedjdFYoadGK6Moc1DfyXJug-hM&usqp=CAU" style={{ height: "33px", width: "33px" }} alt=''  className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
               
                <p className=''>Hidaya Habib</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" alt=''  style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Ahmed Shafo</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNkMZEAYz4lzgRN7GtlVs8rDeskLfza59Ug&usqp=CAU" style={{ height: "33px", width: "33px" }} alt=''  className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Gremew Fekadu</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg" alt=''  style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Yasmi Ynatwa lij</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" alt=''  style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Jone Doe</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQLMBeInALQAH6MapZcrrcSjgWcrcmgz5Pw&usqp=CAU" alt=''  style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                
                <p className=''>Kik Patic</p>
            </div>
            <div className="right-item w-100 d-flex  mt-2 " style={{ height: "30px" }}>
            <div className=''>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUadoslVZZhjj2zjGW8h8HK9DtHV3lETfHYh2ieOCAAgml0qrulXtBHb5-vegnObWXgo&usqp=CAU" style={{ height: "33px", width: "33px" }} className=" me-3 rounded-circle border" /> 
                   <span className=' position-absolute rounded-circle' alt=''  style={{ height: "12px", width: "12px" , marginLeft:"-28px",background:"#7cbf59"}}></span>
                </div>
                <p className=''>Aman Blay</p>
            </div>
            <h5 className='mt-4'>Group conversations</h5>
            <div className='' style={{ height: "80px" }}></div>
        </div>
    )
}

export default Rightnav;
