import React from 'react'

const ThoughtLeader = props => {
  const {leader} = props
return (
  leader ? (
    <div className = "placeholder thought-leader position-relative">
      <a href = {`https://instagram.com/${leader.handle}/`} className = "block" target="_blank">
        <img src= {leader.image_url} alt={leader.handle}></img>
        <span className = "instagram-item position-absolute">
        <p className = "h3 block text-white position-relative z-2">{leader.handle}</p>
			  <span className = "background-black transparency position-absolute">
			  </span>
        </span>
      </a>
    </div>
  ) : (
    ""
  )
)
}

export default ThoughtLeader
