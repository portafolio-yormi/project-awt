$(document).ready(function () {
  $("#btnBurguer").click(function (e) { 
    // e.preventDefault();
    const menu = false;
    $(".sidebar").toggleClass("active");
  });
});

const doughnut = document.getElementById('doughnut');
const mixedChart = document.getElementById('scatter');

new Chart(doughnut, {
  type: 'doughnut',
  data: {
    labels: ['hola', 'Blue', 'Yellow' ],
    datasets: [{
      label: '# of Votes',
      data: [8, 40, 19, 15,6],
      borderWidth: 0,
      backgroundColor: ["#ee4e1e","#1536BC","#0580BC","#5E9E33", "#B30C5C"],
    }]
  },
  options: {
    scales: {
      // y: {
      //   beginAtZero: false
      // }
    }
  }
});
new Chart(mixedChart, {
  type: 'bar',
  data: {
    labels: ['INTERFACES NAME', 'INTERFACES NAME', 'INTERFACES NAME', 'INTERFACES NAME', 'INTERFACES NAME' ],
    datasets: [{
      label: '# of Votes',
      data: [35, 40, 60, 40,60],
      borderWidth: 0,
      backgroundColor: ["#0580BC"],
      

    }]
  },
  options: {
   
  }
});

