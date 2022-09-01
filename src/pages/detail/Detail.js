import React, { useState } from 'react'
import Map from '../../components/map/Map'

const Detail = () =>{

  const [mapModal, setMapModal] = useState(false)

  const modalHandler = () => {
    setMapModal(!mapModal)
  }

  return(
    <div>
      <div>여기에 업체 등록 사진</div>      
      <div>여기에 업체명</div>      
      <div>
        <span onClick={modalHandler}>지도</span>
        <span>주소</span>
      </div>      
      <div>여기에 상세 설명</div>      
      <div>여기에 예약 현황?</div>      
      <div>후기 글</div>
      {mapModal && <Map modalHandler={modalHandler}/>}
    </div>
  )
}


export default Detail