// ** Reactstrap Imports
import { Table } from 'reactstrap'

const data = [
  { id: 1, offerName: 'Offer 1', redeemPoints: 100, revenueEarned: '$50' },
  { id: 2, offerName: 'Offer 2', redeemPoints: 200, revenueEarned: '$100' },
  { id: 3, offerName: 'Offer 3', redeemPoints: 150, revenueEarned: '$75' }
  // Add more data as needed
]

const TableResponsive = () => {
  return (
    <Table >
      <thead>
        <tr>
          <th className='text-center'>SR. NO</th>
          <th className='text-center'>OFFER NAME</th>
          <th className='text-center'>REDEEM POINTS</th>
          <th className='text-center'>REVENUE EARNED</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td className='text-center'>{index + 1}</td>
            <td className='text-center'>{row.offerName}</td>
            <td className='text-center'>{row.redeemPoints}</td>
            <td className='text-center'>{row.revenueEarned}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableResponsive