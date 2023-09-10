import { useRouter } from 'next/router'
import { useState } from 'react'
import Box from '@mui/material/Box'
import IconDelete from 'mdi-material-ui/Delete'
import IconEdit from 'mdi-material-ui/CircleEditOutline'
import IconButton from '@mui/material/IconButton'

const CardToko = () => {
  const [toko, setToko] = useState(['Toko mama Ei', 'Toko mama Udin', 'Toko abah sahli'])
  const router = useRouter()

  const handleDelete = id => {
    const updatedToko = toko.filter((_, index) => index !== id)
    setToko(updatedToko)
  }

  return (
    <>
      {toko.map((_, idx) => (
        <Box key={idx} sx={{ position: 'relative', margin: 2 }}>
          <img
            alt='TokoProfile'
            onClick={() => router.replace(`/toko/${idx}`)}
            style={{ maxWidth: 220, maxHeight: 220, borderRadius: 10, cursor: 'pointer' }}
            src='https://pbs.twimg.com/profile_images/1622969509572395011/IA0fZH5J_400x400.png'
            loading='lazy'
          />
          <Box sx={{ position: 'absolute', zIndex: 10, top: 0, right: 0, margin: 2 }}>
            <IconButton aria-label='edit' color='success' size='small'>
              <IconEdit fontSize='small' />
            </IconButton>
            <IconButton aria-label='delete' onClick={() => handleDelete(idx)} color='error' size='small'>
              <IconDelete fontSize='small' />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default CardToko
