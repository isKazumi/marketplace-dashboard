import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

function createData(bannerImg, status, action) {
  return { bannerImg, status, action }
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
        Hapus
      </ButtonStyled>
    </Box>
  )
}

const rows = [
  createData(
    'https://cdn1.vectorstock.com/i/1000x1000/32/40/sale-banner-for-online-shopping-with-discount-vector-17023240.jpg',
    'Active',
    <ActionButton />
  ),
  createData(
    'https://static.wixstatic.com/media/3a2ea9_bb335500d5164f9cb969d460bfb2eddd~mv2.jpg/v1/fill/w_468,h_482,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/emily%20logo_edited.jpg',
    'Active',
    <ActionButton />
  ),
  createData('https://www.geeky-gadgets.com/wp-content/uploads/2022/10/Creality.webp', 'Active', <ActionButton />),
  createData('https://www.informalnewz.com/wp-content/uploads/2022/11/Meesho-launches.jpg', 'Active', <ActionButton />),
  createData(
    'https://www.ozdiscountstore.com.au/cdn/shop/files/10-compressed_Jan_2021_2x.jpg',
    'Active',
    <ActionButton />
  )
]

export default function TableBanner() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Banner Image</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.bannerImg} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <img alt='banner image' style={{ maxHeight: 150, maxWidth: 150 }} src={row.bannerImg} />
              </TableCell>
              <TableCell align='right'>{row.status}</TableCell>
              <TableCell align='center'>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
