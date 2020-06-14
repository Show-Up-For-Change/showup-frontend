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
