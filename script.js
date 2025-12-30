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
        'title': 'Lex Novus | Bezwaarschrift UWV & Juridisch Advies',
        'navMission': 'Onze Missie',
        'navServices': 'Diensten',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - Juridisch Specialist',
        'heroTitle': 'Hulp bij Bezwaarschrift UWV & Juridische Zaken',
        'heroBody': 'Wij zijn gespecialiseerd in het schrijven van bezwaarschriften voor het UWV, hulp bij WIA/WGA-uitkeringen en juridische bijstand voor de Bijstand. Daarnaast bieden wij fiscaal advies voor expats en particulieren.',
        'heroButton': 'Vraag Juridisch Advies Aan',
        'heroSocialButton': 'Onze Sociale Links',
        'whyTitle': 'Waarom Kiezen Voor Ons?',
        'whySubtitle': 'Expertise in sociaal zekerheidsrecht en een resultaatgerichte aanpak voor uw rechten.',
        'why1Title': 'UWV Specialist',
        'why1Body': 'Maximale inzet voor uw bezwaar tegen beslissingen van het UWV of de gemeente.',
        'why2Title': 'Expertise & Inzicht',
        'why2Body': 'Actuele kennis van de WIA, WW en Participatiewet voor het beste resultaat.',
        'why3Title': 'Duidelijke Taal',
        'why3Body': 'Wij vertalen complexe juridische regels naar begrijpelijk advies.',
        'servicesTitle': 'Expertisegebieden',
        'servicesSubtitle': 'Gespecialiseerde begeleiding in sociaal-, belasting- en bestuursrecht.',
        'service1': 'UWV & WIA/WGA Hulp',
        'service1Desc': 'Hulp bij het schrijven van een bezwaarschrift en begeleiding bij herbeoordelingen (WIA/WGA/WW).',
        'service2': 'Belastingadvies Expats',
        'service2Desc': 'Fiscaal advies en hulp bij de aangifte inkomstenbelasting voor expats en particulieren.',
        'service3': 'Bijstand & Sociale Dienst',
        'service3Desc': 'Juridische hulp bij problemen met uw bijstandsuitkering of besluiten van de gemeente.',
        'service4': 'Bestuursrechtelijk Bezwaar',
        'service4Desc': 'Behandeling van bezwaar en beroep tegen beslissingen van overheidsinstanties.',
        'formTitle': 'Start Uw Consultatie',
        'formSubtitle': 'Vul het formulier in voor hulp bij uw UWV, Bijstand of belastingzaak. Wij reageren binnen 3 werkdagen.',
        'formName': 'Volledige Naam',
        'formEmail': 'E-mailadres',
        'formPhone': 'Telefoonnummer (Optioneel)',
        'formType': 'Soort Vraag',
        'formTypeSelect': 'Selecteer een rechtsgebied',
        'formTypeOther': 'Overige Juridische Kwestie',
        'formDesc': 'Gedetailleerde Zaakbeschrijving',
        'formDescPlaceholder': 'Beschrijf uw kwestie, inclusief instanties (zoals UWV of gemeente) en deadlines.',
        'formSubmit': 'Aanvraag Indienen',
        'formNote': 'Uw gegevens worden veilig verzonden. Wij nemen spoedig contact met u op.',
        'footer': 'Lex Novus. Alle rechten voorbehouden.'
    },
    'en': {
        'title': 'Lex Novus | UWV Objection Letters & Legal Help Netherlands',
        'navMission': 'Our Mission',
        'navServices': 'Services',
        'navContact': 'Contact',
        'heroTag': 'Legal Advisor for Social Security Netherlands',
        'heroTitle': 'Writing Objection Letters to UWV & Legal Help',
        'heroBody': 'Specialized legal assistance for writing objection letters to the UWV, WIA/WGA disability benefit help, and legal assistance for welfare benefits (Bijstand). We also provide private tax advice for expats.',
        'heroButton': 'Get Legal Consultation',
        'heroSocialButton': 'Our Social Links',
        'whyTitle': 'Why Choose Us?',
        'whySubtitle': 'We specialize in Dutch administrative law with a focus on expat needs and social security.',
        'why1Title': 'UWV Objection Experts',
        'why1Body': 'Securing the best outcome for your objection against UWV or municipality decisions.',
        'why2Title': 'Expertise & Insight',
        'why2Body': 'Deep knowledge of WIA, WGA, and Dutch tax law for international residents.',
        'why3Title': 'Clear Communication',
        'why3Body': 'We translate Dutch legal procedures into clear English guidance.',
        'servicesTitle': 'Areas of Expertise',
        'servicesSubtitle': 'Specialized guidance in social, tax, and administrative law for the Dutch context.',
        'service1': 'UWV & WIA/WGA Help',
        'service1Desc': 'Expert help with writing objection letters to the UWV and WIA/WGA disability benefit legal help.',
        'service2': 'Private Tax Advice',
        'service2Desc': 'Private tax advice in the Netherlands for expats, including annual filings and fiscal guidance.',
        'service3': 'Welfare Benefits (Bijstand)',
        'service3Desc': 'Legal assistance for welfare benefits (Bijstand) and appeals against local municipality decisions.',
        'service4': 'Administrative Appeals',
        'service4Desc': 'Handling administrative law appeals and objections against decisions made by government bodies.',
        'formTitle': 'Initiate Your Consultation',
        'formSubtitle': 'Fill out the form below for help with your UWV, Tax, or Bijstand case. We respond within 3 business days.',
        'formName': 'Full Name',
        'formEmail': 'Email Address',
        'formPhone': 'Phone Number (Optional)',
        'formType': 'Type of Inquiry',
        'formTypeSelect': 'Select an area of law',
        'formTypeOther': 'Other Legal Matter',
        'formDesc': 'Detailed Case Description',
        'formDescPlaceholder': 'Describe your issue, including relevant authorities (e.g., UWV, Belastingdienst) and deadlines.',
        'formSubmit': 'Submit Application',
        'formNote': 'Your data is sent securely for review. We will contact you shortly.',
        'footer': 'Lex Novus. All rights reserved.'
    },
    'fa': {
        'title': 'لکس نوووس | اعتراض به تصمیمات UWV و مشاوره حقوقی',
        'navMission': 'مأموریت ما',
        'navServices': 'خدمات',
        'navContact': 'تماس',
        'heroTag': 'مشاور حقوقی تامین اجتماعی در هلند',
        'heroTitle': 'تنظیم لایحه اعتراض به UWV و امور حقوقی',
        'heroBody': 'تخصص ما در نوشتن نامه‌های اعتراض به UWV، کمک به پرونده‌های ازکارافتادگی (WIA/WGA) و کمک حقوقی برای مزایای رفاهی (Bijstand) است. ما همچنین خدمات مالیاتی اختصاصی برای اکسپت‌ها ارائه می‌دهیم.',
        'heroButton': 'دریافت مشاوره حقوقی',
        'heroSocialButton': 'لینک‌های اجتماعی ما',
        'whyTitle': 'چرا ما را انتخاب کنید؟',
        'whySubtitle': 'تخصص در قوانین تامین اجتماعی هلند و رویکرد نتیجه‌محور برای احقاق حقوق شما.',
        'why1Title': 'متخصص اعتراضات UWV',
        'why1Body': 'تضمین بهترین نتیجه ممکن در اعتراض به تصمیمات UWV یا شهرداری.',
        'why2Title': 'تخصص و بینش',
        'why2Body': 'دانش عمیق در قوانین WIA، بیکاری و قوانین مالیاتی هلند.',
        'why3Title': 'ارتباط شفاف',
        'why3Body': 'ترجمه اصطلاحات پیچیده حقوقی هلندی به زبان ساده برای شما.',
        'servicesTitle': 'زمینه های تخصص',
        'servicesSubtitle': 'راهنمایی تخصصی در حقوق تأمین اجتماعی، مالیات و اداری هلند.',
        'service1': 'اعتراض به UWV و WIA/WGA',
        'service1Desc': 'کمک حرفه‌ای در نوشتن لایحه اعتراض به UWV و همراهی در پرونده‌های ازکارافتادگی.',
        'service2': 'مشاوره مالیاتی اکسپت‌ها',
        'service2Desc': 'مشاوره مالیاتی اختصاصی برای افراد خارجی در هلند و تنظیم اظهارنامه‌های مالیاتی.',
        'service3': 'کمک حقوقی بیجستاند (Bijstand)',
        'service3Desc': 'حمایت حقوقی در صورت رد یا قطع حقوق سوسیال (Bijstand) توسط شهرداری.',
        'service4': 'اعتراضات اداری',
        'service4Desc': 'رسیدگی به اعتراضات و تجدیدنظرها علیه تصمیمات نهادهای دولتی (Bezwaar & Beroep).',
        'formTitle': 'شروع مشاوره',
        'formSubtitle': 'فرم را برای کمک در پرونده‌های UWV، مالیات یا بیجستاند پر کنید. پاسخگویی در ۳ روز کاری.',
        'formName': 'نام کامل',
        'formEmail': 'آدرس ایمیل',
        'formPhone': 'شماره تلفن (اختیاری)',
        'formType': 'نوع استعلام',
        'formTypeSelect': 'یک حوزه حقوقی را انتخاب کنید',
        'formTypeOther': 'سایر موارد حقوقی',
        'formDesc': 'توضیحات پرونده',
        'formDescPlaceholder': 'موضوع خود را شرح دهید، شامل نهاد مربوطه (مانند UWV یا شهرداری) و ضرب‌الاجل‌ها.',
        'formSubmit': 'ارسال درخواست',
        'formNote': 'داده‌های شما به صورت ایمن ارسال می‌شود. به زودی با شما تماس می‌گیریم.',
        'footer': 'لکس نوووس. کلیه حقوق محفوظ است.'
    },
    'ar': {
        'title': 'ليكس نوفوس | اعتراضات UWV والاستشارات القانونية',
        'navMission': 'مهمتنا',
        'navServices': 'الخدمات',
        'navContact': 'اتصل بنا',
        'heroTag': 'مستشار قانون الضمان الاجتماعي في هولندا',
        'heroTitle': 'كتابة خطابات الاعتراض لـ UWV والمساعدة القانونية',
        'heroBody': 'نحن متخصصون في كتابة خطابات الاعتراض لـ UWV، والمساعدة في مزايا الإعاقة (WIA/WGA)، والمساعدة القانونية لمزايا الرعاية الاجتماعية (Bijstand). كما نقدم نصائح ضريبية للمغتربين.',
        'heroButton': 'اطلب استشارة قانونية',
        'heroSocialButton': 'روابطنا الاجتماعية',
        'whyTitle': 'لماذا تختارنا؟',
        'whySubtitle': 'خبرة في قانون الضمان الاجتماعي الهولندي ونهج موجه نحو النتائج لحماية حقوقك.',
        'why1Title': 'خبير اعتراضات UWV',
        'why1Body': 'تأمين أفضل نتيجة لاعتراضك ضد قرارات UWV أو البلدية.',
        'why2Title': 'الخبرة والبصيرة',
        'why2Body': 'معرفة عميقة بقوانين WIA والضرائب الهولندية للمقيمين الدوليين.',
        'why3Title': 'تواصل واضح',
        'why3Body': 'نترجم الإجراءات القانونية الهولندية المعقدة إلى لغة بسيطة وواضحة.',
        'servicesTitle': 'مجالات الخبرة',
        'servicesSubtitle': 'إرشادات متخصصة في قوانين الضمان الاجتماعي والضرائب والقانون الإداري.',
        'service1': 'مساعدة UWV و WIA/WGA',
        'service1Desc': 'مساعدة خبيرة في كتابة خطابات الاعتراض لـ UWV ودعم قانوني لمطالبات الإعاقة.',
        'service2': 'نصائح ضريبية للمغتربين',
        'service2Desc': 'نصائح ضريبية خاصة للمغتربين في هولندا، بما في ذلك تقديم الإقرارات السنوية.',
        'service3': 'مساعدات البيجستاند (Bijstand)',
        'service3Desc': 'مساعدة قانونية لمزايا الرعاية الاجتماعية (Bijstand) والاعتراضات ضد قرارات البلدية.',
        'service4': 'الطعون الإدارية',
        'service4Desc': 'التعامل مع الاعتراضات والطعون الإدارية ضد قرارات الهيئات الحكومية.',
        'formTitle': 'ابدأ استشارتك',
        'formSubtitle': 'يرجى ملء النموذج للمساعدة في قضية UWV أو الضرائب أو البيجستاند. نرد خلال ٣ أيام عمل.',
        'formName': 'الاسم الكامل',
        'formEmail': 'البريد الإلكتروني',
        'formPhone': 'رقم الهاتف (اختياري)',
        'formType': 'نوع الاستفسار',
        'formTypeSelect': 'اختر مجال قانوني',
        'formTypeOther': 'مسألة قانونية أخرى',
        'formDesc': 'وصف القضية',
        'formDescPlaceholder': 'يرجى وصف مسألتك، بما في ذلك الجهات الحكومية المعنية والمواعيد النهائية.',
        'formSubmit': 'إرسال الطلب',
        'formNote': 'يتم إرسال بياناتك بشكل آمن. سنتصل بك قريبًا.',
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