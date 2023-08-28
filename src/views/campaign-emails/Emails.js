import {useState} from 'react'
import { useNavigate} from "react-router-dom"
import { Card, CardBody } from 'reactstrap'

const Emails = () => {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')

    const handleFullNameChange = (event) => {
        setFullName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('Full Name:', fullName)
        // console.log('Email:', email)
        setFullName('')
        setEmail('')
        navigate("/merchant/email-verify")
    }

    
      return (
        <div className=' d-flex justify-content-center '>
            <Card className=' w-75'>
                <CardBody className='d-flex flex-column align-items-center '>
                    <h3 className='text-center mb-2'>Welcome! Let’s get started.</h3>
                    <div className=" w-75 d-flex justify-content-between my-2">
                        <h4>Email Setup</h4>
                        <a href='#'>Skip</a>
                    </div>
                    <h4 className='text-center'>Add your sender information</h4>
                    <p className='text-center mb-2'>Choose the sender name and email address appears in your subscribes inbox</p>
                    <form className='w-50 d-flex flex-column align-items-center' onSubmit={handleSubmit}     >
                        <div className="mb-3 w-100">
                        <label htmlFor="fullName" className="form-label">
                            Sender name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullNameChange}
                            required
                        />
                        </div>
                        <div className="mb-3 w-100">
                        <label htmlFor="email" className="form-label">
                            Sender email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Continue
                        </button>
                    </form>
                   
                </CardBody>
            </Card>
        </div>
      )

//   return (
//     <div className=' d-flex justify-content-center '>
//         <Card className=' w-75'>
//             <CardBody className='d-flex flex-column align-items-center '>
//                 <h3 className='text-center mb-2'>Welcome! Let’s get started.</h3>
//                 <div className=" w-75 d-flex justify-content-between my-2">
//                     <h4>Email Setup</h4>
//                     <a href='#'>Skip</a>
//                 </div>
//                 <h4 className='text-center'>Add your sender information</h4>
//                 <p className='text-center mb-2'>Choose the sender name and email address appears in your subscribes inbox</p>
//                 <form className='w-50 d-flex flex-column align-items-center' >
//                     <div className="mb-3 w-100">
//                     <label htmlFor="fullName" className="form-label">
//                         Sender name
//                     </label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="fullName"
//                         value={fullName}
//                         onChange={handleFullNameChange}
//                         required
//                     />
//                     </div>
//                     <div className="mb-3 w-100">
//                     <label htmlFor="email" className="form-label">
//                         Sender email address
//                     </label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                     />
//                     </div>
//                     <button type="button" className="btn btn-primary" onClick={handleSubmit} data-toggle="modal" data-target="#exampleModal">
//                         Continue
//                     </button>

//                      {/* <!-- Modal --> */}
//                     <div className={`modal fade mt-2  ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
//                         <div className="modal-dialog modal-dialog-centered" role="document">
//                             <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                                 <button type="button" onClick={handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body d-flex justify-content-center align-items-center">
//                             <Card className=''>
//                                 <CardBody className=' d-flex flex-column align-items-center '>
//                                     <Mail size={200}/>
//                                     <h3 className=' fw-bolder '>Check your email</h3>
//                                     <p className='mb-0'>To start using Klavivyo, activate your account with the link sent to lan@pizpub.ye  </p>
//                                     <hr className='bg-dark w-75 opacity-25 '/>
//                                     <p> <a href='#'><AiOutlineDown/></a> Didn't receive an email? </p>
//                                 </CardBody>
//                             </Card>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal} data-dismiss="modal">Close</button>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
               
//             </CardBody>
//         </Card>
//     </div>
//   )
}

export default Emails