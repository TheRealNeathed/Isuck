class Form{
    constructor() {}

display(){
var title = createElement('h2');
title.html("Budget Optimizer");
title.position(430, 50);
var monthinstruction = createElement('h3')
var taxinstruction = createElement('h3')
var familyinstruction = createElement('h3')


var monthinput = createInput("Answer");
var taxinput = createInput("Answer");
var familyinput = createInput("Answer");

var button = createButton('Submit');
var greeting = createElement('h3');
monthinstruction.html("What is your monthly income?")
taxinstruction.html("What is your cumulative income tax rate?")
familyinstruction.html("What is your family size?")
monthinput.position(430,160);
taxinput.position(430,260);
familyinput.position(430,360);
monthinstruction.position(430,100)
taxinstruction.position(430,200)
familyinstruction.position(430,300)
button.position(450,200);



button.mousePressed(function(){
    button.hide();
    var monthlyincome = monthinput.value();
    var taxes = taxinput.value();
    var familysize = familyinput.value();


    playerCount +=1;
    player.update(monthlyincome);
    player.update(taxes);
    player.update(familysize);

    player.updateCount(playerCount);
    greeting.html("Thank you for answering");
    greeting.position(430,160);
    
});

}

}