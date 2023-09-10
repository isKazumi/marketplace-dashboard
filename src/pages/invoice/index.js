import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TableInvoice from 'src/views/tables/TableInvoice'

const Invoice = () => {
  return (
    <Card>
      <CardHeader title='Invoice' titleTypographyProps={{ variant: 'h3' }} />
      <TableInvoice />
    </Card>
  )
}

export default Invoice
