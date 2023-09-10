import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const TambahBarangModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button size='small' variant='outlined' onClick={handleOpen}>
        Tambah Barang
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: 5 }} variant='h5' component='h2'>
            Tambah Barang
          </Typography>

          <Grid container xs={12} spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth required label='Nama Barang' size='small' defaultValue='Sabun mandi' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Harga' size='small' type='number' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Stock' size='small' type='number' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Berat' size='small' type='number' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Kondisi' size='small' type='text' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Deskripsi' size='small' type='text' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required size='medium' multiple type='file' />
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant='outlined'>
                Simpan
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant='outlined'>
                Batal
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default TambahBarangModal
