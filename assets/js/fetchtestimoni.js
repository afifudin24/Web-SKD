
function formatProduk(produk) {
    if (!produk) return "-";

    // contoh input: "CocoBlock, VCO"
    const list = produk.split(",").map(p => p.trim());

    return list.join(" • ");
}


// const API_URL = "https://script.google.com/macros/s/AKfycbxHxMSy0naeDoi7AfcyHr3wH277Kc7dolpmYYLjUssqetWGzjjn6zbByKe-SLgpmxM/exec";

// fetch(API_URL)
//     .then(response => response.json())
//     .then(res => {
//         if (!res) {
//             console.log(res);
//             console.error("Gagal ambil data");
//             return;
//         }

//         console.log(res)

//         const container = document.getElementById("testimonialContainer");
//         container.innerHTML = ""; // reset isi

//         res.forEach(item => {
//            container.innerHTML += `
//     <div class="testimonial-item text-center">
//         <div class="testimonial-rating">
//             ${generateStars(item.rating)}
//         </div>

//         <p>“${item.testimoni}”</p>

//         <div class="testimonial-avatar-wrap">
//             <div class="testi-avatar-info">
//                 <h5 class="name">${item.nama}</h5>

//                 <span class="produk">
//                     Produk: ${formatProduk(item.produk)}
//                 </span>
//             </div>
//         </div>
//     </div>
// `;

           
//         });
//     })
//     .catch(err => {
//         console.error("Error fetch:", err);
//     });

// function generateStars(rating) {
//     let stars = "";
//     for (let i = 1; i <= 5; i++) {
//         if (i <= rating) {
//             stars += `<i class="fas fa-star"></i>`;
//         } else {
//             stars += `<i class="far fa-star"></i>`;
//         }
//     }
//     return stars;
// }
$(document).ready(function () {

    const endpoint = "https://script.google.com/macros/s/AKfycbxHxMSy0naeDoi7AfcyHr3wH277Kc7dolpmYYLjUssqetWGzjjn6zbByKe-SLgpmxM/exec";

    $.ajax({
        url: endpoint,
        method: "GET",
        dataType: "json",
        success: function (res) {
            const container = $(".testimonial-slider");
            container.html("");

            res.forEach(item => {
                const produk = item.produk
                    ? item.produk.split(",").map(p => `<span class="badge">${p.trim()}</span>`).join(" ")
                    : "";

                container.append(`
                    <div class="testimonial-item text-center">
                        <h5 style='color: white !important;' class="name mt-2">${item.nama}</h5>
                        <div class="testimonial-rating">
                            ${generateStars(item.rating)}
                        </div>
                        <p>“${item.testimoni}”</p>

                        <div class="testimonial-product">
                            <small>Produk dibeli:</small><br>
                            ${produk}
                        </div>

                    
                    </div>
                `);
            });

            // Init slider setelah data masuk
            initTestimonialSlider();
        },
        error: function (err) {
            console.error("Gagal ambil testimoni:", err);
        }
    });

    function initTestimonialSlider() {
        $(".testimonial-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $(".prev-btn"),
            nextArrow: $(".next-btn"),
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true
        });
    }

    function generateStars(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating
                ? `<i class="fas fa-star"></i>`
                : `<i class="far fa-star"></i>`;
        }
        return stars;
    }

    // ⏱ AUTO SLIDE tiap 1 detik
    setInterval(() => {
        if (slides.length > 0) {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    }, 1000);

});