document.getElementById('root').innerHTML = `
  <h2>Welcome to FaithGuide 🙏</h2>
  <button onclick="showVerse()">Get Today’s Verse</button>
  <p id="verse"></p>
`;

function showVerse() {
  const verses = [
    "Philippians 4:13 – I can do all things through Christ who strengthens me.",
    "Psalm 23:1 – The Lord is my shepherd; I shall not want.",
    "Jeremiah 29:11 – For I know the plans I have for you..."
  ];

  const random = verses[Math.floor(Math.random() * verses.length)];
  document.getElementById('verse').innerText = random;
}
