const fs = require('fs');

const raiseNumber = (path, addedNumber, filenameList) => filenameList.forEach((filename) => {
  if (filename.indexOf('.js') <= 0) {
    console.log(filename);
    return;
  }
  const matchedNumber = filename.match(/[0-9]{2,3}/g);
  const matchedFilename = filename.match(/_.+/g);
  const beforeNumber = Number(matchedNumber);
  const targetNumber = beforeNumber + addedNumber;
  const targetFilename = targetNumber + matchedFilename;

  console.log(matchedNumber, matchedFilename, beforeNumber, targetNumber, targetFilename);

  fs.rename(`${path + filename}`, `${path + targetFilename}`, (err) => {
    if (err) console.log(`ERROR: ${err}`);
  });
});

const targetPathList = [
  // '../00a_basic/',
  // '../00b_loop_string/',
  '../numberplus/',
  // '../00d_math/',
  // '../00e_string/',
  // '../00f_regexp/',
  // '../00g_interval/',
  // '../00h_array_operation/',
  // '../00i_functional_programming/',
  // '../00j_filter_map_reduce/',
  // '../00k_promise/',
  // '../00l_exports_require/',
  // '../01a_event/',
  // '../01b_module/',
  // '../01c_fs/',
  // '../01c_http/',
  // '../01d_project_manage/',
  // '../01e_request/',
  // '../01f_external_module/',
  // '../01g_express/',
  // '../01h_mysql/',
  // '../01i_telegram_bot/',
]


targetPathList.forEach((targetPath) => {
  const filenameList = fs.readdirSync(targetPath);
  raiseNumber(targetPath, -9, filenameList);
});

