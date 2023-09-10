// ** MUI Imports
import { styled } from '@mui/material/styles'

const ChatBubbleStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(10)
}))

const ChatBubble = props => {
  const { children } = props

  return <ChatBubbleStyled role='presentation'>{children}</ChatBubbleStyled>
}

export default ChatBubble
