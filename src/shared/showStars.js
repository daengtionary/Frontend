import styled from "styled-components";

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const showStars = (star) => {
  if (star >= 0 && star < 0.5) {
    return (
      <div>
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 0.5 && star < 1) {
    return (
      <div>
        <StarIcon
          alt="halfStar"
          src={`${process.env.PUBLIC_URL}/img/halfStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 1 && star < 1.5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 1.5 && star < 2) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="halfStar"
          src={`${process.env.PUBLIC_URL}/img/halfStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 2 && star < 2.5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 2.5 && star < 3) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="halfStar"
          src={`${process.env.PUBLIC_URL}/img/halfStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 3 && star < 3.5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 3.5 && star < 4) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="halfStar"
          src={`${process.env.PUBLIC_URL}/img/halfStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 4 && star < 4.5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="emptyStar"
          src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}
        />
      </div>
    );
  } else if (star >= 4.5 && star < 5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="halfStar"
          src={`${process.env.PUBLIC_URL}/img/halfStar.png`}
        />
      </div>
    );
  } else if (star === 5) {
    return (
      <div>
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
        <StarIcon
          alt="filledStar"
          src={`${process.env.PUBLIC_URL}/img/filledStar.png`}
        />
      </div>
    );
  } else {
    return <div>별점 정보가 없습니다.</div>;
  }
};