// 객체의 배열

const ramenList = [
   {brand: '농심', items:['신라면', '짜파게티', '너구리', '감자면']},
   {brand: '오뚜기', items:['참깨라면', '진라면', '진짬뽕', '진짜장']},
   {brand: '삼양', items:['불닭볶음면', '삼양라면']},
   {brand: '팔도'},
]

for(var index in ramenList){
   console.log(`구매가능한 ${ramenList[index].brand}의 라면: ${ramenList[index].items}`)
}

var tag = function(strings, brand, items){
   if(items === undefined){
      return (brand + "라면 품절");
   } else{
      return (strings[0]+brand+strings[1]+strings[2]+items);
   }
}

for(var index in ramenList){
   console.log(tag`구매가능한 ${ramenList[index].brand}의 라면: ${ramenList[index].items}`)
}