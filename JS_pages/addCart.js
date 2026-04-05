
let cartApi = 'https://api-8q6p.onrender.com/addToCart';

const cartDatas = async () => {
    try {
        let res = await fetch(cartApi)
        let data = await res.json()
        appendCartData(data)
        console.log("🚀 ~ datssssa:", data);
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
}


const appendCartData = (val) => {
    const cartContainer = document.querySelector(".cart_box");

    val && val.map((el)=> {
        let card = document.createElement("div");

        card.innerHTML= `
            <div class="cart_list">
                        <div class="image_title">
                            <img src=${el.img} alt="image" />
                            <div class="price_title">
                                <p>${el.description}</p>
                                <p>₹<span>${el.price}</span></p>
                            </div>
                        </div>
                        <div class="total_count">
                            <div class="button">
                                <button class="descrease">-</button>
                                <span>1</span>
                                <button class="increase">+</button>
                            </div>
                            <p>₹<span>${el.price}</span></p>
                            <a><i class="fa-solid fa-trash-arrow-up"></i></a>
                        </div>
                    </div>
        `
        cartContainer.append(card)
        
    })

    
}

window.onload = () => {
    cartDatas()
}