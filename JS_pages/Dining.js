
let diningApi = 'https://api-8q6p.onrender.com/dining';

let cardBox = document.querySelector(".card_box");

let currentPage = 1;
let itemsPerPage = 8;


const diningApiFunc = async() => {
    try {
        let diningRes = await fetch(diningApi);
        let diningData = await diningRes.json();

        diningDataFunc(diningData)
    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
};


const diningDataFunc = (data) => {
    
    
    cardBox.innerHTML = "";

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    let paginationData = data.slice(start, end);
    
    paginationData?.forEach((dining) => {
    
        let diningCard = document.createElement("div");
        diningCard.className = "card";
        diningCard.innerHTML = `
                     <img src=${dining.img} alt="image">
                    <div class="card_info">
                        <h3>${dining.title}</h3>
                        <h2>₹ ${dining.price}</h2>
                        <button class="View_btn">View Details</button>
                    </div>
    `
        cardBox.append(diningCard);

        let viewBtn =diningCard.querySelector(".View_btn");

        viewBtn.addEventListener("click", () => {
            sessionStorage.setItem("viewProduct", JSON.stringify({id: dining.id}));
            window.location.href= "../HTML_pages/ProductDetail.html";

        })

    });

    createPagination(data);
};

const createPagination = (itemData) =>{
    let pageContainer = document.querySelector(".pagination")

    pageContainer.innerHTML = "";

    let totalPages = Math.ceil(itemData.length / itemsPerPage);

    for (let i= 1; i<= totalPages;i++) {
        let btn = document.createElement("button")
        btn.innerText = i ;

        btn.onclick = () => {
            currentPage = i
            diningDataFunc(itemData)
        }
        pageContainer.append(btn)
    };


}

window.onload = diningApiFunc();