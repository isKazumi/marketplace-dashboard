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
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import Chat from 'mdi-material-ui/ChatProcessingOutline'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 200
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 65
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

const chatListStyle = {
  borderBottom: 1,
  marginTop: 2,
  height: 80,
  width: '100%',
  px: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start'
}

const contact = []

const chat = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    nama: 'Syahli',
    pesan: 'Selamat anda mendapatkan hadiah....'
  }
]

const ChatBox = () => {
  // ** State
  const [value, setValue] = useState('chat')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card
      sx={{
        position: 'absolute',
        right: 65,
        boxShadow: '20',
        borderRadius: 2,
        bottom: 0,
        height: 400,
        width: 300
      }}
    >
      <TabContext value={value}>
        <TabList onChange={handleChange} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
          <Tab
            value='contact'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Contact</TabName>
              </Box>
            }
          />
          <Tab
            value='chat'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Chat />
                <TabName>Chat</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='contact'>
          <Grid container sx={{ overflowY: 'scroll', height: 400 }}>
            {chat.map((value, key) => (
              <Grid key={key} item sx={chatListStyle}>
                <Box sx={{ marginRight: 2 }}>
                  <img
                    src={value.img}
                    alt='profile'
                    style={{ width: 50, height: 50, objectFit: 'initial', borderRadius: '50%' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='subtitle1'>{value.nama}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='chat'>
          <Grid container sx={{ overflowY: 'scroll', height: 400 }}>
            {chat.map((value, key) => (
              <Grid key={key} item sx={chatListStyle}>
                <Box sx={{ marginRight: 2 }}>
                  <img
                    src={value.img}
                    alt='profile'
                    style={{ width: 50, height: 50, objectFit: 'initial', borderRadius: '50%' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='subtitle1'>{value.nama}</Typography>
                  <Typography variant='caption'>{value.pesan}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default ChatBox
