

function GetKoan()
{
    var koans = new Array("Knock Knock. <br> Who's there? <br> Who. <br> Who who? <br> I didn't know you.", "Why did the traffic light turn red? <br> You would too.", "What did Ben Franklin say when he flew a kite in a storm? <br> He didn't say anything.", "How do billboards talk? <br> They use language.", "How do angels greet people?", "What does the bee say to the flower?", "Why was the boy sitting on his watch?<br> He wanted to be.", "How do you make a fire with two sticks? <br> You make one.", "Which hand is it better to write with? <br> Neither hand.", "Why did the kid like learning math? <br> He thought it was real.","What do two oceans do when they meet? <br> Nothing.", "First snake: Are we poinsonous? <br> Second snake: I don't know.", "What's harder to catch the faster you run? <br> You.", "Why don't you starve in a desert?", "Why did the chicken cross the road? <br> You would too.", "Don't worry, the frog will surface soon.", "What nut has no shell? <br> A liberated one.", "How do eyes communicate with each other? <br> Through contact.", "Why do chickens sit on their eggs? <br> Because they do.", "Why do cows wear cowbells? <br> Where is the choice?", "Why do bears hibernate? <br> Who would wake them?", "Hiker: Look! A baby snake! <br> Hiker 2: How can you tell? <br> Hiker: You can tell");
    var random = koans[Math.floor(Math.random() * koans.length)];
    document.getElementById("message").innerHTML=random;
}

function GetClown()
{
    var clowns = new Array("face1", "face2", "face3");
    var clowndom = clowns[Math.floor(Math.random() * clowns.length)];
    document.getElementById("clown").src="/images/" + clowndom + ".png";
}