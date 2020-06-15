export const setUserLocalStorage = (email, facebookId, name) => {
  localStorage.setItem("email", email)
  localStorage.setItem("facebookId", facebookId)
  localStorage.setItem("name", name)
}

export const removeUserLocalStorage = () => {
  localStorage.clear();
}

export const getUserLocalStorage = () => {
  const email = localStorage.getItem("email")
  const facebookId = localStorage.getItem("facebookId")
  const name = localStorage.getItem("name")
  return {
    email,
    facebookId,
    name
  }
}

export const generateUser = () => {
  const id = Number(Array(10).fill(0).map(x=>Math.floor(Math.random()*9)).join(''))
  const user = {
    facebookId: id
  }
  setUserLocalStorage(null, id, null)
}
