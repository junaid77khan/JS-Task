function protect_email(email) {
  const [user, domain] = email.split('@');
  const visible = user.length <= 5 ? user : user.slice(0, 5);
  return `${visible}...@${domain}`;
}