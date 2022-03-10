// Task 1 - Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
// task 2 - Cards Sequence 7, 8, 9 should return the string 0 Hold
// Task 3 - Cards Sequence 10, J, Q, K, A should return the string -5 Hold
// Task 4 - Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
// Task 5 - Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
// Task 6 - Cards Sequence 2, 2, 10 should return the string 1 Bet
// Task 7 - Cards Sequence 3, 2, A, 10, K should return the string -1 Hold



let count = 0;

function cc(card) {
  // Only change code below this line
if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
  	//alert("2 3 4 5 6");
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return String(count) + " Hold";
  }
  else {
  	return String(count) + " Bet";
  }


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');