// ** React Imports
import { Fragment, useState } from 'react'


// ** Table Columns
import { multiLing } from '../data'
// import { TableResponsive } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Input, Row, Col } from 'reactstrap'

export const data = [{age: "63", avatar: "1.jpg", city: "Hinigaran", subcategory: "Audio/Video Consultation", experience: "3 Years", name: "Main Test", id: 1, category: "Online Vet Consultation", responsive_id: "", start_date: "feb 17,2023", end_date:"feb 28,2023", sponser_count:"4", publish:"", activate:"", retail_price: "200", status: 2}]

const TableRewardOffer = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])


  // ** Hooks
  const { t } = useTranslation()

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

   // ** Function to handle filter
   const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.category.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subcategory.toLowerCase().startsWith(value.toLowerCase()) ||
          item.retail_price.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.end_date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.sponser_count.toLowerCase().startsWith(value.toLowerCase()) ||
          item.publish.toLowerCase().startsWith(value.toLowerCase()) ||
          item.end_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase()) ||
          item.subcategory.toLowerCase().includes(value.toLowerCase()) ||
          item.retail_price.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          item.end_date.toLowerCase().includes(value.toLowerCase()) ||
          item.sponser_count.toLowerCase().includes(value.toLowerCase()) ||
          item.publish.toLowerCase().includes(value.toLowerCase()) ||
          item.activate.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>{t('Prev')}</span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>{t('Next')}</span>
      </Fragment>
    )
  }

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate pagination-sm justify-content-end pe-1 mt-1'}
    />
  )

  return (
    <Card style={{color: "red"}}>
      <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-center mt-1' md='4' sm='12'>
          <h4>Rewards Offer Dashboard</h4>
        </Col>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='4' sm='12'>
          <a className='btn btn-primary'>
            {t('Search')}
          </a>
          <Input
            className='dataTable-filter form-control ms-1'
            style={{ width: `180px`, height: `2.714rem` }}
            type='text'
            bsSize='sm'
            id='search-input-1'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
      <div className='react-dataTable'>
        { data ? <DataTable
          pagination
        //   selectableRowsNoSelectAll
          columns={multiLing}
        // columns={TableResponsive}
          className='react-dataTable table'
          paginationPerPage={7}
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
        /> : <div className="text-center"> <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></div>  }
        
      </div>
    </Card>
  )
}

export default TableRewardOffer
