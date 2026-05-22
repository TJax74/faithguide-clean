console.log("APP.JS CONNECTED");

const guidance = {

  Anxiety:
    "Take a deep breath. You are not alone—God is with you even in this moment.",

  Stress:
    "Slow down. God’s peace is greater than the pressure you feel.",

  Fear:
    "Even when life feels uncertain, God remains steady and faithful.",

  Grief:
    "God is near to the brokenhearted. You do not have to carry this pain alone.",

  Anger:
    "Pause before reacting. Invite God into your thoughts and emotions.",

  Loneliness:
    "You are deeply seen, known, and loved by God.",

  Confusion:
    "When the path feels unclear, trust that God still guides your steps.",

  Joy:
    "Celebrate this moment with gratitude and remember the goodness of God.",

  Gratitude:
    "A thankful heart helps us recognize God’s presence in everyday life."

};
  
const verses = {

Anxiety: [
{ ref:"Matthew 6:34", text:"Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof." },
{ ref:"Philippians 4:6", text:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
{ ref:"1 Peter 5:7", text:"Casting all your care upon him; for he careth for you." },
{ ref:"John 14:27", text:"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid." },
{ ref:"Isaiah 26:3", text:"Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee." },
{ ref:"Psalm 94:19", text:"In the multitude of my thoughts within me thy comforts delight my soul." }
],

Stress: [
{ ref:"Matthew 11:28", text:"Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
{ ref:"Psalm 55:22", text:"Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved." },
{ ref:"Psalm 46:1", text:"God is our refuge and strength, a very present help in trouble." },
{ ref:"Isaiah 40:31", text:"But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
{ ref:"John 16:33", text:"These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world." },
{ ref:"Psalm 62:8", text:"Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us. Selah." }
],

Fear: [
{ ref:"Isaiah 41:10", text:"Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness." },
{ ref:"2 Timothy 1:7", text:"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
{ ref:"Psalm 23:4", text:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
{ ref:"Joshua 1:9", text:"Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest." },
{ ref:"Psalm 27:1", text:"The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?" },
{ ref:"Psalm 56:3", text:"What time I am afraid, I will trust in thee." }
],

Grief: [
{ ref:"Psalm 34:18", text:"The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit." },
{ ref:"Matthew 5:4", text:"Blessed are they that mourn: for they shall be comforted." },
{ ref:"Revelation 21:4", text:"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." },
{ ref:"John 14:1", text:"Let not your heart be troubled: ye believe in God, believe also in me." },
{ ref:"Psalm 147:3", text:"He healeth the broken in heart, and bindeth up their wounds." },
{ ref:"Lamentations 3:22-23", text:"It is of the Lord's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness." }
],

Anger: [
{ ref:"Ephesians 4:26", text:"Be ye angry, and sin not: let not the sun go down upon your wrath." },
{ ref:"Proverbs 15:1", text:"A soft answer turneth away wrath: but grievous words stir up anger." },
{ ref:"James 1:19-20", text:"Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath: For the wrath of man worketh not the righteousness of God." },
{ ref:"Proverbs 16:32", text:"He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city." },
{ ref:"Colossians 3:8", text:"But now ye also put off all these; anger, wrath, malice, blasphemy, filthy communication out of your mouth." },
{ ref:"Ecclesiastes 7:9", text:"Be not hasty in thy spirit to be angry: for anger resteth in the bosom of fools." }
],

Loneliness: [
{ ref:"Deuteronomy 31:6", text:"Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee." },
{ ref:"Hebrews 13:5", text:"Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee." },
{ ref:"Isaiah 41:10", text:"Fear thou not; for I am with thee: be not dismayed; for I am thy God." },
{ ref:"Matthew 28:20", text:"Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen." },
{ ref:"Psalm 23:4", text:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me." },
{ ref:"Psalm 68:6", text:"God setteth the solitary in families: he bringeth out those which are bound with chains: but the rebellious dwell in a dry land." }
],

Confusion: [
{ ref:"1 Corinthians 14:33", text:"For God is not the author of confusion, but of peace, as in all churches of the saints." },
{ ref:"James 1:5", text:"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him." },
{ ref:"Proverbs 3:5-6", text:"Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths." },
{ ref:"Psalm 32:8", text:"I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye." },
{ ref:"John 16:13", text:"Howbeit when he, the Spirit of truth, is come, he will guide you into all truth." },
{ ref:"Isaiah 30:21", text:"And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it." }
],

Joy: [
{ ref:"Psalm 16:11", text:"Thou wilt shew me the path of life: in thy presence is fullness of joy; at thy right hand there are pleasures for evermore." },
{ ref:"Nehemiah 8:10", text:"Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the Lord is your strength." },
{ ref:"Romans 15:13", text:"Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost." },
{ ref:"Psalm 118:24", text:"This is the day which the Lord hath made; we will rejoice and be glad in it." },
{ ref:"John 15:11", text:"These things have I spoken unto you, that my joy might remain in you, and that your joy might be full." },
{ ref:"Galatians 5:22", text:"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith." }
],

Gratitude: [
{ ref:"1 Thessalonians 5:18", text:"In every thing give thanks: for this is the will of God in Christ Jesus concerning you." },
{ ref:"Psalm 107:1", text:"O give thanks unto the Lord, for he is good: for his mercy endureth for ever." },
{ ref:"Colossians 3:15", text:"And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful." },
{ ref:"Psalm 100:4", text:"Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name." },
{ ref:"Ephesians 5:20", text:"Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ." },
{ ref:"Psalm 136:1", text:"O give thanks unto the Lord; for he is good: for his mercy endureth for ever." }
]

};

// =========================
// SCREEN NAVIGATION
// =========================

function showScreen(id) {
  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));

  document.querySelectorAll('.bottom-nav div')
  .forEach(btn => btn.classList.remove('active-nav'));

const activeButton =
  document.querySelector(
    `.bottom-nav div[onclick="showScreen('${id}')"]`
  );

if (activeButton) {
  activeButton.classList.add('active-nav');
}

setTimeout(() => {
  document.getElementById(id).classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}, 180);
  
  if(id === "saved") loadSaved();

  if(id === "devotionals") loadDevotionals();

  if(id === "readingPlans") loadReadingPlans();

  if(id === "journal") loadJournal();
}

updateContinueCard();
  
// =========================
// EMOTION VERSES
// =========================

  
function openEmotion(emotion) {
  showScreen('verses');

  document.getElementById("emotionTitle").innerText = emotion;
  const subtitle = document.getElementById("emotionSubtitle");

subtitle.innerText =
  "What the Bible says about " + emotion.toLowerCase();

const container = document.getElementById("verseList");
container.innerHTML = "";

const message = document.createElement("div");
message.className = "guidance-text";
message.innerText = guidance[emotion];

container.appendChild(message);
  const list = verses[emotion];

  if (!list) {
    container.innerHTML = "No verses found.";
    return;
  }

  for (let i = 0; i < list.length; i++) {
    const v = list[i];

    const card = document.createElement("div");
    card.className = "verse-card";

    const ref = document.createElement("div");
    ref.className = "verse-ref";
    ref.innerText = v.ref;

    const text = document.createElement("div");
    text.className = "verse-text";
    text.innerText = v.text;
    
    const btn = document.createElement("button");
btn.className = "save-btn";
btn.innerText = "Save";

let saved = JSON.parse(localStorage.getItem("saved")) || [];

if (saved.find(s => s.ref === v.ref && s.text === v.text)) {
  btn.innerText = "Saved ✓";
  btn.disabled = true;
}

btn.onclick = function () {
  saveVerse(v, btn);
};

    card.appendChild(ref);
    card.appendChild(text);
    card.appendChild(btn);

    container.appendChild(card);
}

const journalCard = document.createElement("div");

journalCard.className = "verse-card";

journalCard.innerHTML = `
  <small class="label-text">
    PRIVATE REFLECTION
  </small>

  <textarea
    id="journalEntry"
    placeholder="Write your thoughts, prayers, or reflections here..."
    style="
      width:100%;
      min-height:140px;
      margin-top:14px;
      padding:16px;
      border-radius:14px;
      border:1px solid #ddd;
      font-size:15px;
      line-height:1.7;
      resize:vertical;
      box-sizing:border-box;
    "></textarea>

  <button
    class="save-btn"
    onclick="saveJournalEntry()">

    Save Reflection

  </button>
`;

container.appendChild(journalCard);

const savedReflection =
  localStorage.getItem("journalEntry");

if (savedReflection) {

  document.getElementById(
    "journalEntry"
  ).value = savedReflection;

}

}
  
function saveVerse(v, button) {
  let saved = JSON.parse(localStorage.getItem("saved")) || [];

  if (!saved.find(s => s.ref === v.ref && s.text === v.text)) {
    saved.push(v);
    localStorage.setItem("saved", JSON.stringify(saved));
  }

  button.innerText = "Saved ✓";
  button.disabled = true;
}

// =========================
// SAVED VERSES
// =========================

function loadSaved() {

  const container =
    document.getElementById("savedList");

  container.innerHTML = "";

  let saved =
    JSON.parse(localStorage.getItem("saved")) || [];

  if (saved.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
  <i data-lucide="bookmark"></i>
</div>

        <h3>No Saved Verses Yet</h3>

        <p>
          Save meaningful verses during your journey
          and revisit them anytime.
        </p>
      </div>
    `;

lucide.createIcons();
    
    return;
  }

  saved.forEach((v, index) => {

    container.innerHTML += `
      <div class="verse-card fade-in">

        <div class="verse-ref">
          ${v.ref}
        </div>

        <div class="verse-text">
          ${v.text}
        </div>

        <button
          class="remove-btn"
          onclick="removeVerse(${index})">

          Remove

        </button>

      </div>
    `;

  });

}

function loadJournal() {

  const container =
    document.getElementById("journalList");

  container.innerHTML = "";

  const journals =
    JSON.parse(
      localStorage.getItem("journals")
    ) || [];

  if (journals.length === 0) {

    container.innerHTML = `
      <div class="empty-state">

        <div class="empty-icon">
  <i data-lucide="pen-line"></i>
</div>

        <h3>No Reflections Yet</h3>

        <p>
          Your saved reflections and prayers
          will appear here.
        </p>

</div>
`;

lucide.createIcons();
    
    return;
  }

  journals.forEach((journal, index) => {

    container.innerHTML += `
      <div class="verse-card">

        <small style="
  color:#c9a94d;
  font-weight:700;
  letter-spacing:1.4px;
  font-size:11px;
  text-transform:uppercase;
  display:block;
  margin-bottom:8px;
">
  ${journal.emotion || "Reflection"}
</small>

<small style="
  color:#999;
  display:block;
  margin-bottom:14px;
">
  ${journal.date}
</small>

        <p style="
          margin-top:14px;
          line-height:1.95;
          color:#444;
        ">
          ${journal.text}
        </p>

<button
  class="save-btn"
  onclick="editJournal(${index})">

  Edit

</button>

<button
  class="remove-btn"
  onclick="deleteJournal(${index})">

  Delete

</button>

</div>
`;

  });

}

function deleteJournal(index) {

  let journals =
    JSON.parse(
      localStorage.getItem("journals")
    ) || [];

  journals.splice(index, 1);

  localStorage.setItem(
    "journals",
    JSON.stringify(journals)
  );

  loadJournal();

}

function editJournal(index) {

  let journals =
    JSON.parse(
      localStorage.getItem("journals")
    ) || [];

  const journal = journals[index];

  showScreen('verses');

  setTimeout(() => {

    const textarea =
      document.getElementById("journalEntry");

    if (textarea) {
      textarea.value = journal.text;
    }

  }, 200);

}

  function removeVerse(index) {
  let saved =
    JSON.parse(localStorage.getItem("saved")) || [];

  saved.splice(index, 1);

  localStorage.setItem(
    "saved",
    JSON.stringify(saved)
  );

  loadSaved();
}

const dailyPrompts = [

  "How is your heart today?",

  "What are you carrying today?",

  "Take a breath. What do you feel right now?",

  "Pause for a moment—what’s on your mind?",

  "God cares about how you feel. What is it today?",

  "You do not have to carry everything alone.",

  "What burden can you release to God today?",

  "Be honest with yourself about what you need today.",

  "What emotion feels strongest right now?",

  "God is present even in difficult moments."

];
    
  const dailyVerses = [
"The Lord is my shepherd; I shall not want. — Psalm 23:1",
"Fear thou not; for I am with thee. — Isaiah 41:10",
"Come unto me, all ye that labour and are heavy laden. — Matthew 11:28",
"Be still, and know that I am God. — Psalm 46:10",
"I can do all things through Christ which strengtheneth me. — Philippians 4:13",
"Trust in the Lord with all thine heart. — Proverbs 3:5"
];

const completionMessages = [

  "✨ Beautiful work today. Every step toward peace matters.",

  "🙏 God sees your effort and your heart.",

  "🌿 You showed up today. That matters more than perfection.",

  "📖 One day at a time. One prayer at a time.",

  "💛 Keep going. God is walking with you.",

  "☀️ Small faithful steps create lasting peace.",

  "🕊️ Rest in the progress you made today."

];
  
const devotionals = [
  {
    verse: "Philippians 4:6-7",
    text: "Be careful for nothing; but in everything by prayer and supplication...",
    reflection: "Even when life feels uncertain, God calls us to trust Him and release our worries into His hands.",
    prayer: "Lord, help me trust You with what I cannot control. Give me peace in uncertainty.",
    question: "What worries do you need to surrender to God today?"
  },
  {
    verse: "Isaiah 41:10",
    text: "Fear not, for I am with you...",
    reflection: "Fear loses its power when we remember God is always with us.",
    prayer: "God, remind me that You are with me in every situation.",
    question: "Where do you need to rely on God instead of fear?"
  },
  {
    verse: "Matthew 11:28",
    text: "Come to me, all who are weary...",
    reflection: "Jesus invites us to find rest in Him when we are exhausted.",
    prayer: "Jesus, I bring my burdens to You. Give me rest.",
    question: "What burden are you carrying today?"
  }
];

const anxietyDevotionals = [
  {
    verse: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    reflection:
      "Anxiety often pulls your heart into the future. God gently calls you back to today and reminds you that His grace is already waiting for you there.",
    prayer:
      "Lord, calm my racing thoughts and help me trust You one moment at a time.",
    question:
      "What is one worry you can place into God's hands today?"
  },

  {
    verse: "Psalm 94:19",
    text: "When anxiety was great within me, your consolation brought me joy.",
    reflection:
      "God does not shame anxious hearts. He meets them with compassion, comfort, and steady peace.",
    prayer:
      "Father, remind me that I do not carry my burdens alone.",
    question:
      "Where do you most need God's comfort right now?"
  },

  {
    verse:
  "John 14:27 — Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
    text: "Peace I leave with you; my peace I give you...",
    reflection:
      "The peace Jesus offers is deeper than temporary calm. It is a steady presence that remains even in uncertainty.",
    prayer:
      "Jesus, fill my heart with Your peace today.",
    question:
      "What would change if you truly believed God was with you right now?"
  }
];
  
const plans = [
  {
    title: "Peace in the Storm",
    category: "Anxiety & Peace",
    accent: "#c9a94d",
    days: 30,
    description: "A 30-day journey to finding God's perfect peace when life feels overwhelming and chaotic.",
    content: anxietyDevotionals
  },
  {
    title: "Overcoming Anxiety",
    category: "Faith & Guidance",
    accent: "#7fa6d6",
    days: 21,
    description: "A 21-day exploration of faith and trust when the future is unclear.",
    content: anxietyDevotionals
  },
  {
    title: "Strength for Heavy Days",
    category: "Strength & Healing",
    accent: "#9bbf9b",
    days: 14,
    description: "A 14-day devotional focused on strength and endurance during difficult seasons.",
    content: devotionals
  }
];

const readingPlans = [

  {
    title: "Gospel of John",
    category: "New Testament",
    days: 7,
    description:
      "Walk through the life, teachings, and miracles of Jesus in the Gospel of John.",

    accent: "#c9a94d",

    content: [
      {
  title: "When You Feel Spiritually Tired",

  verse:
  "John 1:5 — The light shineth in darkness; and the darkness comprehended it not.",

  text:
    "Some kinds of exhaustion do not come from being busy. They come from carrying too much internally for too long — worry, disappointment, uncertainty, trying to stay steady when your heart feels worn thin.",

  reflection:
    "There are seasons where faith can feel quieter than usual. You still pray, still try to hold yourself together, yet part of you feels emotionally drained underneath it all. God is not absent from tired hearts.",

  prayer:
    "Lord, when my heart feels tired and heavy, help me remember that Your light is still near. Stay with me in the quiet places I cannot fully explain. Amen.",

  question:
    "What part of your life feels most in need of God’s light right now?"
},

{
  title: "Known Completely",

  verse: "John 4:29",

  text:
    "The woman at the well expected distance and judgment. Instead, she encountered someone who saw her fully and still spoke to her with dignity and care.",

  reflection:
    "There is relief in being able to stop hiding for a moment. Sometimes we become so used to protecting our pain that we forget God already sees it clearly.",

  prayer:
    "Father, thank You for knowing me completely and still drawing near to me with kindness. Help me rest in Your mercy instead of hiding in fear. Amen.",

  question:
    "What emotions or struggles have you been afraid to bring honestly before God?"
},

{
  title: "Peace for an Anxious Heart",

  verse: "John 14:27",

  text:
    "An anxious mind can make even ordinary moments feel heavy. Thoughts race ahead, the body stays tense, and rest becomes difficult to settle into.",

  reflection:
    "Sometimes peace does not arrive all at once. Sometimes it comes slowly — through breathing again, through quiet prayer, through remembering you were never carrying everything alone.",

  prayer:
    "Jesus, calm the places in me that feel restless and overwhelmed. Teach my heart to rest in the peace You give. Amen.",

  question:
  "What worries have been taking up the most space in your mind lately?"
},

{
  title: "Held Together by Grace",

  verse:
    "John 6:37 — Him that cometh to me I will in no wise cast out.",

  text:
    "Some people quietly carry the fear that they are too broken, too inconsistent, or too far away from God to truly belong near Him.",

  reflection:
    "Jesus did not build His ministry around perfect people. Again and again, He moved toward hurting, struggling, uncertain people with compassion instead of rejection.",

  prayer:
    "Jesus, thank You for never turning away those who come honestly to You. Help me rest in Your grace instead of believing I must earn Your love. Amen.",

  question:
  "What would change if you truly believed God was not pushing you away?"
},

{
  title: "Peace That Stays",

  verse:
    "John 14:27 — Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",

  text:
    "An anxious mind can make even ordinary moments feel heavy. Thoughts race ahead, the body stays tense, and rest becomes difficult to settle into.",

  reflection:
    "Jesus never promised a life without difficulty, but He did promise a peace deeper than circumstances. His peace is steady, not fragile. Quiet, not absent.",

  prayer:
    "Jesus, calm the places in me that feel restless and overwhelmed. Teach my heart to rest in the peace You give. Amen.",

  question:
    "What has been stealing your peace lately?"
},

{
  title: "Known Completely",

  verse:
    "John 10:14 — I am the good shepherd, and know my sheep, and am known of mine.",

  text:
    "One of the loneliest feelings in life is believing nobody truly understands what is happening inside you.",

  reflection:
    "Jesus never loved people from a distance. He noticed hidden pain, quiet fears, and unspoken burdens. Nothing about your inner world is invisible to Him.",

  prayer:
    "Lord, thank You for knowing me fully without turning away from me. Help me trust that I do not have to hide my struggles from You. Amen.",

  question:
    "What part of yourself do you struggle to believe God fully understands?"
},

{
  title: "Never Alone",

  verse:
    "John 16:33 — In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",

  text:
    "Some seasons of life feel heavier than expected. Even surrounded by people, loneliness and discouragement can quietly settle into the heart.",

  reflection:
    "Jesus never ignored the reality of hardship. He acknowledged pain honestly while still offering hope stronger than fear. His presence remains steady even in difficult seasons.",

  prayer:
    "Jesus, remind me that I do not walk through hard seasons alone. Help me hold onto Your peace and strength when life feels overwhelming. Amen.",

  question:
    "Where in your life do you most need to remember that God is still with you?"
},
      
]
},

{
  title: "Psalms for Peace",
    category: "Wisdom & Comfort",
    days: 14,
    description:
      "Find peace, rest, and encouragement through selected Psalms.",

    accent: "#d6b866",

    content: [
  {
    title: "Rest for the Weary",

    verse: "Psalm 46:1",

    text:
      "God is our refuge and strength, a very present help in trouble.",

    reflection:
      "Peace does not always mean life becomes quiet. Sometimes peace is simply knowing you do not carry your burdens alone.",

    prayer:
      "Lord, remind me that I can rest safely in Your presence today.",

    question:
      "What burden do you need to release to God today?"
  }
]
  },

  {
    title: "Proverbs Wisdom Journey",
    category: "Wisdom",
    days: 30,
    description:
      "Grow in wisdom and daily decision-making through Proverbs.",

    accent: "#b8943f",

    content: [
  {
    title: "Trust in Wisdom",

    verse: "Proverbs 3:5-6",

    text:
      "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",

    reflection:
      "Sometimes clarity comes slowly. God often guides us one faithful step at a time instead of revealing the entire path at once.",

    prayer:
      "Lord, give me wisdom and peace in the decisions before me.",

    question:
      "Where do you need God’s guidance most right now?"
  }
]
  }

];
  
function loadDailyVerse() {
  console.log("running daily");

  const index = new Date().getDate() % dailyVerses.length;

  // Set verse + devotional
  document.getElementById("dailyVerseText").innerText = dailyVerses[index];

  const devotionalIndex = index % devotionals.length;

  document.getElementById("dailyDevotional").innerText =
    devotionals[devotionalIndex].reflection;

  // Prompt
  const promptIndex = index % dailyPrompts.length;
  const subtext = document.querySelector(".checkin-subtext");

  if (subtext) {
    subtext.innerText = dailyPrompts[promptIndex];
  }

  // Save button state
  const saved = JSON.parse(localStorage.getItem("saved")) || [];
  const button = document.getElementById("dailySaveBtn");

  if (saved.find(v => v.text === dailyVerses[index])) {
    button.innerText = "Saved ✓";
    button.disabled = true;
  } else {
    button.innerText = "Save";
    button.disabled = false;
  }

  // Restore selected emotion
  const savedEmotion = localStorage.getItem("selectedEmotion");

  if (savedEmotion) {
    document.querySelectorAll('.card').forEach(card => {
      if (card.innerText.includes(savedEmotion)) {
        card.classList.add('active');
      }
    });
  }

}
  
  // ✅ Check-in + history (ALL IN ONE PLACE)
  const today = new Date().toDateString();
  let checkins = JSON.parse(localStorage.getItem("checkins")) || [];

  const todayEntry = checkins.find(c => c.date === today);
  const checkinText = document.getElementById("todayCheckin");

  if (checkinText) {
    if (todayEntry) {
      checkinText.innerText = "You checked in today: " + todayEntry.emotion;
    } else {
      checkinText.innerText = "";
    }
}
        
function selectEmotion(emotion, event) {

  if (event) {
    event.stopPropagation();
  }

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  const today = new Date().toDateString();

  let checkins =
    JSON.parse(localStorage.getItem("checkins")) || [];

  checkins = checkins.filter(c => c.date !== today);

  checkins.push({
    date: today,
    emotion: emotion
  });

  localStorage.setItem(
    "checkins",
    JSON.stringify(checkins)
  );

 localStorage.setItem(
  "selectedEmotion",
  emotion
);

openEmotion(emotion);

}

function saveJournalEntry() {

  const entry =
    document.getElementById("journalEntry").value;

  const journals =
    JSON.parse(
      localStorage.getItem("journals")
    ) || [];

  journals.unshift({
  text: entry,
  emotion: document.getElementById("emotionTitle").innerText,
  date: new Date().toLocaleDateString()
});

  localStorage.setItem(
    "journals",
    JSON.stringify(journals)
  );

  showCompletionMessage(
    "Reflection saved privately ✨"
  );

}

loadDailyVerse();

function openPlan(index) {
  const plan = plans[index];

  localStorage.setItem("activePlan", index);
  localStorage.setItem("currentDay", 0);

  showPlanScreen(plan);
  
}

function startReadingPlan(index) {

  const plan = readingPlans[index];

  localStorage.setItem(
    "activeReadingPlan",
    index
  );

  const savedDayKey =
    "readingDay-" + plan.title;

  let savedDay =
    parseInt(
      localStorage.getItem(savedDayKey)
    ) || 0;

  if (savedDay >= plan.days) {

    localStorage.setItem(
      savedDayKey,
      0
    );

  }

  showReadingPlanScreen(plan);

}

function showReadingPlanScreen(plan) {

  showScreen("plans");

  const container =
    document.getElementById("plans");

  const savedDayKey =
    "readingDay-" + plan.title;

  const currentDay =
    parseInt(
      localStorage.getItem(savedDayKey)
    ) || 0;

  const dayContent =
  plan.content[currentDay];

container.innerHTML = `

  <button class="back-btn app-btn"
    onclick="backToReadingPlans()">

      ← Back to Reading Plans

    </button>

    <div class="plan-header">

      <h2>${plan.title}</h2>

      <p>Day ${currentDay + 1} of ${plan.days}</p>

    </div>

    <div class="verse-block">

      <div class="verse-ref">
        📖 ${dayContent.verse}
      </div>

      <div class="verse-text">
        ${dayContent.text}
      </div>

    </div>

    <div class="reflection-block">

  <h4>REFLECTION</h4>

  <p>${dayContent.reflection}</p>

</div>

<div class="prayer-block">

  <h4>PRAYER</h4>

  <p>${dayContent.prayer}</p>

</div>

<div class="question-block">

  <h4>REFLECTION QUESTION</h4>

  <p>${dayContent.question}</p>

</div>

<div class="plan-actions">

      <button
        class="nav-btn"
        onclick="previousReadingDay()">

        ← Previous

      </button>

      <button
        class="nav-btn primary-btn"
        onclick="nextReadingDay()">

        ${currentDay === plan.content.length - 1

        ? "Complete Journey ✨"

        : "Continue to Day " + (currentDay + 2) + " →"
  }

</button>

    </div>

  `;
}



function nextReadingDay() {

  const activeIndex =
    localStorage.getItem("activeReadingPlan");

  const activePlan =
    readingPlans[activeIndex];

  const savedDayKey =
    "readingDay-" + activePlan.title;

  let currentDay =
    parseInt(
      localStorage.getItem(savedDayKey)
    ) || 0;

  if (currentDay < activePlan.content.length - 1) {

  currentDay++;

  localStorage.setItem(
    savedDayKey,
    currentDay
  );

  showReadingPlanScreen(activePlan);

} else {

  localStorage.setItem(
    savedDayKey,
    activePlan.content.length
  );

  showCompletionPopup(activePlan.title);

  loadReadingPlans();

  updateContinueCard();

}

}

function previousReadingDay() {

  const activeIndex =
    localStorage.getItem("activeReadingPlan");

  const activePlan =
    readingPlans[activeIndex];

  const savedDayKey =
    "readingDay-" + activePlan.title;

  let currentDay =
    parseInt(
      localStorage.getItem(savedDayKey)
    ) || 0;

  if (currentDay > 0) {

    currentDay--;

    localStorage.setItem(
      savedDayKey,
      currentDay
    );

    showReadingPlanScreen(activePlan);

  }

}
  
function backToReadingPlans() {

  const screen =
    document.getElementById("plans");

  screen.innerHTML = `

    <div id="readingPlansList"></div>

  `;

  showScreen("plans");

  loadReadingPlans();

}
  
function openDevotional(index) {

  const plan = plans[index];

  localStorage.setItem("activePlan", index);

  localStorage.setItem("currentDay", 0);

  showDevotionalScreen(plan);

}

function showPlanScreen(plan) {

  const container =
    document.getElementById("devotionals");
  
  localStorage.setItem("activePlanTitle", plan.title);
  
  const savedDayKey =
"readingDay-" + plan.title;

const currentDay =
parseInt(localStorage.getItem(savedDayKey)) || 0;

  const dayContent = plan.content[currentDay];

  const completedPlans =
    JSON.parse(localStorage.getItem("completedPlans")) || [];

  const completedCount = completedPlans.filter(item =>
    item.startsWith(plan.title)
  ).length;

  container.innerHTML = `

    <button class="back-btn app-btn" onclick="backToDevotionals()">
      ← Back to Devotionals
    </button>
  
  <div class="plan-header">
    <h2>${plan.title}</h2>
    <p>Day ${currentDay + 1} of ${plan.days}</p>
<div class="streak-text" id="streakDisplay">
 
  <i data-lucide="flame"></i>
${localStorage.getItem("streak") || 0} Day Streak 
</div>

<div class="completion-text" id="completionDisplay">
  ${completedCount} of ${plan.days} Days Completed
</div>

    <div class="progress-bar">
      <div class="progress-fill" style="width: ${((currentDay + 1) / plan.days) * 100}%"></div>
    </div>
  </div>

  <div class="plan-title-main">
    When Storms Arrive
  </div>

  <div class="verse-block">
    <div class="verse-ref">📖 ${dayContent.verse}</div>
    <div class="verse-text">${dayContent.text}</div>
  </div>

  <div class="reflection-block">
  <h4>REFLECTION</h4>
  <p>${dayContent.reflection}</p>
</div>

  <div class="prayer-block">
    <h4>PRAYER</h4>
    <p>${dayContent.prayer}</p>
  </div>

  <div class="question-block">
    <h4>REFLECTION QUESTION</h4>
    <p>${dayContent.question}</p>

  </div>

  <div class="plan-actions">
    <button class="nav-btn app-btn" onclick="previousDay()">← Previous</button>
    <button class="nav-btn primary-btn app-btn" onclick="nextDay()">Next →</button>
  </div>

<button id="completeBtn" class="complete-btn app-btn" onclick="completeDay()">
  Mark Day as Complete
</button>
  `;

  
  // restore saved state
  const activePlanIndex = localStorage.getItem("activePlan");
  const savedDay = parseInt(localStorage.getItem("currentDay")) || 0;

  const planKey = plans[activePlanIndex].title + "-day-" + savedDay;
  const saved = JSON.parse(localStorage.getItem("savedPlans")) || [];

// Restore completed state
const completeKey = plan.title + "-day-" + currentDay;

const completeBtn = document.getElementById("completeBtn");

if (completeBtn && completedPlans.includes(completeKey)) {
  completeBtn.innerText = "Completed ✓";
  completeBtn.disabled = true;
}
}

function showDevotionalScreen(plan) {

  showScreen("devotionals");

  showPlanScreen(plan);

}

function backToDevotionals() {

  localStorage.setItem("returnScreen", "devotionals");

  location.reload();

}
  
// =========================
// DEVOTIONAL PLANS
// =========================

function loadDevotionals() {
  const container = document.getElementById("devotionalList");
  container.innerHTML = "";

const activePlanTitle = localStorage.getItem("activePlanTitle");

if (activePlanTitle) {
  const activePlan = plans.find(
    p => p.title === activePlanTitle
  );

  if (activePlan) {
    const currentDay =
      parseInt(localStorage.getItem("currentDay")) || 0;

    const continueCard = document.createElement("div");

    continueCard.className = "continue-card";

    continueCard.innerHTML = `
      <div class="continue-label">Continue Reading</div>
      <div class="continue-title">${activePlan.title}</div>

      <div class="continue-day">
        Day ${currentDay + 1} of ${activePlan.days}
      </div>
    `;

    continueCard.onclick = function () {
      showPlanScreen(activePlan);
    };

    continueCard.style.width = "calc(100% - 40px)";

    continueCard.style.maxWidth = "900px";
    continueCard.style.margin = "0 auto 30px auto";
    
    container.appendChild(continueCard);
  }
}
  
  plans.forEach((plan, index) => {
    const card = document.createElement("div");
    card.className = "plan-card-item screen-section";

    card.innerHTML = `
      <div class="plan-top">
        <span class="plan-category">${plan.category}</span>
        <span class="plan-days">${plan.days} Days</span>
      </div>

      <h3 class="plan-title">${plan.title}</h3>
      
      <div
       class="plan-accent"
       style="background:${plan.accent}"
     ></div>

      <p class="plan-desc">${plan.description}</p>

      <button class="start-btn app-button" onclick="openDevotional(${index})">
        Start Journey →
      </button>
    `;

    container.appendChild(card);
  });
}

function loadReadingPlans() {

  const container =
    document.getElementById("readingPlansList");

  if (!container) return;

  container.innerHTML = "";

  readingPlans.forEach((plan, index) => {

    const card =
      document.createElement("div");

    card.className = "plan-card-item";

    const savedDayKey =
  "readingDay-" + plan.title;

const savedDay =
  parseInt(
    localStorage.getItem(savedDayKey)
  ) || 0;

const progressPercent =
  Math.floor(
    (savedDay / plan.days) * 100
  );
    
    card.innerHTML = `

      <div class="plan-top">
        <span class="plan-category">
          ${plan.category}
        </span>

        <span class="plan-days">
          ${plan.days} Days
        </span>
      </div>

      <h3 class="plan-title">
        ${plan.title}
      </h3>

      <div
        class="plan-accent"
        style="background:${plan.accent}">
      </div>

      <p class="plan-desc">
        ${plan.description}
      </p>

      <div class="plan-progress">
  ${
    savedDay >= plan.days
      ? "✨ Journey Complete"
      : `Day ${savedDay} of ${plan.days}`
  }
</div>

      <div class="plan-progress-bar">
       <div
         class="plan-progress-fill"
         style="width:${progressPercent}%">
      </div>
    </div>

    <button class="start-btn app-btn"
      onclick="startReadingPlan(${index})">

  ${
    savedDay >= plan.days
      ? "Restart Journey →"
      : "Continue Journey →"
  }

</button>

    `;

    container.appendChild(card);

  });

}

function toggleDarkMode() {

  document.body.classList.toggle(
    "dark-mode"
  );

  const isDarkMode =
    document.body.classList.contains(
      "dark-mode"
    );

  localStorage.setItem(
    "darkMode",
    isDarkMode
  );

}

function updateDailyStreak() {

  const today =
    new Date().toDateString();

  const lastVisit =
    localStorage.getItem("lastVisitDate");

  let streak =
    parseInt(
      localStorage.getItem("dailyStreak")
    ) || 0;

  if (!lastVisit) {

    streak = 1;

  } else {

    const previousDate =
      new Date(lastVisit);

    const currentDate =
      new Date(today);

    const difference =
      Math.floor(
        (currentDate - previousDate)
        / (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {

      streak++;

    } else if (difference > 1) {

      streak = 1;

    }

  }

  localStorage.setItem(
    "dailyStreak",
    streak
  );

  localStorage.setItem(
    "lastVisitDate",
    today
  );

  document.getElementById(
    "streakCount"
  ).innerText =
    `🔥 ${streak} ${streak === 1 ? "Day" : "Days"} Streak`;

}
  
function updateContinueCard() {

  const activePlanIndex =
  localStorage.getItem(
    "activeReadingPlan"
  );

const card =
  document.getElementById(
    "continueJourneyCard"
  );

if (activePlanIndex === null) {

  card.classList.add("hidden");

  return;
}

const plan =
  readingPlans[activePlanIndex];

const savedDayKey =
  "readingDay-" + plan.title;

const currentDay =
  parseInt(
    localStorage.getItem(savedDayKey)
  ) || 0;

card.classList.remove("hidden");

card.classList.add("resume-glow");  

document.getElementById(
  "continuePlanTitle"
).innerText = plan.title;

document.getElementById(
  "continuePlanDay"
).innerText =
  `Continue your journey • Day ${currentDay + 1} of ${plan.days}`;
}

function resumePlan() {

  const activePlanIndex =
    localStorage.getItem(
      "activeReadingPlan"
    );

  if (activePlanIndex === null) return;

  const plan =
    readingPlans[activePlanIndex];

  showReadingPlanScreen(plan);

}
  
function nextDay() {
  let currentDay = parseInt(localStorage.getItem("currentDay")) || 0;
  const activePlanIndex = localStorage.getItem("activePlan");

  if (activePlanIndex === null) return;

  const plan = plans[activePlanIndex];

  if (currentDay < plan.content.length - 1) {
    currentDay++;
    const savedDayKey =
"readingDay-" + activePlan.title;

localStorage.setItem(
savedDayKey,
currentDay
);
    showPlanScreen(plan);
  }
}

function previousDay() {
  let currentDay = parseInt(localStorage.getItem("currentDay")) || 0;
  const activePlanIndex = localStorage.getItem("activePlan");

  if (activePlanIndex === null) return;

  const plan = plans[activePlanIndex];

  if (currentDay > 0) {
    currentDay--;
    localStorage.setItem("currentDay", currentDay);
    showPlanScreen(plan);
  }
}

function savePlanDay() {
  const activePlanIndex = localStorage.getItem("activePlan");
  const currentDay = parseInt(localStorage.getItem("currentDay")) || 0;

  if (activePlanIndex === null) return;

  const plan = plans[activePlanIndex];

  let saved = JSON.parse(localStorage.getItem("savedPlans")) || [];

  const key = plan.title + "-day-" + currentDay;

  if (!saved.includes(key)) {
    saved.push(key);
    localStorage.setItem("savedPlans", JSON.stringify(saved));
  }

  const btn = document.getElementById("planSaveBtn");
  if (btn) {
    btn.innerText = "Saved ✓";
    btn.disabled = true;
  }
}
  
  function saveDailyVerse() {
  const index = new Date().getDate() % dailyVerses.length;

  const verse = {
    ref: "Daily Verse",
    text: dailyVerses[index]
  };

  let saved = JSON.parse(localStorage.getItem("saved")) || [];

  const button = document.getElementById("dailySaveBtn");

  if (!saved.find(v => v.text === verse.text)) {
    saved.push(verse);
    localStorage.setItem("saved", JSON.stringify(saved));

    button.innerText = "Saved ✓";
    button.disabled = true;

  } else {
    button.innerText = "Saved ✓";
    button.disabled = true;
  }
}

// =========================
// STREAKS & COMPLETION
// =========================

function completeDay() {
  const activePlanIndex = localStorage.getItem("activePlan");
  const currentDay = parseInt(localStorage.getItem("currentDay")) || 0;

  if (activePlanIndex === null) return;

  const plan = plans[activePlanIndex];

  let completed = JSON.parse(localStorage.getItem("completedPlans")) || [];

  const key = plan.title + "-day-" + currentDay;

  if (!completed.includes(key)) {
    completed.push(key);
    localStorage.setItem("completedPlans", JSON.stringify(completed));
  }

// STREAK SYSTEM
const today = new Date().toDateString();

const lastCompleted = localStorage.getItem("lastCompletedDate");
let streak = parseInt(localStorage.getItem("streak")) || 0;

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

if (lastCompleted === yesterday.toDateString()) {
  streak++;
} else if (lastCompleted !== today) {
  streak = 1;
}

localStorage.setItem("streak", streak);
localStorage.setItem("lastCompletedDate", today);
  
  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.innerText = "Completed ✓";
    
const randomMessage =
  completionMessages[
    Math.floor(
      Math.random() *
      completionMessages.length
    )
  ];

showCompletionMessage(randomMessage);

  btn.disabled = true;  
}

}
  
function showCompletionMessage(message) {

  const popup =
    document.getElementById("completionPopup");

  const text =
    document.getElementById("completionText");

  text.innerText = message;

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2600);

}

loadDailyVerse();

const returnScreen =
  localStorage.getItem("returnScreen");

if (returnScreen) {

  showScreen(returnScreen);

  localStorage.removeItem("returnScreen");

}

loadDevotionals();  
    
loadReadingPlans();

if (
  localStorage.getItem("darkMode")
  === "true"
) {

  document.body.classList.add(
    "dark-mode"
  );

}  

updateDailyStreak();  

lucide.createIcons();

window.addEventListener("load", () => {

  const splash = document.getElementById("splash-screen");

if (!splash) return;

if (sessionStorage.getItem("splashShown")) {
  splash.style.display = "none";
  return;
}

setTimeout(() => {

  splash.classList.add("hide");

  setTimeout(() => {

    splash.remove();

    sessionStorage.setItem("splashShown", "true");

  }, 800);

}, 2000);

});

function showCompletionPopup(planTitle) {

  const popup =
    document.getElementById("completionPopup");

  const text =
    document.getElementById("completionText");

  text.innerHTML =
    `✨ You completed <strong>${planTitle}</strong>. Take a moment to reflect on how far you’ve come.`;

  popup.classList.add("show");

}

function closeCompletionPopup() {

  const popup =
    document.getElementById("completionPopup");

  popup.classList.remove("show");

  showScreen("readingPlans");

}
