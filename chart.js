var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  responsive: 'true',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Movie 1',
      data: [65, 60, 40, 50, 35, 25, 30],
      backgroundColor: "rgba(190, 190, 190, 0.3)"
    }, {
      label: 'Movie 2',
      data: [48, 48, 60, 40, 57, 38, 30],
      backgroundColor: "rgba(56, 160, 133, 0.7)"
    }]
  }
});
