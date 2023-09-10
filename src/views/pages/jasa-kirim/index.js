import { useState } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'

//** Icons
import ArrowDown from 'mdi-material-ui/ArrowDown'
import ArrowUp from 'mdi-material-ui/ChevronUp'

const jaskir = [
  {
    id: '1',
    provider: 'J&T Xpress',
    informasi: {
      keterangan:
        'J&T Express adalah jasa kirim dengan tipe layanan pengiriman Reguler untuk pengiriman ke seluruh Indonesia.',
      rule: [
        'Obat-obatan terlarang',
        'Uang koin/kertas',
        'Kartu ATM/kredit',
        'Barang yang mudah meledak/terbakar',
        'Senjata api',
        'Gas terkompresi',
        'Bahan pengoksidasi',
        'Zat beracun dan menular',
        'Bahan radioaktif/korosif',
        'Hewan hidup',
        'Barang berbahaya lainnya'
      ],
      maxs: '50kg',
      dimensi: '300x110x76cm',
      Kontak: '021-80661888 (Customer Service), atau jntcallcenter@jet.co.id (email).',
      situs: 'http://jet.co.id/',
      batasan: '50000kg'
    }
  },
  {
    id: '2',
    provider: 'Pengiriman Aman',
    informasi: {
      keterangan: 'Layanan Pengiriman Aman menyediakan pengiriman barang dengan keamanan dan kehati-hatian.',
      rule: ['Barang berharga', 'Elektronik', 'Dokumen penting'],
      maxs: '30kg',
      dimensi: '250x90x60cm',
      Kontak: '0856-1234-5678',
      situs: 'http://pengirimanaman.com/',
      batasan: '40000kg'
    }
  },
  {
    id: '3',
    provider: 'Express Cargo',
    informasi: {
      keterangan: 'Express Cargo adalah jasa kirim dengan fokus pada pengiriman cepat dan aman.',
      rule: ['Barang pecah belah', 'Bahan makanan', 'Produk cair'],
      maxs: '40kg',
      dimensi: '280x100x70cm',
      Kontak: '0888-9876-5432',
      situs: 'http://expresscargo.com/',
      batasan: '45000kg'
    }
  },
  {
    id: '4',
    provider: 'Fast Logistics',
    informasi: {
      keterangan: 'Fast Logistics adalah pilihan tepat untuk pengiriman barang dalam waktu singkat.',
      rule: ['Barang elektronik', 'Produk sensitif', 'Bahan kimia'],
      maxs: '25kg',
      dimensi: '220x85x55cm',
      Kontak: '0777-5432-1098',
      situs: 'http://fastlogistics.com/',
      batasan: '35000kg'
    }
  },
  {
    id: '5',
    provider: 'Reliable Shipping',
    informasi: {
      keterangan: 'Reliable Shipping adalah solusi pengiriman yang andal dan terpercaya.',
      rule: ['Bahan mudah terbakar', 'Barang beracun', 'Benda berharga'],
      maxs: '35kg',
      dimensi: '260x95x65cm',
      Kontak: '0999-4321-8765',
      situs: 'http://reliableshipping.com/',
      batasan: '48000kg'
    }
  },
  {
    id: '6',
    provider: 'Secure Transport',
    informasi: {
      keterangan: 'Secure Transport memberikan pengiriman dengan fokus pada keamanan dan kerahasiaan.',
      rule: ['Dokumen rahasia', 'Barang berharga', 'Produk farmasi'],
      maxs: '20kg',
      dimensi: '200x80x50cm',
      Kontak: '0666-7890-1234',
      situs: 'http://securetransport.com/',
      batasan: '30000kg'
    }
  },
  {
    id: '7',
    provider: 'Economy Express',
    informasi: {
      keterangan: 'Economy Express menawarkan pengiriman ekonomis dengan waktu pengiriman yang dapat diandalkan.',
      rule: ['Produk non-urgent', 'Bahan makanan', 'Produk konsumen'],
      maxs: '45kg',
      dimensi: '290x105x72cm',
      Kontak: '0555-6543-2109',
      situs: 'http://economyexpress.com/',
      batasan: '46000kg'
    }
  },
  {
    id: '8',
    provider: 'Safe Delivery',
    informasi: {
      keterangan: 'Safe Delivery adalah pilihan aman untuk pengiriman barang dengan perlindungan terbaik.',
      rule: ['Barang berharga', 'Produk sensitif', 'Dokumen penting'],
      maxs: '30kg',
      dimensi: '250x90x60cm',
      Kontak: '0444-5678-9012',
      situs: 'http://safedelivery.com/',
      batasan: '40000kg'
    }
  },
  {
    id: '9',
    provider: 'QuickShip',
    informasi: {
      keterangan: 'QuickShip mengutamakan pengiriman cepat dan efisien untuk memenuhi kebutuhan pelanggan.',
      rule: ['Barang pecah belah', 'Barang elektronik', 'Produk cair'],
      maxs: '35kg',
      dimensi: '270x100x68cm',
      Kontak: '0333-9012-3456',
      situs: 'http://quickship.com/',
      batasan: '47000kg'
    }
  }
]

const JasaKirim = () => {
  const [open, setOpen] = useState(false)
  const [providerInfoOpen, setProviderInfoOpen] = useState(Array(jaskir.length).fill(false))

  const handelClick = () => {
    setOpen(!open)
  }

  const handelProviderInfoOpen = key => {
    const updatedProviderInfoOpen = [...providerInfoOpen]
    updatedProviderInfoOpen[key] = !updatedProviderInfoOpen[key]
    setProviderInfoOpen(updatedProviderInfoOpen)
  }

  return (
    <Card>
      <CardHeader title='Pengaturan Jasa Pengiriman' />
      <Box sx={{ minWidth: '100%' }}>
        <List sx={{ minWidth: '100%' }} component='nav' aria-labelledby='nested-list-subheader'>
          <ListItem>
            <ListItemText primary='Reguler (Cashless)' />
            <Button
              onClick={handelClick}
              size='small'
              variant='outlined'
              startIcon={open ? <ArrowDown /> : <ArrowUp />}
            >
              Buka
            </Button>
          </ListItem>
        </List>
        {/* List provider */}
        {providerInfoOpen.map((isOpen, key) => (
          <Collapse key={key} in={open} timeout='auto' unmountOnExit>
            <List>
              <ListItem>
                <ListItemText sx={{ fontWeight: 500 }} primary={jaskir[key].provider} />
                <Switch />
                <IconButton onClick={() => handelProviderInfoOpen(key)} size='small' variant='outlined'>
                  {isOpen ? <ArrowDown /> : <ArrowUp />}
                </IconButton>
              </ListItem>
              <Collapse in={isOpen} timeout='auto' mountOnExit>
                <List>
                  <ListItem>{jaskir[key].informasi.keterangan}</ListItem>
                  {isOpen &&
                    jaskir[key].informasi.rule.map((rule, idx) => (
                      <ListItem key={idx}>{`${idx + 1}. ${rule}`}</ListItem>
                    ))}
                  <ListItem>Berat maks : {jaskir[key].informasi.maxs}</ListItem>
                  <ListItem>Dimensi : {jaskir[key].informasi.dimensi}</ListItem>
                  <ListItem>Kontak : {jaskir[key].informasi.Kontak}</ListItem>
                  <ListItem>Situs : {jaskir[key].informasi.situs}</ListItem>
                  <ListItem>Batasan berat maks : {jaskir[key].informasi.batasan}</ListItem>
                </List>
              </Collapse>
            </List>
          </Collapse>
        ))}
      </Box>
    </Card>
  )
}

export default JasaKirim
