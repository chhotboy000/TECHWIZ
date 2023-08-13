var data = [
    {"id" : "p07" , "name" : "Stone Lotus" , "pic1" : "senda10.jpg" , "pic2" : "senda11.jpg" , "price":110, "water" : "little" , "light" : "little" , "species" : "N nucifera" , "height" : "12cm" , "description" : "Introducing the exquisite Jade Plant (Crassula ovata), a symbol of prosperity and enduring beauty. With its striking green, fleshy leaves and elegant growth habit, the Jade Plant is a timeless favorite among plant enthusiasts. Renowned for its low-maintenance nature, this succulent thrives with minimal care, making it an ideal choice for beginners and busy individuals. Its charming appearance and reputation for bringing good luck make the Jade Plant a cherished addition to any indoor space. Elevate your plant collection with the classic allure of the Jade Plant." , "cat" : "table" , "cat2" : "10-50" , "cat3" : "0-200"},

    {"id" : "p08" , "name" : "Betel Leaf" , "pic1" : "trauba1.jpg" , "pic2" : "trauba2.jpg" , "price":100, "water" : "much" , "light" : "little" , "species" : "N nucifera" , "height" : "13cm" , "description" : "Discover the cultural and culinary richness of Betel Leaf (Piper betle), a versatile and aromatic herb that adds a touch of exotic flavor to your garden. Known for its heart-shaped, glossy leaves and distinctive taste, Betel Leaf has been cherished for centuries in various culinary traditions. Whether used in cooking, as a fragrant wrapper, or for its potential health benefits, this herb offers a unique gardening experience. Bring the vibrant essence of tradition to your garden with the enchanting Betel Leaf." , "cat" : "table" , "cat2" : "11-50" , "cat3" : "0-200"},

    {"id" : "p09" , "name" : "Nanouk Plant" , "pic1" : "Nanouk1.jpg" , "pic2" : "Nanouk2.jpg" , "price":395, "water" : "little" , "light" : "little" , "species" : "Tradescantia" , "height" : "8cm" , "description" : "Introducing the Nanouk Plant (Tradescantia 'Nanouk'), a living masterpiece that brings a burst of vibrant color and charm to your indoor spaces. With its striking multicolored leaves that transition from pink to purple and green, the Nanouk Plant adds a playful and lively touch to any environment. Known for its low-maintenance nature and trailing growth habit, this plant thrives in various conditions and is a perfect choice for hanging planters or tabletop displays. Elevate your decor with the joyful presence of the Nanouk Plant." , "cat" : "table" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p10" , "name" : "Coleus Burgundy" , "pic1" : "ColeusBurgundy1.jpg" , "pic2" : "ColeusBurgundy2.jpg" , "price":180, "water" : "little" , "light" : "little" , "species" : "Coleus" , "height" : "14cm" , "description" : "Introducing the captivating Coleus Burgundy (Solenostemon scutellarioides 'Burgundy'), a masterpiece of nature that adds a rich tapestry of color to your garden. With its velvety leaves showcasing shades of deep burgundy and green, the Coleus Burgundy is a visual delight that effortlessly steals the spotlight. Whether planted in borders, containers, or mixed arrangements, this vibrant foliage plant brings a touch of drama and allure to any landscape. Elevate your outdoor aesthetic with the captivating charm of Coleus Burgundy." , "cat" : "table" , "cat2" : "10-50" , "cat3" : "0-200"}

    

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
    
    $("#desk").html(s);
}