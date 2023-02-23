const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const hamburguer= document.querySelector('.menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer= document.querySelector('#shoppingCardContainer')
const cardsContainer= document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleDetail)

function toggleDesktopMenu(){
   const isAsideClosed = shoppingCardContainer.classList.contains('inactive')

    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
function toggleDetail(){
    shoppingCardContainer.classList.toggle('inactive');
}
const productList =[];
productList.push({
    name:'Bike',
    price:20,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Moto',
    price:1220,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Tv',
    price:620,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
for(product of productList){
   const productCard= document.createElement('div');
   productCard.classList.add('product-card');

   const productImg= document.createElement('img');
   productImg.setAttribute('src', product.img)

   const productInfo = document.createElement('div')
   productInfo.classList.add('product-info');

    const productInfoDiv=document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p')
    productName.innerText = '$' + product.name
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)


    const productInfoFigure= document.createElement('figure')
    const productImgCard= document.createElement('img')
    productImgCard.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

    productInfoFigure.appendChild(productImgCard)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}