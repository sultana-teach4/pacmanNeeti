class reddy{
    constructor(){
         gost1 = createSprite(130, 80, 20, 20);
  gost1.addImage(redImage);
  gost1.velocityY = 1;
  gost1.scale=0.40
  gost1.debug = true;
  gost1.setCollider("rectangle", 0, 0, 80, 80);
    }
    destroygost(){
        gost1.destroy();
        pacMan.destroy();
    }
    display(){
  
        if(gost1.isTouching(wall4)){
         gost1.velocityY = 3;
         gost1.velocityX = 0;
        } else
        if(gost1.isTouching(wall3) && gost1.isTouching(wall2)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         } else
        // if(gost1.isTouching(wall3) && gost1.isTouching(iwall1)){
          //console.log("hello")
          
           //gost1.velocityY = -3;
           //gost1.velocityX = 0;
          
         //}else
         if(gost1.isTouching(wall12)){
          gost1.velocityY = 0;
          gost1.velocityX = -3;
         } else
         if(gost1.isTouching(wall9) && gost1.isTouching(wall8)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         } else
          
         if(gost1.isTouching(wall13)){
          gost1.velocityY = -3;
          gost1.velocityX = 0;
         } else
         if(gost1.isTouching(wall1) && gost1.isTouching(wall2)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         } else
         if(gost1.isTouching(iwall5)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         } else
         if(gost1.isTouching(wall14)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         } else
         
      
         
         if(gost1.isTouching(wall4)){
         gost1.velocityY = 3;
        gost1.velocityX = 0;
         } else
        // if(gost1.isTouching(wall3)){
          // gost1.velocityY = 0;
           //gost1.velocityX = -3;
          //}else
          if(gost1.isTouching(iwall1)){
          gost1.velocityY = -3;
            gost1.velocityX = 0;
          }else
          if(gost1.isTouching(wall12)){
           gost1.velocityY = 0;
           gost1.velocityX = -3;
          } else
          if(gost1.isTouching(wall9)){
           gost1.velocityY = -3;
           gost1.velocityX = 0;
          }else
          if(gost1.isTouching(wall7) && gost1.isTouching(wall8)){
           gost1.velocityY = 0;
           gost1.velocityX = -3;
          }else
          if(gost1.isTouching(wall7)){
            gost1.velocityY = 3;
            gost1.velocityX = 0;
           }else
          if(gost1.isTouching(wall13)){
           gost1.velocityY = -3;
           gost1.velocityX = 0;
          }else
          if(gost1.isTouching(wall1)){
           gost1.velocityY = 0;
           gost1.velocityX = -3;
          }else
          if(gost1.isTouching(wall2)){
           gost1.velocityY = 3;
           gost1.velocityX = 0;
          }else
          if(gost1.isTouching(wall14)){
           gost1.velocityY = 0;
           gost1.velocityX = 3;
          }else
          //if(gost1.isTouching(iwall4)){
            //gost1.velocityY = 0;
            //gost1.velocityX = -3;
           //}else
        
          //gost2(pink)
         if(gost1.isTouching(iwall2)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         }else
         if(gost1.isTouching(wall12)){
          gost1.velocityY = 0;
          gost1.velocityX = -3;
         }else
         if(gost1.isTouching(wall9)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         }else
         if(gost1.isTouching(wall11)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         }else
         if(gost1.isTouching(wall18)){
          gost1.velocityY = -3;
          gost1.velocityX = 0;
         }else
         //if(gost1.isTouching(wall3)){
          //gost1.velocityY = 0;
          //gost1.velocityX = -3;
         //}else
         if(gost1.isTouching(iwall3) && gost1.isTouching(wall3)){
          
          gost1.velocityX = 3;
          gost1.velocityY = 0;
         }else
         if(gost1.isTouching(wall14)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         }else
         if(gost1.isTouching(wall7)&& gost1.isTouching(wall6)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         }else
         if(gost1.isTouching(wall1)){
          gost1.velocityY = 0;
          gost1.velocityX = 3;
         }else
         if(gost1.isTouching(wall4)){
          gost1.velocityY = 3;
          gost1.velocityX = 0;
         }//else
         //if(gost1.isTouching(iwall4)){
          //gost1.velocityY = 0;
          //gost1.velocityX = -3;
         //}
        
        
      
        if(gost1.isTouching(pacMan)){
            destroygost();
        }
    }
  
}
