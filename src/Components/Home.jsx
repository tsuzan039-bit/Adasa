// import React from 'react'
// import bg from "../assets/images/bg.jpg";
// import view1 from "../assets/images/photo-15.jpg";
// import person1 from "../assets/images/ph54.jpg";
// import person2 from "../assets/images/photo-2.jpg";
// import person3 from "../assets/images/photo-4.jpg";
// import person4 from "../assets/images/photo-4e.jpg";
// import view2 from "../assets/images/photoj.jpg";
// import cam1 from "../assets/images/photo-32.jpg";
// import cam2 from "../assets/images/photo0d.jpg";
// import mob from "../assets/images/ph7.jpg";
// import dawod from "../assets/images/photo-11a.jpg";
// import laith from "../assets/images/ph59.jpg";
// import gamal from "../assets/images/ph4.jpg";
// import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import Details from './Details';
// import Category from './Category/Category';

// export default function Home() {
//   return (
//     <>



// <div className="section1 ">
//   <div className="container-fluid pt-5 ">






// <div className="hello">

// <h3>
//  <i className="fa-solid fa-circle" ></i> <i class="fa-solid fa-circle"></i>
//   مرحباً بك في عدسة
  
// </h3>

// </div>





// <div className="title ">
//   <h1>اكتشف  <span>فن</span> <br />
// التصوير الفوتوغرافي</h1>
// <h2>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في  <br />التصوير.</h2>
// </div>





// <div className="btns d-flex text-center justify-content-center gap-4 mt-4">
//  <Link to="blog"> <button className='my-btn hov1'>استكشف المقالات<i className="fa-solid fa-arrow-left"></i></button></Link> <button className='my-btn hov2'><i className="fa-solid fa-circle-info"></i> اعرف المزيد </button>
// </div>




// <div className="squares d-flex justify-content-center gap-2 mt">

// <div className="box "><i className="fa-solid fa-rectangle-list"></i>
//   <h4>+50</h4>
// <h5>مقالة</h5></div>
// <div className="box">
//  <i className="fa-solid fa-user-group" ></i><h4>+10ألف</h4>
// <h5>قارئ</h5></div>
// <div className="box">
//   <i className="fa-solid fa-folder-open"></i><h4>4</h4>
// <h5>تصنيفات</h5></div>
// <div className="box"><i className="fa-solid fa-pen-nib"></i><h4>6</h4>
// <h5>كاتب

// </h5></div>


// </div>





// </div>



// </div>





// <div className="section2  ">
// <div className="container-fluid">

// <div>



// <div className="special me-5 mb-2 ">
 
//  <h3>مميز</h3>

// </div>




// <div className="title2 d-flex justify-content-between me-5">
//   <div className="pa1"><h2>مقالات مختارة</h2>
//   <h3>محتوى منتقى لبدء رحلة تعلمك</h3>
//   </div>


//   <div className="left-btn">
// <Link to="blog">    <button className='btn1 hov4'>عرض الكل</button></Link>  </div>
// </div>





// <Link className='text-decoration-none'  to={`/blog/1`}>
// <div className="cards d-flex  mt-5 ">




// <div className="right-side w-50 ">



// <img className='view w-100' src={view1} alt="view1" />
// </div>






// <div className="left-side w-50 pe-5   ">

// <div className="ti1 d-flex gap-2 mb-2">
// <div className='ti-p1 text-white '><h2>إضاءة</h2></div>
// <h3> <i className="fa-regular fa-clock "></i>  8 دقائق للقراءة
// </h3>

// </div>




// <div className="ti2 mt-3 mb-4">
// <h2>إتقان تصوير الساعة الذهبية: دليل  <br />شامل
// </h2>



// <h3 className='mt-4'>تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول <br /> الإضاءة والتكوين.

// </h3>

// </div>



// <div className="ti3 d-flex justify-content-between mt-5">


// <div className="ri-side d-flex mt-4">

// <div className='rounded-circle  border-dark person1'><img className='w-100 rounded-circle' src={person1} alt="person1" /></div>

// <div className="user1  ">
//   <h2>سالم أحمد </h2>
//   <h3>١٥ يناير ٢٠٢٦</h3>
//  </div>


// </div>






// <div className="le-side mt-5">

//   <Link className='li' to="">اقرأ المقال     <i className="fa-solid fa-arrow-left-long"></i></Link>
// </div>

// <div className="add text-white"> <i className="fa-solid fa-star"></i> <span>مميز</span></div>



// </div>





// </div>










// </div>
// </Link>





// <Link className='text-decoration-none'  to={`/blog/2`}>

// <div className="cards d-flex  mt-5 ">




// <div className="right-side w-50 ">



// <img className='view w-100' src={person2} alt="view1" />
// </div>






// <div className="left-side w-50 pe-5   ">

// <div className="ti1 d-flex gap-2 mb-2">
// <div className='ti-p1 text-white '><h2>بورتريه</h2></div>
// <h3> <i className="fa-regular fa-clock "></i>  6 دقائق للقراءة

// </h3>

// </div>




// <div className="ti2 mt-3 mb-4">
// <h2> أسرار تصوير البورتريه: كيف تلتقط <br /> روح الشخصية

// </h2>



// <h3 className='mt-4'>اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية <br />الموضوع الحقيقية.


// </h3>

// </div>



// <div className="ti3 d-flex justify-content-between mt-5">


// <div className="ri-side d-flex mt-4">

// <div className='rounded-circle  border-dark person1'><img className='w-100 rounded-circle' src={person3} alt="person1" /></div>

// <div className="user1  ">
//   <h2> محمد علي </h2>
//   <h3>
// ١٢ يناير٢٠٢٦</h3>
//  </div>


// </div>






// <div className="le-side mt-5">

//   <Link className='li' to="">اقرأ المقال     <i className="fa-solid fa-arrow-left-long"></i></Link>
// </div>

// <div className="add text-white"> <i className="fa-solid fa-star"></i> <span>مميز</span></div>



// </div>





// </div>










// </div>
// </Link>





// <Link className='text-decoration-none'  to={`/blog/3`}>




// <div className="cards d-flex  mt-5 ">




// <div className="right-side w-50 ">



// <img className='view w-100' src={view2} alt="view1" />
// </div>






// <div className="left-side w-50 pe-5   ">

// <div className="ti1 d-flex gap-2 mb-2">
// <div className='ti-p1 text-white '><h2>إضاءة</h2></div>
// <h3> <i className="fa-regular fa-clock "></i>  8 دقائق للقراءة
// </h3>

// </div>




// <div className="ti2 mt-3 mb-4">
// <h2>دليل تصوير المناظر الطبيعية: من <br /> المبتدئ إلى المحترف

// </h2>



// <h3 className='mt-4'>
//   استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال  <br />الطبيعة بعدستك.


// </h3>

// </div>



// <div className="ti3 d-flex justify-content-between mt-5">


// <div className="ri-side d-flex mt-4">

// <div className='rounded-circle  border-dark person1'><img className='w-100 rounded-circle' src={person4} alt="person1" /></div>

// <div className="user1  ">
//   <h2>إبراهيم حسن
//  </h2>
//   <h3>١٠ يناير ٢٠٢٦</h3>
//  </div>


// </div>






// <div className="le-side mt-5">

//   <Link className='li' to="">اقرأ المقال     <i className="fa-solid fa-arrow-left-long"></i></Link>
// </div>

// <div className="add text-white"> <i className="fa-solid fa-star"></i> <span>مميز</span></div>



// </div>





// </div>










// </div>


// </Link>









// </div>












// </div>
// </div>





















// <div className="section3">
//   <div className="container-fluid">
// <div className="row">
// <div className="col-12">
// <div className="inner mb-5 d-flex flex-column ">
//   <div className='hello d-flex'> <h3> <i className="fa-solid fa-circle" ></i> <i class="fa-solid fa-circle"></i>   التصنيفات  </h3></div>

// <div className="titles text-center"><h2>استكشف حسب الموضوع</h2>
// <h3>اعثر على محتوى مصمم حسب اهتماماتك</h3></div>
// </div> 

// </div>

// </div>



// <div className="row d-flex flex-row mx-3">

// <div className="col-lg-3 ">
// <Link className=' text-decoration-none' to="/blog">

//  <div className="inner ">

//    <div className="box1 hov6 ">
//     <div className="icon-box"><i className="fa-solid fa-sun"></i></div>
//     <div><h3>إضاءة</h3>
//     <h4>3 مقالة</h4></div>
//   </div>



//  </div>
// </Link>
// </div>





// <div className="col-lg-3 ">
// <Link className=' text-decoration-none' to="/blog">

//  <div className="inner ">

//    <div className="box1 hov6 ">
//     <div className="icon-box"><i className="fa-solid fa-user"></i></div>
//     <div><h3>بورتريه</h3>
//     <h4>3 مقالة</h4></div>
//   </div>



//  </div>
// </Link>
// </div>





// <div className="col-lg-3">
// <Link className=' text-decoration-none' to="/blog">

//  <div className="inner  ">

//    <div className="box1 hov6 ">
//     <div className="icon-box "><i className="fa-solid fa-mountain-sun"></i></div>
//     <div><h3>مناظر طبيعية</h3>
//     <h4>2 مقالة</h4></div>
//   </div>



//  </div>
// </Link>

// </div>





// <div className="col-lg-3 ">

//  <div className="inner ">
// <Link className=' text-decoration-none' to="/blog">

//    <div className="box1 hov6">
//     <div className="icon-box "><i className="fa-solid fa-sliders"></i></div>
//     <div><h3>تقنيات</h3>
//     <h4>5 مقالة</h4></div>
//   </div>


// </Link>

//  </div>

// </div>




// </div>






// <div className="row d-flex flex-row mx-3">



// <div className="col-lg-3">

//  <div className="inner mt-4  ">

//    <div className="box1 hov6">
//     <div className="icon-box"><i className="fa-solid fa-screwdriver-wrench"></i></div>
//     <div><h3>معدات</h3>
//     <h4>3 مقالة</h4></div>
//   </div>



//  </div>

// </div>












// </div>






//   </div>




// </div>




// <div className="section4 ">

//   <div className="container-fluid">
// <div className="row">
//   <div className="col-12">



// <div className="special me-5 mb-4 ">
 
//  <h3>الأحدث</h3>

// </div>




// <div className="title2 d-flex justify-content-between me-5">
//   <div className="pa1 "><h2> أحدث المقالات</h2>
//   <h3> محتوى جديد طازج من المطبعة</h3>
//   </div>


//   <div className=" ms-4 mt-5">
//   <Link className='li' to="">  عرض جميع المقالات  <i className="fa-solid fa-arrow-left-long"></i></Link>
//   </div>
// </div>




//   </div>
// </div>



// <div className="row ">
//   <div className="col-lg-4">
//     <Link className='text-decoration-none'  to={`/blog/3`}>

//     <div className="photo rounded-4 overflow-hidden hov7">
// <div className="img-photo ">
// <img className='w-100' src={cam1} alt="cam1" />
// </div>
// <div className="content-photo  pt-3">

// <div className='d-flex flex-row ss'><i className="fa-solid fa-clock"></i> <h3>7 دقائق للقراءة
//    </h3>
//    <h4>  .  ٨ يناير ٢٠٢٦
// </h4>
// </div>
// <div className="ti5"><h3 className='h'>أساسيات إعدادات الكاميرا: مثلث  <br />التعريض الضوئي
// </h3></div>
// <div className="ti6"><h3>افهم العلاقة بين فتحة العدسة وسرعة الغالق  <br />وحساسية ISO للتحكم الكامل في صورك.

// </h3></div>
// <hr />

// <div>
  

// <div className="ri-side d-flex mt-4 position-relative pb-4">

// <div className='rounded-circle  border-dark person1 me-2 '><img className='w-100 rounded-circle' src={dawod} alt="person1" /></div>

// <div className="user2   ">
//   <h2> داوود خالد </h2>
//   <h3>  مدرب تصوير</h3>
//  </div>
 


// <div className="next mt-5 i  rounded-circle ">

// <i className="fa-solid fa-angle-left"></i>
// </div>


// </div>







// </div>





// </div>




//     </div>
//     </Link>
//   </div>




//    <div className="col-lg-4">
//     <Link className='text-decoration-none'  to={`/blog/4`}>

//     <div className="photo rounded-4 overflow-hidden hov7">
// <div className="img-photo ">
// <img className='w-100' src={cam2} alt="cam1" />
// </div>
// <div className="content-photo  pt-3">

// <div className='d-flex flex-row ss'><i className="fa-solid fa-clock"></i> <h3>9 دقائق للقراءة
//    </h3>
//    <h4>  ٥ يناير ٢٠٢٦
// </h4>
// </div>
// <div className="ti5"><h3 className='h'>قواعد التكوين الفوتوغرافي: كيف <br /> تجعل صورك أكثر جاذبية
// </h3></div>
// <div className="ti6"><h3>  تعلم قواعد التكوين الأساسية التي يستخدمها <br /> المصورون المحترفون لإنشاء صور مؤثرة بصرياً.

// </h3></div>
// <hr />

// <div>
  

// <div className="ri-side d-flex mt-4 position-relative pb-4">

// <div className='rounded-circle  border-dark person1 me-2 '><img className='w-100 rounded-circle' src={laith} alt="person1" /></div>

// <div className="user2   ">
//   <h2>  ليث محمود </h2>
//   <h3>   فنان بصري</h3>
//  </div>
 


// <div className="next mt-5  rounded-circle i">

// <i className="fa-solid fa-angle-left "></i>
// </div>


// </div>







// </div>





// </div>




//     </div>
//         </Link>

//   </div>







//    <div className="col-lg-4">
//         <Link className='text-decoration-none'  to={`/blog/4`}>

//     <div className="photo rounded-4 overflow-hidden hov7">
// <div className="img-photo ">
// <img className='w-100' src={mob} alt="cam1" />
// </div>
// <div className="content-photo  pt-3">

// <div className='d-flex flex-row ss'><i className="fa-solid fa-clock"></i> <h3>8 دقائق للقراءة
//    </h3>
//    <h4>  .  ٣ يناير ٢٠٢٦ 
// </h4>
// </div>
// <div className="ti5"><h3 className='h'>:  تصوير الهاتف المحمول: كيف <br /> تلتقط صوراً احترافية بهاتفك
// </h3></div>
// <div className="ti6"><h3> اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية <br /> مع هذه النصائح والتقنيات
// </h3></div>
// <hr />

// <div>
  

// <div className="ri-side d-flex mt-4 position-relative pb-4">

// <div className='rounded-circle  border-dark person1 me-2 '><img className='w-100 rounded-circle' src={gamal} alt="person1" /></div>

// <div className="user2   ">
//   <h2>جمال مجمد</h2>
//   <h3>  مصور ومراجع تقني

// </h3>
//  </div>
 


// <div className="next mt-5  rounded-circle i">

// <i className="fa-solid fa-angle-left "></i>
// </div>


// </div>







// </div>





// </div>




//     </div>
//             </Link>

//   </div>








  
// </div>




//   </div>
// </div>





// <div className="section5 pt-5 ">
// <div className="container xx rounded-5">

//   <div className="row">





//     <div className="col-11">




//       <div className="innl rounded-5  text-center pt-5">

// <div className="icon-box2 "><i className="fa-solid fa-envelope"></i> 



// </div>


// <h2>اشترك في <span>نشرتنا الإخبارية</span></h2>



// <h3>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</h3>
// <div className="inp d-flex flex-row  w-75 me-5"> 
//   <div className="inp-data">
//     <input type="text" placeholder='أدخل بريدك الإلكتروني' />
// </div>
// <div className="btn-data"><button>اشترك الآن</button></div></div>



// <div className="photos d-flex gap-4 ">

// <div className="images d-flex">
//   <div className='rounded-circle  border-dark person1  '><img className='w-100 rounded-circle' src={dawod} alt="person1" /></div>
// <div className='rounded-circle  border-dark person1  '><img className='w-100 rounded-circle' src={gamal} alt="person1" /></div>
// <div className='rounded-circle  border-dark person1  '><img className='w-100 rounded-circle' src={laith} alt="person1" /></div>



// </div>

// <div className="join d-flex gap-3">
//   <h3>انضم لـ <span>+10,000</span> مصور</h3>
//   <div className='d-flex me-4 gap-5 mt-4'>
// <h4>بدون إزعاج</h4>
// <h5>إلغاء الاشتراك في أي وقت</h5>
// </div>
// </div>
// </div>




// </div>

//       </div>





//     </div>









//   </div>

// </div>





//     </>
//   )
// }
import React from 'react'
import view1 from "../assets/images/photo-15.jpg";
import person1 from "../assets/images/ph54.jpg";
import person2 from "../assets/images/photo-2.jpg";
import person3 from "../assets/images/photo-4.jpg";
import person4 from "../assets/images/photo-4e.jpg";
import view2 from "../assets/images/photoj.jpg";
import cam1 from "../assets/images/photo-32.jpg";
import cam2 from "../assets/images/photo0d.jpg";
import mob from "../assets/images/ph7.jpg";
import dawod from "../assets/images/photo-11a.jpg";
import laith from "../assets/images/ph59.jpg";
import gamal from "../assets/images/ph4.jpg";
import { Link } from 'react-router-dom';

const featured = [
  { to: "/blog/1", img: view1,   cat: "إضاءة",         time: "8",  title: "إتقان تصوير الساعة الذهبية: دليل شامل",                         desc: "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.", author: "سالم أحمد",   date: "١٥ يناير ٢٠٢٦",  avatar: person1 },
  { to: "/blog/2", img: person2, cat: "بورتريه",        time: "6",  title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",                desc: "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",       author: "محمد علي",    date: "١٢ يناير ٢٠٢٦",  avatar: person3 },
  { to: "/blog/3", img: view2,   cat: "مناظر طبيعية",  time: "8",  title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",          desc: "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",      author: "إبراهيم حسن", date: "١٠ يناير ٢٠٢٦",  avatar: person4 },
];

const categories = [
  { icon: "fa-sun",               label: "إضاءة",          count: 3 },
  { icon: "fa-user",              label: "بورتريه",         count: 3 },
  { icon: "fa-mountain-sun",      label: "مناظر طبيعية",   count: 2 },
  { icon: "fa-sliders",           label: "تقنيات",          count: 5 },
  { icon: "fa-screwdriver-wrench",label: "معدات",           count: 3 },
];

const latest = [
  { to: "/blog/3", img: cam1, time: "7", date: "٨ يناير ٢٠٢٦",  title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",           desc: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.", author: "داوود خالد", role: "مدرب تصوير",       avatar: dawod },
  { to: "/blog/4", img: cam2, time: "9", date: "٥ يناير ٢٠٢٦",  title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",  desc: "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة.", author: "ليث محمود",  role: "فنان بصري",        avatar: laith  },
  { to: "/blog/4", img: mob,  time: "8", date: "٣ يناير ٢٠٢٦",  title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",  desc: "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",     author: "جمال محمد",  role: "مصور ومراجع تقني", avatar: gamal  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        body { background:#111 !important; }

        .hm { font-family:'Cairo',sans-serif; direction:rtl; background:#111; color:#fff; overflow-x:hidden; }

        /* ── shared helpers ── */
        .hm-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(249,115,22,.14); border:1px solid rgba(249,115,22,.3);
          border-radius:20px; padding:6px 18px;
          font-size:13px; color:#f97316; font-weight:700; margin-bottom:20px;
        }
        .hm-badge .dot { width:7px; height:7px; border-radius:50%; background:#f97316; display:inline-block; }
        .hm-section-label {
          display:inline-flex; align-items:center; gap:10px;
          font-size:13px; font-weight:700; color:#f97316; margin-bottom:10px;
          text-transform:uppercase; letter-spacing:.5px;
        }
        .hm-section-label::before,.hm-section-label::after {
          content:''; display:inline-block; width:28px; height:2px; background:#f97316; border-radius:2px;
        }
        .hm-divider { border-color:#222 !important; }

        /* ── HERO ── */
        .hm-hero {
          min-height:92vh;
          background:
            radial-gradient(ellipse 65% 45% at 50% 0%, rgba(249,115,22,.13) 0%, transparent 65%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px),
            #111;
          display:flex; align-items:center; justify-content:center;
          text-align:center; padding:80px 16px 60px;
        }
        .hm-hero h1 { font-size:clamp(2.2rem,6vw,4rem); font-weight:900; line-height:1.3; margin-bottom:20px; }
        .hm-hero h1 span { color:#f97316; }
        .hm-hero p  { font-size:16px; color:#9ca3af; max-width:560px; margin:0 auto 36px; line-height:1.9; }

        .hm-btn-primary {
          background:#f97316; color:#fff; border:none;
          border-radius:10px; padding:13px 28px;
          font-family:'Cairo',sans-serif; font-size:15px; font-weight:700;
          cursor:pointer; transition:opacity .2s; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px;
        }
        .hm-btn-primary:hover { opacity:.85; color:#fff; }
        .hm-btn-outline {
          background:transparent; color:#fff;
          border:1px solid #333; border-radius:10px; padding:13px 28px;
          font-family:'Cairo',sans-serif; font-size:15px; font-weight:700;
          cursor:pointer; transition:border-color .2s, color .2s;
          display:inline-flex; align-items:center; gap:8px;
        }
        .hm-btn-outline:hover { border-color:#f97316; color:#f97316; }

        .hm-stat-card {
          background:#1a1a1a; border:1px solid #222; border-radius:14px;
          padding:22px 16px; text-align:center;
          transition:border-color .25s, transform .25s;
        }
        .hm-stat-card:hover { border-color:#f97316; transform:translateY(-3px); }
        .hm-stat-card i { font-size:22px; color:#f97316; margin-bottom:10px; }
        .hm-stat-card .val { font-size:22px; font-weight:900; }
        .hm-stat-card .lbl { font-size:12px; color:#6b7280; margin-top:2px; }

        /* ── FEATURED ── */
        .hm-featured-card {
          background:#1a1a1a; border:1px solid #222; border-radius:18px;
          overflow:hidden; transition:border-color .3s, transform .3s;
          text-decoration:none; color:inherit; display:grid;
          grid-template-columns:1fr 1fr;
        }
        .hm-featured-card:hover { border-color:#f97316; transform:translateY(-4px); color:inherit; }
        .hm-featured-card .fc-img { height:100%; min-height:260px; overflow:hidden; }
        .hm-featured-card .fc-img img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
        .hm-featured-card:hover .fc-img img { transform:scale(1.05); }
        .hm-featured-card .fc-body { padding:32px 28px; display:flex; flex-direction:column; justify-content:space-between; }
        @media(max-width:768px){
          .hm-featured-card { grid-template-columns:1fr; }
          .hm-featured-card .fc-img { min-height:200px; }
        }

        .hm-cat-badge {
          display:inline-block; background:rgba(249,115,22,.15);
          border:1px solid rgba(249,115,22,.3); color:#f97316;
          border-radius:7px; padding:4px 12px; font-size:12px; font-weight:700;
        }
        .hm-read-link { color:#f97316; font-size:13px; font-weight:700; display:flex; align-items:center; gap:6px; text-decoration:none; }
        .hm-read-link:hover { opacity:.8; }
        .hm-star-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(234,179,8,.12); border:1px solid rgba(234,179,8,.3);
          color:#eab308; border-radius:7px; padding:4px 10px; font-size:11px; font-weight:700;
        }
        .hm-avatar { width:38px; height:38px; border-radius:50%; object-fit:cover; border:2px solid #333; }
        .hm-author-name { font-size:13px; font-weight:700; }
        .hm-author-date { font-size:11px; color:#6b7280; }

        /* ── CATEGORIES ── */
        .hm-cat-card {
          background:#1a1a1a; border:1px solid #222; border-radius:14px;
          padding:24px 20px; display:flex; align-items:center; gap:16px;
          text-decoration:none; color:#fff; transition:border-color .25s, transform .25s;
        }
        .hm-cat-card:hover { border-color:#f97316; transform:translateY(-3px); color:#fff; }
        .hm-cat-icon {
          width:52px; height:52px; min-width:52px;
          background:rgba(249,115,22,.12); border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          font-size:20px; color:#f97316;
        }
        .hm-cat-label { font-size:16px; font-weight:800; }
        .hm-cat-count { font-size:12px; color:#6b7280; margin-top:2px; }

        /* ── LATEST ── */
        .hm-latest-card {
          background:#1a1a1a; border:1px solid #222; border-radius:16px;
          overflow:hidden; transition:border-color .3s, transform .3s;
          text-decoration:none; color:inherit; display:block; height:100%;
        }
        .hm-latest-card:hover { border-color:#f97316; transform:translateY(-4px); color:inherit; }
        .hm-latest-card .lc-img { height:200px; overflow:hidden; }
        .hm-latest-card .lc-img img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
        .hm-latest-card:hover .lc-img img { transform:scale(1.05); }
        .hm-latest-card .lc-body { padding:20px; }
        .hm-meta { font-size:12px; color:#6b7280; display:flex; gap:14px; align-items:center; flex-wrap:wrap; }
        .hm-meta span { display:flex; align-items:center; gap:5px; }
        .hm-card-title { font-size:16px; font-weight:800; line-height:1.5; margin:10px 0 8px; }
        .hm-card-desc  { font-size:13px; color:#6b7280; line-height:1.7;
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:16px; }
        .hm-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:14px; border-top:1px solid #2a2a2a; }

        /* ── NEWSLETTER ── */
        .hm-newsletter {
          background: linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04));
          border:1px solid rgba(249,115,22,.2); border-radius:24px; padding:60px 40px;
          text-align:center;
        }
        @media(max-width:576px){ .hm-newsletter { padding:40px 20px; } }
        .hm-newsletter .nl-icon {
          width:68px; height:68px; border-radius:50%;
          background:rgba(249,115,22,.15); border:1px solid rgba(249,115,22,.3);
          display:flex; align-items:center; justify-content:center;
          font-size:26px; color:#f97316; margin:0 auto 20px;
        }
        .hm-newsletter h2 { font-size:clamp(1.4rem,3vw,2rem); font-weight:900; margin-bottom:12px; }
        .hm-newsletter h2 span { color:#f97316; }
        .hm-newsletter p  { color:#9ca3af; font-size:15px; margin-bottom:32px; }
        .hm-nl-form { display:flex; gap:10px; max-width:480px; margin:0 auto 32px; }
        .hm-nl-form input {
          flex:1; background:#1a1a1a; border:1px solid #2a2a2a; border-radius:10px;
          padding:13px 18px; color:#fff; font-family:'Cairo',sans-serif; font-size:14px;
          outline:none; transition:border-color .2s; direction:rtl;
        }
        .hm-nl-form input:focus { border-color:#f97316; }
        .hm-nl-form input::placeholder { color:#555; }
        .hm-nl-form button {
          background:#f97316; color:#fff; border:none; border-radius:10px;
          padding:13px 24px; font-family:'Cairo',sans-serif; font-size:14px; font-weight:700;
          cursor:pointer; white-space:nowrap; transition:opacity .2s;
        }
        .hm-nl-form button:hover { opacity:.85; }
        .hm-nl-avatars img { width:36px; height:36px; border-radius:50%; object-fit:cover; border:2px solid #1a1a1a; margin-left:-10px; }
        .hm-nl-avatars img:first-child { margin-left:0; }
        .hm-nl-hints { font-size:12px; color:#6b7280; display:flex; gap:20px; flex-wrap:wrap; justify-content:center; }
        .hm-nl-hints span { display:flex; align-items:center; gap:5px; }
        .hm-nl-hints span::before { content:"✓"; color:#22c55e; font-weight:700; }
      `}</style>

      <div className="hm">

        <section className="hm-hero mt-5">
          <div style={{ maxWidth: 700 }}>
            <div className="hm-badge">
              <span className="dot" />
              <span className="dot" />
              مرحباً بك في عدسة
            </div>

            <h1>
              اكتشف <span>فن</span> التصوير الفوتوغرافي
            </h1>

            <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
              <Link to="blog" className="hm-btn-primary">
                استكشف المقالات <i className="fa-solid fa-arrow-left" />
              </Link>
              <button className="hm-btn-outline">
                <i className="fa-solid fa-circle-info" /> اعرف المزيد
              </button>
            </div>

            <div className="row g-3 justify-content-center" style={{ maxWidth: 680, margin: "0 auto" }}>
              {[
                { icon: "fa-rectangle-list", val: "+50",    lbl: "مقالة" },
                { icon: "fa-user-group",      val: "+10ألف", lbl: "قارئ" },
                { icon: "fa-folder-open",     val: "4",      lbl: "تصنيفات" },
                { icon: "fa-pen-nib",         val: "6",      lbl: "كاتب" },
              ].map((s, i) => (
                <div className="col-6 col-sm-3" key={i}>
                  <div className="hm-stat-card">
                    <i className={`fa-solid ${s.icon}`} />
                    <div className="val">{s.val}</div>
                    <div className="lbl">{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5  " style={{ background: "#0e0e0e" }}>
          <div className="container-fluid  px-4" style={{ maxWidth: 1200, margin: "0 auto" }}>

            <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
              <div>
                <div className="hm-section-label">مميز</div>
                <h2 className="fw-bold mb-1" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>مقالات مختارة</h2>
                <p className="mb-0" style={{ color: "#6b7280", fontSize: 14 }}>محتوى منتقى لبدء رحلة تعلمك</p>
              </div>
              <Link to="blog" className="hm-btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
                عرض الكل <i className="fa-solid fa-arrow-left" />
              </Link>
            </div>

            <div className="d-flex flex-column gap-4">
              {featured.map((f, i) => (
                <Link key={i} to={f.to} className="hm-featured-card">
                  <div className="fc-img">
                    <img src={f.img} alt={f.title} />
                  </div>
                  <div className="fc-body">
                    <div>
                      <div className="d-flex gap-2 align-items-center mb-3 flex-wrap">
                        <span className="hm-cat-badge">{f.cat}</span>
                        <span className="hm-star-badge"><i className="fa-solid fa-star" /> مميز</span>
                        <span className="hm-meta" style={{ marginRight: "auto" }}>
                          <span><i className="fa-regular fa-clock" /> {f.time} دقائق</span>
                        </span>
                      </div>
                      <h3 style={{ fontSize: "clamp(1.1rem,2.5vw,1.4rem)", fontWeight: 800, lineHeight: 1.5, marginBottom: 12 }}>
                        {f.title}
                      </h3>
                      <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-3" style={{ borderTop: "1px solid #2a2a2a" }}>
                      <div className="d-flex align-items-center gap-2">
                        <img className="hm-avatar" src={f.avatar} alt={f.author} />
                        <div>
                          <div className="hm-author-name">{f.author}</div>
                          <div className="hm-author-date">{f.date}</div>
                        </div>
                      </div>
                      <span className="hm-read-link">
                        اقرأ المقال <i className="fa-solid fa-arrow-left-long" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" style={{ background: "#111" }}>
          <div className="container-fluid px-4" style={{ maxWidth: 1200, margin: "0 auto" }}>

            <div className="text-center mb-5">
              <div className="hm-section-label mx-auto" style={{ justifyContent: "center" }}>التصنيفات</div>
              <h2 className="fw-bold mt-2" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>استكشف حسب الموضوع</h2>
              <p style={{ color: "#6b7280", fontSize: 14 }}>اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>

            <div className="row g-3">
              {categories.map((c, i) => (
                <div className="col-6 col-sm-4 col-lg" key={i}>
                  <Link to="/blog" className="hm-cat-card">
                    <div className="hm-cat-icon">
                      <i className={`fa-solid ${c.icon}`} />
                    </div>
                    <div>
                      <div className="hm-cat-label">{c.label}</div>
                      <div className="hm-cat-count">{c.count} مقالة</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" style={{ background: "#0e0e0e" }}>
          <div className="container-fluid px-4" style={{ maxWidth: 1200, margin: "0 auto" }}>

            <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
              <div>
                <div className="hm-section-label">الأحدث</div>
                <h2 className="fw-bold mb-1" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>أحدث المقالات</h2>
                <p className="mb-0" style={{ color: "#6b7280", fontSize: 14 }}>محتوى جديد طازج من المطبعة</p>
              </div>
              <Link to="blog" className="hm-read-link" style={{ fontSize: 14 }}>
                عرض جميع المقالات <i className="fa-solid fa-arrow-left-long" />
              </Link>
            </div>

            <div className="row g-4">
              {latest.map((item, i) => (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <Link to={item.to} className="hm-latest-card">
                    <div className="lc-img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="lc-body">
                      <div className="hm-meta">
                        <span><i className="fa-solid fa-clock" style={{ fontSize: 11 }} /> {item.time} دقائق للقراءة</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="hm-card-title">{item.title}</h3>
                      <p className="hm-card-desc">{item.desc}</p>
                      <div className="hm-card-footer">
                        <div className="d-flex align-items-center gap-2">
                          <img className="hm-avatar" src={item.avatar} alt={item.author} />
                          <div>
                            <div className="hm-author-name">{item.author}</div>
                            <div className="hm-author-date">{item.role}</div>
                          </div>
                        </div>
                        <span className="hm-read-link" style={{ fontSize: 12 }}>
                          اقرأ <i className="fa-solid fa-angle-left" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" style={{ background: "#111" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="hm-newsletter">
              <div className="nl-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <h2>اشترك في <span>نشرتنا الإخبارية</span></h2>
              <p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

              <div className="hm-nl-form">
                <input type="email" placeholder="أدخل بريدك الإلكتروني" />
                <button>اشترك الآن</button>
              </div>

              <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                <div className="hm-nl-avatars d-flex align-items-center">
                  {[dawod, gamal, laith].map((av, i) => (
                    <img key={i} src={av} alt="" />
                  ))}
                </div>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>انضم لـ <span style={{ color: "#f97316" }}>+10,000</span> مصور</span>
                </div>
              </div>

              <div className="hm-nl-hints mt-3">
                <span>بدون إزعاج</span>
                <span>إلغاء الاشتراك في أي وقت</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}