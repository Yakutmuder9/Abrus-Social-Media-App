// Placeholder function to validate email format
const isValidEmail = (email) => {
  // Regular expression to match email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Placeholder function to validate phone number format
const isValidPhoneNumber = (phone) => {
  // Regular expression to match phone number format
  const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
  return phoneRegex.test(phone);
};

module.exports = { isValidEmail, isValidPhoneNumber };
