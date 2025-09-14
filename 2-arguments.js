const args = process.argv.length;
if (args === 2) {
  console.log("No argument");
} else if (args === 3) {
  console.log("1 argument");
} else {
  console.log("Argument found");
}