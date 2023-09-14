// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Input, Row, Col } from 'reactstrap'

const TableOfferLogs = (props) => {
    const { offers, handleEdit, handleDelete } = props
    console.log("table offer logs", offers)
    const offersLogColumns = [
        {
            name: 'Sr. No.',
            width: "80px",
            selector: row => row.sr_no
        },
        {
            name: 'referrer value',
            // width: '150px',
            selector: row => row.referrer_value
        },
        {
            name: 'referrer type',
            // width: '150px',
            selector: row => row.referrer_type
        },
        {
            name: 'referrer minimum',
            // width: '150px',
            selector: row => row.referrer_minimum
        },

        {
            name: 'referree value',
            // width: '150px',
            selector: row => row.referree_value
        },
        {
            name: 'referree type',
            // width: '150px',
            selector: row => row.referree_type
        },
        {
            name: 'referree minimum',
            // width: '150px',
            selector: row => row.referree_minimum
        },
        {
            name: 'active',
            // width: '150px',
            selector: row => row.is_active
        },
        {
            name: 'Actions',
            minWidth: '200px',
            cell: (row) => (
                <div className='w-100 d-flex justify-content-start gap-2'>
                    <button
                        onClick={() => handleEdit(row.id)} // Call your edit function here
                        className="btn btn-primary btn-sm mr-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(row.id)} // Call your delete function here
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ]

    const data = []
    offers?.data?.map((ele, index) => (
        data.push({
            sr_no: index + 1,
            id: ele.id,
            referrer_value: ele.referrer_value,
            referrer_type: ele.referrer_type,
            referrer_minimum: ele.referrer_minimum,
            referree_value: ele.referree_value,
            referree_type: ele.referree_type,
            referree_minimum: ele.referree_minimum,
            is_active: String(ele.is_active)
        })
    ))
    return (
        <Card>
            <div className='react-dataTable'>
                {data ? <DataTable
                    width="100%"
                    colWidths={100}
                    columns={offersLogColumns}
                    className='react-dataTable table'
                    sortIcon={<ChevronDown size={10} />}
                    data={data}
                /> : <div className="text-center"> <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div></div>}

            </div>
        </Card>
    )
}

export default TableOfferLogs
