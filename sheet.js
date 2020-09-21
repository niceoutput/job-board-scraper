const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = class Sheet {
  constructor(args) {
    this.doc = new GoogleSpreadsheet(
      "1M49mRfn9NQw_0KbLfa-Ia-7zy3arlevhsbm-D372Lc8"
    );
  }
  async load() {
    // load directly from json file if not in secure environment
    await this.doc.useServiceAccountAuth(require("./credentials.json"));
    // loads document properties and worksheets
    await this.doc.loadInfo();
  }
  async addRows(rows) {
    // or use doc.sheetsById[id]
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows);
  }
};
