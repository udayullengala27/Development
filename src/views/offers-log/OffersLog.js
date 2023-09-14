import { useState, useEffect } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import TableOfferLogs from "../tables/data-tables/basic/TableOfferLogs"
import offers from "./data.json"
import { useNavigate } from 'react-router-dom'

const OffersLog = () => {
  const [offersList, setOffersList] = useState({})
  const [deleteOffer, setDeleteOffer] = useState(false)
  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`/merchant/referral-offers-edit/${id}`)
  }

  const handleDelete = (id) => {
    const form_data = new FormData()
    form_data.append('offer_id', id)
    form_data.append('action', "DELETE")

    fetch(`https://api.xircles.in/referral/referralpoints/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NzAwNzE5LCJpYXQiOjE2OTQ2NzA3MTksImp0aSI6ImM1NzA1NmI5ODQxOTQzZTE5YTg3YzUxYTRjMjBmMWIwIiwidXNlcl9pZCI6MTg3MTc2fQ.mJN0H5KzuCQnna6ZIX4NovPVs7tfhR5DI5QpvjNQXi0",
        "Api-key": "Fv14sMRkz8uYqd3VMbKy5U+7h6QE4Rcb7MeG1d/PoXU="
      },
      body: form_data
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok')
        }
        return resp.json()
      })
      .then((data) => {
        console.log("offerlist", data)
        setDeleteOffer(!deleteOffer)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    // setOffersList(offers)
    setDeleteOffer(false)
    fetch(`https://api.xircles.in/referral/get_offers/`, {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NzAwNzE5LCJpYXQiOjE2OTQ2NzA3MTksImp0aSI6ImM1NzA1NmI5ODQxOTQzZTE5YTg3YzUxYTRjMjBmMWIwIiwidXNlcl9pZCI6MTg3MTc2fQ.mJN0H5KzuCQnna6ZIX4NovPVs7tfhR5DI5QpvjNQXi0",
        "Api-key": "Fv14sMRkz8uYqd3VMbKy5U+7h6QE4Rcb7MeG1d/PoXU="
      }
    })
      .then((resp) => {
        if (!resp.ok) {
          setOffersList(offers)
          throw new Error('Network response was not ok')
        }
        return resp.json()
      })
      .then((data) => {
        setOffersList(data)
        // console.log("offerlist", data, list)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [deleteOffer])

  // console.log(offersList)

  return (
    <>
      <Card>
        <CardBody>
          <h3>Offers List</h3>
        </CardBody>
      </Card>

      <button type="button" className='btn btn-primary fs-4 mb-2' onClick={() => navigate("/merchant/referral-offers")}>+ Create</button>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <TableOfferLogs offers={offersList} handleEdit={handleEdit} handleDelete={handleDelete} />
            </CardBody>
          </Card>
        </Col>

      </Row>
    </>
  )
}

export default OffersLog

// https://api.xircles.in/referral/get_offers/