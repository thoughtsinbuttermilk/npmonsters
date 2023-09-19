module.exports = {
  format_date: (date_created) => {
    console.log(date_created)
    // Format date as MM/DD/YYYY
    return date_created.toLocaleDateString();
  }
};
