import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuOpen) return;

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="data-center-page">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="mobile-menu-toggle" onClick={toggleMenu} ref={toggleButtonRef}>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className={`nav-links ${menuOpen ? 'nav-active' : ''}`} ref={menuRef}>
            <Link to="/">الرئيسية</Link>
            <Link to="/#">الاستضافة</Link>
            <Link to="/#">التسويق</Link>
            <Link to="/#">النطاقات</Link>
            <Link to="/#">من نحن</Link>
            <Link to="/#">الصفحات</Link>
            <Link to="/#">اتصل بنا</Link>
            <Link to="/#" className="login-btn">
              تسجيل الدخول
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>مركز البيانات</h1>
          <p>استضافة آمنة وموثوقة لمواقع الويب والتطبيقات. خوادم عالية الأداء. استضافة احترافية بأسعار تنافسية.</p>
          <div className="hero-buttons">
            <button className="primary-btn">عرض الاسعار</button>
            <button className="secondary-btn">انشاء حساب</button>
          </div>
          <div className="data-center-illustration">
            <div className="server-left">
              <img src="assets/mosk.png" width={162} height={214} alt="خادم" />
            </div>
            <div className="server-center">
              <img src="assets/world-center.png" width={250} height={400} alt="مركز البيانات الرئيسي" />
            </div>
            <div className="server-right">
              <img src="assets/bilding.png" width={162} height={214} alt="خادم" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="global-reach">
        <div className="container">
          <h2>ارتقي عالميا ومحليا</h2>
          <div className="tabs">
            <button className="tab active">الكل</button>
            <button className="tab">أوروبا</button>
            <button className="tab">آسيا</button>
            <button className="tab">أمريكا</button>
            <button className="tab">أفريقيا</button>
          </div>
          <div className="charts-grid">
            <div className="chart-card">
              <div className="chart-image">
                <img src="assets/saud-1.png" width={250} height={150} alt="رسم بياني لندن" />
              </div>
              <div className="chart-info">
                <span className="location">الرياض</span>
                <img src="assets/serveses/saud.png" width={30} height={30} alt="مؤشر" className="chart-indicator" />
              </div>
              <button className="chart-btn">إختبار السرعة</button>
            </div>
            <div className="chart-card">
              <div className="chart-image">
                <img src="assets/sudan-1.png" width={250} height={150} alt="رسم بياني نيويورك" />
              </div>
              <div className="chart-info">
                <span className="location">السودان</span>
                <img src="assets/serveses/sudan.png" width={30} height={30} alt="مؤشر" className="chart-indicator" />
              </div>
              <button className="chart-btn">إختبار السرعة</button>
            </div>
            <div className="chart-card">
              <div className="chart-image">
                <img src="assets/eua-1.png" width={250} height={150} alt="رسم بياني الرياض" />
              </div>
              <div className="chart-info">
                <span className="location">الأمارات</span>
                <img src="assets/serveses/eua.png" width={30} height={30} alt="مؤشر" className="chart-indicator" />
              </div>
              <button className="chart-btn">إختبار السرعة</button>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="world-map">
        <div className="container">
          <h2>أماكن سيرفراتنا</h2>
          <div className="map-container">
            <img
              src="assets/world-2.png"
              width={1278}
              height={561}
              alt="خريطة العالم مع مواقع السيرفرات"
              className="world-map-image"
            />
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="countries">
        <div className="container">
          <div className="flags-grid">
            <div className="flag-item">
              <span>أمريكا</span>
              <img src="assets/serveses/eua.png" width={40} height={40} alt="علم أمريكا" />
            </div>
            <div className="flag-item">
              <span>بريطانيا</span>
              <img src="assets/serveses/saud.png" width={40} height={40} alt="علم بريطانيا" />
            </div>
            <div className="flag-item">
              <span>تركيا</span>
              <img src="assets/serveses/sudan.png" width={40} height={40} alt="علم تركيا" />
            </div>
            <div className="flag-item">
              <span>الإمارات</span>
              <img src="assets/serveses/eua.png" width={40} height={40} alt="علم الإمارات" />
            </div>
            <div className="flag-item">
              <span>السعودية</span>
              <img src="assets/serveses/saud.png" width={40} height={40} alt="علم السعودية" />
            </div>
            <div className="flag-item">
              <span>إيطاليا</span>
              <img src="assets/serveses/saud.png" width={40} height={40} alt="علم إيطاليا" />
            </div>
            <div className="flag-item">
              <span>فنلندا</span>
              <img src="assets/serveses/sudan.png" width={40} height={40} alt="علم فنلندا" />
            </div>
            <div className="flag-item">
              <span>ألمانيا</span>
              <img src="assets/serveses/eua.png" width={40} height={40} alt="علم ألمانيا" />
            </div>
            <div className="flag-item">
              <span>بولندا</span>
              <img src="assets/serveses/saud.png" width={40} height={40} alt="علم بولندا" />
            </div>
            <div className="flag-item">
              <span>السودان</span>
              <img src="assets/serveses/sudan.png" width={40} height={40} alt="علم السودان" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>خدمات خبيرة تلبي احتياجات عملك</h2>
          <p className="section-description">
            نقدم حلول استضافة متكاملة للشركات والأفراد. خوادم عالية الأداء، دعم فني على مدار الساعة، وحماية متقدمة من
            الهجمات الإلكترونية.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="assets/serveses/host.png" width={80} height={80} alt="خدمة الاستضافة" />
              </div>
              <h3>استضافة سحابية آمنة</h3>
              <p>استضافة مواقع الويب والتطبيقات بأعلى معايير الأمان والسرعة</p>
              <Link to="/cloud-hosting" className="service-link">
                اعرف المزيد
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="assets/serveses/sms.png" width={80} height={80} alt="خدمة الحماية" />
              </div>
              <h3>حماية متقدمة من الهجمات</h3>
              <p>حماية متكاملة من هجمات DDoS وتهديدات الأمن السيبراني</p>
              <Link to="/security" className="service-link">
                اعرف المزيد
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="assets/serveses/cloud.png" width={80} height={80} alt="خدمة النسخ الاحتياطي" />
              </div>
              <h3>نسخ احتياطي تلقائي</h3>
              <p>نظام نسخ احتياطي آلي لحماية بياناتك من الفقدان</p>
              <Link to="/backup" className="service-link">
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>ما الذي يميزنا</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/security-icon 1.png" width={60} height={60} alt="ميزة السرعة" />
              </div>
              <h3>سرعة اتصال تصل إلى 100 جيجابت</h3>
              <p>اتصال فائق السرعة يضمن تحميل سريع للمواقع والتطبيقات</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/performance-icon 1.png" width={60} height={60} alt="ميزة الحماية" />
              </div>
              <h3>الحماية من هجمات DDOS بسعة 5000 جيجابت</h3>
              <p>حماية متقدمة من هجمات حجب الخدمة الموزعة بأحدث التقنيات</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/gear-icon 1.png" width={60} height={60} alt="ميزة الدعم" />
              </div>
              <h3>دعم فني على مدار الساعة</h3>
              <p>فريق دعم فني متخصص متاح 24/7 لحل جميع المشكلات التقنية</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/growth-icon 1.png" width={60} height={60} alt="ميزة الأداء" />
              </div>
              <h3>أداء عالي مع معالجات حديثة</h3>
              <p>خوادم مجهزة بأحدث المعالجات لضمان أداء متميز</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/Clip path group.png" width={60} height={60} alt="ميزة التخزين" />
              </div>
              <h3>تخزين سريع بتقنية SSD</h3>
              <p>أقراص SSD فائقة السرعة لتخزين البيانات والوصول إليها بسرعة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="assets/diffs/visitors-icon 1.png" width={60} height={60} alt="ميزة الموثوقية" />
              </div>
              <h3>ضمان توفر الخدمة بنسبة 99.9%</h3>
              <p>التزام بتوفير الخدمة بشكل مستمر مع ضمان وقت تشغيل عالي</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-questions">
            <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} style={{ display: 'none' }}>
            </div>
            <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>ما هو المخدم الافتراضي المخصص (VPS)؟</h3>
                <span className="faq-toggle">{activeIndex === 0 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  المخدم الافتراضي هو خادم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS، نحن نخصص لك بيئات منفصلة له بالكامل. هذا يعني أنه يمكنك استعمال الموارد المتاحة دون مشاركة الموارد أمام غيرك. المخدم الافتراضي أو الخادم الافتراضي هو توحيد للمعالجة الافتراضية مع عدد أحدد من نظار التشغيل.
                </p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>متى يجب على استخدام استضافة VPS بدلا من الاستضافة المشتركة؟</h3>
                <span className="faq-toggle">{activeIndex === 1 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  يجب عليك استخدام استضافة VPS عندما يزداد حجم موقعك وعدد زواره، أو عندما تحتاج إلى المزيد من الموارد والتحكم. تعتبر استضافة VPS مثالية للمواقع التي تتطلب تخصيصًا أكبر وأداء أفضل مقارنة بالاستضافة المشتركة.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>ما الفرق بين المخدم الافتراضي والمخدم المخصص؟</h3>
                <span className="faq-toggle">{activeIndex === 2 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  المخدم الافتراضي يشارك الخادم الفعلي مع مستخدمين آخرين ولكن بموارد مخصصة لك، بينما المخدم المخصص هو جهاز مادي كامل مخصص فقط لك. المخدم الافتراضي أقل تكلفة وأكثر مرونة، بينما يوفر المخدم المخصص أداءً أعلى وتحكمًا كاملًا.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>ماهي المواقع المتاحة لاستضافة VPS؟</h3>
                <span className="faq-toggle">{activeIndex === 3 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  نحن نقدم استضافة VPS في العديد من المواقع حول العالم، بما في ذلك أمريكا، أوروبا، آسيا، والشرق الأوسط. يمكنك اختيار الموقع الأقرب لجمهورك لتحسين سرعة تحميل موقعك وتقليل زمن الاستجابة.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-sidebar">
            <div>
              <div className="faq-icon">
                <img src="assets/diffs/q-icon.png" height={128} width={100} alt="الأسئلة الشائعة" />
              </div>
              <h3 className="faq-title">الأسئلة الشائعة</h3>
            </div>

            <div>
              <div className="faq-icon">
                <img src="assets/diffs/start.png" height={128} width={100} alt="مركز المساعدة" />
              </div>
              <h3 className="faq-title">مركز المساعدة</h3>
            </div>
          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="support">
        <div className="container">
          <h2>دعم فني متميز</h2>
          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/privacy-protection 1.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>دعم فني على مدار الساعة</h3>
              <p>فريق دعم متخصص متاح 24/7</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/cloud-check-icon 1.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>استجابة سريعة للطلبات</h3>
              <p>نستجيب لطلباتك في أقل من 15 دقيقة</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/Group 2380.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>خبراء متخصصون في مجال الاستضافة</h3>
              <p>فريق من الخبراء لحل جميع المشكلات التقنية</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/Group 3622.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>قاعدة معرفية شاملة</h3>
              <p>مقالات وإرشادات لمساعدتك في حل المشكلات</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/Group.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>مراقبة مستمرة للخوادم</h3>
              <p>نراقب الخوادم على مدار الساعة لضمان الأداء الأمثل</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <img src="assets/stars/Group 2515.png" width={60} height={107} alt="دعم فني" />
              </div>
              <h3>تحديثات تلقائية للأنظمة</h3>
              <p>نحدث أنظمة التشغيل والبرامج بشكل دوري</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Link to="/">Logo</Link>
            </div>
            <div className="footer-links">
              <Link to="/about">من نحن</Link>
              <Link to="/services">خدماتنا</Link>
              <Link to="/contact">اتصل بنا</Link>
              <Link to="/terms">الشروط والأحكام</Link>
              <Link to="/privacy">سياسة الخصوصية</Link>
            </div>
          </div>
          <div className="copyright">
            <p>جميع الحقوق محفوظة © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}