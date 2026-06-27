
const livingApi = 'https://api-8q6p.onrender.com/living?_limit=6';
const sofabedApi = 'https://api-8q6p.onrender.com/sofabed?_limit=6';
const diningApi = 'https://api-8q6p.onrender.com/dining?_limit=4';
const officeApi = 'https://api-8q6p.onrender.com/office?_limit=12';

let livingCardBox = document.querySelector(".card_box");
let sofabedCordBox = document.getElementById("bed_container");
let diningCardBox = document.querySelector(".dining_card_box");
let officeCardBox = document.querySelector(".office_card_box");

// LIVING API FETCHING START

const livingApiFunc = async () => {
  try {
    let livRes = await fetch(livingApi);
    let livApiData = await livRes.json();
    // console.log("🚀 ~ ApiData:", ApiData);

    livDataFunc(livApiData);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
}


const livDataFunc = (value) => {
  livingCardBox.innerHTML = "";

  value?.forEach((el) => {
    // console.log("🚀 ~ el:", el);
    let livingCard = document.createElement("div");
    livingCard.className = "card";
    livingCard.innerHTML = `
        <img src=${el.img} alt="image">
          <div class="card_info">
            <h2>${el.title}</h2>
            <h3>₹ ${el.price}</h3>
            <div class="review">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i><br>
              <button class="card_btn">View More</button>
            </div>
          </div>
        `;
    const cardBtn = livingCard.querySelector(".card_btn")

    cardBtn.addEventListener("click", () => {
      window.location.href = "../HTML_pages/Living.html"

    })
    livingCardBox.append(livingCard);
  });

};


// SOFABED API FETCHING START

const sofabedApiFunc = async () => {

  try {
    let bedRes = await fetch(sofabedApi)
    let bedApiData = await bedRes.json();
    // console.log("🚀 ~ bedApiData:", bedApiData);

    bedDataFunc(bedApiData)
  } catch (error) {

    console.log("🚀 ~ error:", error);
  }
}

const bedDataFunc = (val) => {
  // console.log("🚀 ~ val:", val);
  sofabedCordBox.innerHTML = "";

  val?.forEach((els) => {
    // console.log("🚀 ~ els:", els);
    let sofabedCard = document.createElement("div");
    sofabedCard.className = "card";
    sofabedCard.innerHTML = `
     <img src=${els.img} alt="image">
          <div class="card_info">
            <h2>${els.title}</h2>
            <h3>₹ ${els.price}</h3>
            <div class="review">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i><br>
              <button class="card_btn">View More</button>
            </div>
          </div>
    
    `;

    let bedCardBtn = sofabedCard.querySelector(".card_btn");

    bedCardBtn.addEventListener("click", () => {

      window.location.href = "../HTML_pages/Bedroom.html";
    });

    sofabedCordBox.append(sofabedCard);
  });

};


// DINING API FETCHING START

const diningApiFunc = async () => {
  try {
    let diningRes = await fetch(diningApi)
    let diningData = await diningRes.json()
    // console.log("🚀 ~ diningData:", diningData);

    diningDataFunc(diningData)
  } catch (error) {
    console.log("🚀 ~ error:", error);

  }
};

const diningDataFunc = (vals) => {
  // console.log("🚀 ~ elss:", elss);
  diningCardBox.innerHTML = "";

  vals?.forEach((elss) => {
    let diningCard = document.createElement("div");
    diningCard.className = "card";
    diningCard.innerHTML = `
            <img src=${elss.img} alt="">
            <div class="card_info">
              <h2>${elss.title}</h2>
              <h3>₹ ${elss.price}</h3>
              <div class="review">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i><br>
                <button class="card_btn">View More</button>
              </div>
              </div>
            
      `;


    diningCardBox.append(diningCard);
  });
};


// OFFICE API FETCHING START

const officeApiFunc = async () => {
  try {
    let officeRes = await fetch(officeApi)
    let officeData = await officeRes.json();
    //  console.log("🚀 ~ officeData:", officeData);

    officeDataFunc(officeData)

  } catch (error) {
    console.log("🚀 ~ error:", error);

  }
};


const officeDataFunc = (valss) => {

  officeCardBox.innerHTML = "";

  for (let i = 0; i < valss.length; i+=4) {
    
    let officeCard = document.createElement("div");
    officeCard.className = "office_card";
    officeCard.innerHTML = `
          <img class="img_1 office_img" src=${valss[i]?.img} alt="image">
          <img class="img_2 office_img" src=${valss[i+1]?.img} alt="image">
          <img class="img_3 office_img" src=${valss[i+2]?.img} alt="image">
          <img class="img_4 office_img" src=${valss[i+3]?.img} alt="image">
    `;

    let officeImg = officeCard.querySelectorAll(".office_img")

    officeImg.forEach((img) => {
      img.addEventListener("click", () => {
        alert ("officecard")
        // window.location = "../HTML_pages/Office.html"
      })
    })



    officeCardBox.append(officeCard)
  }

}




window.onload = () => {
  livingApiFunc();
  sofabedApiFunc();
  diningApiFunc();
  officeApiFunc();
}
