
        // ============================================================
        // داده‌ها
        // ============================================================
        let expressions = [];
        let bookmarks = [];
        let currentLang = 'fa';
        let activeFilter = null;
        let searchQuery = '';
        let editingIndex = -1;

        // ============================================================
        // لیست تگ‌ها
        // ============================================================
        const TAGS = [
            { id: 'greeting', icon: 'fa-hand-peace', fa: 'احوالپرسی', en: 'Greeting', ar: 'تحية' },
            { id: 'conversation', icon: 'fa-comment-dots', fa: 'مکالمه', en: 'Conversation', ar: 'محادثة' },
            { id: 'questions', icon: 'fa-question-circle', fa: 'سؤال و درخواست', en: 'Questions & Requests', ar: 'أسئلة وطلبات' },
            { id: 'politeness', icon: 'fa-handshake', fa: 'مودبانه', en: 'Politeness', ar: 'مهذب' },
            { id: 'opinions', icon: 'fa-comment', fa: 'نظر و واکنش', en: 'Opinions & Reactions', ar: 'آراء وردود' },
            { id: 'daily', icon: 'fa-sun', fa: 'روزمره', en: 'Daily Life', ar: 'يومي' },
            { id: 'social', icon: 'fa-users', fa: 'اجتماعی', en: 'Social', ar: 'اجتماعي' },
            { id: 'family', icon: 'fa-users', fa: 'خانواده', en: 'Family', ar: 'عائلة' },
            { id: 'friends', icon: 'fa-user-friends', fa: 'دوست', en: 'Friends', ar: 'أصدقاء' },
            { id: 'plans', icon: 'fa-calendar-check', fa: 'قرار و برنامه', en: 'Plans', ar: 'مواعيد وخطط' },
            { id: 'food', icon: 'fa-utensils', fa: 'غذا', en: 'Food', ar: 'طعام' },
            { id: 'drink', icon: 'fa-coffee', fa: 'نوشیدنی', en: 'Drink', ar: 'مشروب' },
            { id: 'shopping', icon: 'fa-shopping-bag', fa: 'خرید', en: 'Shopping', ar: 'تسوق' },
            { id: 'money', icon: 'fa-coins', fa: 'پول', en: 'Money', ar: 'مال' },
            { id: 'travel', icon: 'fa-plane', fa: 'سفر', en: 'Travel', ar: 'سفر' },
            { id: 'transport', icon: 'fa-car', fa: 'رفت‌وآمد', en: 'Transportation', ar: 'مواصلات' },
            { id: 'weather', icon: 'fa-cloud-sun', fa: 'آب‌وهوا', en: 'Weather', ar: 'طقس' },
            { id: 'time', icon: 'fa-clock', fa: 'زمان', en: 'Time', ar: 'وقت' },
            { id: 'work', icon: 'fa-briefcase', fa: 'کار', en: 'Work', ar: 'عمل' },
            { id: 'study', icon: 'fa-book-open', fa: 'مطالعه', en: 'Study', ar: 'دراسة' },
            { id: 'education', icon: 'fa-graduation-cap', fa: 'آموزش', en: 'Education', ar: 'تعليم' },
            { id: 'tech', icon: 'fa-laptop-code', fa: 'فناوری', en: 'Tech', ar: 'تكنولوجيا' },
            { id: 'business', icon: 'fa-chart-line', fa: 'کسب‌وکار', en: 'Business', ar: 'أعمال' },
            { id: 'health', icon: 'fa-heartbeat', fa: 'سلامت', en: 'Health', ar: 'صحة' },
            { id: 'emergency', icon: 'fa-exclamation-triangle', fa: 'اورژانس', en: 'Emergency', ar: 'طوارئ' },
            { id: 'problems', icon: 'fa-frown', fa: 'مشکل و شکایت', en: 'Problems', ar: 'مشاكل' },
            { id: 'emotion', icon: 'fa-smile', fa: 'احساسات', en: 'Emotion', ar: 'عاطفة' },
            { id: 'home', icon: 'fa-home', fa: 'خانه', en: 'Home', ar: 'منزل' }
        ];

        // ============================================================
        // متن‌های چندزبانه
        // ============================================================
        const TRANSLATIONS = {
            'fa': {
                'brand': 'جیب',
                'search_placeholder': 'چی می‌خوای بگی؟ بنویس...',
                'title': 'جیب ✦ موتور جستجوی زندگی روزمره',
                'home': 'صفحه اصلی',
                'explore': 'اکسپلور',
                'notes': 'یادداشت',
                'bookmarks': 'نشان‌ها',
                'stats': 'آمار',
                'all': 'همه',
                'result': 'نتیجه',
                'results': 'نتیجه',
                'nothing_found': 'چیزی پیدا نشد',
                'add_new': 'جمله جدید اضافه کن ',
                'no_sentences': 'هنوز جمله‌ای اضافه نشده',
                'add_with': ' اضافه کن ',
                'no_bookmarks': 'نشانی وجود ندارد',
                'statistics': 'آمار',
                'sentences': 'جمله',
                'tags': 'تگ',
                'delete_confirm': 'حذف "{0}"؟',
                'eng_required': 'انگلیسی و فارسی الزامی است',
                'tag_required': 'حداقل یک تگ انتخاب کنید',
                'mic_not_supported': 'ضبط صدا پشتیبانی نمی‌شود',
                'mic_denied': 'دسترسی به میکروفون داده نشد',
                'listening': 'در حال گوش دادن...',
                'speak_to_search': 'برای جستجو صحبت کنید...',
                'error': 'خطا'
            },
            'en': {
                'brand': 'Pocket',
                'search_placeholder': 'What do you want to say? Type...',
                'title': 'Pocket ✦ Daily Life Search Engine',
                'home': 'Home',
                'explore': 'Explore',
                'notes': 'Notes',
                'bookmarks': 'Bookmarks',
                'stats': 'Statistics',
                'all': 'All',
                'result': 'result',
                'results': 'results',
                'nothing_found': 'Nothing found',
                'add_new': 'Add a new sentence ✨',
                'no_sentences': 'No sentences yet',
                'add_with': 'Add with + ✨',
                'no_bookmarks': 'No bookmarks',
                'statistics': 'Statistics',
                'sentences': 'Sentences',
                'tags': 'Tags',
                'delete_confirm': 'Delete "{0}"?',
                'eng_required': 'English and Persian required',
                'tag_required': 'Select at least one tag',
                'mic_not_supported': 'Audio recording not supported',
                'mic_denied': 'Microphone access denied',
                'listening': 'Listening...',
                'speak_to_search': 'Speak to search...',
                'error': 'Error'
            },
            'ar': {
                'brand': 'جيب',
                'search_placeholder': 'ماذا تريد أن تقول؟ اكتب...',
                'title': 'جيب ✦ محرك بحث الحياة اليومية',
                'home': 'الصفحة الرئيسية',
                'explore': 'استكشف',
                'notes': 'ملاحظات',
                'bookmarks': 'العلامات المرجعية',
                'stats': 'إحصائيات',
                'all': 'الكل',
                'result': 'نتيجة',
                'results': 'نتيجة',
                'nothing_found': 'لم يتم العثور على شيء',
                'add_new': 'أضف جملة جديدة ✨',
                'no_sentences': 'لا توجد جمل بعد',
                'add_with': 'أضف باستخدام + ✨',
                'no_bookmarks': 'لا توجد علامات مرجعية',
                'statistics': 'إحصائيات',
                'sentences': 'جمل',
                'tags': 'علامات',
                'delete_confirm': 'حذف "{0}"؟',
                'eng_required': 'الإنجليزية والفارسية مطلوبة',
                'tag_required': 'اختر علامة واحدة على الأقل',
                'mic_not_supported': 'تسجيل الصوت غير مدعوم',
                'mic_denied': 'تم رفض الوصول إلى الميكروفون',
                'listening': 'جاري الاستماع...',
                'speak_to_search': 'تحدث للبحث...',
                'error': 'خطأ'
            }
        };

        function t(key, ...args) {
            let text = TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['fa'][key] || key;
            args.forEach((arg, i) => {
                text = text.replace(`{${i}}`, arg);
            });
            return text;
        }

        function getTagLabel(id) {
            const tag = TAGS.find(x => x.id === id);
            if (!tag) return id;
            return tag[currentLang] || tag.fa;
        }

        function getTagIcon(id) {
            const tag = TAGS.find(x => x.id === id);
            return tag ? tag.icon : 'fa-tag';
        }

        function getAllTags() {
            const set = new Set();
            expressions.forEach(e => e.tags.forEach(t => set.add(t)));
            TAGS.forEach(t => set.add(t.id));
            return Array.from(set);
        }

        function getTagCount(tag) {
            return expressions.filter(e => e.tags.includes(tag)).length;
        }

        function loadData() {
            try {
                const raw = localStorage.getItem('jib_data');
                if (raw) {
                    const data = JSON.parse(raw);
                    expressions = data.expressions || [];
                    bookmarks = data.bookmarks || [];
                }
            } catch (e) { expressions = [];
                bookmarks = []; }
        }

        function saveData() {
            localStorage.setItem('jib_data', JSON.stringify({ expressions, bookmarks }));
        }

        function generatePron(eng) {
            return '/' + eng.toLowerCase().replace(/[^a-z ]/g, '').split(' ').map(w => {
                return w.replace(/[aeiou]/g, m => ({ a: 'ə', e: 'ɛ', i: 'ɪ', o: 'oʊ', u: 'ʌ' })[m] || m);
            }).join(' ') + '/';
        }

        function speak(text) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'en-US';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }

        // ============================================================
        // JSON پرینت
        // ============================================================
        function showJsonPrint() {
            const jsonData = expressions.map(expr => ({
                english: expr.eng,
                persian: expr.fa,
                arabic: expr.ar || '',
                pronunciation: expr.pron,
                tags: expr.tags.map(t => getTagLabel(t)),
                color: expr.color || '#2fb557'
            }));

            const jsonStr = JSON.stringify(jsonData, null, 2);
            document.getElementById('jsonContent').textContent = jsonStr;
            document.getElementById('jsonOverlay').classList.add('open');
        }

        function closeJsonPrint() {
            document.getElementById('jsonOverlay').classList.remove('open');
        }

        function copyJson() {
            const content = document.getElementById('jsonContent').textContent;
            navigator.clipboard.writeText(content).then(() => {
                const btn = document.getElementById('copyJson');
                const original = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
                setTimeout(() => { btn.innerHTML = original; }, 2000);
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = content;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                const btn = document.getElementById('copyJson');
                const original = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
                setTimeout(() => { btn.innerHTML = original; }, 2000);
            });
        }

        function downloadJson() {
            const jsonData = expressions.map(expr => ({
                english: expr.eng,
                persian: expr.fa,
                arabic: expr.ar || '',
                pronunciation: expr.pron,
                tags: expr.tags.map(t => getTagLabel(t)),
                color: expr.color || '#2fb557'
            }));

            const jsonStr = JSON.stringify(jsonData, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `jib_export_${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        document.getElementById('closeJson').onclick = closeJsonPrint;
        document.getElementById('copyJson').onclick = copyJson;
        document.getElementById('downloadJson').onclick = downloadJson;
        document.getElementById('jsonOverlay').onclick = (e) => {
            if (e.target === e.currentTarget) closeJsonPrint();
        };

        // ============================================================
        // DOM
        // ============================================================
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearBtn');
        const micBtn = document.getElementById('micBtn');
        const filterBtn = document.getElementById('filterBtn');
        const filterDropdown = document.getElementById('filterDropdown');
        const filterGrid = document.getElementById('filterGrid');
        const filterBadge = document.getElementById('filterBadge');
        const results = document.getElementById('results');
        const cardsContainer = document.getElementById('cardsContainer');
        const resultCount = document.getElementById('resultCount');
        const info = document.getElementById('info');
        const backWrap = document.getElementById('backWrap');
        const backBtn = document.getElementById('backBtn');
        const addBtn = document.getElementById('addBtn');
        const addPanel = document.getElementById('addPanel');
        const addEng = document.getElementById('addEng');
        const addFa = document.getElementById('addFa');
        const addAr = document.getElementById('addAr');
        const addTagsWrap = document.getElementById('addTagsWrap');
        const addSubmit = document.getElementById('addSubmit');
        const addCancel = document.getElementById('addCancel');
        const cardColor = document.getElementById('cardColor');

        const editPanel = document.getElementById('editPanel');
        const editEng = document.getElementById('editEng');
        const editFa = document.getElementById('editFa');
        const editAr = document.getElementById('editAr');
        const editColor = document.getElementById('editColor');
        const editTagsWrap = document.getElementById('editTagsWrap');
        const editSubmit = document.getElementById('editSubmit');
        const editCancel = document.getElementById('editCancel');
        const editCancel2 = document.getElementById('editCancel2');

        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const menuBtn = document.getElementById('menuBtn');
        const closeSidebar = document.getElementById('closeSidebar');
        const langBtn = document.getElementById('langBtn');

        const micOverlay = document.getElementById('micOverlay');
        const micClose = document.getElementById('micClose');
        const micText = document.getElementById('micText');
        const micResult = document.getElementById('micResult');

        // ============================================================
        // تغییر زبان
        // ============================================================
        const LANGUAGES = [
            { lang: 'fa', label: 'FA' },
            { lang: 'ar', label: 'AR' },
            { lang: 'en', label: 'EN' }
        ];
        let langIndex = 0;

        function updateLanguage(index) {
            const lang = LANGUAGES[index];
            currentLang = lang.lang;
            langBtn.textContent = lang.label;

            document.title = t('title');
            document.getElementById('brandText').textContent = t('brand');
            searchInput.placeholder = t('search_placeholder');

            const labelKeys = ['home', 'explore', 'notes', 'bookmarks', 'stats'];
            document.querySelectorAll('.sidebar-nav .nav-item').forEach((item) => {
                const page = item.dataset.page;
                if (labelKeys.includes(page)) {
                    const label = item.querySelector('.nav-label');
                    if (label) label.textContent = t(page);
                }
            });

            document.querySelector('.back-btn').innerHTML = `<i class="fas fa-arrow-right"></i> ${t('home')}`;
            document.querySelector('.add-actions .submit').innerHTML = `<i class="fas fa-plus"></i> ${t('add_with')}`;
            document.querySelector('.add-actions .cancel').textContent = t('home');
            addEng.placeholder = 'English (e.g. I\'m going to the store)';
            addFa.placeholder = t('add_new');
            addAr.placeholder = 'العربية (مثلاً أنا ذاهب إلى المتجر)';
            document.querySelector('.color-picker-wrap label').innerHTML = `<i class="fas fa-palette"></i> ${t('tags')}`;

            updateInfo();
            renderFilterGrid();
            if (results.classList.contains('visible')) renderResults();
            if (micText) micText.textContent = t('speak_to_search');
        }

        langBtn.onclick = () => {
            langIndex = (langIndex + 1) % LANGUAGES.length;
            updateLanguage(langIndex);
        };
                // ============================================================
        // فیلتر
        // ============================================================
        function renderFilterGrid() {
            const allTags = getAllTags();
            filterGrid.innerHTML =
                `<button class="filter-chip ${!activeFilter ? 'active' : ''}" data-tag=""><i class="fas fa-tag"></i> ${t('all')} <span class="count">(${expressions.length})</span></button>`;

            allTags.forEach(tag => {
                const count = getTagCount(tag);
                const chip = document.createElement('button');
                chip.className = `filter-chip ${activeFilter === tag ? 'active' : ''}`;
                chip.dataset.tag = tag;
                chip.innerHTML = `<i class="fas ${getTagIcon(tag)}"></i> ${getTagLabel(tag)} <span class="count">(${count})</span>`;
                chip.onclick = () => {
                    activeFilter = activeFilter === tag ? null : tag;
                    renderFilterGrid();
                    updateFilterBadge();
                    applyFilters();
                    filterDropdown.classList.remove('open');
                };
                filterGrid.appendChild(chip);
            });
        }

        function updateFilterBadge() {
            if (activeFilter) {
                filterBadge.style.display = 'flex';
                filterBadge.textContent = '1';
            } else {
                filterBadge.style.display = 'none';
            }
        }

        filterBtn.onclick = (e) => {
            e.stopPropagation();
            filterDropdown.classList.toggle('open');
        };

        document.addEventListener('click', () => {
            filterDropdown.classList.remove('open');
        });

        // ============================================================
        // ویرایش
        // ============================================================
        function openEditPanel(index) {
            const expr = expressions[index];
            if (!expr) return;
            editingIndex = index;
            editEng.value = expr.eng;
            editFa.value = expr.fa;
            editAr.value = expr.ar || '';
            editColor.value = expr.color || '#2fb557';
            editPanel.style.borderRightColor = editColor.value;
            renderEditTags(expr.tags);
            editPanel.classList.add('open');
            addPanel.classList.remove('open');
            editPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function closeEditPanel() {
            editPanel.classList.remove('open');
            editingIndex = -1;
            editEng.value = '';
            editFa.value = '';
            editAr.value = '';
            editColor.value = '#2fb557';
        }

        function renderEditTags(selectedTags) {
            const allTags = getAllTags();
            editTagsWrap.innerHTML = `<span style="font-size:10px; color:rgba(255,255,255,0.12);">${t('tags')}</span>`;
            allTags.forEach(tag => {
                const chip = document.createElement('span');
                chip.className = 'tag-chip';
                chip.dataset.tag = tag;
                if (selectedTags && selectedTags.includes(tag)) chip.classList.add('active');
                chip.innerHTML = `<i class="fas ${getTagIcon(tag)}"></i> ${getTagLabel(tag)}`;
                chip.onclick = () => chip.classList.toggle('active');
                editTagsWrap.appendChild(chip);
            });
        }

        function saveEdit() {
            if (editingIndex === -1) return;
            const eng = editEng.value.trim();
            const fa = editFa.value.trim();
            const ar = editAr.value.trim();
            const color = editColor.value;

            if (!eng || !fa) {
                alert(t('eng_required'));
                return;
            }

            const tags = [];
            document.querySelectorAll('#editTagsWrap .tag-chip.active').forEach(chip => {
                tags.push(chip.dataset.tag);
            });

            if (!tags.length) {
                alert(t('tag_required'));
                return;
            }

            expressions[editingIndex] = {
                ...expressions[editingIndex],
                eng,
                pron: generatePron(eng),
                fa,
                ar: ar || '',
                tags,
                color
            };

            saveData();
            closeEditPanel();
            applyFilters();
            renderFilterGrid();
            updateInfo();
        }

        // ============================================================
        // نتایج
        // ============================================================
        function renderResults() {
            let items = [...expressions];
            if (activeFilter) items = items.filter(e => e.tags.includes(activeFilter));

            const query = searchQuery.trim().toLowerCase();
            if (query) {
                items = items.filter(e => {
                    const textMatch = e.eng.toLowerCase().includes(query) ||
                        e.fa.includes(query) ||
                        (e.ar && e.ar.includes(query));

                    const tagMatch = e.tags.some(tagId => {
                        const tagLabel = getTagLabel(tagId).toLowerCase();
                        return tagLabel.includes(query) || tagId.includes(query);
                    });

                    return textMatch || tagMatch;
                });
            }

            const resultWord = items.length === 1 ? t('result') : t('results');
            resultCount.textContent = `${items.length} ${resultWord}`;

            if (!items.length) {
                cardsContainer.innerHTML = `
                        <div class="empty">
                            <i class="fas fa-search"></i>
                            <div class="title">${t('nothing_found')}</div>
                            <div class="desc">${t('add_new')}</div>
                        </div>
                    `;
                return;
            }

            let html = '';
            items.forEach((expr, idx) => {
                const saved = bookmarks.some(b => b.eng === expr.eng);
                const borderColor = expr.color || '#2fb557';
                const realIndex = expressions.indexOf(expr);
                html += `
                        <div class="card" data-eng="${expr.eng}" data-index="${realIndex}" style="border-right-color: ${borderColor};">
                            <div class="top">
                                <div>
                                    <div class="eng">${expr.eng}</div>
                                    ${expr.ar ? `<div class="ar">${expr.ar}</div>` : ''}
                                    <div class="pron">${expr.pron}</div>
                                    <div class="fa">${expr.fa}</div>
                                    <div class="tags">${expr.tags.map(t => `<span data-tag="${t}"><i class="fas ${getTagIcon(t)}"></i> ${getTagLabel(t)}</span>`).join('')}</div>
                                </div>
                                <div class="actions">
                                    <button class="record-btn" data-eng="${expr.eng}" title="${t('mic_not_supported')}"><i class="fas fa-microphone"></i></button>
                                    <button class="bookmark-btn ${saved ? 'saved' : ''}" data-eng="${expr.eng}"><i class="fas fa-bookmark"></i></button>
                                    <button class="edit-btn" data-index="${realIndex}" title="ویرایش"><i class="fas fa-pen"></i></button>
                                    <button class="delete-btn" data-eng="${expr.eng}"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
            });

            cardsContainer.innerHTML = html;

            // ضبط
            document.querySelectorAll('.record-btn').forEach(btn => {
                let state = 'idle';
                let mediaRecorder = null;
                let audioChunks = [];
                let audioBlob = null;
                let audioUrl = null;

                btn.onclick = (e) => {
                    e.stopPropagation();
                    const card = btn.closest('.card');
                    const eng = btn.dataset.eng;
                    const expr = expressions.find(e => e.eng === eng);
                    if (!expr) return;

                    if (state === 'idle') {
                        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                            alert(t('mic_not_supported'));
                            return;
                        }
                        navigator.mediaDevices.getUserMedia({ audio: true })
                            .then(stream => {
                                mediaRecorder = new MediaRecorder(stream);
                                audioChunks = [];
                                mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
                                mediaRecorder.onstop = () => {
                                    audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                                    audioUrl = URL.createObjectURL(audioBlob);
                                    stream.getTracks().forEach(track => track.stop());
                                    state = 'played';
                                    btn.innerHTML = '<i class="fas fa-play"></i>';
                                    btn.classList.remove('recording');
                                    btn.classList.add('played');
                                    card.classList.remove('recording-active');
                                };
                                mediaRecorder.start();
                                state = 'recording';
                                btn.innerHTML = '<i class="fas fa-stop"></i>';
                                btn.classList.add('recording');
                                btn.classList.remove('played');
                                card.classList.add('recording-active');
                                setTimeout(() => {
                                    if (mediaRecorder && mediaRecorder.state === 'recording') {
                                        mediaRecorder.stop();
                                    }
                                }, 10000);
                            })
                            .catch(() => alert(t('mic_denied')));
                    } else if (state === 'recording') {
                        if (mediaRecorder && mediaRecorder.state === 'recording') {
                            mediaRecorder.stop();
                        }
                    } else if (state === 'played') {
                        if (audioUrl) {
                            const audio = new Audio(audioUrl);
                            audio.play();
                            audio.onended = () => {
                                state = 'idle';
                                btn.innerHTML = '<i class="fas fa-microphone"></i>';
                                btn.classList.remove('played');
                                btn.classList.remove('recording');
                                card.classList.remove('recording-active');
                                URL.revokeObjectURL(audioUrl);
                                audioUrl = null;
                                audioBlob = null;
                            };
                        } else {
                            state = 'idle';
                            btn.innerHTML = '<i class="fas fa-microphone"></i>';
                            btn.classList.remove('played');
                            btn.classList.remove('recording');
                            card.classList.remove('recording-active');
                        }
                    }
                };
            });

            // نشان
            document.querySelectorAll('.bookmark-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const eng = btn.dataset.eng;
                    const idx = bookmarks.findIndex(b => b.eng === eng);
                    if (idx > -1) {
                        bookmarks.splice(idx, 1);
                        btn.classList.remove('saved');
                    } else {
                        const expr = expressions.find(e => e.eng === eng);
                        if (expr) bookmarks.push({ ...expr });
                        btn.classList.add('saved');
                    }
                    saveData();
                    updateInfo();
                };
            });

            // ویرایش
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const index = parseInt(btn.dataset.index);
                    if (!isNaN(index)) {
                        openEditPanel(index);
                    }
                };
            });

            // حذف
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const eng = btn.dataset.eng;
                    if (confirm(t('delete_confirm', eng))) {
                        const idx = expressions.findIndex(e => e.eng === eng);
                        if (idx > -1) {
                            expressions.splice(idx, 1);
                            const bIdx = bookmarks.findIndex(b => b.eng === eng);
                            if (bIdx > -1) bookmarks.splice(bIdx, 1);
                            saveData();
                            applyFilters();
                            renderFilterGrid();
                            updateInfo();
                        }
                    }
                };
            });

            // کلیک روی تگ
            document.querySelectorAll('.tags span').forEach(el => {
                el.onclick = (e) => {
                    e.stopPropagation();
                    const tag = el.dataset.tag;
                    if (tag) {
                        activeFilter = activeFilter === tag ? null : tag;
                        renderFilterGrid();
                        updateFilterBadge();
                        applyFilters();
                    }
                };
            });
        }

        function applyFilters() {
            if (expressions.length > 0 || searchQuery.trim() || activeFilter) {
                results.classList.add('visible');
                backWrap.classList.add('visible');
                renderResults();
            } else {
                results.classList.remove('visible');
                backWrap.classList.remove('visible');
            }
            updateInfo();
        }

        function goBack() {
            searchQuery = '';
            searchInput.value = '';
            activeFilter = null;
            renderFilterGrid();
            updateFilterBadge();
            if (expressions.length === 0) {
                results.classList.add('visible');
                backWrap.classList.add('visible');
                cardsContainer.innerHTML = `
                        <div class="empty">
                            <i class="fas fa-plus-circle"></i>
                            <div class="title">${t('no_sentences')}</div>
                            <div class="desc">${t('add_with')}</div>
                        </div>
                    `;
                resultCount.textContent = '۰ نتیجه';
            } else {
                results.classList.remove('visible');
                backWrap.classList.remove('visible');
            }
            closeAddPanel();
            closeEditPanel();
            updateInfo();
        }

        // ============================================================
        // افزودن
        // ============================================================
        function openAddPanel() {
            addPanel.classList.add('open');
            closeEditPanel();
            cardColor.value = '#2fb557';
            addPanel.style.borderRightColor = '#2fb557';
            renderAddTags();
            if (activeFilter) {
                document.querySelectorAll('#addTagsWrap .tag-chip').forEach(chip => {
                    if (chip.dataset.tag === activeFilter) chip.classList.add('active');
                });
            }
        }

        cardColor.addEventListener('input', function() {
            addPanel.style.borderRightColor = this.value;
        });

        function closeAddPanel() {
            addPanel.classList.remove('open');
            addEng.value = '';
            addFa.value = '';
            addAr.value = '';
            addPanel.style.borderRightColor = '#2fb557';
        }

        function renderAddTags() {
            const allTags = getAllTags();
            addTagsWrap.innerHTML = `<span style="font-size:10px; color:rgba(255,255,255,0.12);">${t('tags')}</span>`;
            allTags.forEach(tag => {
                const chip = document.createElement('span');
                chip.className = 'tag-chip';
                chip.dataset.tag = tag;
                chip.innerHTML = `<i class="fas ${getTagIcon(tag)}"></i> ${getTagLabel(tag)}`;
                chip.onclick = () => chip.classList.toggle('active');
                addTagsWrap.appendChild(chip);
            });
        }

        function addPhrase() {
            const eng = addEng.value.trim();
            const fa = addFa.value.trim();
            const ar = addAr.value.trim();
            const color = cardColor.value;

            if (!eng || !fa) {
                alert(t('eng_required'));
                return;
            }

            const tags = [];
            document.querySelectorAll('#addTagsWrap .tag-chip.active').forEach(chip => {
                tags.push(chip.dataset.tag);
            });

            if (!tags.length) {
                alert(t('tag_required'));
                return;
            }

            expressions.push({
                eng,
                pron: generatePron(eng),
                fa,
                ar: ar || '',
                tags,
                color: color
            });

            saveData();
            closeAddPanel();
            applyFilters();
            renderFilterGrid();
            updateInfo();
        }

        // ============================================================
        // سایدبار
        // ============================================================
        function openSidebar() {
            sidebar.classList.add('open');
            sidebarOverlay.classList.add('active');
        }

        function closeSidebarPanel() {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        }

        menuBtn.onclick = openSidebar;
        closeSidebar.onclick = closeSidebarPanel;
        sidebarOverlay.onclick = closeSidebarPanel;

        document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
            item.onclick = () => {
                const page = item.dataset.page;
                document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                if (page === 'home') {
                    goBack();
                    closeSidebarPanel();
                    return;
                }

                if (page === 'explore') {
                    searchQuery = '';
                    searchInput.value = '';
                    activeFilter = null;
                    renderFilterGrid();
                    updateFilterBadge();
                    results.classList.add('visible');
                    backWrap.classList.add('visible');
                    renderResults();
                    closeSidebarPanel();
                    return;
                }

                if (page === 'notes') {
                    window.location.href = 'nts.html';
                    return;
                }

                if (page === 'chatgpt') {
                    window.open('https://chat.openai.com', '_blank');
                    return;
                }

                if (page === 'deepseek') {
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    if (isMobile) {
                        window.location.href = 'deepseek://';
                        setTimeout(() => window.open('https://deepseek.com', '_blank'), 1500);
                    } else {
                        window.open('https://deepseek.com', '_blank');
                    }
                    return;
                }

                if (page === 'bookmarks') {
                    results.classList.add('visible');
                    backWrap.classList.add('visible');

                    if (!bookmarks.length) {
                        cardsContainer.innerHTML = `
                                <div class="empty">
                                    <i class="fas fa-bookmark"></i>
                                    <div class="title">${t('no_bookmarks')}</div>
                                </div>
                            `;
                        resultCount.textContent = '۰ نتیجه';
                    } else {
                        let html = '';
                        bookmarks.forEach(expr => {
                            const borderColor = expr.color || '#2fb557';
                            html += `
                                    <div class="card" style="border-right-color: ${borderColor};">
                                        <div class="top">
                                            <div>
                                                <div class="eng">${expr.eng}</div>
                                                ${expr.ar ? `<div class="ar">${expr.ar}</div>` : ''}
                                                <div class="pron">${expr.pron}</div>
                                                <div class="fa">${expr.fa}</div>
                                                <div class="tags">${expr.tags.map(t => `<span><i class="fas ${getTagIcon(t)}"></i> ${getTagLabel(t)}</span>`).join('')}</div>
                                            </div>
                                            <div class="actions">
                                                <button class="record-btn" data-eng="${expr.eng}" title="${t('mic_not_supported')}"><i class="fas fa-microphone"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                `;
                        });
                        cardsContainer.innerHTML = html;
                        const resultWord = bookmarks.length === 1 ? t('result') : t('results');
                        resultCount.textContent = `${bookmarks.length} ${resultWord}`;

                        document.querySelectorAll('.record-btn').forEach(btn => {
                            let state = 'idle';
                            let mediaRecorder = null;
                            let audioChunks = [];
                            let audioBlob = null;
                            let audioUrl = null;

                            btn.onclick = () => {
                                const card = btn.closest('.card');
                                const eng = btn.dataset.eng;
                                const expr = expressions.find(e => e.eng === eng);
                                if (!expr) return;

                                if (state === 'idle') {
                                    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                                        alert(t('mic_not_supported'));
                                        return;
                                    }
                                    navigator.mediaDevices.getUserMedia({ audio: true })
                                        .then(stream => {
                                            mediaRecorder = new MediaRecorder(stream);
                                            audioChunks = [];
                                            mediaRecorder.ondataavailable = event => audioChunks.push(event
                                            .data);
                                            mediaRecorder.onstop = () => {
                                                audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                                                audioUrl = URL.createObjectURL(audioBlob);
                                                stream.getTracks().forEach(track => track.stop());
                                                state = 'played';
                                                btn.innerHTML = '<i class="fas fa-play"></i>';
                                                btn.classList.remove('recording');
                                                btn.classList.add('played');
                                                card.classList.remove('recording-active');
                                            };
                                            mediaRecorder.start();
                                            state = 'recording';
                                            btn.innerHTML = '<i class="fas fa-stop"></i>';
                                            btn.classList.add('recording');
                                            btn.classList.remove('played');
                                            card.classList.add('recording-active');
                                            setTimeout(() => {
                                                if (mediaRecorder && mediaRecorder.state === 'recording') {
                                                    mediaRecorder.stop();
                                                }
                                            }, 10000);
                                        })
                                        .catch(() => alert(t('mic_denied')));
                                } else if (state === 'recording') {
                                    if (mediaRecorder && mediaRecorder.state === 'recording') {
                                        mediaRecorder.stop();
                                    }
                                } else if (state === 'played') {
                                    if (audioUrl) {
                                        const audio = new Audio(audioUrl);
                                        audio.play();
                                        audio.onended = () => {
                                            state = 'idle';
                                            btn.innerHTML = '<i class="fas fa-microphone"></i>';
                                            btn.classList.remove('played');
                                            btn.classList.remove('recording');
                                            card.classList.remove('recording-active');
                                            URL.revokeObjectURL(audioUrl);
                                            audioUrl = null;
                                            audioBlob = null;
                                        };
                                    } else {
                                        state = 'idle';
                                        btn.innerHTML = '<i class="fas fa-microphone"></i>';
                                        btn.classList.remove('played');
                                        btn.classList.remove('recording');
                                        card.classList.remove('recording-active');
                                    }
                                }
                            };
                        });
                    }
                    closeSidebarPanel();
                    return;
                }

                if (page === 'stats') {
                    const allTags = getAllTags();
                    results.classList.add('visible');
                    backWrap.classList.add('visible');
                    cardsContainer.innerHTML = `
                            <div style="padding:10px 0;">
                                <div style="font-size:16px; font-weight:700; color:#2fb557; margin-bottom:12px;"><i class="fas fa-chart-simple"></i> ${t('statistics')}</div>
                                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
                                    <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.03); border-radius:10px; padding:10px; text-align:center;">
                                        <div style="font-size:20px; font-weight:700; color:#2fb557;">${expressions.length}</div>
                                        <div style="font-size:10px; color:rgba(255,255,255,0.2);">${t('sentences')}</div>
                                    </div>
                                    <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.03); border-radius:10px; padding:10px; text-align:center;">
                                        <div style="font-size:20px; font-weight:700; color:#2fb557;">${allTags.length}</div>
                                        <div style="font-size:10px; color:rgba(255,255,255,0.2);">${t('tags')}</div>
                                    </div>
                                    <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.03); border-radius:10px; padding:10px; text-align:center;">
                                        <div style="font-size:20px; font-weight:700; color:#2fb557;">${bookmarks.length}</div>
                                        <div style="font-size:10px; color:rgba(255,255,255,0.2);">${t('bookmarks')}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                    resultCount.textContent = '<i class="fas fa-chart-simple"></i> ' + t('statistics');
                    closeSidebarPanel();
                    return;
                }

                if (page === 'folderA') {
                    window.open('https://lesehawio.github.io/jib/A/', '_blank');
                    closeSidebarPanel();
                    return;
                }

                if (page === 'clock') {
                    window.open('https://lesehawio.github.io/jib/000.html', '_blank');
                    closeSidebarPanel();
                    return;
                }

                closeSidebarPanel();
            };
        });

        // ============================================================
        // اطلاعات
        // ============================================================
        function updateInfo() {
            const allTags = getAllTags();
            info.textContent = `${expressions.length} ${t('sentences')} • ${allTags.length} ${t('tags')}`;
        }

        // ============================================================
        // میکروفون جستجو
        // ============================================================
        let recognition = null;
        let isMicActive = false;

        function initSpeech() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                micText.textContent = t('mic_not_supported');
                return;
            }
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.lang = currentLang === 'fa' ? 'fa-IR' : 'en-US';
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.onstart = () => {
                micText.textContent = t('listening');
                micResult.textContent = '';
            };
            recognition.onresult = (event) => {
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        micResult.textContent = transcript;
                        searchInput.value = transcript;
                        searchQuery = transcript;
                        applyFilters();
                        setTimeout(() => { micOverlay.classList.remove('open');
                            isMicActive = false; }, 500);
                    }
                }
                micResult.textContent = transcript;
            };
            recognition.onerror = () => {
                micText.textContent = t('error');
                setTimeout(() => { micOverlay.classList.remove('open');
                    isMicActive = false; }, 800);
            };
            recognition.onend = () => {
                if (micOverlay.classList.contains('open')) {
                    micOverlay.classList.remove('open');
                    isMicActive = false;
                }
            };
        }

        function startMic() {
            if (isMicActive) return;
            if (!recognition) initSpeech();
            if (!recognition) { alert(t('mic_not_supported')); return; }
            recognition.lang = currentLang === 'fa' ? 'fa-IR' : 'en-US';
            micOverlay.classList.add('open');
            isMicActive = true;
            micResult.textContent = '';
            micText.textContent = t('speak_to_search');
            try { recognition.start(); } catch (e) {}
        }

        micBtn.onclick = startMic;
        micClose.onclick = () => {
            micOverlay.classList.remove('open');
            isMicActive = false;
            if (recognition) recognition.stop();
        };

        // ============================================================
        // رویدادها
        // ============================================================
        searchInput.addEventListener('input', () => {
            searchQuery = searchInput.value;
            applyFilters();
        });

        clearBtn.onclick = () => {
            searchInput.value = '';
            searchQuery = '';
            activeFilter = null;
            renderFilterGrid();
            updateFilterBadge();
            goBack();
        };

        backBtn.onclick = goBack;

        addBtn.onclick = () => {
            if (addPanel.classList.contains('open')) {
                closeAddPanel();
            } else {
                openAddPanel();
            }
        };

        addCancel.onclick = closeAddPanel;
        addSubmit.onclick = addPhrase;

        editCancel.onclick = closeEditPanel;
        editCancel2.onclick = closeEditPanel;
        editSubmit.onclick = saveEdit;

        // ============================================================
        // مقداردهی اولیه
        // ============================================================
        loadData();
        updateLanguage(0);
        renderFilterGrid();
        updateFilterBadge();

        if (expressions.length === 0) {
            results.classList.add('visible');
            backWrap.classList.add('visible');
            cardsContainer.innerHTML = `
                    <div class="empty">
                        <i class="fas fa-plus-circle"></i>
                        <div class="title">${t('no_sentences')}</div>
                        <div class="desc">${t('add_with')}</div>
                    </div>
                `;
            resultCount.textContent = '۰ نتیجه';
        }

        updateInfo();
        initSpeech();

        console.log('✅ جیب — با JSON پرینت در بخش اکسپلور');
        console.log(`📚 ${expressions.length} جمله`);
        console.log(`🏷️ ${getAllTags().length} تگ`);
        console.log('🖨️ دکمه پرینت JSON در منوی همبرگری');

        // ===== اضافه کردن دکمه پرینت JSON به سایدبار =====
        const sidebarNav = document.querySelector('.sidebar-nav');
        const divider = sidebarNav.querySelector('.divider');
        const printBtn = document.createElement('button');
        printBtn.className = 'nav-item';
        printBtn.setAttribute('data-page', 'print');
        printBtn.innerHTML = `<i class="fas fa-print"></i> <span class="nav-label">پرینت JSON</span>`;
        printBtn.onclick = () => {
            if (expressions.length === 0) {
                alert('هیچ جمله‌ای برای پرینت وجود ندارد!');
                return;
            }
            showJsonPrint();
            closeSidebarPanel();
        };
        sidebarNav.insertBefore(printBtn, divider);

        // ============================================================
        // SPLASH SCREEN
        // ============================================================
        window.addEventListener('load', () => {
            setTimeout(() => {
                const splash = document.getElementById('splashScreen');
                if (splash) {
                    splash.classList.add('hidden');
                    setTimeout(() => splash.remove(), 700);
                }
            }, 2500);
        });
