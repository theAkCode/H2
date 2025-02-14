document.addEventListener('DOMContentLoaded', () => {
    const data = {
      covid19: {
        "demoone": {
          status: 'Green',
          cases: 0,
        },
        "demotwo": {
          status: 'Yellow',
          cases: 12,
        },
        "demothree.": {
          status: 'Red',
          cases: 150,
        },
      },
      monkeypox: {
        "demofour": {
          status: 'Yellow',
          cases: 5,
        },
        "demofive": {
          status: 'Green',
          cases: 1,
        },
      },
    };
  
    
    function updateZone(areaData, areaName, disease) {
      const statusElement = document.getElementById("status");
      const casesElement = document.getElementById("cases");
      const areaNameElement = document.getElementById("areaName");
      const precautionList = document.getElementById("precautionList");
      
      
      areaNameElement.textContent = areaName.charAt(0).toUpperCase() + areaName.slice(1);
      statusElement.textContent = areaData.status;
      casesElement.textContent = areaData.cases;
  
      
      if (areaData.status === 'Green') {
        statusElement.classList.remove('yellow', 'red');
        statusElement.classList.add('green');
      } else if (areaData.status === 'Yellow') {
        statusElement.classList.remove('green', 'red');
        statusElement.classList.add('yellow');
      } else if (areaData.status === 'Red') {
        statusElement.classList.remove('green', 'yellow');
        statusElement.classList.add('red');
      }
  
      
      if (disease === 'covid19') {
        precautionList.innerHTML = `
          <li>Wash your hands frequently for at least 20 seconds.</li>
          <li>Wear a mask in public areas.</li>
          <li>Maintain a safe distance of 6 feet from others.</li>
          <li>Avoid crowded places and gatherings.</li>
        `;
      } else if (disease === 'monkeypox') {
        precautionList.innerHTML = `
          <li>Isolate yourself if you have symptoms.</li>
          <li>Avoid close contact with infected individuals.</li>
          <li>Wear protective clothing and gloves if handling infected items.</li>
          <li>Seek medical attention if symptoms appear.</li>
        `;
      }
    }
  
    
    window.showEpidemicInfo = function() {
      const areaInput = document.getElementById('areaInput').value.trim().toLowerCase();
      const diseaseSelect = document.getElementById('diseaseSelect').value;
  
      if (data[diseaseSelect] && data[diseaseSelect][areaInput]) {
        updateZone(data[diseaseSelect][areaInput], areaInput, diseaseSelect);
      } else {
        alert("Sorry, no data available for the entered area or disease.");
      }
    };
  });
  