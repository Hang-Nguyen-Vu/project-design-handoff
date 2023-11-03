import styled from "styled-components";

const VideoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 139.5px;

  position: relative;

  @media (min-width: 394px) {
    width: 179.75px;
  }

  @media (min-width: 835px) {
    width: 310px;
    height: 414px;
  }
`
const StyledLink = styled.a`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underlined;
  }
`

const VideoImage = styled.img`
  width: 100%; 
  height: 217px;
  border-radius: var(--small-radius);

  @media (min-width: 835px) {
    height: 338px;
  }
`

const HeartWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: right;
`

const HeartBtn = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
`

const VideoTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 18.17px;
  text-align: center;

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    font-height: var(--text-height-mobile);
  }
`

const VideoLength = styled.p`
  display: none;

  @media (min-width: 835px) {
    display: block;
    font-size: var(--text-size-mobile);
    font-height: var(--text-height-mobile);
    font-weight: var(--text-weight);
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`

export const WorkoutVideoCard = ({ video }) => {
  return (
    <VideoCardWrapper>
      <StyledLink href="#">
        <HeartWrapper>
          <HeartBtn type="button">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="heart">
                <path 
                  id="Icon" 
                  d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                  stroke="#545F71" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </HeartBtn>
        </HeartWrapper>
        <VideoImage src={video.image} alt={video.title} />
        <VideoTitle>{video.title.toUpperCase()}</VideoTitle>
        <VideoLength>{video.length}</VideoLength>
      </StyledLink>
    </VideoCardWrapper>
  )
}
