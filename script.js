document.getElementById('year').textContent = new Date().getFullYear();

// --- GLOBAL ELEMENT REFERENCES ---
const body = document.body;
const currentLangButton = document.getElementById('current-language-button');
const dropdownMenu = document.getElementById('language-dropdown-menu');
const langOptions = document.querySelectorAll('.lang-option');
const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const formMessage = document.getElementById('formMessage');

// Mobile menu elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const langMobileOptions = document.querySelectorAll('.lang-mobile-option');

// Cookie Banner Elements
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesButton = document.getElementById('accept-cookies');
const declineCookiesButton = document.getElementById('decline-cookies');

/* --- COOKIE BANNER LOGIC --- */
function initCookieBanner() {
    if (!cookieBanner) return;
    const decision = localStorage.getItem('cookieConsent');
    if (!decision) {
        cookieBanner.classList.remove('cookie-hidden');
    }
    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('cookie-hidden');
    });
    declineCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.add('cookie-hidden');
    });
}

// --- MOBILE MENU ---
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- I18N SETUP ---
const languageNames = { 'nl': 'Nederlands', 'en': 'English', 'fa': 'فارسی', 'ar': 'العربية' };

const translations = {
    'nl': {
        'title': 'Lex Novus | Juridisch Advies & Bestuursrecht',
        'navMission': 'Onze Missie',
        'navServices': 'Diensten',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - Het Nieuwe Recht',
        'heroTitle': 'Bestuursrechtelijke & Sociale Zekerheidshulp',
        'heroBody': 'Gespecialiseerde juridische bijstand bij Nederlandse sociale zekerheid, arbeidsongeschiktheidsclaims en bijstandszaken. Daarnaast bieden wij fiscaal advies en vertegenwoordiging bij bestuursrechtelijke geschillen.',
        'heroButton': 'Vraag Juridisch Advies Aan',
        'heroSocialButton': 'Onze Sociale Links',
        'whyTitle': 'Waarom Kiezen Voor Ons?',
        'whySubtitle': 'Wij zijn gebaseerd op de principes van toegankelijkheid, expertise en toewijding aan de bescherming van uw rechten.',
        'why1Title': 'Specialisten in Bestuursrecht',
        'why1Body': 'Maximale inzet voor uw zaak tegen beslissingen van overheidsinstanties of de gemeente.',
        'why2Title': 'Expertise & Inzicht',
        'why2Body': 'Actueel advies in sociale verzekeringen en belastingrecht voor particulieren.',
        'why3Title': 'Duidelijke Communicatie',
        'why3Body': 'Wij vertalen ingewikkeld juridisch jargon naar begrijpelijke taal.',
        'servicesTitle': 'Expertisegebieden',
        'servicesSubtitle': 'Gespecialiseerde begeleiding in sociaal-, belasting- en bestuursrecht.',
        'service1': 'Sociale Zekerheid & Arbeidsongeschiktheid',
        'service1Desc': 'Hulp bij WIA/WGA, WW en langdurige claims tegen uitkeringsbesluiten.',
        'service2': 'Fiscaal Recht voor Expats & Particulieren',
        'service2Desc': 'Aangifte inkomstenbelasting en fiscale naleving voor internationale bewoners.',
        'service3': 'Sociale Bijstand & Publieke Hulp',
        'service3Desc': 'Ondersteuning bij bijstandszaken en geschillen met de sociale dienst.',
        'service4': 'Bestuursrechtelijke Beroepen',
        'service4Desc': 'Het aanvechten van overheidsbeslissingen via officiële procedures.',
        'formTitle': 'Start Uw Consultatie',
        'formSubtitle': 'Vul het formulier in voor hulp bij uw zaak. Wij reageren binnen 3 werkdagen.',
        'formName': 'Volledige Naam',
        'formEmail': 'E-mailadres',
        'formPhone': 'Telefoonnummer (Optioneel)',
        'formType': 'Soort Vraag',
        'formTypeSelect': 'Selecteer een rechtsgebied',
        'formTypeOther': 'Overige Juridische Kwestie',
        'formDesc': 'Gedetailleerde Zaakbeschrijving',
        'formDescPlaceholder': 'Beschrijf uw kwestie, inclusief instanties en deadlines.',
        'formSubmit': 'Aanvraag Indienen',
        'footer': 'Lex Novus. Alle rechten voorbehouden.'
    },
    'en': {
        'title': 'Lex Novus | Legal Support & Administrative Law',
        'navMission': 'Our Mission',
        'navServices': 'Services',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - Modern Legal Advice',
        'heroTitle': 'Administrative & Social Security Legal Support',
        'heroBody': 'Specialized legal assistance for navigating Dutch social security, disability claims, and welfare benefits. We also provide comprehensive private tax advice and representation in administrative disputes.',
        'heroButton': 'Get Legal Consultation',
        'heroSocialButton': 'Our Social Links',
        'whyTitle': 'Why Choose Us?',
        'whySubtitle': 'We specialize in Dutch administrative law with a focus on comprehensive protection of your rights.',
        'why1Title': 'Administrative Law Experts',
        'why1Body': 'Securing the best outcome for your case against government or municipality decisions.',
        'why2Title': 'Expertise & Insight',
        'why2Body': 'Deep knowledge of Dutch social insurance systems and private tax law.',
        'why3Title': 'Clear Communication',
        'why3Body': 'We translate complex Dutch legal procedures into clear guidance.',
        'servicesTitle': 'Areas of Expertise',
        'servicesSubtitle': 'Specialized guidance in social, tax, and administrative law.',
        'service1': 'Social Security & Disability Law',
        'service1Desc': 'Legal guidance on employee benefits, unemployment, and long-term disability claims.',
        'service2': 'Expat & Individual Tax Law',
        'service2Desc': 'Advisory services for personal income tax and annual filings.',
        'service3': 'Social Assistance & Public Aid',
        'service3Desc': 'Legal support for welfare benefit matters and representation in disputes.',
        'service4': 'Administrative Law Appeals',
        'service4Desc': 'Challenging decisions made by government authorities via official procedures.',
        'formTitle': 'Initiate Your Consultation',
        'formSubtitle': 'Fill out the form below. We respond within 3 business days.',
        'formName': 'Full Name',
        'formEmail': 'Email Address',
        'formPhone': 'Phone Number (Optional)',
        'formType': 'Type of Inquiry',
        'formTypeSelect': 'Select an area of law',
        'formTypeOther': 'Other Legal Matter',
        'formDesc': 'Detailed Case Description',
        'formDescPlaceholder': 'Describe your issue, including relevant authorities.',
        'formSubmit': 'Submit Application',
        'footer': 'Lex Novus. All rights reserved.'
    },
    'fa': {
        'title': 'لکس نوووس | مشاوره حقوقی و حقوق اداری',
        'navMission': 'مأموریت ما',
        'navServices': 'خدمات',
        'navContact': 'تماس',
        'heroTag': 'لکس نوووس - مشاوره حقوقی مدرن',
        'heroTitle': 'پشتیبانی حقوقی در امور اداری و تأمین اجتماعی',
        'heroBody': 'کمک‌های حقوقی تخصصی برای قوانین تأمین اجتماعی هلند، ادعاهای ازکارافتادگی و مزایای رفاهی.',
        'heroButton': 'دریافت مشاوره حقوقی',
        'heroSocialButton': 'لینک‌های اجتماعی ما',
        'whyTitle': 'چرا ما را انتخاب کنید؟',
        'whySubtitle': 'ما در حقوق اداری هلند با تمرکز بر حمایت جامع از حقوق شما تخصص داریم.',
        'why1Title': 'متخصصان حقوق اداری',
        'why1Body': 'تضمین بهترین نتیجه ممکن در پرونده شما علیه تصمیمات دولتی.',
        'why2Title': 'تخصص و بینش',
        'why2Body': 'دانش عمیق از سیستم‌های بیمه اجتماعی و حقوق مالیاتی هلند.',
        'why3Title': 'ارتباط شفاف',
        'why3Body': 'ما رویه‌های پیچیده حقوقی را برای شما به بیانی روشن ترجمه می‌کنیم.',
        'servicesTitle': 'زمینه های تخصص',
        'servicesSubtitle': 'راهنمایی تخصصی در حقوق تأمین اجتماعی، مالیات و اداری.',
        'service1': 'حقوق تأمین اجتماعی و ازکارافتادگی',
        'service1Desc': 'راهنمایی حقوقی در زمینه مزایای کارکنان، بیکاری و ادعاهای ازکارافتادگی.',
        'service2': 'حقوق مالیاتی افراد و مهاجران',
        'service2Desc': 'خدمات مشاوره‌ای برای مالیات بر درآمد شخصی و اظهارنامه‌های سالانه.',
        'service3': 'کمک‌های اجتماعی و رفاه عمومی',
        'service3Desc': 'پشتیبانی حقوقی برای مسائل مربوط به مزایای رفاهی و اختلافات شهرداری.',
        'service4': 'درخواست‌های تجدیدنظر اداری',
        'service4Desc': 'به چالش کشیدن تصمیمات مقامات دولتی از طریق رویه‌های رسمی.',
        'formTitle': 'شروع مشاوره',
        'formSubtitle': 'فرم را پر کنید. ما طی ۳ روز کاری پاسخ می‌دهیم.',
        'formName': 'نام کامل',
        'formEmail': 'آدرس ایمیل',
        'formPhone': 'شماره تلفن (اختیاری)',
        'formType': 'نوع استعلام',
        'formTypeSelect': 'یک حوزه حقوقی را انتخاب کنید',
        'formTypeOther': 'سایر موارد حقوقی',
        'formDesc': 'توضیحات پرونده',
        'formDescPlaceholder': 'مسئله خود را توصیف کنید.',
        'formSubmit': 'ارسال درخواست',
        'footer': 'لکس نوووس. کلیه حقوق محفوظ است.'
    },
    'ar': {
        'title': 'ليكس نوفوس | الدعم القانوني والقانون الإداري',
        'navMission': 'مهمتنا',
        'navServices': 'الخدمات',
        'navContact': 'اتصل بنا',
        'heroTag': 'ليكس نوفوس - استشارات قانونية حديثة',
        'heroTitle': 'الدعم القانوني في القانون الإداري والضمان الاجتماعي',
        'heroBody': 'مساعدة قانونية متخصصة في قوانين الضمان الاجتماعي الهولندي، ومطالبات الإعاقة، ومزايا الرعاية الاجتماعية.',
        'heroButton': 'اطلب استشارة قانونية',
        'heroSocialButton': 'روابطنا الاجتماعية',
        'whyTitle': 'لماذا تختارنا؟',
        'whySubtitle': 'نحن متخصصون في القانون الإداري الهولندي مع التركيز على حماية حقوقك.',
        'why1Title': 'خبراء في القانون الإداري',
        'why1Body': 'تأمين أفضل نتيجة لقضيتك ضد قرارات الحكومة أو البلدية.',
        'why2Title': 'الخبرة والبصيرة',
        'why2Body': 'معرفة عميقة بنظم التأمين الاجتماعي وقانون الضرائب الهولندي.',
        'why3Title': 'تواصل واضح',
        'why3Body': 'نحن نترجم الإجراءات القانونية المعقدة إلى إرشادات واضحة.',
        'servicesTitle': 'مجالات الخبرة',
        'servicesSubtitle': 'إرشادات متخصصة في قوانين الضمان الاجتماعي والضرائب والقانون الإداري.',
        'service1': 'قانون الضمان الاجتماعي والإعاقة',
        'service1Desc': 'إرشادات قانونية بشأن مزايا الموظفين والبطالة ومطالبات الإعاقة.',
        'service2': 'قانون الضرائب للأفراد والمغتربين',
        'service2Desc': 'خدمات استشارية لضريبة الدخل الشخصي والإقرارات السنوية.',
        'service3': 'المساعدة الاجتماعية والإعانات العامة',
        'service3Desc': 'دعم قانوني لمسائل مزايا الرعاية الاجتماعية والنزاعات مع البلدية.',
        'service4': 'الطعون في القانون الإداري',
        'service4Desc': 'الطعن في القرارات الصادرة عن السلطات الحكومية رسميًا.',
        'formTitle': 'ابدأ استشارتك',
        'formSubtitle': 'يرجى ملء النموذج أدناه. نرد خلال ٣ أيام عمل.',
        'formName': 'الاسم الكامل',
        'formEmail': 'البريد الإلكتروني',
        'formPhone': 'رقم الهاتف (اختياري)',
        'formType': 'نوع الاستفسار',
        'formTypeSelect': 'اختر مجال قانوني',
        'formTypeOther': 'مسألة قانونية أخرى',
        'formDesc': 'وصف القضية',
        'formDescPlaceholder': 'يرجى وصف مسألتك.',
        'formSubmit': 'إرسال الطلب',
        'footer': 'ليكس نوفوس. جميع الحقوق محفوظة.'
    }
};

let currentLang = localStorage.getItem('lang') || 'nl';

// --- UTILITIES ---
function applyTranslation(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[key]) el.textContent = dictionary[key];
    });
    const placeholderDesc = document.getElementById('details');
    if (placeholderDesc && dictionary['formDescPlaceholder']) {
        placeholderDesc.setAttribute('placeholder', dictionary['formDescPlaceholder']);
    }
    if (currentLangButton) currentLangButton.textContent = languageNames[lang];
    body.setAttribute('dir', (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr');
}

/* --- SOCIAL MEDIA DEEP LINK FIX --- */
function fixSocialLinks() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    document.querySelectorAll('a').forEach(link => {
        const href = link.href;
        
        // Instagram Fix
        if (href.includes('instagram.com/')) {
            const username = href.split('instagram.com/')[1].split('/')[0].split('?')[0];
            if (username && !['p', 'reels', 'stories'].includes(username)) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = `instagram://user?username=${username}`;
                    setTimeout(() => { window.location.href = href; }, 1000);
                });
            }
        }
        
        // TikTok Fix
        if (href.includes('tiktok.com/@')) {
            const username = href.split('tiktok.com/')[1].split('/')[0].split('?')[0];
            if (username) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = `tiktok://user?username=${username}`;
                    setTimeout(() => { window.location.href = href; }, 1000);
                });
            }
        }
    });
}

// --- INITIALIZE ---
applyTranslation(currentLang);
initCookieBanner();
fixSocialLinks();

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = '...';
        
        const params = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            phone_number: document.getElementById('phone').value,
            inquiry_type: document.getElementById('subject').value,
            case_description: document.getElementById('details').value
        };

        emailjs.send('service_v38qw98', 'template_uil4phd', params)
            .then(() => {
                formMessage.textContent = 'Success!';
                formMessage.className = 'p-3 rounded-xl bg-green-100 text-green-800 text-center';
                formMessage.classList.remove('hidden');
                form.reset();
            })
            .catch(() => {
                formMessage.textContent = 'Error sending.';
                formMessage.className = 'p-3 rounded-xl bg-red-100 text-red-800 text-center';
                formMessage.classList.remove('hidden');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Aanvraag Indienen';
            });
    });
}

// Language Switchers
langOptions.forEach(opt => opt.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = e.target.getAttribute('data-lang');
    localStorage.setItem('lang', currentLang);
    applyTranslation(currentLang);
    dropdownMenu.classList.add('hidden');
}));