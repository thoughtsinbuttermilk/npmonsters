module.exports = {
  format_date: (date) => {
    console.log(date, 'date created')
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  }
};
