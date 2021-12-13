const fileHound = require("filehound")

const fh = fileHound.create();



fh.depth(1)
  .size("< 100")
  .find()
  .each(console.log)

