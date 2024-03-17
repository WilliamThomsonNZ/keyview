import { handleAccordion } from "./helpers.js";
import Chart from "chart.js/auto";

const capitalButton = document.getElementById("capital-button");
const capitalHeader = document.getElementById("capital-header");
const capitalContainer = document.getElementById("capital-container");
let capitalOpen = open;
const capitalInitialHeight = capitalContainer.clientHeight;

handleAccordion({
  button: capitalButton,
  header: capitalHeader,
  container: capitalContainer,
  open: capitalOpen,
  initialHeight: capitalInitialHeight,
  headerPadding: 0,
});

const attractiveButton = document.getElementById("attractive-button");
const attractiveHeader = document.getElementById("attractive-header");
const attractiveContainer = document.getElementById("attractive-container");
let attractiveOpen = false;
const attractiveInitialHeight = attractiveContainer.clientHeight;

handleAccordion({
  button: attractiveButton,
  header: attractiveHeader,
  container: attractiveContainer,
  open: attractiveOpen,
  initialHeight: attractiveInitialHeight,
  headerPadding: 0,
});

const alignmentButton = document.getElementById("alignment-button");
const alignmentHeader = document.getElementById("alignment-header");
const alignmentContainer = document.getElementById("alignment-container");
let alignmentOpen = false;
const alignmentInitialHeight = alignmentContainer.clientHeight;

handleAccordion({
  button: alignmentButton,
  header: alignmentHeader,
  container: alignmentContainer,
  open: alignmentOpen,
  initialHeight: alignmentInitialHeight,
  headerPadding: 0,
});

const marginButton = document.getElementById("margin-button");
const marginHeader = document.getElementById("margin-header");
const marginContainer = document.getElementById("margin-container");
let marginOpen = false;
const marginInitialHeight = marginContainer.clientHeight;

handleAccordion({
  button: marginButton,
  header: marginHeader,
  container: marginContainer,
  open: marginOpen,
  initialHeight: marginInitialHeight,
  headerPadding: 0,
});

function extractData(data) {
  const result = {};

  data.forEach((row) => {
    row.forEach((value, index) => {
      // If the key (index) does not exist, create an array
      if (!result[index]) {
        result[index] = [];
      }
      // Push the value into the correct array
      result[index].push(value);
    });
  });

  return result;
}

async function hanldeGraph() {
  const response = await fetch(
    "https://api-bay-beta.vercel.app/api/v1/graph-data"
  );
  const graphJson = await response.json();
  const chartData = extractData(graphJson.values);
  console.log(chartData);

  const chartContainer = document.getElementById("chart-container");
  const canvas = document.createElement("canvas");
  canvas.id = "myChart";
  canvas.width = "100%";
  canvas.height = "100%";
  chartContainer.appendChild(canvas);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ], // X-axis labels
      datasets: [
        {
          tension: 0.1,
          fill: false,
          cubicInterpolationMode: "monotone",
          label: "Series 1", // Name of the first line
          data: chartData[1]
            .filter((index, items) => (index !== 0 ? true : false))
            .map((item) => Number(item)), // Data points for the first line
          borderColor: "green", // Line color
          borderWidth: 2,
        },
        {
          label: "Series 2", // Name of the second line
          data: chartData[2]
            .filter((index, items) => (index !== 0 ? true : false))
            .map((item) => Number(item)), // Data points for the second line
          borderColor: "black", // Line color
          borderWidth: 2,
          borderDash: [5, 5], // Dashed line`
          cubicInterpolationMode: "monotone",
        },
        // {
        //   label: "Series 3", // Name of the third line
        //   data: chartData[2]
        //     .filter((index, items) => (index !== 0 ? true : false))
        //     .map((item) => Number(item)), // Data points for the third line
        //   borderColor: "black", // Line color
        //   borderWidth: 1,
        //   cubicInterpolationMode: "monotone",
        //   borderDash: [5, 15], // Dashed line
        // },
      ],
    },
    options: {
      scales: {},
    },
  });
}
//Hnadle Graph
hanldeGraph();
