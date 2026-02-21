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

document.getElementById('year').textContent = new Date().getFullYear();

/* --- COOKIE BANNER LOGIC ADDED --- */
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    if (!banner) return;

    // Read saved preference
    const decision = localStorage.getItem('cookieConsent');

    if (!decision) {
        banner.classList.remove('cookie-hidden');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.add('cookie-hidden');
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        banner.classList.add('cookie-hidden');
    });
}

// --- MOBILE MENU FUNCTIONALITY ---
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// --- I18N SETUP ---
const languageNames = {
    'nl': 'Nederlands',
    'en': 'English',
    'fa': 'فارسی',
    'ar': 'العربية'
};

// --- COMPLETE TRANSLATIONS DATA ---
const translations = {
    'nl': {
        'title': 'Lex Novus | Juridisch Advies & Bestuursrecht',
        'navMission': 'Onze Missie',
        'navServices': 'Diensten',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - Het Nieuwe Recht',
        'heroTitle': 'Bestuursrechtelijke & Sociale Zekerheidshulp',
        'heroBody': 'Juridische hulp en advies rondom sociale zekerheidsrecht. Aanvragen gezinshereniging en doen van bestuursrechtelijke bezwaarschriften.',
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
        'service1Desc': 'Juridische begeleiding bij werknemersverzekeringen, PW en langdurige claims tegen uitkeringsbesluiten.',
        'service2': 'Fiscaal Recht voor Expats & Particulieren',
        'service2Desc': 'Aangifte inkomstenbelasting en fiscale naleving voor internationale bewoners.',
        'service3': 'Sociale Bijstand & Publieke Hulp',
        'service3Desc': 'Ondersteuning bij bijstandszaken en geschillen met de sociale dienst.',
        'service4': 'Bestuursrechtelijke Beroepen',
        'service4Desc': 'Hulp bij het vinden van Notaris en geven van machtiging aan reizende vluchtelingen. Aanvragen gezinshereniging.',
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
        'heroBody': 'Legal help and advice regarding social security law. Family reunification applications and administrative law appeals.',
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
        'service1Desc': 'Legal guidance on employee benefits, PW and long-term claims against benefit decisions.',
        'service2': 'Expat & Individual Tax Law',
        'service2Desc': 'Advisory services for personal income tax and annual filings.',
        'service3': 'Social Assistance & Public Aid',
        'service3Desc': 'Legal support for welfare benefit matters and representation in disputes.',
        'service4': 'Administrative Law Appeals',
        'service4Desc': 'Assistance in finding a notary and granting power of attorney for traveling refugees. Family reunification applications.',
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
        'heroBody': 'کمک و مشاوره حقوقی در زمینه حقوق تامین اجتماعی. درخواست های الحاق به خانواده و اعتراضات حقوق اداری.',
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
        'service1Desc': 'راهنمایی حقوقی در زمینه مزایای کارکنان، PW و ادعاهای مربوط به تصمیمات مزایا.',
        'service2': 'حقوق مالیاتی افراد و مهاجران',
        'service2Desc': 'خدمات مشاوره‌ای برای مالیات بر درآمد شخصی و اظهارنامه‌های سالانه.',
        'service3': 'کمک‌های اجتماعی و رفاه عمومی',
        'service3Desc': 'پشتیبانی حقوقی برای مسائل مربوط به مزایای رفاهی و اختلافات شهرداری.',
        'service4': 'درخواست‌های تجدیدنظر اداری',
        'service4Desc': 'کمک در یافتن سردفتر و اعطای وکالتنامه به پناهندگان در حال سفر. درخواست های الحاق به خانواده.',
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
        'heroBody': 'المساعدة والمشورة القانونية فيما يتعلق بقانون الضمان الاجتماعي. طلبات لم شمل الأسرة والطعون في القانون الإداري.',
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
        'service1Desc': 'إرشادات قانونية بشأن مزايا الموظفين، PW والمطالبات ضد قرارات المزايا.',
        'service2': 'قانون الضرائب للأفراد والمغتربين',
        'service2Desc': 'خدمات استشارية لضريبة الدخل الشخصي والإقرارات السنوية.',
        'service3': 'المساعدة الاجتماعية والإعانات العامة',
        'service3Desc': 'دعم قانوني لمسائل مزايا الرعاية الاجتماعية والنزاعات مع البلدية.',
        'service4': 'الطعون في القانون الإداري',
        'service4Desc': 'المساعدة في العثور على كاتب عدل ومنح التوكيل للاجئين المسافرين. طلبات لم شمل الأسرة.',
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

// Get language from localStorage
let currentLang = localStorage.getItem('lang');
if (!currentLang) {
    currentLang = 'nl';
    localStorage.setItem('lang', 'nl');
}

// --- UTILITY FUNCTIONS ---
function toggleDropdown() {
    const isExpanded = dropdownMenu.classList.contains('hidden');
    dropdownMenu.classList.toggle('hidden', !isExpanded);
    currentLangButton.setAttribute('aria-expanded', isExpanded);
}

function updateLanguageButton() {
    if (currentLangButton) {
        currentLangButton.innerHTML = languageNames[currentLang];
    }
}

function setDirection(lang) {
    if (lang === 'fa' || lang === 'ar') {
        body.setAttribute('dir', 'rtl');
    } else {
        body.setAttribute('dir', 'ltr');
    }
}

function applyTranslation(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key]) {
            if (element.tagName === 'TITLE') {
                document.title = dictionary[key];
            } else {
                element.textContent = dictionary[key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            element.setAttribute('placeholder', dictionary[key]);
        }
    });

    const inquirySelect = document.getElementById('subject');
    if (inquirySelect) {
        Array.from(inquirySelect.options).forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (key && dictionary[key]) {
                option.textContent = dictionary[key];
            }
        });
    }
}

// --- I18N INITIALIZATION AND HANDLERS ---
function initI18n() {
    applyTranslation(currentLang);
    setDirection(currentLang);
    updateLanguageButton();

    if (currentLangButton) {
        currentLangButton.addEventListener('click', toggleDropdown);
    }

    // Desktop language options
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = e.target.getAttribute('data-lang');
            if (newLang && newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('lang', currentLang);
                applyTranslation(currentLang);
                setDirection(currentLang);
                updateLanguageButton();
            }
            toggleDropdown();
        });
    });

    // Mobile language options
    langMobileOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang-mobile');
            if (newLang && newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('lang', currentLang);
                applyTranslation(currentLang);
                setDirection(currentLang);
                updateLanguageButton();
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        const languageSwitcher = document.getElementById('language-switcher-container');
        if (languageSwitcher && !languageSwitcher.contains(event.target)) {
            if (dropdownMenu) {
                dropdownMenu.classList.add('hidden');
                if (currentLangButton) {
                    currentLangButton.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
}

// --- EMAILJS FORM SUBMISSION ---
function sendEmail(e) {
    e.preventDefault();
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone_number: document.getElementById('phone').value || 'Not provided',
        inquiry_type: document.getElementById('subject').value,
        case_description: document.getElementById('details').value
    };
    
    Promise.all([
        emailjs.send('service_v38qw98', 'template_uil4phd', templateParams),
        emailjs.send('service_v38qw98', 'template_autoreply', templateParams)
    ])
        .then(function(responses) {
            console.log('✅ Both emails sent successfully!');
            formMessage.textContent = 'Your message has been sent successfully! We will contact you within 3 business days.';
            formMessage.className = 'p-3 rounded-xl text-sm font-medium text-center transition duration-300 bg-green-100 text-green-800';
            formMessage.classList.remove('hidden');
            
            form.reset();
            submitButton.disabled = false;
            applyTranslation(currentLang);
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        })
        .catch(function(error) {
            console.error('❌ Failed to send:', error);
            formMessage.textContent = 'Failed to send message. Please try again or contact us directly.';
            formMessage.className = 'p-3 rounded-xl text-sm font-medium text-center transition duration-300 bg-red-100 text-red-800';
            formMessage.classList.remove('hidden');
            
            submitButton.disabled = false;
            applyTranslation(currentLang);
        });
}

// --- APPLICATION START ---
initI18n();
initCookieBanner();

if (form) {
    form.addEventListener('submit', sendEmail);
}