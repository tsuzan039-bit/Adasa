import React from 'react'

export default function Category({item,handleCategory,currentCategory}) {
  return (
<>
<li onClick={()=> handleCategory(item)} className={`  ${currentCategory == item?"active":""} text-decoration-none taps`}>{item}</li>


</>  )
}
