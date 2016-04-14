$(document).ready(function() {
  var hawaiiBernie = 18;
  var hawaiiHillary = 13;
  var washingtonBernie = 25;
  var washingtonHillary = 19;
  var virginiaBernie = 33;
  var virginiaHillary = 73;

  //winningMargin takes two inputs
  //the two inputs are delegate numbers
  //the function will return the difference of whichever number is greater
  function winningMargin(delegates1, delegates2) {
    //if first number is greater than second
    //return first number minus second number
    //if second number is greater than first number
    //return second number minus first number
  }

  //Make a getWinner function that takes two inputs
  //The two inputs are bernie delegates and hillary delegates
  //If bernie delegates are greater than hillary's, return "Bernie"
  //If hillary delegates are grater than bernie's, return "Hillary"
  function getWinner(bernieDelegates, hillaryDelegates) {
  }

  // Make a getMessage function that takes 3 inputs
  // The three inputs will be winnerName, margin, stateName
  // Example of result: "Bernie won by 200 delegates in Virginia"

  //getMessage goes here

  //Make a getResult function that takes 3 inputs
  //First input is bernie delegates, second hillary delegates, third state name string
  //Function should use the getWinner function to get winner using the delegate inputs
  //Function should use winningMargin using delegate inputs to get winning margin
  //Function should use getMessage function using winner, margin, and state name input
  function getResult(bernieDelegates, hillaryDelegates, stateName) {
    var winner = getWinner(bernieDelegates, hillaryDelegates);
    var margin = winningMargin(bernieDelegates, hillaryDelegates);
    return "I'm not working yet!"
  }


  //jQuery - hovering each state replaces paragraph with text of result
  //no need to edit the code below
  $("#va").hover(function() {
    $("#virginia").text(getResult(virginiaBernie, virginiaHillary, "Virginia"));
  });

  $("#wa").hover(function() {
    $("#washington").text(getResult(washingtonBernie, washingtonHillary, "Washinton"));
  });

  $("#hi").hover(function() {
    $("#hawaii").text(getResult(hawaiiBernie, hawaiiHillary, "Hawaii"));
  });
});
