const carModels = [
    {
        id: 1,
        modelo: "911 Carrera",
        año: 2021,
        kilometraje: 5000,
        color: "Amarillo",
        transmisión: "Automática",
        imagen: "https://www.hdcarwallpapers.com/walls/porsche_911_carrera_4_gts_2021_5k_2-HD.jpg",
        descripcion: "El 911 Carrera es un ícono del rendimiento deportivo con un motor potente y diseño elegante. Ofrece una conducción precisa y dinámica, ideal para los amantes de la velocidad. Su color amarillo vibrante lo hace destacar en cualquier carretera.",
        precio: "$120.000.000"
    },
    {
        id: 2,
        modelo: "Cayenne",
        año: 2019,
        kilometraje: 15000,
        color: "Negro",
        transmisión: "Manual",
        imagen: "https://images.cars.com/cldstatic/wp-content/uploads/01-porsche-cayenne-2019-angle--black--exterior--front.jpg",
        descripcion: "El Porsche Cayenne combina lujo y capacidad todoterreno en un solo vehículo. Con un interior espacioso y cómodo, es perfecto para largos viajes. Su motor manual añade una experiencia de conducción más tradicional y controlada.",
        precio: "$85.000.000"
    },
    {
        id: 3,
        modelo: "Taycan",
        año: 2022,
        kilometraje: 2000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/ea5c8dfa/Porsche%20Taycan%201.webp",
        descripcion: "El Taycan es el primer coche eléctrico de Porsche, fusionando sostenibilidad y rendimiento. Con una aceleración impresionante y una autonomía adecuada, redefine el concepto de los deportivos eléctricos. Su diseño futurista y elegante atrae todas las miradas.",
        precio: "$150.000.000"
    },
    {
        id: 4,
        modelo: "Panamera",
        año: 2020,
        kilometraje: 12000,
        color: "Azul",
        transmisión: "Automática",
        imagen: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/panamera-test/.thumbnails/Panamera_Blue-14.jpg/Panamera_Blue-14-tiny-2048x0-0.5x0.jpg",
        descripcion: "La Panamera ofrece una combinación perfecta de lujo y rendimiento. Con un amplio espacio interior y características de alta tecnología, es ideal para el ejecutivo moderno. Su potente motor asegura una experiencia de conducción emocionante.",
        precio: "$110.000.000"
    },
    {
        id: 5,
        modelo: "Macan",
        año: 2021,
        kilometraje: 8000,
        color: "Blanco",
        transmisión: "Manual",
        imagen: "https://www.rutamotor.com/wp-content/uploads/2024/01/S24_0066_fine-scaled.jpg",
        descripcion: "El Macan es un SUV compacto que ofrece la dinámica de conducción típica de Porsche. Ideal para la ciudad y el campo, su motor manual proporciona una experiencia más interactiva. Su diseño elegante y robusto lo hace destacar en cualquier entorno.",
        precio: "$90.000.000"
    },
    {
        id: 6,
        modelo: "Boxster",
        año: 2018,
        kilometraje: 18000,
        color: "Amarillo",
        transmisión: "Automática",
        imagen: "https://forococheselectricos.com/wp-content/uploads/2019/04/porsche-718-cayman-s-at-lightning-lap-2017-feature-car-and-driver-photo-687970-s-original.jpg",
        descripcion: "El Boxster es un roadster clásico de Porsche, ofreciendo una experiencia de conducción abierta al aire libre. Con un diseño deportivo y un motor eficiente, es perfecto para los entusiastas del rendimiento. Su color amarillo añade un toque de energía y estilo.",
        precio: "$75.000.000"
    },
    {
        id: 7,
        modelo: "Cayman",
        año: 2017,
        kilometraje: 22000,
        color: "Verde",
        transmisión: "Manual",
        imagen: "https://img.remediosdigitales.com/28782d/porsche_718_cayman_gts_2020_129/1366_2000.jpg",
        descripcion: "El Cayman es un coupé deportivo compacto que ofrece una experiencia de conducción precisa y ágil. Su motor manual permite un control total sobre el vehículo, ideal para los puristas. El color verde le da un aspecto distintivo y moderno.",
        precio: "$70.000.000"
    },
    {
        id: 8,
        modelo: "911 Turbo",
        año: 2023,
        kilometraje: 500,
        color: "Negro",
        transmisión: "Automática",
        imagen: "https://lemansautos.cl/wp-content/uploads/2023/04/C000076-2.-Fre-Izq.jpg",
        descripcion: "El 911 Turbo representa el pináculo del rendimiento y la tecnología de Porsche. Con una aceleración vertiginosa y un diseño aerodinámico, es un verdadero coche de ensueño. Su color negro añade un toque de elegancia y sofisticación.",
        precio: "$180.000.000"
    },
    {
        id: 9,
        modelo: "911 GT3",
        año: 2022,
        kilometraje: 3000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAIkIuGbmZV0iO5M3H7HcTCkgbZKf2GL5YaSPQrIr07MNYw3cOx7e2HXO41UzQK7TbbsqYSUqc0iO5MlAdHcTCkWQAKf2GLmBiSPQrIg4BMNXibeItxi%25tFNTDKzHnLwKAovfYzeP3ig",
        descripcion: "El 911 GT3 es un coche de alto rendimiento diseñado para los entusiastas de la pista. Su motor y chasis están optimizados para la velocidad y el manejo preciso. El color rojo refleja su naturaleza apasionada y agresiva.",
        precio: "$160.000.000"
    },
    {
        id: 10,
        modelo: "Cayenne Coupe",
        año: 2021,
        kilometraje: 10000,
        color: "Gris",
        transmisión: "Manual",
        imagen: "https://ak.uecdn.es/p/110/thumbnail/entry_id/0_kbruw8cq/width//type/2/bgcolor/000000/0_kbruw8cq.jpg",
        descripcion: "El Cayenne Coupe combina el estilo de un SUV con la elegancia de un coupé. Con una postura más baja y una línea de techo inclinada, ofrece una apariencia deportiva y moderna. Su motor manual proporciona una experiencia de conducción más tradicional.",
        precio: "$95.000.000"
    },
    {
        id: 11,
        modelo: "Taycan Turbo S",
        año: 2023,
        kilometraje: 800,
        color: "Azul",
        transmisión: "Automática",
        imagen: "https://www.hibridosyelectricos.com/uploads/s1/27/32/48/2020101322503861206.jpeg",
        descripcion: "El Taycan Turbo S es la variante más potente del primer coche eléctrico de Porsche. Ofrece una aceleración increíble y una autonomía destacada, combinando rendimiento y eficiencia. Su color azul resalta su diseño futurista y elegante.",
        precio: "$170.000.000"
    },
    {
        id: 12,
        modelo: "Panamera 4S",
        año: 2020,
        kilometraje: 14000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.diariomotor.com/imagenes/2021/08/porsche-panamera-turbo-s-e-hybrid-blanco-carrara-21.jpg",
        descripcion: "El Panamera 4S ofrece un equilibrio perfecto entre lujo y rendimiento deportivo. Con un interior lujoso y tecnología avanzada, es ideal para largos viajes. Su potente motor asegura una conducción dinámica y emocionante.",
        precio: "$130.000.000"
    },
    {
        id: 13,
        modelo: "Macan S",
        año: 2019,
        kilometraje: 17000,
        color: "Negro",
        transmisión: "Manual",
        imagen: "https://valkyriacollection.es/img/Vehiculos/Porsche-Macan-Black-Edition/5413ad23c36462ea57a6fdf6e1cf13b7.jpeg",
        descripcion: "El Macan S es un SUV compacto que combina rendimiento y practicidad. Con un diseño elegante y un motor potente, es ideal para cualquier terreno. Su color negro le da un toque de sofisticación.",
        precio: "$80.000.000"
    },
    {
        id: 14,
        modelo: "Boxster GTS",
        año: 2018,
        kilometraje: 16000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://www.motortrend.com/uploads/sites/11/2020/04/2020-Porsche-718-Boxster-S-7.jpg",
        descripcion: "El Boxster GTS lleva el rendimiento del roadster a un nuevo nivel. Con una mayor potencia y características deportivas avanzadas, ofrece una experiencia de conducción emocionante. Su color rojo acentúa su naturaleza deportiva y dinámica.",
        precio: "$85.000.000"
    },
    {
        id: 15,
        modelo: "Cayman S",
        año: 2017,
        kilometraje: 25000,
        color: "Amarillo",
        transmisión: "Manual",
        imagen: "https://forococheselectricos.com/wp-content/uploads/2019/04/porsche-718-cayman-s-at-lightning-lap-2017-feature-car-and-driver-photo-687970-s-original.jpg",
        descripcion: "El Cayman S es un deportivo compacto que ofrece una experiencia de conducción precisa y ágil. Con un motor potente y una transmisión manual, es ideal para los puristas de la conducción. Su color amarillo vibrante lo hace destacar en cualquier carretera.",
        precio: "$75.000.000"
    },
    {
        id: 16,
        modelo: "911 Carrera S",
        año: 2021,
        kilometraje: 6000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-2019-rt-hero-front.jpg",
        descripcion: "El 911 Carrera S es una evolución del icónico deportivo de Porsche. Con un motor más potente y un diseño refinado, ofrece una experiencia de conducción excepcional. Su color blanco le añade un toque de elegancia y sofisticación.",
        precio: "$130.000.000"
    },
    {
        id: 17,
        modelo: "Cayenne E-Hybrid",
        año: 2020,
        kilometraje: 12000,
        color: "Gris",
        transmisión: "Manual",
        imagen: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/RO_local/2023/Produse/Porsche-prezintă-a-treia-variantă-E-Hybrid-a-modelului-Cayenne/S23_1697_fine.jpg/jcr:content/S23_1697_fine.jpg",
        descripcion: "El Cayenne E-Hybrid combina la eficiencia de un motor híbrido con el lujo y el rendimiento de un SUV Porsche. Ideal para la conducción diaria y los viajes largos, ofrece una experiencia de conducción dinámica y sostenible. Su color gris le añade un toque moderno y elegante.",
        precio: "$110.000.000"
    },
    {
        id: 18,
        modelo: "Taycan 4S",
        año: 2022,
        kilometraje: 4000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.cnet.com/a/img/resize/74118326be4c66b3047118855f419da401aa3120/hub/2021/04/30/0754dfef-b14e-48c7-b29d-098bdd50e004/2021-porsche-taycan-4s-35.jpg?auto=webp&width=1920",
        descripcion: "El Taycan 4S ofrece un rendimiento eléctrico impresionante con un diseño elegante y moderno. Con una aceleración rápida y una autonomía considerable, redefine la experiencia de conducción eléctrica. Su color blanco le da un aspecto limpio y sofisticado.",
        precio: "$140.000.000"
    },
    {
        id: 19,
        modelo: "Panamera Turbo",
        año: 2019,
        kilometraje: 18000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.diariomotor.com/imagenes/2021/08/porsche-panamera-turbo-s-e-hybrid-blanco-carrara-21.jpg",
        descripcion: "El Panamera Turbo combina el lujo de una berlina con el rendimiento de un coche deportivo. Con un motor turboalimentado y un interior lujoso, ofrece una experiencia de conducción emocionante. Su color blanco añade un toque de elegancia y sofisticación.",
        precio: "$150.000.000"
    },
    {
        id: 20,
        modelo: "Macan Turbo",
        año: 2021,
        kilometraje: 9000,
        color: "Azul",
        transmisión: "Manual",
        imagen: "https://img.remediosdigitales.com/d037cc/porsche-macan-2021-precio-mexico_2/1366_2000.jpg",
        descripcion: "El Macan Turbo ofrece un rendimiento superior en un SUV compacto. Con un motor turboalimentado y características deportivas avanzadas, es ideal para cualquier terreno. Su color azul añade un toque de frescura y modernidad.",
        precio: "$120.000.000"
    },
    {
        id: 21,
        modelo: "911 Targa",
        año: 2023,
        kilometraje: 1000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://espirituracer.com/archivos/2024/01/porsche-911-3.webp",
        descripcion: "El 911 Targa combina el estilo clásico del 911 con la comodidad de un techo desmontable. Con un motor potente y un diseño icónico, ofrece una experiencia de conducción única. Su color rojo añade un toque de pasión y deportividad.",
        precio: "$160.000.000"
    },
    {
        id: 22,
        modelo: "Cayenne Turbo",
        año: 2018,
        kilometraje: 20000,
        color: "Negro",
        transmisión: "Manual",
        imagen: "https://mburgoscars.es/wp-content/uploads/2022/06/Porsche-Cayenne-Turbo-negro-01-scaled.jpg",
        descripcion: "El Cayenne Turbo es un SUV de alto rendimiento que ofrece lujo y potencia. Con un motor turboalimentado y un diseño robusto, es ideal para cualquier terreno. Su color negro le añade un toque de elegancia y sofisticación.",
        precio: "$100.000.000"
    },
    {
        id: 23,
        modelo: "Taycan Cross Turismo",
        año: 2023,
        kilometraje: 500,
        color: "Verde",
        transmisión: "Automática",
        imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/11/prueba-porsche-taycan-cross-turismo-turbo-s-2882327.jpg?tf=3840x",
        descripcion: "El Taycan Cross Turismo ofrece una experiencia eléctrica versátil con capacidad todoterreno. Ideal para aventuras y uso diario, combina rendimiento y sostenibilidad. Su color verde resalta su naturaleza innovadora y ecológica.",
        precio: "$175.000.000"
    },
    {
        id: 24,
        modelo: "Panamera GTS",
        año: 2021,
        kilometraje: 11000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20201125_0094/full-original.jpg",
        descripcion: "El Panamera GTS ofrece un equilibrio perfecto entre rendimiento deportivo y lujo. Con un motor potente y un diseño refinado, es ideal para los conductores exigentes. Su color rojo añade un toque de pasión y deportividad.",
        precio: "$140.000.000"
    },
    {
        id: 25,
        modelo: "Macan GTS",
        año: 2020,
        kilometraje: 14000,
        color: "Blanco",
        transmisión: "Manual",
        imagen: "https://www.km77.com/images/medium/8/2/0/5/porsche-macan-frontal-lateral-2.358205.jpg",
        descripcion: "El Macan GTS combina el rendimiento deportivo con la practicidad de un SUV. Con un motor potente y características avanzadas, es ideal para cualquier terreno. Su color blanco añade un toque de elegancia y sofisticación.",
        precio: "$105.000.000"
    },
    {
        id: 26,
        modelo: "Boxster Spyder",
        año: 2019,
        kilometraje: 19000,
        color: "Amarillo",
        transmisión: "Automática",
        imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/07/16914128302966.jpg",
        descripcion: "El Boxster Spyder es un roadster de alto rendimiento diseñado para los entusiastas de la conducción. Con un diseño aerodinámico y un motor potente, ofrece una experiencia de conducción emocionante. Su color amarillo vibrante lo hace destacar en cualquier carretera.",
        precio: "$95.000.000"
    },
    {
        id: 27,
        modelo: "Cayman GT4",
        año: 2018,
        kilometraje: 21000,
        color: "Verde",
        transmisión: "Manual",
        imagen: "https://motorshow.com.br/wp-content/uploads/sites/2/2021/08/porsche-718-cayman-gt4-56.jpg?x71212",
        descripcion: "El Cayman GT4 es un coupé deportivo de alto rendimiento diseñado para la pista. Con un motor potente y un chasis optimizado, ofrece una experiencia de conducción precisa y emocionante. Su color verde le da un aspecto distintivo y moderno.",
        precio: "$130.000.000"
    },
    {
        id: 28,
        modelo: "911 Carrera 4S",
        año: 2021,
        kilometraje: 7000,
        color: "Negro",
        transmisión: "Automática",
        imagen: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAIkIuGbmhG0iO5MBYNHcTCkcbNKf2GLG7JSPQrIiqwRuT0k%25Gx7e2HLec1UzQKkOYn4Jq6GSeJ3SvnstLvT8Cu2gy9dfR6DrFN",
        descripcion: "El 911 Carrera 4S combina el rendimiento clásico del 911 con tracción total para una mejor estabilidad. Con un motor potente y un diseño icónico, ofrece una experiencia de conducción excepcional. Su color negro añade un toque de elegancia y sofisticación.",
        precio: "$140.000.000"
    },
    {
        id: 29,
        modelo: "Cayenne GTS",
        año: 2020,
        kilometraje: 13000,
        color: "Rojo",
        transmisión: "Manual",
        imagen: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1nqbwr.img?w=1920&h=1080&m=4&q=51",
        descripcion: "El Cayenne GTS combina el lujo de un SUV con el rendimiento de un coche deportivo. Con un motor potente y un diseño robusto, es ideal para cualquier terreno. Su color rojo añade un toque de pasión y deportividad.",
        precio: "$115.000.000"
    },
    {
        id: 30,
        modelo: "Taycan GTS",
        año: 2023,
        kilometraje: 1000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAVbsqYSt4T0iO5M8INHcTCkcQoKf2GLfmJSPQrIP7jMNYw3ZiYko5xjrK0LFC1a1fNIuGbm410iO5M%252hHcTCkWvAKf2GLHTJSPQrIgdHMNYw3uQyko6c0z381cW8utySZg0yIxSJFXP5qzNjqz",
        descripcion: "El Taycan GTS ofrece un rendimiento eléctrico impresionante con un diseño elegante y moderno. Con una aceleración rápida y una autonomía considerable, redefine la experiencia de conducción eléctrica. Su color blanco le da un aspecto limpio y sofisticado.",
        precio: "$160.000.000"
    }
];


module.exports = {
    carModels 
}
