// ** React Imports
import { useState } from 'react'

// ** MUI component
import Box from '@mui/material/Box'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Chip from '@mui/material/Chip'

const columns = [
  { id: 'id', label: 'ID', minWidth: 50, align: 'left' },
  { id: 'nama_barang', label: 'Nama Barang', minWidth: 150, align: 'left' },
  {
    id: 'nama_pembeli',
    label: 'Nama Pembeli',
    minWidth: 150,
    align: 'left'
  },
  {
    id: 'alamat',
    label: 'Alamat',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'jumlah_pesanan',
    label: 'Jumlah Pesanan',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'total_harga',
    label: 'Total Harga',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center'
  }
]

const getColorStatus = status => {
  if (status === 'Pesanan Dibuat') {
    return 'info'
  } else if (status === 'Dikemas') {
    return 'warning'
  } else if (status === 'Dalam Pengiriman') {
    return 'primary'
  } else if (status === 'Terkirim') {
    return 'success'
  } else {
    return 'error'
  }
}

function createData(id, nama_barang, nama_pembeli, alamat, jumlah_pesanan, total_harga, status) {
  return { id, nama_barang, nama_pembeli, alamat, jumlah_pesanan, total_harga, status }
}

const rows = [
  createData('1', 'Baju Navy', 'Roni', 'Jl.Kelayan A', '2', 'Rp.100.000', 'Dikemas'),
  createData('2', 'Celana Navy', 'Budi', 'Jl.Kelayan B', '2', 'Rp.100.000', 'Dikemas'),
  createData('3', 'Topi Navy', 'Sahrul', 'Jl.Alalak', '2', 'Rp.100.000', 'Dalam Pengiriman'),
  createData(
    '4',
    'Tas Navy',
    'Dinda',
    'Jl.Tembuas Mantuil Komplek Warga Indah VII Blok D No.288',
    '2',
    'Rp.100.000',
    'Dalam Pengiriman'
  ),
  createData('5', 'Jam Navy', 'Irma', 'Jl.Pamurus Dalam', '2', 'Rp.100.000', 'Terkirim'),
  createData('6', 'Jam Tangan', 'Midun', 'Jl.Pamurus', '1', 'Rp.100.000', 'Dibatalkan'),
  createData('5', 'Jam Navy', 'Irma', 'Jl.Pamurus Dalam', '2', 'Rp.100.000', 'Terkirim'),
  createData('7', 'Cincin Navy', 'Saipul', 'Jl.Adiyaksa', '2', 'Rp.100.000', 'Terkirim'),
  createData('8', 'Kalung Navy', 'Doni', 'Jl.Pekapuran', '2', 'Rp.100.000', 'Dikemas'),
  createData('9', 'Jaket Navy', 'Junet', 'Jl.Banyiur Dalam', '2', 'Rp.100.000', 'Dalam Pengiriman'),
  createData('10', 'Sepatu Navy', 'Jane', 'Jl.HKSN', '2', 'Rp.100.000', 'Dikemas'),
  createData('11', 'Gelang Navy', 'Muna', 'Jl.Alalak', '2', 'Rp.100.000', 'Pesanan Dibuat')
]

const TableStatusPengiriman = () => {
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
                    const value =
                      column.id === 'status' ? (
                        <Chip label={row[column.id]} color={getColorStatus(row[column.id])} />
                      ) : (
                        row[column.id]
                      )

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

export default TableStatusPengiriman
