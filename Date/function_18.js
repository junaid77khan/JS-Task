function calculate_age(birthdate) {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());
  if (!hasBirthdayPassed) {
    age--;
  }
  return age;
}
