const pepsi = [

    {
        name:"Pepsi Diet",
        amount: "350 cl",
        amount_per: "8.6%",
        fat: "0g",
        fat_per: "0%",
        sodium: "10mg",
        sodium_per: "1%",
        carbohydrated: "48g",
        carbohydrated_per: "15.3%",
        protien: "0g",
        protien_per: "0%",
        ml: "250ml",
        poster1: "Pepsi/1 Pepsi White.png",
        poster2: "Pepsi/1 Pepsi blue.png",
        main_poster: "Pepsi/pepsi diet.png"

    },

    {
        name:"Pepsi Classic",
        amount: "410 cl",
        amount_per: "7.5%",
        fat: "0g",
        fat_per: "0%",
        sodium: "30mg",
        sodium_per: "1%",
        carbohydrated: "41g",
        carbohydrated_per: "20.9%",
        protien: "0g",
        protien_per: "0%",
        ml: "330ml",
        poster1: "Pepsi/2 can White.png",
        poster2: "Pepsi/2 can blue.png",
        main_poster: "Pepsi/can.png"

    },

    {
        name:"Pepsi 500 ML",
        amount: "490 cl",
        amount_per: "12.9%",
        fat: "0g",
        fat_per: "0%",
        sodium: "49mg",
        sodium_per: "0.9%",
        carbohydrated: "52g",
        carbohydrated_per: "18.5%",
        protien: "0g",
        protien_per: "0%",
        ml: "500ml",
        poster1: "Pepsi/3 Pepsi White.png",
        poster2: "Pepsi/3 Pepsi blue.png",
        main_poster: "Pepsi/pepsi .5ltr.png"

    },

    {
        name:"Pepsi 1 LTR",
        amount: "990 cl",
        amount_per: "15.4%",
        fat: "0g",
        fat_per: "0%",
        sodium: "30mg",
        sodium_per: "1.5%",
        carbohydrated: "42g",
        carbohydrated_per: "19.2%",
        protien: "0g",
        protien_per: "0%",
        ml: "1000 ml",
        poster1: "Pepsi/4 Pepsi White.png",
        poster2: "Pepsi/4 Pepsi blue.png",
        main_poster: "Pepsi/pepsi 1ltr.png"

    },

    {
        name:"Pepsi 1.5 LTR",
        amount: "1490 cl",
        amount_per: "14.7%",
        fat: "0g",
        fat_per: "0%",
        sodium: "25mg",
        sodium_per: "2%",
        carbohydrated: "39g",
        carbohydrated_per: "18.2%",
        protien: "0g",
        protien_per: "0%",
        ml: "1500 ml",
        poster1: "Pepsi/5 Pepsi White.png",
        poster2: "Pepsi/5 Pepsi blue.png",
        main_poster: "Pepsi/pepsi 1.5ltr.png"

    },

    {
        name:"Pepsi 2 LTR",
        amount: "1960 cl",
        amount_per: "29.1%",
        fat: "0g",
        fat_per: "0%",
        sodium: "20mg",
        sodium_per: "2.2%",
        carbohydrated: "35g",
        carbohydrated_per: "12.2%",
        protien: "0g",
        protien_per: "0%",
        ml: "2000 ml",
        poster1: "Pepsi/6 Pepsi White.png",
        poster2: "Pepsi/6 Pepsi blue.png",
        main_poster: "Pepsi/pepsi 2ltr.png"

    }
]

Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele , i)=> {
ele.addEventListener('mouseover', ()=> {
    document.getElementsByClassName('pepsi_hover_img')[i].src= pepsi[i].poster1;
})

ele.addEventListener('mouseout', ()=> {
    document.getElementsByClassName('pepsi_hover_img')[i].src= pepsi[i].poster2;
})

}) 


Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele , i)=> {
    ele.addEventListener('click', ()=> {
        document.getElementById('main_bottle').src=pepsi[i].main_poster;
        document.getElementById('main_title').innerText=pepsi[i].name;
        document.getElementById('ml_title').innerText=pepsi[i].ml;
        document.getElementById('ml_title').innerText=pepsi[i].ml;
        document.getElementById('cl').innerText=pepsi[i].amount;
        document.getElementById('cl1').innerText=pepsi[i].amount_per;
        document.getElementById('fat').innerText=pepsi[i].fat;
        document.getElementById('fat1').innerText=pepsi[i].fat_per;
        document.getElementById('sodium').innerText=pepsi[i].sodium;
        document.getElementById('sodium1').innerText=pepsi[i].sodium_per;
        document.getElementById('carbohydrate').innerText=pepsi[i].carbohydrated;
        document.getElementById('carbohydrate1').innerText=pepsi[i].carbohydrated_per;
        document.getElementById('protien').innerText=pepsi[i].protien;
        document.getElementById('protien1').innerText=pepsi[i].protien_per;
    })
    
    }) 


    let index = 1;
    
    document.getElementById('left_btn').addEventListener('click', () =>{
        index -= 1; 
        if(index<0){
            index = pepsi.length;
        }

        document.getElementById('main_bottle').src=pepsi[index].main_poster;
        document.getElementById('main_title').innerText=pepsi[index].name;
        document.getElementById('ml_title').innerText=pepsi[index].ml;
        document.getElementById('ml_title').innerText=pepsi[index].ml;
        document.getElementById('cl').innerText=pepsi[index].amount;
        document.getElementById('cl1').innerText=pepsi[index].amount_per;
        document.getElementById('fat').innerText=pepsi[index].fat;
        document.getElementById('fat1').innerText=pepsi[index].fat_per;
        document.getElementById('sodium').innerText=pepsi[index].sodium;
        document.getElementById('sodium1').innerText=pepsi[index].sodium_per;
        document.getElementById('carbohydrate').innerText=pepsi[index].carbohydrated;
        document.getElementById('carbohydrate1').innerText=pepsi[index].carbohydrated_per;
        document.getElementById('protien').innerText=pepsi[index].protien;
        document.getElementById('protien1').innerText=pepsi[index].protien_per;

    })

    document.getElementById('right_btn').addEventListener('click', () =>{
        index +=1; 
        if(index>pepsi.length){
            index = pepsi.length;
            index = 0;
        }

        document.getElementById('main_bottle').src=pepsi[index].main_poster;
        document.getElementById('main_title').innerText=pepsi[index].name;
        document.getElementById('ml_title').innerText=pepsi[index].ml;
        document.getElementById('ml_title').innerText=pepsi[index].ml;
        document.getElementById('cl').innerText=pepsi[index].amount;
        document.getElementById('cl1').innerText=pepsi[index].amount_per;
        document.getElementById('fat').innerText=pepsi[index].fat;
        document.getElementById('fat1').innerText=pepsi[index].fat_per;
        document.getElementById('sodium').innerText=pepsi[index].sodium;
        document.getElementById('sodium1').innerText=pepsi[index].sodium_per;
        document.getElementById('carbohydrate').innerText=pepsi[index].carbohydrated;
        document.getElementById('carbohydrate1').innerText=pepsi[index].carbohydrated_per;
        document.getElementById('protien').innerText=pepsi[index].protien;
        document.getElementById('protien1').innerText=pepsi[index].protien_per;

    })
    



