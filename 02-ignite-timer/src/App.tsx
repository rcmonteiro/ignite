import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      asdasd
      <GlobalStyle />
    </ThemeProvider>
  )
}
