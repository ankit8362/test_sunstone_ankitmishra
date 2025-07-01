// Question 1: Delay Function Using Promises
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(function() {
  console.log("Hello");
});
