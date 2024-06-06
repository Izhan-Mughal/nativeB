import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { Provider } from 'react-redux'
import store from './store.ts'
import { ConfigProvider } from 'antd';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
