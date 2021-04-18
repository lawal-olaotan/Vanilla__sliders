    
    let itemClass = "carousel__photo",
    items = document.getElementsByClassName(itemClass), 
    slide = 0,
    moving = true;

    totalItem = items.length

    items.activeele = totalItem - 2
    items.nextele = totalItem - 4
    nextele = items[totalItem - 1]
    

document.addEventListener('DOMContentLoaded', function(){

    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

  

    next.addEventListener('click', e =>{
       
        if(!moving){
            if(slide === (totalItem - 2)){
                slide = 0;
            }else{
                slide++;
            }
        }

        moveCaroselTo(slide);
        
    })

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

    if(!moving){

        disableMoves();

        let NewPrev = slide - 1,
            NewNext = slide + 1,
            oldPrev = slide - 2,
            oldNext = slide + 2;


        if((totalItem -1) > 6){
            if (NewPrev <= 0){
                oldPrev = (totalItem -1);
            }else if(NewNext >= (totalItem -1)){
                oldNext=0;
            }
            
        }



       
    }

};


