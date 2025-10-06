

document.getElementById("oppg1_but").addEventListener("click", function (){
    let mydata = document.getElementById("oppg1_inp").value.toLowerCase();
    const myapi = "https://dattebayo-api.onrender.com/characters"
  let funnet = false

    fetch(myapi)
        .then(response => response.json())
        .then (data => {
            for (const element of data.characters) {
                let bilde = `"`+element.images[0]+`"`
                if (mydata == element.name.toLowerCase()) {
                    funnet = true
                    document.getElementById("name").innerHTML = element.name;
                    document.getElementById("ova").innerHTML = element.debut.ova;
                    document.getElementById("novel").innerHTML = element.debut.novel;
                    document.getElementById("movie").innerHTML = element.debut.movie;
                    document.getElementById("game").innerHTML = element.debut.game;
                    document.getElementById("father").innerHTML = element.family.father;
                    document.getElementById("mother").innerHTML = element.family.mother;
                    document.getElementById("jutsu").innerHTML = element.jutsu[0];
                    document.getElementById("birthdate").innerHTML = element.personal.birthdate;
                    document.getElementById("sex").innerHTML = element.personal.sex;
                    document.getElementById("bilde").innerHTML = `<img src=${bilde}>`
                }
            }
            if (funnet == true) {
              console.log(funnet)
              document.getElementById("container2").classList.remove("hidden")
              document.getElementById("feilmelding").classList.add("hidden");

            } else {
              document.getElementById("container2").classList.add("hidden")
              document.getElementById("feilmelding").classList.remove("hidden")              
            }
        })
})

var input = document.getElementById("oppg1_inp");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("oppg1_but").click();
  }
})