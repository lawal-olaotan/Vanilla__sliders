    
   


    !(function(d) {

        let itemClass = "carousel__photo",
        items = document.getElementsByClassName(itemClass), 
        slide = 0,
        moving = true;
    
        totalItem = items.length
        items.activeele = totalItem - 2;


        function SetInitialClass(){
 
            // active class to shown elements
            for(let i=0;i < items.activeele; i++){
                items[i].classList.add("active");
            }
        
            for(let i = totalItem-1; i > 3; i--){
                items[i].classList.add("next");  
            }
          
        }


        function setEvents(){
            const next = document.querySelector('#next');
            const prev = document.querySelector('#prev');

            prev.style.display ="none";

            next.addEventListener('click', moveNext);
            prev.addEventListener('click',movePrev);
        };


        function moveNext(event){

            if(!moving){
                    slide = 1;
                    moveCarosel(slide);
                    hideAndShowbtn(prev,next);
            }
              
        }


        function movePrev(event){
            if(!moving){
                    slide = 0;
                    moveCarosel(slide);
                    hideAndShowbtn(next,prev)
            }
        }

        function hideAndShowbtn(activebtn,noactivebtn){
            activebtn.style.display = "block";
            noactivebtn.style.display = "none"
        }

        function  disableMoves(){
            moving = true;
            setTimeout(function(){moving = false},500);
        }

      

        function moveCarosel(slide){

            if(!moving){

                disableMoves();
                
                // test if carousel has more than six items
                if((totalItem -1) === 5){

                    let activeele = document.querySelectorAll('.active');
                    let nextele = document.querySelectorAll('.next');
                    let prevele = document.querySelectorAll('.prev');

                   if(slide === 1){

                        for(i=0;i < activeele.length - 2; i++){
                            activeele[i].className = itemClass +" prev"; 
                        }

                        for(i=0;i < nextele.length; i++){
                            nextele[i].className = itemClass + " active";
                        }

                   }else if(slide === 0){

                        for(i = activeele.length -1; i > 1; i--){
                            activeele[i].className = itemClass + " next";
                        }

                        for(i=0; i < prevele.length; i++){
                            prevele[i].className = itemClass + " active";
                        }  
                   }

                   
                }
                

            }

        }


        function initcarol(){

            SetInitialClass();
            setEvents();

            moving = false;
        }

        initcarol()

    }(document));
               
                    
                