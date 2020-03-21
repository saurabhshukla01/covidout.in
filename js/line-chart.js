		Chart.defaults.global.pointHitDetectionRadius = 1;

		var customTooltips = function(tooltip) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');

			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				this._chart.canvas.parentNode.appendChild(tooltipEl);
			}

			// Hide if no tooltip
			if (tooltip.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltip.yAlign) {
				tooltipEl.classList.add(tooltip.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltip.body) {
				var titleLines = tooltip.title || [];
				var bodyLines = tooltip.body.map(getBody);

				var innerHtml = '<thead>';

				titleLines.forEach(function(title) {
					innerHtml += '<tr><th>' + title + '</th></tr>';
				});
				innerHtml += '</thead><tbody>';

				bodyLines.forEach(function(body, i) {
					var colors = tooltip.labelColors[i];
					var style = 'background:' + colors.backgroundColor;
					style += '; border-color:' + colors.borderColor;
					style += '; border-width: 2px';
					var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
					innerHtml += '<tr><td>' + span + body + '</td></tr>';
				});
				innerHtml += '</tbody>';

				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			var positionY = this._chart.canvas.offsetTop;
			var positionX = this._chart.canvas.offsetLeft;

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.left = positionX + tooltip.caretX + 'px';
			tooltipEl.style.top = positionY + tooltip.caretY + 'px';
			tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
			tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
			tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
			tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
		};

		var lineChartData = {
			labels: ['01 Feb 2020',
            '02 Mar 2020',
            '04 Mar 2020',
            '06 Mar 2020',
            '08 Mar 2020',
            '10 Mar 2020',
            '12 Mar 2020',
            '14 Mar 2020',
            '16 Mar 2020',
            '18 Mar 2020',
            '21 Mar 2020'],
			datasets: [{
				label: 'Effected Person',
				borderColor: window.chartColors.red,
				pointBackgroundColor: window.chartColors.red,
				fill: false,
				data: [
					1, 5, 29, 31, 39, 50, 95, 120, 171, 270, 290
				]
			}, ]
		};

		window.onload = function() {
			var chartEl = document.getElementById('chart');
			window.myLine = new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
                        text: '',
                    },
					tooltips: {
						enabled: false,
						mode: 'index',
						position: 'nearest',
						custom: customTooltips
					}
				}
			});
		};



        