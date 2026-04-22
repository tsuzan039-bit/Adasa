// import React from 'react'
// import { Link } from 'react-router-dom';
// import Home from './Home';
// import Blog from './Blog';

// export default function Footer() {
//   return (
// <>

// <div className="container-fluid foo">
//   <div className="row">

// <div className="col-lg-3">
// <div className='d-flex log'>
//     <div className="icon-box3">ع</div>

// <h3>عدسة</h3>
// </div> 


// <h4 className='para'>مدونة متخصصة في فن التصوير  <br />الفوتوغرافي، نشارك معكم أسرار المحترفين <br /> ونصائح عملية لتطوير مهاراتكم.</h4>

// <div className="icons d-flex gap-3 mt-4">
//   <div className="icon-box4"><i className="fa-brands fa-linkedin"></i></div>
//   <div className="icon-box4"><i className="fa-brands fa-github"></i></div>
//   <div className="icon-box4"><i className="fa-brands fa-threads"></i></div>
//   <div className="icon-box4"><i className="fa-brands fa-youtube"></i></div>
// </div>
// </div>


// <div className="col-lg-3">
// <h2 className='lo'>استكشف</h2>
// <div className=" d-flex flex-column mt-4">
//   <Link className='text-decoration-none lins mb-2' to={Home}>الرئيسية
// </Link>
// <Link className='text-decoration-none lins mb-2' to={Blog}>المدونة</Link>
// <Link className='text-decoration-none lins' to={Home}>من نحن</Link>

// </div>
// </div>



// <div className="col-lg-3">
// <h2 className='lo'>التصنيفات</h2>
// <div className="lins d-flex flex-column mt-4">
//   <Link className='text-decoration-none mb-2' to={Home}>إضاءة

// </Link>
// <Link className='text-decoration-none lins mb-2' to={Blog}>بورتريه</Link>
// <Link className='text-decoration-none lins mb-2' to={Home}>مناظر طبيعية</Link>
// <Link className='text-decoration-none lins' to={Home}>التقنيات </Link>

// </div>
// </div>





// <div className="col-lg-3">
// <h2 className='lo'>ابقى على اطلاع</h2>
// <div className="lins d-flex flex-column  ">
//  <h2>اشترك للحصول على أحدث المقالات  <br />والتحديثات.

// </h2>
// <input type="email"  className='mt-3' />
// <button className='btn1 border-0 pt-2 mb-2'>اشترك
// </button>
// </div>
// </div>





// <hr />
// <div className="last d-flex justify-content-between mb-4">
// <div className="last-ri ">
//   <h4>© 2026 عدسة. صنع بكل <i className="fa-solid fa-heart"></i> جميع الحقوق محفوظة</h4>
// </div>
// <div className=" ms-3 ">
//   <Link className='ms-3 text-decoration-none last-le'>سياسة الخصوصية</Link>
//   <Link className='text-decoration-none last-le'> شروط الخدمة</Link>
// </div>

// </div>
//   </div>
//   </div>  



// </>  )
// }



import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        .ft {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          background: #0a0a0a;
          border-top: 1px solid #1e1e1e;
          color: #fff;
        }

        /* ── top ── */
        .ft-top { padding: 60px 0 40px; }

        /* logo */
        .ft-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; text-decoration: none; }
        .ft-logo-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: #f97316;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 900; color: #fff;
          font-family: 'Cairo', sans-serif;
        }
        .ft-logo-name { font-size: 20px; font-weight: 900; color: #fff; }
        .ft-logo-sub  { font-size: 11px; color: #6b7280; }

        .ft-desc { font-size: 13px; color: #6b7280; line-height: 1.9; margin-bottom: 24px; }

        .ft-social-btn {
          width: 38px; height: 38px; border-radius: 10px;
          background: #1a1a1a; border: 1px solid #2a2a2a;
          display: inline-flex; align-items: center; justify-content: center;
          color: #6b7280; font-size: 15px; text-decoration: none;
          transition: background .2s, color .2s, border-color .2s;
        }
        .ft-social-btn:hover { background: #f97316; border-color: #f97316; color: #fff; }

        /* columns */
        .ft-col-title {
          font-size: 14px; font-weight: 800; color: #fff;
          margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
        }
        .ft-col-title::after {
          content: ''; display: inline-block;
          width: 24px; height: 2px;
          background: #f97316; border-radius: 2px;
        }

        .ft-link {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: #6b7280; text-decoration: none;
          padding: 6px 0; transition: color .2s;
        }
        .ft-link:hover { color: #f97316; }
        .ft-link::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #2a2a2a; flex-shrink: 0;
          transition: background .2s;
        }
        .ft-link:hover::before { background: #f97316; }

        /* newsletter */
        .ft-nl-input {
          background: #1a1a1a; border: 1px solid #2a2a2a;
          border-radius: 0px 0 0 0px;
          padding: 11px 16px; color: #fff;
          font-family: 'Cairo', sans-serif; font-size: 13px;
          outline: none; width: 100%; direction: rtl;
          transition: border-color .2s;
        }
        .ft-nl-input:focus { border-color: #f97316; }
        .ft-nl-input::placeholder { color: #444; }
        .ft-nl-btn {
          background: #f97316; color: #fff; border: none;
          border-radius: 0 0px 10px 20;
          padding: 11px 18px;
          font-family: 'Cairo', sans-serif; font-size: 13px; font-weight: 700;
          cursor: pointer; white-space: nowrap;
          transition: opacity .2s;
        }
        .ft-nl-btn:hover { opacity: .85; }
        .ft-nl-hint { font-size: 11px; color: #555; margin-top: 8px; display: flex; align-items: center; gap: 5px; }
        .ft-nl-hint::before { content: "✓"; color: #22c55e; font-weight: 700; }

        /* divider */
        .ft-hr { border-color: #1e1e1e !important; margin: 0; }

        /* bottom */
        .ft-bottom {
          padding: 20px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ft-copy { font-size: 13px; color: #555; display: flex; align-items: center; gap: 5px; }
        .ft-copy i { color: #f97316; font-size: 11px; }
        .ft-policy-link {
          font-size: 13px; color: #555; text-decoration: none;
          transition: color .2s;
        }
        .ft-policy-link:hover { color: #f97316; }
        .ft-policy-sep { color: #2a2a2a; margin: 0 4px; }
      `}</style>

      <footer className="ft">
        <div className="container-fluid px-4" style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ── TOP ── */}
          <div className="ft-top">
            <div className="row g-5">

              {/* Brand */}
              <div className="col-12 col-md-6 col-lg-4">
                <Link to="/" className="ft-logo">
                  <div className="ft-logo-icon">ع</div>
                  <div>
                    <div className="ft-logo-name">عدسة</div>
                    <div className="ft-logo-sub">عالم التصوير الفوتوغرافي</div>
                  </div>
                </Link>
                <p className="ft-desc">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                <div className="d-flex gap-2">
                  {[
                    { icon: "fa-linkedin",  href: "#" },
                    { icon: "fa-github",    href: "#" },
                    { icon: "fa-threads",   href: "#" },
                    { icon: "fa-youtube",   href: "#" },
                  ].map((s, i) => (
                    <a key={i} href={s.href} className="ft-social-btn" target="_blank" rel="noreferrer">
                      <i className={`fa-brands ${s.icon}`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Explore */}
              <div className="col-6 col-md-3 col-lg-2">
                <div className="ft-col-title">استكشف</div>
                <div className="d-flex flex-column">
                  <Link className="ft-link" to="/">الرئيسية</Link>
                  <Link className="ft-link" to="/blog">المدونة</Link>
                  <Link className="ft-link" to="/about">من نحن</Link>
                </div>
              </div>

              {/* Categories */}
              <div className="col-6 col-md-3 col-lg-2">
                <div className="ft-col-title">التصنيفات</div>
                <div className="d-flex flex-column">
                  <Link className="ft-link" to="/blog">إضاءة</Link>
                  <Link className="ft-link" to="/blog">بورتريه</Link>
                  <Link className="ft-link" to="/blog">مناظر طبيعية</Link>
                  <Link className="ft-link" to="/blog">التقنيات</Link>
                  <Link className="ft-link" to="/blog">معدات</Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-12 col-lg-4">
                <div className="ft-col-title">ابقى على اطلاع</div>
                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 16, lineHeight: 1.8 }}>
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <div className="d-flex">
                  <input className="ft-nl-input " type="email" placeholder="أدخل بريدك الإلكتروني" />
                  <button className="ft-nl-btn px-4 rounded-start-4">اشترك</button>
                </div>
                <div className="ft-nl-hint">بدون إزعاج — إلغاء الاشتراك في أي وقت</div>
              </div>

            </div>
          </div>

          <hr className="ft-hr" />

          {/* ── BOTTOM ── */}
          <div className="ft-bottom">
            <div className="ft-copy">
              © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart" /> جميع الحقوق محفوظة
            </div>
            <div className="d-flex align-items-center">
              <Link className="ft-policy-link" to="#">سياسة الخصوصية</Link>
              <span className="ft-policy-sep">|</span>
              <Link className="ft-policy-link" to="#">شروط الخدمة</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}