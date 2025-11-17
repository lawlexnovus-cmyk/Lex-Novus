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
        'title': 'Lex Novus | Nieuw Recht Juridisch Advies',
        'navMission': 'Onze Missie',
        'navServices': 'Diensten',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - Het Nieuwe Recht',
        'heroTitle': 'Duidelijkheid en Vertrouwen in Juridische Zaken',
        'heroBody': 'Wij bieden geïnformeerde, toegankelijke begeleiding, waarbij we onze expertise toepassen op complexe juridische zaken om duidelijke en praktische oplossingen te bereiken. Wij zorgen ervoor dat elke opdracht modern, klantgericht en transparant is.',
        'heroButton': 'Vraag Juridisch Advies Aan',
        'heroSocialButton': 'Onze Sociale Links',
        'whyTitle': 'Waarom Kiezen Voor Ons?',
        'whySubtitle': 'Wij zijn gebaseerd op de principes van toegankelijkheid, expertise en toewijding aan de bescherming van uw rechten.',
        'why1Title': 'Toegewijde Bescherming',
        'why1Body': 'Ons doel is het beste mogelijke resultaat voor elke zaak, groot of klein, te garanderen.',
        'why2Title': 'Expertise & Inzicht',
        'why2Body': 'We blijven op de hoogte van wetswijzigingen om het meest actuele en effectieve advies te bieden.',
        'why3Title': 'Duidelijke Communicatie',
        'why3Body': 'We vertalen ingewikkeld juridisch jargon naar duidelijke taal, zodat u altijd uw opties begrijpt.',
        'servicesTitle': 'Expertisegebieden',
        'servicesSubtitle': 'Gespecialiseerde begeleiding in sociaal-, belasting- en bestuursrecht voor de Nederlandse context.',
        'service1': 'Sociaal Zekerheidsrecht',
        'service1Desc': 'Advies over sociale uitkeringen, werkgelegenheid, werkloosheid en arbeidsongeschiktheidsbeleid.',
        'service2': 'Particuliere Inkomstenbelasting',
        'service2Desc': 'Opstellen en indienen van particuliere inkomstenbelastingaangiften en fiscale begeleiding.',
        'service3': 'Familie-/Immigratierecht',
        'service3Desc': 'Legalisatie en indiening van gezinshereniging en gerelateerde administratieve documenten.',
        'service4': 'Bestuursrechtelijke Beroepen',
        'service4Desc': 'Behandeling van bezwaren en beroepen tegen beslissingen van overheidsinstanties (Bezwaar & Beroep).',
        'formTitle': 'Start Uw Consultatie',
        'formSubtitle': 'Vul het onderstaande formulier in om voorlopige details over uw zaak te verstrekken. Wij nemen binnen maximaal 3 werkdagen contact met u op.',
        'formName': 'Volledige Naam',
        'formEmail': 'E-mailadres',
        'formPhone': 'Telefoonnummer (Optioneel)',
        'formType': 'Soort Vraag',
        'formTypeSelect': 'Selecteer een rechtsgebied',
        'formTypeOther': 'Overige Juridische Kwestie',
        'formDesc': 'Gedetailleerde Zaakbeschrijving',
        'formDescPlaceholder': 'Beschrijf alstublieft uw juridische kwestie, inclusief relevante overheidsinstanties, documenten of deadlines.',
        'formSubmit': 'Aanvraag Indienen',
        'formNote': 'Uw gegevens worden veilig verzonden ter beoordeling. Wij nemen spoedig contact met u op.',
        'footer': 'Lex Novus. Alle rechten voorbehouden.'
    },
    'en': {
        'title': 'Lex Novus | New Law Legal Consulting',
        'navMission': 'Our Mission',
        'navServices': 'Services',
        'navContact': 'Contact',
        'heroTag': 'Lex Novus - The New Law',
        'heroTitle': 'Clarity and Confidence in Legal Matters',
        'heroBody': 'We provide informed, accessible guidance, applying our expertise to complex legal matters to achieve clear and practical solutions. We ensure every engagement is modern, client-focused, and transparent.',
        'heroButton': 'Get Legal Consultation',
        'heroSocialButton': 'Our Social Links',
        'whyTitle': 'Why Choose Us?',
        'whySubtitle': 'We are founded on principles of accessibility, expertise, and a dedication to protecting your rights.',
        'why1Title': 'Dedicated Protection',
        'why1Body': 'Our goal is securing the best possible outcome for every case, big or small.',
        'why2Title': 'Expertise & Insight',
        'why2Body': 'We stay ahead of legal changes to provide the most current and effective advice available.',
        'why3Title': 'Clear Communication',
        'why3Body': 'We translate complicated legal jargon into plain language so you always understand your options.',
        'servicesTitle': 'Areas of Expertise',
        'servicesSubtitle': 'Specialized guidance in social, tax, and administrative law for the Dutch context.',
        'service1': 'Social Security Law',
        'service1Desc': 'Advice on social benefits, employment, unemployment, and disability policies.',
        'service2': 'Private Income Tax',
        'service2Desc': 'Preparation and filing of private income tax returns and fiscal guidance.',
        'service3': 'Family/Immigration Law',
        'service3Desc': 'Legalization and submission of family reunification and related administrative documents.',
        'service4': 'Administrative Appeals',
        'service4Desc': 'Handling objections and appeals against decisions made by government bodies (Bezwaar & Beroep).',
        'formTitle': 'Initiate Your Consultation',
        'formSubtitle': 'Please fill out the form below to provide preliminary details about your case. We will contact you in a maximum of 3 business days.',
        'formName': 'Full Name',
        'formEmail': 'Email Address',
        'formPhone': 'Phone Number (Optional)',
        'formType': 'Type of Inquiry',
        'formTypeSelect': 'Select an area of law',
        'formTypeOther': 'Other Legal Matter',
        'formDesc': 'Detailed Case Description',
        'formDescPlaceholder': 'Please describe your legal issue, including any relevant government bodies, documents, or deadlines.',
        'formSubmit': 'Submit Application',
        'formNote': 'Your data is sent securely for review. We will contact you shortly.',
        'footer': 'Lex Novus. All rights reserved.'
    },
    'fa': {
        'title': 'لکس نوووس | مشاوره حقوقی قانون جدید',
        'navMission': 'مأموریت ما',
        'navServices': 'خدمات',
        'navContact': 'تماس',
        'heroTag': 'لکس نوووس - قانون جدید',
        'heroTitle': 'شفافیت و اطمینان در امور حقوقی',
        'heroBody': 'ما راهنمایی آگاهانه و قابل دسترس ارائه می‌دهیم و تخصص خود را در امور حقوقی پیچیده به کار می‌بریم تا به راه حل‌های واضح و عملی برسیم. ما تضمین می‌کنیم که هر تعاملی مدرن، مشتری مدار و شفاف باشد.',
        'heroButton': 'دریافت مشاوره حقوقی',
        'heroSocialButton': 'لینک‌های اجتماعی ما',
        'whyTitle': 'چرا ما را انتخاب کنید؟',
        'whySubtitle': 'ما بر اساس اصول دسترسی، تخصص و تعهد به حمایت از حقوق شما تأسیس شده ایم.',
        'why1Title': 'حمایت اختصاصی',
        'why1Body': 'هدف ما تضمین بهترین نتیجه ممکن برای هر پرونده، بزرگ یا کوچک است.',
        'why2Title': 'تخصص و بینش',
        'why2Body': 'ما برای ارائه به روزترین و مؤثرترین مشاوره موجود، از تغییرات قانونی پیشی می گیریم.',
        'why3Title': 'ارتباط شفاف',
        'why3Body': 'ما اصطلاحات حقوقی پیچیده را به زبان ساده ترجمه می کنیم تا شما همیشه گزینه های خود را درک کنید.',
        'servicesTitle': 'زمینه های تخصص',
        'servicesSubtitle': 'راهنمایی تخصصی در حقوق تأمین اجتماعی، مالیات و اداری برای بافت هلندی.',
        'service1': 'قانون تامین اجتماعی',
        'service1Desc': 'مشاوره در مورد مزایای اجتماعی، اشتغال، بیکاری و سیاست های ناتوانی.',
        'service2': 'مالیات بر درآمد خصوصی',
        'service2Desc': 'تهیه و ثبت اظهارنامه مالیات بر درآمد خصوصی و مشاوره مالیاتی.',
        'service3': 'حقوق خانواده/مهاجرت',
        'service3Desc': 'قانونی سازی و ارسال مدارک مربوط به الحاق خانواده و مستندات اداری مرتبط.',
        'service4': 'تجدیدنظرهای اداری',
        'service4Desc': 'رسیدگی به اعتراضات و تجدیدنظرها علیه تصمیمات اتخاذ شده توسط نهادهای دولتی (اعتراض و تجدیدنظر).',
        'formTitle': 'شروع مشاوره شما',
        'formSubtitle': 'لطفاً فرم زیر را پر کنید تا جزئیات مقدماتی پرونده خود را ارائه دهید. ما حداکثر ظرف 3 روز کاری با شما تماس خواهیم گرفت.',
        'formName': 'نام کامل',
        'formEmail': 'آدرس ایمیل',
        'formPhone': 'شماره تلفن (اختیاری)',
        'formType': 'نوع استعلام',
        'formTypeSelect': 'یک حوزه حقوقی را انتخاب کنید',
        'formTypeOther': 'مسئله حقوقی دیگر',
        'formDesc': 'توضیحات دقیق پرونده',
        'formDescPlaceholder': 'لطفاً موضوع حقوقی خود را شرح دهید، از جمله هر گونه نهاد دولتی، مدارک یا مهلت‌های مربوطه.',
        'formSubmit': 'ارسال درخواست',
        'formNote': 'داده های شما به صورت ایمن برای بررسی ارسال می شود. ما به زودی با شما تماس خواهیم گرفت.',
        'footer': 'لکس نوووس. کلیه حقوق محفوظ است.'
    },
    'ar': {
        'title': 'ليكس نوفوس | استشارات قانونية للقانون الجديد',
        'navMission': 'مهمتنا',
        'navServices': 'الخدمات',
        'navContact': 'اتصل بنا',
        'heroTag': 'ليكس نوفوس - القانون الجديد',
        'heroTitle': 'وضوح وثقة في المسائل القانونية',
        'heroBody': 'نقدم إرشادات مستنيرة ومتاحة، ونطبق خبرتنا على المسائل القانونية المعقدة للوصول إلى حلول واضحة وعملية. نضمن أن تكون كل مهمة حديثة، مُركزة على العميل، وشفافة.',
        'heroButton': 'اطلب استشارة قانونية',
        'heroSocialButton': 'روابطنا الاجتماعية',
        'whyTitle': 'لماذا تختارنا؟',
        'whySubtitle': 'تأسسنا على مبادئ إمكانية الوصول، والخبرة، والتفاني في حماية حقوقك.',
        'why1Title': 'حماية متفانية',
        'why1Body': 'هدفنا هو تأمين أفضل نتيجة ممكنة لكل قضية، كبيرة كانت أم صغيرة.',
        'why2Title': 'الخبرة والبصيرة',
        'why2Body': 'نحن نتابع التغييرات القانونية لتقديم أحدث وأكثر النصائح فعالية المتاحة.',
        'why3Title': 'تواصل واضح',
        'why3Body': 'نحن نترجم المصطلحات القانونية المعقدة إلى لغة بسيطة حتى تفهم خياراتك دائمًا.',
        'servicesTitle': 'مجالات الخبرة',
        'servicesSubtitle': 'إرشادات متخصصة في قوانين الضمان الاجتماعي والضرائب والقانون الإداري في السياق الهولندي.',
        'service1': 'قانون الضمان الاجتماعي',
        'service1Desc': 'مشورة حول المنافع الاجتماعية، والتوظيف، والبطالة، وسياسات الإعاقة.',
        'service2': 'ضريبة الدخل الخاصة',
        'service2Desc': 'إعداد وتقديم إقرارات ضريبة الدخل الخاصة والإرشاد المالي.',
        'service3': 'قانون الأسرة/الهجرة',
        'service3Desc': 'تقنين وتقديم وثائق لم شمل الأسرة والوثائق الإدارية ذات الصلة.',
        'service4': 'الطعون الإدارية',
        'service4Desc': 'التعامل مع الاعتراضات والطعون ضد القرارات الصادرة عن الهيئات الحكومية (الاعتراض والطعن).',
        'formTitle': 'ابدأ استشارتك',
        'formSubtitle': 'يرجى ملء النموذج أدناه لتقديم التفاصيل الأولية لقضيتك. سنتصل بك في غضون 3 أيام عمل كحد أقصى.',
        'formName': 'الاسم الكامل',
        'formEmail': 'البريد الإلكتروني',
        'formPhone': 'رقم الهاتف (اختياري)',
        'formType': 'نوع الاستفسار',
        'formTypeSelect': 'اختر مجال قانوني',
        'formTypeOther': 'مسألة قانونية أخرى',
        'formDesc': 'وصف مفصل للقضية',
        'formDescPlaceholder': 'يرجى وصف مسألتك القانونية، بما في ذلك أي هيئات حكومية أو وثائق أو مواعيد نهائية ذات صلة.',
        'formSubmit': 'إرسال الطلب',
        'formNote': 'يتم إرسال بياناتك بشكل آمن للمراجعة. سنتصل بك قريبًا.',
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

if (form) {
    form.addEventListener('submit', sendEmail);
}