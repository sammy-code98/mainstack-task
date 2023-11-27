import { ApexOptions } from "apexcharts";

export const TransactionType = [
  { value: "store", label: "Store Transactions" },
  { value: "tipped", label: "Get Tipped " },
  { value: "withdraw", label: "Withdrawals" },
  { value: "charges", label: "Chargebacks" },
  { value: "cash", label: "Cashbacks" },
  { value: "referral", label: "Refer & Earn" },
];

export const TransactionStatus = [
  { value: "sucess", label: "Successful" },
  { value: "pending", label: "Pending" },
  { value: "fail", label: "Failed" },
];

export const btnText = ["Today", "Last 7 days", "This month", "Last 3 months"];

export const series: ApexOptions["series"] = [
  {
    name: "Available Balance",
    data: [10, 41, 35, 25, 22, 32, 51, 55, 49, 62, 12],
  },
];

export const options: ApexOptions = {
  colors: ["#FF5403"],
  chart: {
    toolbar: {
      show: false,
    },
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};
