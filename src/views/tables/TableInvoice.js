// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  { id: 'transaction_id', label: 'Id Transaksi', minWidth: 50, align: 'left' },
  { id: 'no_invoice', label: 'No Invoice', minWidth: 150, align: 'left' },
  {
    id: 'bank',
    label: 'Bank',
    minWidth: 150,
    align: 'left'
  },
  {
    id: 'image',
    label: 'Gambar',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'payment_total',
    label: 'Total Pembayaran',
    minWidth: 100,
    align: 'left'
  }
]

function createData(transaction_id, no_invoice, bank, image, payment_total) {
  return { transaction_id, no_invoice, bank, image, payment_total }
}

const rows = [
  createData('TRX001', 'INV2023001', 'BCA', 'IMAGE', 'Rp.150000'),
  createData('TRX002', 'INV2023002', 'BRI', 'IMAGE', 'Rp.230000'),
  createData('TRX003', 'INV2023003', 'Mandiri', 'IMAGE', 'Rp.800000')
]

const TableInvoice = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = newPage => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableInvoice
