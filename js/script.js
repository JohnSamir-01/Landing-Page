// Declaring some Variables

var secs = document.querySelectorAll(".sec");
let ulx = document.createDocumentFragment();
let ul = document.querySelector("#ul");
let x = 1


//////////////////////////////////////////////

// Dynamic Nav menu with Scroll

for(const i of secs){
    let list = document.createElement("LI");
    let link = document.createElement("a");
   
   
    let text = document.createTextNode(`Section-${x}`)
    link.setAttribute("href","");
    link.appendChild(text);
    list.addEventListener('click',function(event){
        event.preventDefault();
        
        i.scrollIntoView({behavior:"smooth"});
    })
    list.classList.add(`section-${x}`);
    x = x+1;
    
    list.appendChild(link)
    ulx.appendChild(list);
}
ul.appendChild(ulx);

/////////////////////////////////////////////////////////////

//Adding Active classes with scroll using BoundingClientRect

let current;
let navlink = document.querySelectorAll(".ul li");



window.addEventListener('scroll', () => {
    let hover;
    secs.forEach(sec =>{
        if(sec.classList.contains('active')){
            sec.classList.remove('active');
        }
        const top = sec.offsetTop;
        if(pageYOffset>=(top -200)){
            hover = sec.getAttribute('id');
            sec.classList.add('active');
        }
    })

    navlink.forEach(function(x){
        x.classList.remove('active_Nav');

      if(x.classList.contains(hover)){
          x.classList.add("active_Nav")

      }

  })
} );

//////////////////////////////////////////////////////////////



//Dark mode

function dark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let buttonx = document.querySelector("#button");
   

    if(element.classList.contains("dark-mode")){
        
        buttonx.innerText = "Light Mode";
        }else{
            buttonx.innerText = "Dark Mode";
        }


      
    
 }
 
 /////////////////////////////////////////////////////////////////////////


 // Nav Menu Compatible Icon Toggle 

 function display() {
    let x = document.getElementById('ul');
    
   
    if(x.style.display === 'block') {
      x.style.display = 'none';
    }else {
        x.style.display = 'block';
    }
  }


  window.addEventListener("resize", function(){
    if (window.innerWidth >650){
        let x = document.getElementById('ul');
       
          x.style.display = 'block';
        }
  });
 

  /////////////////////////////////