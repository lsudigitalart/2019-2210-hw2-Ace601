function setup() {
    createCanvas(400, 269);
  }
  
  function draw() {
    background(255);
    
        
            //fill(251,223,212);
            //arc(205, 105, 100, 50, 0,PI/0.15,OPEN); // 180 degrees
   
       //blue
    fill(0, 0, 160);
       stroke(0);
    strokeWeight(7);
    ellipse(320,210, 316);
    
    
    //yellow2
    fill(250, 200, 16);
       stroke(0);
    ellipse(235, 239, 376);
  
      //center
    fill(0);
    //lbottom,rbottom,rtop,ltop
    quad(10,201,316,300,259,93,300,0.0);
    
  
    //top ellipse
    fill(196, 169, 158);
    noStroke();
    ellipse(97,15,575,130);
     
  fill(196, 169, 158);
    stroke(0);
    strokeWeight(8);
  curve(-395, -281, 385, 5, 85, 84, -13, -230);
    
    
    fill(250, 200, 16);
      stroke(0);
    strokeWeight(8);
  curve(395, 581, 205, 100, 5, 84, 13, 230);
  
    
  
    //top  
    fill(196, 169, 158);
    noStroke();
    //ellipse(107,15,575,130);
    
  
    //yellow1
     fill(250, 200, 16);
    stroke(0);
    ellipse(92, 209, 316);
    
    //spots
     fill(250,200,16);
    strokeWeight(86);
    stroke(0);
    ellipse(122,139,30);
    
    
     //spots
     fill(250,200,16);
    strokeWeight(86);
    stroke(0);
    ellipse(1,199,30);
    
     //spots
     fill(250,200,16);
    strokeWeight(86);
    stroke(0);
    ellipse(132,259,30);
    
  //spots
     fill(250,200,16);
    strokeWeight(86);
    stroke(0);
    ellipse(342,169,30);
    
    
    
    
    
  }