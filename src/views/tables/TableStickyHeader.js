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
import Chip from '@mui/material/Chip'

const columns = [
  { id: 'image', label: 'Foto', minWidth: 80, align: 'left' },
  { id: 'name', label: 'Nama', minWidth: 200, align: 'left' },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'left',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'phone_number',
    label: 'No.Telp',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 250,
    align: 'center'
  }
]

const getColorForRole = role => {
  if (role === 'Admin') {
    return 'red'
  } else if (role === 'User') {
    return 'salmon'
  } else if (role === 'BE') {
    return 'gold'
  }

  return 'gray'
}

function createData(image, name, email, phone_number, role, action) {
  return { image, name, email, phone_number, role, action }
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
      <ButtonStyled component='label' color='success' size='small' variant='contained' htmlFor='edit-user-acount'>
        Edit
      </ButtonStyled>
      <ButtonStyled component='label' color='error' size='small' variant='contained' htmlFor='block-user-acount'>
        Block
      </ButtonStyled>
    </Box>
  )
}

const rows = [
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'User', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'BE', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'BE', <ActionButton />),
  createData('IMAGE', 'M.Yudhsitia Rahman', 'Yudhistia110@gmail.com', '0898119443', 'Admin', <ActionButton />)
]

const TableStickyHeader = () => {
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
                      column.id === 'role' ? (
                        <Chip
                          label={row[column.id]}
                          sx={{ backgroundColor: getColorForRole(row[column.id]), color: 'white' }}
                        />
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

export default TableStickyHeader
