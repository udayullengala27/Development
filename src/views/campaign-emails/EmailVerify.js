import { Card, CardBody } from 'reactstrap'
import { AiOutlineDown } from "react-icons/ai"
import { Mail} from "react-feather"

const EmailVerify = () => {

  return (
    <div className=' d-flex justify-content-center align-items-center '>
        <Card className=' w-75 '>
            <CardBody className=' d-flex flex-column align-items-center '>
                <Mail size={200}/>
                <h3 className=' fw-bolder '>Check your email</h3>
                <p className='mb-0'>To start using Klavivyo, activate your account with the link sent to </p>
                <p>lan@pizpub.ye</p>
                <hr className='bg-dark w-75 opacity-25 '/>
                <p> <a href='#'><AiOutlineDown/></a> Didn't receive an email? </p>
            </CardBody>
        </Card>
    </div>
  )
}

export default EmailVerify