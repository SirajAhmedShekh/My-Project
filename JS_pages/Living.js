let currentPage = 1;
let itemsPerPage = 8;


let livingApi = 'https://api-8q6p.onrender.com/living';

let cartApi = 'https://api-8q6p.onrender.com/addToCart';

// const catrApiFunc = async() => {
//      try {
//         let res = await fetch(cartApi,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(objName)
//         })
//         let cartData = await res.json();
//         console.log("🚀 ~ cartData:", cartData);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// catrApiFunc();


const ApiFunc = async () => {
    try {
        let res = await fetch(livingApi)
        let data = await res.json();
        console.log("🚀 ~ data:", data);
        // let machId = data.find((item) => item.id === id)
        // console.log("🚀 ~ machId:", machId);

        livingFunc(data)
    } catch (error) {
        console.log(error);
    }
}


const livingFunc = (value) => {
    console.log("🚀 ~ value:", value);
    let parent_child = document.querySelector('.parent_child')
    parent_child.innerHTML = ""

    let start = (currentPage - 1) * itemsPerPage
    let end = start + itemsPerPage

    let paginatedData = value.slice(start, end)

    paginatedData.forEach((el) => {
        let card = document.createElement("div");
        card.className = "card"
        card.innerHTML = `
                        <img src=${el.img} alt="image">
                        <div class="card_info">
                            <h2>${el.title}</h2>
                            <p>${el.description}</p>
                            <h3>${el.price}</h3>
                            <div class="review">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i><br>
                                <button class="card_btn">Add to cart</button>
                            </div>
                        </div>
            
    `
        parent_child.append(card)

    })

    

    createPagination(value)
}


const createPagination = (data) => {

    let pageContainer = document.querySelector('.pagination')
    pageContainer.innerHTML = ""

    let totalPages = Math.ceil(data.length / itemsPerPage)

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement('button')
        btn.innerText = i

        btn.onclick = () => {
            currentPage = i
            livingFunc(data)
        }
        pageContainer.append(btn)
    }


}


window.onload = ApiFunc()