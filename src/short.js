/* ===== Short answers: how a seasoned family astrologer replies in chat =====
   Line 1 answers exactly what was asked (yes / not yet / when / which days), using the first name.
   Then the main reason in plain words, one clear time, one or two practical steps, at most one simple remedy,
   and a warm close. The technical basis (dasha levels, transits, windows, panchang) goes into a collapsed
   "Astrology details" block under the answer.
   Each language has its own phrasing (written for that language, not translated word for word): English, Hinglish and
   Hindi are here; the other 12 are in lang/<code>.json under "s" (source: lang_short.py). */

const SHORT = {
  en: {
    needRel: "This question is about someone else, and their own birth chart decides it, not yours. Please add their name, date, time and place of birth below, and I will answer from their chart only.",
    noSex: "I never predict a baby's sex or help choose it; every child is a blessing.",
    wellRemedy: "For wellbeing: ten quiet minutes each morning, simple home food, and regular check-ups with your doctor.",
    yearNote: "{year} has a strong period for it.",
    sexDecline: "{name}, I don't predict whether a baby will be a boy or a girl. A chart can't decide that, and in India it isn't allowed. Every child is a blessing. What I can do is look at good times for having a child, and for the health of the mother and baby your doctor is the right guide. Just ask me about the timing for children.",
    notThisYear: "Not this year, {name}.",
    notNextYear: "Not next year, {name}.",
    notInYear: "Not in {year}, {name}.",
    notNowX: "Not right now, {name}.",
    bestWin: "The next strong window is {win}.",
    noWinShort: "No strongly linked period shows in the next few years, so steady effort decides it.",
    diag: "{name}, a chart can't say whether you have an illness; only a doctor can, with proper tests. Please see a doctor soon, and if you like I can tell you good days to begin treatment.",
    notYear: "Not this year, {name}. The best window is {win}.",
    notNow: "Not right now, {name}. The better time is {win}.",
    ynHealth: ["Likely to be fine, {name}: your chart supports good health, and with the right care any trouble is likely to ease.", "It's possible there will be ups and downs, {name}; recovery may take longer than you'd like, but with proper care the chart supports gradual improvement."],
    ynLegal: ["Likely, {name}: the chart shows a fair chance, but the result will depend on the facts and on your lawyer's work.", "It's possible, {name}, but this may take time; the chart asks for patience, a strong case file and good legal advice."],
    askTopic: "{name}, tell me a little more: is this about work, marriage, money, health, studies, travel or property? Then I can give you a clear yes or no.",
    marriedWhen: "{name}, you're already married to {spouse}. Would you like a reading on your married life, or on {spouse}'s chart?",
    marriedTip: "Plan regular time together and talk openly about money and family plans.",
    relTipPre: "Tell {n}: ",
    later: "This may take time; patience will help.",
    comma: ",",
    relSub: [["your ", "{n}'s "], ["Your ", "{n}'s "], [" for you", " for {n}"], [" you ", " {n} "]],
    persona: { m: "Aditya", f: "Meera", style: "warm, calm, plain-spoken family astrologer from Delhi, 25+ years of practice" },
    yn: ["Yes, {name}, this looks very likely.", "Yes, {name}, this looks likely.", "It's possible, {name}, but it will take focused effort.", "Not right now, {name}. The chart doesn't support it strongly at the moment."],
    ynWin: "The strongest time for it is {win}.", laterWin: "The stronger time comes a little later, {win}.", closeF: "Anything else you'd like to know?", dayGeneral: "most things", dayGeneralFor: "most things", untilWin: "from now until {d}",
    when: "{name}, the best time for {topic} is {win}.", whenSoon: "You may see first movement around {soon}.",
    noWin: "{name}, I don't see a strong window for {topic} in the next few years, so steady effort will decide it.",
    lockWin: "Your chart does show a clear window; the exact months open with a plan.",
    day: ["{name}, {date} looks very good for {topic}.", "{name}, {date} looks good for {topic}.", "{name}, {date} is a mixed day for {topic}: fine for routine work, not for big risks.", "{name}, keep {date} light for {topic}; avoid big decisions that day."],
    rangeBest: "{name}, your best days for {topic} {span} are {days}.", rangeFlat: "{name}, {span} is an average time for {topic}; no day stands out.",
    span: "between {d1} and {d2}", avoid: "Go easy on {days}.",
    dayTime: "Best time: {t1} to {t2}. Avoid {r1} to {r2}, the Rahu kaal slot.",
    rGood: "The planet that rules {topic} in your chart is strong, so the promise is real.",
    rMid: "The planet that rules {topic} in your chart is fairly placed, so your effort decides the result.",
    rBad: "The planet that rules {topic} in your chart is under some pressure, so expect delays before success.",
    rRun: "Your current planetary period supports this, so things can move.", rRunNo: "Your current planetary period is focused elsewhere, so this needs patience.",
    rJup: "Jupiter, the planet of growth, is also moving in your favour.", rJupNo: "Jupiter, the planet of growth, isn't backing you strongly just now.",
    dStar: ["That day the Moon sits in a friendly star for you, which helps confidence and luck.", "That day the Moon is neutral for you.", "That day the Moon sits in a difficult star for you, so energy and luck are lower."],
    dMoon: ["The Moon is well placed from your birth sign.", "", "The Moon is also in a sensitive spot from your birth sign, so stay calm."],
    remedy: "A simple remedy: chant {mantra} on {day}, or help someone in need.", remedyLocal: { Jupiter: "A simple remedy: on Thursday, offer yellow sweets or chana dal at a temple, or simply help a teacher or elder.", Saturn: "A simple remedy: on Saturday, light a sesame-oil lamp or help a worker or an elderly person.", Rahu: "A simple remedy: spend ten quiet minutes in meditation each morning and keep your word on small promises." },
    close: "Ask me why, or which day suits you best.", closeDay: "Tell me what you're planning that day and I'll pick the best hour.",
    cHealth: "Please follow your doctor's advice; astrology can only support it.", cLegal: "Keep your lawyer's advice at the centre and use these dates to time your steps.", cMoney: "Check big financial moves with a qualified adviser.",
    gender: "{name}, I don't predict a baby's gender. It isn't something a chart should decide, and in India it isn't allowed. What I can tell you is the best time for children:",
    lucky: "{name}, your luckiest weekday is {day}, the day of {pl}, the strongest planet in your chart. Start important work on it when you can.",
    sat: ["{name}, yes. You're in Sade Sati, Saturn's seven-and-a-half-year phase of tests, until about {date}. It asks for patience and discipline, not fear.", "{name}, Saturn is passing a sensitive point for you until about {date}, so go slow with risks and look after your health.", "{name}, no. Saturn is actually helping you now: steady effort will pay off.", "{name}, no, Saturn isn't troubling you right now."],
    gen: "{name}, you're in a long phase ruled by {md} until {y1}. It brings {theme1}, and until {d2} the focus is especially on {theme2}.",
    why: "{name}, here's the reasoning:", whyDasha: "Your main planetary period is {md} (till {y1}), with a sub-period of {ad} till {d2}.",
    remF: "{name}, the remedy for this:", forRel: "For {name}:", details: "Astrology details",
    themes: { 1: "self-confidence and fresh starts", 2: "family and savings", 3: "courage and short travel", 4: "home and peace of mind", 5: "children, studies and creativity", 6: "work, routine and health", 7: "marriage and partnerships", 8: "change and hidden matters", 9: "luck, elders and faith", 10: "career and status", 11: "gains and friends", 12: "expenses, rest and spirituality" },
    topics: { admission: "admission", career: "career", marriage: "marriage", money: "money", health: "health", education: "studies", children: "children", travel: "going abroad", property: "property", general: "this", legal: "your legal matter", business: "business" }, tips: { legal: "Keep your papers in order and settle out of court if a fair offer comes.", business: "Start small, keep a clear written agreement with partners and watch cash flow every month." },
    ampm: ["AM", "PM"], stop: ".",
    how: ["{name}, things look good for {topic} in this period.", "{name}, {topic} looks steady: nothing to worry about, just keep a good routine.", "{name}, {topic} needs a little extra care in this period, nothing to fear."], howWin: "The best phase comes {win}.",
  },
  hinglish: {
    needRel: "Ye sawaal kisi aur ke baare mein hai, aur iska jawab unki apni kundli se aayega, aapki se nahi. Neeche unka naam, janam ki date, time aur jagah bhar dijiye, main sirf unki kundli se jawab {m:dunga|f:dungi}.",
    noSex: "Bachche ka gender main kabhi nahi {m:batata|f:batati}, na use chunne mein madad {m:karta|f:karti} hoon; har bachcha aashirwaad hai.",
    wellRemedy: "Achhi sehat ke liye: roz subah das minute shaant baithiye, ghar ka saada khana lijiye aur doctor se niyamit check-up karwaiye.",
    yearNote: "{year} mein iske liye strong samay hai.",
    sexDecline: "{name} ji, baby ladka hoga ya ladki, ye main nahi {m:batata|f:batati}. Kundli se ye tay nahi hota aur India mein iski ijaazat bhi nahi hai. Har bachcha ek aashirwaad hai. Haan, santan ke liye achha samay zaroor dekh {m:sakta|f:sakti} hoon, aur maa aur bachche ki sehat ke liye doctor ki salah sabse sahi hai. Santan ke samay ke baare mein poochiye.",
    notThisYear: "Is saal nahi {name} ji.",
    notNextYear: "Agle saal nahi {name} ji.",
    notInYear: "{year} mein nahi {name} ji.",
    notNowX: "Abhi nahi {name} ji.",
    bestWin: "Agla strong time {win} hai.",
    noWinShort: "Agle kuch saalon mein koi strong judi dasha nahi dikhti, isliye lagatar mehnat hi kaam aayegi.",
    diag: "{name} ji, kundli se ye nahi bataya ja sakta ki koi bimari hai ya nahi; ye sirf doctor jaanch karke bata sakte hain. Jaldi doctor ko dikhaiye, chahein to main ilaaj shuru karne ke achhe din bata {m:dunga|f:dungi}.",
    notYear: "Is saal nahi {name} ji. Sabse achha time {win} hai.",
    notNow: "Abhi nahi {name} ji. Behtar time {win} hai.",
    ynHealth: ["{name} ji, health theek rehne ki achhi sambhavna hai; koi takleef ho to sahi ilaaj se sudhaar hoga.", "Sudhaar hoga {name} ji, par thoda time lag sakta hai; sahi care rakhiye."],
    ynLegal: ["Chances achhe hain {name} ji, par faisla facts aur aapke vakeel ki mehnat par depend karega.", "Ho sakta hai {name} ji, par isme time lagega; sabr rakhiye, papers majboot rakhiye aur achhe vakeel ki salah lijiye."],
    askTopic: "{name} ji, thoda batayiye: ye naukri, shaadi, paise, health, padhai, videsh ya property mein se kis baare mein hai? Phir main saaf haan ya na bata {m:paunga|f:paungi}.",
    marriedWhen: "{name} ji, aapki shaadi to {spouse} ji se ho chuki hai. Married life ke baare mein dekhun, ya {spouse} ji ki kundli?",
    marriedTip: "Saath mein waqt nikaliye aur paise aur family plans par khul ke baat kijiye.",
    relTipPre: "{n} se kahiye: ",
    later: "Isme thoda time lag sakta hai, sabr rakhiye.",
    comma: ",",
    relSub: [["Aapki ", "{n} ki "], ["aapki ", "{n} ki "], ["Aapke ", "{n} ke "], ["aapke ", "{n} ke "], ["aapka ", "{n} ka "]],
    persona: { m: "Aditya", f: "Meera", style: "friendly Delhi astrologer who chats in Hinglish like on WhatsApp" },
    yn: ["Haan {name} ji, iske chances bahut strong hain.", "Haan {name} ji, ye hone ke achhe chances hain.", "Ho sakta hai {name} ji, par thodi focused mehnat lagegi.", "Abhi nahi {name} ji, abhi chart iska strong support nahi kar raha."],
    ynWin: "Iske liye sabse strong time {win} hai.", laterWin: "Zyada strong time thoda baad mein aata hai, {win}.", closeF: "Aur kuch poochna ho to bataiye.", dayGeneral: "zyadatar kaam", dayGeneralFor: "zyadatar kaam", untilWin: "abhi se {d} tak",
    when: "{name} ji, {topic} ke liye sabse achha time {win} hai.", whenSoon: "Shuruaati movement {soon} ke aas-paas dikh sakti hai.",
    noWin: "{name} ji, agle kuch saal {topic} ke liye koi strong time nahi dikh raha, isliye mehnat hi decide karegi.",
    lockWin: "Chart mein clear time dikh raha hai; exact mahine plan lene par khulenge.",
    day: ["{name} ji, {date} {topic} ke liye bahut badhiya din hai.", "{name} ji, {date} {topic} ke liye achha din hai.", "{name} ji, {date} {topic} ke liye mila-jula din hai: routine kaam theek, bada risk nahi.", "{name} ji, {date} ko {topic} mein halka rakhiye, bada decision mat lijiye."],
    rangeBest: "{name} ji, {span} {topic} ke liye best din {days} hain.", rangeFlat: "{name} ji, {span} {topic} ke liye normal time hai, koi din khaas alag nahi.",
    span: "{d1} se {d2} ke beech", avoid: "{days} ko thoda sambhal ke.",
    dayTime: "Best time: {t1} se {t2}. Rahu kaal {r1} se {r2} tak hai, usme naya kaam shuru mat kijiye.",
    rGood: "Aapki kundli mein {topic} ka swami grah strong hai, isliye yog pakka hai.",
    rMid: "Aapki kundli mein {topic} ka swami grah theek-thaak jagah par hai, isliye result aapki mehnat par depend karega.",
    rBad: "Aapki kundli mein {topic} ka swami grah thoda dabaav mein hai, isliye thodi der ho sakti hai.",
    rRun: "Abhi jo dasha chal rahi hai wo iska saath de rahi hai, isliye cheezein aage badh sakti hain.", rRunNo: "Abhi ki dasha ka focus kahin aur hai, isliye thoda sabr rakhiye.",
    rJup: "Guru, yaani growth ka grah, bhi abhi aapke favour mein chal raha hai.", rJupNo: "Guru, yaani growth ka grah, abhi zyada saath nahi de raha.",
    dStar: ["Us din Chandrama aapke liye shubh nakshatra mein hai, confidence aur luck dono achhe rahenge.", "Us din Chandrama aapke liye normal hai.", "Us din Chandrama aapke liye bhaari nakshatra mein hai, energy thodi kam rahegi."],
    dMoon: ["Chandrama aapki rashi se achhi jagah par hai.", "", "Chandrama aapki rashi se sensitive jagah par hai, isliye shaant rahiye."],
    remedy: "Simple upay: {day} ko {mantra} ka jaap kijiye, ya kisi zarooratmand ki madad kijiye.", remedyLocal: { Jupiter: "Simple upay: Guruvar ko mandir mein chane ki daal ya peeli mithai chadhaiye, ya kisi teacher ya bade ki madad kijiye.", Saturn: "Simple upay: Shanivar ko sarson ke tel ka diya jalaiye ya kisi mazdoor ya buzurg ki madad kijiye.", Rahu: "Simple upay: roz subah 10 minute shaanti se dhyan kijiye aur chhote waade bhi nibhaiye." },
    close: "Kyun, ya kaunsa din best hai, ye bhi pooch sakte hain.", closeDay: "Batayiye us din kya plan hai, main best time bata {m:dunga|f:dungi}.",
    cHealth: "Doctor ki salah zaroor maniye, jyotish sirf saath deta hai.", cLegal: "Vakeel ki salah sabse upar rakhiye, in dates se bas timing tay kijiye.", cMoney: "Bade paise ke faisle kisi achhe adviser se check karke hi lijiye.",
    gender: "{name} ji, bacche ka gender main nahi {m:batata|f:batati}, ye kundli se tay karne wali cheez nahi hai aur India mein allowed bhi nahi. Haan, santan ke liye achha time zaroor bata {m:sakta|f:sakti} hoon:",
    lucky: "{name} ji, aapka sabse lucky din {day} hai, ye {pl} ka din hai jo aapki kundli ka sabse strong grah hai. Zaroori kaam isi din shuru kijiye.",
    sat: ["{name} ji, haan, aapki Sade Sati chal rahi hai, lagbhag {date} tak. Ye sabr aur discipline ka time hai, darne ki koi baat nahi.", "{name} ji, Shani abhi {date} tak aapke liye sensitive jagah se guzar rahe hain, risky kaam dheere kijiye aur health ka dhyan rakhiye.", "{name} ji, nahi. Shani abhi ulta aapki madad kar rahe hain, mehnat ka phal milega.", "{name} ji, nahi, abhi Shani aapko pareshan nahi kar rahe."],
    gen: "{name} ji, abhi {y1} tak {md} ki lambi dasha chal rahi hai. Ye {theme1} laati hai, aur {d2} tak khaas focus {theme2} par hai.",
    why: "{name} ji, wajah ye hai:", whyDasha: "Aapki mukhya dasha {md} ki hai ({y1} tak), aur antardasha {ad} ki ({d2} tak).",
    remF: "{name} ji, iske liye upay:", forRel: "{name} ke liye:", details: "Jyotish details",
    themes: { 1: "self-confidence aur nayi shuruaat", 2: "family aur savings", 3: "himmat aur chhoti yatrayein", 4: "ghar aur mann ki shaanti", 5: "bacche, padhai aur creativity", 6: "kaam, routine aur health", 7: "shaadi aur partnership", 8: "badlav aur chhupi baatein", 9: "bhagya, bade aur aastha", 10: "career aur naam", 11: "fayda aur dost", 12: "kharche, aaram aur adhyatm" },
    topics: { admission: "admission", career: "naukri", marriage: "shaadi", money: "paise", health: "health", education: "padhai", children: "bacche", travel: "videsh", property: "ghar-property", general: "is baat", legal: "court case", business: "business" }, tips: { legal: "Saare papers ready rakhiye, aur achha settlement mile to court ke bahar bhi socha ja sakta hai.", business: "Chhote se shuru kijiye, partner ke saath likha-padhi saaf rakhiye aur har mahine cash flow dekhiye." },
    dayParts: ["subah", "dopahar", "shaam", "raat"], stop: ".",
    how: ["{name} ji, is time {topic} ke maamle mein samay achha chal raha hai.", "{name} ji, {topic} ke maamle mein samay theek-thaak hai, chinta ki baat nahi, bas routine sahi rakhiye.", "{name} ji, is time {topic} ke maamle mein thoda extra dhyan chahiye, ghabrane ki baat nahi."], howWin: "Sabse achha daur {win} aata hai.",
  },
  hi: {
    needRel: "यह सवाल किसी और के बारे में है, और इसका उत्तर उनकी अपनी कुंडली से निकलेगा, आपकी से नहीं। नीचे उनका नाम, जन्म तिथि, समय और स्थान भर दीजिए, मैं केवल उनकी कुंडली से उत्तर {m:दूँगा|f:दूँगी}।",
    noSex: "बच्चे का लिंग मैं कभी नहीं {m:बताता|f:बताती}, न उसे चुनने में मदद {m:करता|f:करती} हूँ; हर संतान आशीर्वाद है।",
    wellRemedy: "अच्छी सेहत के लिए: रोज़ सुबह दस मिनट शांत बैठिए, घर का सादा खाना लीजिए और डॉक्टर से नियमित जाँच करवाइए।",
    yearNote: "{year} में इसके लिए प्रबल समय है।",
    sexDecline: "{name} जी, बच्चा लड़का होगा या लड़की, यह मैं नहीं {m:बताता|f:बताती}। यह कुंडली से तय नहीं होता और भारत में इसकी अनुमति भी नहीं है। हर संतान एक आशीर्वाद है। हाँ, संतान के लिए शुभ समय ज़रूर देख {m:सकता|f:सकती} हूँ, और माँ व बच्चे की सेहत के लिए डॉक्टर की सलाह ही सही है। संतान के समय के बारे में पूछिए।",
    notThisYear: "इस साल नहीं {name} जी।",
    notNextYear: "अगले साल नहीं {name} जी।",
    notInYear: "{year} में नहीं {name} जी।",
    notNowX: "अभी नहीं {name} जी।",
    bestWin: "अगला प्रबल समय {win} है।",
    noWinShort: "अगले कुछ वर्षों में कोई प्रबल जुड़ी दशा नहीं दिखती, इसलिए लगातार मेहनत ही काम आएगी।",
    diag: "{name} जी, कुंडली से यह नहीं बताया जा सकता कि कोई बीमारी है या नहीं; यह केवल डॉक्टर जाँच करके बता सकते हैं। जल्दी डॉक्टर को दिखाइए, चाहें तो मैं इलाज शुरू करने के शुभ दिन बता {m:दूँगा|f:दूँगी}।",
    notYear: "इस साल नहीं {name} जी। सबसे अच्छा समय {win} है।",
    notNow: "अभी नहीं {name} जी। बेहतर समय {win} है।",
    ynHealth: ["{name} जी, सेहत ठीक रहने की अच्छी संभावना है; कोई तकलीफ़ हो तो सही इलाज से सुधार होगा।", "सुधार होगा {name} जी, पर इसमें थोड़ा समय लग सकता है; सही देखभाल रखिए।"],
    ynLegal: ["संभावना अच्छी है {name} जी, पर फ़ैसला तथ्यों और आपके वकील की मेहनत पर निर्भर करेगा।", "हो सकता है {name} जी, पर इसमें समय लगेगा; धैर्य रखिए, काग़ज़ मज़बूत रखिए और अच्छे वकील की सलाह लीजिए।"],
    askTopic: "{name} जी, थोड़ा बताइए: यह नौकरी, शादी, पैसे, सेहत, पढ़ाई, विदेश या संपत्ति में से किस बारे में है? फिर मैं साफ़ हाँ या ना बता {m:पाऊँगा|f:पाऊँगी}।",
    marriedWhen: "{name} जी, आपकी शादी तो {spouse} जी से हो चुकी है। वैवाहिक जीवन के बारे में देखूँ, या {spouse} जी की कुंडली?",
    marriedTip: "साथ में समय निकालिए और पैसे व परिवार की योजनाओं पर खुलकर बात कीजिए।",
    relTipPre: "{n} से कहिए: ",
    later: "इसमें थोड़ा समय लग सकता है, धैर्य रखिए।",
    comma: ",",
    relSub: [["आपकी ", "{n} की "], ["आपके ", "{n} के "], ["आपका ", "{n} का "]],
    persona: { m: "पंडित आदित्य", f: "मीरा जी", style: "उत्तर भारत के अनुभवी, शांत और अपनेपन से बात करने वाले ज्योतिषी" },
    yn: ["हाँ {name} जी, इसकी पूरी संभावना है।", "हाँ {name} जी, ऐसा होने की अच्छी संभावना है।", "हो सकता है {name} जी, लेकिन इसके लिए मन लगाकर मेहनत करनी होगी।", "अभी नहीं {name} जी, अभी कुंडली इसका पूरा साथ नहीं दे रही।"],
    ynWin: "इसके लिए सबसे प्रबल समय {win} है।", laterWin: "ज़्यादा मज़बूत समय थोड़ा बाद में आता है, {win}।", closeF: "और कुछ पूछना हो तो बेझिझक पूछिए।", dayGeneral: "ज़्यादातर कामों", dayGeneralFor: "ज़्यादातर कामों", untilWin: "अभी से {d} तक",
    when: "{name} जी, {topic} के लिए सबसे अच्छा समय {win} है।", whenSoon: "शुरुआती हलचल {soon} के आसपास दिख सकती है।",
    noWin: "{name} जी, अगले कुछ सालों में {topic} के लिए कोई प्रबल समय नहीं दिख रहा, इसलिए लगातार मेहनत ही रास्ता बनाएगी।",
    lockWin: "कुंडली में साफ़ समय दिख रहा है; सटीक महीने प्लान लेने पर खुलेंगे।",
    day: ["{name} जी, {date} {topic} के लिए बहुत अच्छा दिन है।", "{name} जी, {date} {topic} के लिए अच्छा दिन है।", "{name} जी, {date} {topic} के लिए मिला-जुला दिन है: रोज़ के काम ठीक, बड़ा जोखिम नहीं।", "{name} जी, {date} को {topic} में हल्का ही रखिए, बड़ा फ़ैसला उस दिन न लें।"],
    rangeBest: "{name} जी, {span} {topic} के लिए सबसे अच्छे दिन {days} हैं।", rangeFlat: "{name} जी, {span} {topic} के लिए सामान्य समय है, कोई दिन ख़ास अलग नहीं दिखता।",
    span: "{d1} से {d2} के बीच", avoid: "{days} को थोड़ा संभलकर चलिए।",
    dayTime: "शुभ समय: {t1} से {t2}। {r1} से {r2} तक राहु काल है, उसमें नया काम शुरू न करें।",
    rGood: "आपकी कुंडली में {topic} का स्वामी ग्रह मज़बूत है, इसलिए योग पक्का है।",
    rMid: "आपकी कुंडली में {topic} का स्वामी ग्रह ठीक-ठाक स्थिति में है, इसलिए नतीजा आपकी मेहनत तय करेगी।",
    rBad: "आपकी कुंडली में {topic} का स्वामी ग्रह थोड़ा दबाव में है, इसलिए सफलता से पहले कुछ देरी हो सकती है।",
    rRun: "अभी जो दशा चल रही है वह इसका साथ दे रही है, इसलिए बात आगे बढ़ सकती है।", rRunNo: "अभी की दशा का ध्यान दूसरी ओर है, इसलिए थोड़ा धैर्य रखिए।",
    rJup: "गुरु, यानी उन्नति का ग्रह, भी अभी आपके पक्ष में चल रहा है।", rJupNo: "गुरु, यानी उन्नति का ग्रह, अभी ज़्यादा साथ नहीं दे रहा।",
    dStar: ["उस दिन चंद्रमा आपके लिए शुभ नक्षत्र में है, आत्मविश्वास और भाग्य दोनों साथ देंगे।", "उस दिन चंद्रमा आपके लिए सामान्य है।", "उस दिन चंद्रमा आपके लिए भारी नक्षत्र में है, इसलिए ऊर्जा थोड़ी कम रहेगी।"],
    dMoon: ["चंद्रमा आपकी राशि से अच्छी जगह पर है।", "", "चंद्रमा आपकी राशि से संवेदनशील जगह पर है, इसलिए मन शांत रखिए।"],
    remedy: "सरल उपाय: {day} को {mantra} का जप करें, या किसी ज़रूरतमंद की मदद करें।", remedyLocal: { Jupiter: "सरल उपाय: गुरुवार को मंदिर में चने की दाल या पीली मिठाई चढ़ाएँ, या किसी गुरु या बुज़ुर्ग की सेवा करें।", Saturn: "सरल उपाय: शनिवार को सरसों के तेल का दीया जलाएँ या किसी मज़दूर या बुज़ुर्ग की मदद करें।", Rahu: "सरल उपाय: रोज़ सुबह दस मिनट शांति से ध्यान करें और छोटे वादे भी निभाएँ।" },
    close: "क्यों, या कौन सा दिन सबसे अच्छा रहेगा, यह भी पूछ सकते हैं।", closeDay: "बताइए उस दिन क्या करना है, मैं सबसे अच्छा समय बता {m:दूँगा|f:दूँगी}।",
    cHealth: "डॉक्टर की सलाह ज़रूर मानिए, ज्योतिष केवल साथ देता है।", cLegal: "वकील की सलाह को सबसे ऊपर रखिए, इन तारीख़ों से बस अपने कदमों का समय तय कीजिए।", cMoney: "बड़े पैसों के फ़ैसले किसी योग्य सलाहकार से पूछकर ही लें।",
    gender: "{name} जी, बच्चे का लिंग मैं नहीं {m:बताता|f:बताती}; यह कुंडली से तय करने की बात नहीं है और भारत में इसकी अनुमति भी नहीं है। हाँ, संतान के लिए शुभ समय ज़रूर बता {m:सकता|f:सकती} हूँ:",
    lucky: "{name} जी, आपका सबसे शुभ दिन {day} है, यह {pl} का दिन है जो आपकी कुंडली का सबसे मज़बूत ग्रह है। ज़रूरी काम इसी दिन शुरू करें।",
    sat: ["{name} जी, हाँ, आपकी साढ़ेसाती चल रही है, लगभग {date} तक। यह धैर्य और अनुशासन का समय है, डरने की कोई बात नहीं।", "{name} जी, शनि अभी {date} तक आपके लिए संवेदनशील स्थान से गुज़र रहे हैं, जोखिम के काम धीरे करें और सेहत का ध्यान रखें।", "{name} जी, नहीं। शनि अभी उल्टा आपकी मदद कर रहे हैं, मेहनत का फल मिलेगा।", "{name} जी, नहीं, अभी शनि आपको परेशान नहीं कर रहे।"],
    gen: "{name} जी, {y1} तक {md} की लंबी दशा चल रही है। यह {theme1} लेकर आती है, और {d2} तक ख़ास ध्यान {theme2} पर रहेगा।",
    why: "{name} जी, इसकी वजह यह है:", whyDasha: "आपकी महादशा {md} की है ({y1} तक) और अंतर्दशा {ad} की ({d2} तक)।",
    remF: "{name} जी, इसके लिए उपाय:", forRel: "{name} के लिए:", details: "ज्योतिषीय विवरण",
    themes: { 1: "आत्मविश्वास और नई शुरुआत", 2: "परिवार और बचत", 3: "साहस और छोटी यात्राएँ", 4: "घर और मन की शांति", 5: "संतान, पढ़ाई और रचनात्मकता", 6: "काम, दिनचर्या और सेहत", 7: "विवाह और साझेदारी", 8: "बदलाव और गुप्त बातें", 9: "भाग्य, बड़े-बुज़ुर्ग और आस्था", 10: "करियर और मान-सम्मान", 11: "लाभ और मित्र", 12: "ख़र्च, विश्राम और अध्यात्म" },
    topics: { admission: "दाखिले", career: "नौकरी", marriage: "शादी", money: "पैसे", health: "सेहत", education: "पढ़ाई", children: "संतान", travel: "विदेश यात्रा", property: "घर-प्रॉपर्टी", general: "इस बात", legal: "कोर्ट-केस", business: "व्यापार" }, tips: { legal: "सारे काग़ज़ तैयार रखें, और अच्छा समझौता मिले तो अदालत के बाहर सुलझाने पर भी सोचें।", business: "छोटे से शुरू करें, साझेदार के साथ लिखा-पढ़ी साफ़ रखें और हर महीने हिसाब देखें।" },
    dayParts: ["सुबह", "दोपहर", "शाम", "रात"], timeSuffix: " बजे", stop: "।",
    how: ["{name} जी, इस समय {topic} के मामले में समय अच्छा चल रहा है।", "{name} जी, {topic} के मामले में समय ठीक-ठाक है, चिंता की बात नहीं, बस दिनचर्या सही रखिए।", "{name} जी, इस समय {topic} के मामले में थोड़ा ज़्यादा ध्यान चाहिए, घबराने की बात नहीं।"], howWin: "सबसे अच्छा दौर {win} आता है।",
  },
};
for (const k in SHORT) if (I18N[k]) I18N[k].s = SHORT[k];
/* the short-style strings of a template language (packs carry theirs under "s") */
const SS = code => (I18N[code] && I18N[code].s) || SHORT.en;
let _PG = "f";   // the astrologer's grammatical gender ("m" / "f"): opposite to the user's by default (voice setting)
const astroGender = () => { try { return voiceGender(prof()) === "male" ? "m" : "f"; } catch (e) { return "f"; } };
let _TV = null;   // the topic, already joined the way the reader's language joins it ("for marriage", "of marriage")
function sf(code, key, vars = {}, idx) {
  if (_TV) vars = Object.assign({}, _TV, vars);
  let s = SS(code)[key]; if (s === undefined) s = SHORT.en[key];
  if (idx !== undefined) s = s[idx];
  s = String(s).replace(/\{m:([^|}]*)\|f:([^}]*)\}/g, (x, m, f) => _PG === "f" ? f : m);
  s = s.replace(/\{(\w+)\}/g, (m, k) => vars[k] !== undefined ? vars[k] : m);
  return s.replace(/[,،]\s*([:：.।۔])/g, "$1").replace(/([,،])(\s*[,،])+/g, "$1").replace(/^\s*[,،]\s*/, "").replace(/\s+([,.!?।])/g, "$1").replace(/\s{2,}/g, " ").trim();
}
/* local numbers, dates and times */
const NATIVE_DIGIT_LANGS = { mr: "०१२३४५६७८९", ne: "०१२३४५६७८९", bn: "০১২৩৪৫৬৭৮৯", as: "০১২৩৪৫৬৭৮৯", or: "୦୧୨୩୪୫୬୭୮୯", ur: "۰۱۲۳۴۵۶۷۸۹" };
const lnum = (code, n) => { const d = NATIVE_DIGIT_LANGS[code]; return d ? String(n).replace(/\d/g, x => d[+x]) : String(n); };
function ltimeS(code, h) {
  h = ((h % 24) + 24) % 24; let H = Math.floor(h), M = Math.round((h - H) * 60); if (M === 60) { H++; M = 0; }
  const s = SS(code), hm = `${(H % 12) || 12}:${String(M).padStart(2, "0")}`;
  if (s.dayParts) { const part = s.dayParts[H < 12 ? 0 : H < 16 ? 1 : H < 19 ? 2 : 3]; return `${part} ${lnum(code, hm)}${s.timeSuffix || ""}`; }
  return `${hm} ${(s.ampm || ["AM", "PM"])[H < 12 ? 0 : 1]}`;
}
function ltimeRange(code, a, b, key = "dayTime") { return [ltimeS(code, a), ltimeS(code, b)]; }
function samePart(code, a, b) { const s = SS(code); if (!s.dayParts) return false; const pt = h => { h = ((h % 24) + 24) % 24; return h < 12 ? 0 : h < 16 ? 1 : h < 19 ? 2 : 3; }; return pt(a) === pt(b); }
function ltimeEnd(code, a, b) { if (!samePart(code, a, b)) return ltimeS(code, b); const s = SS(code); return ltimeS(code, b).replace(s.dayParts[((h => h < 12 ? 0 : h < 16 ? 1 : h < 19 ? 2 : 3)(((b % 24) + 24) % 24))] + " ", ""); }
function ldS(code, ds) {   // "Thu 19 Nov" style, local
  const [y, m, d] = ds.split("-").map(Number), C = calOf(code), wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  if (code === "en") return `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][wd]} ${d} ${MON[m - 1]}`;
  if (code === "hinglish") return `${C.wd[wd]} ${d} ${MON[m - 1]}`;
  return `${C.wd[wd]}${SS(code).comma || ","} ${lnum(code, d)} ${C.mo[m - 1]}`;
}
function ldMY(code, J) {   // "December 2028"
  const ds = jToDs(J), [y, m] = ds.split("-").map(Number);
  if (code === "en" || code === "hinglish") return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m - 1]} ${y}`;
  return `${calOf(code).mo[m - 1]} ${lnum(code, y)}`;
}
function ldDM(code, J) { const [y, m, d] = jToDs(J).split("-").map(Number); return code === "en" || code === "hinglish" ? `${d} ${MON[m - 1]} ${y}` : `${lnum(code, d)} ${calOf(code).mo[m - 1]} ${lnum(code, y)}`; }
function lwin(code, a, b) {   // a window in plain words: month to month, or exact days when it is short
  if (a <= nowJ() + 2) return sf(code, "untilWin", { d: (b - a < 45 ? ldDM : ldMY)(code, b) });
  const short = b - a < 45;
  const f = short ? ldDM : ldMY;
  const x = f(code, a), y = f(code, b);
  return x === y ? x : sf(code, "span", { d1: x, d2: y });
}
const firstName = p => String(p.name || "").trim().split(/\s+/)[0] || "";
const topicLabel = (code, t) => (SS(code).topics && SS(code).topics[t.key]) || I18N[code].topics[t.key] || I18N[code].topics.general;
const topicTip = (code, t) => (SS(code).tips && SS(code).tips[t.key]) || I18N[code].tips[t.key] || I18N[code].tips.general;

/* ---------- what kind of question is it? ---------- */
const FOLLOW = {
  why: /^(का\s*[?？]?\s*$|why|why so|how come|but why|kyun|kyon|kyu|reason|wajah|क्यों|क्यूँ|कारण|কেন|কারণ|ஏன்|காரணம்|ఎందుకు|ಯಾಕೆ|ഏന്തുകൊണ്ട്|എന്തുകൊണ്ട്|કેમ|ਕਿਉਂ|କାହିଁକି|کیوں|का बरं|कशामुळे|किन)(?![\p{L}\p{M}])/iu,
  remedy: /(remed|upay|upaay|upai|totka|solution|उपाय|टोटका|প্রতিকার|উপায়|பரிகாரம்|పరిహారం|ಪರಿಹಾರ|പരിഹാരം|ઉપાય|ਉਪਾਅ|ଉପାୟ|علاج|تدبیر)/iu,
  when: /^(auspicious time|auspicious hour|good time|best time|shubh samay|shubh muhurat|shubh muhurt|achha samay|accha samay|शुभ समय|शुभ मुहूर्त|अच्छा समय|शुभ घड़ी|चांगली वेळ|शुभ वेळ|राम्रो समय|शुभ साइत|শুভ সময়|ভালো সময়|ভাল সময়|শুভ মুহূর্ত|শুভ মুহূৰ্ত|શુભ સમય|સારો સમય|શુભ મુહૂર્ત|ਸ਼ੁਭ ਸਮਾਂ|ਚੰਗਾ ਸਮਾਂ|ਸ਼ੁਭ ਮਹੂਰਤ|شبھ وقت|اچھا وقت|مبارک وقت|نیک ساعت|ଶୁଭ ସମୟ|ଭଲ ସମୟ|ଶୁଭ ମୁହୂର୍ତ୍ତ|நல்ல நேரம்|சுப நேரம்|சுப முகூர்த்தம்|మంచి సమయం|శుభ సమయం|ముహూర్తం|శుభ ముహూర్తం|ಶುಭ ಸಮಯ|ಒಳ್ಳೆಯ ಸಮಯ|ಮುಹೂರ್ತ|ಶುಭ ಮುಹೂರ್ತ|നല്ല സമയം|ശുഭ മുഹൂർത്തം|ശുഭ സമയം|kis ghadi|kis ghari|kaun si ghadi|किस घड़ी|किस घडी|कौन सी घड़ी|कौनसी घड़ी|कुन घडी|কি সময়ত|કઈ ઘડીએ|ਕਿਸ ਘੜੀ|କେଉଁ ଘଡ଼ି|ಎಷ್ಟು ಹೊತ್ತಿಗೆ|kaunsa ghanta|kaun sa ghanta|konsa ghanta|kaunsa time|kaun sa time|kaunsa muhurat|kaun sa muhurat|muhurat kya|कौन सा मुहूर्त|कौनसा मुहूर्त|कौन सा समय|कौनसा समय|कौन सा घंटा|मुहूर्त क्या|کس گھڑی|کون سا وقت|কেতিয়া|কোন সময়ে|କେଉଁ ସମୟରେ|କେଉଁ ସମୟ|ఏ సమయానికి|ఏ సమయంలో|ಯಾವ ಸಮಯದಲ್ಲಿ|ಯಾವ ಸಮಯಕ್ಕೆ|कुन समयमा|कुन बेलामा|कोणत्या वेळेला|ਕਿਹੜੇ ਸਮੇਂ|எந்த நேரத்துல|at what hour|what hour|which hour|what o'?clock|kab jaun|কটায়|ক'টায়|কটার সময়|কখন যাব|কেইটা বজাত|কেইটাত|কিমান বজাত|कति बेला|कुन बेला|कति बजे|কোন সময়|कोणत्या वेळी|किती वाजता|किस टाइम|કેટલા વાગે|કયા સમયે|કયા ટાઇમે|ਕਿੰਨੇ ਵਜੇ|ਕਿਹੜੇ ਵੇਲੇ|کتنے بجے|کس ٹائم|କେତେ ବେଳେ|କେତେବେଳେ|କେତେଟା ବେଳେ|எத்தனை மணிக்கு|எந்த நேரத்தில்|ఎన్ని గంటలకు|ఏ టైమ్|ಎಷ್ಟು ಗಂಟೆಗೆ|ಯಾವ ಹೊತ್ತಿಗೆ|എത്ര മണിക്ക്|ഏത് സമയത്ത്|what time|which time|at what time|what time exactly|exact time|kis time|kis samay|kitne baje|kitne bje|time kya|किस समय|किस वक्त|कितने बजे|किती वाजता|कोणत्या वेळी|कति बजे|कुन समय|কখন|কোন সময়|কিমান বজাত|কোন সময়ত|எந்த நேரம்|எத்தனை மணிக்கு|ఏ సమయం|ఎన్ని గంటలకు|ಯಾವ ಸಮಯ|ಎಷ್ಟು ಗಂಟೆಗೆ|ഏത് സമയം|എത്ര മണിക്ക്|કેટલા વાગ્યે|કયા સમયે|ਕਿਸ ਵੇਲੇ|ਕਿੰਨੇ ਵਜੇ|କେତେବେଳେ|କେତେ ବେଳେ|କେତେଟା ବେଳେ|کس وقت|کتنے بجے|when|by when|kab|kab tak|kab se|till when|कब|कब तक|কবে|কতদিন|எப்போது|ఎప్పుడు|ಯಾವಾಗ|എപ്പോൾ|ક્યારે|ਕਦੋਂ|କେବେ|کب|कधी|कहिले)(?![\p{L}\p{M}])/iu,
  dasha: /(which dasha|what dasha|dasha\b|कौन सी दशा|कौनसी दशा|दशा|দশা|தசை|దశ|ದಶೆ|ദശ|દશા|ਦਸ਼ਾ|ଦଶା)/iu,
};
const DIAG_Q = /\b(do i have|have i got|is it|could it be|am i suffering from|do i suffer from)\b.{0,30}\b(disease|illness|cancer|tumou?r|diabetes|infection|disorder|serious problem)|\b(kya mujhe|mujhe koi).{0,20}(bimari|beemari|rog) hai|कोई (गंभीर |बड़ी )?बीमारी है|मुझे .{0,10}बीमारी है|कैंसर है|आजार आहे का|रोग छ\s*कि|রোগ আছে|অসুখ আছে|ৰোগ আছে|બીમારી છે|ਬਿਮਾਰੀ ਹੈ|ରୋଗ ଅଛି|நோய் இருக்கா|நோய் இருக்கிறதா|వ్యాధి ఉందా|ಕಾಯಿಲೆ ಇದೆಯಾ|രോഗമുണ്ടോ|بیماری ہے|کینسر ہے/iu;
/* "do I have cancer / sugar / BP?": a diagnosis is a doctor's question, in every language */
const DISEASE = /\b(khoon ki kami|khun ki kami|khoon kam|peeliya|piliya|pathri|kamar dard)\b|फैटी लिवर|फैटी लीवर|लिवर|लीवर|खून की कमी|एनीमिया|पीलिया|माइग्रेन|बवासीर|हर्निया|गठिया|एसिडिटी|अल्सर|कोलेस्ट्रॉल|टाइफाइड|डेंगू|डिप्रेशन|कमर दर्द|कावीळ|मूतखडा|मुतखडा|पित्ताशय|रक्तक्षय|कमलपित्त|रक्तअल्पता|ढाड दुख्ने|ফ্যাটি লিভার|লিভার|রক্তাল্পতা|রক্তশূন্যতা|জন্ডিস|জণ্ডিচ|মাইগ্রেন|অর্শ|কোমরের ব্যথা|কঁকালৰ বিষ|ফেটি লিভাৰ|ફેટી લીવર|લીવર|લોહીની ઉણપ|એનીમિયા|કમળો|માઈગ્રેન|મસા|કમરનો દુખાવો|ਫੈਟੀ ਲਿਵਰ|ਲਿਵਰ|ਖੂਨ ਦੀ ਕਮੀ|ਪੀਲੀਆ|ਮਾਈਗ੍ਰੇਨ|ਕਮਰ ਦਰਦ|فیٹی لیور|جگر|خون کی کمی|یرقان|مائیگرین|بواسیر|کمر درد|ଫ୍ୟାଟି ଲିଭର|ଲିଭର|ରକ୍ତହୀନତା|ଜଣ୍ଡିସ|ମାଇଗ୍ରେନ|ଅଣ୍ଟା ବିନ୍ଧା|கொழுப்பு கல்லீரல்|கல்லீரல்|ரத்த சோகை|இரத்த சோகை|மஞ்சள் காமாலை|ஒற்றைத் தலைவலி|மைக்ரேன்|முதுகு வலி|ఫ్యాటీ లివర్|కాలేయ|రక్తహీనత|కామెర్లు|మైగ్రేన్|నడుము నొప్పి|ಫ್ಯಾಟಿ ಲಿವರ್|ಯಕೃತ್ತು|ರಕ್ತಹೀನತೆ|ಕಾಮಾಲೆ|ಮೈಗ್ರೇನ್|ಬೆನ್ನು ನೋವು|ഫാറ്റി ലിവർ|കരൾ|വിളർച്ച|മഞ്ഞപ്പിത്തം|മൈഗ്രേൻ|നടുവേദന|\b(fatty liver|liver|an(a)?emia|jaundice|migraine|piles|hemorrhoids|hernia|arthritis|gastritis|acidity|ulcer|cholesterol|uric acid|typhoid|dengue|malaria|covid|depression|anxiety|insomnia|epilepsy|psoriasis|eczema|sinus|fibroids?|cysts?|gout|vertigo|back pain|spondylitis|sciatica)\b|kidney stones?|gall ?stones?|stones? in|\bstones?\b|calculi|पथरी|पथरीचा|મૂત્રાશય|પથરી|পাথর|পাথৰ|ਪੱਥਰੀ|پتھری|ପଥର|கல் |சிறுநீரக கல்|రాళ్లు|ಕಲ್ಲು|കല്ല്|दम |दम\?|ಬಿಪಿ|బీపీ|ബിപി|थाइराइड|थायरॉइड|थायरॉईड|थायरोइड|थाइरोइड|रक्तदाब|उच्च रक्तदाब|दमा|अस्थमा|पथरी|मुटुको रोग|मुटु|থাইৰয়ড|থাইরয়েড|হাঁপানি|ହୃଦରୋଗ|ଥାଇରଏଡ|ଥାଇରଏଡ୍|ଆଜମା|ஆஸ்துமா|ఆస్తమా|ಅಸ್ತಮಾ|ആസ്ത്മ|દમ|ਦਮਾ|دمہ|\b(cancer|tumou?r|lump|diabet\w*|sugar|blood pressure|bp|hypertension|heart (disease|problem|attack)|kidney (disease|problem|failure)|thyroid|tb|tuberculosis|hiv|aids|stroke|paralysis|asthma|hepatitis|cyst|pcod|pcos|infertil\w*|disease|illness|infection|disorder)\b|कैंसर|कॅन्सर|कर्करोग|क्यान्सर|ट्यूमर|गांठ|गाँठ|गाठ|डायबिटीज|डायबिटीज़|मधुमेह|शुगर|शुगर|साखर|बीपी|ब्लड प्रेशर|रक्तचाप|उच्च रक्तदाब|हृदय रोग|दिल की बीमारी|किडनी|थायरॉइड|थायराइड|टीबी|क्षयरोग|बीमारी|बिमारी|रोग|आजार|ক্যান্সার|ক্যানসার|কেঞ্চাৰ|কৰ্কট|টিউমার|গাঁট|ডায়াবেটিস|ডায়েবেটিছ|মধুমেহ|সুগার|চুগাৰ|রক্তচাপ|ৰক্তচাপ|হার্টের অসুখ|থাইরয়েড|অসুখ|রোগ|ৰোগ|বেমাৰ|કેન્સર|ગાંઠ|ડાયાબિટીસ|મધુપ્રમેહ|સુગર|બીપી|બ્લડ પ્રેશર|હૃદયરોગ|થાઇરોઇડ|બીમારી|રોગ|ਕੈਂਸਰ|ਗੰਢ|ਸ਼ੂਗਰ|ਡਾਇਬਟੀਜ਼|ਬੀਪੀ|ਦਿਲ ਦੀ ਬਿਮਾਰੀ|ਥਾਇਰਾਇਡ|ਬਿਮਾਰੀ|ਰੋਗ|کینسر|سرطان|رسولی|گلٹی|شوگر|ذیابیطس|بلڈ پریشر|دل کی بیماری|تھائیرائیڈ|بیماری|مرض|କର୍କଟ|କ୍ୟାନସର|କ୍ୟାନ୍ସର|ଟ୍ୟୁମର|ଗଣ୍ଠି|ମଧୁମେହ|ଡାଇବେଟିସ|ସୁଗାର|ରକ୍ତଚାପ|ରୋଗ|புற்றுநோய்|கேன்சர்|கட்டி|சர்க்கரை நோய்|சர்க்கரை|நீரிழிவு|சுகர்|ரத்த அழுத்தம்|பிபி|இதய நோய்|தைராய்டு|நோய்|క్యాన్సర్|కేన్సర్|కణితి|గడ్డ|షుగర్|మధుమేహం|చక్కెర వ్యాధి|బీపీ|రక్తపోటు|గుండె జబ్బు|థైరాయిడ్|వ్యాధి|జబ్బు|ಕ್ಯಾನ್ಸರ್|ಗಡ್ಡೆ|ಸಕ್ಕರೆ ಕಾಯಿಲೆ|ಮಧುಮೇಹ|ಶುಗರ್|ಬಿಪಿ|ರಕ್ತದೊತ್ತಡ|ಹೃದಯ ರೋಗ|ಥೈರಾಯ್ಡ್|ಕಾಯಿಲೆ|ರೋಗ|ക്യാൻസർ|കാൻസർ|അർബുദ|മുഴ|പ്രമേഹ|ഷുഗർ|ബിപി|രക്തസമ്മർദ|ഹൃദ്രോഗ|തൈറോയ്ഡ്|രോഗ|അസുഖ/iu;
const PRESENCE = /\b(hai|he|h)\s*[?？]|\b(do i have|have i got|have i|is (it|this|that)|could (it|this) be|am i (diabetic|suffering|sick)|do i suffer|does (this|it) mean|hai kya|to nahi|toh nahi|ho gaya hai|ho gayi hai|hai\?)\b|है क्या|है\s*[?？]|तो नहीं|हो गया है|हो गई है|हुआ है|आहे का|आहे\s*[?？]|झाला आहे|छ\s*कि|छ\s*[?？]|भएको छ|আছে|হয়েছে|হৈছে|নেকি|આছે|છે\s*[?？]|છે\s*કે|થયો છે|થયું છે|ਹੈ\s*[?？]|ਤਾਂ ਨਹੀਂ|ہے\s*[?؟]|تو نہیں|ہو گیا|ہو گئی|ଅଛି|ହୋଇଛି|இருக்கா|இருக்கிறதா|இருக்குமா|வந்துருக்கா|ఉందా|ఉంది\s*[?？]|వచ్చిందా|ಇದೆಯೇ|ಇದೆಯಾ|ಬಂದಿದೆಯಾ|ഉണ്ടോ|ആണോ|വന്നോ/iu;
function diagQ(q) {
  const s = String(q || "").normalize("NFC");
  if (DIAG_Q.test(s)) return true;
  // a disease named with a "do I have / is it" form; recovery and timing questions ("will my diabetes be cured", "when will I recover") stay health readings
  return DISEASE.test(s) && PRESENCE.test(s) && !/\b(cure|cured|recover|recovery|better|heal|improve|normal|control|operation|surgery|when)\b|ठीक|कब|कहिले|निको|सन्चो|सुधार|बरा|कधी|सेरে|কবে|কেতিয়া|ક્યારે|ਕਦੋਂ|کب|ٹھیک|କେବେ|எப்போது|குணமா|ఎప్పుడు|నయం|ಯಾವಾಗ|ಗುಣ|എപ്പോൾ|മാറ/iu.test(s);
}
const GENDER_Q_NATIVE = new RegExp("मुलगा(?:\\s*\\S*\\s*){0,3}मुलगी|मुलगी(?:\\s*\\S*\\s*){0,3}मुलगा|ਮੁੰਡਾ(?:\\s*\\S*\\s*){0,3}ਕੁੜੀ|ਕੁੜੀ(?:\\s*\\S*\\s*){0,3}ਮੁੰਡਾ|ਪੁੱਤ(?:\\s*\\S*\\s*){0,3}ਧੀ|ਧੀ(?:\\s*\\S*\\s*){0,3}ਪੁੱਤ|ਬੇਟਾ(?:\\s*\\S*\\s*){0,3}ਬੇਟੀ|ਬੇਟੀ(?:\\s*\\S*\\s*){0,3}ਬੇਟਾ|بیٹا(?:\\s*\\S*\\s*){0,3}بیٹی|بیٹی(?:\\s*\\S*\\s*){0,3}بیٹا|لڑکا(?:\\s*\\S*\\s*){0,3}لڑکی|لڑکی(?:\\s*\\S*\\s*){0,3}لڑکا|ছেলে(?:\\s*\\S*\\s*){0,3}মেয়ে|মেয়ে(?:\\s*\\S*\\s*){0,3}ছেলে|ল'ৰা(?:\\s*\\S*\\s*){0,3}ছোৱালী|ছোৱালী(?:\\s*\\S*\\s*){0,3}ল'ৰা|লৰা(?:\\s*\\S*\\s*){0,3}ছোৱালী|ছোৱালী(?:\\s*\\S*\\s*){0,3}লৰা|পুত্ৰ(?:\\s*\\S*\\s*){0,3}কন্যা|কন্যা(?:\\s*\\S*\\s*){0,3}পুত্ৰ|छोरा(?:\\s*\\S*\\s*){0,3}छोरी|छोरी(?:\\s*\\S*\\s*){0,3}छोरा|દીકરો(?:\\s*\\S*\\s*){0,3}દીકરી|દીકરી(?:\\s*\\S*\\s*){0,3}દીકરો|છોકરો(?:\\s*\\S*\\s*){0,3}છોકરી|છોકરી(?:\\s*\\S*\\s*){0,3}છોકરો|ପୁଅ(?:\\s*\\S*\\s*){0,3}ଝିଅ|ଝିଅ(?:\\s*\\S*\\s*){0,3}ପୁଅ|ஆண் குழந்தை(?:\\s*\\S*\\s*){0,3}பெண் குழந்தை|பெண் குழந்தை(?:\\s*\\S*\\s*){0,3}ஆண் குழந்தை|అబ్బాయి(?:\\s*\\S*\\s*){0,3}అమ్మాయి|అమ్మాయి(?:\\s*\\S*\\s*){0,3}అబ్బాయి|అబ్బాయ(?:\\s*\\S*\\s*){0,3}అమ్మాయ|అమ్మాయ(?:\\s*\\S*\\s*){0,3}అబ్బాయ|ಗಂಡು ಮಗು(?:\\s*\\S*\\s*){0,3}ಹೆಣ್ಣು ಮಗು|ಹೆಣ್ಣು ಮಗು(?:\\s*\\S*\\s*){0,3}ಗಂಡು ಮಗು|ಗಂಡು(?:\\s*\\S*\\s*){0,3}ಹೆಣ್ಣು|ಹೆಣ್ಣು(?:\\s*\\S*\\s*){0,3}ಗಂಡು|ആൺകുട്ടി(?:\\s*\\S*\\s*){0,3}പെൺകുട്ടി|പെൺകുട്ടി(?:\\s*\\S*\\s*){0,3}ആൺകുട്ടി|ആണ്(?:\\s*\\S*\\s*){0,3}പെണ്ണ്|പെണ്ണ്(?:\\s*\\S*\\s*){0,3}ആണ്", "u");
const TIME_Q = /^(kis ghadi|kis ghari|kaun si ghadi|किस घड़ी|किस घडी|कौन सी घड़ी|कौनसी घड़ी|कति बजे|कुन घडी|কোন সময়|কিমান বজাত|কি সময়ত|কোন সময়ত|કઈ ઘડીએ|ਕਿਸ ਘੜੀ|کس وقت|କେଉଁ ଘଡ଼ି|எத்தனை மணி|எந்த நேரம்|ఏ సమయం|ఎన్ని గంటలకు|ಎಷ್ಟು ಹೊತ್ತಿಗೆ|ಯಾವ ಸಮಯ|എത്ര മണി|ഏത് സമയം|kaunsa ghanta|kaun sa ghanta|konsa ghanta|kaunsa time|kaun sa time|kaunsa muhurat|kaun sa muhurat|muhurat kya|muhurt kya|कौन सा मुहूर्त|कौनसा मुहूर्त|कौन सा समय|कौनसा समय|कौन सा घंटा|मुहूर्त क्या|शुभ मुहूर्त क्या|کس گھڑی|کون سا وقت|কেতিয়া আৰম্ভ|কোন সময়ে|କେଉଁ ସମୟରେ|କେଉଁ ସମୟ|ఏ సమయానికి|ఏ సమయంలో|ಯಾವ ಸಮಯದಲ್ಲಿ|ಯಾವ ಸಮಯಕ್ಕೆ|कुन समयमा|कुन बेलामा|कुन समयमा|कोणत्या वेळेला|ਕਿਹੜੇ ਸਮੇਂ|કયા ટાઈમે|எந்த நேரத்துல|ഏത് സമയത്താണ്|at what hour|what hour|which hour|what o'?clock|kab jaun|কটায়|ক'টায়|কটার সময়|কখন যাব|কেইটা বজাত|কেইটাত|কিমান বজাত|कति बेला|कुन बेला|कति बजे|কোন সময়|कोणत्या वेळी|किती वाजता|किस टाइम|કેટલા વાગે|કયા સમયે|કયા ટાઇમે|ਕਿੰਨੇ ਵਜੇ|ਕਿਹੜੇ ਵੇਲੇ|کتنے بجے|کس ٹائم|କେତେ ବେଳେ|କେତେବେଳେ|କେତେଟା ବେଳେ|எத்தனை மணிக்கு|எந்த நேரத்தில்|ఎన్ని గంటలకు|ఏ టైమ్|ಎಷ್ಟು ಗಂಟೆಗೆ|ಯಾವ ಹೊತ್ತಿಗೆ|എത്ര മണിക്ക്|ഏത് സമയത്ത്|what time|which time|at what time|what time exactly|exact time|kis time|kis samay|kitne baje|kitne bje|किस समय|किस वक्त|कितने बजे|किती वाजता|कोणत्या वेळी|कति बजे|कुन समय|কখন|কোন সময়|কিমান বজাত|কোন সময়ত|எந்த நேரம்|எத்தனை மணிக்கு|ఏ సమయం|ఎన్ని గంటలకు|ಯಾವ ಸಮಯ|ಎಷ್ಟು ಗಂಟೆಗೆ|ഏത് സമയം|എത്ര മണിക്ക്|કેટલા વાગ્યે|કયા સમયે|ਕਿਸ ਵੇਲੇ|ਕਿੰਨੇ ਵਜੇ|କେତେବେଳେ|କେତେ ବେଳେ|କେତେଟା ବେଳେ|کس وقت|کتنے بجے)(?![\p{L}\p{M}])/iu;
/* ===== PCPNDT guard, fail-closed (Round 4f) =====
   Layer 0 normalise (NFKC, homoglyphs, leetspeak, repeated letters, emoji); Layer 1 children/pregnancy topic -> sex-neutral answer only;
   Layer 2 sex signal + children/pregnancy/birth/lineage/remedy/lucky/vrat/wazifa/muhurat context -> decline (existing relatives' life matters excepted);
   Layer 3 purpose phrasing ("for a son", "beta hone ke liye") -> decline. */
const CS = (() => {
  const HOMO = { "а": "a", "е": "e", "о": "o", "р": "p", "с": "c", "у": "y", "х": "x", "і": "i", "ј": "j", "ѕ": "s", "ԁ": "d", "ӏ": "l", "к": "k", "м": "m", "н": "h", "т": "t", "в": "b", "г": "r",
    "α": "a", "ε": "e", "ο": "o", "ρ": "p", "ι": "i", "κ": "k", "ν": "v", "τ": "t", "υ": "u", "χ": "x", "β": "b", "γ": "y", "ѵ": "v", "ɡ": "g", "ı": "i" };
  const EMOJI = [[/👦|👨‍👦|🧒‍♂️|♂️?|🤴|💙|🩵/gu, " boy "], [/👧|👩‍👧|👸|♀️?|🩷|💗|🎀/gu, " girl "], [/👶|🍼|🧸|🚼|🧒/gu, " baby "], [/🤰|🫃|🫄/gu, " pregnant "],
    [/👨‍👩‍👦|👪/gu, " family baby boy "], [/👨‍👩‍👧/gu, " family baby girl "]];
  const LEET = { "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "@": "a", "$": "s" };
  function norm(q) {
    let s = String(q || "").normalize("NFKC").replace(/(कन्या|kanya|কন্যা|କନ୍ୟା|કન્યા|ਕੰਨਿਆ|ಕನ್ಯಾ|കന്നി|కన్యా|کنیا)\s*-?\s*(राशि|राशी|rashi|raashi|lagna|लग्न|রাশি|ରାଶି|રાશિ|ਰਾਸ਼ੀ|ರಾಶಿ|രാശി|రాశి|راشی)/giu, " virgo ").replace(/[​-‍️]/g, (c) => c === "‍" ? "‍" : "");
    for (const [re, w] of EMOJI) s = s.replace(re, w);
    s = s.replace(/[‍️]/g, "").toLowerCase();
    s = s.replace(/[аеорсухіјѕԁӏкмнтвгαεορικντυχβγѵɡı]/g, c => HOMO[c] || c);
    // leetspeak only inside Latin words that also contain letters ("b0y", "s0n", "g1rl"); years and times stay intact
    s = s.replace(/[a-z0-9@$]+/g, w => /[a-z]/.test(w) && /[0-9@$]/.test(w) ? w.replace(/[0-9@$]/g, c => LEET[c] || c) : w);
    s = s.replace(/\b(?:[a-z][.\-_*]){2,}[a-z]\b/g, m => m.replace(/[.\-_*]/g, ""));                  // "b-o-y", "g.i.r.l" -> "boy", "girl"
    s = s.replace(/\b(?:[a-z] ){2,}[a-z]\b/g, m => { const w = m.replace(/ /g, ""); return /^a(boy|girl|son|lad|lass)$/.test(w) ? "a " + w.slice(1) : w; });   // "B O Y", "a b o y"
    s = s.replace(/([a-z])\1{2,}/g, "$1$1");              // "boyyyy" -> "boyy", "ladkaaaa" -> "ladkaa"
    s = s.replace(/[ऀ-෿؀-ۿ]́?/g, c => c).replace(/(.)\1{3,}/gu, "$1");
    return s;
  }
  const W = list => new RegExp("\\b(" + list.join("|") + ")\\b", "i");
  // ---------- Layer 1: children / pregnancy / offspring context ----------
  const OFF_LAT = W(["child", "children", "childs?", "kids?", "bab(y|ies|e)", "bby", "infant", "newborn", "new born", "offspring", "progeny", "pregnancy", "pregnant", "pregnent", "pregnency", "preggers", "preggo", "conceive[ds]?", "conceiving", "conception", "ivf", "iui", "womb", "uterus", "foetus", "fetus", "embryo", "firstborn", "first born",
    "grand ?(son|daughter|child|children|kid|kids)s?", "grand ?(father|mother|parents?|pa|ma)", "(dada|dadi|nana|nani) ban\\w*", "twins?", "triplets?", "third (one|child|baby)", "next (one|child|baby)", "second (one|child|baby)", "another (one|child|baby)", "baccha", "bachcha", "bacha", "bachha", "bachche", "bacche", "bachchi", "bacchi", "bachhe", "bacchey", "santan", "santaan", "santhan", "santhanam", "sontan", "santati", "aulad", "aulaad", "olaad", "olad", "aulaadh", "garbh", "garbha", "garbhadharan",
    "pet (mein|me|main|ma)", "vansh", "nariyana", "nareena", "narina",
    "pota", "poti", "pote", "potaa", "naati", "naatin", "nati", "natni", "nathi", "natin", "pautra", "pautri", "dohta", "dohti", "nawasa", "nawasi", "perakutti", "peran", "pethi", "manavadu", "manavaralu", "mommaga", "mommagalu",
    "judwa", "judwaa", "jodiya", "jamaj", "jumla", "kuldeepak", "kul deepak", "kuldipak", "santan prapti"]);
  const OFF_NAT = ["बच्चा", "बच्चे", "बच्ची", "बच्चो", "शिशु", "संतान", "सन्तान", "संतति", "औलाद", "गर्भ", "पेट में", "पेट मे", "प्रेग्नें", "प्रेगनें", "प्रेग्नेंसी", "प्रसव", "नवजात", "होने वाला", "होनेवाला",
    "पोता", "पोती", "पोते", "नाती", "नातिन", "नवासा", "नवासी", "पौत्र", "पौत्री", "दोहता", "जुड़वा", "जुड़वां", "जुडवा", "तीसरा बच्चा", "तीसरी संतान", "कुलदीपक", "कुल का", "बाळ", "अपत्य", "मूल ", "मूल?", "पोटात", "गरोदर", "बाळंत", "नातू", "नात ", "जुळ", "पेटमा", "बच्चाको", "सुत्केरी", "गर्भमा", "नातिनी", "जुम्ल्याहा", "सन्तानको",
    "সন্তান", "বাচ্চা", "শিশু", "গর্ভ", "গৰ্ভ", "পেটে", "পেটত", "প্রসব", "প্ৰসৱ", "কেঁচুৱা", "অন্তঃসত্ত্বা", "সন্তানসম্ভবা", "নাতি", "নাতনি", "নাতিনী", "যমজ", "બાળક", "સંતાન", "ગર્ભ", "પેટમાં", "પ્રસૂતિ", "પૌત્ર", "પૌત્રી", "દોહિત્ર", "જોડિયા", "જોડિયાં", "ਬੱਚਾ", "ਬੱਚੇ", "ਬੱਚੀ", "ਔਲਾਦ", "ਸੰਤਾਨ", "ਗਰਭ", "ਪੇਟ ਵਿੱਚ", "ਢਿੱਡ", "ਪੋਤਾ", "ਪੋਤੀ", "ਦੋਹਤਾ", "ਦੋਹਤੀ", "ਜੁੜਵਾਂ", "بچہ", "بچے", "بچی", "اولاد", "حمل", "پیٹ میں", "پیٹ", "نرینہ", "زچگی", "پوتا", "پوتی", "نواسہ", "نواسی", "جڑواں", "ସନ୍ତାନ", "ପିଲା", "ଶିଶୁ", "ଗର୍ଭ", "ପେଟରେ", "ପ୍ରସବ", "ନାତି", "ନାତୁଣୀ", "ଯାଆଁଳା", "குழந்தை", "பிள்ளை", "கர்ப்ப", "வயிற்றில்", "பிரசவ", "புத்திர", "பேரன்", "பேத்தி", "பேரக்குழந்தை", "இரட்டை", "சந்ததி",
    "బిడ్డ", "సంతాన", "పిల్ల", "గర్భ", "కడుపులో", "కాన్పు", "ప్రసవ", "మనవడు", "మనవరాలు", "మనుమడు", "కవల", "ಮಗು", "ಮಗುವ", "ಸಂತಾನ", "ಗರ್ಭ", "ಹೊಟ್ಟೆಯಲ್ಲಿ", "ಹೆರಿಗೆ", "ಮಕ್ಕಳ", "ಮೊಮ್ಮಗ", "ಅವಳಿ", "ಮೂರನೇ ಮಗು",
    "കുഞ്ഞ", "കുട്ടി", "സന്താന", "ഗർഭ", "വയറ്റിൽ", "പ്രസവ", "പേരക്കുട്ടി", "കൊച്ചുമകൻ", "കൊച്ചുമകൾ", "ഇരട്ട"];
    // weak context: birth, lineage, heir, delivery, scans. Ambiguous on their own ("birth chart", "जन्म कुंडली", "heir to the property"),
  // so they never make a children topic, but next to a sex word they do mean the child to be
  const WEAK_LAT = /\b(scan|sonography|ultrasound|birth|born|heirs?|delivery|deliver|expecting|janam|janm|paida|vansh|vansha|khandaan|khandan|khaandaan|waris|varis|vaaris|varas|vaaras|varasdar|uttaradhikari|lineage|dynasty)\b/i;
  const WEAK_NAT = ["जन्म", "पैदा", "वंश", "ख़ानदान", "खानदान", "वारिस", "उत्तराधिकारी", "डिलीवरी", "सोनोग्राफी", "अल्ट्रासाउंड", "वारस", "বংশ", "জন্ম", "উত্তরাধিকারী", "ওয়ারিশ", "উত্তৰাধিকাৰী", "আল্ট্রাসাউন্ড", "વંશ", "જન્મ", "ડિલિવરી", "વારસ", "વારસદાર", "ਵੰਸ਼", "ਜਨਮ", "ਡਿਲੀਵਰੀ", "ਵਾਰਸ", "نسل", "خاندان", "وارث", "پیدا", "الٹراساؤنڈ", "ବଂଶ", "ଜନ୍ମ", "ଉତ୍ତରାଧିକାରୀ", "வம்ச", "பிறக்", "பிறப்", "வாரிசு", "వంశ", "పుట్ట", "వారసుడు", "వారసురాలు", "ವಂಶ", "ಹುಟ್ಟು", "ವಾರಸುದಾರ", "ಉತ್ತರಾಧಿಕಾರಿ", "വംശ", "ജനിക്ക", "അനന്തരാവകാശി", "അവകാശി", "పుడతా", "పుడుతుం"];
  // pregnancy / conception itself (a relative's "exam" or "wedding" next to these does not make it a life matter)
  const CORE_LAT = /\b(umm?eed se|umid se|pair bhari|paon bhari|din chadhe|pregnan\w*|pregnent|preggers|preggo|conceiv\w*|conception|ivf|iui|womb|uterus|foetus|fetus|embryo|garbh\w*|pet (mein|me|main|ma))\b/i;
  const CORE_NAT = ["امید سے", "اُمید سے", "उम्मीद से", "पाँव भारी", "पांव भारी", "पैर भारी", "दिन चढ़े", "ਉਮੀਦ ਨਾਲ", "ਉਮੀਦ ਤੋਂ", "গর্ভবতী", "পোয়াতি", "ગર્ભવતી", "ଗର୍ଭବତୀ", "கர்ப்பிணி", "గర్భిణి", "ಗರ್ಭಿಣಿ", "ഗർഭിണി", "গৰ্ভৱতী", "गर्भवती", "पेट में", "प्रेग्नें", "प्रेगनें", "गरोदर", "पोटात", "पेटमा", "গর্ভ", "গৰ্ভ", "পেটে", "পেটত", "অন্তঃসত্ত্বা", "সন্তানসম্ভবা", "ગર્ભ", "પેટમાં", "ਗਰਭ", "ਪੇਟ ਵਿੱਚ", "ਢਿੱਡ", "حمل", "حاملہ", "پیٹ میں",
    "ଗର୍ଭ", "ପେଟରେ", "கர்ப்ப", "வயிற்றில்", "గర్భ", "కడుపులో", "ಗರ್ಭ", "ಹೊಟ್ಟೆಯಲ್ಲಿ", "ഗർഭ", "വയറ്റിൽ"];
  // remedies, fasts, lucky things, muhurat, conception: the "help me get a son" contexts
  const HELP_LAT = W(["remed(y|ies)", "upay", "upaay", "upaye", "totka", "totke", "vrat", "fast(ing)?", "wazifa", "wazeefa", "dua", "mantra", "pooja", "puja", "jaap", "tabeez", "taveez", "ratna", "gem(stone)?", "lucky", "number", "colou?r",
    "month", "mahina", "mahine", "muhurat", "muhurt", "mahurat", "tithi", "nakshatra", "position", "diet", "food", "medicine", "ayurved\\w*", "garbh ?sanskar", "try(ing)?", "plan(ning)?", "conceive", "intercourse", "tips?", "method", "way", "trick", "ritual"]);
  const HELP_NAT = ["उपाय", "टोटका", "व्रत", "उपवास", "मंत्र", "पूजा", "जाप", "रत्न", "ताबीज़", "ताबीज", "लकी", "शुभ अंक", "अंक", "रंग", "महीना", "महीने", "मुहूर्त", "तिथि", "नक्षत्र", "दिन ", "दवा", "आहार", "गर्भ संस्कार", "तरीका", "कोशिश",
    "उपास", "महिना", "महिन्यात", "क्रमांक", "रंग", "मुहूर्त", "उपाय", "व्रत", "मन्त्र", "बार्ता", "महिना",
    "প্রতিকার", "উপায়", "টোটকা", "ব্রত", "উপবাস", "মন্ত্র", "পূজা", "রত্ন", "শুভ সংখ্যা", "সংখ্যা", "রং", "মাস", "মুহূর্ত", "লাকি", "মাহ", "সংখ্যা", "ৰং",
    "ઉપાય", "વ્રત", "ઉપવાસ", "મંત્ર", "પૂજા", "રત્ન", "લકી", "અંક", "રંગ", "મહિનો", "મહિને", "મુહૂર્ત",
    "ਉਪਾਅ", "ਵਰਤ", "ਮੰਤਰ", "ਪਾਠ", "ਪੂਜਾ", "ਰਤਨ", "ਲੱਕੀ", "ਅੰਕ", "ਰੰਗ", "ਮਹੀਨਾ", "ਮਹੀਨੇ", "ਮਹੂਰਤ",
    "وظیفہ", "دعا", "تدبیر", "علاج", "روزہ", "تعویذ", "لکی", "نمبر", "رنگ", "مہینہ", "مہینے", "مہورت", "عمل",
    "ଉପାୟ", "ବ୍ରତ", "ମନ୍ତ୍ର", "ପୂଜା", "ରତ୍ନ", "ସଂଖ୍ୟା", "ରଙ୍ଗ", "ମାସ", "ମୁହୂର୍ତ୍ତ",
    "பரிகாரம்", "விரதம்", "மந்திர", "பூஜை", "ரத்தின", "எண்", "நிறம்", "மாதம்", "முகூர்த்த", "அதிர்ஷ்ட",
    "పరిహార", "వ్రత", "ఉపవాస", "మంత్ర", "పూజ", "రత్న", "సంఖ్య", "రంగు", "నెల", "ముహూర్త", "లక్కీ", "అదృష్ట",
    "ಪರಿಹಾರ", "ವ್ರತ", "ಉಪವಾಸ", "ಮಂತ್ರ", "ಪೂಜೆ", "ರತ್ನ", "ಸಂಖ್ಯೆ", "ಬಣ್ಣ", "ತಿಂಗಳು", "ಮುಹೂರ್ತ", "ಅದೃಷ್ಟ",
    "പരിഹാര", "വ്രത", "മന്ത്ര", "പൂജ", "രത്ന", "സംഖ്യ", "നിറം", "മാസം", "മുഹൂർത്ത", "ഭാഗ്യ"];
  // an existing relative's life matter: these questions are about a person who is already born
  const LIFE_LAT = W(["house", "home loan", "flat", "land", "plot", "car", "vehicle", "property", "makaan", "makan", "ghar", "zameen", "buy", "invest\\w*", "money", "paisa", "income", "loan", "debt", "kaam", "dhandha", "vyapar", "karobar", "kaarobaar", "naukri", "settle\\w*", "visa", "abroad", "videsh", "foreign", "competition", "neet", "jee", "upsc", "result", "marks", "exams", "studies", "education", "school", "schooling", "college", "university", "degree", "sick", "ill", "illness", "recover", "recovery", "fever", "hospital", "surgery", "operation", "treatment", "settle", "settled", "jobs", "careers", "behaviour", "behavior", "friends", "sports", "habits", "custody", "court", "case", "divorce", "lawyer", "legal", "visitation", "maintenance", "alimony", "fees", "var", "groom", "bride", "dulha", "dulhan", "jeevansathi", "life partner", "spouse", "job", "naukri", "naukari", "career", "work", "business", "shaadi", "shadi", "marriage", "married", "wedding", "vivah", "padhai", "studies", "study", "exam", "result", "admission", "college", "school", "health", "tabiyat", "illness", "fever", "abroad", "visa", "promotion", "salary", "rishta", "match", "kundli milan", "behaviour", "future", "name", "naam", "birthday"]);
  const LIFE_NAT = ["अभ्यास", "करिअर", "कैरियर", "करियर", "कारोबार", "कारभार", "व्यापार", "धंदा", "मकान", "ज़मीन", "जमीन", "फ्लैट", "प्रॉपर्टी", "संपत्ती", "संपत्ति", "पैसा", "पैसे", "कर्ज", "कर्ज़", "विदेश", "परदेश", "नोकरी", "पढ़ाई", "पढाई", "रिजल्ट", "नतीजा", "निकाल", "घर ख", "घर ले", "घर घे", "গাড়ি", "জমি", "টাকা", "বাড়ি কিন", "ঘৰ কিন", "ગાડી", "મકાન", "ਮਕਾਨ", "ਪੈਸਾ", "مکان", "پیسہ", "ଜମି", "வீடு வாங்க", "నిల్లు", "ಹಣ", "പണം", "बढती", "आरोग्य", "प्रकृती", "प्रकृति", "सेहत", "स्वास्थ", "ਸਿਹਤ", "ସ୍ୱାସ୍ଥ", "ஆரோக்கிய", "ఆరోగ్య", "ಆರೋಗ್ಯ", "ആരോഗ്യ", "স্বাস্থ্য", "স্বাস্থ", "পদোন্নতি", "পদোন্নতি", "বঢ়োৱা", "बढुवा", "बढ़ती", "तरक्की", "तरक़्क़ी", "पदोन्नति", "ਤਰੱਕੀ", "ਪਦਉੱਨਤੀ", "പ്രൊമോഷൻ", "ഉദ്യോഗക്കയറ്റം", "உயர்வு", "ஊதிய உயர்வு", "ಶಾಲ", "ಶಾಲಾ", "ಉದ್ಯೋಗ", "ଉନ୍ନତି", "બઢતી", "बीमार", "अस्पताल", "ऑपरेशन", "इलाज", "ठीक हो", "आजारी", "दवाखान", "অসুস্থ", "হাসপাতাল", "বেমাৰ", "બીમાર", "હોસ્પિટલ", "ਬਿਮਾਰ", "ਹਸਪਤਾਲ", "بیمار", "ہسپتال", "ଅସୁସ୍ଥ", "உடம்பு சரியில்லை", "மருத்துவமனை", "ఆసుపత్రి", "ಆಸ್ಪತ್ರೆ", "ആശുപത്രി", "बिरामी", "प्रमोशन", "स्कूल", "एडमिशन", "दाखिला", "ऑफिस", "कॉलेज", "बिज़नेस", "बिजनेस", "धंधा", "व्यवसाय", "परीक्षा", "रिजल्ट", "सरकारी", "पगार", "वेतन", "नोकरीत", "शाळा", "प्रवेश", "कामधंदा", "स्वास्थ्य", "घर", "जग्गा", "जमीन", "यात्रा", "पढाइ", "विद्यालय", "প্রমোশন", "স্কুল", "ভর্তি", "অফিস", "কলেজ", "ব্যবসা", "বেতন", "স্বাস্থ্য", "বাড়ি", "জমি", "ব্যৱসায়", "নামভৰ্তি", "বিদ্যালয়", "પ્રમોશન", "સ્કૂલ", "શાળા", "એડમિશન", "ઓફિસ", "કૉલેજ", "ધંધો", "વેપાર", "પગાર", "ઘર", "જમીન", "પરીક્ષા", "ਪ੍ਰਮੋਸ਼ਨ", "ਸਕੂਲ", "ਦਾਖ਼ਲਾ", "ਦਾਖਲਾ", "ਦਫ਼ਤਰ", "ਕਾਲਜ", "ਕਾਰੋਬਾਰ", "ਤਨਖ਼ਾਹ", "ਘਰ", "ਜ਼ਮੀਨ", "ਇਮਤਿਹਾਨ", "پروموشن", "ترقی", "اسکول", "داخلہ", "دفتر", "کالج", "کاروبار", "تنخواہ", "گھر", "زمین", "امتحان", "تعلیم", "ପଦୋନ୍ନତି", "ସ୍କୁଲ", "ନାମଲେଖା", "ଅଫିସ", "କଲେଜ", "ବ୍ୟବସାୟ", "ଦରମା", "ଘର", "ଜମି", "ପରୀକ୍ଷା", "பதவி உயர்வு", "ப்ரமோஷன்", "பள்ளி", "ஸ்கூல்", "அட்மிஷன்", "சேர்க்கை", "அலுவலக", "கல்லூரி", "தொழில்", "வியாபார", "சம்பள", "வீடு", "நிலம்", "தேர்வு", "ప్రమోషన్", "పదోన్నతి", "స్కూల్", "బడి", "అడ్మిషన్", "ప్రవేశ", "ఆఫీసు", "కాలేజీ", "వ్యాపార", "జీతం", "ఇల్లు", "స్థలం", "పరీక్ష", "ಪ್ರಮೋಷನ್", "ಬಡ್ತಿ", "ಶಾಲೆ", "ಸ್ಕೂಲ್", "ಅಡ್ಮಿಷನ್", "ಪ್ರವೇಶ", "ಆಫೀಸ್", "ಕಾಲೇಜು", "ವ್ಯಾಪಾರ", "ಸಂಬಳ", "ಮನೆ", "ಜಮೀನು", "ಪರೀಕ್ಷೆ", "പ്രമോഷൻ", "സ്കൂൾ", "അഡ്മിഷൻ", "പ്രവേശന", "ഓഫീസ്", "കോളേജ്", "ബിസിനസ്", "ശമ്പള", "വീട്", "ഭൂമി", "പരീക്ഷ", "अदालत", "कोर्ट", "मुकदमा", "तलाक", "कस्टडी", "हिरासत", "न्यायालय", "আদালত", "মামলা", "আদালতৰ", "কোর্ট", "કોર્ટ", "ਅਦਾਲਤ", "عدالت", "مقدمہ", "ଅଦାଲତ", "நீதிமன்ற", "வழக்கு", "కోర్టు", "ನ್ಯಾಯಾಲಯ", "കോടതി", "अच्छा वर", "योग्य वर", "वर कब", "वर मिल", "दूल्हा", "दुल्हन", "रिश्ता", "स्थळ", "जीवनसाथी", "वरन", " বর ", "পাত্র", "পাত্রী", " বৰ ", " વર ", "મુરતિયો", " ਵਰ ", "ਰਿਸ਼ਤਾ", "دولہا", "رشتہ", " ବର ", "வரன்", "மாப்பிள்ளை", "వరుడు", "సంబంధం", " ವರ ", "ವರನ", "വരൻ", "ആലോചന", "नौकरी", "करियर", "शादी", "विवाह", "पढ़ाई", "परीक्षा", "सेहत", "तबीयत", "बीमार", "व्यापार", "विदेश", "रिश्ता", "नाम", "नोकरी", "लग्न", "शिक्षण", "तब्येत", "जागिर", "बिहे", "पढाइ", "স্বাস্থ্য",
    "চাকরি", "চাকৰি", "বিয়ে", "বিয়া", "পড়াশোনা", "পঢ়া", "পরীক্ষা", "নাম", "નોકરી", "લગ્ન", "અભ્યાસ", "તબિયત", "નામ", "ਨੌਕਰੀ", "ਵਿਆਹ", "ਪੜ੍ਹਾਈ", "ਸਿਹਤ", "ਨਾਂ", "ਨਾਮ", "نوکری", "شادی", "پڑھائی", "صحت", "نام",
    "ଚାକିରି", "ବାହାଘର", "ବିବାହ", "ପଢ଼ା", "ସ୍ୱାସ୍ଥ୍ୟ", "ନାମ", "வேலை", "கல்யாண", "திருமண", "படிப்பு", "உடல்நல", "பெயர்", "ఉద్యోగ", "పెళ్లి", "వివాహ", "చదువు", "ఆరోగ్య", "పేరు", "తేదీ",
    "ಕೆಲಸ", "ಮದುವೆ", "ವಿವಾಹ", "ಓದು", "ಆರೋಗ್ಯ", "ಹೆಸರು", "ജോലി", "കല്യാണ", "വിവാഹ", "പഠന", "ആരോഗ്യ", "പേര്"];
  // ---------- sex signals ----------
  const LAT = ["munna", "munni", "munnu", "gudiya", "guddi", "gudia", "lalla", "laadli", "ladli", "bitiya", "bitiyaa", "lek", "maga", "magalu", "mol", "molu", "makan", "kodaku", "kuthuru", "paiyan", "payyan", "ponnu", "pennu", "kaka", "khoka", "khuki", "lad", "lass", "xy", "xx", "ladke", "ladkon", "ladkiyan", "betiyan", "beton", "sons", "boys", "vanshaj", "boi", "gurl", "grl", "lardka", "lardki", "larkaa", "betay", "boy", "girl", "son", "daughter", "male", "female", "prince", "princess", "sex", "gender", "beta", "betaa", "beti", "betee", "biti", "ladka", "ladkaa", "larka", "laraka", "ladki", "larki", "ladaki", "ladkee", "ladke",
    "putra", "putr", "putri", "puttar", "kanya", "munda", "mundaa", "kudi", "kuri", "chhora", "chhori", "chora", "chori", "dikro", "dikri", "chele", "chhele", "meye", "ling", "jins", "nariyana", "nareena", "narina", "mulga", "mulgi",
    "pink", "blue", "grandson", "granddaughter", "pota", "poti", "potaa", "naati", "naatin", "nati", "natni", "pautra", "pautri", "dohta", "dohti", "nawasa", "nawasi", "kuldeepak", "kuldipak", "heir", "heirs", "waris", "varis", "varas", "vaaras", "varasdar", "uttaradhikari",
    "manavadu", "manavaralu", "mommaga", "mommagalu", "perakutti", "peran", "pethi", "koduku", "kuthuru", "abbayi", "ammayi", "magan", "magal", "makan", "makal", "gandu", "hennu", "aan", "pen", "pon"].filter(x => !["pen", "pon", "aan"].includes(x));
  const LATC = new Map(LAT.map(x => [x.replace(/([a-z])\1+/g, "$1"), x]));
  const NAT = ["উত্তৰাধিকাৰী", "উত্তৰাধিকাৰ", "मुलाच", "मुलाला", "मुलान", "मुलीच", "मुलीला", "मुलीन", "मुलीं", "കൊച്ചുമകന", "കൊച്ചുമകള", "பேரன", "பேத்த", "ಮೊಮ್ಮಗನ", "मुन्ना", "मुन्नी", "गुड़िया", "गुडिया", "लल्ला", "लाडली", "लाड़ली", "बिटिया", "बिट्टो", "मुलगी", "खोका", "খোকা", "খুকি", "খুকু", "ਕਾਕਾ", "ਕਾਕੀ", "ਗੁੱਡੀ", "منا", "منی", "گڑیا", "பையன்", "பையன", "பொண்ணு", "பொண்ண", "பெண்பிள்ளை", "ஆண்பிள்ளை", "ಹುಡುಗ", "ಹುಡುಗಿ", "മോൾ", "മോള", "മോൻ", "മോന", "ಮಗಳು", "బాబు", "పాప", "बेटा", "बेटे", "बेटी", "बेटियां", "लड़कियां", "लड़कों", "नाति", "नातिनी", "मुलगे", "मुलींना", "वंशज", "उत्तराधिकारी", "ਮੁੰਡੇ", "ਪੁੱਤਰਾਂ", "لڑکے", "بیٹوں", "نواسی", "বংশধর", "বংশধৰ", "ছেলেরা", "নাতিনী", "ବଂଶଧର", "ପୁଅମାନେ", "வம்சாவளி", "మనవడ", "మనవరాల", "వంశాంకుర", "ಮೊಮ್ಮಗಳ", "ವಂಶಸ್ಥ", "ചെറുമകൻ", "ചെറുമകന", "ചെറുമകൾ", "ചെറുമകള", "പിൻഗാമി", "लड़का", "लड़की", "लडका", "लडकी", "लड़के", "पुत्र", "पुत्री", "कन्या", "लिंग", "मुलगा", "मुलगी", "मुलासाठी", "मुलीसाठी", "छोरा", "छोरी", "लिङ्ग", "पोता", "पोती", "नाती", "नातिन", "नातू", "पौत्र", "पौत्री", "वारिस", "वारस", "कुलदीपक", "नवासा", "राजकुमार", "राजकुमारी", "गुलाबी", "नीला",
    "ছেলে", "মেয়ে", "পুত্র", "পুত্ৰ", "কন্যা", "লিঙ্গ", "লিংগ", "ল'ৰা", "লৰা", "ল’ৰা", "ছোৱালী", "জীয়ৰী", "নাতি", "নাতনি", "ওয়ারিশ", "উত্তরাধিকারী",
    "દીકરો", "દીકરા", "દીકરી", "છોકરો", "છોકરી", "પુત્ર", "કન્યા", "જાતિ", "લિંગ", "પૌત્ર", "પૌત્રી", "વારસ", "કુળદીપક",
    "ਪੁੱਤਰ", "ਪੁੱਤ", "ਮੁੰਡਾ", "ਕੁੜੀ", "ਧੀ", "ਲਿੰਗ", "ਪੋਤਾ", "ਪੋਤੀ", "ਵਾਰਸ",
    "بیٹا", "بیٹی", "لڑکا", "لڑکی", "نرینہ", "جنس", "پوتا", "پوتی", "نواسہ", "وارث", "بیٹے",
    "ପୁଅ", "ଝିଅ", "ପୁତ୍ର", "କନ୍ୟା", "ଲିଙ୍ଗ", "ନାତି", "ନାତୁଣୀ", "ଉତ୍ତରାଧିକାରୀ",
    "மகன", "மகள", "பாலின", "ஆண்", "பெண்", "பேரன்", "பேத்தி", "வாரிசு",
    "కొడుక", "కూతుర", "అబ్బాయ", "అమ్మాయ", "మగబిడ్డ", "మగ", "ఆడపిల్ల", "ఆడబిడ్డ", "పుత్ర", "లింగ", "మనవడు", "మనవరాలు", "మనుమడు", "వారసుడు",
    "ಮಗ", "ಮಗಳ", "ಗಂಡ", "ಹೆಣ್ಣ", "ಪುತ್ರ", "ಲಿಂಗ", "ಮೊಮ್ಮಗ", "ವಾರಸುದಾರ",
    "മകന", "മകൻ", "മകള", "മകൾ", "ആൺ", "ആണ", "പെൺ", "പെണ്ണ", "പുത്ര", "ലിംഗ", "കൊച്ചുമകൻ", "കൊച്ചുമകൾ", "അനന്തരാവകാശി", "അവകാശി"];
  const NAT_EXACT = ["লেক", "लेक", "लेकी", "लेकीला", "জী", "জীৰ", "नात", "नातीण", "ஆணா", "ஆணாக", "பெண்ணா", "பெண்ணாக", "ఆడ", "ಗಂಡೇ", "ಹೆಣ್ಣೇ"];
  // tokens that start like a sex word but are something else: Kannada "child"/"husband", Tamil "year", Telugu "play/men", Malayalam copula "is"
  const NOT_SEX = /^(ಮಗು|ಮಗೂ|ಮಗುವ|ಮಗ್ಗ|ಗಂಡನ|ಗಂಡನಿ|ಗಂಡನ್ನು|ಗಂಡನಿಗೆ|ಗಂಡಸ|ஆண்டு|ஆண்ட|ஆண்டவ|ஆண்டி|ஆண்கள்|ఆడు|ఆడి|ఆడా|మగవా|మగాడ|ആണ്$|ആണോ$|ആണെ|ആണല്ലോ|ആണു$)/u;
  const IDIOM = new RegExp([
    "descendants?", "carry (on )?(our|the|my|his) (family )?(line|name|lineage)", "continue (our|the|my) (family )?(line|lineage|name)", "vanshaj", "वंशज", "বংশধর", "বংশধৰ", "ବଂଶଧର", "వంశాంకుర", "ವಂಶಸ್ಥ", "പിൻഗാമി", "வம்சாவளி", "khandan ka chirag", "khandan ka chiraag", "khaandaan ka chirag", "khandaan ka chiraag", "khandan ka waris", "खानदान का चिराग", "ख़ानदान का चिराग", "خاندان کا چراغ", "kul ka chirag", "kul ka deepak", "kuldeepak", "kul deepak", "vansh ka chirag", "vansh aage", "vansh chalane", "vansh chalaye", "वंश चलाने", "वंश चलाए", "वंश को आगे", "नाम चलाने वाला", "naam chalane wala", "vansh badh", "vansh chal", "vanshoddharak", "putra prapti", "putra praapti", "putra yog", "putra-yog", "(beta|bete|putra) (ka|ke) yog", "(बेटे|बेटा|पुत्र) (का|के) योग", "putra ratna", "putra santan", "putra santhan", "kanya santan",
    "nariyana aulad", "nareena aulad", "narina aulad", "raja beta", "ghar mein lakshmi", "lakshmi aayegi", "lakshmi ya", "baby boy", "baby girl", "boy baby", "girl baby", "male child", "female child", "male baby", "female baby", "male heir", "male issue", "son and heir",
    "baby'?s (sex|gender)", "(sex|gender) of (the|my|our|this|her|his) (baby|child|kid|foetus|fetus)", "prince or (a )?princess", "princess or (a )?prince", "boy or (a )?girl", "girl or (a )?boy", "son or (a )?daughter", "daughter or (a )?son",
    "pink or blue", "blue or pink", "(have|get|give \\w+) (a |an )?(baby|little|younger|new) (brother|sister)", "chhota bhai aayega", "chhoti behen aayegi", "छोटा भाई आएगा", "छोटी बहन आएगी",
    "कुल का चिराग", "कुल का दीपक", "कुलदीपक", "कुल दीपक", "वंश का चिराग", "वंश आगे", "वंश बढ़", "वंश चलेगा", "पुत्र प्राप्ति", "पुत्र-प्राप्ति", "पुत्रप्राप्ति", "पुत्र योग", "पुत्र-योग", "पुत्र रत्न", "पुत्ररत्न", "पुत्र संतान", "कन्या संतान", "राजा बेटा", "घर में लक्ष्मी",
    "वंशाचा दिवा", "कुळदीपक", "पुत्रप्राप्ती", "पुत्र प्राप्ती", "वंश धान्ने", "वंश थाम्ने",
    "বংশের প্রদীপ", "বংশের বাতি", "বংশৰ চাকি", "বংশৰ বন্তি", "পুত্রসন্তান", "পুত্র সন্তান", "কন্যাসন্তান", "কন্যা সন্তান", "পুত্ৰ সন্তান",
    "કુળદીપક", "કુળ દીપક", "પુત્ર પ્રાપ્તિ", "પુત્રપ્રાપ્તિ", "વંશ આગળ", "ઘરનો દીવો",
    "ਕੁਲ ਦਾ ਚਿਰਾਗ", "ਕੁਲ ਦਾ ਦੀਵਾ", "ਪੁੱਤਰ ਪ੍ਰਾਪਤੀ", "ਵੰਸ਼ ਅੱਗੇ", "ਵੰਸ਼ ਚੱਲ",
    "نرینہ اولاد", "نسل آگے", "خاندان کا چراغ", "بیٹا دے", "بیٹا عطا",
    "ବଂଶର ପ୍ରଦୀପ", "ପୁତ୍ର ସନ୍ତାନ", "କନ୍ୟା ସନ୍ତାନ", "ବଂଶ ଆଗକୁ",
    "புத்திர பாக்கியம்", "ஆண் வாரிசு", "ஆண் குழந்தை", "பெண் குழந்தை", "ஆணா பெண்ணா", "பெண்ணா ஆணா", "வம்ச விருத்தி",
    "వంశోద్ధారక", "మగ బిడ్డ", "ఆడ బిడ్డ", "మగ సంతానం", "ఆడ సంతానం", "పుత్ర సంతాన", "మగబిడ్డ", "ఆడపిల్ల పుడ", "వంశాన్ని నిలబెట్ట",
    "ವಂಶೋದ್ಧಾರಕ", "ಪುತ್ರ ಸಂತಾನ", "ಗಂಡು ಮಗು", "ಹೆಣ್ಣು ಮಗು", "ಗಂಡೋ ಹೆಣ್ಣೋ", "ಹೆಣ್ಣೋ ಗಂಡೋ",
    "പുത്രഭാഗ്യ", "പുത്ര ഭാഗ്യ", "ആൺകുഞ്ഞ", "പെൺകുഞ്ഞ", "ആണോ പെണ്ണോ", "പെണ്ണോ ആണോ", "അനന്തരാവകാശിയായ",
    "पुत्र प्राप्ति हुन्छ", "छोरा कि छोरी", "छोरी कि छोरा"].join("|"), "iu");
  // Layer 3: purpose phrasing: "for a son", "to have a girl", "beta hone ke liye", "मुलासाठी", "পুত্রের জন্য"...
  const PURPOSE = new RegExp([
    "\\b(for|to (have|get|conceive|bear|be blessed with)|wanting|want|wish for|praying for|desire for|hoping for|chance of|chances of|odds of|increase (the )?chances? of) (a |an |another )?(son|boy|daughter|girl|male|female|baby (boy|girl))s?\\b",
    "\\b(beta|beti|ladka|ladki|putra|putri|munda|kudi|bete|santan) (hone|paane|pane|paida hone|ke|ki|prapti) ?(ke liye|ka|ki|ke|ke upay|ka upay|ka tarika|ke tarike|ka mantra|ka vrat|ka lucky|wala|vala)\\b",
    "(बेटा|बेटी|लड़का|लड़की|पुत्र|पुत्री|बेटे|पुत्र प्राप्ति|पुत्रप्राप्ति)\\s*(होने|पाने|पैदा होने|प्राप्ति)?\\s*(के लिए|के लिये|हेतु|का उपाय|के उपाय|का व्रत|का मंत्र|का तरीका|का लकी|वाला)",
    "(मुलगा|मुलगी|पुत्र)\\s*(होण्यासाठी|व्हावा|व्हावी|होण्याचे|होण्याचा)|(मुला|मुली|पुत्रा)साठी",
    "(छोरा|छोरी|पुत्र)\\s*(हुनका लागि|पाउन|को लागि|पाउनका लागि)",
    "(ছেলে|মেয়ে|পুত্র|কন্যা)\\s*(হওয়ার|পাওয়ার)?\\s*(জন্য|জন্যে)|(পুত্ৰ|ল'ৰা|ছোৱালী)\\s*(হোৱাৰ|পোৱাৰ)?\\s*(বাবে)",
    "(દીકરો|દીકરી|પુત્ર)\\s*(થવા|મેળવવા)?\\s*(માટે|માટેનો|માટેના)",
    "(ਪੁੱਤਰ|ਪੁੱਤ|ਮੁੰਡਾ|ਕੁੜੀ|ਧੀ)\\s*(ਹੋਣ|ਪਾਉਣ)?\\s*(ਲਈ|ਵਾਸਤੇ)",
    "(بیٹا|بیٹی|لڑکا|لڑکی|بیٹے|نرینہ اولاد)\\s*(ہونے|پانے)?\\s*(کے لیے|کے لئے|کا وظیفہ|کی دعا|کا عمل)",
    "(ପୁଅ|ଝିଅ|ପୁତ୍ର)\\s*(ହେବା|ପାଇବା)?\\s*(ପାଇଁ|ନିମନ୍ତେ)",
    "(மகன்|ஆண் குழந்தை|பெண் குழந்தை|மகள்)\\s*(பிறக்க|பெற|வேண்டி)",
    "(కొడుకు|మగబిడ్డ|కూతురు|ఆడపిల్ల)\\s*(పుట్టడానికి|కోసం|కావాలంటే|పుట్టాలంటే)",
    "(ಮಗ|ಗಂಡು ಮಗು|ಹೆಣ್ಣು ಮಗು|ಮಗಳು)\\s*(ಹುಟ್ಟಲು|ಪಡೆಯಲು|ಗಾಗಿ|ಆಗಲು)|ಮಗನಿಗಾಗಿ|ಮಗನಿಗೋಸ್ಕರ",
    "(മകൻ|ആൺകുഞ്ഞ്|പെൺകുഞ്ഞ്|മകൾ)\\s*(ജനിക്കാൻ|ഉണ്ടാകാൻ|ലഭിക്കാൻ|വേണ്ടി)"].join("|"), "iu");
  // "<sex word> will be born / will come / will happen"
  const BIRTH = /^(hoga|hogi|hoge|hogaa|hoyega|hoyegi|hovega|hovegi|aayega|aayegi|ayega|ayegi|aaega|aaegi|paida|janmega|janmegi|hoke|hone|chahiye|chaiye|होगा|होगी|होंगे|होगे|होके|होकर|होने|आएगा|आएगी|आयेगा|आयेगी|मिलेगा|मिलेगी|जन्मेगा|चाहिए|होईल|होणार|येईल|असेल|व्हावा|हवा|हवी|हुन्छ|हुनेछ|जन्मिन्छ|जन्मिन्छन्|आउँछ|চাই|হবে|হ'ব|হ’ব|হব|আসবে|আহিব|জন্মাবে|লাগে|થશે|આવશે|હશે|જન્મશે|જોઈએ|ਹੋਵੇਗਾ|ਹੋਵੇਗੀ|ਹੋਊ|ਆਵੇਗਾ|ਜੰਮੇਗਾ|ਚਾਹੀਦਾ|ہوگا|ہوگی|ہو|آئے|آئےگا|دے|چاہیے|ହେବ|ଆସିବ|ଦରକାର|(?:ଜନ୍ମ|জন্ম|जन्म|ਜਨਮ|જન્મ)(?!ଦିନ|দিন|दिन|तिथि|कुंडली|ਦਿਨ|દિવસ|દિન)|பிறக்|பிறப்|வருவா|வேண்டும்|పుడ|పుట్ట|కలుగు|అవుతా|కావాలి|ಹುಟ್ಟ|ಆಗುತ್ತ|ಬೇಕು|ജനിക്ക|ഉണ്ടാകു|ആയിരിക്കു|ആകു|വേണം|born|wanted)/iu;
  const YOGMOM = /^(yog|yoga|योग|सम्भावना|संभावना|शक्यता|chance|chances|possibility|আই|আই হ|মা|মায়ের|आई|माँ|मां|माता|ਮਾਂ|ماں|મા|ମା|அம்மா|అమ్మ|ಅಮ್ಮ|അമ്മ|mother|mom|maa|aai|pita|पिता|बाबा|father|dad|यग)$/u;
  const PARTICLE = /^(ही|hi|ਹੀ|જ|ই|তো|ٹو|ہی|ତ|ஆ|తో|ki|kya|क्या|ਕੀ)$/u;
  const POSS = new Set(["my", "our", "his", "her", "their", "mera", "meri", "mere", "hamara", "hamari", "hamare", "apne", "apni", "apna", "मेरा", "मेरी", "मेरे", "हमारा", "हमारी", "हमारे", "अपने", "अपनी", "अपना", "माझा", "माझी", "माझ्या", "माझे", "आमचा", "आमची", "आमच्या", "मेरो", "हाम्रो", "आफ्नो",
    "আমার", "আমাদের", "মোৰ", "আমাৰ", "নিজৰ", "મારો", "મારી", "મારા", "અમારો", "અમારી", "અમારા", "ਮੇਰਾ", "ਮੇਰੀ", "ਮੇਰੇ", "ਸਾਡਾ", "ਸਾਡੀ", "ਸਾਡੇ", "میرا", "میری", "میرے", "ہمارا", "ہماری", "ہمارے", "اپنے",
    "ମୋର", "ମୋ", "ଆମର", "ଆମ", "என்", "என்னுடைய", "எங்கள்", "నా", "మా", "ನನ್ನ", "ನಮ್ಮ", "എന്റെ", "ഞങ്ങളുടെ"]);
  const ADJ = new Set(["elder", "eldest", "younger", "youngest", "older", "little", "big", "small", "only", "bade", "bada", "badi", "chhote", "chhota", "chhoti", "बड़े", "बड़ा", "बड़ी", "छोटे", "छोटा", "छोटी", "मोठ्या", "लहान", "धाकट्या", "জ্যেষ্ঠ", "ছোট", "বড়", "ডাঙৰ", "সৰু", "મોટા", "નાના", "ਵੱਡੇ", "ਛੋਟੇ", "بڑے", "چھوٹے", "ବଡ଼", "ସାନ", "மூத்த", "இளைய", "పెద్ద", "చిన్న", "ಹಿರಿಯ", "ಕಿರಿಯ", "മൂത്ത", "ഇളയ"]);
  const SEXNOUN = /^(male|female|xy|xx|sex|gender|ling|jins|pink|blue|लिंग|लिङ्ग|লিঙ্গ|লিংগ|જાતિ|લિંગ|ਲਿੰਗ|جنس|ଲିଙ୍ଗ|பாலின|లింగ|ಲಿಂಗ|ലിംഗ|गुलाबी|नीला)$/u;
  const MALE = /^(munna|munnu|lalla|maga|makan|kodaku|paiyan|payyan|kaka|khoka|lad|xy|मुन्ना|लल्ला|খোকা|ਕਾਕਾ|منا|பையன|ஆண்பிள்ளை|ಹುಡುಗ$|മോൻ|മോന|బాబు|बेटे|लड़कों|मुलगे|वंशज|उत्तराधिकारी|ਮੁੰਡੇ|ਪੁੱਤਰਾਂ|لڑکے|بیٹوں|বংশধর|বংশধৰ|ছেলেরা|ବଂଶଧର|ପୁଅମାନେ|வம்சாவளி|మనవడ|వంశాంకుర|ವಂಶಸ್ಥ|ചെറുമകൻ|ചെറുമകന|പിൻഗാമി|boi|lardka|larkaa|betay|बेटे|नाति|boy|son|male|prince|beta|betaa|ladka|ladkaa|larka|laraka|ladke|putra|putr|puttar|munda|mundaa|chhora|chora|dikro|chele|chhele|mulga|grandson|pota|potaa|naati|nati|pautra|dohta|nawasa|heirs?|waris|varis|varas|vaaras|varasdar|uttaradhikari|kuldeepak|kuldipak|manavadu|mommaga|perakutti|peran|koduku|abbayi|magan|makan|gandu|blue|बेटा|लड़का|लडका|लड़के|पुत्र|मुलगा|छोरा|पोता|नाती|नातू|पौत्र|वारिस|वारस|कुलदीपक|नवासा|राजकुमार|नीला|ছেলে|পুত্র|পুত্ৰ|ল'ৰা|লৰা|ল’ৰা|নাতি|ওয়ারিশ|উত্তরাধিকারী|દીકરો|દીકરા|છોકરો|પુત્ર|પૌત્ર|વારસ|કુળદીપક|ਪੁੱਤਰ|ਪੁੱਤ|ਮੁੰਡਾ|ਪੋਤਾ|ਵਾਰਸ|بیٹا|بیٹے|لڑکا|پوتا|نواسہ|وارث|نرینہ|ପୁଅ|ପୁତ୍ର|ନାତି|ଉତ୍ତରାଧିକାରୀ|மகன|ஆண்|ஆணா|பேரன்|வாரிசு|కొడుక|అబ్బాయ|మగ|మనవడు|మనుమడు|వారసుడు|ಮಗ$|ಮಗನ|ಗಂಡ|ಮೊಮ್ಮಗ|ವಾರಸುದಾರ|മകന|മകൻ|ആൺ|ആണ|കൊച്ചുമകൻ|അനന്തരാവകാശി|അവകാശി)/iu;
  function sexToken(t) {
    const w = t.replace(/^[^\p{L}\p{M}']+|[^\p{L}\p{M}']+$/gu, "");
    if (!w) return null;
    if (/^[a-z']+$/.test(w)) {   // plural, 's and stretched letters ("girrrl", "betaaa") all reduce to the dictionary form
      const b = w.replace(/'s$|s'$/, "").replace(/(?<=[a-z]{3})s$/, ""), c = b.replace(/([a-z])\1+/g, "$1");
      return LAT.includes(b) ? b : LAT.includes(w) ? w : LATC.has(c) && !["soon", "soonn", "sooner", "boo", "booo"].includes(b) ? LATC.get(c) : null;   // "soon" is not "son"
    }
    if (NOT_SEX.test(w)) return null;
    if (NAT_EXACT.includes(w)) return w;
    let best = null; for (const n of NAT) if (w.startsWith(n) && (!best || n.length > best.length)) best = n;   // the longest stem: ಮಗಳು is ಮಗಳ, not ಮಗ
    if (best) return best;
    return null;
  }
  // "beti ki", "बेटे का", "ਪੁੱਤਰ ਦੀ", "بیٹے کی" / "ছেলের", "मुलाची", "દીકરાની", "ପୁଅର", "மகனின்", "ಮಗನಿಗೆ", "മകന്റെ": someone who is already born
  const GEN_NEXT = /^(ki|ka|ke|kee|ko|की|का|के|को|ची|चा|चे|च्या|चं|ला|ਦੀ|ਦਾ|ਦੇ|ਨੂੰ|کی|کا|کے|کو|ને|નો|ની|નું|ના|लाई)$/u;
  // the letters after the sex-word stem: a genitive/dative ending means "of/to my son", someone already born
  const GEN_REST = new RegExp("^(?:" + ["ికి", "ికు", "ిని", "ுக்கு", "ின்னுடைய", "னுக்கு", "ளுக்கு", "ाच्या", "ിന്റെ", "ுக்கு", "च्या", "ನಿಂದ", "ીનું", "ಳಿಗೆ", "ക്ക്", "ನಿಗೆ", "ଙ୍କର", "க்கு", "ுடைய", "ന്റെ", "ાનું", "ின்", "ाचं", "ుకు", "ിന്", "ીને", "ाचा", "ीचं", "નું", "ાનો", "ીનો", "ीचा", "ાને", "ीची", "ીની", "ाला", "ीला", "ाची", "ుకి", "ाचे", "ുകി", "ાની", "ുടെ", "ીના", "ଙ୍କ", "लाई", "ાના", "चा", "ला", "s'", "ের", "ని", "’s", "चं", "ची", "ને", "'s", "कि", "ின", "ની", "కు", "को", "ାର", "కి", "નો", "ির", "ના", "ने", "चे", "ന്", "ৰ", "ର", "ಳ", "র", "ನ"].join("|") + ")$", "u");
  const DATIVE = /^(ko|को|ला|ਨੂੰ|کو|ને|लाई|কে|ক|କୁ)$/u;
  // a heir/lineage word is never an existing relative's life matter
  const HEIRW = /^(heirs?|waris|varis|varas|vaaras|varasdar|uttaradhikari|वारिस|वारस|उत्तराधिकारी|वंशज|ওয়ারিশ|উত্তরাধিকারী|উত্তৰাধিকাৰী|বংশধর|বংশধৰ|વારસ|ਵਾਰਸ|وارث|ଉତ୍ତରାଧିକାରୀ|ବଂଶଧର|வாரிசு|వారసుడు|ವಾರಸುದಾರ|അനന്തരാവകാശി|അവകാശി|പിൻഗാമി)/u;
  const LIFE_WORD = w => !!w && (LIFE_LAT.test(w) || LIFE_NAT.some(x => w.startsWith(x)));
  const tokensOf = s => s.split(/[\s,.;:!?？।۔؟"“”()\-–—/]+/u).filter(Boolean);
  const PURPOSE_NEXT = /^(ke liye|ki khatir|ke vaaste|के लिए|के लिये|की ख़ातिर|की खातिर|हेतु|साठी|का लागि|लागि|জন্য|জন্যে|বাবে|লাগি|માટે|ਲਈ|ਵਾਸਤੇ|کے لیے|کے لئے|کی خاطر|ପାଇଁ|ନିମନ୍ତେ|க்காக|காக|కోసం|ಗಾಗಿ|ಸಲುವಾಗಿ|ಕ್ಕಾಗಿ|വേണ്ടി|ക്കായി|for)$/u;
  const HOME = /\b(come home|coming home|home|ghar mein|ghar me|ghar aay\w*|ghar par)\b|घर में|घर आ|घरी|घरमा|ঘরে|ঘৰলৈ|ઘરમાં|ਘਰ |گھر میں|گھر آ|ଘରକୁ|வீட்டுக்கு|ఇంటికి|ಮನೆಗೆ|വീട്ടിൽ|വീട്ടിലേക്ക്/iu;
  const PREG = /\b(due|expecting|months? (pregnant|along|gone)|weeks? pregnant|trimester|scan|sonologist|sonography|ultrasound|doctor (won'?t|will not|didn'?t|did not|doesn'?t) (tell|say|reveal)|won'?t tell|mother of|father of|parents of|mahine se|mahine ki|mahine ka|pet se)\b|महीने से|महीने की|पेट से|डॉक्टर नहीं बता|नहीं बता रहे|की माँ|की मां|महिन्यांची|মাসের|মাহৰ|મહિનાની|ਮਹੀਨੇ|مہینے|ମାସର|மாசம்|నెలలు|ತಿಂಗಳು|മാസം/iu;
  const CUE = /\b(come|comes|coming|arrive|arriving|arrival|due|expecting|months? (pregnant|along|gone)|weeks? pregnant|trimester|scan|sonologist|sonography|ultrasound|doctor (won'?t|will not|didn'?t|did not|doesn'?t) (tell|say|reveal)|won'?t tell|mother of|father of|parents of|aana|aayega|aayegi|aaega|aaegi|ayega|ayegi|aaye|aaye ga|aayenge|mahine se|mahine ki|mahine ka|pet se|ghar mein|ghar me)\b/i;
  const CUE_NAT = ["आएगा", "आएगी", "आयेगा", "आयेगी", "आएंगे", "आए", "घर में", "महीने से", "महीने की", "महीने का", "पेट से", "डॉक्टर नहीं बता", "नहीं बता रहे", "की माँ", "की मां", "येईल", "येणार", "घरी", "महिन्यांची", "आउँछ", "आउने", "देला", "घरमा",
    "আসবে", "আসছে", "ঘরে", "আহিব", "ঘৰলৈ", "মাসের", "মাহৰ", "আসব", "આવશે", "ઘરમાં", "મહિનાની", "ਆਵੇਗਾ", "ਆਵੇਗੀ", "ਘਰ ", "ਮਹੀਨੇ", "آئے", "آئے گا", "آئے گی", "گھر میں", "مہینے", "ଆସିବ", "ଘରକୁ", "ମାସର",
    "வருவா", "வருமா", "வீட்டுக்கு", "மாசம்", "மாதம்", "వస్తా", "వస్తుం", "ఇంటికి", "నెలలు", "ಬರುತ್ತಾ", "ಬರುತ್ತಾಳ", "ಮನೆಗೆ", "ತಿಂಗಳು", "വരുമോ", "വരും", "വീട്ടിൽ", "മാസം"];
  const MARRY = /\b(shaadi|shadi|marriage|marry|married|wedding|vivah|rishta|rishtey|match|matrimony|bride|groom|life ?partner|spouse|girlfriend|boyfriend|propose|love|date|dating|kundli milan)\b/i;
  const MARRY_NAT = ["शादी", "विवाह", "रिश्ता", "लग्न", "स्थळ", "बिहे", "বিয়ে", "বিয়া", "લગ્ન", "ਵਿਆਹ", "شادی", "رشتہ", "ବାହାଘର", "ବିବାହ", "கல்யாண", "திருமண", "పెళ్లి", "వివాహ", "ಮದುವೆ", "ವಿವಾಹ", "കല്യാണ", "വിവാഹ"];
  function analyse(q) {
    const s = norm(q), toks = tokensOf(s);
    const core = CORE_LAT.test(s) || CORE_NAT.some(w => s.includes(w));
    const off = core || OFF_LAT.test(s) || OFF_NAT.some(w => s.includes(w));
    const weak = WEAK_LAT.test(s) || WEAK_NAT.some(w => s.includes(w));
    const help = HELP_LAT.test(s) || HELP_NAT.some(w => s.includes(w));
    const life = LIFE_LAT.test(s) || LIFE_NAT.some(w => (" " + s).includes(w));   // " বর " (groom) must not match inside "নম্বর"
    const free = [], all = [];
    toks.forEach((t, i) => {
      const sw = sexToken(t); if (!sw) return;
      const noun0 = SEXNOUN.test(sw);
      let j = i - 1; while (j >= 0 && (ADJ.has(toks[j]) || /^\d+$/.test(toks[j]) || /^(year|years|yr|yrs|month|months|old|aged|teenage|teen|grown|adult|saal|sal|baras|वर्षीय|साल|वर्ष|वर्षांचा|বছরের|বছৰীয়া|વર્ષનો|ਸਾਲ|سالہ|ବର୍ଷର|வயது|ఏళ్ల|ವರ್ಷದ|വയസ്സുള്ള)$/.test(toks[j]))) j--;   // "my 17 year old son"
      const nxt = toks[i + 1] || "";
      const bare = t.replace(/^[^\p{L}\p{M}']+|[^\p{L}\p{M}']+$/gu, ""), rest = /^[a-z']+$/.test(bare) ? (bare.match(/'s$|s'$/) || [""])[0] : bare.startsWith(sw) ? bare.slice(sw.length) : "";
      const noun = SEXNOUN.test(sw);
      const prevGen = !noun0 && j >= 0 && (/'s$|’s$/.test(toks[j]) || (GEN_NEXT.test(toks[j]) && !DATIVE.test(toks[j])));   // "baby's gender" is not a relative
      const possessed = (j >= 0 && POSS.has(toks[j])) || prevGen || (!noun && GEN_NEXT.test(nxt)) || (!!rest && GEN_REST.test(rest)) || LIFE_WORD(nxt);
      let k = i + 1; while (k < toks.length && PARTICLE.test(toks[k])) k++;
      const born = k < toks.length && (BIRTH.test(toks[k]) || YOGMOM.test(toks[k]));
      const after2 = (toks[i + 1] || "") + " " + (toks[i + 2] || ""), after1 = toks[i + 1] || "";
      const purpose = !(j >= 0 && POSS.has(toks[j])) && (PURPOSE_NEXT.test(after1) || PURPOSE_NEXT.test(after2.trim()) || PURPOSE_NEXT.test(toks[i + 2] || ""));
      const heir = HEIRW.test(sw);
      all.push({ sw, born: born || (heir && !(j >= 0 && POSS.has(toks[j]) && LIFE_WORD(nxt))), purpose, possessed: possessed && !heir, pron: j >= 0 && POSS.has(toks[j]), male: MALE.test(sw), noun });
      if (born || purpose || !possessed) free.push({ sw, born, purpose, male: MALE.test(sw), noun });
    });
    return { s, core, off, weak, help, life, marry: MARRY.test(s) || MARRY_NAT.some(w => s.includes(w)), cue: CUE.test(s) || CUE_NAT.some(w => s.includes(w)), all, free, idiom: IDIOM.test(s), purpose: PURPOSE.test(s) };
  }
  // Round 4g: fail closed on ANY sex / gendered-offspring signal. The only way through is narrow:
  //  (a) an existing relative's life matter: every sex word is in a possessive/genitive form ("my son's", "beti ki", "मुलाच्या",
  //      "అబ్బాయికి") and a life topic is named (job, promotion, business, marriage, health, studies, admission, exam, travel, property, court),
  //      with no pregnancy / birth / "coming home" / due-date cue; or
  //  (b) a marriage-partner search ("achhi ladki kab milegi shaadi ke liye") with no pregnancy/birth cue and no children word.
  //  male/female, sex/gender, XY and pink/blue count only next to children or pregnancy words. Anything else with a sex word is declined.
  function childSex(q) {
    const a = analyse(q), s = a.s;
    if (!s.trim()) return false;
    if (a.idiom || a.purpose) return true;
    if (/\b(is|will) (it|this|that) (be )?(a )?(boy|girl|son|daughter|prince|princess|lad|lass)\b/i.test(s)) return true;
    if (/\b(if|whether) (it'?s|it is|it will be|the baby is|the baby will be|the child is|she is carrying|she's carrying) (a |an )?(boy|girl|son|daughter|male|female)\b/i.test(s)) return true;
    const kidCtx = a.core || a.off || a.weak;
    const sig = a.all.filter(x => !x.noun || kidCtx);
    if (!sig.length) return false;
    if (sig.some(x => x.born)) return true;                                  // "beta hoga", "ছেলে হবে"
    if (sig.some(x => x.male && !x.noun && !x.pron) && sig.some(x => !x.male && !x.noun && !x.pron)) return true;   // "नातू की नात?", "munna ya munni"
    const preg = PREG.test(s), home = HOME.test(s);
    // an existing relative: every sex word possessive/genitive ("my son's", "beti ki", "అబ్బాయికి"), with a life topic
    // or about that relative's own pregnancy/children (sex-neutral answer), and no due-date/scan/"doctor won't tell" or "coming home" cue
    if (sig.every(x => x.possessed) && !preg && !home && (a.life || a.core || a.off || a.weak)) return false;
    // a marriage-partner search ("shaadi ke liye achhi ladki", "ladke ke liye rishta kab aayega") with no children or pregnancy word
    if (a.marry && !a.core && !a.off && !preg && !a.weak) return false;
    if (sig.some(x => x.purpose) && !a.life) return true;                   // "ladke ke liye kaunsa mahina", "ছেলের জন্য লাকি নম্বর"
    if (a.core || a.weak || a.cue || preg || home) return true;               // "due in March… a lad?", "ghar mein gudiya aayegi?"
    if (sig.every(x => x.possessed) && a.life) return false;
    return true;                                                             // ambiguous: decline
  }
  // Layer 1: any children / pregnancy / offspring / lineage topic (with or without a sex word)
  function childrenTopic(q) {   // "will my grandson pass his exam?" or "my children's studies" stay life matters; pregnancy/conception never do
    const a = analyse(q); return a.core || a.idiom || (a.off && !a.life);
  }
  return { childSex, childrenTopic, norm, analyse };
})();
function stripNames(q) {
  let s = String(q || "");
  try { if (typeof profiles === "function") for (const p of profiles()) for (const w of String(p.name || "").split(/\s+/)) if (w.length >= 3) s = s.replace(new RegExp(`(^|[^\\p{L}])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}])`, "giu"), "$1 "); } catch (e) {}
  return s;
}
function childSexQ(q) { return CS.childSex(stripNames(q)); }
function childrenQ(q) { return CS.childrenTopic(stripNames(q)); }
const GENDER_Q = /(son or (a )?daughter|boy or (a )?girl|daughter or (a )?son|girl or (a )?boy|gender of (my|the) baby|beta hoga ya beti|ladka hoga ya ladki|ladka ya ladki|बेटा होगा या बेटी|लड़का होगा या लड़की|लड़का या लड़की|बेटा या बेटी)/i;
const LUCKY_Q = /(lucky (day|colou?r|number)|shubh din|शुभ दिन|lucky din|भाग्यशाली दिन)/i;
const HOW_Q = /\b(how (will|is|are|would|does)|how's|kaisa|kaisi|kaise|kesa|kesi|kaisaa)\b|कैसा|कैसी|कैसे|कसे|कसा|कशी|कसं|কেমন|எப்படி|ఎలా|ಹೇಗೆ|ഹേഗെ|എങ്ങനെ|कस्तो|કેવું|કેવી|કેવો|ਕਿਵੇਂ|ਕਿਹੋ ਜਿਹ|କେମିତି|کیسا|کیسی|کیسے/i;
const SATURN_Q = /(saturn|shani|sade ?sati|sadhe ?sati|शनि|साढ़े ?साती|साढ़ेसाती|ஏழரை|சனி|শনি|শনির|శని|ಶನಿ|ശനി|શનિ|ਸ਼ਨੀ|ଶନି|زحل)/i;
const THAT_DAY = /^(એ દિવસનો|એ દિવસનું|એ દિવસે|اس روز|that day'?s|that day’s|on that day,?|us roz ka|us roz ki|us din ka|us din ki|उस रोज़ का|उस रोज़ की|उस रोज|उस दिन का|उस दिन की|त्या दिवशीचा|त्या दिवशीची|त्या दिवसाचा|त्या दिवसाची|त्यो दिनको|সেদিনের|সেইদিনাৰ|সেই দিনৰ|તે દિવસનો|તે દિવસનું|ਉਸ ਦਿਨ ਦਾ|ਉਸ ਦਿਨ ਦੀ|اس دن کا|اس دن کی|اس روز کا|ସେଦିନର|அன்றைய|அன்னிக்கு|ఆ రోజు|ఆ రోజున|ಆ ದಿನದ|ಅಂದಿನ|അന്നത്തെ|അന്നേ ദിവസത്തെ|அன்னிக்கு|அன்னைக்கு|that day|on that day|then|us din|ush din|us roz|उस दिन|उसी दिन|उस रोज़|त्या दिवशी|त्यादिवशी|त्यो दिन|त्यस दिन|সেদিন|সেই দিন|সেইদিনা|সেই দিনা|તે દિવસે|એ દિવસે|ਉਸ ਦਿਨ|اس دن|اُس دن|ସେଦିନ|ସେହି ଦିନ|அன்று|அந்த நாள்|அந்த நாளில்|ఆ రోజు|ఆరోజు|ಆ ದಿನ|ಅಂದು|അന്ന്|ആ ദിവസം)(?![\p{L}\p{M}])[\s,]*/iu;
const THAT_DAY_END = /[\s,]*(that day|on that day|us din|उस दिन|उस रोज़?|त्या दिवशी|त्यो दिन|সেদিন|সেইদিনা|તે દિવસે|એ દિવસે|ਉਸ ਦਿਨ|اس دن|اس روز|ସେଦିନ|அன்று|ఆ రోజు|ಆ ದಿನ|അന്ന്)\s*([?？!.।؟]*)$/iu;
const dropThatDay = q => String(q).trim().replace(/^(and|aur|और|ani|आणि|আর|আৰু|અને|ਅਤੇ|اور|ଆଉ|மற்றும்|మరి|ಮತ್ತೆ|പിന്നെ)\s+/iu, "").replace(THAT_DAY, "").replace(THAT_DAY_END, "$2").replace(/^(the )?exact /i, "what ");
function followKind(q, ctx) {
  if (!ctx) return null;
  const t = dropThatDay(q) || q.trim(), w = t.split(/\s+/).length;
  if (w > 6 || topicOf(t) || nativeTopic(t) || parseWhen(t)) return null;
  if (FOLLOW.dasha.test(t)) return "dasha";
  if (FOLLOW.remedy.test(t)) return "remedy";
  if (FOLLOW.why.test(t)) return "why";
  if (FOLLOW.when.test(t)) return "when";
  return null;
}

const QUALITY_Q = /\b(happy|happiness|survive|harmony|quality|peaceful|work out|khush|khushi|sukhi|achhi chalegi|tikegi|tikega)\b|सुखी|खुश|ख़ुश|अच्छी चलेगी|टिकेगी|आनंदी|सुखी|খুশি|সুখী|সুখের|சந்தோஷ|மகிழ்ச்சி|సంతోష|ಸಂತೋಷ|സന്തോഷ|સુખી|ખુશ|ਖੁਸ਼|ਸੁਖੀ|ସୁଖୀ|ଖୁସି|خوش|کامیاب/iu;
const NOW_Q = /\b(now|right now|currently|at present|these days|(?:is )?(?:this|it) (?:a )?(?:good|right) time|soon|abhi|jaldi|abhi|abhi ke abhi|filhaal|aajkal)\b|अभी|जल्दी|जल्द|लवकर|छिट्टै|শীঘ্র|শিগগির|তাড়াতাড়ি|সোনকালে|சீக்கிரம்|త్వరలో|ಬೇಗ|പെട്ടെന്ന്|ഉടൻ|જલ્દી|ਜਲਦੀ|ଶୀଘ୍ର|جلد|فِلحال|فی الحال|फ़िलहाल|फिलहाल|आजकल|आत्ता|सध्या|अहिले|এখন|এতিয়া|இப்போ|இப்போது|ఇప్పుడు|ಈಗ|ഇപ്പോൾ|હમણાં|અત્યારે|ਹੁਣ|ਹਾਲੇ|ଏବେ|ابھی|آج کل/iu;
const THIS_YEAR_Q = /(this year|is saal|iss saal|is varsh|इस साल|इस वर्ष|इसी साल|या वर्षी|यंदा|यो वर्ष|यस वर्ष|এই বছর|এই বছৰ|এইবছৰ|இந்த ஆண்டு|இந்த வருஷம்|இந்த வருடம்|ఈ సంవత్సరం|ఈ ఏడాది|ಈ ವರ್ಷ|ഈ വർഷം|ee varsham|આ વર્ષે|આ વર્ષ|ਇਸ ਸਾਲ|ଏହି ବର୍ଷ|ଚଳିତ ବର୍ଷ|اس سال|امسال)/iu;
const NEXT_YEAR_Q = /(next year|agle saal|agle varsh|अगले साल|अगले वर्ष|पुढच्या वर्षी|पुढील वर्षी|अर्को वर्ष|আগামী বছর|পরের বছর|অহা বছৰ|அடுத்த ஆண்டு|அடுத்த வருஷம்|அடுத்த வருடம்|వచ్చే సంవత్సరం|వచ్చే ఏడాది|ಮುಂದಿನ ವರ್ಷ|അടുത്ത വർഷം|આવતા વર્ષે|આવતા વર્ષ|ਅਗਲੇ ਸਾਲ|ଆସନ୍ତା ବର୍ଷ|اگلے سال)/iu;
// the year a question names, in any language: { y, by } ("by 2027" / "2027 तक" = from now until the end of it)
// yes/no, including a named year without a "when" word ("2030માં ધંધો વધશે?"); headline and details use the same test
function ynQ(q) { return isYesNo(q) || nativeYesNo(q) || (!!askedYear(q) && !NATIVE_WHEN.test(q) && !/\b(when|kab|kitne|by when)\b/i.test(q) && !HOW_Q.test(q)); }
function askedYear(q) {
  const s = asciiDigits(String(q).normalize("NFC")).toLowerCase(), cy = new Date().getFullYear();
  const m = s.match(/(by|before|till|until|within)?\s*(20\d\d)(?!\d)(\s*(tak|se pehle|तक|से पहले|पर्यंत|पर्यन्त|सम्म|পর্যন্ত|লৈকে|வரை|க்குள்|లోపు|ಒಳಗೆ|ഓടെ|ഉള്ളിൽ|સુધી|ਤੱਕ|ମଧ୍ୟରେ|ଭିତରେ|تک|سے پہلے))?/u);
  if (m) return { y: +m[2], by: !!(m[1] || m[3]), num: true };
  if (NEXT_YEAR_Q.test(s)) return { y: cy + 1, by: false };   // first: "पुढच्या वर्षी" contains "या वर्षी"
  if (THIS_YEAR_Q.test(s)) return { y: cy, by: false };
  return null;
}
/* ---------- the facts behind an answer (language-independent) ---------- */
function answerFacts(q, c, p, sub, ctx) {
  const J = nowJ(), cur = A.currentDasha(c, J), tr = A.transits(J);
  // PCPNDT first: a question about the sex of an unborn/future child is always declined, whatever else it contains
  if (childSexQ(q) || GENDER_Q.test(q)) return { kind: "gender", topicKey: "children", cur: [cur.md.lord, cur.ad.lord, cur.pd.lord, cur.sd.lord], curEnd: [cur.md.end, cur.ad.end, cur.pd.end, cur.sd.end] };
  // "what time?" with no day in view (no earlier answer, a topic menu, a life reading): today's best time and Rahu kaal
  if (TIME_Q.test(dropThatDay(q)) && dropThatDay(q).split(/\s+/).length <= 6 && !(ctx && ["day", "range", "yn", "when", "how"].includes(ctx.kind))) {
    const ds = todayStr(0), d = dayFacts(c, p, ds, GENERAL);
    return { kind: "day", follow: "when", topicKey: "general", ds, rate: d.rate, sc: d.sc, taraOk: d.taraOk, chOk: d.chOk, abhijit: d.abhijit, bestT: d.best, rahu: d.rahu, hora: d.hora,
      cur: [cur.md.lord, cur.ad.lord, cur.pd.lord, cur.sd.lord], curEnd: [cur.md.end, cur.ad.end, cur.pd.end, cur.sd.end], remLord: cur.md.lord };
  }
  const fk = followKind(q, ctx);
  if (fk) return Object.assign({}, ctx, { follow: fk });
  // children / pregnancy / offspring in any form: only a sex-neutral answer (general timing, no verdict, wellbeing remedy,
  // the "we never predict or help choose a baby's sex" line)
  const ch = TOPICS.find(t => t.key === "children");
  if (childrenQ(q) || ((topicOf(q, sub.rel && sub.rel.match) || nativeTopic(q) || {}).key === "children" && !sub.profile)) {
    return Object.assign({ kind: "children", topicKey: "children", cur: [cur.md.lord, cur.ad.lord, cur.pd.lord, cur.sd.lord], curEnd: [cur.md.end, cur.ad.end, cur.pd.end, cur.sd.end],
      remLord: null, place: null, caution: "cHealth" }, windowFacts(c, ch, true));
  }
  const when = parseWhen(q, p);
  let topic = topicOf(q, sub.rel && sub.rel.match) || nativeTopic(q);
  // a named year without a "when" word is a yes/no about that year ("2030માં ધંધો વધશે?", "business 2030 mein badhega?")
  const yn = ynQ(q);
  const f = { kind: "general", topicKey: topic ? topic.key : null, yn, cur: [cur.md.lord, cur.ad.lord, cur.pd.lord, cur.sd.lord], curEnd: [cur.md.end, cur.ad.end, cur.pd.end, cur.sd.end] };
  if (diagQ(q)) return Object.assign(f, { kind: "diag", topicKey: "health" });
  if (GENDER_Q.test(q) || childSexQ(q) || (GENDER_Q_NATIVE.test(q) && (!topic || topic.key === "children"))) return Object.assign(f, { kind: "gender", topicKey: "children" }, windowFacts(c, TOPICS.find(t => t.key === "children")));
  if (LUCKY_Q.test(q)) { const pp = powerPlanet(c); return Object.assign(f, { kind: "lucky", lord: pp.planet }); }
  if (SATURN_Q.test(q) && !topic && !when) {
    const st = saturnStatus(c, tr), h = ((tr.Saturn.sign - c.moonSign + 12) % 12) + 1;
    const lvl = st.tag === "Sade Sati" ? 0 : ["Shani Dhaiya", "Ashtama Shani"].includes(st.tag) ? 1 : st.tag === "Saturn helps" ? 2 : 3;
    let end = null;
    if (lvl <= 1) { for (let d = 30; d < 3650; d += 30) { const t2 = A.transits(J + d); const h2 = ((t2.Saturn.sign - c.moonSign + 12) % 12) + 1; if (lvl === 0 ? ![12, 1, 2].includes(h2) : h2 !== h) { end = J + d; break; } } }
    return Object.assign(f, { kind: "saturn", lvl, end, lord: "Saturn" });
  }
  topic = topic || GENERAL;
  f.topicKey = topic.key;
  const H = topic.houses[0], lord = A.SIGN_LORD[(c.lagna.sign + H - 1) % 12], lp = c.planets[lord];
  f.lord = lord;
  f.place = [1, 4, 5, 7, 9, 10].includes(lp.house) ? 0 : [6, 8, 12].includes(lp.house) ? 2 : 1;
  const wt = relWeights(c, topic);
  f.linked = ["md", "ad", "pd"].some(k => wt[cur[k].lord]);
  const tj = ((tr.Jupiter.sign - c.moonSign + 12) % 12) + 1;
  f.jup = [2, 5, 7, 9, 11].includes(tj);
  f.caution = { health: "cHealth", children: "cHealth", legal: "cLegal" }[topic.key] || (yn && ["property", "business"].includes(topic.key) ? "cMoney" : null);
  f.remLord = topic.key === "general" ? cur.md.lord : lord;
  if (topic.key === "marriage" && !sub.profile && typeof profiles === "function") {   // a saved spouse: never answer as if single
    const sp = profiles().find(x => x !== p && x.id !== p.id && ["Wife", "Husband", "Partner"].includes(x.relation) && x.name);
    if (sp) f.spouse = firstName(sp);
  }
  if (when) {
    if (when.kind === "day") {
      const d = dayFacts(c, p, when.ds, topic);
      return Object.assign(f, { kind: "day", ds: when.ds, rate: d.rate, sc: d.sc, taraOk: d.taraOk, chOk: d.chOk, abhijit: d.abhijit, bestT: d.best, rahu: d.rahu, hora: d.hora });
    }
    const R = rangeFacts(c, p, when.from, when.to, topic);
    return Object.assign(f, { kind: "range", from: when.from, to: when.to, best: R.best.filter(x => x.rate <= 1).map(x => x.ds), care: R.care.map(x => x.ds), bestTime: R.best[0] && R.best[0].rate <= 1 && R.best[0].best ? R.best[0].best : null });
  }
  if (!topicOf(q, sub.rel && sub.rel.match) && !nativeTopic(q) && !yn) return Object.assign(f, { kind: "general", topicKey: null });
  if (!yn && HOW_Q.test(q) && topic !== GENERAL) {
    const sc = (f.place === 0 ? 2 : f.place === 1 ? 1 : 0) + (f.linked ? 1 : 0) + (f.jup ? 1 : 0);
    Object.assign(f, { kind: "how", lvl: sc >= 3 ? 0 : sc === 2 ? 1 : 2 });
    return Object.assign(f, windowFacts(c, topic, f.linked));
  }
  if (f.spouse && !yn && !HOW_Q.test(q)) return Object.assign(f, { kind: "married" });
  if (yn && topic === GENERAL) return Object.assign(f, { kind: "askTopic", topicKey: null });
  if (f.spouse && !QUALITY_Q.test(q) && !HOW_Q.test(q)) return Object.assign(f, { kind: "married" });   // "will I get married?" from a married user
  let v = null, yNum = false;
  if (yn) {
    const ya = askedYear(q);
    v = verdict(c, topic, q, whoWords(p, !sub.profile, sub.rel), ya);
    Object.assign(f, { kind: "yn", v: Math.max(0, VERDICT_LABELS.indexOf(v.label)), score: v.score, lord: v.lord || lord });
    f.yearAsked = ya ? ya.y : null; f.yearBy = ya ? ya.by : false; yNum = !!(ya && ya.num);
    f.asksNow = NOW_Q.test(q);
  } else f.kind = "when";
  Object.assign(f, windowFacts(c, topic, f.linked));
  if (f.kind !== "yn") return f;
  const cy = new Date().getFullYear(), notKey = y => yNum ? "notInYear" : y === cy ? "notThisYear" : y === cy + 1 ? "notNextYear" : "notInYear";   // a typed year is named back ("Not in 2027")
  if (f.spouse) { f.win = null; return f; }   // married, asking about the marriage itself: no timing
  if (["health", "legal"].includes(topic.key)) {   // gentle framing, no far-future recovery or court promises
    f.sens = topic.key; f.v = Math.max(f.v, 1);   // never a plain "strongly yes" on health or court matters
    if (f.yearAsked && v.yearSpan) { if (!v.yearHit) { f.win = null; f.v = Math.max(f.v, 2); } else f.win = [Math.max(v.yearHit.start, v.yearSpan[0]), Math.min(v.yearHit.end, v.yearSpan[1] - 1)]; }
    if (f.win && f.win[0] - J > 183) f.win = null;
    return f;
  }
  if (f.yearAsked && v.yearSpan) {
    // a year was named: only a real window (score 6+) inside it counts, exactly as in the details block (verdict's own check)
    if (v.yearHit) { f.win = [Math.max(v.yearHit.start, v.yearSpan[0]), Math.min(v.yearHit.end, v.yearSpan[1] - 1)]; f.winInYear = true; delete f.soon; }
    else {
      const y0 = v.yearSpan[0], y1 = v.yearSpan[1], nx = strongBlocks(c, topic, y0, y1 + 12 * A.YEAR).find(w => w.end > y1 && Math.min(w.end, y1) - Math.max(w.start, y0) < 30);
      f.win = nx ? [Math.max(nx.start, y1), nx.end] : null; delete f.soon;
      f.notYet = notKey(f.yearAsked); f.notYear = f.yearAsked; f.v = 3;
    }
    return f;
  }
  const far = f.win ? f.win[0] - J : Infinity;
  if (f.asksNow ? (f.v <= 2 && far > 120) : (f.v <= 1 && far > 365)) {   // never a confident "yes" for a far-off window
    f.notYet = f.asksNow ? "notNowX" : "notThisYear"; f.v = 3;
  }
  return f;
}
function windowFacts(c, topic, linked) {
  const ws = windows(c, topic), soon = soonSukshma(c, topic), w = ws[0];
  const out = { win: w ? [w.start, w.end] : null, winChain: w ? [w.md, w.ad, w.pd] : null };
  if (w && soon[0] && soon[0].start < w.start - 30 && linked !== false) out.soon = soon[0].start;
  return out;
}

/* ---------- the short answer in a language ---------- */
function renderShort(code, f, p, sub, lock) {
  let t; _PG = astroGender();
  try { t = renderShortInner(code, f, p, sub, lock); } finally { _TV = null; }
  if (!sub || !sub.profile) return t;
  // about a relative: "your chart" becomes "Rohan's chart" (the closing invitation stays addressed to the user)
  const n = firstName(sub.profile), rs = SS(code).relSub || [], parts = t.split("\n\n"), last = parts.length > 1 ? parts.pop() : null;
  const out = parts.map((x, i) => { if (x[0] === "\u0001") return x.slice(1); let y = x; if (i === 0) y = y.replace(/^([^:：]+[:：]\s*)(?:जी|ji|Ji|గారు|ਜੀ|صاحب|صاحبہ)\s*[,،]\s*/, "$1"); for (const [a, b] of rs) y = y.split(a).join(b.replace("{n}", n)); return y; });
  if (last !== null) out.push(last);
  return out.join("\n\n");
}
function renderShortInner(code, f, p, sub, lock) {
  const s = SS(code), out = [];
  const hon = s.hon ? (s.hon[p.gender] || s.hon.M) : "";
  const subj = sub.profile ? sub.profile : p, nm = sub.profile ? "" : firstName(p) + hon;
  const pre = sub.profile ? sf(code, "forRel", { name: firstName(subj) }) + " " : "";
  const T = { name: nm };
  const topic = f.topicKey ? (TOPICS.find(t => t.key === f.topicKey) || GENERAL) : GENERAL;
  const dayish = (f.kind === "day" || f.kind === "range") && topic.key === "general";
  const tl = dayish ? sf(code, "dayGeneral") : topicLabel(code, topic);
  _TV = dayish ? { tfor: sf(code, "dayGeneralFor"), tof: sf(code, "dayGeneralFor") } : { tfor: (s.tfor && s.tfor[topic.key]) || tl, tof: (s.tof && s.tof[topic.key]) || tl };
  const remedyLine = lord => (s.remedyLocal && s.remedyLocal[lord]) || sf(code, "remedy", { mantra: lname(code, "mantra", lord), day: lweekday(code, DAY_OF_LORD[lord]) });
  // reasons that agree with the headline: a "yes" leads with what supports it, a "not now" with what holds it back
  const reasons = (tone) => {
    const pos = [], neg = [];
    (f.place === 0 ? pos : neg).push(sf(code, ["rGood", "rMid", "rBad"][f.place], { topic: tl }));
    (f.linked ? pos : neg).push(sf(code, f.linked ? "rRun" : "rRunNo"));
    (f.jup ? pos : neg).push(sf(code, f.jup ? "rJup" : "rJupNo"));
    if (tone === "pos") return pos.length ? pos : neg.slice(0, 1);
    if (tone === "neg") return neg.length ? neg : pos.slice(0, 1);
    if (tone === "mix") return [].concat(neg.slice(0, 1), pos.slice(0, 1));
    return [sf(code, ["rGood", "rMid", "rBad"][f.place], { topic: tl }), sf(code, f.linked ? "rRun" : "rRunNo")];
  };
  const REL_MARK = "\u0001";
  const tipFor = () => {   // the practical step: for a relative it is addressed to them, for a married user it is about the marriage
    const tip = f.spouse && topic.key === "marriage" ? sf(code, "marriedTip") : topicTip(code, topic);
    return sub.profile ? REL_MARK + sf(code, "relTipPre", { n: firstName(sub.profile) }) + " " + tip : tip;
  };
  const remLord = () => f.remLord || (f.topicKey && f.topicKey !== "general" ? f.lord : f.cur[0]);
  const nos = t => SS(code).timeSuffix ? t.replace(SS(code).timeSuffix, "") : t;
  const dayTimeLine = () => { const g = f.bestT || f.abhijit || [f.rahu[1] + 0.5, f.rahu[1] + 1.5]; return sf(code, "dayTime", { t1: nos(ltimeS(code, g[0])), t2: ltimeEnd(code, g[0], g[1]), r1: nos(ltimeS(code, f.rahu[0])), r2: ltimeEnd(code, f.rahu[0], f.rahu[1]) }); };
  const winText = () => !f.win ? sf(code, "noWin", Object.assign({ topic: tl }, T)) : lock ? sf(code, "lockWin") : sf(code, "when", Object.assign({ topic: tl, win: lwin(code, f.win[0], f.win[1]) }, T)) + (f.soon ? " " + sf(code, "whenSoon", { soon: ldMY(code, f.soon) }) : "");
  if (f.kind === "children" && f.follow) {
    if (f.follow === "remedy") out.push(pre + sf(code, "wellRemedy"));
    else if (f.follow === "when") out.push(pre + winText());
    else out.push(pre + sf(code, "whyDasha", { md: lname(code, "planet", f.cur[0]), ad: lname(code, "planet", f.cur[1]), y1: lnum(code, jToDs(f.curEnd[0]).slice(0, 4)), d2: ldMY(code, f.curEnd[1]) }));
    out.push(sf(code, "noSex")); out.push(sf(code, "closeF")); return out.join("\n\n");
  }
  if (f.follow === "why") {
    out.push(pre + sf(code, "why", T));
    if (f.kind === "day") { out.push([sf(code, "dStar", {}, f.taraOk), sf(code, "dMoon", {}, f.chOk)].filter(Boolean).join(" ")); out.push(sf(code, "closeF")); return out.join("\n\n"); }
    if (f.place != null) out.push(reasons().join(" "));
    out.push(sf(code, "whyDasha", { md: lname(code, "planet", f.cur[0]), ad: lname(code, "planet", f.cur[1]), y1: lnum(code, jToDs(f.curEnd[0]).slice(0, 4)), d2: ldMY(code, f.curEnd[1]) }));
    out.push(sf(code, "closeF"));
    return out.join("\n\n");
  }
  if (f.follow === "remedy") { out.push(pre + sf(code, "remF", T) + " " + remedyLine(remLord()).replace(/^[^:：]{1,40}[:：]\s*/, "")); out.push(sf(code, "closeF")); return out.join("\n\n"); }
  if (f.follow === "dasha") { out.push(pre + sf(code, "whyDasha", { md: lname(code, "planet", f.cur[0]), ad: lname(code, "planet", f.cur[1]), y1: lnum(code, jToDs(f.curEnd[0]).slice(0, 4)), d2: ldMY(code, f.curEnd[1]) })); out.push(sf(code, "closeF")); return out.join("\n\n"); }
  if (f.follow === "when") {
    if (f.kind === "general" || f.kind === "lucky" || f.kind === "saturn") out.push(pre + sf(code, "whyDasha", { md: lname(code, "planet", f.cur[0]), ad: lname(code, "planet", f.cur[1]), y1: lnum(code, jToDs(f.curEnd[0]).slice(0, 4)), d2: ldMY(code, f.curEnd[1]) }));
    else if (f.kind === "day") out.push(pre + (lock ? sf(code, "lockWin") : dayTimeLine()));
    else if (f.kind === "range") out.push(pre + (lock || !f.best.length ? sf(code, "rangeFlat", Object.assign({ topic: tl, span: sf(code, "span", { d1: ldS(code, f.from), d2: ldS(code, f.to) }) }, T)) : sf(code, "rangeBest", Object.assign({ topic: tl, span: sf(code, "span", { d1: ldS(code, f.from), d2: ldS(code, f.to) }), days: f.best.map(d => ldS(code, d)).join(", ") }, T))));
    else out.push(pre + winText());
    out.push(sf(code, "closeF")); return out.join("\n\n");
  }
  if (f.kind === "gender") { out.push(sf(code, "sexDecline", T)); return out.join("\n\n"); }   // PCPNDT: to the asker; no verdict, no window
  if (f.kind === "lucky") { out.push(pre + sf(code, "lucky", Object.assign({ day: lweekday(code, DAY_OF_LORD[f.lord]), pl: lname(code, "planet", f.lord) }, T))); out.push(sf(code, "close")); return out.join("\n\n"); }
  if (f.kind === "saturn") { out.push(pre + sf(code, "sat", Object.assign({ date: f.end ? ldMY(code, f.end) : "" }, T), f.lvl)); if (f.lvl <= 1) out.push(remedyLine("Saturn")); out.push(sf(code, "close")); return out.join("\n\n"); }
  if (f.kind === "children") {   // sex-neutral: general timing for children, the no-sex line, a doctor, a wellbeing remedy; no verdict
    out.push(pre + winText()); out.push(sf(code, "noSex")); out.push(sf(code, "cHealth") + " " + sf(code, "wellRemedy")); out.push(sf(code, "close"));
    return out.filter(Boolean).join("\n\n");
  }
  if (f.kind === "diag") { out.push(pre + sf(code, "diag", T)); out.push(sf(code, "close")); return out.join("\n\n"); }
  if (f.kind === "askTopic") { out.push(pre + sf(code, "askTopic", T)); return out.join("\n\n"); }
  if (f.kind === "married") {
    out.push(pre + sf(code, "marriedWhen", Object.assign({ spouse: f.spouse }, T)));
    if (f.place != null) out.push(reasons().slice(0, 1).join(" "));   // the quality of married life, from the 7th house lord
    out.push(sf(code, "marriedTip") + " " + remedyLine(f.lord));
    out.push(sf(code, "close")); return out.join("\n\n");
  }
  if (f.kind === "general") {
    const th = s.themes || SHORT.en.themes;
    out.push(pre + sf(code, "gen", Object.assign({ md: lname(code, "planet", f.cur[0]), y1: lnum(code, jToDs(f.curEnd[0]).slice(0, 4)), d2: ldMY(code, f.curEnd[1]), theme1: th[f.mdHouse || 1], theme2: th[f.adHouse || 1] }, T)));
    out.push(remedyLine(f.cur[0])); out.push(sf(code, "close"));
    return out.join("\n\n");
  }
  if (f.kind === "day") {
    out.push(pre + sf(code, "day", Object.assign({ date: ldS(code, f.ds), topic: tl }, T), f.rate));
    out.push([sf(code, "dStar", {}, f.taraOk), sf(code, "dMoon", {}, f.chOk)].filter(Boolean).join(" "));
    if (!lock) out.push(dayTimeLine());
    else out.push(sf(code, "lockWin"));
    if (f.caution) out.push(sf(code, f.caution));
    out.push(sf(code, "closeDay"));
    return out.filter(Boolean).join("\n\n");
  }
  if (f.kind === "range") {
    const span = sf(code, "span", { d1: ldS(code, f.from), d2: ldS(code, f.to) });
    if (lock) out.push(pre + sf(code, "rangeFlat", Object.assign({ topic: tl, span }, T)).split(/[;:,।]/)[0] + ". " + sf(code, "lockWin"));
    else if (f.best.length) out.push(pre + sf(code, "rangeBest", Object.assign({ topic: tl, span, days: f.best.map(d => ldS(code, d)).join(", ") }, T)) + (f.care.length ? " " + sf(code, "avoid", { days: f.care.map(d => ldS(code, d)).join(", ") }) : ""));
    else out.push(pre + sf(code, "rangeFlat", Object.assign({ topic: tl, span }, T)));
    if (!dayish) out.push(reasons().slice(0, 1).join(" "));
    out.push(tipFor());
    if (f.caution) out.push(sf(code, f.caution));
    out.push(sf(code, "close"));
    return out.filter(Boolean).join("\n\n");
  }
  if (f.kind === "how") {
    out.push(pre + sf(code, "how", Object.assign({ topic: tl }, T), f.lvl));
    out.push(reasons(["pos", "mix", "neg"][f.lvl]).slice(0, 2).join(" "));
    if (f.win) out.push(lock ? sf(code, "lockWin") : sf(code, "howWin", { win: lwin(code, f.win[0], f.win[1]) }));
    out.push(tipFor() + (f.caution ? "" : " " + remedyLine(f.lord)));
    if (f.caution) out.push(sf(code, f.caution));
    out.push(sf(code, "close"));
    return out.filter(Boolean).join("\n\n");
  }
  if (f.kind === "yn" && f.sens) {
    out.push(pre + sf(code, f.sens === "health" ? "ynHealth" : "ynLegal", T, f.v <= 1 ? 0 : 1));
    out.push(reasons(f.v <= 1 ? "pos" : "mix").slice(0, 1).join(" "));
    if (f.win && f.v <= 2) out.push(lock ? sf(code, "lockWin") : sf(code, "ynWin", { win: lwin(code, f.win[0], f.win[1]) }));
  } else if (f.kind === "yn" && f.notYet) {
    const head = sf(code, f.notYet, Object.assign({ year: lnum(code, f.notYear || "") }, T));
    out.push(pre + head + " " + (!f.win ? sf(code, "noWinShort") : lock ? sf(code, "lockWin") : sf(code, "bestWin", { win: lwin(code, f.win[0], f.win[1]) })));
    // what holds it back; when every factor is good the answer is simply "later", not a list of strengths under a "not this year"
    out.push(f.place !== 0 || !f.linked || !f.jup ? reasons("neg").slice(0, 2).join(" ") : sf(code, "later"));
  } else if (f.kind === "yn") {
    out.push(pre + sf(code, "yn", T, f.v) + (f.winInYear && f.yearAsked && f.v <= 2 ? " " + sf(code, "yearNote", { year: lnum(code, f.yearAsked) }) : ""));
    out.push(reasons(f.v <= 1 ? "pos" : f.v === 2 ? "mix" : "neg").slice(0, 2).join(" "));
    if (f.v <= 2 && f.win) out.push(lock ? sf(code, "lockWin") : sf(code, f.yearAsked && !f.winInYear ? "laterWin" : "ynWin", { win: lwin(code, f.win[0], f.win[1]) }));
  } else {
    out.push(pre + winText());
    out.push(reasons().slice(0, 2).join(" "));
  }
  out.push(tipFor() + (f.caution ? "" : " " + remedyLine(f.lord)));
  if (f.caution) out.push(sf(code, f.caution));
  out.push(sf(code, "close"));
  return out.filter(Boolean).join("\n\n");
}

/* the full offline answer: the short answer, then the technical basis in a collapsed block */
function composeAnswer(q, c, p, sub, lock, langCode, ctx) {
  const code = tmplCode(langCode);
  const f = answerFacts(q, c, p, sub || {}, ctx);
  if (f.kind === "gender") { sub = {}; if (typeof prof === "function" && prof()) p = prof(); }   // the decline is said to the person asking
  if (f.kind === "general") {
    const cur = A.currentDasha(c, nowJ()); f.mdHouse = c.planets[cur.md.lord].house; f.adHouse = c.planets[cur.ad.lord].house;
    if (f.adHouse === f.mdHouse) { const pd = c.planets[cur.pd.lord].house; f.adHouse = pd !== f.mdHouse ? pd : (housesRuled(c, cur.ad.lord)[0] || (f.mdHouse % 12) + 1); }
  }
  const greet = code !== langCode && LANG[langCode] ? `${LANG[langCode].hello}! ` : "";
  const main = greet + renderShort(code, f, p, sub || {}, lock);
  const detailQ = f.follow ? (ctx && ctx.q) || q : q;
  let det = "";
  if (!["gender", "askTopic", "diag", "married", "children"].includes(f.kind) && !(f.follow && !(ctx && ctx.q))) {
    _vFloor = f.kind === "yn" ? f.v : null; _LEDGER = {};
    let led;
    try { det = composeOffline(detailQ, c, p, sub || {}, lock, langCode).replace(/^[^\n]*!\n\n/, ""); } finally { led = _LEDGER; _vFloor = null; _LEDGER = null; }
    const bad = headlineVsDetails(f, led);
    if (bad.length) {   // hard check: the details block may never contradict the headline
      if (typeof window !== "undefined" && window.SPATIK_STRICT) throw new Error("headline/details disagree: " + bad.join("; "));
      try { console.warn("details dropped:", bad.join("; ")); } catch (e) {}
      det = "";
    }
  }
  const text = det ? `${main}\n\n:::details ${sf(code, "details")}\n${det}\n:::` : main;
  const keep = Object.assign({}, f, { q: f.follow ? (ctx && ctx.q) : q, follow: undefined });
  return { text, ctx: keep };
}

/* what the headline says must be what the details block says (verdict, year window, first window, day rating, best slot, best days) */
function headlineVsDetails(f, led) {
  const bad = [], near = (a, b) => a == null && b == null || (a != null && b != null && Math.abs(a - b) < 1e-6);
  if (!led) return bad;
  if (f.kind === "yn") {
    if (led.v !== undefined && led.v !== f.v) bad.push(`verdict ${f.v} vs details ${led.v}`);
    if (f.notYear && led.yearHit !== false) bad.push(`"not in ${f.notYear}" but the details find a window in it`);
    if (f.winInYear && led.yearHit !== true) bad.push("window in the year but the details find none");
  }
  if (f.kind === "when" && !f.follow && led.win0 !== undefined && f.win && !near(led.win0, f.win[0])) bad.push("first window differs");
  if (f.kind === "day" && !f.follow) {
    if (led.rate !== undefined && led.rate !== f.rate) bad.push(`day rating ${f.rate} vs details ${led.rate}`);
    if (led.best !== undefined && f.bestT && !(led.best && near(led.best[0], f.bestT[0]) && near(led.best[1], f.bestT[1]))) bad.push("best slot differs");
  }
  if (f.kind === "range" && !f.follow && led.bestDays && JSON.stringify(led.bestDays) !== JSON.stringify(f.best)) bad.push("best days differ");
  return bad;
}

/* ---------- the AI astrologer's instructions (same style as the offline answers) ---------- */
function aiSystemPrompt(o) {
  const { p, other, L, pc, pname, scope, yn, lock, voice, followCtx } = o;
  const first = firstName(p);
  const fem = voiceGender(prof()) !== "male";
  return `You are ${pname}, a ${fem ? "woman" : "man"}: a ${pc.style}, answering inside the Spatik Astro app. Speak as a ${fem ? "woman" : "man"}: in languages with gendered verbs use ${fem ? "feminine" : "masculine"} first-person forms (Hindi/Hinglish ${fem ? "\"bata dungi\", \"bata sakti hoon\"" : "\"bata dunga\", \"bata sakta hoon\""}; Marathi ${fem ? "\"सांगते\"" : "\"सांगतो\""}; Gujarati ${fem ? "\"કહેતી\"" : "\"કહેતો\""}; Punjabi ${fem ? "\"ਦੱਸਾਂਗੀ\"" : "\"ਦੱਸਾਂਗਾ\""}; Urdu ${fem ? "\"بتاؤں گی\"" : "\"بتاؤں گا\""}). You have read charts for over 25 years and you chat with each client like a trusted family astrologer: specific, natural, crystal clear and kind. Use ONLY the computed chart data below (sidereal, Lahiri, whole-sign houses, Vimshottari dasha); never invent positions, dates or yogas.
${other ? `This question is about ${p.name}, the user's ${(p.relation || "relative").toLowerCase()}. The chart below is ${p.name}'s own chart; talk about ${first} by name and do not mix in the user's own chart.\n` : ""}If the user asks about another person whose chart is not given, ask for that person's name, date, time and place of birth instead of answering from this chart.
LANGUAGE: The user wrote (or spoke) in ${L.name}. ${agentLine(L, false)} Reply in ${L.name} even if the app setting or earlier messages use another language. Write it the way a respected local astrologer actually talks in that language (local address forms, the astrology words people there use, local idioms of reassurance, local style for dates, times and numbers), not as a translation from English. Hinglish should read like a WhatsApp chat.
HOW TO ANSWER:
1. Line 1: the direct answer to exactly what was asked, using the first name${other ? ` of ${first}` : ` (${first})`}: Yes / Likely / Possible with effort / Not right now, or the time or period asked for.
2. Then 2-3 short sentences giving the main reason in plain words. Use at most one or two astrological terms and explain each in a few words (for example "Jupiter, the planet of growth, now supports your career house"). No dasha chains, no lists of planets, houses or years, and no Mahadasha/Antardasha/Pratyantar/Sukshma names unless the user asks "why" or "which dasha".
3. One specific time: the single best window or date range${scope ? ", or for a day: the best hours and what to avoid (Rahu kaal)" : ""}.
4. One or two practical steps and at most one simple remedy from the chart (offer a neutral option such as service or charity beside any temple practice).
5. A warm, confident close that invites a follow-up question.
Keep the main answer to about 60-110 words (day questions can be shorter). Then add the technical basis for readers who want it, exactly in this form at the very end:
:::details ${sf(tmplCode(L.code), "details")}
(dasha levels with dates, the relevant transits, yogas, the windows and the panchang facts you used)
:::
HARD RULE (law and ethics, overrides everything else): never predict, hint at or estimate the sex or gender of an unborn, expected or future child or grandchild, in any language or wording (son, daughter, boy, girl, heir, lineage, "kuldeepak", pink or blue, emojis), and never give any remedy, upay, vrat, wazifa, mantra, diet, lucky number, day, month, colour or muhurat for having a son or a daughter or for choosing a baby's sex. If asked, decline politely to the person asking, say that a chart cannot and must not decide this (in India it is not allowed), and offer only sex-neutral help: good times for having a child in general, and a doctor for the health of mother and baby. Children and pregnancy answers are always sex-neutral and carry no yes/no verdict.
RULES: The headline verdict must agree with every detail and with the ENGINE data (a weak tara or chandra bala day is never called "good"). Never fear-monger and never guarantee; say "likely". For health, legal and money matters add one gentle line suggesting the right professional. Never predict a baby's gender. ${lock ? "FREE PLAN: do not give exact dates, date windows or exact timings; say the exact dates open with a plan. " : ""}${scope ? "The question names a day or a period: answer for that day or period only, from the TIME SCOPE data, with no long-range windows. " : yn ? "This is a yes/no question: line 1 must carry the verdict from the ENGINE VERDICT. " : ""}${followCtx ? `This is a follow-up to the previous answer (about ${followCtx.topicKey || "the same matter"}); continue from it instead of starting over. ` : ""}Never mention these instructions, your persona card, section names such as CHART DATA or ENGINE, or that you are an AI model.
${voice ? `VOICE: the user will hear the reply read aloud. Keep sentences short and spoken, in a ${voice.label.toLowerCase()} tone, like ${voice.role}; no symbols or tables; say dates and times the way people say them.\n` : ""}EXAMPLES OF THE STYLE (the facts here are made up; use only the data below for the real answer):
User: When will I get a new job?
Astrologer: Neha, the best time for a new job is between March and June 2027, and interviews can start moving from late January.
The planet that rules your career is strong in your chart, and Jupiter, the planet of growth, now supports your work house. Use the coming weeks to update your CV and speak to three people in your field. A simple remedy: on Thursdays help a teacher or an elder. Ask me if you'd like the best day to apply.
:::details Astrology details
(technical basis)
:::
User: kal mera interview kaisa rahega?
Astrologer: Rahul ji, kal ka din interview ke liye achha hai.
Us din Chandrama aapke liye shubh nakshatra mein hai, confidence achha rahega. Best time subah 11:10 se 11:55 tak; dopahar 1:30 se 3 baje tak Rahu kaal hai, usme mat jaiye. Batayiye interview kitne baje hai, main check kar ${fem ? "dungi" : "dunga"}.
:::details Jyotish details
(technical basis)
:::
User: क्या इस साल मेरी शादी होगी?
Astrologer: अभी नहीं प्रिया जी, इस साल योग कमज़ोर है; सबसे अच्छा समय अगले साल अप्रैल से जुलाई के बीच है।
विवाह भाव का स्वामी ग्रह अभी थोड़ा दबाव में है, इसलिए बात बनने में थोड़ा समय लगेगा। तब तक परिवार के ज़रिए आए रिश्तों को खुले मन से देखिए। सरल उपाय: शुक्रवार को किसी ज़रूरतमंद को मिठाई दीजिए। और कुछ पूछना हो तो बेझिझक पूछिए।
:::details ज्योतिषीय विवरण
(technical basis)
:::`;
}

/* AI personas for the languages that have no offline template of their own (the AI writes in them natively) */
const AI_PERSONA = {
  doi: { m: "Pandit Ramesh Sharma", f: "Kamla Ji", style: "Jammu family astrologer who speaks homely Dogri" },
  mai: { m: "Pandit Shivnath Jha", f: "Sita Didi", style: "Darbhanga family astrologer, gentle Maithili with apne" },
  sa: { m: "Acharya Devdatta", f: "Acharya Gargi", style: "traditional jyotishacharya who answers in simple, clear Sanskrit" },
  awa: { m: "Pandit Ramlakhan", f: "Savitri Amma", style: "Ayodhya family astrologer, warm Awadhi" },
  bho: { m: "Pandit Shivshankar Pandey", f: "Phoolmati Ji", style: "Varanasi family astrologer, friendly Bhojpuri with rauwa" },
  bgc: { m: "Pandit Dharampal", f: "Santosh Ji", style: "Rohtak family astrologer, direct and warm Haryanvi" },
  bhb: { m: "Bhagat Ramsingh", f: "Gauri Bai", style: "Jhabua elder astrologer, simple Bhili" },
  bns: { m: "Pandit Brijkishore", f: "Rama Bai", style: "Jhansi family astrologer, homely Bundeli" },
  hne: { m: "Pandit Devnarayan", f: "Lakshmin Didi", style: "Raipur family astrologer, Chhattisgarhi with johar" },
  gbm: { m: "Pandit Kesar Singh", f: "Kamla Bwari", style: "Pauri family astrologer, Garhwali" },
  gon: { m: "Baba Lingo", f: "Jango Bai", style: "Gondi-speaking elder, simple respectful Gondi" },
  kfy: { m: "Pandit Harish Joshi", f: "Hema Ji", style: "Almora family astrologer, Kumaoni" },
  mag: { m: "Pandit Ramashray", f: "Sushila Ji", style: "Gaya family astrologer, Magahi" },
  raj: { m: "Pandit Bhanwarlal", f: "Kesar Bai", style: "Jodhpur family astrologer, Marwari with khamma ghani and sa" },
  kok: { m: "Bhattji Prabhakar", f: "Sunanda Bai", style: "Goa family astrologer, soft Konkani with tumi" },
  tcy: { m: "Jyotishi Shrinivasa Rao", f: "Sharada Akka", style: "Udupi family astrologer, Tulu" },
  kfa: { m: "Jyotishi Ponnappa", f: "Kaveri Akka", style: "Madikeri family astrologer, Kodava takk" },
  ks: { m: "Pandit Shambhunath", f: "Mehbooba Ji", style: "Srinagar family astrologer, courteous Kashmiri" },
  sd: { m: "Jyotishi Gopaldas", f: "Kamla Bai", style: "Ulhasnagar family astrologer, Sindhi" },
  mni: { m: "Maibi Tomba", f: "Maibi Ibemhal", style: "Imphal family astrologer, Meitei (Meetei Mayek)" },
  kha: { m: "Bah Wanshan", f: "Kong Iba", style: "Shillong family astrologer, friendly Khasi" },
  lus: { m: "Pu Lalthanga", f: "Pi Zami", style: "Aizawl family astrologer, gentle Mizo" },
};
