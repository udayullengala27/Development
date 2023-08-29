import { MdOutlineVerified } from 'react-icons/md' //verified icon
import { HiOutlineLightBulb } from 'react-icons/hi' //lightbulb icon
import { CgLaptop } from 'react-icons/cg' //laptop icon
import { Row, Col, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const StatsCard = () => {
    const data = [
        {
            title: 'Hours Spent',
            subtitle: '34h',
            color: 'light-primary',
            icon: <CgLaptop size={24} />
        },
        {
            title: 'Test Result',
            subtitle: '82%',
            color: 'light-info',
            icon: <HiOutlineLightBulb size={24} />
        },
        {
            title: 'Course Complete',
            subtitle: '14',
            color: 'light-warning',
            icon: <MdOutlineVerified size={24} />
        }
    ]
    return (
        <>
            <Row>
                {
                    data.map((currElem) => {
                        return (
                            <>
                            <Col xs={4}>
                                <div class="media d-flex">
                                    <Avatar color={currElem.color} icon={currElem.icon} className='me-1' style={{borderRadius:"0" }}/>
                                    <div className='my-auto'>
                                        <h6 className='fw-medium' style={{marginBottom:"6px"}}>{currElem.title}</h6>
                                        <CardText className= 'fw-bold' color={currElem.color} style={{fontSize:"20px"}}>{currElem.subtitle}</CardText>
                                    </div>
                                </div>
                            </Col>
                            </>

                        )
                    })

                }

            </Row>
        </>
    )
}
export default StatsCard