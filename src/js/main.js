$(document).ready(function () {
  $("#btnBurguer").click(function (e) { 
    // e.preventDefault();
    const menu = false;
    $(".sidebar").toggleClass("active");
    $("#main").toggleClass("active-dashboar");
    if(menu == true){
      ("span").removeClass("material-symbols-outlined");
    }
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


//* Toastify

Toastify({
  text: "Atención, los brindis se apilarán automáticamente",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  avatar:"img/avatar.jpg",
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00ABDA, #00ABDA)",
  },
  onClick: function(){} // Callback after click
}).showToast()