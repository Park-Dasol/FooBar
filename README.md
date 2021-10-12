
# FooBar



## 방문하기

[FooBar](https://foobar-cocktails.herokuapp.com/)



## 🍸FooBar 소개

- 개발기간 : 2021.09.05 - 2021.10.12

- 웹사이트 : FooBar
  - 칵테일 정보 API를 이용해 프론트엔드만으로 웹사이트를 구현하기 위해 기획했습니다.
  - 칵테일을 모르는 사람들이 즐길 수 있도록 따로 검색하지 않아도 칵테일을 추천해 주고, 칵테일을 자세히 알아 갈 수 있게끔 재료에 대한 소개와 유명인사들이 남긴 술 관련 한마디를 제공해 친근감을 느낄 수 있도록 기획 했습니다.
  - [FooBar 프로토타입](https://www.figma.com/proto/DO79uOnZsKRQPPfcvBIl38/Foobar?node-id=0%3A1)

## 🔧Tech Stack

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white&link="/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/Selenium-43B02A?style=flat-square&logo=Selenium&logoColor=white&link="/> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>



## 💻페이지소개



### 메인페이지

> 메인페이지에서는 환영 문구, 랜덤 추천 칵테일 3가지, 칵테일을 좀 더 알아갈 수 있도록 칵테일 메인 재료 소개, 술 관련 유명 문구로 이루어져 있습니다
>
> 환영문구는 계절별로, 칵테일과 재료, 유명문구는 모두 랜덤으로 제공됩다.

<img src="./screen/labtop/main_greeting.PNG">

<img src="./screen/labtop/main_random.PNG">

<img src="./screen/labtop/main_ingredient.PNG">



<img src="./screen/labtop/main_quote.PNG">



### About 페이지

> Foobar의 기능을 간략히 설명하는 페이지입니다.

<img src="./screen/labtop/about_intro.PNG">

<img src="./screen/labtop/about_features.PNG">



### Cocktail 페이지

> 칵테일을 검색해 원하는 칵테일을 알아 볼수 있고, 메인페이지의 랜덤 칵테일을 클릭해서 더 자세히 알아 볼 수 있습니다.

<img src="./screen/labtop/cocktail_search.PNG">

<img src="./screen/labtop/cocktail_autocomplete.PNG">

<img src="./screen/labtop/cocktail_detail.PNG">



## Contact 페이지

> 더 자세히 알고 싶다면 개발자에게 직접 이메일을 보낼 수 있습니다.

<img src="./screen/labtop/contact.PNG">





## 💎주요기능

### 태블릿 반응형 웹

- 768px 이하의 사이즈의 웹에서는 태블릿 모드로 전환되어 사용이 가능합니다.

<table>
    <tr>     
        <td><img src="./mockup/tablet/main_greeting_ipad_silver_portrait.png"></td>
        <td><img src="./mockup/tablet/main_random_ipad_silver_portrait.png"></td>
        <td><img src="./mockup/tablet/main_ingredient_ipad_silver_portrait.png"></td> 
        <td><img src="./mockup/tablet/main_quote_ipad_silver_portrait.png"></td> 
    <tr>
    <tr>     
        <td><img src="./mockup/tablet/about_intro_ipad_silver_portrait.png"></td>
        <td><img src="./mockup/tablet/about_features_ipad_silver_portrait.png"></td>
        <td><img src="./mockup/tablet/cocktail_search_ipad_silver_portrait.png"></td> 
        <td><img src="./mockup/tablet/cocktail_detail_ipad_silver_portrait.png"></td> 
        <td><img src="./mockup/tablet/contact_ipad_silver_portrait.png"></td>
    <tr>
</table>



### 랜덤 정보 제공

- 메인페이지에서 랜덤으로 3가지의 칵테일을 추천해 주고, `DISCOVER` 버튼으로 칵테일 검색 결과 페이지로 바로 이동이 가능합니다.
- 메인페이지에서 칵테일 재료와 유명인사의 술 관련 인용문구가 랜덤으로 제공됩니다.



### 검색 자동 완성

- FooBar가 가지고 있는 칵테일 목록을 자동완성 기능으로 제공합니다. 검색창에 입력한 값을 포함한 칵테일 이름이 자동완성 목록으로 제공됩니다. 이를 클릭해 검색할 수 있습니다.





## 💡배운점


- 기능을 컴포넌트로 분리 시키면서 코드를 간결히 했고, 자식 컴포넌트 단에서 처리하는 함수와 부모컴포넌트 단에서 처리하는 함수를 상황과 목적에 따라 구분하는 법을 많이 연습하게 되었습니니다.
- **styled-component**를 활용해서 미디어쿼리를 적용하고, props 변수를 받아서 CSS를 적용하면서 좀 더 유연한 웹 프론트를 개발 할 수 있었습니다. 특히 메인화면에서 섹션별로 배경화면이 바뀌면서 헤더 부분도 배경색이 바뀌었는데, 미리 theme을 설정해놓고 섹션별로 theme을 바꾸어서 간편하게 처리 할 수 있었습니다.
- 반응형 웹을 적용하기 위해서 **Grid**를 적용했습니다. Bootstrap을 이용하지 않고 직접 CSS 로 구현해 보면서 Grid-area를 선언하고 클래스로 적용시켜 주니까 반응형을 적용할 때 Grid를 잘 이해하고 있으면 화면을 영역별로 분할해서 배치하기에 편리했습니다.
- TypeScript를 이용해서 미리 타입을 선언해 놓아야 해서 데이터 타입에 대한 에러를 많이 줄일 수 있었지만, 데이터 타입을 변경하거나 값이 비어있을 경우에 에러가 날 수 있어서 프로젝트 기획단계에서부터 **데이터 타입까지 확실한 구조화**의 필요성이 있었습니다.
- **emailjs**와 **toastify** 같은 라이브러리가 굉장히 사용하기 편리했습니다. 이런 라이브러리가 굉장히 잘되어있으니 항상 유용한 라이브러리들의 출시나 개발에 대해 더 많은 관심 가져야겠다고 생각했습니다.
