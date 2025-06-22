function internet_time(date) {
  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();
  const utcSeconds = date.getUTCSeconds();
  const totalSeconds = ((utcHours + 1) % 24) * 3600 + utcMinutes * 60 + utcSeconds;
  const beats = Math.floor(totalSeconds / 86.4);
  return beats.toString().padStart(3, '0');
}
