import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg"

export function Summary() {

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"></img>
        </header>
        <strong>- R$400,00</strong>
      </div>
      <div className="totalDiv">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"></img>
        </header>
        <strong>R$600,00</strong>
      </div>
    </Container>
  )
}