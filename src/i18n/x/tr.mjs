export default {
  meta: { demoBanner: 'Özel demo · Dalal Technologies tarafından hazırlandı' },
  status: { proposed: 'Önerilen girişim', document: 'Resmî belge', historical: 'Tarihî kanıt', authentic: 'Özgün donanım' },
  alt: {
    'city-waterfront': 'Akşam saatinde kıyıda bir konut bölgesinin yapay zekâ ile üretilmiş kavramsal görseli',
    'city-dusk': 'Gün batımında karma kullanımlı bir sahil gezinti alanının yapay zekâ ile üretilmiş kavramsal görseli',
    'city-campus': 'Modern binalar ve peyzajlı yolların yapay zekâ ile üretilmiş kavramsal görseli',
    'city-plaza': 'Akşam saatinde su üzerinden görülen bir şehir siluetinin yapay zekâ ile üretilmiş kavramsal görseli',
    'city-towers': 'Mavi saatte teraslı yeşil kulelerin yapay zekâ ile üretilmiş kavramsal görseli'
  },
  v2: {
    facts: ['2–6 akışlı yerleşimler belgelenmiş', 'Paslanmaz çelik bina girişleri', 'Atık yağ için ayrı toplama', 'İncelenmiş Türk patent belgesi'],
    anatomyTitle: 'Kurulu bir girişin anatomisi',
    anatomyIntro: 'Özgün bir Wastecykler ünitesi. Her parçanın ne yaptığını görmek için bir nokta seçin.',
    spots: [
      { t: 'Paslanmaz çelik ön panel', d: 'Girişi bina yüzeyine entegre eden, duvara gömme bir çerçeve.' },
      { t: 'Atık girişi', d: 'Akış seçildikten sonra atık buradan bırakılır.' },
      { t: 'Sistem paneli', d: '“Atık ayrıştırma sistemi” etiketi ve bir durum göstergesi bulunur.' },
      { t: 'Akış düğmeleri', d: 'Her akış için renkli bir düğme: evsel atık, plastik-kâğıt-metal, cam ve pil & elektronik.' },
      { t: 'Basılı talimatlar', d: 'Panel üzerine doğrudan basılmış adım adım kullanım bilgisi.' }
    ],
    compareTitle: 'Karışık toplama ve kaynağında ayrıştırma',
    mixed: { t: 'Karışık toplama', list: ['Tüm atık tek bir kutuya veya şafta gider', 'Geri dönüştürülebilirler evsel atıkla karışır', 'Ayrıştırma varsa sonradan, başka yerde yapılır'] },
    source: { t: 'Kaynağında ayrıştırma', list: ['Kullanıcı girişte akışı seçer', 'Her akış kendi bölmesinde kalır', 'Toplama akış akış düzenlenir'] },
    compareNote: 'İki yaklaşımın açıklayıcı karşılaştırması — ölçülmüş bir sonuç değildir.',
    schematic: 'Şematik çizim',
    sectorsTitle: 'Şehirleri şekillendiren kurumlar için tasarlandı',
    evidenceTitle: 'Açıkça etiketlenmiş kanıtlar',
    evidenceIntro: 'Her öğe özgün donanım, tarihî kanıt, resmî belge veya önerilen girişim olarak işaretlenmiştir.',
    engTitle: 'Tarihî donanımda görülen mühendislik yetkinlikleri',
    eng: [
      { t: 'Paslanmaz çelik imalat', d: 'Gömme ön paneller ve menteşeli giriş kapakları.' },
      { t: 'Kontrol elektroniği', d: 'Ayrı bir dolapta kontrol kartı, röleler ve klemens kablolaması.' },
      { t: 'Çok akışlı ayırıcı tasarımı', d: 'Belgelenmiş 2, 3, 4 ve 6 akışlı yerleşimler.' },
      { t: 'Kullanıcı arayüzü tasarımı', d: 'Renk kodlu düğmeler, piktogramlar ve basılı talimatlar.' }
    ],
    expTitle: 'Uluslararası büyüme',
    exp: ['Üretim ortaklıkları', 'Bölgesel distribütörlük', 'Teknoloji entegrasyonu — sensörler ve yazılım', 'Yeni pazarlarda pilot projeler'],
    expNote: 'Önerilen girişimlerdir — mevcut anlaşmalar değildir.',
    problem: 'Altyapı sorunu', tech: 'İlgili Wastecykler teknolojisi', value: 'Olası operasyonel değer',
    valueNote: 'Olası değer her projeye göre değişir. Herhangi bir sonuç iddia edilmez.',
    explore: 'Bu sektörü keşfedin',
    docOnRequest: 'Talep üzerine',
    comingSoon: 'Yakında',
    sectors: {
      municipalities: { problem: 'Evsel atık toplama hizmetlerine çoğu zaman ayrıştırılmadan ulaşır; bu da geri dönüşüm programlarını zorlaştırır.', value: ['Toplama hizmetleri için daha temiz, önceden ayrılmış akışlar', 'Her binada görünür bir ayrıştırma noktası', 'Geniş uygulamadan önce pilota hazır bir yol'] },
      residential: { problem: 'Sakinler atığı ortak kutulara taşır; ayrıştırma mevcut alana ve günlük alışkanlıklara bağlıdır.', value: ['Binaya tasarlanmış, her katta ayrıştırma', 'Ortak alanlarda daha az karışık kutu', 'Doğru seçimi kolaylaştıran net etiketler'] },
      commercial: { problem: 'Birçok kiracı tek bir atık sistemini paylaşır; yeme-içme işletmeleri buna atık yemeklik yağ ekler.', value: ['Ortak altyapı içinde ayrı akışlar', 'Yeme-içme işletmeleri için ayrı atık yağ toplama', 'Daha basit temizlik ve servis rutinleri'] },
      healthcare: { problem: 'Ofisler, mutfaklar ve personel konutları, hastanenin klinik faaliyetinin yanında günlük atık üretir.', value: ['Ofis, mutfak ve personel alanlarında ayrılmış klinik dışı akışlar', 'Mutfak atık yağının giderlerden uzak tutulması', 'Günlük atığın klinik süreçlerden ayrı yönetilmesi'] },
      universities: { problem: 'Yurtlar ve yemekhaneler, kullanıcı değişiminin yüksek olduğu birçok binada karışık atık üretir.', value: ['Yurtlar ve ortak binalarda tutarlı ayrıştırma noktaları', 'Yemekhanelerden atık yağ toplama', 'Sürdürülebilirlik programları için görünür altyapı'] }
    },
    wiz: {
      title: 'Nitelikli bir talep başlatın', intro: 'Üç kısa adım. Talebinizi doğru ekibe yönlendiriyoruz.',
      steps: ['Siz', 'Proje', 'İletişim'], step: 'Adım', next: 'Devam', back: 'Geri', pick: 'Lütfen bir seçenek belirleyin.',
      roles: {
        municipality: { t: 'Belediye veya kamu kurumu', d: 'Konut, kamu binaları, bölgeler' },
        developer: { t: 'Geliştirici veya mülk sahibi', d: 'Konut, ticari, karma kullanım' },
        distributor: { t: 'Distribütör', d: 'Bölgesel satış ve proje desteği' },
        manufacturer: { t: 'Üretici', d: 'İmalat, bileşenler, montaj' },
        partner: { t: 'Mühendislik veya teknoloji ortağı', d: 'Kontrol, IoT, yazılım, akıllı şehir' }
      },
      q: {
        sites: 'Kaç bina veya saha?', sitesOpts: ['1', '2–10', '10’dan fazla', 'Henüz bilinmiyor'],
        stage: 'Proje aşaması', stageOpts: ['İlk fikir', 'Planlama / tasarım', 'İhale veya satın alma', 'İnşaat aşamasında'],
        streams: 'İlgilenilen akışlar', streamsOpts: ['Evsel atık', 'Ambalaj', 'Cam', 'Pil / elektronik', 'Atık yemeklik yağ'],
        territory: 'Kapsayacağınız bölge', experience: 'Yapı veya atık ürünleriyle deneyim', expOpts: ['Henüz yok', 'Biraz', 'Kapsamlı'],
        capability: 'Ana yetkinlik', capOpts: ['Paslanmaz çelik imalat', 'Elektronik / kontrol', 'Montaj', 'Prototipleme'],
        area: 'Uzmanlık alanı', areaOpts: ['Sensörler / IoT', 'Kontrol elektroniği', 'Yazılım / veri', 'Akıllı şehir platformları']
      }
    }
  }
};
