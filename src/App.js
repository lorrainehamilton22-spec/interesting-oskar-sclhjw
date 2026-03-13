import { useState, useEffect, useRef } from "react";

const WEEKS = [
  "Planting the Seed",
  "The Why Underneath",
  "Identity Before Behaviour",
  "The Body's Intelligence",
  "Working with the Inner Critic",
  "Making It Sustainable",
  "Deepening & Momentum",
  "Consolidation & What's Next",
];
const MOODS = [
  "hopeful",
  "curious",
  "tired",
  "resistant",
  "calm",
  "motivated",
  "anxious",
  "clear",
  "foggy",
  "proud",
  "frustrated",
  "peaceful",
  "open",
  "raw",
  "strong",
];

const DAYS_1_7 = {
  1: {
    s: "Good morning. Something is already shifting.",
    b: "There's something interesting about the fact that you're reading this.\n\nNot because of what it means about willpower, or commitment, or finally being ready. But because some part of you — your future self, maybe — arranged for this moment to happen. She decided you were worth the effort of setting this up. She believed, even when you didn't quite, that something could be different.\n\nThat's not nothing.\n\nHere's what we're not doing in this series: we're not going to white-knuckle our way through restriction. We're not going to make a list of everything you should be doing and feel bad about it every morning. We're not going to measure your worth in kilograms.\n\nHere's what we ARE doing: we're rewiring, slowly and steadily, the part of your brain that currently frames this as something you HAVE to do — into something you genuinely WANT to do. That shift isn't magic. It's neuroscience. And it's exactly what you'd tell a client.\n\nYou already know this works. You just forgot it applied to you too.\n\nSo today, no actions required. Just one question to hold lightly as you go about your day:\n\n*I wonder what it would feel like to be 10kg lighter — not in my body, but in my mind?*\n\nThat's enough. See you tomorrow.",
  },
  2: {
    s: "Your brain is not broken. It's just been doing its job.",
    b: "Let's talk about why this has felt hard before.\n\nYou've lost weight. You know how to do this. And yet here you are again, a little further from where you want to be, with that inner critic voice muttering: *\"It's not even that much. You could start Monday. You've done this before and it didn't stick anyway.\"*\n\nHere's the neuroscience your inner critic doesn't want you to know: it's not a character flaw. Your brain is exquisitely designed to protect you from perceived threat, and change — even change you want — registers as threat. The limbic system doesn't know the difference between a tiger and a dietary shift. It just knows: *this is different from what kept you safe before.*\n\nThe inner critic isn't your enemy. It's an overprotective security guard who's been running the show for too long.\n\nYou've taught this. You use it at bariatric retreats. Apply it here.\n\nThe goal this week isn't to change anything. It's just to start noticing when the security guard shows up — that voice that says \"it's not that bad\" — and simply name it. *There you are.*\n\n*I wonder what my inner critic is actually trying to protect me from when it says this doesn't matter that much?*\n\nYou don't need to answer it. Just wonder.",
  },
  3: {
    s: "The trouble with 'I have to'",
    b: 'You already know this one. You teach it.\n\nWhen we focus on what we *know* — the plan, the rules, the macros, the weigh-ins — we get perfectionism, procrastination, imposter syndrome, and comparison-itis. You\'ve got a slide for this. You\'ve said these words to clients.\n\n"I have to eat this way."\n"I have to stop eating after 7pm."\n"I have to get back on track."\n\nFeel how heavy that is in your chest? That\'s your heart brain recoiling. That\'s the gut brain saying *no, actually*.\n\nNow try this:\n\n"I wonder what eating in a way that makes me feel good would actually look like today?"\n"I wonder what it would feel like to wake up tomorrow with my body feeling lighter?"\n\nFeel the difference? That\'s the "I want to" doorway. Not forced. Not faked. Just... open.\n\nThis is the shift this series is designed to make — not overnight, but cumulatively. Every morning you read one of these, you\'re adding another tiny thread to a new neural pattern.\n\nToday: nothing required. Just notice, once today, when you move from "I want to" into "I have to" territory — and gently reframe it as an "I wonder."\n\nThat\'s all.',
  },
  4: {
    s: "A word about evenings.",
    b: "Let's be honest about evenings.\n\nThat's when the wheels tend to come off, isn't it? The day is done. You're tired — actually tired, not just a bit weary, but the kind of tired that comes from carrying the weight of running a business, being a person people rely on, showing up fully in your own life. And in that moment, the brain doesn't want discipline. It wants reward.\n\nThis is polyvagal in action. By evening, your nervous system has often been in some version of mobilisation or social engagement all day. It wants to land. To feel safe. And the quickest shortcut the brain knows to safety is dopamine — which sugar and carbs deliver fast.\n\nThis is not weakness. This is wiring.\n\nThe question isn't how to have more willpower in the evenings. The question is: *what else can signal safety and reward to a tired nervous system?*\n\nFor now, just this: the evening version of you is not the enemy. She's exhausted. She deserves compassion first, and a plan second.\n\nTonight, if you find yourself reaching for something that isn't in your plan, pause for just three breaths before you do. Not to stop yourself — just to create a tiny gap between impulse and action. That gap, over time, is where choice lives.\n\nThree breaths. That's it.",
  },
  5: {
    s: "What you actually want (it's not 10kg lighter)",
    b: "Here's something worth sitting with this morning:\n\nYou don't actually want to lose 10kg. That's not the real thing.\n\nWhat you want is how you imagine you'll feel when you've lost 10kg. You want energy that doesn't require coffee to fake. You want to look in the mirror and feel at home in your body. You want to feel congruent — because you know, more than most people, what's possible when the body and mind are aligned, and right now there's a gap between what you know and what you're living.\n\nThat gap is uncomfortable. And importantly — it's information.\n\nYour three-brain framework knows this. The head brain can know all the theory. But it's the heart brain that needs to WANT it, and the gut brain that needs to feel SAFE doing it.\n\nSo this morning, instead of thinking about weight, think about feeling.\n\n*I wonder what \"feeling good in my body\" would actually feel like — not as a goal, but as a daily reality?*\n\nWhat would be different? What would you do that you don't do now? How would you move through the day?\n\nThat feeling is the compass. Everything else — the food, the plan, the choices — is just the vehicle.",
  },
  6: {
    s: "The meal that requires almost no effort (and tastes like you tried)",
    b: "Today, something practical.\n\nOne of the things that derails even the most motivated version of you is the moment when you're hungry, tired, and there's nothing obvious to eat. That's when the rice goes in. That's when the portion size inflates. That's when the inner critic says \"well, you've started now.\"\n\nSo let's build your emergency repertoire — meals that are genuinely keto-aligned, require minimal ingredients, and can be assembled in less time than it takes to justify the alternative.\n\n**The 5-Minute Plate:**\n\nHandful of baby spinach or rocket. Two soft-boiled eggs (done ahead the night before, sitting in the fridge). Half an avocado. A drizzle of olive oil and a squeeze of lemon. Salt and pepper.\n\nThat's it. That's a meal. It takes four minutes. It keeps you in ketosis. And there's something about the simplicity of it that feels like self-respect rather than deprivation.\n\nThe principle here: *stock the ingredients, not the willpower.*\n\nYou don't need to be motivated to make good choices. You need to make good choices easier than bad ones. Environment design is a neuroscience strategy, not a cheat code.\n\nNo grand gesture. Just eggs and avocado.",
  },
  7: {
    s: "You made it through week one. Here's what happened inside your brain.",
    b: "Seven days. You read seven emails. That's seven tiny activations of a new neural pattern.\n\nHere's what's been happening beneath the surface: every time you've paused to ask \"I wonder...\" instead of bracing for \"I have to...\", you've been giving your prefrontal cortex — the part of your brain responsible for wise, long-view decision-making — a small workout. Every time you named the inner critic without obeying it, you weakened its grip just a fraction.\n\nThis is not dramatic. It doesn't feel like anything spectacular. But this is how lasting change actually works — not in grand gestures, but in the accumulation of tiny, consistent redirections.\n\nThe research on neuroplasticity is clear: the brain changes most effectively through repetition of small, emotionally-engaged moments. Not through willpower. Not through restriction. Through repeated gentle nudges in a direction that *feels worth going*.\n\nYou're worth going there.\n\nThis week, you didn't have to change anything. You just had to read. And you did.\n\nNext week, we'll start to gently explore what your calling — the real why underneath this goal — actually is. Not the number on the scales. The thing that matters more than the number.\n\nSee you Monday.",
  },
};

const META = {
  8: {
    s: "Goals are transactional. Callings are transformational.",
    t: "callings vs goals Tara Mohr what calling underneath losing 10kg three-brain methodology",
  },
  9: {
    s: "What does your heart brain say about this?",
    t: "heart brain 40000 neurons does goal feel safe three-brain consulting heart brain",
  },
  10: {
    s: "The gut brain vote.",
    t: "gut brain enteric nervous system instinct what gut knows about what needs to shift",
  },
  11: {
    s: "The year-on-year creep. Let's name it.",
    t: "year on year weight increase hormonal perimenopause what story made it easier to continue",
  },
  12: {
    s: "A meal for the version of you who can't be bothered.",
    t: "Can't Be Bothered Bowl: tinned tuna or salmon avocado cherry tomatoes lemon olive oil chilli flakes stir eat done",
  },
  13: {
    s: "What the plateau is actually telling you.",
    t: "plateau as hormonal recalibration not failure stabilisation phases leptin hunger hormones body adjusting",
  },
  14: {
    s: "Two weeks in. What's changed?",
    t: "week 2 close courage genuine acknowledgement identity work preview body follows identity",
  },
  15: {
    s: "She already exists.",
    t: "identity-based change James Clear she already exists as potential cognitive priming decision circuits",
  },
  16: {
    s: "What walking your talk actually means.",
    t: "congruence gap teaching transformation but adding rice private alignment between knowing and living",
  },
  17: {
    s: "The limiting belief hiding inside 'it's not that bad'",
    t: "emotional reasoning fortune telling limiting beliefs from own work applied to herself it's not that bad decoded",
  },
  18: {
    s: "Skipping meals is also a choice.",
    t: "decision fatigue hunger physiology don't arrive at hunger without plan macadamias hard-boiled eggs in fridge",
  },
  19: {
    s: "The polyvagal guide to the witching hour.",
    t: "ventral vagal sympathetic dorsal shutdown evening regulation hot drink five minutes outside Porges Deb Dana",
  },
  20: {
    s: "A meal for people who like food to actually taste good.",
    t: "Pan-Fried Salmon with Buttered Greens: salmon skin-on butter spinach cavolo nero bok choy garlic lemon 12 minutes restaurant quality",
  },
  21: {
    s: "Three weeks. The neural pathway is forming.",
    t: "neuroplasticity 66 days Phillippa Lally self-respect as change driver 21 days preview body intelligence",
  },
  22: {
    s: "What your body is actually waiting to do.",
    t: "ketosis mechanism keto flu mental clarity appetite regulation ketones vs glucose body not the enemy",
  },
  23: {
    s: "On not weighing yourself every day.",
    t: "scale as trigger vs tool threat response alternative feedback mechanisms clothes fit energy sleep",
  },
  24: {
    s: "Sleep, cortisol, and the sneaky saboteur you didn't see coming.",
    t: "cortisol ghrelin leptin mechanism sleep as metabolic intervention magnesium phone-down earlier cooler room",
  },
  25: {
    s: "The portioning problem, and a simple fix.",
    t: "portion creep friction principle palm-sized protein smaller plates environment design no obsessive tracking",
  },
  26: {
    s: "What FURBIE would think.",
    t: "FURBIE Honda Civic Type R motorsport metaphor eating for performance not habit ketones cognitive function reaction time",
  },
  27: {
    s: "The morning ritual.",
    t: "cortisol awakening response no breakfast argument replace food habit with morning ritual hot drink sitting down tasting it",
  },
  28: {
    s: "Four weeks. What the body has already done.",
    t: "Kristin Neff self-compassion stronger predictor than self-criticism preview inner critic work",
  },
  29: {
    s: "Interview with a vampire (your inner critic edition).",
    t: "Interview with Vampire exercise bariatric retreats curiosity not combat who does voice echo what is it protecting",
  },
  30: {
    s: "Day 30. You're halfway.",
    t: "halfway mark pause acknowledge foundation vs installation phase optional future self note from Day 60",
  },
  31: {
    s: "The food story you've been telling.",
    t: "narrative therapy I've always been a carb person question find counter-evidence rewrite story updated frame",
  },
  32: {
    s: "Why you don't need motivation. You need a cue.",
    t: "habit formation research cues not motivation closing kitchen ritual post-dinner signal herbal tea",
  },
  33: {
    s: "A soup for the cold days (three ingredients, genuinely good).",
    t: "Three-Ingredient Roasted Cauliflower Soup: roast until charred stock cream crème fraîche blend season keeps 3 days",
  },
  34: {
    s: "On coexisting with the inner critic.",
    t: "coexist not eliminate thank you for trying to protect me I've got this inner critic as passenger not driver",
  },
  35: {
    s: "Five weeks. What's stirring?",
    t: "genuine desire vs tired obligation even small spark is neurologically significant preview sustainability",
  },
  36: {
    s: "What sustainability actually requires.",
    t: "three requirements strategy identity environment not two what in environment makes good choices harder",
  },
  37: {
    s: "The emotional eating cycle (and how to interrupt it).",
    t: "Crazy Eight cycle bariatric retreats interrupt at trigger physiological sigh double inhale long exhale",
  },
  38: {
    s: "A letter from your future self.",
    t: "future self letter exercise retreat work written in Lorraine voice evenings got easier freedom from knowing-not-doing gap",
  },
  39: {
    s: "Boredom is not hunger.",
    t: "real vs boredom hunger hard-boiled egg and spinach test what are you actually hungry for connection rest meaning",
  },
  40: {
    s: "The cheese and olive plate (and why you deserve it).",
    t: "Anti-Sabotage Plate: aged cheese olives salami prosciutto cucumber celery closing kitchen beautifully abundance not austerity",
  },
  41: {
    s: "What to do when it all falls apart.",
    t: "physiological sigh so you stuffed up reframe next meal not next Monday recovery time is the actual variable",
  },
  42: {
    s: "Six weeks. The shift is real.",
    t: "42 days becoming someone in her own corner consolidation forward momentum not far",
  },
  43: {
    s: "The pain body and food (the bit nobody talks about).",
    t: "Eckhart Tolle pain body accumulated emotional history what emotional weight looking for somewhere to land",
  },
  44: {
    s: "Movement as medicine (not punishment).",
    t: "exercise not punishment for food fat-adapted body movement as self-respect walking swimming what genuinely enjoy",
  },
  45: {
    s: "The contribution loop.",
    t: "six human needs contribution Chrysalis For Women SWITCH clients being well enables better giving congruence professional asset",
  },
  46: {
    s: "Steak and butter (the five-minute luxury).",
    t: "Five-Minute Steak: cast iron very hot 2-3 min per side butter baste last minute rest as long as cooked triumph abundance",
  },
  47: {
    s: "What manifesting is actually about.",
    t: "RAS reticular activating system neurological basis affirmations I am learning to be in my own corner say while looking in mirror",
  },
  48: {
    s: "The people around you.",
    t: "social environment change is socially disruptive Marc in corner for two decades draw on allies deliberately",
  },
  49: {
    s: "Seven weeks. Stay in flow.",
    t: "Active Weight Loss Phase complacency warning flow not peak performance just showing up without drama quiet confidence",
  },
  50: {
    s: "You've changed. Time to update the story.",
    t: "narrative therapy what story says now vs Day 1 descriptive not aspirational one sentence who are you now",
  },
  51: {
    s: "The stabilisation phase (and why it's genius).",
    t: "set-point science maintenance as a skill 2 weeks per 10kg leptin hormonal infrastructure new weight becomes home",
  },
  52: {
    s: "The four questions (applied to you).",
    t: "Byron Katie The Work applied to it's not that bad four questions turnaround it IS a big deal now is right time",
  },
  53: {
    s: "What women who've kept the weight off do differently.",
    t: "settled identity recovery practice environment does more than willpower I want to fully replacing I have to",
  },
  54: {
    s: "A meal to mark the final stretch.",
    t: "Weekend Breakfast: bacon eggs fried in bacon fat avocado spinach tomato under 10 minutes tastes like Sunday in good hotel",
  },
  55: {
    s: "The ego, the identity, and letting go.",
    t: "I should have this sorted vulnerability as professional asset I am working on this with integrity not a worse coach",
  },
  56: {
    s: "What's next beyond 10kg.",
    t: "111 Diet long term settled relationship with food real goal what does she eat without thinking how navigate evenings",
  },
  57: {
    s: "Turning pain into purpose (the coach version).",
    t: "struggle as professional depth bariatric patients knowing right thing still struggling irreplaceable understanding",
  },
  58: {
    s: "The habits that will outlast this series.",
    t: "what has actually landed I wonder vs I have to natural now inner critic named not obeyed meal list in kitchen",
  },
  59: {
    s: "To the version of you who almost didn't read Day 1.",
    t: "trajectory matters more than current number brave enough to try one more time 59 mornings not perfectly but consistently",
  },
  60: {
    s: "Day 60. The beginning.",
    t: "not an ending weight is side effect of the work applied knowledge to yourself P.S. steak with butter always a good choice",
  },
};

const SYS = `You write emails for Lorraine Hamilton's personal 60-day morning series. Lorraine: Scottish-born mentor coach in NZ, neurodivergent, SWITCH Coaching Ecosystem founder, works with bariatric surgery patients, races a Honda Civic Type R named FURBIE, doing this series to lose 10kg by shifting "I have to" → "I want to" using her own frameworks: three-brain (head/heart/gut), polyvagal theory, inner critic work, "I wonder" questions.

Write as a wise inner mentor / future self. Warm, direct, dry, intelligent. British spelling. No exclamation marks. 3-5 paragraphs. Her patterns: evening carb sabotage, stops weighing to avoid evidence, adds rice to pad meals, gets disheartened at plateaus, inner critic says "it's not that bad you can come back to it". Use *italic* for I wonder questions and key internal voice quotes.`;

function loadState(k) {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : null;
  } catch {
    return null;
  }
}

function saveState(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}

function Inline({ text }) {
  const P = "#4B2D6E";
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**"))
          return (
            <strong key={i} style={{ fontWeight: 600, color: P }}>
              {p.slice(2, -2)}
            </strong>
          );
        if (p.startsWith("*") && p.endsWith("*"))
          return <em key={i}>{p.slice(1, -1)}</em>;
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function EmailBody({ text }) {
  if (!text) return null;
  const P = "#4B2D6E",
    I = "#2A2035",
    T = "#C8A0C8";
  return (
    <>
      {text.split("\n").map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 9 }} />;
        if (t === "---")
          return (
            <hr
              key={i}
              style={{
                border: "none",
                borderTop: "1px solid #e8d8f5",
                margin: "14px 0",
              }}
            />
          );
        const isItalic =
          t.startsWith("*") && t.endsWith("*") && !t.startsWith("**");
        if (isItalic)
          return (
            <p
              key={i}
              style={{
                margin: "12px 0",
                paddingLeft: 14,
                borderLeft: `2px solid ${T}`,
                fontStyle: "italic",
                color: P,
                fontSize: 14,
                lineHeight: 1.75,
              }}
            >
              <Inline text={t.slice(1, -1)} />
            </p>
          );
        return (
          <p
            key={i}
            style={{
              margin: "5px 0",
              color: I,
              fontSize: 14,
              lineHeight: 1.75,
            }}
          >
            <Inline text={t} />
          </p>
        );
      })}
    </>
  );
}

export default function App() {
  const saved = loadState("iwantto-v4");
  const [day, setDay] = useState(saved?.d || 1);
  const [unlocked, setUnlocked] = useState(saved?.u || 1);
  const [entries, setEntries] = useState(saved?.e || {});
  const [view, setView] = useState("email");
  const [refl, setRefl] = useState("");
  const [moods, setMoods] = useState([]);
  const [cache, setCache] = useState({});
  const [curEmail, setCurEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const reflRef = useRef(null);

  const fetchEmail = async (d) => {
    if (DAYS_1_7[d]) return DAYS_1_7[d];
    if (cache[d]) return cache[d];
    const m = META[d];
    if (!m) return { s: `Day ${d}`, b: "Loading..." };
    setLoading(true);
    try {
      const wk = Math.floor((d - 1) / 7);
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYS,
          messages: [
            {
              role: "user",
              content: `Day ${d} of 60 (Week ${wk + 1}: ${
                WEEKS[wk]
              }).\nSubject: "${m.s}"\nTheme: ${
                m.t
              }\n\nWrite the email body only. No subject line.`,
            },
          ],
        }),
      });
      const j = await res.json();
      const body =
        j.content?.[0]?.text?.trim() || "Unable to load. Please try again.";
      const em = { s: m.s, b: body };
      setCache((prev) => ({ ...prev, [d]: em }));
      return em;
    } catch {
      return {
        s: META[d]?.s || `Day ${d}`,
        b: "Connection error. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurEmail(null);
    fetchEmail(day).then(setCurEmail);
  }, [day]);

  const entry = entries[day];
  const isLocked = day > unlocked;
  const isDone = !!entry?.reflection;
  const wk = Math.floor((day - 1) / 7);
  const totalDone = Object.values(entries).filter((e) => e?.reflection).length;

  const P = "#4B2D6E",
    BLUSH = "#E8C4C4",
    THISTLE = "#C8A0C8",
    INK = "#2A2035",
    MIST = "#F0ECF5";

  function toggleMood(m) {
    setMoods((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m].slice(0, 3)
    );
  }

  async function handleSave() {
    if (!refl.trim()) return;
    setSaving(true);
    const ctx = [];
    for (let d2 = Math.max(1, day - 5); d2 < day; d2++) {
      const e = entries[d2];
      if (e?.reflection)
        ctx.push(
          `Day ${d2} (${e.mood?.join(",") || "no mood"}): "${e.reflection.slice(
            0,
            250
          )}"`
        );
    }
    ctx.push(
      `Day ${day} (${moods.join(",") || "no mood"}): "${refl.slice(0, 250)}"`
    );

    let nextOpening = null;
    if (day < 60) {
      setGenerating(true);
      try {
        const nm = META[day + 1] || DAYS_1_7[day + 1];
        const ns = nm?.s || `Day ${day + 1}`;
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 500,
            system: `Write a personalised opening paragraph for Lorraine Hamilton's morning email series. Lorraine: Scottish-born mentor coach NZ, neurodivergent, SWITCH Coaching Ecosystem founder, races FURBIE Honda Civic Type R, 60-day series shifting "I have to" → "I want to" around 10kg goal. Frameworks: three-brain (head/heart/gut), polyvagal, inner critic.\n\nWrite ONE paragraph (3-5 sentences) naturally acknowledging something specific from her recent reflections, bridging to tomorrow's topic. Warm, direct, slightly dry. British spelling. No exclamation marks. Speak naturally — no "I notice" or "based on what you shared".`,
            messages: [
              {
                role: "user",
                content: `Recent reflections:\n${ctx.join(
                  "\n\n"
                )}\n\nTomorrow Day ${
                  day + 1
                }: "${ns}"\n\nWrite the opening paragraph.`,
              },
            ],
          }),
        });
        const j = await res.json();
        nextOpening = j.content?.[0]?.text?.trim() || null;
      } catch {}
      setGenerating(false);
    }

    const newEntries = {
      ...entries,
      [day]: {
        reflection: refl.trim(),
        mood: moods,
        ts: new Date().toISOString(),
      },
      ...(nextOpening && day < 60
        ? { [day + 1]: { ...(entries[day + 1] || {}), aiOpening: nextOpening } }
        : {}),
    };
    const newUnlocked = Math.max(unlocked, Math.min(day + 1, 60));
    setEntries(newEntries);
    setUnlocked(newUnlocked);
    setSaving(false);
    setView("email");
    setRefl("");
    setMoods([]);
    saveState("iwantto-v4", { u: newUnlocked, d: day, e: newEntries });
  }

  function goToDay(d) {
    if (d > unlocked) return;
    setDay(d);
    setView("email");
    setRefl(entries[d]?.reflection || "");
    setMoods(entries[d]?.mood || []);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F4F9",
        fontFamily: "Georgia, serif",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .fade-in { animation: fadeIn 0.3s ease; }
        button { transition: opacity 0.15s; }
        button:hover:not(:disabled) { opacity: 0.85; }
      `}</style>

      <div
        style={{
          background: P,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              color: "#E8D8F5",
              fontSize: 15,
              fontFamily: "Georgia, serif",
              letterSpacing: "0.01em",
            }}
          >
            The "I Want To" Series
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 11,
              fontFamily: "system-ui",
            }}
          >
            {totalDone}/60 days complete
          </span>
        </div>
        <button
          onClick={() =>
            setView((v) => (v === "journal" ? "email" : "journal"))
          }
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            borderRadius: 20,
            padding: "4px 14px",
            fontSize: 12,
            cursor: "pointer",
            fontFamily: "system-ui",
          }}
        >
          {view === "journal" ? "← Back" : "Journal"}
        </button>
      </div>

      {view === "journal" ? (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "24px 16px" }}>
          <h2
            style={{
              color: P,
              fontSize: 20,
              fontWeight: "normal",
              marginBottom: 24,
              fontFamily: "Georgia, serif",
            }}
          >
            Your journey so far
          </h2>
          {Object.keys(entries)
            .filter((k) => entries[k]?.reflection)
            .map(Number)
            .sort((a, b) => a - b)
            .map((d) => {
              const e = entries[d];
              const em = DAYS_1_7[d] || META[d];
              const wi = Math.floor((d - 1) / 7);
              return (
                <div
                  key={d}
                  onClick={() => goToDay(d)}
                  style={{
                    background: "white",
                    border: "1px solid #EDE8F5",
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 10,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <span
                        style={{
                          fontFamily: "system-ui",
                          fontSize: 11,
                          color: P,
                          opacity: 0.4,
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        Day {d} · {WEEKS[wi]}
                      </span>
                      <p
                        style={{
                          fontSize: 13,
                          color: P,
                          marginBottom: 6,
                          fontFamily: "Georgia, serif",
                          fontWeight: "normal",
                          margin: "0 0 6px",
                        }}
                      >
                        {em?.s || `Day ${d}`}
                      </p>
                      <p
                        style={{
                          fontFamily: "system-ui",
                          fontSize: 11,
                          color: INK,
                          opacity: 0.7,
                          lineHeight: 1.5,
                          margin: 0,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {e.reflection}
                      </p>
                    </div>
                    {e.mood?.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                          flexShrink: 0,
                        }}
                      >
                        {e.mood.map((m) => (
                          <span
                            key={m}
                            style={{
                              fontFamily: "system-ui",
                              fontSize: 10,
                              padding: "2px 8px",
                              borderRadius: 10,
                              background: MIST,
                              color: P,
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          {totalDone === 0 && (
            <p
              style={{
                fontFamily: "system-ui",
                fontSize: 13,
                color: P,
                opacity: 0.5,
                textAlign: "center",
                paddingTop: 48,
              }}
            >
              Your reflections will appear here as you complete each day.
            </p>
          )}
        </div>
      ) : (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 16px" }}>
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "system-ui",
                  fontSize: 11,
                  color: P,
                  opacity: 0.6,
                }}
              >
                Week {wk + 1}: {WEEKS[wk]}
              </span>
              <span
                style={{
                  fontFamily: "system-ui",
                  fontSize: 11,
                  color: INK,
                  opacity: 0.4,
                }}
              >
                Day {((day - 1) % 7) + 1} of 7
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {Array.from({ length: 60 }, (_, i) => {
                const d = i + 1,
                  comp = !!entries[d]?.reflection,
                  lkd = d > unlocked,
                  act = d === day,
                  ws = i % 7 === 0 && i > 0;
                return (
                  <span key={d}>
                    {ws && (
                      <span style={{ display: "inline-block", width: 6 }} />
                    )}
                    <span
                      onClick={() => goToDay(d)}
                      title={`Day ${d}${comp ? " ✓" : lkd ? " 🔒" : ""}`}
                      style={{
                        display: "inline-block",
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        cursor: lkd ? "default" : "pointer",
                        background: act
                          ? P
                          : comp
                          ? THISTLE
                          : lkd
                          ? "#DDD8E8"
                          : BLUSH,
                        border: act
                          ? `2px solid ${P}`
                          : "1.5px solid transparent",
                        opacity: lkd ? 0.35 : 1,
                        transition: "all 0.15s",
                      }}
                    />
                  </span>
                );
              })}
            </div>
          </div>

          {view === "email" && (
            <div className="fade-in">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "system-ui",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: P,
                    opacity: 0.5,
                  }}
                >
                  Day {day}
                </span>
                {isDone && (
                  <span
                    style={{
                      fontFamily: "system-ui",
                      fontSize: 11,
                      padding: "2px 10px",
                      borderRadius: 10,
                      background: MIST,
                      color: P,
                    }}
                  >
                    ✓ Reflected
                  </span>
                )}
              </div>
              {isLocked ? (
                <div
                  style={{
                    background: MIST,
                    borderRadius: 16,
                    padding: "48px 24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 12 }}>🔒</div>
                  <p
                    style={{
                      fontFamily: "system-ui",
                      fontSize: 13,
                      color: P,
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    This day unlocks after you reflect on Day {day - 1}.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    background: "white",
                    border: "1px solid #EDE8F5",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 1px 10px rgba(75,45,110,0.07)",
                  }}
                >
                  <div
                    style={{
                      padding: "20px 20px 16px",
                      borderBottom: "1px solid #F0ECF5",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: 19,
                        fontWeight: "normal",
                        color: P,
                        lineHeight: 1.35,
                        margin: 0,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {curEmail?.s || "Loading…"}
                    </h1>
                    {entry?.mood?.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: 4,
                          marginTop: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        {entry.mood.map((m) => (
                          <span
                            key={m}
                            style={{
                              fontFamily: "system-ui",
                              fontSize: 10,
                              padding: "2px 8px",
                              borderRadius: 10,
                              background: MIST,
                              color: P,
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {entry?.aiOpening && (
                    <div
                      style={{
                        padding: "14px 20px",
                        background: "#FBF8FF",
                        borderBottom: "1px solid #F0ECF5",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          fontStyle: "italic",
                          color: P,
                          opacity: 0.88,
                          lineHeight: 1.75,
                          margin: 0,
                        }}
                      >
                        {entry.aiOpening}
                      </p>
                    </div>
                  )}
                  <div style={{ padding: "18px 20px 22px" }}>
                    {loading ? (
                      <div style={{ padding: "8px 0" }}>
                        {[100, 100, 75, 100, 55].map((w, i) => (
                          <div
                            key={i}
                            style={{
                              height: 13,
                              marginBottom: 10,
                              borderRadius: 6,
                              width: `${w}%`,
                              background:
                                "linear-gradient(90deg, #ece4f4 25%, #f7f4fb 50%, #ece4f4 75%)",
                              backgroundSize: "200% 100%",
                              animation: "shimmer 1.5s infinite",
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <EmailBody text={curEmail?.b} />
                    )}
                  </div>
                  {!isDone && !isLocked && curEmail && !loading && (
                    <div style={{ padding: "0 20px 22px" }}>
                      <button
                        onClick={() => {
                          setView("reflect");
                          setTimeout(() => reflRef.current?.focus(), 200);
                        }}
                        style={{
                          width: "100%",
                          padding: "13px",
                          background: P,
                          color: "white",
                          border: "none",
                          borderRadius: 12,
                          fontSize: 14,
                          cursor: "pointer",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        I've read this — add my reflection →
                      </button>
                    </div>
                  )}
                  {isDone && (
                    <div style={{ padding: "0 20px 22px" }}>
                      <div
                        style={{
                          background: MIST,
                          borderRadius: 12,
                          padding: "12px 16px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "system-ui",
                            fontSize: 11,
                            color: INK,
                            opacity: 0.45,
                            marginBottom: 5,
                            marginTop: 0,
                          }}
                        >
                          Your reflection
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: INK,
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {entry.reflection}
                        </p>
                      </div>
                      {day < 60 && day < unlocked && (
                        <button
                          onClick={() => goToDay(day + 1)}
                          style={{
                            width: "100%",
                            marginTop: 10,
                            padding: "12px",
                            background: BLUSH,
                            color: P,
                            border: "none",
                            borderRadius: 12,
                            fontSize: 13,
                            cursor: "pointer",
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          Day {day + 1} →
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 16,
                }}
              >
                <button
                  onClick={() => goToDay(Math.max(1, day - 1))}
                  disabled={day === 1}
                  style={{
                    background: "none",
                    border: "none",
                    color: P,
                    fontSize: 13,
                    cursor: day === 1 ? "default" : "pointer",
                    opacity: day === 1 ? 0.2 : 0.55,
                    fontFamily: "Georgia, serif",
                    padding: "4px 0",
                  }}
                >
                  ← Day {day - 1}
                </button>
                <button
                  onClick={() => goToDay(Math.min(unlocked, day + 1))}
                  disabled={day >= unlocked}
                  style={{
                    background: "none",
                    border: "none",
                    color: P,
                    fontSize: 13,
                    cursor: day >= unlocked ? "default" : "pointer",
                    opacity: day >= unlocked ? 0.2 : 0.55,
                    fontFamily: "Georgia, serif",
                    padding: "4px 0",
                  }}
                >
                  Day {day + 1} →
                </button>
              </div>
            </div>
          )}

          {view === "reflect" && (
            <div className="fade-in">
              <div
                style={{
                  background: "white",
                  border: "1px solid #EDE8F5",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 1px 10px rgba(75,45,110,0.07)",
                }}
              >
                <div
                  style={{
                    padding: "20px 20px 16px",
                    borderBottom: "1px solid #F0ECF5",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: "normal",
                      color: P,
                      margin: 0,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Your reflection
                  </h2>
                  <p
                    style={{
                      fontFamily: "system-ui",
                      fontSize: 11,
                      color: INK,
                      opacity: 0.45,
                      marginTop: 4,
                      marginBottom: 0,
                    }}
                  >
                    Day {day} · {WEEKS[wk]}
                  </p>
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <p
                    style={{
                      fontFamily: "system-ui",
                      fontSize: 12,
                      color: INK,
                      opacity: 0.55,
                      marginBottom: 12,
                      lineHeight: 1.55,
                      marginTop: 0,
                    }}
                  >
                    What landed? What stirred? What are you noticing? Your words
                    shape tomorrow's opening.
                  </p>
                  <textarea
                    ref={reflRef}
                    value={refl}
                    onChange={(e) => setRefl(e.target.value)}
                    placeholder="Write whatever comes…"
                    rows={6}
                    style={{
                      width: "100%",
                      background: MIST,
                      border: "1px solid #EDE8F5",
                      borderRadius: 12,
                      padding: 14,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: INK,
                      fontFamily: "Georgia, serif",
                      resize: "none",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = THISTLE)}
                    onBlur={(e) => (e.target.style.borderColor = "#EDE8F5")}
                  />
                  <div style={{ marginTop: 16 }}>
                    <p
                      style={{
                        fontFamily: "system-ui",
                        fontSize: 11,
                        color: INK,
                        opacity: 0.5,
                        marginBottom: 8,
                        marginTop: 0,
                      }}
                    >
                      Today's energy (choose up to 3)
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {MOODS.map((m) => (
                        <button
                          key={m}
                          onClick={() => toggleMood(m)}
                          style={{
                            fontFamily: "system-ui",
                            fontSize: 11,
                            padding: "5px 12px",
                            borderRadius: 16,
                            cursor: "pointer",
                            background: moods.includes(m) ? P : MIST,
                            color: moods.includes(m) ? "white" : P,
                            border: `1px solid ${
                              moods.includes(m) ? P : "#EDE8F5"
                            }`,
                          }}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  {day < 60 && (
                    <div
                      style={{
                        marginTop: 16,
                        padding: "10px 14px",
                        background: "#FBF8FF",
                        border: "1px solid #EDE8F5",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: THISTLE,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        ✦
                      </span>
                      <p
                        style={{
                          fontFamily: "system-ui",
                          fontSize: 11,
                          color: P,
                          opacity: 0.6,
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {generating
                          ? "Weaving your reflection into tomorrow's opening…"
                          : "Tomorrow's email will open with a paragraph shaped by what you share here."}
                      </p>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                    <button
                      onClick={() => setView("email")}
                      style={{
                        padding: "11px 18px",
                        background: MIST,
                        color: P,
                        border: "none",
                        borderRadius: 12,
                        fontSize: 13,
                        cursor: "pointer",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={!refl.trim() || saving || generating}
                      style={{
                        flex: 1,
                        padding: "11px",
                        background: P,
                        color: "white",
                        border: "none",
                        borderRadius: 12,
                        fontSize: 13,
                        cursor: "pointer",
                        fontFamily: "Georgia, serif",
                        opacity: !refl.trim() || saving || generating ? 0.4 : 1,
                      }}
                    >
                      {saving || generating
                        ? "Saving…"
                        : `Save & unlock Day ${Math.min(day + 1, 60)}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
