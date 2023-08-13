var data = [
    {"id" : "p01" , "name" : "silver fir" , "pic1" : "kimngan1.jpg" , "pic2" : "kimngan2.jpg" , "price" : 288 , "description" : "Enhance the natural beauty of your indoor or outdoor space with our exquisite Silver Fir Tree. Known for its elegant appearance and soft, silvery-blue needles, the Silver Fir (Abies alba) adds a touch of sophistication to any setting. With its conical shape and graceful branches, this evergreen tree stands as a timeless symbol of tranquility and vitality. Perfect as a focal point in your garden or as a charming addition to your home, the Silver Fir Tree brings a touch of nature's majesty to your surroundings." , "cat" : "decor" , "water" : "much" , "light" : "little" , "species" : "L.periclymenum" , "height" : "80cm" , "cat2" : "50-" , "cat3" : "200-400"},
    
    {"id" : "p02" , "name" : "Jade plant" , "pic1" : "kimtien1.jpg" , "pic2" : "kimtien2.jpg" , "price":713, "water" : "little" , "light" : "much" , "species" : "C. ovata" , "height" : "52cm" , "description" : "Introducing our stunning Jade Plant (Crassula ovata), a captivating addition to your plant collection. Renowned for its vibrant green leaves and striking resilience, the Jade Plant brings an air of prosperity and positive energy to any space. With its fleshy, glossy leaves and tree-like appearance, this succulent is not only visually appealing but also easy to care for. Whether you're a seasoned plant enthusiast or just starting your journey, the Jade Plant is an ideal choice for adding charm and vitality to your home or office." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "600-"},

    {"id" : "p03" , "name" : "Peach Lily" , "pic1" : "peacelily1.jpg" , "pic2" : "peacelily2.jpg" , "price":625, "water" : "much" , "light" : "much" , "species" : "Spathiphyllum" , "height": "45cm" , "description" : "Discover the delicate elegance of our Peach Lily (Lilium spp.), a graceful beauty that will captivate your senses. With its soft, pastel-colored petals resembling the hues of a peach, this lily variety adds a touch of romance to gardens and bouquets alike. The Peach Lily's enchanting fragrance and refined appearance make it a beloved choice for both seasoned gardeners and those seeking a charming centerpiece. Elevate your space with the timeless allure of the Peach Lily." , "cat" : "decor" , "cat2" : "10-50" , "cat3" : "600-"},

    {"id" : "p04" , "name" : "Bamboo Bonsai" , "pic1" : "truckieng1.jpg" , "pic2" : "truckieng2.jpg" , "price":350, "water" : "little" , "light" : "little" , "species" : "D. sanderiana" , "height" : "85cm" , "description" : "Experience the harmonious blend of nature and artistry with our Bamboo Bonsai. This miniature masterpiece captures the serene beauty of bamboo in a compact form. Carefully cultivated and sculpted, the Bamboo Bonsai showcases the elegance of nature's simplicity. Its graceful appearance and calming presence make it a perfect addition to any space, whether it's your home, office, or a thoughtful gift. Discover the balance of tranquility and creativity with our enchanting Bamboo Bonsai." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "200-400"},

    {"id" : "p05" , "name" : "Baby Rubber Plant" , "pic1" : "truongsinh1.jpg" , "pic2" : "truongsinh2.jpg" , "price":82, "water" : "little" , "light" : "little" , "species" : "F. elastica" , "height" : "91cm" , "description" : "Introducing our charming Baby Rubber Plant (Peperomia obtusifolia), a delightful addition to your indoor green haven. With its glossy, round leaves that resemble rubbery paddles, this compact plant offers a touch of lushness to any space. The Baby Rubber Plant is adored for its easy care and versatility, thriving in various light conditions. Its petite size makes it an ideal choice for desktops, shelves, and cozy corners. Elevate your interior decor with the captivating simplicity of the Baby Rubber Plant." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "0-200"},

    {"id" : "p06" , "name" : "Purple Oxalis" , "pic1" : "PurpleOxalis1.jpg" , "pic2" : "PurpleOxalis2.jpg" , "price":63, "water" : "much" , "light" : "much" , "species" : "Oxalis triangularis" , "height" : "71cm" , "description" : "Unveil the captivating charm of our Purple Oxalis (Oxalis triangularis), a unique gem in the world of indoor plants. With its distinctive purple foliage that unfurls into delicate shamrock-shaped leaves, this plant adds an enchanting touch of whimsy to any setting. The Purple Oxalis is renowned for its responsive nature, with leaves opening and closing in response to light changes. Perfect for both novice and experienced plant enthusiasts, this plant brings a touch of elegance and intrigue to your living space. Elevate your collection with the mesmerizing allure of the Purple Oxalis." , "cat" : "decor" , "cat2" : "50-" , "cat3" : "0-200"},

    {"id" : "p07" , "name" : "Stone Lotus" , "pic1" : "senda10.jpg" , "pic2" : "senda11.jpg" , "price":110, "water" : "little" , "light" : "little" , "species" : "N nucifera" , "height" : "12cm" , "description" : "Introducing the exquisite Jade Plant (Crassula ovata), a symbol of prosperity and enduring beauty. With its striking green, fleshy leaves and elegant growth habit, the Jade Plant is a timeless favorite among plant enthusiasts. Renowned for its low-maintenance nature, this succulent thrives with minimal care, making it an ideal choice for beginners and busy individuals. Its charming appearance and reputation for bringing good luck make the Jade Plant a cherished addition to any indoor space. Elevate your plant collection with the classic allure of the Jade Plant." , "cat" : "table" , "cat2" : "10-50" , "cat3" : "0-200"},

    {"id" : "p08" , "name" : "Betel Leaf" , "pic1" : "trauba1.jpg" , "pic2" : "trauba2.jpg" , "price":100, "water" : "much" , "light" : "little" , "species" : "N nucifera" , "height" : "13cm" , "description" : "Discover the cultural and culinary richness of Betel Leaf (Piper betle), a versatile and aromatic herb that adds a touch of exotic flavor to your garden. Known for its heart-shaped, glossy leaves and distinctive taste, Betel Leaf has been cherished for centuries in various culinary traditions. Whether used in cooking, as a fragrant wrapper, or for its potential health benefits, this herb offers a unique gardening experience. Bring the vibrant essence of tradition to your garden with the enchanting Betel Leaf." , "cat" : "table" , "cat2" : "11-50" , "cat3" : "0-200"},

    {"id" : "p09" , "name" : "Nanouk Plant" , "pic1" : "Nanouk1.jpg" , "pic2" : "Nanouk2.jpg" , "price":395, "water" : "little" , "light" : "little" , "species" : "Tradescantia" , "height" : "8cm" , "description" : "Introducing the Nanouk Plant (Tradescantia 'Nanouk'), a living masterpiece that brings a burst of vibrant color and charm to your indoor spaces. With its striking multicolored leaves that transition from pink to purple and green, the Nanouk Plant adds a playful and lively touch to any environment. Known for its low-maintenance nature and trailing growth habit, this plant thrives in various conditions and is a perfect choice for hanging planters or tabletop displays. Elevate your decor with the joyful presence of the Nanouk Plant." , "cat" : "table" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p10" , "name" : "Coleus Burgundy" , "pic1" : "ColeusBurgundy1.jpg" , "pic2" : "ColeusBurgundy2.jpg" , "price":180, "water" : "little" , "light" : "little" , "species" : "Coleus" , "height" : "14cm" , "description" : "Introducing the captivating Coleus Burgundy (Solenostemon scutellarioides 'Burgundy'), a masterpiece of nature that adds a rich tapestry of color to your garden. With its velvety leaves showcasing shades of deep burgundy and green, the Coleus Burgundy is a visual delight that effortlessly steals the spotlight. Whether planted in borders, containers, or mixed arrangements, this vibrant foliage plant brings a touch of drama and allure to any landscape. Elevate your outdoor aesthetic with the captivating charm of Coleus Burgundy." , "cat" : "table" , "cat2" : "10-50" , "cat3" : "0-200"},

    {"id" : "p11" , "name" : "Flapjack Paddle" , "pic1" : "FlapjackPaddlePlant1.jpg" , "pic2" : "FlapjackPaddlePlant2.jpg" , "price":370, "water" : "little" , "light" : "much" , "species" : "K.hyrsiflora" , "height" : "07cm" , "description" : "Introducing the captivating Flapjack Paddle Plant (Kalanchoe luciae), a living work of art that adds a touch of modern elegance to your plant collection. With its thick, fleshy leaves that resemble stacked pancakes, the Flapjack Paddle Plant is a visual delight that commands attention. Its striking appearance, characterized by vibrant red or bronze edges, adds a pop of color to any setting. Whether displayed as a focal point or nestled within arrangements, this succulent is a versatile and stylish addition to your interior or garden." , "cat" : "table" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p12" , "name" : "Peperomia argyreia Watermelon" , "pic1" : "PeperomiaArgyreiaWatermelon1.jpg" , "pic2" : "PeperomiaArgyreiaWatermelon2.jpg" , "price":220, "water" : "much" , "light" : "much" , "species" : "P.argyreia" , "height" : "09cm" , "description" : "Introducing the delightful Peperomia argyreia Watermelon, a charming plant that brings a touch of whimsy and natural beauty to your space. With its unique watermelon-like foliage, characterized by silver stripes and patterns resembling the fruit's rind, this Peperomia variety adds a playful and artistic element to your collection. Known for its compact size and ease of care, the Watermelon Peperomia is an excellent choice for both beginners and enthusiasts. Elevate your interior aesthetic with the refreshing allure of Peperomia argyreia Watermelon." , "cat" : "table" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p13" , "name" : "Nelumbo Nucifera" , "pic1" : "NelumboNucifera1.jpg" , "pic2" : "NelumboNucifera2.jpg" , "price":215, "water" : "little" , "light" : "much" , "species" : "N.nucifera" , "height" : "03cm" , "description" : "Introducing the magnificent Nelumbo nucifera, also known as the Sacred Lotus, a symbol of purity and elegance that graces your garden with its ethereal beauty. With its captivating pink or white blossoms that emerge from the water's surface, the Sacred Lotus exudes tranquility and grace. Cherished for its cultural significance and timeless allure, this aquatic perennial adds a touch of serenity to ponds and water features. Elevate your outdoor oasis with the mesmerizing presence of Nelumbo nucifera, a true embodiment of nature's elegance." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p14" , "name" : "Patio Paeonia" , "pic1" : "PatioPaeonia1.jpg" , "pic2" : "PatioPaeonia2.jpg" , "price":163, "water" : "little" , "light" : "little" , "species" : "Paeonia" , "height" : "05cm" , "description" : "Introducing the enchanting Patio Paeonia, a blooming masterpiece that brings the allure of peonies to your outdoor space. With its lush foliage and abundant, delicate blooms, the Patio Paeonia adds a touch of timeless elegance to your garden or patio. Known for its luxurious flowers in various shades and captivating fragrances, this perennial beauty creates a focal point that captivates the senses. Elevate your outdoor aesthetic with the captivating charm of the Patio Paeonia, a true testament to nature's artistry." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "0-200"},

    {"id" : "p15" , "name" : "Platycodon" , "pic1" : "Platycodon1.jpg" , "pic2" : "Platycodon2.jpg" , "price":340, "water" : "much" , "light" : "little" , "species" : "P.grandiflorus" , "height" : "03cm" , "description" : "Introducing the graceful Platycodon, a botanical wonder that adds an elegant touch to your garden or floral display. With its charming balloon-like buds that burst into star-shaped blooms, the Platycodon captures the imagination with its enchanting transformation. Known for its versatility and eye-catching colors, this perennial beauty is a symbol of resilience and grace. Whether planted in beds, borders, or containers, the Platycodon is a captivating choice that elevates the beauty of any outdoor or indoor space." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p16" , "name" : "Salsa Impatiens" , "pic1" : "SalsaImpatiens1.jpg" , "pic2" : "SalsaImpatiens2.jpg" , "price":340, "water" : "much" , "light" : "much" , "species" : "Impatiens" , "height" : "02cm" , "description" : "Introducing the vibrant Salsa Impatiens, a burst of lively color that dances through your garden with unmatched energy. With its fiery blooms and lush foliage, the Salsa Impatiens adds a dynamic and cheerful presence to any landscape. Known for its resilience and ability to thrive in both sun and shade, this flowering beauty is perfect for borders, containers, and hanging baskets. Elevate your outdoor aesthetic with the fiery allure of Salsa Impatiens, a celebration of nature's vivid palette." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "200-400"},

    {"id" : "p17" , "name" : "Stokesia laevis" , "pic1" : "Stokesialaevis1.jpg" , "pic2" : "Stokesialaevis2.jpg" , "price":68, "water" : "little" , "light" : "much" , "species" : "S. laevis" , "height" : "04cm" , "description" : "Introducing the enchanting Stokesia laevis, a true gem that graces your garden with its elegant and captivating beauty. With its daisy-like blooms and lush foliage, the Stokesia laevis brings a touch of timeless charm to any outdoor space. Known for its durability and vibrant colors, this perennial wonder is a delightful addition to beds, borders, and cut-flower arrangements. Elevate your garden with the enduring allure of Stokesia laevis, a testament to nature's artistry." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "0-200"},

    {"id" : "p18" , "name" : "Tulip" , "pic1" : "Tulip1.jpg" , "pic2" : "Tulip2.jpg" , "price":99, "water" : "much" , "light" : "much" , "species" : "Tulipa" , "height" : "06cm" , "description" : "Introducing the timeless elegance of Tulips, a springtime sensation that fills your garden with a kaleidoscope of color. With their iconic cup-shaped blooms and graceful stems, Tulips offer a stunning display of nature's artistry. From classic reds to vibrant yellows and delicate pinks, our Tulip collection brings a sense of joy and renewal to any outdoor space. Perfect for welcoming the changing seasons and creating captivating flower arrangements. Elevate your garden with the radiant beauty of Tulips, a true embodiment of nature's charm." , "cat" : "flower" , "cat2" : "0-10" , "cat3" : "0-200"}

    

];
// $.getJSON("js/data.json" , function (items) {
//     data = items;
//     displayImages(data);
// });

displayImages(data);

//lap trinh su kien search
$("#formSearch").submit(function (e) {
    e.preventDefault();

    let search = $("#search").val();
    let re = new RegExp(search, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);

    displayImages(subdata);
});


//lap trinh chi tiet san pham
var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
}

function productDetail(){
    //alert ("test");
    var d = ``;
    var i = 0;
    for (var v of data){
        // alert (v.id);
        // alert (res);
        if (v.id == res){
            i++;
            d += `
                <div class="row">
                    <div class="col-md-6">
                        <img src="/image/${v.pic1}" alt="" class="flowerImaged">
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


//lap trinh su kien click chon loai san pham
$("input[type=checkbox]").click(function () {
    let cats = $(".chk-cake:checked").map(function () { return $(this).val() }).toArray().toString();
    let cats1 = $(".chk-cake1:checked").map(function () { return $(this).val() }).toArray().toString();
    let cats2 = $(".chk-cake2:checked").map(function () { return $(this).val() }).toArray().toString();
    let cats3 = $(".chk-cake3:checked").map(function () { return $(this).val() }).toArray().toString();
    let cats4 = $(".chk-cake4:checked").map(function () { return $(this).val() }).toArray().toString();

    let uses = (cats.length==0)?data: data.filter(item => cats.search(item.cat) >= 0);
    let water = (cats1.length==0)?uses: uses.filter(item => cats1.search(item.water) >= 0);
    let light = (cats2.length==0)?water: water.filter(item => cats2.search(item.light) >= 0);
    let tall = (cats3.length==0)?light: light.filter(item => cats3.search(item.cat2) >= 0);
    let cost = (cats4.length==0)?tall: tall.filter(item => cats4.search(item.cat3) >= 0);

    displayImages(cost);
    
});


function displayImages(items) {
    let s = ``;
	
	$.each(items, function (k, v) {

        s += `<div class="col-sm-6 col-md-4 divImage">
                <div class="selectProduct" data-id="${v.id}" data-name="${v.name}" data-price="${v.price}" data-description="${v.description}" data-water="${v.water}" data-light="${v.light}" data-species="${v.species}" data-height="${v.height}">
                    <a class="addButtonCircular addToCompare"> + </a>
                    <a href="product_detail_page.html?id=${v.id}" class="productImg"><img src="/image/${v.pic1}" alt="" class="flowerImage"></a>
                    <h3>${v.name.toUpperCase()} </h3>
                    <h4>Price: $ ${v.price}</h4>
                </div>
                <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">ADD TO CART</a>
            </div>`;
    });
    
    $("#products").html(s);

}