import { styled } from "@mui/system";
import Stepper from "../components/Stepper";
import TablePagination from "../components/TablePagination";
import Tabs, { Tab } from "../components/Tabs";
import Table, { TableCell, TableRow } from "../components/Table";
import Chip from "../components/Chip";
const TablePageRoot = styled("div")({
  display: "flex",
  alignItems: "stretch",
  flexGrow: 1,
  padding: 24,
  gap: 24,
  overflow: "hidden",
});

const TablePageTableContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

const TableContainer = styled("div")({
  flexGrow: 1,
});

const tabs = [
  { label: "Информация", id: "info", active: true },
  { label: "Атрибуты (3)", id: "attributes" },
  { label: "Детали", id: "details" },
];

const TableCaptionRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const TableCaption = styled("span")({
  color: "#041526",

  fontFamily: "Roboto",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

const steps = [
  { id: 1, label: "Общие данные" },
  { id: 2, label: "Параметры" },
  { id: 3, label: "Процентные ставки" },
  { id: 4, label: "Расчетные категории" },
  {
    id: 5,
    label: "Сценарии",
    badgeContent: 9,
    subSteps: [
      { id: 7, label: "Исполнение пункта графика" },
      { id: 8, label: "Распределение изменения суммы процентов" },
      { id: 9, label: "Пересчет суммы вознаграждения" },
      { id: 10, label: "Предоставление кредита" },
      {
        id: 11,
        label: "Расчет графика кредита с равномерным ...",
        active: true,
      },
      { id: 12, label: "Начисление вознаграждения" },
      { id: 13, label: "Расчет суммы комиссии и суммы выдачи кредита" },
      { id: 14, label: "Выполнение расчета по запросу" },
      { id: 15, label: "Подготовка сумм требований к выставлению" },
    ],
    active: true,
  },
  { id: 6, label: "События" },
];

const columns = ["Дата", "IP", "Порт", "Статус"];
const data = [
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="success">Активно</Chip>,
  ],
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="error">Не Активно</Chip>,
  ],
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="success">Активно</Chip>,
  ],
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="success">Активно</Chip>,
  ],
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="error">Не Активно</Chip>,
  ],
  [
    "22.04.2021",
    "68.245.669.42",
    "8080",
    <Chip variant="success">Активно</Chip>,
  ],
];
export default function TablePage() {
  const activeId = "info";

  return (
    <TablePageRoot>
      <Stepper steps={steps} />
      <TablePageTableContainer>
        <TableCaptionRoot>
          <TableCaption>
            Расчет графика кредита с равномерным распределением ОД
          </TableCaption>
          <Tabs>
            {tabs.map(({ id, label }) => (
              <Tab key={id} id={id} activeId={activeId}>
                {label}
              </Tab>
            ))}
          </Tabs>
        </TableCaptionRoot>
        <TableContainer>
          <Table>
            <thead>
              <TableRow header>
                {columns.map((column) => (
                  <TableCell>{column}</TableCell>
                ))}
              </TableRow>
            </thead>
            <tbody>
              {data.map((cells) => (
                <TableRow>
                  {cells.map((cell) => (
                    <TableCell>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100, { label: "All", value: -1 }]}
          count={200}
          onPageChange={() => {}}
          page={1}
          rowsPerPage={100}
        />
      </TablePageTableContainer>
    </TablePageRoot>
  );
}
