export const categories = [
  { id: 'fortresses', ru: 'Древние крепости', en: 'Ancient Fortresses', uz: 'Qadimiy qalʼalar', qq: 'Gadimgi qalalar', icon: 'Castle' },
  { id: 'mausoleums', ru: 'Мавзолеи и святыни', en: 'Mausoleums & Shrines', uz: 'Maqbaralar', qq: 'Mavzoleyler', icon: 'Landmark' },
  { id: 'nukus', ru: 'Памятники Нукуса', en: 'Nukus Monuments', uz: 'Nukus yodgorliklari', qq: 'Nókis yadgorliklari', icon: 'Building2' },
  { id: 'museums', ru: 'Музеи и культура', en: 'Museums & Culture', uz: 'Muzeylar', qq: 'Muzeyler', icon: 'GalleryHorizontalEnd' },
  { id: 'khorezm', ru: 'Крепости Хорезма', en: 'Khorezm Fortresses', uz: 'Xorazm qalʼalari', qq: 'Xorezm qalalari', icon: 'Shield' },
  { id: 'nature', ru: 'Памятники природы', en: 'Natural Monuments', uz: 'Tabiiy yodgorliklar', qq: 'Tábiyat yadgorliklari', icon: 'Mountain' },
  { id: 'settlements', ru: 'Исторические поселения', en: 'Historical Settlements', uz: 'Tarixiy shaharlar', qq: 'Tariyxıy qalalar', icon: 'Home' },
  { id: 'modern', ru: 'Современные памятники', en: 'Modern Monuments', uz: 'Zamonaviy yodgorliklar', qq: 'Házirgi yadgorliklar', icon: 'Trophy' },
  { id: 'other', ru: 'Другие объекты', en: 'Other Sites', uz: 'Boshqa obyektlar', qq: 'Basqa obyektler', icon: 'Compass' },
];

export const monuments = [
  // Fortresses
  { id: 'ayaz-kala', name: { ru: 'Аяз-Кала', en: 'Ayaz-Kala', uz: 'Ayoz-Qalʼa', qq: 'Ayaz-Qala' }, category: 'fortresses', coords: [41.82, 60.83], century: { ru: 'IV-III в. до н.э.', en: 'IV-III c. BC', uz: 'mil. avv. IV-III asr', qq: 'b.e.sh. IV-III ásir' }, featured: true, wonder: true },
  { id: 'toprak-kala', name: { ru: 'Топрак-Кала', en: 'Toprak-Kala', uz: 'Toprak-Qalʼa', qq: 'Topıraq-Qala' }, category: 'fortresses', coords: [41.93, 60.82], century: { ru: 'I-VI в. н.э.', en: 'I-VI c. AD', uz: 'mil. I-VI asr', qq: 'b.e. I-VI ásir' }, featured: true, wonder: true },
  { id: 'koi-krylgan-kala', name: { ru: 'Кой-Крылган-Кала', en: 'Koi Krylgan Kala', uz: 'Koy Qırılgʻan Qalʼa', qq: 'Koy Qırılǵan Qala' }, category: 'fortresses', coords: [41.75, 60.78], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' }, featured: true, wonder: true },
  { id: 'mizdakhan', name: { ru: 'Миздахкан', en: 'Mizdakhan', uz: 'Mizdaxon', qq: 'Mizdaxan' }, category: 'fortresses', coords: [42.45, 59.60], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' }, featured: true },
  { id: 'gyaur-kala', name: { ru: 'Гяур-Кала', en: 'Gyaur-Kala', uz: 'Gʻavr-Qalʼa', qq: 'Gavr-Qala' }, category: 'fortresses', coords: [41.88, 60.69], century: { ru: 'VI-V в. до н.э.', en: 'VI-V c. BC', uz: 'mil. avv. VI-V asr', qq: 'b.e.sh. VI-V ásir' }, featured: false },
  { id: 'janbas-kala', name: { ru: 'Джанбас-Кала', en: 'Janbas-Kala', uz: 'Jonbos-Qalʼa', qq: 'Janbas-Qala' }, category: 'fortresses', coords: [41.80, 60.78], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' }, featured: false },
  { id: 'big-guldursun', name: { ru: 'Большой Гулдурсун', en: 'Big Guldursun', uz: 'Katta Guldursun', qq: 'Ullı Guldursun' }, category: 'fortresses', coords: [41.85, 60.75], century: { ru: 'I в. до н.э.', en: 'I c. BC', uz: 'mil. avv. I asr', qq: 'b.e.sh. I ásir' }, featured: false },
  { id: 'small-guldursun', name: { ru: 'Малый Гулдурсун', en: 'Small Guldursun', uz: 'Kichik Guldursun', qq: 'Kishi Guldursun' }, category: 'fortresses', coords: [41.84, 60.76], century: { ru: 'I в. до н.э.', en: 'I c. BC', uz: 'mil. avv. I asr', qq: 'b.e.sh. I ásir' } },
  { id: 'kyzyl-kala', name: { ru: 'Кызыл-Кала', en: 'Kyzyl-Kala', uz: 'Qizil-Qalʼa', qq: 'Qızıl-Qala' }, category: 'fortresses', coords: [41.90, 60.80], century: { ru: 'I-II в. н.э.', en: 'I-II c. AD', uz: 'mil. I-II asr', qq: 'b.e. I-II ásir' } },
  { id: 'pil-kala', name: { ru: 'Пиль-Кала', en: 'Pil-Kala', uz: 'Pil-Qalʼa', qq: 'Pil-Qala' }, category: 'fortresses', coords: [41.78, 60.72], century: { ru: 'IV-III в. до н.э.', en: 'IV-III c. BC', uz: 'mil. avv. IV-III asr', qq: 'b.e.sh. IV-III ásir' } },
  { id: 'bazar-kala', name: { ru: 'Базар-Кала', en: 'Bazar-Kala', uz: 'Bozor-Qalʼa', qq: 'Bazar-Qala' }, category: 'fortresses', coords: [41.82, 60.70], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' } },
  { id: 'angka-kala', name: { ru: 'Ангка-Кала', en: 'Angka-Kala', uz: 'Angka-Qalʼa', qq: 'Aŋqa-Qala' }, category: 'fortresses', coords: [41.76, 60.65], century: { ru: 'III в. до н.э.', en: 'III c. BC', uz: 'mil. avv. III asr', qq: 'b.e.sh. III ásir' } },
  { id: 'kurgashin-kala', name: { ru: 'Кургашин-Кала', en: 'Kurgashin-Kala', uz: 'Kurgoshin-Qalʼa', qq: 'Qurǵashın-Qala' }, category: 'fortresses', coords: [41.79, 60.68], century: { ru: 'II в. до н.э.', en: 'II c. BC', uz: 'mil. avv. II asr', qq: 'b.e.sh. II ásir' } },
  { id: 'burly-kala', name: { ru: 'Бурлы-Кала', en: 'Burly-Kala', uz: 'Burliq-Qalʼa', qq: 'Burlı-Qala' }, category: 'fortresses', coords: [41.73, 60.60], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' } },
  { id: 'aqshakhan-kala', name: { ru: 'Акшахан-Кала', en: 'Aqshakhan-Kala', uz: 'Oqshaxon-Qalʼa', qq: 'Aqshaxan-Qala' }, category: 'fortresses', coords: [41.86, 60.77], century: { ru: 'V-IV в. до н.э.', en: 'V-IV c. BC', uz: 'mil. avv. V-IV asr', qq: 'b.e.sh. V-IV ásir' } },
  { id: 'chilpyk', name: { ru: 'Шылпык', en: 'Chilpyk', uz: 'Shilpiq', qq: 'Shılpıq' }, category: 'fortresses', coords: [42.00, 60.33], century: { ru: 'I-IV в. н.э.', en: 'I-IV c. AD', uz: 'mil. I-IV asr', qq: 'b.e. I-IV ásir' }, featured: true, wonder: true },
  { id: 'duman-kala', name: { ru: 'Думан-Кала', en: 'Duman-Kala', uz: 'Duman-Qalʼa', qq: 'Duman-Qala' }, category: 'fortresses', coords: [41.70, 60.55], century: { ru: 'III в. до н.э.', en: 'III c. BC', uz: 'mil. avv. III asr', qq: 'b.e.sh. III ásir' } },
  { id: 'davkesken', name: { ru: 'Давкескен', en: 'Davkesken', uz: 'Dovkesken', qq: 'Dawkesken' }, category: 'fortresses', coords: [42.10, 58.80], century: { ru: 'XII в.', en: 'XII c.', uz: 'XII asr', qq: 'XII ásir' } },
  { id: 'qavat-kala', name: { ru: 'Кават-Кала', en: 'Qavat-Kala', uz: 'Qavat-Qalʼa', qq: 'Qavat-Qala' }, category: 'fortresses', coords: [41.95, 60.75], century: { ru: 'XII-XIII в.', en: 'XII-XIII c.', uz: 'XII-XIII asr', qq: 'XII-XIII ásir' } },
  { id: 'kirk-kyz', name: { ru: 'Крепость Кырк-Кыз', en: 'Kirk-Kyz Fortress', uz: 'Qirq-Qiz qalʼasi', qq: 'Qırq-Qız qalası' }, category: 'fortresses', coords: [41.87, 60.73], century: { ru: 'IX-X в.', en: 'IX-X c.', uz: 'IX-X asr', qq: 'IX-X ásir' } },

  // Mausoleums
  { id: 'sultan-uvays', name: { ru: 'Комплекс Султан Увайс Бобо', en: 'Sulton Uvays Bobo Complex', uz: 'Sulton Uvays Bobo', qq: 'Sultan Uvays Baba' }, category: 'mausoleums', coords: [42.22, 57.85], century: { ru: 'XII-XIV в.', en: 'XII-XIV c.', uz: 'XII-XIV asr', qq: 'XII-XIV ásir' }, featured: true, wonder: true },
  { id: 'mazlumkhan-sulu', name: { ru: 'Мавзолей Мазлумхан-Сулу', en: 'Mazlumkhan Sulu Mausoleum', uz: 'Mazlumxon Sulu', qq: 'Mazlumxan Sulıw' }, category: 'mausoleums', coords: [42.45, 59.60], century: { ru: 'XII-XIV в.', en: 'XII-XIV c.', uz: 'XII-XIV asr', qq: 'XII-XIV ásir' }, featured: true, wonder: true },
  { id: 'shamun-nabi', name: { ru: 'Мавзолей Шамун-Наби', en: 'Shamun Nabi Mausoleum', uz: 'Shamun Nabiy', qq: 'Shamun Nabiy' }, category: 'mausoleums', coords: [42.45, 59.61], century: { ru: 'X в.', en: 'X c.', uz: 'X asr', qq: 'X ásir' } },
  { id: 'khoja-ishan', name: { ru: 'Мавзолей Ходжа-Ишан-Бобо', en: 'Khoja Ishan Bobo Mausoleum', uz: 'Xoja Eshon Bobo', qq: 'Xoja İshan Baba' }, category: 'mausoleums', coords: [42.20, 59.50], century: { ru: 'XIV в.', en: 'XIV c.', uz: 'XIV asr', qq: 'XIV ásir' } },
  { id: 'keshirmes-baba', name: { ru: 'Мавзолей Кеширмес-Баба', en: 'Keshirmes Baba Mausoleum', uz: 'Keshirmas Boba', qq: 'Keshirmes Baba' }, category: 'mausoleums', coords: [42.30, 59.40], century: { ru: 'XV в.', en: 'XV c.', uz: 'XV asr', qq: 'XV ásir' } },
  { id: 'erejep-khalifa', name: { ru: 'Мечеть Эрежеп-Халифа', en: 'Erejep Khalifa Mosque', uz: 'Erajap Xalifa masjidi', qq: 'Erejep Xalıypa meshiti' }, category: 'mausoleums', coords: [42.35, 59.55], century: { ru: 'XVI в.', en: 'XVI c.', uz: 'XVI asr', qq: 'XVI ásir' } },
  { id: 'hakim-ata', name: { ru: 'Комплекс Хаким-Ата', en: 'Hakim Ata Complex', uz: 'Hakim Ota', qq: 'Hakim Ata' }, category: 'mausoleums', coords: [42.25, 59.45], century: { ru: 'XII в.', en: 'XII c.', uz: 'XII asr', qq: 'XII ásir' } },
  { id: 'mizdakhan-necropolis', name: { ru: 'Некрополь Миздахкан', en: 'Mizdakhan Necropolis', uz: 'Mizdaxon nekropolisi', qq: 'Mizdaxan nekropolisi' }, category: 'mausoleums', coords: [42.45, 59.59], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' } },
  { id: 'jomart-kassab', name: { ru: 'Холм Жомарт-Кассаб', en: 'Jomart Kassab Hill', uz: 'Joʻmart Qassob tepasi', qq: 'Jomart Qassab tóbesi' }, category: 'mausoleums', coords: [42.44, 59.58], century: { ru: 'X в.', en: 'X c.', uz: 'X asr', qq: 'X ásir' } },
  { id: 'qubla-ustyurt', name: { ru: 'Святилища Устюрта', en: 'Qubla Ustyurt Shrines', uz: 'Ustyurt ziyoratgohlari', qq: 'Ústirt zıyaratgahları' }, category: 'mausoleums', coords: [42.80, 57.50], century: { ru: 'XII-XV в.', en: 'XII-XV c.', uz: 'XII-XV asr', qq: 'XII-XV ásir' } },

  // Nukus
  { id: 'ajiniyaz-monument', name: { ru: 'Памятник Ажиниязу', en: 'Ajiniyaz Monument', uz: 'Ajiniyoz haykalı', qq: 'Ajınıyaz heykelí' }, category: 'nukus', coords: [42.46, 59.60], century: { ru: '1970-е', en: '1970s', uz: '1970-yillar', qq: '1970-jıllar' } },
  { id: 'berdakh-monument', name: { ru: 'Памятник Бердаху', en: 'Berdakh Monument', uz: 'Berdaq haykalı', qq: 'Berdaq heykelí' }, category: 'nukus', coords: [42.46, 59.61], century: { ru: '1990-е', en: '1990s', uz: '1990-yillar', qq: '1990-jıllar' } },
  { id: 'savitsky-monument', name: { ru: 'Памятник Игорю Савицкому', en: 'Savitsky Monument', uz: 'Savitskiy haykalı', qq: 'Savitskiy heykelí' }, category: 'nukus', coords: [42.47, 59.60], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'wwii-memorial', name: { ru: 'Мемориал Второй мировой войны', en: 'WWII Memorial', uz: 'Ikkinchi Jahon urushi memoriali', qq: 'Ekinshi Jáhán urısı memorialı' }, category: 'nukus', coords: [42.46, 59.59], century: { ru: '1975', en: '1975', uz: '1975', qq: '1975' } },
  { id: 'afghan-war-memorial', name: { ru: 'Памятник жертвам Афганской войны', en: 'Afghan War Memorial', uz: 'Afgʻon urushi qurbonlari haykalı', qq: 'Awǵan urısı qurbanları heykelí' }, category: 'nukus', coords: [42.47, 59.61], century: { ru: '1990-е', en: '1990s', uz: '1990-yillar', qq: '1990-jıllar' } },
  { id: 'independence-monument', name: { ru: 'Монумент независимости', en: 'Independence Monument', uz: 'Mustaqillik monumenti', qq: 'Gárezsizlik monumenti' }, category: 'nukus', coords: [42.46, 59.62], century: { ru: '1991', en: '1991', uz: '1991', qq: '1991' }, featured: true },
  { id: 'jirau-monument', name: { ru: 'Памятник каракалпакским джирау', en: 'Karakalpak Jirau Monument', uz: 'Jiraular haykalı', qq: 'Jirawlar heykelí' }, category: 'nukus', coords: [42.45, 59.60], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'alpamys-monument', name: { ru: 'Памятник Альпамысу', en: 'Alpamys Monument', uz: 'Alpomish haykalı', qq: 'Alpamıs heykelí' }, category: 'nukus', coords: [42.47, 59.59], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'fishermen-monument', name: { ru: 'Памятник рыбакам Арала', en: 'Aral Fishermen Monument', uz: 'Orol baliqchilari haykalı', qq: 'Aral balıqshıları heykelí' }, category: 'nukus', coords: [42.46, 59.58], century: { ru: '2010-е', en: '2010s', uz: '2010-yillar', qq: '2010-jıllar' } },
  { id: 'amudarya-monument', name: { ru: 'Памятник Амударье', en: 'Amudarya Monument', uz: 'Amudaryo haykalı', qq: 'Ámiwdárya heykelí' }, category: 'nukus', coords: [42.45, 59.62], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },

  // Museums
  { id: 'savitsky-museum', name: { ru: 'Музей Савицкого', en: 'Savitsky Museum', uz: 'Savitskiy muzeyi', qq: 'Savitskiy muzeyi' }, category: 'museums', coords: [42.46, 59.60], century: { ru: '1966', en: '1966', uz: '1966', qq: '1966' }, featured: true, wonder: true },
  { id: 'state-museum', name: { ru: 'Каракалпакский государственный музей', en: 'Karakalpakstan State Museum', uz: 'Qoraqalpogʻiston davlat muzeyi', qq: 'Qaraqalpaqstan mámleketlik muzeyi' }, category: 'museums', coords: [42.46, 59.61], century: { ru: '1929', en: '1929', uz: '1929', qq: '1929' }, featured: true },
  { id: 'berdakh-museum', name: { ru: 'Музей Бердаха', en: 'Berdakh Museum', uz: 'Berdaq muzeyi', qq: 'Berdaq muzeyi' }, category: 'museums', coords: [42.46, 59.59], century: { ru: '1990-е', en: '1990s', uz: '1990-yillar', qq: '1990-jıllar' } },
  { id: 'ethnographic-museum', name: { ru: 'Этнографический музей', en: 'Ethnographic Museum', uz: 'Etnografik muzey', qq: 'Etnografiyalıq muzey' }, category: 'museums', coords: [42.46, 59.58], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'ellikkala-museum', name: { ru: 'Археологический музей Элликкалы', en: 'Ellikkala Archaeological Museum', uz: 'Ellikqalʼa arxeologik muzeyi', qq: 'Ellikqala arxeologiyalıq muzeyi' }, category: 'museums', coords: [41.73, 60.62], century: { ru: '1990-е', en: '1990s', uz: '1990-yillar', qq: '1990-jıllar' } },

  // Khorezm fortresses
  { id: 'kalalygyr', name: { ru: 'Калалыгыр', en: 'Kalalygyr', uz: 'Kalalıgʻir', qq: 'Kalalıǵır' }, category: 'khorezm', coords: [42.10, 59.50], century: { ru: 'V в. до н.э.', en: 'V c. BC', uz: 'mil. avv. V asr', qq: 'b.e.sh. V ásir' } },
  { id: 'kavat-kala-kh', name: { ru: 'Кават-Кала', en: 'Kavat-Kala', uz: 'Kavat-Qalʼa', qq: 'Kavat-Qala' }, category: 'khorezm', coords: [41.95, 60.73], century: { ru: 'XII в.', en: 'XII c.', uz: 'XII asr', qq: 'XII ásir' } },
  { id: 'tok-kala', name: { ru: 'Ток-Кала', en: 'Tok-Kala', uz: 'Toq-Qalʼa', qq: 'Toq-Qala' }, category: 'khorezm', coords: [42.50, 59.55], century: { ru: 'I в. н.э.', en: 'I c. AD', uz: 'mil. I asr', qq: 'b.e. I ásir' } },
  { id: 'qumboskan-kala', name: { ru: 'Кумбоскан-Кала', en: 'Qumboskan-Kala', uz: 'Qumbasqan-Qalʼa', qq: 'Qumbosqan-Qala' }, category: 'khorezm', coords: [41.80, 60.50], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' } },

  // Nature
  { id: 'ustyurt-plateau', name: { ru: 'Плато Устюрт', en: 'Ustyurt Plateau', uz: 'Ustyurt platosi', qq: 'Ústirt platosı' }, category: 'nature', coords: [42.50, 57.00], century: { ru: '', en: '', uz: '', qq: '' }, featured: true },
  { id: 'aral-sea', name: { ru: 'Аральское море', en: 'Aral Sea', uz: 'Orol dengizi', qq: 'Aral teńizi' }, category: 'nature', coords: [44.00, 58.50], century: { ru: '', en: '', uz: '', qq: '' }, featured: true },
  { id: 'muynak-ships', name: { ru: 'Кладбище кораблей в Муйнаке', en: 'Ship Graveyard of Muynak', uz: 'Moʻynoq kemalari', qq: 'Moyınaq kemeleri' }, category: 'nature', coords: [43.77, 58.68], century: { ru: '', en: '', uz: '', qq: '' }, featured: true, wonder: false },
  { id: 'amudarya-delta', name: { ru: 'Дельта Амударьи', en: 'Amudarya Delta', uz: 'Amudaryo deltasi', qq: 'Ámiwdárya deltası' }, category: 'nature', coords: [43.00, 58.90], century: { ru: '', en: '', uz: '', qq: '' } },
  { id: 'sudochye-lake', name: { ru: 'Озеро Судочье', en: 'Sudochye Lake', uz: 'Sudochʼye koʻli', qq: 'Sudoshye kóli' }, category: 'nature', coords: [43.50, 57.80], century: { ru: '', en: '', uz: '', qq: '' } },

  // Settlements
  { id: 'khodjeyli', name: { ru: 'Ходжейли', en: 'Khodjeyli', uz: 'Xoʻjayli', qq: 'Xojaylı' }, category: 'settlements', coords: [42.55, 59.45], century: { ru: 'X в.', en: 'X c.', uz: 'X asr', qq: 'X ásir' } },
  { id: 'muynak', name: { ru: 'Муйнак', en: 'Muynak', uz: 'Moʻynoq', qq: 'Moyınaq' }, category: 'settlements', coords: [43.77, 58.69], century: { ru: 'XIX в.', en: 'XIX c.', uz: 'XIX asr', qq: 'XIX ásir' } },
  { id: 'turtkul', name: { ru: 'Турткуль', en: 'Turtkul', uz: 'Turtkoʻl', qq: 'Tórtkel' }, category: 'settlements', coords: [41.55, 61.00], century: { ru: 'XVI в.', en: 'XVI c.', uz: 'XVI asr', qq: 'XVI ásir' } },
  { id: 'beruni', name: { ru: 'Беруни', en: 'Beruni', uz: 'Beruniy', qq: 'Beruniy' }, category: 'settlements', coords: [41.69, 60.75], century: { ru: 'X в.', en: 'X c.', uz: 'X asr', qq: 'X ásir' } },
  { id: 'chimbay', name: { ru: 'Чимбай', en: 'Chimbay', uz: 'Chimboy', qq: 'Shımbay' }, category: 'settlements', coords: [42.93, 59.77], century: { ru: 'XVIII в.', en: 'XVIII c.', uz: 'XVIII asr', qq: 'XVIII ásir' } },

  // Modern
  { id: 'constitution-monument', name: { ru: 'Монумент Конституции', en: 'Constitution Monument', uz: 'Konstitutsiya monumenti', qq: 'Konstitutsiya monumenti' }, category: 'modern', coords: [42.46, 59.62], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'friendship-monument', name: { ru: 'Монумент Дружбы народов', en: 'Friendship of Nations Monument', uz: 'Xalqlar doʻstligi monumenti', qq: 'Xalıqlar dostlıǵı monumenti' }, category: 'modern', coords: [42.47, 59.61], century: { ru: '2000-е', en: '2000s', uz: '2000-yillar', qq: '2000-jıllar' } },
  { id: 'teachers-monument', name: { ru: 'Памятник учителям', en: 'Teachers Monument', uz: 'Oʻqituvchilar haykalı', qq: 'Ustazlar heykelí' }, category: 'modern', coords: [42.46, 59.60], century: { ru: '2010-е', en: '2010s', uz: '2010-yillar', qq: '2010-jıllar' } },
  { id: 'aral-ecology-monument', name: { ru: 'Памятник экологической катастрофе Арала', en: 'Aral Ecological Catastrophe Monument', uz: 'Orol ekologik falokatı haykalı', qq: 'Aral ekologiyalıq apatı heykelí' }, category: 'modern', coords: [43.78, 58.70], century: { ru: '2010-е', en: '2010s', uz: '2010-yillar', qq: '2010-jıllar' } },

  // Other
  { id: 'caravan-route', name: { ru: 'Древний караванный путь Хорезма', en: 'Ancient Caravan Route of Khorezm', uz: 'Xorazm karvon yoʻli', qq: 'Xorezm karvan jolı' }, category: 'other', coords: [41.80, 60.50], century: { ru: 'II-I тыс. до н.э.', en: 'II-I mill. BC', uz: 'mil. avv. II-I ming yillik', qq: 'b.e.sh. II-I mıń jıllıq' } },
  { id: 'zoroastrian-temples', name: { ru: 'Руины храмов зороастрийцев', en: 'Zoroastrian Temple Ruins', uz: 'Zardushtiylar ibodatxonasi xarobalari', qq: 'Zardushtıylar ibadatxanası xarabalari' }, category: 'other', coords: [41.85, 60.70], century: { ru: 'VI-V в. до н.э.', en: 'VI-V c. BC', uz: 'mil. avv. VI-V asr', qq: 'b.e.sh. VI-V ásir' } },
  { id: 'ellikkala-walls', name: { ru: 'Оборонительные стены Элликкалы', en: 'Ellikkala Defensive Walls', uz: 'Ellikqalʼa mudofaa devorlari', qq: 'Ellikqala qorǵaw diywalları' }, category: 'other', coords: [41.73, 60.63], century: { ru: 'IV в. до н.э.', en: 'IV c. BC', uz: 'mil. avv. IV asr', qq: 'b.e.sh. IV ásir' } },
];

export const wonders = [
  'ayaz-kala', 'toprak-kala', 'koi-krylgan-kala', 'chilpyk', 'sultan-uvays', 'mazlumkhan-sulu', 'savitsky-museum'
];

export const newsArticles = [
  {
    id: 'n1',
    title: { ru: 'Новые находки в Аяз-Кале', en: 'New Finds at Ayaz-Kala', uz: 'Ayoz-Qalʼadan yangi topilmalar', qq: 'Ayaz-Qaladaǵı jaŋa tabılmalar' },
    excerpt: { ru: 'Археологи обнаружили древние артефакты, датируемые III веком до нашей эры.', en: 'Archaeologists discovered ancient artifacts dating back to the 3rd century BC.', uz: 'Arxeologlar mil. avv. III asrga tegishli qadimiy artefaktlarni topishdi.', qq: 'Arxeologlar b.e.sh. III ásirge tiyisli gadimgi artefaktlardı taptı.' },
    date: '2026-04-15', category: 'archaeology', featured: true,
  },
  {
    id: 'n2',
    title: { ru: 'Музей Савицкого принял 100 000 посетителей', en: 'Savitsky Museum Reaches 100,000 Visitors', uz: 'Savitskiy muzeyi 100 000 tashrif buyuruvchiga yetdi', qq: 'Savitskiy muzeyi 100 000 kóriwshige jetisti' },
    excerpt: { ru: 'Рекордное число туристов посетило один из самых необычных музеев мира.', en: 'A record number of tourists visited one of the most unique museums in the world.', uz: 'Dunyodagi eng noyob muzeylardan birini rekord miqdordagi turistlar tashrif buyurdi.', qq: 'Dúnyadaǵı eń ájaıyp muzeylerdiń birin rekord sanındaǵı turistler keldi.' },
    date: '2026-03-28', category: 'culture', featured: true,
  },
  {
    id: 'n3',
    title: { ru: 'Реставрация крепости Топрак-Кала', en: 'Restoration of Toprak-Kala Fortress', uz: 'Toprak-Qalʼa qaytadan tiklanmoqda', qq: 'Topıraq-Qala qayta tiklenbekte' },
    excerpt: { ru: 'Международная команда начала масштабную реставрацию одной из крупнейших крепостей древнего Хорезма.', en: 'An international team has begun a large-scale restoration of one of the largest fortresses of ancient Khorezm.', uz: 'Xalqaro jamoa qadimiy Xorazmdagi eng yirik qalʼalardan birini keng koʻlamda tiklashni boshladi.', qq: 'Xalıqaralıq komanda gadimgi Xorezmdegi eń iri qalalardan birin keŋ kólemde tiklawdı basladi.' },
    date: '2026-03-10', category: 'archaeology', featured: false,
  },
  {
    id: 'n4',
    title: { ru: 'Фестиваль каракалпакской культуры', en: 'Karakalpak Culture Festival', uz: 'Qoraqalpoq madaniyati festivali', qq: 'Qaraqalpaq mádeniyet festivalí' },
    excerpt: { ru: 'В Нукусе прошел ежегодный фестиваль, посвященный культурному наследию региона.', en: 'Nukus hosted an annual festival dedicated to the cultural heritage of the region.', uz: 'Nukusda mintaqa madaniy merosiga bagʻishlangan yillik festival boʻlib oʻtdi.', qq: 'Nókiste aymaq mádeniyet mırasına arnalǵan jıllıq festival bolıp ótti.' },
    date: '2026-02-20', category: 'culture', featured: false,
  },
  {
    id: 'n5',
    title: { ru: 'Новый туристический маршрут по Каракалпакстану', en: 'New Tourist Route Across Karakalpakstan', uz: 'Qoraqalpogʻiston boʻylab yangi turistik marshrut', qq: 'Qaraqalpaqstan boyınsha jaŋa turistlik marshrut' },
    excerpt: { ru: 'Разработан уникальный маршрут, охватывающий 15 ключевых памятников региона.', en: 'A unique route covering 15 key monuments of the region has been developed.', uz: 'Mintaqadagi 15 ta asosiy yodgorlikni qamrab olgan noyob marshrut ishlab chiqildi.', qq: 'Aymaqdaǵı 15 tiykarǵı yadgorliktı qamlap alǵan ayırıqsha marshrut islep shıǵıldı.' },
    date: '2026-01-15', category: 'tourism', featured: true,
  },
];