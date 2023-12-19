import { styled } from "@mui/system";
import Badge from "./Bage";
const StepperRoot = styled("div")({
  width: 280,
  padding: 24,
  borderRadius: 12,
  background: "#F6F8FA",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});

type StepBaseData = {
  id: number;
  label: string;
  active?: boolean;
};
type SubstepData = StepBaseData;

type StepData = StepBaseData & {
  badgeContent: number;
  subSteps?: SubstepData[];
};

const StepIndex = styled("div")<{ active?: boolean }>(({ active }) => ({
  display: "inline-block",
  flexShrink: 0,
  borderRadius: 6,
  background: !active ? "rgba(4, 21, 38, 0.05)" : "#1173DA",
  width: 24,
  height: 24,
  color: !active ? "#041526" : "white",

  textAlign: "center",
  verticalAlign: "middle",
  fontFamily: "Roboto",
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
}));

const StepLabel = styled("span")<{ active?: boolean }>(({ active }) => ({
  color: !active ? "#041526" : "#1173DA",
  marginLeft: 8,

  fontFamily: "Roboto",
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
}));

const StepLabelRoot = styled("li")({});

const SubstepLabel = styled("li")<{ active?: boolean }>(({ active }) => ({
  color: active ? "#1173DA" : "",
  width: 200,
  fontFamily: "Roboto",
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  opacity: !active ? 0.5 : 1,
}));

const SubstepsListRoot = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  margin: "8px 0",
  marginLeft: 8,
});
const StepLeftLine = styled("div")<{ active?: boolean }>(({ active }) => ({
  background: active
    ? "linear-gradient(180deg, #1173DA 0%, #A4E2FF 100%)"
    : "rgba(4, 21, 38, 0.1)",
  minHeight: 8,
  width: 2,
  margin: "8px 11px",
}));

const SubstepsRoot = styled("div")({
  display: "flex",
});

function Substeps({
  steps = [],
  active,
  lastChild = false,
}: {
  steps?: SubstepData[];
  active?: boolean;
  open: boolean;
  lastChild: boolean;
}) {
  return (
    <SubstepsRoot>
      {!lastChild && <StepLeftLine active={active} />}
      <SubstepsListRoot>
        {steps.map(({ id, label, active }) => (
          <SubstepLabel key={id} active={active}>
            {label}
          </SubstepLabel>
        ))}
      </SubstepsListRoot>
    </SubstepsRoot>
  );
}

export default function Stepper({ steps }: { steps: StepData[] }) {
  return (
    <StepperRoot>
      {steps.map(({ id, label, subSteps, active, badgeContent }, idx) => (
        <StepLabelRoot>
          <StepIndex active={active}>{idx + 1}</StepIndex>
          <StepLabel active={active}>
            {label}
            {badgeContent != null && <Badge badgeContent={badgeContent} />}
          </StepLabel>
          <Substeps
            key={id}
            steps={subSteps}
            active={active}
            open={idx == 4}
            lastChild={idx == steps.length - 1}
          />
        </StepLabelRoot>
      ))}
    </StepperRoot>
  );
}
