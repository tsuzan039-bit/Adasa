import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        .nf-page {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          background: #111;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          background-image:
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 65%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 40px);
        }

        .nf-404 {
          font-size: clamp(100px, 22vw, 200px);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #f97316, #fb923c, #fdba74);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0;
          opacity: 0.9;
        }

        .nf-divider {
          width: 60px;
          height: 3px;
          background: #f97316;
          border-radius: 2px;
          margin: 16px auto 24px;
        }

        .nf-title {
          font-size: clamp(1.4rem, 4vw, 2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
        }

        .nf-desc {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.8;
          max-width: 420px;
          margin: 0 auto 36px;
        }

        .nf-btn-primary {
          background: #f97316;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 12px 28px;
          font-family: 'Cairo', sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s;
        }
        .nf-btn-primary:hover { opacity: 0.85; color: #fff; }

        .nf-btn-outline {
          background: transparent;
          color: #fff;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 12px 28px;
          font-family: 'Cairo', sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s, color 0.2s;
        }
        .nf-btn-outline:hover { border-color: #f97316; color: #f97316; }

        .nf-quick-links {
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 16px;
          padding: 24px 28px;
          max-width: 420px;
          margin: 40px auto 0;
        }
        .nf-quick-links h4 {
          font-size: 14px;
          font-weight: 700;
          color: #6b7280;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }
        .nf-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 0;
          border-bottom: 1px solid #222;
          text-decoration: none;
          color: #e5e7eb;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s;
        }
        .nf-link-item:last-child { border-bottom: none; }
        .nf-link-item:hover { color: #f97316; }
        .nf-link-item i { font-size: 12px; color: #555; }
        .nf-link-item:hover i { color: #f97316; }
        .nf-link-icon {
          width: 32px; height: 32px;
          background: rgba(249,115,22,0.1);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          font-size: 13px;
          margin-left: 10px;
        }
      `}</style>

      <div className="nf-page mt-5">
        <div className="text-center">

          {/* 404 number */}
          <p className="nf-404 mb-0">404</p>
          <div className="nf-divider" />

          {/* Message */}
          <h1 className="nf-title">عذراً! الصفحة غير موجودة</h1>
          <p className="nf-desc">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو ربما لم تكن موجودة أصلاً.
          </p>

          {/* Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/" className="nf-btn-primary">
              <i className="fa-solid fa-house" />
              العودة للرئيسية
            </Link>
            <Link to="/blog" className="nf-btn-outline">
              <i className="fa-solid fa-book-open" />
              تصفح المقالات
            </Link>
          </div>

          {/* Quick links */}
          <div className="nf-quick-links">
            <h4>روابط مفيدة</h4>

            {[
              { to: "/",      icon: "fa-house",      label: "الصفحة الرئيسية" },
              { to: "/blog",  icon: "fa-newspaper",  label: "المدونة"          },
              { to: "/about", icon: "fa-circle-info", label: "من نحن"          },
            ].map((link, i) => (
              <Link key={i} to={link.to} className="nf-link-item">
                <div className="d-flex align-items-center">
                  <span className="nf-link-icon">
                    <i className={`fa-solid ${link.icon}`} />
                  </span>
                  {link.label}
                </div>
                <i className="fa-solid fa-angle-left" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}