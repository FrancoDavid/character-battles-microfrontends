import styled from "styled-components";

export const HeadSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
`;

export const HeadTitle = styled.h1``;

export const HeadTick = styled.div`
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }

  &::after {
    right: 0;
    border-right-color: var(--border);
  }
`;
