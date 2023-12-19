import { styled } from "@mui/system";
import {
  TablePagination as TablePaginationBase,
  tablePaginationClasses as classes,
} from "@mui/base";
import { ToBegginingIcon, ToEndIcon, ToNextIcon } from "../icons";
import ToPreviousIcon from "../icons/ToPreviousIcon";

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TablePagination = styled(TablePaginationBase)(({ theme }) => ({
  [`& .${classes.spacer}`]: {
    display: "none",
  },

  [`& .${classes.toolbar}`]: {
    display: "flex",
    gap: 10,
    backgroundColor: `${theme.palette.mode === "dark" ? grey[900] : "#fff"}`,
    flexDirection: "row",
    alignItems: "center",
  },

  [`& .${classes.selectLabel}`]: {
    color: "rgba(4, 21, 38, 0.50)",

    /* p14-regular */
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px" /* 114.286% */,
    margin: 0,
  },

  [`& .${classes.select}`]: {
    color: "rgba(4, 21, 38, 0.50)",
    display: "flex",
    padding: "8px 12px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    borderRadius: 8,
    border: "1px solid rgba(4, 21, 38, 0.10)",
    background: "#FFF",

    "&:hover": {
      backgroundColor: `${
        theme.palette.mode === "dark" ? grey[800] : grey[50]
      }`,
    },

    "&:focus": {
      outline: `1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      }`,
    },
  },

  [`& .${classes.displayedRows}`]: {
    display: "none",
  },

  [`& .${classes.actions} > button`]: {},
}));

const PaginationActionRoot = styled("div")({
  lineHeight: 0,
  marginLeft: "auto",
  display: "flex",
  gap: 8,
});

const PaginationButton = styled("button")<{ active: boolean }>(
  ({ theme, active }) => ({
    width: 32,
    height: 32,
    border: "transparent",
    borderRadius: 9,
    backgroundColor: active ? "#1173DA" : "transparent",
    color: `${
      active
        ? "white"
        : theme.palette.mode === "dark"
        ? grey[300]
        : "rgba(4, 21, 38, 0.30)"
    }`,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",

    "&:hover": {
      backgroundColor: `${
        theme.palette.mode === "dark" ? grey[800] : grey[50]
      }`,
    },

    "&:focus": {
      outline: `1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      }`,
    },

    "&:disabled": {
      opacity: 0.3,
    },
  })
);

const PageButton = PaginationButton;
function PagesSelector() {
  return (
    <>
      <PageButton active={true}>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>
      <PageButton>...</PageButton>
      <PageButton>16</PageButton>
    </>
  );
}

function PaginationActions({
  className,
  count,
  getItemAriaLabel,
  onPageChange,
  ownerState,
  page,
  rowsPerPage,
}) {
  return (
    <PaginationActionRoot className={className}>
      <PaginationButton>
        <ToBegginingIcon fill={"rgba(4, 21, 38, 0.3)"} />
      </PaginationButton>
      <PaginationButton>
        <ToPreviousIcon fill={"rgba(4, 21, 38, 0.3)"} />
      </PaginationButton>
      <PagesSelector />
      <PaginationButton>
        <ToNextIcon fill={"rgba(4, 21, 38, 0.3)"} />
      </PaginationButton>
      <PaginationButton>
        <ToEndIcon fill={"rgba(4, 21, 38, 0.3)"} />
      </PaginationButton>
    </PaginationActionRoot>
  );
}

TablePagination.defaultProps = {
  labelRowsPerPage: "Объектов на странице",
  slots: {
    actions: PaginationActions,
  },
};

export default TablePagination;
