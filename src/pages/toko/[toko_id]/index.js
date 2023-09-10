// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import Package from 'mdi-material-ui/PackageVariantClosed'
import StoreEdit from 'mdi-material-ui/StoreEdit'
import CreditCard from 'mdi-material-ui/CreditCardMultiple'

// ** Demo Tabs Imports
import TableBarang from 'src/views/tables/TableBarang'
import TabToko from 'src/views/account-settings/TabToko'
import TambahBarangModal from 'src/views/modal/TambahBarangModal'
import TableTransaksi from 'src/views/tables/TableTransaksi'
import { CardHeader } from '@mui/material'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const ManajementToko = () => {
  // ** State
  const [value, setValue] = useState('profiletoko')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='store-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='profiletoko'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StoreEdit />
                <TabName>Profil Toko</TabName>
              </Box>
            }
          />
          <Tab
            value='barang'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Package />
                <TabName>Barang</TabName>
              </Box>
            }
          />
          <Tab
            value='transaksi'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CreditCard />
                <TabName>Transaksi</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='profiletoko'>
          <TabToko />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='barang'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginY: 6,
              marginX: 3,
              gap: 3
            }}
          >
            <TambahBarangModal />
            <TextField
              size='small'
              placeholder='Cari Barang'
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Magnify fontSize='small' />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <TableBarang />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='transaksi'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginY: 6,
              marginX: 3,
              gap: 3
            }}
          >
            <TextField
              size='small'
              placeholder='Cari Transaksi'
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Magnify fontSize='small' />
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <TableTransaksi />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default ManajementToko
