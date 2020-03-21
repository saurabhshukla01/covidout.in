// window.onload event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', () => {
  // Javascript code to execute after DOM content
  
  // full ZingChart schema can be found here:
  // https://www.zingchart.com/docs/api/json-configuration/
  let myConfig = {
    type: 'line',
    title: {
      text: 'Data Basics',
      fontSize: 24,
    },
    legend: {
			draggable: true,
    },
    scaleX: {
      // set scale label
      label: { text: 'Days' },
      // convert text on scale indices
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    scaleY: {
      // scale label with unicode character
      label: { text: 'Temperature (°F)' }
    },
		plot: {
      // animation docs here:
      // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
      animation:{
        effect: 'ANIMATION_EXPAND_BOTTOM', 
        method: 'ANIMATION_STRONG_EASE_OUT',
        sequence: 'ANIMATION_BY_NODE',
        speed: 275,
      }
    },
    series: [
      {
        // plot 1 values, linear data
        values: [23,20,27,29,25,17,15],
        text: 'Week 1',
      }
    ]
  };

  // render chart with width and height to
  // fill the parent container CSS dimensions
  zingchart.render({ 
    id: 'myChart1', 
    data: myConfig, 
    height: '100%', 
    width: '100%' 
  });
});

var myConfig = {
 	type: "pie", 
 	plot: {
 	  borderColor: "#2B313B",
 	  borderWidth: 1,
 	  // slice: 90,
 	  valueBox: {
 	    placement: 'out',
 	    text: '%t\n%npv%',
 	    fontFamily: "Open Sans"
 	  },
 	  tooltip:{
 	    fontSize: '18',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2, 
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
 	},
 	source: {
 	  text: 'gs.statcounter.com',
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans"
 	},
 	title: {
 	  fontColor: "#8e99a9",
 	  text: 'Global Browser Usage',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},
 	subtitle: {
 	  offsetX: 10,
 	  offsetY: 10,
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans",
 	  fontSize: "16",
 	  text: 'May 2016',
 	  align: "left"
 	},
 	plotarea: {
 	  margin: "20 0 0 0"  
 	},
	series : [
		{
			values : [51],
			text: "Internet Explorer",
		  backgroundColor: '#50ADF5',
		},
    {
			values : [48],
			text: "Internet Explorer",
		  backgroundColor: '#50ADF5',
		}
	]
};

zingchart.render({ 
	id : 'myChart2', 
	data : myConfig, 
	height: '100%', 
	width: '100%' 
});