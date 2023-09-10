// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TableBanner from 'src/views/tables/TableBanner'
import BannerModal from 'src/views/modal/BannerModal'

const Banner = () => {
  return (
    <Card xs={12}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <CardHeader title='Banner' titleTypographyProps={{ variant: 'h1' }} />
        <BannerModal />
      </Box>
      <TableBanner />
    </Card>
  )
}

export default Banner
