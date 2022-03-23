new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["1979", "1980", "1988","1991","1984","1987","1983","1990","1989","1982"],
      datasets: [{
        label: "Water Consumption (Million Gallons per day)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","yellow","orange","turquoise","indigo","navy"],
        data: [1512,1506,1484,1469,1465,1447,1424,1424,1402,1382]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Water Consompution in NYC by year (Data from Opendata NYC Chart by Katya Civil)'
      }
    }
});
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["1979", "1980", "1988","1991","1984","1987","1983","1990","1989","1982"],
      datasets: [{
        label: "Water Consumption (Million Gallons per day)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","yellow","orange","turquoise","indigo","navy"],
        data: [1512,1506,1484,1469,1465,1447,1424,1424,1402,1382]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Water Consompution in NYC by year (Data from Opendata NYC Chart by Katya Civil)'
      }
    }
});
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["1979", "1980", "1988","1991","1984","1987","1983","1990","1989","1982"],
      datasets: [{
        label: "Water Consumption (Million Gallons per day)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","yellow","orange","turquoise","indigo","navy"],
        data: [1512,1506,1484,1469,1465,1447,1424,1424,1402,1382]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Water Consompution in NYC by year (Data from Opendata NYC Chart by Katya Civil)'
      }
    }
});