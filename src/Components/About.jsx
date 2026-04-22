import { useState } from "react";

// ============================================================
// DATA
// ============================================================
const stats = [
  { icon: "📋", value: "15+", label: "تصنيف" },
  { icon: "✍️", value: "50+", label: "كاتب خبير" },
  { icon: "📰", value: "500+", label: "مقالة منشورة" },
  { icon: "👥", value: "2+مليون", label: "قارئ شهرياً" },
];

const values = [
  {
    icon: "🔄",
    title: "الجودة أولاً",
    desc: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: "⚡",
    title: "تركيز عملي",
    desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: "🤝",
    title: "المجتمع",
    desc: "تعلم مع آلاف المصورين",
  },
  {
    icon: "🔃",
    title: "دائماً محدث",
    desc: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

const team = [
  {
    name: "محمد علي",
    role: "مصور بورتريه",
    img: "https://i.pravatar.cc/150?img=11",
    active: true,
  },
  {
    name: "إبراهيم حسن",
    role: "مصور طبيعة",
    img: "https://i.pravatar.cc/150?img=52",
    active: false,
  },
  {
    name: "سالم أحمد",
    role: "مصور محترف",
    img: "https://i.pravatar.cc/150?img=14",
    active: false,
  },
  {
    name: "كريم يوسف",
    role: "مصور فوتوغرافي",
    img: "https://i.pravatar.cc/150?img=17",
    active: false,
  },
  {
    name: "عمر خالد",
    role: "مصور معماري",
    img: "https://i.pravatar.cc/150?img=18",
    active: false,
  },
  {
    name: "طارق سعيد",
    role: "مصور رياضي",
    img: "https://i.pravatar.cc/150?img=60",
    active: false,
  },
];

// ============================================================
// ICONS
// ============================================================
const LinkedinIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" fill="white" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================
// STYLES (inline — no external CSS needed)
// ============================================================
const styles = {
  page: {
    backgroundColor: "#111",
    color: "#fff",
    fontFamily: "'Cairo', 'Segoe UI', sans-serif",
    direction: "rtl",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  // ---- HERO ----
  hero: {
    padding: "80px 24px 60px",
    textAlign: "center",
    background: `
      radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%),
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px),
      #111
    `,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(249,115,22,0.15)",
    border: "1px solid rgba(249,115,22,0.3)",
    borderRadius: "20px",
    padding: "6px 16px",
    fontSize: "14px",
    color: "#f97316",
    marginBottom: "28px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#f97316",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "800",
    lineHeight: "1.3",
    margin: "0 0 24px",
    color: "#fff",
  },
  heroTitleAccent: {
    color: "#f97316",
  },
  heroDesc: {
    fontSize: "16px",
    color: "#9ca3af",
    lineHeight: "1.9",
    maxWidth: "640px",
    margin: "0 auto 48px",
  },
  // ---- STATS ----
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 16px",
  },
  statCard: {
    backgroundColor: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px 16px",
    textAlign: "center",
    transition: "border-color 0.3s, transform 0.3s",
    cursor: "default",
  },
  statIcon: { fontSize: "28px", marginBottom: "12px" },
  statValue: { fontSize: "28px", fontWeight: "800", color: "#f97316" },
  statLabel: { fontSize: "13px", color: "#6b7280", marginTop: "4px" },
  // ---- SECTION HEADER ----
  sectionWrap: { padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" },
  sectionHeader: { textAlign: "center", marginBottom: "56px" },
  sectionBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "12px",
  },
  sectionBadgeLine: {
    width: "32px",
    height: "2px",
    backgroundColor: "#f97316",
  },
  sectionSub: { fontSize: "14px", color: "#6b7280" },
  // ---- VALUES ----
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  valueCard: {
    backgroundColor: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "border-color 0.3s, transform 0.3s",
    cursor: "default",
  },
  valueIcon: {
    fontSize: "36px",
    backgroundColor: "rgba(249,115,22,0.12)",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  valueTitle: { fontSize: "18px", fontWeight: "700", marginBottom: "8px" },
  valueDesc: { fontSize: "13px", color: "#6b7280", lineHeight: "1.7" },
  // ---- TEAM ----
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  teamCard: (active) => ({
    backgroundColor: "#1a1a1a",
    border: `1px solid ${active ? "#f97316" : "#2a2a2a"}`,
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "border-color 0.3s, transform 0.3s",
    cursor: "default",
  }),
  avatarWrap: {
    position: "relative",
    width: "88px",
    height: "88px",
    margin: "0 auto 20px",
  },
  avatar: {
    width: "88px",
    height: "88px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #2a2a2a",
  },
  checkBadge: {
    position: "absolute",
    bottom: "4px",
    left: "4px",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    backgroundColor: "#f97316",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #1a1a1a",
  },
  memberName: { fontSize: "18px", fontWeight: "700", marginBottom: "4px" },
  memberRole: { fontSize: "13px", color: "#f97316", marginBottom: "20px" },
  socialRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  socialBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "#252525",
    border: "1px solid #333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
  // ---- CTA ----
  cta: {
    background: "linear-gradient(135deg, #f97316, #fb923c, #f59e0b)",
    padding: "72px 24px",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "16px",
  },
  ctaDesc: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)",
    maxWidth: "560px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
  },
  ctaBtns: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "opacity 0.2s",
  },
  btnSecondary: {
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(6px)",
    color: "#fff",
    border: "2px solid rgba(255,255,255,0.4)",
    borderRadius: "10px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.2s",
  },
};

// ============================================================
// COMPONENTS
// ============================================================
function StatCard({ icon, value, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.statCard,
        borderColor: hovered ? "#f97316" : "#2a2a2a",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.statIcon}>{icon}</div>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.valueCard,
        borderColor: hovered ? "#f97316" : "#2a2a2a",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.valueIcon}>{icon}</div>
      <div style={styles.valueTitle}>{title}</div>
      <div style={styles.valueDesc}>{desc}</div>
    </div>
  );
}

function TeamCard({ name, role, img, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.teamCard(active),
        borderColor: hovered ? "#f97316" : active ? "#f97316" : "#2a2a2a",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.avatarWrap}>
        <img src={img} alt={name} style={styles.avatar} />
        <div style={styles.checkBadge}>
          <CheckIcon />
        </div>
      </div>
      <div style={styles.memberName}>{name}</div>
      <div style={styles.memberRole}>{role}</div>
      <div style={styles.socialRow}>
        {[LinkedinIcon, GithubIcon, TwitterIcon].map((Icon, i) => (
          <button key={i} style={styles.socialBtn}
            onMouseEnter={e => { e.currentTarget.style.background = "#333"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#252525"; e.currentTarget.style.color = "#9ca3af"; }}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function About() {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section className=" mt-5" style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.dot} />
          من نحن
          <span style={styles.dot} />
        </div>

        <h1 style={styles.heroTitle}>
          مهمتنا هي{" "}
          <span style={styles.heroTitleAccent}>الإعلام والإلهام</span>
        </h1>

        <p style={styles.heroDesc}>
          مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <div style={styles.statsGrid}>
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#0e0e0e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>
              <span style={styles.sectionBadgeLine} />
              قيمنا
              <span style={styles.sectionBadgeLine} />
            </div>
            <p style={styles.sectionSub}>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>
          <div style={styles.valuesGrid}>
            {values.map((v, i) => (
              <ValueCard key={i} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>
              <span style={styles.sectionBadgeLine} />
              فريقنا
              <span style={styles.sectionBadgeLine} />
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: "800", margin: "8px 0" }}>
              تعرف على كتابنا
            </h2>
            <p style={styles.sectionSub}>
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>
          <div style={styles.teamGrid}>
            {team.map((m, i) => (
              <TeamCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>لديك أسئلة؟ دعنا نتحدث!</h2>
        <p style={styles.ctaDesc}>
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
          أو تريد فقط إلقاء التحية. لا تتردد في التواصل.
        </p>
        <div style={styles.ctaBtns}>
          <button style={styles.btnPrimary}>
            <MailIcon />
            تواصل معنا
          </button>
          <button style={styles.btnSecondary}>
            تصفح المقالات
          </button>
        </div>
      </section>

    </div>
  );
}