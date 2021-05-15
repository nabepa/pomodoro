function parseTimmer(second) {
  if (second < 0) {
    return '00:00';
  }
  const s = second % 60;
  const m = Math.floor(second / 60) % 60;

  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default parseTimmer;
