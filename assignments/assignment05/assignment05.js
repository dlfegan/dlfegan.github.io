
// ---------- Global variables ----------

// use "var" keyword so code works in CodePen

// Covid19api variables
var URL = "https://api.covid19api.com/summary";
var covidJson;
var covidJsObj;
var newConfirmedOver1000;

// AJAX variable
var xhttp;

// Chart.js variables

// modified from : https://www.sitepoint.com/introduction-chart-js-2-0-six-examples/
// "ctx" is the canvas HTML element where the chart is rendered in the browser
var ctx = 
  document.getElementById('myChart').getContext('2d');
// "chartData" includes the graph AND the formatting, including title, legend, axes, etc.
var chartData = {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(255,0,0,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,140,0,0.4)"
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Apples and Oranges'
    },
    scales: {
      yAxes: [{
        ticks: {
          // logarithmic scale ignores maxTicksLimit
          maxTicksLimit: 11,
          callback: function(label, index, labels) {
            return (   label/1000 > 999999   // #6 Change y-axis
                    || label/1000 == 10000  // to show powers
                    || label/1000 == 1000   // powers of 10
                    || label/1000 == 100
                    || label/1000 == 10
                    || label/1000 == 1
                    || label/1000 == 0.1
                    || label/1000 == 0.01) 
              ? label/1000+'k' :  "";
          }
        },
        scaleLabel: {
          display: true,
          labelString: '1k = 1000'
        },
        // logarithmic scale ignores maxTicksLimit
        type: "logarithmic"

      }]
    }
  }
};
// var myChart = new Chart(ctx, chartData); 

// ---------- loadContent() function ----------

// Note: you can't execute API data dependent code outside the loadContent() function because the code might execute before the AJAX call responds, that is, it might execute before the variable, covidJson, is initialized with data from the API. Example below.
// console.log(covidJson.Global.NewConfirmed); // error 

// code below modified from: 
// https://www.w3schools.com/js/js_ajax_intro.asp

function loadContent() {
  let today = new Date();
  let yesterday = today.valueOf() - (1000 * 60 * 60 * 24);
  if(!localStorage.getItem("date") || localStorage.getItem("date") < yesterday) {
    
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 
        && this.status == 200) {
      
      covidJson = this.responseText;
      covidJsObj = JSON.parse(covidJson);
      //#5 ajax call
      localStorage.setItem("date",today.valueOf());
      localStorage.setItem("json",covidJson);
      
      buildChart();
      
      console.log('ajax call');
      
          } // end if
    
  }; // end xhttp.onreadystatechange = function()
    
      
  xhttp.open("GET", URL, true);
  xhttp.send();
    
  } // end if(!localStorage.getItem("date"))
  else{
    covidJson = localStorage.getItem("json");
    covidJsObj = JSON.parse(covidJson);
    buildChart();
    console.log('no ajax call');
  }
  
} // end function loadContent() 
      
    function buildChart() {
      newConfirmedOver1000 = [];
	         //#2 use populations object to create          an array of objects
      for (let c of covidJsObj.Countries) {
        //#4 Show countries with at least 50,000 total deaths
        if (c.TotalDeaths > 50000) {
          newConfirmedOver1000.push({ 
            "Slug": c.Slug, 
            "NewConfirmed": c.NewConfirmed, 
            "NewDeaths": c.NewDeaths,
            "TotalConfirmed": c.TotalConfirmed,
            "TotalDeaths": c.TotalDeaths,
            "Population": populations[c.Slug],
            "TotalConfirmedPer100000" : (100000*c.TotalConfirmed/populations[c.Slug]), 

//_.orderBy("TotalConfirmedPer100000","desc")           

          });
        }
      }
 // #3 Make the TotalConfirmedPer100000 in descending order
     newConfirmedOver1000 = _.orderBy(newConfirmedOver1000, "TotalConfirmedPer100000", "desc");  

           
      chartData.data.datasets[0].backgroundColor 
        = "rgba(100,100,100,0.4)"; // gray
      chartData.data.datasets[1].backgroundColor                         = "rgba(255,0,0,0.4)"; // red
    //  chartData.data.datasets[2].backgroundColor = "rgba(0,0,255,0.4)"; // blue

  
      //Hover labels for bar chart 
      chartData.data.datasets[0].label  
        = 'Total Confirmed';
      chartData.data.datasets[1].label  
        = 'Total Deaths';
     // chartData.data.datasets[2].label  = 'Total Confirmed Per 100000';
      
      //Country Name Label (slug)
      chartData.data.labels  
        = newConfirmedOver1000.map( (x) => x.Slug );
      
      //NewConfirmed and NewDeaths bars
      //#4 add in chartdata for other datasets
      //#4 Change bars to TotalConfirmed, TotalDeaths, and TotalConfirmedPer100000
      chartData.data.datasets[0].data  
        = newConfirmedOver1000.map( 
          (x) => x.TotalConfirmed );  //#4: Changed from newConfirmed to TotalConfirmed
      
      chartData.data.datasets[1].data  
        = newConfirmedOver1000.map( 
          (x) => x.TotalDeaths );     //#4:Changed from newDeaths to TotalDeaths

   //   chartData.data.datasets[2].data   = newConfirmedOver1000.map( (x) => x.TotalConfirmedPer100000 );     //#4:Add in bar for TotalConfirmedPer100000      
      
      //1: put date in title
      chartData.options.title.text 
        = "Covid 19 Hotspots (" + 
        dayjs().format("YYYY-MM-DD") + ")" ;
      myChart = new Chart(ctx, chartData); 

    } // end of function buildChart()



// data from: https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population
var populations = {
  'china' : 1405137440,
'india' : 1369152434,
'united-states' : 330578332,
'indonesia' : 269603400,
'pakistan' : 220892331,
'brazil' : 212281095,
'nigeria' : 206139587,
'bangladesh' : 169575884,
'russia' : 146748590,
'mexico' : 127792286,
'japan' : 125880000,
'philippines' : 109376023,
'congo' : 101935800,
'egypt' : 101126063,
'ethiopia' : 100829000,
'vietnam' : 96483981,
'iran' : 83914898,
'turkey' : 83154997,
'germany' : 83122889,
'france' : 67146000,
'united-kingdom' : 66796807,
'thailand' : 66571530,
'italy' : 60026546,
'south-africa' : 59622350,
'tanzania' : 57637628,
'myanmar' : 54817919,
'south-korea' : 51841786,
'colombia' : 50372424,
'kenya' : 47564296,
'spain' : 47329981,
'argentina' : 45376763,
'algeria' : 43900000,
'sudan' : 42957030,
'ukraine' : 41723998,
'uganda' : 41583600,
'iraq' : 40150200,
'poland' : 38352000,
'canada' : 38229409,
'morocco' : 36063063,
'uzbekistan' : 34501586,
'saudi-arabia' : 34218169,
'afghanistan' : 32890171,
'malaysia' : 32703180,
'peru' : 32625948,
'angola' : 31127674,
'ghana' : 30955202,
'mozambique' : 30066648,
'nepal' : 29996478,
'yemen' : 29825968,
'venezuela' : 28435943,
'ivory-coast' : 26453542,
'madagascar' : 26251309,
'australia' : 25690614,
'north-korea' : 25550000,
'cameroon' : 24348251,
'taiwan' : 23568378,
'niger' : 23196002,
'sri-lanka' : 21803000,
'burkina-faso' : 21510181,
'mali' : 20250833,
'chile' : 19458310,
'romania' : 19317984,
'kazakhstan' : 18806296,
'malawi' : 18449828,
'zambia' : 17885422,
'ecuador' : 17601388,
'netherlands' : 17525931,
'syria' : 17500657,
'guatemala' : 16858333,
'senegal' : 16705608,
'chad' : 16244513,
'somalia' : 15893219,
'zimbabwe' : 15473818,
'cambodia' : 15288489,
'south-sudan' : 13249924,
'rwanda' : 12663116,
'guinea' : 12559623,
'burundi' : 12309600,
'benin' : 12114193,
'haiti' : 11743017,
'tunisia' : 11708370,
'bolivia' : 11633371,
'belgium' : 11539878,
'cuba' : 11193470,
'jordan' : 10804332,
'greece' : 10724599,
'czech-republic' : 10699142,
'dominican-republic' : 10448499,
'sweden' : 10367232,
'portugal' : 10295909,
'azerbaijan' : 10095900,
'hungary' : 9769526,
'belarus' : 9408400,
'united-arab-emirates' : 9366829,
'tajikistan' : 9313800,
'honduras' : 9304380,
'israel' : 9272700,
'papua-new-guinea' : 8935000,
'austria' : 8915382,
'switzerland' : 8632703,
}
//loadContent();
    
