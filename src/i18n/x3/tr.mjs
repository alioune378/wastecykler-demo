export default {
  v3: {
    consult: 'Teknik görüşme talep edin', consultShort: 'Görüşme talep edin', specs: 'Mühendislik spesifikasyonlarını isteyin', feas: 'Proje fizibilitesini görüşün', system: 'Sistemi inceleyin',
    heroEyebrow: 'Binaya entegre atık ayrıştırma',
    spec: [
      { v: '2–6', l: 'Belgelenmiş akış yerleşimi' },
      { v: 'Paslanmaz çelik', l: 'Duvara entegre girişler' },
      { v: 'Atık yağ', l: 'Ayrı toplama noktası' },
      { v: 'TR 2013 03567 B', l: 'İncelemeli Türk patenti' }
    ],
    diagramTitle: 'Açıklamalı giriş ünitesi',
    diagramIntro: 'Kurulu özgün bir ünite. Her parçanın işlevini görmek için bir işaret seçin.',
    systemTitle: 'Sistem nasıl çalışır',
    systemIntro: 'Ayrıştırma, atığın atıldığı noktada gerçekleşir — toplamadan sonra değil.',
    sys: [
      { t: 'Seçim', d: 'Kullanıcı duvara entegre girişte ilgili akışın düğmesine basar.' },
      { t: 'Bırakma', d: 'Atık o kattaki paslanmaz çelik girişe bırakılır.' },
      { t: 'Aktarım', d: 'Bina şaftı boyunca aşağı iner.' },
      { t: 'Ayrıştırma', d: 'Alt kısımdaki ayırıcı, atığı seçilen akışın bölmesine yönlendirir.' },
      { t: 'Toplama', d: 'Her bölme akış akış boşaltılır.' }
    ],
    sysNote: 'Tarihî teknik çizimlere dayanan şema. Ölçüler, kapasiteler ve kontroller her projede teyit edilir.',
    withoutT: 'Klasik tek şaft', without: 'Tüm atık tek bir konteynerde karışır. Ayrıştırma varsa toplamadan sonra yapılır.',
    withT: 'Wastecykler kaynağında ayrıştırma', with: 'Akış girişte seçilir ve her akış kendi bölmesine ulaşır.',
    buyerTitle: 'Ciddi bir alıcının bilmesi gerekenler',
    buyerIntro: 'Açık yanıtlar. Henüz doğrulanması gereken bilgileri açıkça belirtiyoruz.',
    buyer: [
      { q: 'Hangi operasyonel sorunu çözer?', a: 'Karışık atık binadan çıktıktan sonra zor geri dönüştürülür. Wastecykler ayrıştırmayı atığın atıldığı noktaya taşır; böylece her akış atıldığı andan itibaren ayrı kalır.' },
      { q: 'Binaya nasıl entegre edilir?', a: 'Her kattaki duvara entegre girişler bir toplama odasına bağlanır. Giriş konumları, elektrik beslemesi, kontrol panosu ve şaft ya da konteyner bağlantısı mimar ve mühendislerle koordine edilir. Mevcut binalar tek tek değerlendirilir.' },
      { q: 'Hangi yapılandırmalar, kapasiteler ve bakım koşulları geçerlidir?', a: 'Tarihî çizimlerde 2, 3, 4 ve 6 akışlı yerleşimler belgelenmiştir. Kapasite, ölçüler, bakım planları ve elektrik gereksinimleri teknik değerlendirme sırasında sunulur ve doğrulanana kadar yayımlanmaz.' },
      { q: 'Neler gösterilmiştir?', a: 'İncelemeli bir Türk patenti (TR 2013 03567 B), Türkiye’de etiketli toplama şaftlarıyla pilot uygulamalar ve kurulu paslanmaz çelik girişler. Bu sitedeki her öğe kanıt türüne göre etiketlenmiştir.' },
      { q: 'Büyük bir proje veya belediye programı nasıl değerlendirilir?', a: 'Aşamalı bir süreçle: görüşme, çizim ve saha incelemesi, yapılandırma önerisi, ardından daha geniş bir taahhütten önce fizibilite çalışması veya pilot uygulama.' }
    ],
    processTitle: 'İlk görüşmeden proje kararına',
    processNote: 'Önerilen çalışma süreci. Kapsam ve çıktılar her projede birlikte belirlenir.',
    outLabel: 'Çıktı',
    process: [
      { t: 'Teknik görüşme', d: 'Bina türü, kat sayısı, akışlar ve proje aşaması.', o: 'Kapsam özeti' },
      { t: 'Çizim ve saha incelemesi', d: 'Mimari çizimler, toplama odaları ve bina tesisatı.', o: 'Entegrasyon notları' },
      { t: 'Yapılandırma önerisi', d: 'Akış yerleşimi, giriş konumları ve kontrol düzeni.', o: 'Önerilen yapılandırma' },
      { t: 'Fizibilite veya pilot', d: 'Kurulumdan önce müşteriyle belirlenen değerlendirme kriterleri.', o: 'Fizibilite raporu veya pilot planı' },
      { t: 'Teslimat planlaması', d: 'Üretim, kurulum sırası ve bakım düzenlemeleri.', o: 'Proje planı' }
    ],
    paths: [
      { k: 'consultation', t: 'Teknik görüşme', d: 'Binanızı veya programınızı bir mühendisle görüşün.' },
      { k: 'specifications', t: 'Mühendislik spesifikasyonları', d: 'Projeniz için çizimler ve doğrulanmış teknik veriler isteyin.' },
      { k: 'feasibility', t: 'Proje fizibilitesi', d: 'Bir projeyi, bölgeyi veya çok binalı bir programı değerlendirin.' }
    ],
    intentLabel: 'Neye ihtiyacınız var?',
    intents: { consultation: 'Teknik görüşme', specifications: 'Mühendislik spesifikasyonları', feasibility: 'Proje fizibilitesi', partnership: 'Ortaklık' },
    heritageTitle: 'Mühendislik mirası',
    heritageIntro: 'On yılı aşkın geliştirme süreci, özgün materyallerle belgelenmiş.',
    heritageLink: 'Tüm tarihçe ve patent',
    integTitle: 'Nasıl entegre olur',
    sch: {
      municipalities: ['Konut blokları', 'Kamu binaları', 'Her binada toplama odası', 'Akışa göre toplama güzergâhı'],
      residential: ['Her katta giriş', 'Bina şaftı', 'Ayırıcı', 'Akışa göre toplama odası'],
      commercial: ['Kiracı katları', 'Yemek alanı', 'Atık yağ toplama noktası', 'Ortak toplama odası'],
      healthcare: ['Ofisler ve personel konutları', 'Mutfaklar', 'Atık yağ toplama noktası', 'Tıbbi atık — ayrı sistem, kapsam dışı'],
      universities: ['Öğrenci yurtları', 'Yemekhane', 'Eğitim binaları', 'Merkezî toplama']
    },
    schNote: 'Şematik çizim. Yerleşimler her proje için geliştirilir.',
    faqTitle: 'Alıcıların sorduğu sorular',
    sticky: 'Bir proje mi planlıyorsunuz?',
    legendTitle: 'Kanıt türleri'
  }
};
