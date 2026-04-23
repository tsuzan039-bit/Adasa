import React from 'react'
import { useParams, Link } from 'react-router-dom'
import postsData from "../data/posts.json"
import cam1 from "../assets/images/photo-32.jpg";
import dawod from "../assets/images/photo-11a.jpg";
import cam2 from "../assets/images/photo0d.jpg";
import mob from "../assets/images/ph7.jpg";
import laith from "../assets/images/ph59.jpg";
import gamal from "../assets/images/ph4.jpg";

const sections = [
  { num: 1, title: "قاعدة الأثلاث" },
  { num: 2, title: "الخطوط التوجيهية" },
  { num: 3, title: "الإطار داخل الإطار" },
  { num: 4, title: "التماثل والأنماط" },
  { num: 5, title: "المساحة السلبية" },
  { num: 6, title: "كسر القواعد" },
  { num: 7, title: "الخلاصة" },
];

const tips = [
  {
    title: "المعدات الأساسية",
    body: "حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.",
  },
  {
    title: "قاعدة الأثلاث",
    body: "قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.",
  },
  {
    title: "الإطار داخل الإطار",
    body: "قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.",
  },
  {
    title: "المساحة السلبية",
    body: "لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.",
  },
  {
    title: "كسر القواعد",
    body: "اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.",
  },
  {
    title: "الخلاصة",
    body: "التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.",
  },
];

const related = [
  { img: cam1, time: "7", date: "٨ يناير ٢٠٢٦", title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي", author: "داوود خالد", avatar: dawod },
  { img: cam2, time: "9", date: "٥ يناير ٢٠٢٦", title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية", author: "ليث محمود", avatar: laith },
  { img: mob,  time: "8", date: "٣ يناير ٢٠٢٦", title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك", author: "جمال محمد", avatar: gamal },
];

export default function Details() {
const { posts } = postsData

  const { id } = useParams();
  const mypost = posts.find((item) => item.id === Number(id));

  if (!mypost) {
    return (
      <div style={{ minHeight: "100vh", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#f97316", fontFamily: "'Cairo',sans-serif", fontSize: 20 }}>البوست غير موجود</p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        .det { font-family:'Cairo',sans-serif; direction:rtl; background:#111; color:#fff; min-height:100vh; }

        /* HERO */
        .det-hero {
          position:relative;
          height: 100vh;
          min-height: 600px;
          overflow:hidden;
        }
        .det-hero-img {
          width:100%; height:100%;
          object-fit:cover;
          filter:brightness(0.4);
        }
        .det-hero-overlay {
          position:absolute; inset:0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.1) 40%,
            rgba(17,17,17,0.85) 75%,
            rgba(17,17,17,1) 100%
          );
        }
        .det-hero-content {
          position:absolute; inset:0;
          display:flex; flex-direction:column;
          justify-content:space-between;
          padding: 24px clamp(16px,5vw,80px) 56px;
          max-width: 100%;
        }
        .det-breadcrumb {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:8px;
          padding:6px 14px;
          font-size:13px; color:#9ca3af;
          margin-bottom:20px;
          width:fit-content;
        }
        .det-breadcrumb a { color:#f97316; text-decoration:none; }
        .det-cat-badge {
          display:inline-block;
          background:rgba(249,115,22,0.15);
          border:1px solid rgba(249,115,22,0.35);
          color:#f97316; border-radius:8px;
          padding:5px 14px; font-size:13px; font-weight:700;
          margin-bottom:16px; width:fit-content;
        }
        .det-hero-title {
          font-size: clamp(1.5rem,4vw,2.8rem);
          font-weight:900; line-height:1.4; margin:0 0 20px;
        }
        .det-hero-meta {
          display:flex; align-items:center; gap:20px; flex-wrap:wrap;
          font-size:13px; color:#9ca3af;
        }
        .det-hero-meta span { display:flex; align-items:center; gap:6px; }
        .det-author-row { display:flex; align-items:center; gap:12px; }
        .det-author-row img {
          width:42px; height:42px; border-radius:50%;
          object-fit:cover; border:2px solid #f97316;
        }
        .det-author-row .name { font-size:14px; font-weight:700; color:#fff; }
        .det-author-row .role { font-size:12px; color:#6b7280; }

        /* BODY LAYOUT */
        .det-body {
          max-width:1200px; margin:0 auto;
          padding: 48px clamp(16px,4vw,40px);
          display:grid;
          grid-template-columns: 1fr 300px;
          gap:40px;
          align-items:start;
        }
        @media(max-width:900px){
          .det-body { grid-template-columns:1fr; }
          .det-sidebar { order:-1; }
        }

        /* ARTICLE */
        .det-blockquote {
          border-right:4px solid #f97316;
          background:rgba(249,115,22,0.06);
          border-radius:0 12px 12px 0;
          padding:20px 24px;
          margin:0 0 36px;
          font-size:16px; color:#e5e7eb; line-height:1.8;
          font-style:italic;
        }
        .det-intro {
          font-size:15px; color:#9ca3af; line-height:1.9;
          margin:0 0 36px;
        }
        .det-tip {
          display:flex; gap:16px; margin-bottom:28px;
          background:#1a1a1a; border:1px solid #222;
          border-radius:14px; padding:20px 24px;
          transition: border-color .2s;
        }
        .det-tip:hover { border-color: #f97316; }
        .det-tip-icon {
          width:44px; height:44px; min-width:44px;
          background:rgba(249,115,22,0.12);
          border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-size:20px; color:#f97316;
        }
        .det-tip h3 { font-size:16px; font-weight:800; margin:0 0 8px; }
        .det-tip p  { font-size:13px; color:#9ca3af; line-height:1.8; margin:0; }

        /* TAGS */
        .det-tags { display:flex; gap:10px; flex-wrap:wrap; margin:32px 0; }
        .det-tag {
          background:#1a1a1a; border:1px solid #2a2a2a;
          color:#9ca3af; border-radius:8px;
          padding:6px 14px; font-size:13px; font-weight:600;
          transition: border-color .2s, color .2s;
          cursor:default;
        }
        .det-tag:hover { border-color:#f97316; color:#f97316; }

        /* SHARE */
        .det-share {
          display:flex; align-items:center; justify-content:space-between;
          background:#1a1a1a; border:1px solid #222; border-radius:14px;
          padding:16px 24px; margin:0 0 32px; flex-wrap:wrap; gap:12px;
        }
        .det-share-label { font-size:14px; font-weight:700; display:flex; align-items:center; gap:8px; }
        .det-share-icons { display:flex; gap:10px; }
        .det-share-icons a {
          width:38px; height:38px; border-radius:10px;
          background:#252525; border:1px solid #333;
          display:flex; align-items:center; justify-content:center;
          color:#9ca3af; text-decoration:none;
          transition: background .2s, color .2s, border-color .2s;
          font-size:15px;
        }
        .det-share-icons a:hover { background:#f97316; border-color:#f97316; color:#fff; }

        /* AUTHOR CARD */
        .det-author-card {
          background:#1a1a1a; border:1px solid #222; border-radius:16px;
          padding:28px 24px; display:flex; gap:20px; align-items:flex-start;
          margin-bottom:40px; flex-wrap:wrap;
        }
        .det-author-card img {
          width:72px; height:72px; border-radius:50%;
          object-fit:cover; border:3px solid #f97316;
          flex-shrink:0;
        }
        .det-author-card .label { font-size:11px; color:#f97316; font-weight:700; letter-spacing:.5px; margin-bottom:4px; }
        .det-author-card h3 { font-size:18px; font-weight:800; margin:0 0 2px; }
        .det-author-card .sub { font-size:12px; color:#6b7280; margin-bottom:10px; }
        .det-author-card p { font-size:13px; color:#9ca3af; line-height:1.8; margin:0; }

        /* SIDEBAR */
        .det-sidebar { position:sticky; top:80px; }

        .det-sidebar-card {
          background:#1a1a1a; border:1px solid #222; border-radius:16px;
          padding:24px; margin-bottom:16px;
        }
        .det-sidebar-title {
          display:flex; align-items:center; gap:10px;
          font-size:15px; font-weight:800; margin-bottom:20px;
        }
        .det-sidebar-title-icon {
          width:34px; height:34px;
          background:rgba(249,115,22,0.12); border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          color:#f97316; font-size:14px;
        }
        .det-toc-item {
          display:flex; align-items:center; gap:12px;
          padding:10px 0; border-bottom:1px solid #222;
          cursor:pointer; transition: color .2s;
        }
        .det-toc-item:last-child { border-bottom:none; }
        .det-toc-item:hover .toc-text { color:#f97316; }
        .det-toc-num {
          width:28px; height:28px; min-width:28px;
          background:#252525; border-radius:7px;
          display:flex; align-items:center; justify-content:center;
          font-size:12px; font-weight:700; color:#9ca3af;
        }
        .toc-text { font-size:13px; color:#9ca3af; }

        .det-meta-grid {
          display:grid; grid-template-columns:1fr 1fr; gap:12px;
        }
        .det-meta-item {
          background:#252525; border-radius:10px; padding:14px;
          text-align:center;
        }
        .det-meta-item .emoji { font-size:22px; margin-bottom:6px; }
        .det-meta-item .val { font-size:15px; font-weight:800; color:#fff; }
        .det-meta-item .lbl { font-size:11px; color:#6b7280; }

        .det-newsletter {
          background: linear-gradient(135deg,rgba(249,115,22,.15),rgba(249,115,22,.05));
          border:1px solid rgba(249,115,22,.25); border-radius:16px; padding:24px;
          text-align:center;
        }
        .det-newsletter .nl-icon { font-size:28px; margin-bottom:10px; }
        .det-newsletter h4 { font-size:16px; font-weight:800; margin:0 0 6px; }
        .det-newsletter p  { font-size:12px; color:#9ca3af; margin:0 0 16px; }
        .det-newsletter button {
          background:#f97316; color:#fff; border:none;
          border-radius:10px; padding:10px 24px;
          font-family:'Cairo',sans-serif; font-size:13px; font-weight:700;
          cursor:pointer; width:100%; transition: opacity .2s;
        }
        .det-newsletter button:hover { opacity:.85; }

        /* RELATED */
        .det-related { background:#0e0e0e; padding:64px clamp(16px,4vw,40px); }
        .det-related-inner { max-width:1200px; margin:0 auto; }
        .det-related-header {
          display:flex; align-items:flex-end; justify-content:space-between;
          margin-bottom:36px; flex-wrap:wrap; gap:12px;
        }
        .det-related-header h2 { font-size:clamp(1.3rem,3vw,1.8rem); font-weight:900; margin:0 0 4px; }
        .det-related-header p  { font-size:13px; color:#6b7280; margin:0; }
        .det-related-header a  { font-size:13px; color:#f97316; font-weight:700; text-decoration:none; white-space:nowrap; display:flex; align-items:center; gap:6px; }
        .det-related-header a:hover { opacity:.8; }

        .det-related-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
          gap:20px;
        }
        .det-rel-card {
          background:#1a1a1a; border:1px solid #222; border-radius:16px;
          overflow:hidden; text-decoration:none; color:inherit;
          transition: border-color .3s, transform .3s; display:block;
        }
        .det-rel-card:hover { border-color:#f97316; transform:translateY(-4px); }
        .det-rel-img { height:180px; overflow:hidden; }
        .det-rel-img img { width:100%; height:100%; object-fit:cover; transition: transform .4s; }
        .det-rel-card:hover .det-rel-img img { transform:scale(1.05); }
        .det-rel-body { padding:18px; }
        .det-rel-meta { font-size:12px; color:#6b7280; display:flex; gap:12px; margin-bottom:10px; }
        .det-rel-meta span { display:flex; align-items:center; gap:4px; }
        .det-rel-title { font-size:15px; font-weight:800; line-height:1.5; margin:0 0 14px; }
        .det-rel-footer { display:flex; align-items:center; gap:10px; padding-top:12px; border-top:1px solid #2a2a2a; }
        .det-rel-footer img { width:30px; height:30px; border-radius:50%; object-fit:cover; border:2px solid #333; }
        .det-rel-footer .aname { font-size:12px; font-weight:700; }
        .det-rel-footer .arr { margin-right:auto; color:#f97316; }
      `}</style>

      <div className="det">

        {/* ── HERO ── */}
        <div className="det-hero">
          <img className="det-hero-img" src={mypost.image} alt={mypost.title} />
          <div className="det-hero-overlay" />
          <div className="det-hero-content">

            {/* breadcrumb — TOP */}
            <div style={{ display:"flex", justifyContent:"flex-end" }}>
              <div className="det-breadcrumb">
                <Link to="/">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </Link>
                <span>›</span>
                <Link to="/blog">المدونة</Link>
                <span>›</span>
                <span>{mypost.category}</span>
              </div>
            </div>

            {/* title + meta — BOTTOM */}
            <div style={{ maxWidth: 780 }}>
              <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
                <span className="det-cat-badge">{mypost.category}</span>
                <span className="det-hero-meta">
                  <span>
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {mypost.date}
                  </span>
                  <span>
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {mypost.readTime}
                  </span>
                </span>
              </div>

              <h1 className="det-hero-title">{mypost.title}</h1>

              <div className="det-author-row" style={{
                background:"rgba(0,0,0,0.45)",
                backdropFilter:"blur(8px)",
                border:"1px solid rgba(255,255,255,0.1)",
                borderRadius:12,
                padding:"12px 18px",
                width:"fit-content",
                marginTop:8
              }}>
                <img src={mypost.author.avatar} alt={mypost.author.name} />
                <div>
                  <div className="name">{mypost.author.name}</div>
                  <div className="role">{mypost.author.role}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── BODY ── */}
        <div className="det-body">

          {/* ARTICLE */}
          <article>
            <blockquote className="det-blockquote">
              "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية."
            </blockquote>

            <p className="det-intro">
              تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.
            </p>

            {tips.map((tip, i) => (
              <div className="det-tip" key={i}>
                <div className="det-tip-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.body}</p>
                </div>
              </div>
            ))}

            {/* TAGS */}
            <div className="det-tags">
              {["#التكوين", "#فن", "#التصوير"].map(t => (
                <span className="det-tag" key={t}>{t}</span>
              ))}
            </div>

            {/* SHARE */}
            <div className="det-share">
              <span className="det-share-label">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                شارك المقال
              </span>
              <div className="det-share-icons">
                <Link to="#"><i className="fa-solid fa-link" /></Link>
                <Link to="#"><i className="fa-brands fa-whatsapp" /></Link>
                <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
              </div>
            </div>

            {/* AUTHOR CARD */}
            <div className="det-author-card">
              <img src={mypost.author.avatar} alt={mypost.author.name} />
              <div>
                <div className="label">كاتب المقال</div>
                <h3>{mypost.author.name}</h3>
                <div className="sub">{mypost.author.role}</div>
                <p>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="det-sidebar">

            {/* TOC */}
            <div className="det-sidebar-card">
              <div className="det-sidebar-title">
                <div className="det-sidebar-title-icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </div>
                محتويات المقال
              </div>
              {sections.map(s => (
                <div className="det-toc-item" key={s.num}>
                  <div className="det-toc-num">{s.num}</div>
                  <span className="toc-text">{s.title}</span>
                </div>
              ))}
            </div>

            {/* META */}
            <div className="det-sidebar-card">
              <div className="det-meta-grid">
                <div className="det-meta-item">
                  <div className="emoji">📅</div>
                  <div className="val">10 يناير</div>
                  <div className="lbl">تاريخ النشر</div>
                </div>
                <div className="det-meta-item">
                  <div className="emoji">⏱️</div>
                  <div className="val">10 دقائق</div>
                  <div className="lbl">وقت القراءة</div>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="det-newsletter">
              <div className="nl-icon">✉️</div>
              <h4>لا تفوت جديدنا</h4>
              <p>اشترك للحصول على أحدث المقالات</p>
              <button>تصفح المزيد</button>
            </div>

          </aside>
        </div>

        {/* ── RELATED ── */}
        <section className="det-related">
          <div className="det-related-inner">
            <div className="det-related-header">
              <div>
                <h2>مقالات قد تعجبك</h2>
                <p>استكشف المزيد من المحتوى المميز</p>
              </div>
              <Link to="/blog">
                عرض جميع المقالات
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
              </Link>
            </div>

            <div className="det-related-grid">
              {related.map((r, i) => (
                <Link className="det-rel-card" to="/blog" key={i}>
                  <div className="det-rel-img"><img src={r.img} alt={r.title} /></div>
                  <div className="det-rel-body">
                    <div className="det-rel-meta">
                      <span>
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {r.time} دقائق
                      </span>
                      <span>
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {r.date}
                      </span>
                    </div>
                    <h3 className="det-rel-title">{r.title}</h3>
                    <div className="det-rel-footer">
                      <img src={r.avatar} alt={r.author} />
                      <span className="aname">{r.author}</span>
                      <span className="arr">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
