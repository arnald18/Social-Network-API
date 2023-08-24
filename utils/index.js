const { format } = require("date-fns");

function formatDate(val) {
  format(new Date(val), "MMM do',' yyyy 'at' hh':'mm aaa");
}
module.exports = { formatDate };
