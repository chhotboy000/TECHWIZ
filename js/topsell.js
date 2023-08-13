var data = [
    {"id" : "p01" , "name" : "silver fir" , "pic1" : "kimngan1.jpg" , "pic2" : "kimngan2.jpg" , "price" : 288 , "description" : "Enhance the natural beauty of your indoor or outdoor space with our exquisite Silver Fir Tree. Known for its elegant appearance and soft, silvery-blue needles, the Silver Fir (Abies alba) adds a touch of sophistication to any setting. With its conical shape and graceful branches, this evergreen tree stands as a timeless symbol of tranquility and vitality. Perfect as a focal point in your garden or as a charming addition to your home, the Silver Fir Tree brings a touch of nature's majesty to your surroundings." , "cat" : "decor" , "water" : "much" , "light" : "little" , "species" : "L.periclymenum" , "height" : "80cm" , "cat2" : "50-" , "cat3" : "200-400"},
    
    {"id" : "p02" , "name" : "Jade plant" , "pic1" : "kimtien1.jpg" , "pic2" : "kimtien2.jpg" , "price":713, "water" : "little" , "light" : "much" , "species" : "C. ovata" , "height" : "52cm" , "description" : "Introducing our stunning Jade Plant (Crassula ovata), a captivating addition to your plant collection. Renowned for its vibrant green leaves and striking resilience, the Jade Plant brings an air of prosperity and positive energy to any space. With its fleshy, glossy leaves and tree-like appearance, this succulent is not only visually appealing but also easy to care for. Whether you're a seasoned plant enthusiast or just starting your journey, the Jade Plant is an ideal choice for adding charm and vitality to your home or office." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "600-"},

    {"id" : "p03" , "name" : "Peach Lily" , "pic1" : "peacelily1.jpg" , "pic2" : "peacelily2.jpg" , "price":625, "water" : "much" , "light" : "much" , "species" : "Spathiphyllum" , "height": "45cm" , "description" : "Discover the delicate elegance of our Peach Lily (Lilium spp.), a graceful beauty that will captivate your senses. With its soft, pastel-colored petals resembling the hues of a peach, this lily variety adds a touch of romance to gardens and bouquets alike. The Peach Lily's enchanting fragrance and refined appearance make it a beloved choice for both seasoned gardeners and those seeking a charming centerpiece. Elevate your space with the timeless allure of the Peach Lily." , "cat" : "decor" , "cat2" : "10-50" , "cat3" : "600-"},

    {"id" : "p04" , "name" : "Bamboo Bonsai" , "pic1" : "truckieng1.jpg" , "pic2" : "truckieng2.jpg" , "price":350, "water" : "little" , "light" : "little" , "species" : "D. sanderiana" , "height" : "85cm" , "description" : "Experience the harmonious blend of nature and artistry with our Bamboo Bonsai. This miniature masterpiece captures the serene beauty of bamboo in a compact form. Carefully cultivated and sculpted, the Bamboo Bonsai showcases the elegance of nature's simplicity. Its graceful appearance and calming presence make it a perfect addition to any space, whether it's your home, office, or a thoughtful gift. Discover the balance of tranquility and creativity with our enchanting Bamboo Bonsai." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "200-400"}

    

];

displayImages(data);

//lap trinh chi tiet san pham
var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
}

function productDetail(){
    var d = ``;
    var i = 0;
    for (var v of data){
        if (v.id == res){
            i++;
            d += `
                <div class="row">
                    <div class="col-md-6">
                        <div><img src="/image/${v.pic1}" alt="" class="flowerImaged"></div>
                    </div>
                    <div class="col-md-6">
                        <h3>${v.name.toUpperCase()}</h3>
                        <hr>
                        <h3>Price: $ ${v.price}</h3>
                        <hr>
                        <div>
                            <p>${v.description}</p>
                        </div>
                        <hr>
                        <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">ADD TO CART</a>
                    </div>
                </div>  
                `;
            break;
        }
    }
    if (i == 0){
        d += `404 Not Found`;
    }
    $("#productDetail").html(d);
}

function displayImages(items) {
    let s = ``;
	
	$.each(items, function (k, v) {

        s += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-5">
                <div class="product-card h-100 mb-0">
                    <a class="product-card__content" href="html/product_detail_page.html?id=${v.id}">
                        <span class="product-card__img" style='background-image:url(/image/${v.pic1})'></span>
                        <span class="product-card__title">
                        ${v.name.toUpperCase()}
                        </span>
                        <span class="product-card__price">
                        $${v.price}
                        </span>
                    </a>
                    <div class="product-card__actions">
                        <a class="product-card__btn mr-3" href="product_detail_page.html?id=${v.id}">
                            <i class="fas fa-plus mr-2"></i>
                            VIEW PRODUCT
                        </a>
                    </div>
                </div>
            </div>`;
    });
    
    $("#topsell").html(s);
}