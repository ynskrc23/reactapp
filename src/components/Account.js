import React from 'react'

export const Account = () => {
  let user= JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      {
        localStorage.getItem('user')?
        <>
          <h4 className='m-3'>Welcome {user.userDetails.name}</h4>
        </>
        :
        null
      }
    </div>
  )
}

export default Account