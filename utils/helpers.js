module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  eq: function (user_id1, user_id2) { // Define the eq helper
    if (user_id1 === user_id2) {
      return true;
    } else {
      return false;
    }

  }
}