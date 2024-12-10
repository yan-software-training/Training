import * as fs from "fs";

function groupedData(arr: [], data: string) {
  let reduceArr = arr.reduce((result: any, currentValue: any) => {
    (result[currentValue[data]] = result[currentValue[data]] || []).push(
      currentValue
    );
    return result;
  }, {});
  return reduceArr;
}

function pushToFile(obj: object, name: string) {
  let count = 0;
  let trueLength = Object.keys(obj).length;
  Object.keys(obj).map((i: string) => {
    try {
      fs.writeFile(
        `${name} ${i}.txt`,
        JSON.stringify(obj[i as keyof Object]),
        () => {}
      );
      count++;
    } catch {
      console.log("Error");
    }
  });
  return count === trueLength ? true : false;
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((raw) =>
    raw.json().then((res) => {
      const check1 = pushToFile(groupedData(res, "userId"), "UserId");
      const check2 = pushToFile(groupedData(res, "completed"), "Completed");
      console.log(check1 && check2 ? "Success" : "Fail");
    })
  )
  .catch((err) => console.log(err));
