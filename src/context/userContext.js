import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export const UserInfoContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = Cookies.get('user')
    if (!getUser) return null

    const userInfo = JSON.parse(getUser)
    setUser(userInfo)
  }, [])

  return <UserInfoContext.Provider value={user}>{children}</UserInfoContext.Provider>
}
