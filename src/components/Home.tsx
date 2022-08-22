import React from 'react'
import { useSearchPrepodQuery } from '../store/bsuir/bsuir.api'

export default function Home() {
  const {isLoading, isError, data}= useSearchPrepodQuery("")
  
  return (
    <div>
      {isError && <p>Something wrong</p>}
      <ul style={{display:'block', width:'500px'}}>
        {isLoading && <p>Loading...</p>}
        {data?.map(prepod=>(<li key={prepod.id} style={{padding:'10px'}}>ФИО: {prepod.fio}, 
        <img src={prepod.photoLink} alt='photo' style={{width:'50px', marginLeft:'10px'}}/></li>))}
      </ul>
    </div>
  )
}

