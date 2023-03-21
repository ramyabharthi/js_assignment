/* first we declare let variable */
let ctn = document.getElementById("ctn01");

// Then we create the array object....what the content we want to add the container
let carddetails = [
    {
        productimg : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        Productdetails: "Men Navy Blue Solid Sweatshirt",
        Brand : "United Colors of Benetton",
        Price : "RS 2599"
    },

    {
        productimg : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
        Productdetails: "Men Black MAMGP T7 Sweat Sporty Jacket",
        Brand : "PUMA",
        Price : "RS 7999"
    },
    {
        productimg : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
        Productdetails: "Men Black Action Parkview Lifestyle Shoes",
        Brand : "Hush Puppies",
        Price : "RS 6999"
    },
    {
        productimg : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
        Productdetails: "Women Black Solid Lightweight Leather Jacket",
        Brand : "BARESKIN",
        Price : "RS 9999"
    },
    {
        productimg : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
        Productdetails: "Women Blue Solid Shirt Dress",
        Brand : "SASSAFRAS",
        Price : "RS 5200"
    },
]

// let create function to create the HTML element;
function looping (addhtml){

    /* 1.create the variable and the create the html elements inside the container
    2.create one variable and using the logic to create the html content inside the container. */

    let newEl = document.createElement("div");  
    newEl.classList.add("carding");
    ctn.appendChild(newEl);

    /* 1.create the variable and createelement img
    2.add the class
    3.we already created the img element then we target the image source file(we already given in that object array line no.7 (product-img)) 
    4. Then create the child inside the cardcontainer*/

    let img01 = document.createElement("img");
    img01.classList.add("card-img");
    img01.src = addhtml.productimg;
    newEl.appendChild(img01);

    let heading1El = document.createElement("h3");
    heading1El.classList.add("heading3El")
    heading1El.innerHTML = addhtml.Productdetails;
    newEl.appendChild(heading1El);

    let heading2El = document.createElement("h4");
    heading2El.classList.add("heading4El");
    heading2El.innerHTML = addhtml.Brand;
    newEl.appendChild(heading2El);

    let heading3El = document.createElement("h5");
    heading3El.classList.add("heading5El");
    heading3El.innerHTML = addhtml.Price;
    newEl.appendChild(heading3El);
}
//  we loop through the variable of carddetails and addhtml

for ( let addhtml of carddetails){
    looping(addhtml)
}




let ctn02 = document.getElementById("ctn02");

let carddetails2 = [
    {
        Productimg02 : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
        Productdetails02: "Unisex Silver-Toned Series 3 Smart Watch",
        Brand02: "Apple",
        Price02 : "RS 31999"
    },

    {
        Productimg02 : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
        Productdetails02:"Unisex Black & Green Reflex 2.0 Smart Band",
        Brand02 : "Fastrack",
        Price02 : "RS 1999"
    },
    {
        Productimg02 :"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
        Productdetails02: "Unisex Black Galaxy Fit Fitness Band",
        Brand02: "Samsung",
        Price02 : "RS 9990"
    },
    {
        Productimg02 : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
        Productdetails02:  "Gear IconX Black Cord-free Fitness Earbuds",
        Brand02: "Samsung",
        Price02 : "RS 13990"
    },
    {
        Productimg02 : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
        Productdetails02: "White 2nd Gen AirPods with Charging Case",
        Brand02: "Apple",
        Price02 : "RS 14999"
    },
]


// let create function to create the HTML element;
function looping2 (addhtml2){

    /* 1.create the variable and the create the html elements inside the container
    2.create one variable and using the logic to create the html content inside the container. */

    let newEl2 = document.createElement("div");  
    newEl2.classList.add("carding02");
    ctn02.appendChild(newEl2);

    /* 1.create the variable and createelement img
    2.add the class
    3.we already created the img element then we target the image source file(we already given in that object array line no.7 (product-img)) 
    4. Then create the child inside the cardcontainer*/

    let img02 = document.createElement("img");
    img02.classList.add("card-img");
    img02.src = addhtml2.Productimg02;
    newEl2.appendChild(img02);

    let heading1El = document.createElement("h3");
    heading1El.classList.add("heading3El")
    heading1El.innerHTML = addhtml2.Productdetails02;
    newEl2.appendChild(heading1El);

    let heading2El = document.createElement("h4");
    heading2El.classList.add("heading4El");
    heading2El.innerHTML = addhtml2.Brand02;
    newEl2.appendChild(heading2El);

    let heading3El = document.createElement("h5");
    heading3El.classList.add("heading5El");
    heading3El.innerHTML = addhtml2.Price02;
    newEl2.appendChild(heading3El);
}
//  we loop through the variable of carddetails and addhtml

for ( let addhtml2 of carddetails2){
    looping2(addhtml2)
}