    
    let itemClass = "carousel__photo",
    items = document.getElementsByClassName(itemClass), 
    slide = 0,
    moving = true;

    totalItem = items.length

    items.activeele = totalItem - 2
  

document.addEventListener('DOMContentLoaded', function(){

    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

  

    next.addEventListener('click', moveNext)

    // prev.addEventListener('click', e=>{

    //     if(!moving){
    //         if(slide === 0){
    //             slide = (totalItem - 1);
    //         }else{
    //             slide--;
    //         }
    //     }

    //     moveCaroselTo(slide);
        
    // } )


    SetInitialClass()
   
});

function moveNext(){

    if(!moving){

        if(slide === (totalItem - 2)){
            slide = 0;
        }else{
            slide++;
        }

    }

    moveCaroselTo(slide);
    
}




function SetInitialClass(){
 
    // active class to shown elements
    for(let i=0;i < items.activeele; i++){
        items[i].classList.add("active");
    }


    for(let i = totalItem-1; i > 3; i--){
        items[i].classList.add("next");
       
    }

    
}

// moving variable 
function  disableMoves(){

    moving = true;

    setTimeout(function(){
        moving=false
    },500);
}


function moveCaroselTo(slide){

    if(moving === true){

        disableMoves();

        // let NewPrev = getNewPrev(),
        //     NewNext = slide + 1,
        //     oldPrev = NewPrev - 1,
        //     oldNext = NewNext + 1;

        // if((totalItem -1) < 6){
        //     if(slide === 0){
        //     }else if(slide === (totalItem -1 )){
        //     }
        // }
        
        
       

        // active class 
        let activeele = document.querySelectorAll('.active');
       
        for(i=0;i < activeele.length - 2; i++){
            activeele[i].classList.remove('active');
            activeele[i].classList.remove('initial');
            activeele[i].classList.add('prev');
        }

        let nextele = document.querySelectorAll('.next');
        for(i=0;i < nextele.length; i++){
            nextele[i].classList.add('active');
            nextele[i].classList.add('initial');
            nextele[i].classList.remove('next')
        }

        for(let i = activeele.length -1; i > 1; i--){
            activeele[i].classList.add('prevemove');
            activeele[i].classList.add('remove');
            
            // activeele[i].classList.remove('prev');
           
        }

    
        // activeele[2].classList.add('active');
        // activeele[2].classList.remove('prev');

        // activeele[3].classList.add('active');
        // activeele[3].classList.remove('prev');

        

        
        // next class 
       
    }
};
