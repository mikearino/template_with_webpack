export function template(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("template");
    } else if (i % 3 === 0) {
      output.push("temp");
    } else if (i % 5 === 0) {
      output.push("late");
    } else  {
      output.push(i);
    }
  }
  return output;
}
