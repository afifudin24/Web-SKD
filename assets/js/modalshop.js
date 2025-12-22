function openMarketplace() {
    Swal.fire({
        title: 'Pesan Produk Kami',
        html: `
            <div style="display:flex; flex-direction:column; gap:12px;">

                <a href="https://shopee.co.id" target="_blank"
                   style="background:#f1582c; color:white; padding:12px;
                          border-radius:6px; text-decoration:none;
                          display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fa-brands fa-shopify"></i> Shopee
                </a>

                <a href="https://tokopedia.com" target="_blank"
                   style="background:#03ac0e; color:white; padding:12px;
                          border-radius:6px; text-decoration:none;
                          display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fa-solid fa-store"></i> Tokopedia
                </a>

                <a href="https://wa.me/628xxxxxxxxxx" target="_blank"
                   style="background:#25d366; color:white; padding:12px;
                          border-radius:6px; text-decoration:none;
                          display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fa-brands fa-whatsapp"></i> WhatsApp
                </a>

            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true
    });
}