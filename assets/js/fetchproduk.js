document.addEventListener("DOMContentLoaded", function () {

 const products = [
    {
        name: "Virgin Coconut Oil (VCO)",
        images: ["assets/img/products/home_shop_thumb01.png"],
        description: "Virgin Coconut Oil murni, sehat dan berkualitas tinggi.",
        priceRange: "Rp 50.000 - Rp 150.000",
        discount: "-10%",
        links: {
            shopee: "https://shopee.co.id/vco",
            tokopedia: "https://tokopedia.com/vco",
            tiktok: "https://tiktokshop.com/vco"
        }
    },
    {
        name: "Coco Block",
        images: ["assets/img/products/home_shop_thumb02.png"],
        description: "Coco Block untuk pertanian, media tanam, dan horticulture.",
        priceRange: "Rp 20.000 - Rp 50.000",
        discount: "-15%",
        links: {
            shopee: "https://shopee.co.id/cocoblock",
            tokopedia: "https://tokopedia.com/cocoblock",
            tiktok: "https://tiktokshop.com/cocoblock"
        }
    },
    {
        name: "Cocopeat",
        images: ["assets/img/products/home_shop_thumb03.png"],
        description: "Media tanam alami berbasis kelapa, ringan dan menyerap air.",
        priceRange: "Rp 25.000 - Rp 60.000",
        discount: "-12%",
        links: {
            shopee: "https://shopee.co.id/cocopeat",
            tokopedia: "https://tokopedia.com/cocopeat",
            tiktok: "https://tiktokshop.com/cocopeat"
        }
    },
    {
        name: "Minyak Klentik",
        images: ["assets/img/products/home_shop_thumb04.png"],
        description: "Minyak kelapa tradisional, dapat digunakan untuk konsumsi dan urut.",
        priceRange: "Rp 30.000 - Rp 80.000",
        discount: "-8%",
        links: {
            shopee: "https://shopee.co.id/minyakklentik",
            tokopedia: "https://tokopedia.com/minyakklentik",
            tiktok: "https://tiktokshop.com/minyakklentik"
        }
    },
    {
        name: "Kelapa Jelly Cup",
        images: ["assets/img/products/home_shop_thumb05.png"],
        description: "Minuman segar berbahan dasar kelapa jelly dalam cup praktis.",
        priceRange: "Rp 10.000 - Rp 25.000",
        discount: "-5%",
        links: {
            shopee: "https://shopee.co.id/kelapajellycup",
            tokopedia: "https://tokopedia.com/kelapajellycup",
            tiktok: "https://tiktokshop.com/kelapajellycup"
        }
    },
    {
        name: "Serundeng Kelapa",
        images: ["assets/img/products/home_shop_thumb06.png"],
        description: "Serundeng kelapa gurih untuk pelengkap masakan tradisional.",
        priceRange: "Rp 15.000 - Rp 40.000",
        discount: "-10%",
        links: {
            shopee: "https://shopee.co.id/serundengkelapa",
            tokopedia: "https://tokopedia.com/serundengkelapa",
            tiktok: "https://tiktokshop.com/serundengkelapa"
        }
    }
];

    const container = $('#productContainer');

    products.forEach(product => {
        const price = (Math.floor(Math.random() * 130) + 20) * 1000;
        const slide = `
            <div class="col-xl-3 col-lg-4 col-md-6 product-slide">
                <div class="home-shop-item" data-product='${JSON.stringify(product)}'>
                    <div class="home-shop-thumb">
                        <a href="javascript:void(0)">
                            <img src="${product.images[0]}" alt="${product.name}">
                            <span class="discount">-15%</span>
                        </a>
                        <div class="shop-thumb-shape"></div>
                    </div>
                    <div class="home-shop-content">
                        <h4 class="title"><a href="javascript:void(0)">${product.name}</a></h4>
                        <span class="home-shop-price">Rp ${price.toLocaleString("id-ID")}</span>
                        <div class="shop-content-bottom">
                            <a href="javascript:void(0)" class="btn btn-two">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.append(slide);
    });

    
$('.home-shop-active').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: true,
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-left-arrow"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="flaticon-right-arrow"></i></button>',
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 1500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
		breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
		breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			}
		},
		{
		breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});
   $('.product-slide .home-shop-item').on('click', function() {
    const product = $(this).data('product');

    // buat id unik untuk Swal agar galeri bisa dikontrol
    const swalId = 'swal-product-' + Math.floor(Math.random() * 100000);

    // default gambar pertama
    let mainImage = product.images[0];

    Swal.fire({
        html: `
            <div id="${swalId}" style="display:flex;flex-wrap:wrap;">
                <div style="flex:1;min-width:200px;margin-right:15px;">
                    <img id="${swalId}-main" src="${mainImage}" style="width:100%;margin-bottom:10px;">
                </div>
                <div style="flex:1;min-width:200px;">
                    <h2 style="margin-top:0;">${product.name}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price range:</strong> ${product.priceRange}</p>
                    <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;">
                        <a href="${product.links.shopee}" target="_blank" style="background:#FF5722;color:white;padding:8px 12px;border-radius:5px;text-decoration:none;">Shopee</a>
                        <a href="${product.links.tokopedia}" target="_blank" style="background:#00C853;color:white;padding:8px 12px;border-radius:5px;text-decoration:none;">Tokopedia</a>
                        <a href="${product.links.tiktok}" target="_blank" style="background:#69C9D0;color:white;padding:8px 12px;border-radius:5px;text-decoration:none;">TikTok Shop</a>
                    </div>
                    <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap;">
                        ${product.images.map((img, idx) => `<img src="${img}" class="${swalId}-thumb" data-img="${img}" style="width:50px;height:50px;object-fit:cover;cursor:pointer;border:1px solid #ccc;">`).join('')}
                    </div>
                </div>
            </div>
        `,
        showConfirmButton: false,
        width: 700,
        didOpen: () => {
            // tambahkan event click ke semua thumbnail
            $(`#${swalId} .${swalId}-thumb`).on('click', function() {
                const newImg = $(this).data('img');
                $(`#${swalId}-main`).attr('src', newImg);
            });
        }
    });
});
});