
let cartApi = 'https://api-8q6p.onrender.com/addToCart';

let cartProduct = [];


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
    // console.log("🚀 ~ val:", val);
   


    calculateCartTotal(val)
    const cartContainer = document.querySelector(".cart_box");
    cartContainer.innerHTML = "";
    if(val.length === 0){
        cartContainer.innerHTML = ` <div class="cart_msg"> Your cart is empty</div>`;
        return;
    }

    // let existingItem = val.find(item => item.id === val.id);

    // if (existingItem) {
    //     count++
    // }


    val && val.forEach((el) => {
        
        // console.log("🚀 ~ el:", el);
        let card = document.createElement("div");

        card.innerHTML = `
            <div class="cart_list">
                        <div class="image_title">
                            <img src=${el.img} alt="image" />
                            <div class="price_title">
                                <p>${el.title}</p>
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

                   await cartDatas();

                } catch (error) {
                    console.log("🚀 ~ error:", error);
                }
            });
        };

        if (decrement) {
            decrement.addEventListener("click", async () => {

                if (count > 1) {
                    count--
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
                        })

                        await cartDatas();

                    } catch (error) {
                        console.log("🚀 ~ error:", error);
                    }
                }
            });

        };

        if (removeItem) {
            removeItem.addEventListener("click", async () => {
                try {
                    await fetch(`${cartApi}/${el.id}`, {
                        method: "DELETE",
                    });
                   await cartDatas();
                } catch (error) {
                    console.log("🚀 ~ error:", error);
                }
            });
        };

        cartContainer.append(card)

    });
};


const calculateCartTotal = (data) => {
// console.log("🚀 ~ data:", data);

    let total = document.querySelector(".total");
    let taxPrice = document.querySelector(".tax_price");
    let deliveryPrice = document.querySelector(".delivery_price");
    let grandTotalPrice = document.querySelector(".grandTotal_price");
    let couponInput = document.querySelector(".couponInput");
    let couponBtn = document.querySelector(".coupon_btn");

       let subTotal = 0;

       data?.forEach((item) => {
    //    console.log("🚀 ~ item:", item);
    subTotal += item.price * item.qty;
       });

    //    taxPrice
    let tax = subTotal * 18 / 100 ;

    // delivery charge

    let delivery = 500;

    // grand total

    let grandTotal = subTotal + tax + delivery;

    
    // show in UI
    
    total.innerText = subTotal;
    taxPrice.innerText = tax.toFixed(2);
    deliveryPrice.innerText = delivery;
    grandTotalPrice.innerText = grandTotal.toFixed(2);


    couponBtn.addEventListener("click", () => {  
        
        let couponValue = couponInput.value;

        if (couponValue == "1234") {

            // 20% discount

           let discount = grandTotal * 20 / 100;

            let fixAmount = grandTotal - discount;

            grandTotalPrice.innerText = fixAmount.toFixed(2)
        }else{
           alert("Invalid Coupon Code")
        };
        
       });
};


window.onload = () => {
    cartDatas()
};