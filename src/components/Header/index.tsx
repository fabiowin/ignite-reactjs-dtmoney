import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal: onOpenNewTransactionOpen}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney"></img>
        <button type="button" onClick={onOpenNewTransactionOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}