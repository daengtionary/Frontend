/* global kakao */

import React, { useEffect } from "react";
import { StyledDogWalkMapContainer, StyledDogWalkMapWrap } from "./DogWalk.styled";

const { kakao, daum } = window;

const DogWalk = () => {

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

    //지도를 미리 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new kakao.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.537187, 127.005476),
      map: map,
    });
    
    function daumPostcode() {
      new daum.Postcode({
        oncomplete: function (data) {
          var addr = data.address; // 최종 주소 변수
    
          // 주소 정보를 해당 필드에 넣는다.
          document.getElementById("address").value = addr;
          // 주소로 상세 정보를 검색
          geocoder.addressSearch(data.address, function (results, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === daum.maps.services.Status.OK) {
              var result = results[0]; //첫번째 결과의 값을 활용
    
              // 해당 주소에 대한 좌표를 받아서
              var coords = new daum.maps.LatLng(result.y, result.x);
              // 지도를 보여준다.
              mapContainer.style.display = "block";
              map.relayout();
              // 지도 중심을 변경한다.
              map.setCenter(coords);
              // 마커를 결과값으로 받은 위치로 옮긴다.
              marker.setPosition(coords);
            }
          });
        },
      }).open();
  }
  }, []);
  
  return (
    <StyledDogWalkMapContainer>
      <div>
        <input type="text" id="address" placeholder="주소" />
        <input type="button" value="주소 검색" 
        // onClick={daumPostcode()}
        />
      </div>
      <StyledDogWalkMapWrap id="map"></StyledDogWalkMapWrap>
    </StyledDogWalkMapContainer>
  );
};

export default DogWalk;
