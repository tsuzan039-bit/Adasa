import React from 'react'

export default function Pages({pagesNum,handlePage ,currentPage} ) {
  return (
<>



<ul className='d-flex justify-content-center navs-left gap-2 fa-i-cursor '>

    {Array.from({length:pagesNum },(_,i)=><li onClick={()=>handlePage(i+1)} className={`${currentPage==i+1? "bg-info":""}text-decoration-none my-num navslink `}>{i+1}</li>)}
</ul>












</>  )
}
