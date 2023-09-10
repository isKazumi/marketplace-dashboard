import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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

export default function BannerModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen} sx={{ marginRight: 3 }}>
        Tambah Banner
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Tambah Banner
            </Typography>
            <Box id='transition-modal-body' sx={{ mt: 2 }}>
              <form>
                <InputLabel>Pilih Gambar</InputLabel>
                <input type='file' accept='image/png, image/jpeg' />
                <FormControl sx={{ marginTop: 4, minWidth: 120 }} size='small'>
                  <InputLabel id='demo-simple-select-label'>Status</InputLabel>
                  <Select id='demo-simple-select' label='Status'>
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Tidak Active</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </Box>
            <Box sx={{ marginTop: 3, display: 'flex', gap: 1, justifyContent: 'end' }}>
              <Button variant='outlined'>Simpan</Button>
              <Button onClick={handleClose} variant='outlined'>
                Batal
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
