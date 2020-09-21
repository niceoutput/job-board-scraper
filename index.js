const { GoogleSpreadsheet } = require("google-spreadsheet");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1M49mRfn9NQw_0KbLfa-Ia-7zy3arlevhsbm-D372Lc8"
);

(async function () {
  // OR load directly from json file if not in secure environment
  await doc.useServiceAccountAuth(require("./credentials.json"));

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: "renamed doc" });

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  await sheet.addRows([
    { title: "Software Engineer", location: "NY" },
    { title: "Designer", location: "SF" },
    { title: "CTO", location: "DC" },
  ]);
})();
