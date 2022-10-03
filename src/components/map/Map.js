/* global kakao */
import React, { useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import {
  StyledMapContainer,
  StyledMapWrap,
  StyledModalBackground,
  StyledMapInfo,
  StyledCloseBtm,
  StyledMapTitle,
  StyledMapAddress,
  StyledIcon,
} from "./Map.styled";
const { kakao } = window;

const Map = ({ modalHandler, title, address }) => {
  const lat = 37.5023088;
  const lon = 127.044437;

  console.log(title);
  console.log(address.split(",").slice(0, -1));

  const businessName = title;
  const businessAddress = address.split(" ").slice(0, -1).join(" ");

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(lat, lon),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성
    let geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색
    geocoder.addressSearch(businessAddress, function (result, status) {
      console.log(result);
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성
        let iwContent = `
        <div style="padding:10px;">
          <div>${businessName}</div>
          <div>
            <a href="https://map.kakao.com/link/map/${businessName},${result[0].y},${result[0].x}" style="color:blue; text-decoration: none;" target="_blank">자세히 보기</a>
          </div>
        </div>`;

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: true,
        });
        infowindow.open(map, marker);

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, "click", () => {
          // 마커 위에 인포윈도우를 표시
          infowindow.open(map, marker);
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    let mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됨
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <StyledModalBackground onClick={modalHandler}>
      <StyledMapContainer onClick={(e) => e.stopPropagation()}>
        <StyledCloseBtm>
          <button onClick={modalHandler}>
            <BsXLg />
          </button>
        </StyledCloseBtm>
        <StyledMapWrap id="map"></StyledMapWrap>
        <StyledMapInfo>
          <StyledIcon></StyledIcon>
          <StyledMapAddress>{businessAddress}</StyledMapAddress>
        </StyledMapInfo>
        <StyledMapInfo></StyledMapInfo>
        <StyledMapTitle>{businessName}</StyledMapTitle>
      </StyledMapContainer>
    </StyledModalBackground>
  );
};

export default Map;
