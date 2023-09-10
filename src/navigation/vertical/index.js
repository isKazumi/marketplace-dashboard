import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Carousel from 'mdi-material-ui/ViewCarousel'
import Users from 'mdi-material-ui/AccountGroup'
import Store from 'mdi-material-ui/Storefront'
import Invoice from 'mdi-material-ui/Receipt'
import History from 'mdi-material-ui/History'
import Cargo from 'mdi-material-ui/TruckCargoContainer'

const navigation = () => {
  return [
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Users',
      icon: Users,
      path: '/users'
    },
    {
      title: 'Tambah Banner',
      icon: Carousel,
      path: '/banner'
    },

    {
      title: 'Invoice',
      icon: Invoice,
      path: '/invoice'
    },
    {
      title: 'Manajemen Toko',
      icon: Store,
      path: '/toko'
    },
    {
      title: 'Manajemen Pengiriman',
      icon: Cargo,
      path: '/manajemen-pengiriman'
    },

    {
      title: 'Riwayat Penjualan',
      icon: History,
      path: '/riwayat-penjualan'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    }
  ]
}

export default navigation
