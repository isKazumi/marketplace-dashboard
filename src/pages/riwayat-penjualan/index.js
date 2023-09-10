import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import Info from 'mdi-material-ui/InformationOutline'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'

//** Table
import TableRiwayatPenjualan from 'src/views/tables/TableRiwayatPenjualan'

const RiwayatPenjualan = () => {
  return (
    <Card>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardHeader title='Riwayat Penjualan' component='h2' />
        <Tooltip title='Riwayat Penjualan dari semua toko seller' arrow>
          <IconButton size='small'>
            <Info />
          </IconButton>
        </Tooltip>
      </Box>
      <TableRiwayatPenjualan />
    </Card>
  )
}

export default RiwayatPenjualan
