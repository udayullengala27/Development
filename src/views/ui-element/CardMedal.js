import React from 'react'
import { CardText, Card, CardBody } from 'reactstrap'
import medal from '@src/assets/images/dashboard/badge.svg'

const CardMedal = () => {
  return (
    <>
        <Card>
            <CardBody>
                <h5>Congratulations 🎉 <span id="outletUserName"></span>!</h5>
                <CardText className='font-small-3'>Value rewarded to your customers</CardText>
                <h3 class="mb-75 mt-2 pt-50">
                    <a href='/' onClick={e => e.preventDefault()}>
                        $48.9k
                    </a>
                </h3>
                <img className='congratulation-medal' src={medal} alt='Medal Pic' />
            </CardBody>
        </Card>   
    </>
  )
}

export default CardMedal