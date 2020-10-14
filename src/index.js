import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

/** store */
import store from './state/store.js'
/** main component */
import App from './App'
/** style */
import GlobalStyle from './assets/style/global'
import { ThemeStyledComponents } from './assets/style/theme'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />

      <ThemeProvider theme={ThemeStyledComponents}>
        <App />
      </ThemeProvider>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
