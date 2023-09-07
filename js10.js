// 템플릿을 문자열로 변환하여 저장.
let s = String.raw`xy\n${1+1}z`;
console.log(s);

let title = "템플릿 사용법";
let content = "템플릿 콘텐츠"
s = String.raw`<html>
   <head>
      <title>${title}</title>
   </head>
   <body>
      <h2>${content}</h2>
   </body>
</html>`;

console.log(s);

let tag = function(strings, ... rest){
   console.log(strings);
   return strings.raw[0];
}

let str = tag`Hello ${title}
Node.`
console.log(str)

let name = "sangmin";
console.log(String.raw`Hello ${name}!`); // Hello sangmin!