console.log("첫번째 줄\n두번째 줄")
console.log(`세번째 줄
네번째 줄`)

// 템플릿 중첩 사용 - 함수 없기 때문에 실행은 불가. 그냥 예시임.
const class = `header ${isLargeScreen()? '' :
`icon-${item.isCollapse ? 'expander' : 'collapser'}`}`;