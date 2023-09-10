// ** React Imports
import { useState } from 'react'
import JasaKirim from 'src/views/pages/jasa-kirim'
import TableStatusPengiriman from 'src/views/tables/TableStatusPengiriman'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import ClockFast from 'mdi-material-ui/ClockFast'
import CubeSend from 'mdi-material-ui/CubeSend'

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

const ManajemenPengiriman = () => {
  // ** State
  const [value, setValue] = useState('status-pengiriman')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='status-pengiriman'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ClockFast />
                <TabName>Status Pengiriman</TabName>
              </Box>
            }
          />
          <Tab
            value='jasa-pengiriman'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CubeSend />
                <TabName>Jasa Pengiriman</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='status-pengiriman'>
          <TableStatusPengiriman />
        </TabPanel>
        <TabPanel sx={{ p: 0, minHeight: 800 }} value='jasa-pengiriman'>
          <JasaKirim />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default ManajemenPengiriman
