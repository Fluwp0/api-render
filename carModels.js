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
        imagen: "https://images.cars.com/cldstatic/wp-content/uploads/01-porsche-cayenne-2019-angle--black--exterior--front.jpg"
    },
    {
        id: 3,
        modelo: "Taycan",
        año: 2022,
        kilometraje: 2000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/ea5c8dfa/Porsche%20Taycan%201.webp"
    },
    {
        id: 4,
        modelo: "Panamera",
        año: 2020,
        kilometraje: 12000,
        color: "Azul",
        transmisión: "Automática",
        imagen: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/panamera-test/.thumbnails/Panamera_Blue-14.jpg/Panamera_Blue-14-tiny-2048x0-0.5x0.jpg"
    },
    {
        id: 5,
        modelo: "Macan",
        año: 2021,
        kilometraje: 8000,
        color: "Blanco",
        transmisión: "Manual",
        imagen: "https://www.rutamotor.com/wp-content/uploads/2024/01/S24_0066_fine-scaled.jpg"
    },
    {
        id: 6,
        modelo: "Boxster",
        año: 2018,
        kilometraje: 18000,
        color: "Amarillo",
        transmisión: "Automática",
        imagen: "https://forococheselectricos.com/wp-content/uploads/2019/04/porsche-718-cayman-s-at-lightning-lap-2017-feature-car-and-driver-photo-687970-s-original.jpg"
    },
    {
        id: 7,
        modelo: "Cayman",
        año: 2017,
        kilometraje: 22000,
        color: "Verde",
        transmisión: "Manual",
        imagen: "https://img.remediosdigitales.com/28782d/porsche_718_cayman_gts_2020_129/1366_2000.jpg"
    },
    {
        id: 8,
        modelo: "911 Turbo",
        año: 2023,
        kilometraje: 500,
        color: "Negro",
        transmisión: "Automática",
        imagen: "https://lemansautos.cl/wp-content/uploads/2023/04/C000076-2.-Fre-Izq.jpg"
    },
    {
        id: 9,
        modelo: "911 GT3",
        año: 2022,
        kilometraje: 3000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAIkIuGbmZV0iO5M3H7HcTCkgbZKf2GL5YaSPQrIr07MNYw3cOx7e2HXO41UzQK7TbbsqYSUqc0iO5MlAdHcTCkWQAKf2GLmBiSPQrIg4BMNXibeItxi%25tFNTDKzHnLwKAovfYzeP3ig"
    },
    {
        id: 10,
        modelo: "Cayenne Coupe",
        año: 2021,
        kilometraje: 10000,
        color: "Gris",
        transmisión: "Manual",
        imagen: "https://ak.uecdn.es/p/110/thumbnail/entry_id/0_kbruw8cq/width//type/2/bgcolor/000000/0_kbruw8cq.jpg"
    },
    {
        id: 11,
        modelo: "Taycan Turbo S",
        año: 2023,
        kilometraje: 800,
        color: "Azul",
        transmisión: "Automática",
        imagen: "https://www.hibridosyelectricos.com/uploads/s1/27/32/48/2020101322503861206.jpeg"
    },
    {
        id: 12,
        modelo: "Panamera 4S",
        año: 2020,
        kilometraje: 14000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.diariomotor.com/imagenes/2021/08/porsche-panamera-turbo-s-e-hybrid-blanco-carrara-21.jpg"
    },
    {
        id: 13,
        modelo: "Macan S",
        año: 2019,
        kilometraje: 17000,
        color: "Negro",
        transmisión: "Manual",
        imagen: "https://valkyriacollection.es/img/Vehiculos/Porsche-Macan-Black-Edition/5413ad23c36462ea57a6fdf6e1cf13b7.jpeg"
    },
    {
        id: 14,
        modelo: "Boxster GTS",
        año: 2018,
        kilometraje: 16000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://www.motortrend.com/uploads/sites/11/2020/04/2020-Porsche-718-Boxster-S-7.jpg"
    },
    {
        id: 15,
        modelo: "Cayman S",
        año: 2017,
        kilometraje: 25000,
        color: "Amarillo",
        transmisión: "Manual",
        imagen: "https://forococheselectricos.com/wp-content/uploads/2019/04/porsche-718-cayman-s-at-lightning-lap-2017-feature-car-and-driver-photo-687970-s-original.jpg"
    },
    {
        id: 16,
        modelo: "911 Carrera S",
        año: 2021,
        kilometraje: 6000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-2019-rt-hero-front.jpg"
    },
    {
        id: 17,
        modelo: "Cayenne E-Hybrid",
        año: 2020,
        kilometraje: 12000,
        color: "Gris",
        transmisión: "Manual",
        imagen: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/RO_local/2023/Produse/Porsche-prezintă-a-treia-variantă-E-Hybrid-a-modelului-Cayenne/S23_1697_fine.jpg/jcr:content/S23_1697_fine.jpg"
    },
    {
        id: 18,
        modelo: "Taycan 4S",
        año: 2022,
        kilometraje: 4000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.cnet.com/a/img/resize/74118326be4c66b3047118855f419da401aa3120/hub/2021/04/30/0754dfef-b14e-48c7-b29d-098bdd50e004/2021-porsche-taycan-4s-35.jpg?auto=webp&width=1920"
    },
    {
        id: 19,
        modelo: "Panamera Turbo",
        año: 2019,
        kilometraje: 18000,
        color: "Blanco",
        transmisión: "Automática",
        imagen: "https://www.diariomotor.com/imagenes/2021/08/porsche-panamera-turbo-s-e-hybrid-blanco-carrara-21.jpg"
    },
    {
        id: 20,
        modelo: "Macan Turbo",
        año: 2021,
        kilometraje: 9000,
        color: "Azul",
        transmisión: "Manual",
        imagen: "https://img.remediosdigitales.com/d037cc/porsche-macan-2021-precio-mexico_2/1366_2000.jpg"
    },
    {
        id: 21,
        modelo: "911 Targa",
        año: 2023,
        kilometraje: 1000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://espirituracer.com/archivos/2024/01/porsche-911-3.webp"
    },
    {
        id: 22,
        modelo: "Cayenne Turbo",
        año: 2018,
        kilometraje: 20000,
        color: "Negro",
        transmisión: "Manual",
        imagen: "https://mburgoscars.es/wp-content/uploads/2022/06/Porsche-Cayenne-Turbo-negro-01-scaled.jpg"
    },
    {
        id: 23,
        modelo: "Taycan Cross Turismo",
        año: 2023,
        kilometraje: 500,
        color: "Verde",
        transmisión: "Automática",
        imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/11/prueba-porsche-taycan-cross-turismo-turbo-s-2882327.jpg?tf=3840x"
    },
    {
        id: 24,
        modelo: "Panamera GTS",
        año: 2021,
        kilometraje: 11000,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20201125_0094/full-original.jpg"
    },
    {
        id: 25,
        modelo: "Macan GTS",
        año: 2020,
        kilometraje: 14000,
        color: "Blanco",
        transmisión: "Manual",
        imagen: "https://www.km77.com/images/medium/8/2/0/5/porsche-macan-frontal-lateral-2.358205.jpg"
    },
    {
        id: 26,
        modelo: "Boxster Spyder",
        año: 2019,
        kilometraje: 19000,
        color: "Amarillo",
        transmisión: "Automática",
        imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/07/16914128302966.jpg"
    },
    {
        id: 27,
        modelo: "Cayman GT4",
        año: 2022,
        kilometraje: 3000,
        color: "Gris",
        transmisión: "Manual",
        imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_551fac8a76324886b6e1dabbea48dc59.jpg"
    },
    {
        id: 28,
        modelo: "911 Carrera 4S",
        año: 2020,
        kilometraje: 13000,
        color: "Azul",
        transmisión: "Automática",
        imagen: "https://www.cnet.com/a/img/resize/f7bc236c8c26f8f83f489749b7ac3436aa34e29f/hub/2020/01/01/e6e349ef-0d44-4c9c-99f9-47f8d7d03fda/c4s-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
        id: 29,
        modelo: "Cayenne S",
        año: 2019,
        kilometraje: 17000,
        color: "Blanco",
        transmisión: "Manual",
        imagen: "https://cdn.motor1.com/images/mgl/EVXkz/s1/4x3/porsche-cayenne-platinum-edition.webp"
    },
    {
        id: 30,
        modelo: "Taycan RWD",
        año: 2023,
        kilometraje: 700,
        color: "Rojo",
        transmisión: "Automática",
        imagen: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/review/hero_image/2022-Porsche-Taycan-GTS-Sedan-Red-Press-1001x565.jpg"
    }
];

module.exports = {
    carModels 
}
