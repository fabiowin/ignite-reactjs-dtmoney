import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar Modal'></img>
      </button>
      
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Nome'
          value={title}
          onChange={event => setTitle(event.target.value)}  
        ></input>

        <input type='number' placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        ></input>

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type='button'
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox> 
        </TransactionTypeContainer>

        <input placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        ></input>

        <button type='submit' onClick={handleCreateNewTransaction}>Cadastrar</button>

      </Container>
    </Modal>

  )
}
