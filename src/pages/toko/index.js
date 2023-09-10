// ** MUI Component
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import TambahTokoModal from 'src/views/modal/TambahTokoModal'
import CardToko from 'src/views/cards/CardToko'

const MenuToko = () => {
  return (
    <Card xs={12}>
      <CardHeader title='Manajemen Toko' />
      <Box
        sx={{
          display: 'flex',
          margin: 2,
          justifyContent: 'start',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <CardToko />
        <TambahTokoModal />
      </Box>
    </Card>
  )
}

export default MenuToko
