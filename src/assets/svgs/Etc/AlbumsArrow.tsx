import React from "react";
import styled from "styled-components";

interface AlbumsArrowProps {
  state: boolean;
  direction: string;
}

const AlbumsArrow = ({ state, direction }: AlbumsArrowProps) => {
  if (direction == "left") {
    return (
      <_ArrowBox disabled={!state}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.45977 11.29L13.1198 5.64001C13.2127 5.54628 13.3233 5.47188 13.4452 5.42111C13.5671 5.37035 13.6978 5.34421 13.8298 5.34421C13.9618 5.34421 14.0925 5.37035 14.2144 5.42111C14.3362 5.47188 14.4468 5.54628 14.5398 5.64001C14.726 5.82737 14.8306 6.08082 14.8306 6.34501C14.8306 6.60919 14.726 6.86264 14.5398 7.05001L9.58977 12.05L14.5398 17C14.726 17.1874 14.8306 17.4408 14.8306 17.705C14.8306 17.9692 14.726 18.2226 14.5398 18.41C14.4472 18.5045 14.3367 18.5797 14.2148 18.6312C14.093 18.6827 13.9621 18.7095 13.8298 18.71C13.6975 18.7095 13.5666 18.6827 13.4447 18.6312C13.3228 18.5797 13.2124 18.5045 13.1198 18.41L7.45977 12.76C7.35827 12.6664 7.27726 12.5527 7.22185 12.4262C7.16645 12.2997 7.13784 12.1631 7.13784 12.025C7.13784 11.8869 7.16645 11.7503 7.22185 11.6238C7.27726 11.4973 7.35827 11.3836 7.45977 11.29V11.29Z"
            fill={state ? "#8C95AF" : "#E3E5EB"}
          />
        </svg>
      </_ArrowBox>
    );
  } else {
    return (
      <_ArrowBox disabled={!state}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5402 11.29L10.8802 5.64001C10.7873 5.54628 10.6767 5.47188 10.5548 5.42111C10.4329 5.37035 10.3022 5.34421 10.1702 5.34421C10.0382 5.34421 9.90751 5.37035 9.78565 5.42111C9.66379 5.47188 9.55319 5.54628 9.46023 5.64001C9.27398 5.82737 9.16943 6.08082 9.16943 6.34501C9.16943 6.60919 9.27398 6.86264 9.46023 7.05001L14.4102 12.05L9.46023 17C9.27398 17.1874 9.16943 17.4408 9.16943 17.705C9.16943 17.9692 9.27398 18.2226 9.46023 18.41C9.55284 18.5045 9.66329 18.5797 9.78516 18.6312C9.90704 18.6827 10.0379 18.7095 10.1702 18.71C10.3025 18.7095 10.4334 18.6827 10.5553 18.6312C10.6772 18.5797 10.7876 18.5045 10.8802 18.41L16.5402 12.76C16.6417 12.6664 16.7227 12.5527 16.7781 12.4262C16.8336 12.2997 16.8622 12.1631 16.8622 12.025C16.8622 11.8869 16.8336 11.7503 16.7781 11.6238C16.7227 11.4973 16.6417 11.3836 16.5402 11.29V11.29Z"
            fill={state ? "#8C95AF" : "#E3E5EB"}
          />
        </svg>
      </_ArrowBox>
    );
  }
};

const _ArrowBox = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #eeeff3;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 4px 20px rgba(8, 15, 52, 0.08);
  transform: matrix(1, 0, 0, -1, 0, 0);

  &:disabled {
    cursor: not-allowed;
    background-color: #eeeff3;
  }
`;

export default AlbumsArrow;
