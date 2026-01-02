
    // 1. Data Produk Lengkap
    const allProducts = [
        {
            name: "Virgin Coconut Oil (VCO)",
            images: ["assets/img/products/home_shop_thumb01.png"],
            description: "Virgin Coconut Oil murni, sehat dan berkualitas tinggi. Diproses dingin untuk menjaga nutrisi.",
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
            description: "Coco Block padat untuk pertanian, media tanam, dan kebutuhan horticulture skala besar.",
            priceRange: "Rp 20.000 - Rp 50.000",
          
            links: {
                shopee: "https://shopee.co.id/cocoblock",
                tokopedia: "https://tokopedia.com/cocoblock",
                tiktok: "https://tiktokshop.com/cocoblock"
            }
        },
        {
            name: "Cocopeat",
            images: ["assets/img/products/home_shop_thumb03.png"],
            description: "Media tanam alami berbasis serabut kelapa, ringan, gembur, dan memiliki daya serap air tinggi.",
            priceRange: "Rp 25.000 - Rp 60.000",
          
            links: {
                shopee: "https://shopee.co.id/cocopeat",
                tokopedia: "https://tokopedia.com/cocopeat",
                tiktok: "https://tiktokshop.com/cocopeat"
            }
        },
        {
            name: "Minyak Klentik",
            images: ["assets/img/products/minyakklentik1.png"],
            description: "Minyak kelapa tradisional dengan aroma khas, sangat baik untuk menggoreng atau minyak urut.",
            priceRange: "Rp 30.000 - Rp 80.000",
           
            links: {
                shopee: "https://shopee.co.id/minyakklentik",
                tokopedia: "https://tokopedia.com/minyakklentik",
                tiktok: "https://tiktokshop.com/minyakklentik"
            }
        },
        {
            name: "Kelapa Jelly Cup",
            images: ["assets/img/products/home_shop_thumb05.png"],
            description: "Minuman segar berbahan dasar air kelapa murni dan daging kelapa muda dalam kemasan cup.",
            priceRange: "Rp 10.000 - Rp 25.000",
          
            links: {
                shopee: "https://shopee.co.id/kelapajellycup",
                tokopedia: "https://tokopedia.com/kelapajellycup",
                tiktok: "https://tiktokshop.com/kelapajellycup"
            }
        },
        {
            name: "Serundeng Kelapa",
            images: ["assets/img/products/home_shop_thumb06.png"],
            description: "Serundeng kelapa dengan bumbu rempah pilihan, gurih dan renyah untuk teman makan nasi.",
            priceRange: "Rp 15.000 - Rp 40.000",
          
            links: {
                shopee: "https://shopee.co.id/serundengkelapa",
                tokopedia: "https://tokopedia.com/serundengkelapa",
                tiktok: "https://tiktokshop.com/serundengkelapa"
            }
        }
    ];

    // 2. Fungsi Mengambil 3 Data Random
    function getRandomProducts(arr, count) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // 3. Render ke HTML
    function renderFeatureProducts() {
        const container = document.getElementById('product-container');
        const randomProducts = getRandomProducts(allProducts, 3);
        let htmlContent = '';

        randomProducts.forEach((product, index) => {
            // Logika untuk shape background agar selang-seling (01, 02, 03) sesuai asset template
            const shapeIndex = (index % 3) + 1; 

            htmlContent += `
            <div class="features-products-wrap">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="features-products-thumb">
                            <div class="main-img">
                                <img src="${product.images[0]}" alt="${product.name}" style="max-height:300px; object-fit:contain;">
                            </div>
                            <img src="assets/img/products/features_product_shape0${shapeIndex}.png" alt="shape" class="shape-img">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-10">
                        <div class="features-product-content">
                            <h2 class="title"><a href="javascript:void(0)" onclick="showSwal('${product.name}')">${product.name}</a></h2>
                             <h3 class="price">${product.priceRange}</h3>
                            <p>${product.description}</p>
                            <div class="features-product-bottom">
                                <a href="javascript:void(0)" class="btn" onclick="showSwal('${product.name}')">Pesan</a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        container.innerHTML = htmlContent;
    }

    // 4. Fungsi Menampilkan SweetAlert (Swal)
    function showSwal(productName) {
        // Cari data produk berdasarkan nama yang diklik
        const product = allProducts.find(p => p.name === productName);

        if (product) {
            Swal.fire({
                title: `<strong>${product.name}</strong>`,
                html: `
                    <div style="text-align: left;">
                        <img src="${product.images[0]}" style="width: 150px; display:block; margin: 0 auto 15px; border-radius: 10px;">
                        <p style="margin-bottom: 20px;">${product.description}</p>
                        <p style="font-weight: bold; color: #d32f2f;">Harga: ${product.priceRange}</p>
                        <hr>
                        <p style="margin-bottom: 10px;">Pilih Marketplace:</p>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <a href="${product.links.shopee}" target="_blank" class="btn" style="background-color: #EE4D2D; color: white; border:none; width:100%; text-align:center;">Beli di Shopee</a>
                            <a href="${product.links.tokopedia}" target="_blank" class="btn" style="background-color: #42B549; color: white; border:none; width:100%; text-align:center;">Beli di Tokopedia</a>
                            <a href="${product.links.tiktok}" target="_blank" class="btn" style="background-color: #000000; color: white; border:none; width:100%; text-align:center;">Beli di TikTok Shop</a>
                        </div>
                    </div>
                `,
                showCloseButton: true,
                showConfirmButton: false,
                focusConfirm: false
            });
        }
    }

    document.addEventListener('DOMContentLoaded', renderFeatureProducts);
