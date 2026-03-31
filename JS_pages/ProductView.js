
const product = JSON.parse(sessionStorage.getItem("viewProduct"));
// console.log("🚀 ~ product:", product.price);


const productViewFunc = () => {
    
    const viewProduct = document.querySelector(".container");

    viewProduct.innerHTML = `
    <div class="image_box">
                <img src=${product.img}>
            </div>

            <div class="detail_container">
                <div class="product_detail">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <h4>₹ <span>${product.price}</span></h4>
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
                        <span>10</span>
                        <button class="increase">+</button>
                    </div>
                    <h4>₹ <span>145000</span></h4>
                </div>
                <button class="cart_btn">ADD TO CART</button>
            </div>
    `

}

