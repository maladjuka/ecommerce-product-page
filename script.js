let minus=document.getElementById('minus');
let plus=document.getElementById('plus');
let count=0;
let countItem=document.getElementById('itemNumber')

let quant=document.getElementById('quant')


plus.addEventListener("click", () => {
    count++;
    countItem.innerText = count;
  });
  
  
minus.addEventListener("click", () => {
   
   if(count>=1){count--;
    countItem.innerText = count;
    }else
    

    {        minus.ariaDisabled;
}

    
  });
  let addToCart=document.getElementById('addToCart');
  addToCart.addEventListener('click',()=>{



console.log(count)




  })


  let cart=document.getElementById('cart');
  let cartCard=document.getElementById('cart-card')


  cart.addEventListener('click',()=>{


    cartCard.classList.toggle('show');

    console.log(count)
  });


  let sumbitCart=document.getElementById('addToCart');

  sumbitCart.addEventListener('click',()=>{
console.log('test')
if(count>=1){cartCard.innerHTML=`




<h5>cart</h5>
    <div class="cart-desc">
        <div class="product-desc"> 
            <img src="images/image-product-1-thumbnail.jpg" alt="">

            <div class="product-price">             <p>Fall Limited Edition Sneakers</p>

                $125.00*${count}= <span id="totalPrice">$ ${125*count}.00</span></div>
            <div id="delete"><img src="images/icon-delete.svg" alt=""></div>

        </div>

    </div>
    <div class="sumbit">Sumbit</div>

`
quant.innerHTML=count

}




let clear=document.getElementById('delete')
clear.addEventListener('click',()=>{

cartCard.innerHTML=`
<h5>cart</h5>

<div style="margin: 0 auto; padding-bottom: 30%;">
    Your cart is empty
</div>`

quant.innerHTML=0

})


  })
 let activPic=document.getElementById('active-img');

  let pic1=document.getElementById('pic1');
  let pic2=document.getElementById('pic2');
  let pic3=document.getElementById('pic3');
  let pic4=document.getElementById('pic4');


  pic1.addEventListener('click', ()=>{

console.log('slika')
activPic.src='images/image-product-1.jpg';



  })
  pic2.addEventListener('click', ()=>{

    console.log('slika')

    activPic.src='images/image-product-2.jpg';
    
    
    
      })
      pic3.addEventListener('click', ()=>{

        console.log('slika')
    
        activPic.src='images/image-product-3.jpg';
        
        
        
          })
          pic4.addEventListener('click', ()=>{

            console.log('slika')
        
            activPic.src='images/image-product-4.jpg';
            
            
            
              })
              let slideImg=document.getElementById('gallery');

              activPic.addEventListener('click',()=>{
slideImg.classList.remove('hide')

slideImg.classList.add('active-slide');




              })

              let close=document.getElementById('close')
              close.addEventListener('click',()=>{
                slideImg.classList.add('hide')
                
                slideImg.classList.remove('active-slide');
                
                
                
                
                              })
              


              var slideIndex = 1;
              showSlides(slideIndex);
              
              // Next/previous controls
              function plusSlides(n) {
                showSlides(slideIndex += n);
              }
              
              // Thumbnail image controls
              function currentSlide(n) {
                showSlides(slideIndex = n);
              }
              
              function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
               
                slides[slideIndex-1].style.display = "block";
              }
              let ham=document.getElementById('ham')
              ham.addEventListener('click',()=>{

let showUl=document.getElementById('show-ul');
showUl.classList.toggle('show')

              })
      