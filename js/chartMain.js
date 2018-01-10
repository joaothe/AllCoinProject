const _CHART = document.getElementById("allCoinChart");

let allCoinChart = new Chart(_CHART, {
  type: 'line',
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        borderColor: "rgb(98,155,190)",
        borderCapSyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgb(98,155,190)",
        pointBackgroundColor: "rgb(98,155,190)",
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: "rgb(98,155,190)",
        pointHoverBorderColor: "rgb(98,155,190)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [40,59,80,81,56,55,75],
      }
    ]

  },
  options:{
    legend:{
      display:false
    },
    scales: {
      xAxes: [{
                  gridLines: {
                      display:false
                  }
              }],
      yAxes: [{
                  gridLines: {
                      display:false
                  }
              }]
    }
  },

});
