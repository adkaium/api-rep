const searchPlayer =()=>{
    const inputTxt = document.getElementById('input-fild').value;

    inputTxt.value = "";
    // console.log(inputTxt)
   
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputTxt}`
   
    fetch(url)
    .then(res => res.json())
    .then(data =>cardShow(data.player))
}

const cardShow = (palyer) =>{
    const parant =document.getElementById('col');
    parant.textContent = ''
    palyer.forEach(element => {
        console.log(element) 
      const div =  document.createElement('div');
      div.innerHTML= `
      <div class="card" style="width: 18rem;">
      <img src="${element.strThumb}" alt="" class="card-img-top">
      <div class="card-body">
          <h5 class="card-title">${element.strPlayer}</h5>
          <h6 class="card-title">Nationality: ${element.strNationality}</h6>
          <a href="#" class="btn btn-primary" onclick="showDetails()">Details</a>
      </div>
  </div>
      `
      parant.appendChild(div)
    });
}

const showDetails=()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_countries.php')
    .then(rep => rep.json())
    .then(data => console.log(data))
}
