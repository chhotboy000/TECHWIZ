var data = [
    {"id" : "p03" , "name" : "Peach Lily" , "pic1" : "peacelily1.jpg" , "pic2" : "peacelily2.jpg" , "price":625, "water" : "much" , "light" : "much" , "species" : "Spathiphyllum" , "height": "45cm" , "description" : "Discover the delicate elegance of our Peach Lily (Lilium spp.), a graceful beauty that will captivate your senses. With its soft, pastel-colored petals resembling the hues of a peach, this lily variety adds a touch of romance to gardens and bouquets alike. The Peach Lily's enchanting fragrance and refined appearance make it a beloved choice for both seasoned gardeners and those seeking a charming centerpiece. Elevate your space with the timeless allure of the Peach Lily." , "cat" : "decor" , "cat2" : "10-50" , "cat3" : "600-"},

    {"id" : "p04" , "name" : "Bamboo Bonsai" , "pic1" : "truckieng1.jpg" , "pic2" : "truckieng2.jpg" , "price":350, "water" : "little" , "light" : "little" , "species" : "D. sanderiana" , "height" : "85cm" , "description" : "Experience the harmonious blend of nature and artistry with our Bamboo Bonsai. This miniature masterpiece captures the serene beauty of bamboo in a compact form. Carefully cultivated and sculpted, the Bamboo Bonsai showcases the elegance of nature's simplicity. Its graceful appearance and calming presence make it a perfect addition to any space, whether it's your home, office, or a thoughtful gift. Discover the balance of tranquility and creativity with our enchanting Bamboo Bonsai." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "200-400"},

    {"id" : "p05" , "name" : "Baby Rubber Plant" , "pic1" : "truongsinh1.jpg" , "pic2" : "truongsinh2.jpg" , "price":82, "water" : "little" , "light" : "little" , "species" : "F. elastica" , "height" : "91cm" , "description" : "Introducing our charming Baby Rubber Plant (Peperomia obtusifolia), a delightful addition to your indoor green haven. With its glossy, round leaves that resemble rubbery paddles, this compact plant offers a touch of lushness to any space. The Baby Rubber Plant is adored for its easy care and versatility, thriving in various light conditions. Its petite size makes it an ideal choice for desktops, shelves, and cozy corners. Elevate your interior decor with the captivating simplicity of the Baby Rubber Plant." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "0-200"},

    {"id" : "p06" , "name" : "Purple Oxalis" , "pic1" : "PurpleOxalis1.jpg" , "pic2" : "PurpleOxalis2.jpg" , "price":63, "water" : "much" , "light" : "much" , "species" : "Oxalis triangularis" , "height" : "71cm" , "description" : "Unveil the captivating charm of our Purple Oxalis (Oxalis triangularis), a unique gem in the world of indoor plants. With its distinctive purple foliage that unfurls into delicate shamrock-shaped leaves, this plant adds an enchanting touch of whimsy to any setting. The Purple Oxalis is renowned for its responsive nature, with leaves opening and closing in response to light changes. Perfect for both novice and experienced plant enthusiasts, this plant brings a touch of elegance and intrigue to your living space. Elevate your collection with the mesmerizing allure of the Purple Oxalis." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "0-200"}

    

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
    
    $("#decor").html(s);
}