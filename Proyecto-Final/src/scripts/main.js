/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


let contenedor = document.querySelector(".contenedor-cards");

let stays = [
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Stylist apartment in center of the city",
        "rating": 4.4,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": 2,
        "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": "Nice apartment in center of Helsinki",
        "rating": 4.2,
        "maxGuests": 5,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": true,
        "title": "Arty interior in 1900 wooden house",
        "rating": 4.5,
        "maxGuests": 10,
        "type": "Entire house",
        "beds": 6,
        "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Apartment next to market spuare",
        "rating": 4.48,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": "Villa Aurora guest-house",
        "rating": 4.75,
        "maxGuests": 9,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": true,
        "title": "A cosy family house",
        "rating": 4.95,
        "maxGuests": 6,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": "Lovely Studio near Railway Station",
        "rating": 4.68,
        "maxGuests": 2,
        "type": "Private room",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": "Peaceful little home in city center",
        "rating": 4.12,
        "maxGuests": 6,
        "type": "Entire house",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": "Beautiful new studio apartment nearby the center",
        "rating": 4.49,
        "maxGuests": 2,
        "type": "Entire apartment",
        "beds": 1,
        "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": true,
        "title": "Cozy woodhouse flat with wooden sauna",
        "rating": 4.38,
        "maxGuests": 4,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": "Brand new studio apartment near the harbour",
        "rating": 4.89,
        "maxGuests": 6,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Beautiful and comfortable old wooden house",
        "rating": 4.63,
        "maxGuests": 10,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": "Turku Nordic Home near city center",
        "rating": 4.24,
        "maxGuests": 5,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": "Nice 2 room apartment close to everything",
        "rating": 4.34,
        "maxGuests": 6,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
    }
]
for (let i= 0; i< stays.length; i++) {
    contenedor.innerHTML += `
    <div  class="flex flex-col mb-6 gap-1 md:gap-0 md:mb-5">
        <div class="flex mx-auto">
            <div class="w-full h-100 rounded-3xl  md:w-85 md:h-55 lg:w-76 lg:h-52 xl:w-98 xl:h-70 2xl:w-120 2xl:h-80">
                <img src="${stays[i].photo}"  class="w-full h-full object-cover rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105"  alt="">
            </div>
        </div>
        <div>
            <div class="flex justify-between mr-13 md:mr-10 xl:mr-11">
                <p class="flex text-[20px] font-medium text-[#868888] mt-2 ml-10 md:text-[13px] xl:text-[15px] 2xl:text-[17px]">${stays[i].type}<p>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        fill="#eb5656" 
                        class="size-5 md:size-3 text-[#eb5656]">
                            <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>  
                    <p class="text-[20px] font-semibold text-[#454646] md:text-[13px] xl:text-[15px] 2xl:text-[16px]">${stays[i].rating}</p>                 
                </div>
            </div>
        </div>
        <div class="flex justify-start">
            <p class="font-semibold text-[#333333] text-[21px] ml-10 md:text-[13px] xl:text-[16px] 2xl:text-[18px] ">${stays[i].title}</p>    
        </div>           
    </div>
    `;    
}




















