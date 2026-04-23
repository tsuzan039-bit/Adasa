import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import postsData from "../data/posts.json"
import Category from './Category/Category';
import Pages from "./Pages/Pages.jsx";

export default function Blog() {
  const [currentCategory, setcurrentCategory] = useState("جميع المقالات")
  const [display, setdisplay] = useState("grid")
  const [search, setsearch] = useState("")
  const [currentPage, setcurrentPage] = useState(1)

  const { categories, posts } = postsData  // ✅ هنا بعد كل الـ useState

  const allCat = ["جميع المقالات", ...categories.map((item) => item.name)];

  function handleCategory(value) {
    setcurrentCategory(value)
    setcurrentPage(1)
  }

  function handlePage(value) {
    setcurrentPage(value)
  }

  const filteration = posts.filter((item) => {
    return currentCategory == item.category || currentCategory == "جميع المقالات"
  }).filter((item) => {
    return item.title.includes(search)
  })

  const pagesNum = Math.ceil(filteration.length / 6)
  const lastIndex = currentPage * 6
  const firstIndex = lastIndex - 6
  const final = filteration.slice(firstIndex, lastIndex)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
        .blog-page { font-family:'Cairo',sans-serif; direction:rtl; background:#111; min-height:100vh; color:#fff; }
        .blog-hero { background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(249,115,22,0.13) 0%,transparent 65%),repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),#111; padding:100px 0; text-align:center; }
        .blog-hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(249,115,22,0.15); border:1px solid rgba(249,115,22,0.3); border-radius:20px; padding:6px 18px; font-size:14px; color:#f97316; margin-bottom:24px; }
        .blog-hero-badge span { width:7px; height:7px; border-radius:50%; background:#f97316; display:inline-block; }
        .blog-hero h1 { font-size:clamp(2rem,5vw,3.2rem); font-weight:900; margin:0 0 16px; color:#fff; }
        .blog-hero h1 em { color:#f97316; font-style:normal; }
        .blog-hero p { color:#9ca3af; font-size:16px; margin:0; }
        .blog-toolbar { background:#111; border-bottom:1px solid #222; position:sticky; top:0; z-index:100; padding:0 24px; }
        .blog-toolbar-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding:14px 0; }
        .blog-cats { display:flex; gap:8px; flex-wrap:wrap; list-style:none; margin:0; padding:0; }
        .blog-cats li button { background:transparent; border:1px solid #2a2a2a; color:#9ca3af; border-radius:8px; padding:7px 16px; font-family:'Cairo',sans-serif; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.2s; white-space:nowrap; }
        .blog-cats li button:hover { border-color:#f97316; color:#f97316; }
        .blog-cats li button.active { background:#f97316; border-color:#f97316; color:#fff; }
        .blog-search { position:relative; }
        .blog-search input { background:#1a1a1a; border:1px solid #2a2a2a; border-radius:10px; padding:9px 40px 9px 16px; color:#fff; font-family:'Cairo',sans-serif; font-size:13px; width:220px; outline:none; transition:border-color 0.2s; direction:rtl; }
        .blog-search input:focus { border-color:#f97316; }
        .blog-search input::placeholder { color:#555; }
        .blog-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); color:#555; pointer-events:none; }
        .blog-content { max-width:1200px; margin:0 auto; padding:32px 24px; }
        .blog-meta-bar { display:flex; align-items:center; justify-content:space-between; margin-bottom:28px; }
        .blog-count { font-size:14px; color:#6b7280; }
        .blog-count strong { color:#fff; font-weight:700; }
        .display-btns { display:flex; gap:4px; background:#1a1a1a; border:1px solid #2a2a2a; border-radius:10px; padding:4px; }
        .display-btns button { background:transparent; border:none; color:#555; width:36px; height:36px; border-radius:7px; cursor:pointer; transition:all 0.2s; display:flex; align-items:center; justify-content:center; font-size:15px; }
        .display-btns button.active { background:#f97316; color:#fff; }
        .blog-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:20px; }
        .card-grid { background:#1a1a1a; border:1px solid #222; border-radius:16px; overflow:hidden; transition:border-color 0.3s,transform 0.3s; text-decoration:none; color:inherit; display:block; }
        .card-grid:hover { border-color:#f97316; transform:translateY(-4px); }
        .card-grid-img { position:relative; height:200px; overflow:hidden; }
        .card-grid-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
        .card-grid:hover .card-grid-img img { transform:scale(1.05); }
        .card-cat-badge { position:absolute; top:12px; right:12px; background:rgba(249,115,22,0.9); color:#fff; font-size:11px; font-weight:700; padding:4px 10px; border-radius:6px; font-family:'Cairo',sans-serif; }
        .card-grid-body { padding:20px; }
        .card-meta { display:flex; align-items:center; gap:12px; font-size:12px; color:#6b7280; margin-bottom:10px; }
        .card-meta span { display:flex; align-items:center; gap:4px; }
        .card-title { font-size:17px; font-weight:800; color:#fff; margin:0 0 10px; line-height:1.5; }
        .card-excerpt { font-size:13px; color:#6b7280; line-height:1.7; margin:0 0 16px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:14px; border-top:1px solid #2a2a2a; }
        .card-author { display:flex; align-items:center; gap:10px; }
        .card-author img { width:34px; height:34px; border-radius:50%; object-fit:cover; border:2px solid #333; }
        .card-author-name { font-size:13px; font-weight:700; color:#fff; }
        .card-author-role { font-size:11px; color:#6b7280; }
        .card-read-link { font-size:12px; color:#f97316; font-weight:700; display:flex; align-items:center; gap:4px; }
        .blog-list { display:flex; flex-direction:column; gap:16px; }
        .card-list { background:#1a1a1a; border:1px solid #222; border-radius:16px; overflow:hidden; transition:border-color 0.3s; text-decoration:none; color:inherit; display:grid; grid-template-columns:1fr 280px; }
        .card-list:hover { border-color:#f97316; }
        .card-list-body { padding:28px 28px 28px 0; display:flex; flex-direction:column; justify-content:space-between; }
        .card-list-img { position:relative; overflow:hidden; }
        .card-list-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
        .card-list:hover .card-list-img img { transform:scale(1.04); }
        .blog-empty { text-align:center; padding:80px 24px; color:#6b7280; }
        .blog-empty h3 { font-size:20px; color:#fff; margin-bottom:8px; }
        @media(max-width:768px){ .card-list { grid-template-columns:1fr; } .card-list-img { height:200px; } .card-list-body { padding:20px; } .blog-toolbar-inner { flex-direction:column; align-items:flex-start; } .blog-search input { width:100%; } }
      `}</style>

      <div className="blog-page">
        <section className="blog-hero mt-5">
          <div className="blog-hero-badge"><span /><span />مدونتنا</div>
          <h1>استكشف <em>مقالاتنا</em></h1>
          <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </section>

        <nav className="blog-toolbar">
          <div className="blog-toolbar-inner">
            <ul className="blog-cats">
              {allCat.map((item) => (
                <li key={item}>
                  <button className={currentCategory === item ? "active" : ""} onClick={() => handleCategory(item)}>{item}</button>
                </li>
              ))}
            </ul>
            <div className="blog-search">
              <svg className="blog-search-icon" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="ابحث في المقالات..." />
            </div>
          </div>
        </nav>

        <div className="blog-content">
          <div className="blog-meta-bar">
            <p className="blog-count">عرض <strong>{filteration.length}</strong> مقالات</p>
            <div className="display-btns">
              <button className={display === "list" ? "active" : ""} onClick={() => setdisplay("list")} title="قائمة">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
              </button>
              <button className={display === "grid" ? "active" : ""} onClick={() => setdisplay("grid")} title="شبكة">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
              </button>
            </div>
          </div>

          {final.length === 0 ? (
            <div className="blog-empty"><h3>لا توجد نتائج</h3><p>جرب تغيير الفئة أو كلمة البحث</p></div>
          ) : display === "grid" ? (
            <div className="blog-grid">
              {final.map((item) => (
                <Link className="card-grid" to={`/blog/${item.id}`} key={item.id}>
                  <div className="card-grid-img">
                    <img src={item.image} alt={item.title} />
                    <span className="card-cat-badge">{item.category}</span>
                  </div>
                  <div className="card-grid-body">
                    <div className="card-meta">
                      <span><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 دقائق للقراءة</span>
                      <span><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>{item.date}</span>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-excerpt">{item.excerpt}</p>
                    <div className="card-footer">
                      <div className="card-author">
                        <img src={item.author.avatar} alt={item.author.name} />
                        <div>
                          <div className="card-author-name">{item.author.name}</div>
                          <div className="card-author-role">{item.author.role}</div>
                        </div>
                      </div>
                      <span className="card-read-link">اقرأ المقال<svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="blog-list">
              {final.map((item) => (
                <Link className="card-list" to={`/blog/${item.id}`} key={item.id}>
                  <div className="card-list-body">
                    <div>
                      <div className="card-meta" style={{ marginBottom: 12 }}>
                        <span style={{ background: "rgba(249,115,22,0.15)", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{item.category}</span>
                        <span><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>8 دقائق للقراءة</span>
                        <span><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>{item.date}</span>
                      </div>
                      <h3 className="card-title" style={{ fontSize: 22 }}>{item.title}</h3>
                      <p className="card-excerpt" style={{ WebkitLineClamp: 3 }}>{item.excerpt}</p>
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <img src={item.author.avatar} alt={item.author.name} />
                        <div>
                          <div className="card-author-name">{item.author.name}</div>
                          <div className="card-author-role">{item.author.role}</div>
                        </div>
                      </div>
                      <span className="card-read-link">اقرأ المقال<svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg></span>
                    </div>
                  </div>
                  <div className="card-list-img"><img src={item.image} alt={item.title} /></div>
                </Link>
              ))}
            </div>
          )}

          <div style={{ marginTop: 40 }}>
            <Pages currentPage={currentPage} handlePage={handlePage} pagesNum={pagesNum} />
          </div>
        </div>
      </div>
    </>
  )
}