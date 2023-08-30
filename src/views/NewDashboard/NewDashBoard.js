
import { Col, Row, Card, CardBody } from 'reactstrap'
import DataTableWithButtons from '../tables/data-tables/basic/TableMultilingual'
import StatsCard from '../ui-element/Static'
import {User, BarChart2, RefreshCcw} from 'react-feather'

const Leads = () => {
    
  return (
    <>
       
          
                <h4>Dashboard</h4>
            
      
        <Row>
        <Col sm={12} md={6} xl={4}>
                <Card style={{height:"22vh", background:"#f8f8f8"}}>
                    <CardBody>
                        <div className='card-contend'>
                        <div className=''>
                            <User style={{fontWeight:"600"}}/>
                            </div>
                        <p className='fs-5 mt-1' style={{fontWeight:"600"}}>New Accounts Created</p>
                            <div className='section-4-card-2 d-flex justify-content-between'>
                                <div className='section-4-card-1-heading' style={{width:"50%", marginTop:"2vh"}}>
                                  <hr style={{height:'2px'}}></hr>
                                   </div> 
                                    <h4 style={{fontWeight:"400", marginTop:"1vh"}}>0</h4>
                                
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={12} md={6} xl={4}>
                <Card style={{height:"22vh", background:"#f8f8f8"}}>
                    <CardBody>
                        <div className='card-contend'>
                        <div className=''>
                        <BarChart2 style={{fontWeight:"600"}}/>
                            
                            </div>
                        <p className='fs-5 mt-1' style={{fontWeight:"600"}}>Revenue Generation from</p>
                            <div className='section-4-card-2 d-flex justify-content-between'>
                                <div className='section-4-card-1-heading' style={{width:"50%", marginTop:"2vh"}}>
                                  <hr style={{height:'2px'}}></hr>
                                   </div> 
                                    <h4 style={{fontWeight:"400", marginTop:"1vh"}}>0</h4>
                                
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={12} md={6} xl={4}>
                <Card style={{height:"22vh", background:"#f8f8f8"}}>
                    <CardBody>
                        <div className='card-contend'>
                        <div className=''>
                        <RefreshCcw style={{fontWeight:"600"}}/>
                          
                            </div>
                        <p className='fs-5 mt-1' style={{fontWeight:"600"}}>Registered Customers</p>
                            <div className='section-4-card-2 d-flex justify-content-between'>
                                <div className='section-4-card-1-heading' style={{width:"50%", marginTop:"2vh"}}>
                                  <hr style={{height:'2px'}}></hr>
                                   </div> 
                                    <h4 style={{fontWeight:"400", marginTop:"1vh"}}>0</h4>
                                
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>  
            </Row>
        
    </>
  )
}

export default Leads 