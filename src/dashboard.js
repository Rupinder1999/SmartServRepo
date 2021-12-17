
// const obj=[
//     {
//         first:"$406,411.29",
//         second:"Total Revenue",
//     }
//     ,
//     {
//         first:"$620",
//         second:"Total Jobs Avg",
//     }
//     ,
//     {
//         first:"655",
//         second:"Tickets Created",
//     }
//     ,
//     {
//         first:"735",
//         second:"Tickets Scheduled",
//     }
//     ,
//     {
//         first:"$110,448.8",
//         second:"OutStanding Amount",
//     }
//     ,
//     {
//         first:"",
//         second:"",
//     }
//     ,
//     {
//         first:"",
//         second:"",
//     }
    
// ]
const chart1 = document.getElementById('graph1').getContext('2d');
    const myChart1 = new Chart(chart1, {
        type: 'bar',
        data: {
            labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
            datasets: [{
                lable : '',
                data: [80000, 75000, 49000, 47500, 41000, 35000],
                borderColor: [
                    '#41BF99',
                ],
                backgroundColor: [
                    '#41BF99',
                ],
               
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x : {
                    title : {
                        display : true,
                        text : '                                                                                                                                                        $',
                        color : "#000000",
                        font : {
                            weight : 'bold'
                        }

                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
               
                
            },
         
            categoryPercentage : 1,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });


    const chart2 = document.getElementById('graph2').getContext('2d');
    const myChart2 = new Chart(chart2, {
        type: 'bar',
        data: {
            labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance','Material Sale'],
            datasets: [{
                lable : '',
                data: [200000, 130000, 87000, 85000, 48000, 45000,4000],
                backgroundColor: [
                    '#41BF99',
                    
                ],
                borderColor: [
                '#41BF99',
            ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x : {
                    title : {
                        display : true,
                        text :'                                                                                                                                                  $',
                        color : "#000000",
                        font : {
                            weight : 'bold'
                        }

                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
             
                
            },
            categoryPercentage : 1,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });
    myChart1.options.animation = false;
    myChart2.options.animation = false;
