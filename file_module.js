var fs = require("fs");

// storing all file names in cur_dir_files ;
const cur_dir_files = fs.readdirSync("./");
console.log(cur_dir_files);

// Reading data from the file
// If it does not exist, throws error
// try {
//   const read_data = fs.readFileSync("./sample.txt", "utf-8");
//   console.log(read_data);
// } catch (e) {
//   console.log(e);
// }

// Adding data into a file.
// If there is an existing file, new data overrides the existing data.
// If there is no such file, new file gets created and data will be added

function creating_adding(callback) {
  const data_to_add = "This is file content - 1 ";
  // Till now there was no file with the name  sample.txt;
  fs.writeFile("./sample.txt", data_to_add, () => {
    console.log("Content added to the file");
    callback();
  });
}

function reading() {
  console.log("After adding");
  const read_data = fs.readFileSync("./sample.txt", "utf-8");
  console.log(read_data);
  return read_data;
}
creating_adding(reading);

function read_append() {
  const read_data = fs.readFileSync("./sample.txt", "utf-8");
  return read_data;
}

async function appending_data(callback) {
  var data_to_override = "This is file content - 2";

  const data_existing = await callback();
  data_to_override = data_existing + "\n" + data_to_override;
  fs.writeFile("./sample.txt", data_to_override, () => {
    console.log("Data appended");
    reading();
  });
}
setTimeout(() => {
  appending_data(read_append);
}, 10);
