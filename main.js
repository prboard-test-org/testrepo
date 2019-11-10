function thisIsGood() {
  let a = true;
  let c = "hello";
  let b = 0;

  // comment 4
  if (a) {
    // b = 100;
  } else if (c === "not hello") {
    b = 142;
  } else if (b === 42) {
    c = 10;
  }

  // addign a comment

  return 42;
}

thisIsGood();
