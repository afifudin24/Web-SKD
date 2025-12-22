 const features = [
        {
            icon: "fa-solid fa-bottle-droplet",
            title: "Divisi Minuman Kelapa",
            description: "Kelapa Jelly cup & kelapa, Air Kelapa Murni, Nata de Coco, Puding Kelapa, Es Batu Kelapa, dan Santan Kelapa."
        },
        {
            icon: "fa-solid fa-oil-can",
            title: "Divisi Perminyakan",
            description: "Minyak Klentik, Minyak Kelapa RBD/Kopra, Virgin Coconut Oil (VCO), dan Minyak Urut."
        },
        {
            icon: "fa-solid fa-bowl-food",
            title: "Divisi Makanan",
            description: "Galendo, Dage, Serundeng Kelapa, Botok Kelapa, Bungkil Kelapa, dan Jenang."
        },
        {
            icon: "fa-solid fa-seedling",
            title: "Divisi Pertanian",
            description: "Cocopeat, Coco Fiber, Coco Chip, Coco Hush, dan Coco Block."
        }
    ];

    const container = document.getElementById("featuresContainer");

    features.forEach(item => {
        container.innerHTML += `
            <div class="col-md-6 col-sm-8">
                <div class="features-item">
                    <div class="features-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="features-content">
                        <h4 class="title">${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    });