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
  const businessName = title;
  const businessAddress = address.split(" ").slice(0, -1).join(" ");

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(lat, lon),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
    let geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(businessAddress, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        let iwContent = `
        <div style="padding:10px;">
          <div>${businessName}</div>
          <div>
            <a href="https://map.kakao.com/link/map/${businessName},${result[0].y},${result[0].x}" style="color:blue; text-decoration: none;" target="_blank">자세히 보기</a>
          </div>
        </div>`;

        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: true,
        });
        infowindow.open(map, marker);
        kakao.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker);
        });
        map.setCenter(coords);
      }
    });

    let mapTypeControl = new kakao.maps.MapTypeControl();

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

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
