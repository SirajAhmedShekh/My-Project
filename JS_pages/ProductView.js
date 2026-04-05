let livingApi = 'https://api-8q6p.onrender.com/living';
let cartApi = 'https://api-8q6p.onrender.com/addToCart';

const product = JSON.parse(sessionStorage.getItem("viewProduct"));

const detailsData = async () => {
    try {
        let res = await fetch(livingApi)
        let productDetails = await res.json()

        let matchProduct = productDetails.find((el) => el.id === product.id)
        productViewFunc(matchProduct)
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
}


const productViewFunc = (val) => {

    const viewProduct = document.querySelector(".container");

    if (val) {                   //<= jab value tru
        viewProduct.innerHTML = `
    <div class="image_box">
                <img src=${val.img} />
            </div>

            <div class="detail_container">
                <div class="val_detail">
                    <h2>${val.title}</h2>
                    <p>${val.description}</p>
                    <h4>₹ <span class="price">${val.price}</span></h4>
                    <div class="review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>

                <div class="delivery_detail">
                    <h2>IN-HOME DELIVERY</h2>
                    <P>In stock and ready for delivery to PIN Code <span>104235</span></P>
                    <ul>
                        <li>Placement in the room of your choice</li>
                        <li>Assembly & removal of packaging</li>
                        <li>Order multiple items, pay one flat rate delivery fee</li>
                    </ul>
                </div>
                <div class="quantity">
                    <div class="button">
                        <button class="descrease">-</button>                        
                        <input type="text" value="1" id="count" />
                        <button class="increase">+</button>
                    </div>
                    <h4>₹ <span id="total_price">${val.price}</span></h4>
                </div>
                <button class="cart_btn">ADD TO CART</button>
            </div>
    `

        let addToCart = viewProduct.querySelector(".cart_btn")
        console.log("🚀 ~ addToCart:", addToCart);
        if(addToCart){
            addToCart.addEventListener("click", async () => {
                const cartData = {
                    img: val.img,
                    qty: val.qty,
                    price: val.price,
                    description: val.description
                } 
                try {
                    let res = await fetch(cartApi, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(cartData)
                    });
                    window.location.href = "../HTML_pages/addCart.html"
                } catch (error) {
                    console.log("🚀 ~ error:", error);
                }
            })
        }

    }

    handleIncrement(val)

};


const handleIncrement = (val) => {
    const increment = document.querySelector(".increase");
    const derement = document.querySelector(".descrease");
    let count = document.querySelector("#count");
    let total = document.querySelector("#total_price");

    increment.addEventListener("click", async () => {
        let newQty = val.qty + 1;
        let newPrice = val.price * newQty

        count.innerText = newQty;
        total.innerText = val.price * newQty;

        await fetch(`${livingApi}/${val.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                qty: newQty,
                price: newPrice
            })
        });
        console.log("🚀 ~ val:", val);

        val.qty = newQty;
    });


    derement.addEventListener("click", async () => {
        let newQty = val.qty - 1;
        let newPrice = val.price * newQty

        count.innerText = newQty;
        total.innerText = val.price * newQty;

        await fetch(`${livingApi}/${val.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                qty: newQty,
                price: newPrice
            })
        });

        val.qty = newQty;
    });
}


window.onload = () => {
    detailsData();
}