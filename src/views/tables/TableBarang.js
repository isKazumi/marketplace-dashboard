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
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const columns = [
  { id: 'id', label: 'No', minWidth: 80, align: 'left' },
  { id: 'images', label: 'Image', minWidth: 200, align: 'left' },
  { id: 'name', label: 'Nama', minWidth: 200, align: 'left' },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'left',
    format: value => value.toLocaleString('id-ID')
  },
  {
    id: 'stok',
    label: 'stok',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'weight',
    label: 'Berat',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'condition',
    label: 'Kondisi',
    minWidth: 250,
    align: 'center'
  },
  {
    id: 'description',
    label: 'Deskripsi',
    minWidth: 250,
    align: 'center'
  },
  {
    id: 'aksi',
    label: 'aksi',
    minWidth: 250,
    align: 'center'
  }
]

function createData(id, images, name, price, stock, weight, condition, description, aksi) {
  return { id, images, name, price, stock, weight, condition, description, aksi }
}

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ActionButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <ButtonStyled component='button' color='success' size='small' variant='contained' htmlFor='edit-product'>
        Ubah
      </ButtonStyled>
      <ButtonStyled component='button' color='error' size='small' variant='contained' htmlFor='dellet-product'>
        Hapus
      </ButtonStyled>
    </Box>
  )
}

const rows = [
  createData(
    '1',
    'image',
    'SUSU UHT',
    '12000',
    '30',
    '100gr',
    'Baru',
    'susu sapi pilihan dari belanda',
    <ActionButton />
  ),
  createData(
    '2',
    'image',
    'SUSU UHT',
    '12000',
    '30',
    '100gr',
    'Baru',
    'susu sapi pilihan dari belanda',
    <ActionButton />
  ),
  createData(
    '3',
    'image',
    'SUSU UHT',
    '12000',
    '30',
    '100gr',
    'Baru',
    'susu sapi pilihan dari belanda',
    <ActionButton />
  )
]

const TableBarang = () => {
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
              {columns.map(({ id, align, minWidth, label }) => (
                <TableCell key={id} align={align} sx={{ minWidth: minWidth }}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(({ id, align, format }) => {
                    const value = row[id]

                    return (
                      <TableCell key={id} align={align}>
                        {format && typeof value === 'number' ? format(value) : value}
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

export default TableBarang
