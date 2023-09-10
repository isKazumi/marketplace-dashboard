import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Plus from 'mdi-material-ui/Plus'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 4
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: 250,
  objectFit: 'contain',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const TambahTokoModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='outlined'
        startIcon={<Plus />}
        sx={{
          width: 220,
          height: 220,
          margin: 2,
          borderRadius: 2
        }}
      >
        <Typography variant='h6'>Tambah</Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Tambah Toko
          </Typography>
          <ImgStyled src={imgSrc} alt='Store Pic' />
          <ButtonStyled component='label' variant='outlined' htmlFor='toko-img'>
            Tambahkan Foto
            <input hidden type='file' onChange={onChange} accept='image/png, image/jpeg' id='toko-img' />
          </ButtonStyled>
          <TextField label='Nama Toko' size='small' />

          <Box sx={{ display: 'flex', justifyContent: 'end', gap: 1 }}>
            <Button size='small' variant='outlined'>
              Simpan
            </Button>
            <Button onClick={handleClose} size='small' variant='outlined'>
              Batal
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default TambahTokoModal
