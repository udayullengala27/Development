import { useState, useEffect } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import TableOfferLogs from "../tables/data-tables/basic/TableOfferLogs"
import offers from "./data.json"
import { useNavigate } from 'react-router-dom'

import apiData from "@src/@core/auth/api/api.json"

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

    fetch(apiData.api_link, {
      method: "POST",
      headers: {
        Authorization: apiData.auth_key,
        "Api-key": apiData.api_key
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
    fetch(apiData.api_link, {
      method: "GET",
      headers: {
        Authorization: apiData.auth_key,
        "Api-key": apiData.api_key
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