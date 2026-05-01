import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;

    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SectionContentTitle = styled.h2``;

export const SectionContent = styled.div`
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
`;

export const SectionSpacer = styled.div`
  height: 88px;
  border-top: 1px solid var(--border);

  @media (max-width: 1024px) {
    height: 48px;
  }
`;

export const SectionTick = styled.div`
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
