
let livingApi = 'https://api-8q6p.onrender.com/living?_limit=6';

let cardBox = document.querySelector(".card_box");

const livingApiFunc = async() => {
    try {
        let livRes = await fetch(livingApi);
        let ApiData = await livRes.json();
        // console.log("🚀 ~ ApiData:", ApiData);
        
        livDataFunc(ApiData);
    } catch (error) {
        console.log("🚀 ~ error:", error);
        
    }
}


const livDataFunc = (value) => {

    cardBox.innerHTML="";
    
    
    value?.forEach((el) => {
        console.log("🚀 ~ el:", el);
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src=${el.img} alt="image">
          <div class="card_info">
            <h2>${el.title}</h2>
            <p>${el.description}</p>
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
        `
        cardBox.append(card);
});

};



window.onload = livingApiFunc;