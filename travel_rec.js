//const addPatientButton = document.getElementById("addPatient");
//const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const rec = [];

function resetSearch() {
      document.getElementById("searchInput").placeholder = "Enter 'beach', 'temple', or 'country";
      document.getElementById("s1-i").src = "";
      document.getElementById("s1-h2").textContent = "";
      document.getElementById("s1-p").textContent = "";
      document.getElementById("s2-i").src = "";
      document.getElementById("s2-h2").textContent = "";
      document.getElementById("s2-p").textContent = "";
    }    

btnSearch.addEventListener('click', resetSearch);

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();

    fetch('./travel_rec.json')
      .then(response => response.json())
      .then(data => {

        if (input == "country") {
          console.log("Recommendation found!");
          const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else if (input == "temple"){

        } else if (input == "beach"){

        } else {
            console.log("NO Recommendation found!");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log("NO Recommendation found!");
      });
  }

  btnSearch.addEventListener('click', btnSearch);