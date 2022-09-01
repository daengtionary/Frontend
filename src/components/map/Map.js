/* global kakao */
import React, { useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import { MapContainer, MapWrap, ModalBackground, CloseBtm, MapTitle, MapAddress } from "./Map.styled";
const { kakao } = window;

const Map = ({ modalHandler }) => {
  const lat = 37.483582263644934;
  const lon = 126.99202327334409;

  const businessName = "여기에 업체명";
  const businessAddress = "여기에 주소";

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(lat, lon),
      level: 4,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    let mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됨
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치
    let markerPosition = new kakao.maps.LatLng(lat, lon);

    // 마커 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    let iwContent = `
    <div style="padding:10px;">
      <div>${businessName}</div>
      <div>${businessAddress}</div>
      <div>
        <a href="https://map.kakao.com/link/map/${businessName},${lat},${lon}" style="color:blue; text-decoration: none;" target="_blank">자세히 보기</a>
      </div>  
    </div>`,
      // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    let infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", () => {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }, []);

  return (
    <ModalBackground>
      <MapContainer>
        <CloseBtm>
          <button onClick={modalHandler}><BsXLg/></button>
        </CloseBtm>
        <MapWrap id="map"></MapWrap>
        <MapAddress>여기에 업체 주소</MapAddress>
        <MapTitle>여기에 업체명</MapTitle>
      </MapContainer>
    </ModalBackground>
  );
};

export default Map;
