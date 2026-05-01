import {
  SectionContainer,
  SectionContent,
  SectionContentTitle,
  SectionSpacer,
  SectionTick,
} from "./Section.styles";

function Section() {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <SectionContentTitle>Jimmy's Store</SectionContentTitle>
        </SectionContent>
        <SectionContent>
          <SectionContentTitle>SatanPayments</SectionContentTitle>
        </SectionContent>
      </SectionContainer>
      <SectionTick />
      <SectionSpacer />
    </>
  );
}

export default Section;
