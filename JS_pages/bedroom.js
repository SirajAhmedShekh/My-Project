let sofabedApi = 'https://api-8q6p.onrender.com/sofabed';

let currentPage = 1;
let itemsPerPage = 8;

let card_container = document.querySelector(".card_container");

const bedApiFunc = async() => {
    
    try {
        let bedRes = await fetch(sofabedApi)
        let data = await bedRes.json();
        // console.log("🚀 ~ data:", data);

        sofabedApiFunc(data)
    } catch (error) {
        
        console.log("🚀 ~ error:", error);
    }
};


const sofabedApiFunc = (dataValue) => {

    card_container.innerHTML = "";

    let start = (currentPage - 1) * itemsPerPage
    let end = start + itemsPerPage

    let paginatedData = dataValue.slice(start, end)

paginatedData?.forEach((sofabed) => {
    // console.log("🚀 ~ sofabed:", sofabed);

    let showCard =document.createElement("div");
    showCard.className="card";
    showCard.innerHTML= `
    <img src=${sofabed.img} alt="image">
                <div class="card_info">
                    <h2>${sofabed.title}</h2>
                    <p>${sofabed.description}</p>
                    <h3>₹ ${sofabed.price}</h3>
                    <div class="review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i><br>
                        <button class="card_btn">View Details</button>
                    </div>
                </div>
    `
    card_container.append(showCard);
    
    let viewBtn = showCard.querySelector(".card_btn");

    viewBtn.addEventListener("click", () => {
        
        sessionStorage.setItem("viewProduct", JSON.stringify({id: sofabed.id}));
        window.location.href = "../HTML_pages/ProductDetail.html";

    });

});

    createPagination(dataValue)

};


const createPagination = (data) => {
    let pageContainer = document.querySelector(".pagination");
    pageContainer.innerHTML="";

    let totalPages = Math.ceil(data.length / itemsPerPage)

    for (let i= 1; i<= totalPages;i++) {
        let btn = document.createElement("button")
        btn.innerText = i ;

        btn.onclick = () => {
            currentPage = i
            sofabedApiFunc(data)
        }
        pageContainer.append(btn)
    }

};

window.onload = bedApiFunc();