// ** MUI-material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// ** MUI Icons
import Magnify from 'mdi-material-ui/Magnify'

//** Demo Componets
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const UserList = () => {
  return (
    <Grid xs={12}>
      <Card>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'hidden',
            marginRight: 4,
            paddingY: 5
          }}
        >
          <CardHeader title='List User' titleTypographyProps={{ variant: 'h2' }} />
          <TextField
            size='small'
            placeholder='Cari user'
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
        <TableStickyHeader />
      </Card>
    </Grid>
  )
}

export default UserList
