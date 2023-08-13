var data = [
    {"id" : "p14" , "name" : "Patio Paeonia" , "pic1" : "PatioPaeonia1.jpg" , "pic2" : "PatioPaeonia2.jpg" , "price":163, "water" : "little" , "light" : "little" , "species" : "Paeonia" , "height" : "05cm" , "description" : "Introducing the enchanting Patio Paeonia, a blooming masterpiece that brings the allure of peonies to your outdoor space. With its lush foliage and abundant, delicate blooms, the Patio Paeonia adds a touch of timeless elegance to your garden or patio. Known for its luxurious flowers in various shades and captivating fragrances, this perennial beauty creates a focal point that captivates the senses. Elevate your outdoor aesthetic with the captivating charm of the Patio Paeonia, a true testament to nature's artistry." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "0-200"},

    {"id" : "p15" , "name" : "Platycodon" , "pic1" : "Platycodon1.jpg" , "pic2" : "Platycodon2.jpg" , "price":340, "water" : "much" , "light" : "little" , "species" : "P.grandiflorus" , "height" : "03cm" , "description" : "Introducing the graceful Platycodon, a botanical wonder that adds an elegant touch to your garden or floral display. With its charming balloon-like buds that burst into star-shaped blooms, the Platycodon captures the imagination with its enchanting transformation. Known for its versatility and eye-catching colors, this perennial beauty is a symbol of resilience and grace. Whether planted in beds, borders, or containers, the Platycodon is a captivating choice that elevates the beauty of any outdoor or indoor space." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p16" , "name" : "Salsa Impatiens" , "pic1" : "SalsaImpatiens1.jpg" , "pic2" : "SalsaImpatiens2.jpg" , "price":340, "water" : "much" , "light" : "much" , "species" : "Impatiens" , "height" : "02cm" , "description" : "Introducing the vibrant Salsa Impatiens, a burst of lively color that dances through your garden with unmatched energy. With its fiery blooms and lush foliage, the Salsa Impatiens adds a dynamic and cheerful presence to any landscape. Known for its resilience and ability to thrive in both sun and shade, this flowering beauty is perfect for borders, containers, and hanging baskets. Elevate your outdoor aesthetic with the fiery allure of Salsa Impatiens, a celebration of nature's vivid palette." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p17" , "name" : "Stokesia laevis" , "pic1" : "Stokesialaevis1.jpg" , "pic2" : "Stokesialaevis2.jpg" , "price":68, "water" : "little" , "light" : "much" , "species" : "S. laevis" , "height" : "04cm" , "description" : "Introducing the enchanting Stokesia laevis, a true gem that graces your garden with its elegant and captivating beauty. With its daisy-like blooms and lush foliage, the Stokesia laevis brings a touch of timeless charm to any outdoor space. Known for its durability and vibrant colors, this perennial wonder is a delightful addition to beds, borders, and cut-flower arrangements. Elevate your garden with the enduring allure of Stokesia laevis, a testament to nature's artistry." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "0-200"}

    

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
    
    $("#flower").html(s);
}