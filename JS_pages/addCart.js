
let cartApi = 'https://api-8q6p.onrender.com/addToCart';

const cartDatas = async () => {
    try {
        let res = await fetch(cartApi)
        let data = await res.json()
        appendCartData(data)
        // console.log("🚀 ~ datssssa:", data);
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
}


const appendCartData = (val) => {
    const cartContainer = document.querySelector(".cart_box");
    cartContainer.innerHTML = "";

    val && val.forEach((el) => {
        // console.log("🚀 ~ el:", el.qty);
        let card = document.createElement("div");

        card.innerHTML = `
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
                                <button class="decrease">-</button>
                                <input type="text" value=${el.qty || 1} class="cartCount" />
                                <button class="increase">+</button>
                            </div>

                            <p>₹<span class= "total_price">${el.price * el.qty || 1}</span></p>
                            <a class="deleteBtn"><i class="fa-solid fa-trash-arrow-up"></i></a>
                        </div>
                    </div>
        `;


        let increment = card.querySelector(".increase");
        let decrement = card.querySelector(".decrease");
        let removeItem = card.querySelector(".deleteBtn");
        let countInput = card.querySelector(".cartCount");
        let total_price = card.querySelector(".total_price");

        let count = el.qty || 1;
        // console.log("🚀 ~ count:", count);


        if (increment) {
            increment.addEventListener("click", async () => {
                count++;
                console.log("🚀 ~ count:", count);
                countInput.value = count;
                total_price.innerText = el.price * count;

                try {
                    await fetch(`${cartApi}/${el.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            qty: count
                        })
                    });

                } catch (error) {
                    console.log("🚀 ~ error:", error);
                }
            });
        };

        if (decrement) {
            decrement.addEventListener("click", async() =>{
               
                if (count > 1) {
                    count--
                    countInput.value = count;
                    total_price.innerText= el.price * count;
                    try {
                        await fetch(`${cartApi}/${el.id}`, {
                            method:"PATCH",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({
                                qty:count
                            })
                        })
                    } catch (error) {
                        console.log("🚀 ~ error:", error);
                    }
            }
            });
            
        };

        if (removeItem) {
            removeItem.addEventListener("click", async()=>{
                try {
                    await fetch(`${cartApi}/${el.id}`, {
                        method:"DELETE",
                    });
                    cartDatas();
                } catch (error) {
                    console.log("🚀 ~ error:", error);
                }
            });
        };

        cartContainer.append(card)

    });
};


window.onload = () => {
    cartDatas()
}