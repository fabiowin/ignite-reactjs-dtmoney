import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// https://www.figma.com/file/iLFkm80Hm9YeC0lMuasNFN/dtmoney-Ignite

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          value: 8000,
          category: 'Dev',
          type: 'deposit',
          createdAt: new Date('2020-11-25 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          value: '-1500',
          category: 'Casa',
          type: 'withdraw',
          createdAt: new Date('2020-11-25 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    
    this.get("transactions", (schema) => {
      return this.schema.all('transaction');
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
