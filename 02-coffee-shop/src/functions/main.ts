export const buscarCep = (cep: string) => {
  if (cep.length !== 8) {
    return false
  } else {
    fetch(`http://viacep.com.br/ws/${cep}/json/`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        if (!data.cep) {
          return false
        } else {
          return data
        }
      })
      .catch(() => {
        return false
      })
  }
}
