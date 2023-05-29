const words = [
    { "english": "able", "türkçe": "yapabilen" }, { "english": "about", "türkçe": "hakkında" }, { "english": "accessible to", "türkçe": "erişilebilir" }, { "english": "above", "türkçe": "yukarıdaki" }, { "english": "according to", "türkçe": "e göre" }, { "english": "achievment", "türkçe": "başarı" }, { "english": "across", "türkçe": "karşısında" }, { "english": "admit", "türkçe": "kabul etmek" }, { "english": "adult", "türkçe": "yetişkin" }, { "english": "affect", "türkçe": "etkileme, etki etmek" }, { "english": "after", "türkçe": "dikten sonra" }, { "english": "afternoon", "türkçe": "öğleden sonra" }, { "english": "afterwards", "türkçe": "ondan sonra" }, { "english": "again", "türkçe": "tekrar, yine" }, { "english": "against", "türkçe": "aleyhinde, -e karşı" }, { "english": "age", "türkçe": "yaş" }, { "english": "agent", "türkçe": "ajan" }, { "english": "ago", "türkçe": "önce" }, { "english": "agree", "türkçe": "anlaşmak, katılmak" }, { "english": "ahead", "türkçe": "ilerde" }, { "english": "air", "türkçe": "hava" }, { "english": "all", "türkçe": "her şey" }, { "english": "all right", "türkçe": "peki" }, { "english": "almost", "türkçe": "neredeyse" }, { "english": "alone", "türkçe": "tek başına" }, { "english": "along", "türkçe": "süresince" }, { "english": "already", "türkçe": "zaten, çoktan" }, { "english": "also", "türkçe": "üstelik" }, { "english": "although", "türkçe": "e rağmen, olduğu halde, gerçi" }, { "english": "altogether", "türkçe": "büsbütün" }, { "english": "always", "türkçe": "her zaman, daima" }, { "english": "among", "türkçe": "arasında" }, { "english": "and", "türkçe": "ve, ile" }, {
        "english": "any	",
        "türkçe": "hiç"
    }
    , {
        "english": "anybody",
        "türkçe": "hiç kimse, herhangi biri"
    }
    , {
        "english": "anyone",
        "türkçe": "hiç kimse, herhangi biri"
    }
    , {
        "english": "anything",
        "türkçe": "hiçbir şey, herhangi bir şey"
    }
    , {
        "english": "anyway",
        "türkçe": "her halükârda"
    }
    , {
        "english": "anywhere",
        "türkçe": "herhangi bir yere"
    }
    , {
        "english": "appear",
        "türkçe": "görünmek, gözükmek"
    }
    , {
        "english": "apply",
        "türkçe": "başvurmak"
    }
    , {
        "english": "approach",
        "türkçe": "yaklaşım"
    }
    , {
        "english": "april",
        "türkçe": "nisan"
    }
    , {
        "english": "area",
        "türkçe": "alan, bölge"
    }
    , {
        "english": "apple",
        "türkçe": "elma"
    }
    , {
        "english": "argue",
        "türkçe": "tartışmak"
    }
    , {
        "english": "around",
        "türkçe": "etrafta, çevrede"
    }
    , {
        "english": "arrive",
        "türkçe": "varmak, ulaşmak"
    }
    , {
        "english": "art",
        "türkçe": "sanat"
    }
    , {
        "english": "article",
        "türkçe": "makale"
    }
    , {
        "english": "artist",
        "türkçe": "sanatçı"
    }
    , {
        "english": "as",
        "türkçe": "kadar, gibi"
    }
    , {
        "english": "ask",
        "türkçe": "sormak"
    }
    , {
        "english": "assume",
        "türkçe": "varsaymak"
    }
    , {
        "english": "attack",
        "türkçe": "atak"
    }
    , {
        "english": "attention",
        "türkçe": "dikkat"
    }
    , {
        "english": "attorney",
        "türkçe": "avukat"
    }
    , {
        "english": "audience",
        "türkçe": "seyirci"
    }
    , {
        "english": "august",
        "türkçe": "ağustos"
    }
    , {
        "english": "author",
        "türkçe": "yazar"
    }
    , {
        "english": "authority",
        "türkçe": "yetki, otorite"
    }
    , {
        "english": "avoid",
        "türkçe": "önlemek, kaçınmak"
    }
    , {
        "english": "away",
        "türkçe": "uzakta"
    }
    , {
        "english": "back",
        "türkçe": "geri"
    }
    , {
        "english": "bag",
        "türkçe": "sırt çantası"
    }
    , {
        "english": "ball",
        "türkçe": "top"
    }
    , {
        "english": "bank",
        "türkçe": "banka"
    }
    , {
        "english": "bar",
        "türkçe": "bar, baro"
    }
    , {
        "english": "base",
        "türkçe": "temel, baz"
    }
    , {
        "english": "be",
        "türkçe": "olmak, var olmak"
    }
    , {
        "english": "beat",
        "türkçe": "dövmek, yenmek"
    }
    , {
        "english": "beautiful",
        "türkçe": "güzel, hoş"
    }
    , {
        "english": "because",
        "türkçe": "çünkü, diği için"
    }
    , {
        "english": "become",
        "türkçe": "haline gelmek"
    }
    , {
        "english": "bed",
        "türkçe": "yatak"
    }
    , {
        "english": "before",
        "türkçe": "önce"
    }
    , {
        "english": "begin",
        "türkçe": "başlamak, başlatmak"
    }
    , {
        "english": "behavior",
        "türkçe": "davranış, tutum, hareket"
    }
    , {
        "english": "behind",
        "türkçe": "arkada"
    }
    , {
        "english": "believe",
        "türkçe": "inanmak, inancı olmak"
    }
    , {
        "english": "below",
        "türkçe": "aşağı"
    }
    , {
        "english": "benefit",
        "türkçe": "yarar, fayda"
    }
    , {
        "english": "beside",
        "türkçe": "başka, yanında"
    }
    , {
        "english": "besides",
        "türkçe": "ayrıca"
    }
    , {
        "english": "best",
        "türkçe": "en iyi"
    }
    , {
        "english": "better",
        "türkçe": "daha iyisi"
    }
    , {
        "english": "between	",
        "türkçe": "arasında"
    }
    , {
        "english": "beyond",
        "türkçe": "ötesinde"
    }
    , {
        "english": "big",
        "türkçe": "büyük"
    }
    , {
        "english": "bill",
        "türkçe": "fatura"
    }
    , {
        "english": "billion",
        "türkçe": "milyar"
    }
    , {
        "english": "black",
        "türkçe": "siyah"
    }
    , {
        "english": "blood",
        "türkçe": "kan"
    }
    , {
        "english": "blue",
        "türkçe": "mavi"
    }
    , {
        "english": "board",
        "türkçe": "yazı tahtası"
    }
    , {
        "english": "body",
        "türkçe": "vücut"
    }
    , {
        "english": "born",
        "türkçe": "doğmuş, doğum"
    }
    , {
        "english": "both",
        "türkçe": "ikisi de"
    }
    , {
        "english": "box",
        "türkçe": "kutu"
    }
    , {
        "english": "boy",
        "türkçe": "erkek çocuk"
    }
    , {
        "english": "bread",
        "türkçe": "ekmek"
    }
    , {
        "english": "break",
        "türkçe": "kırılma"
    }
    , {
        "english": "breakfast",
        "türkçe": "kahvaltı"
    }
    , {
        "english": "bring",
        "türkçe": "getirmek"
    }
    , {
        "english": "brother",
        "türkçe": "erkek kardeş"
    }
    , {
        "english": "budget",
        "türkçe": "bütçe"
    }
    , {
        "english": "build",
        "türkçe": "inşa etmek"
    }
    , {
        "english": "building",
        "türkçe": "bina"
    }
    , {
        "english": "bus",
        "türkçe": "otobüs"
    }
    , {
        "english": "business",
        "türkçe": "iş"
    }
    , {
        "english": "busy",
        "türkçe": "meşgul"
    }
    , {
        "english": "but",
        "türkçe": "ama, fakat"
    }
    , {
        "english": "buy",
        "türkçe": "satın almak"
    }
    , {
        "english": "by",
        "türkçe": "yoluyla"
    }
    , {
        "english": "cab",
        "türkçe": "taksi"
    }
    , {
        "english": "call",
        "türkçe": "çağrı, aramak"
    }
    , {
        "english": "campaign",
        "türkçe": "kampanya"
    }
    , {
        "english": "can",
        "türkçe": "yapabilmek"
    }
    , {
        "english": "cancer",
        "türkçe": "kanser"
    }
    , {
        "english": "candidate",
        "türkçe": "aday"
    }
    , {
        "english": "capital",
        "türkçe": "başkent"
    }
    , {
        "english": "care",
        "türkçe": "bakım"
    }
    , {
        "english": "career",
        "türkçe": "kariyer"
    }
    , {
        "english": "carry",
        "türkçe": "taşımak"
    }
    , {
        "english": "catch",
        "türkçe": "yakalamak"
    }
    , {
        "english": "cause",
        "türkçe": "sebep olmak"
    }
    , {
        "english": "cell",
        "türkçe": "hücre"
    }
    , {
        "english": "center",
        "türkçe": "merkez"
    }
    , {
        "english": "century",
        "türkçe": "yüzyıl"
    }
    , {
        "english": "certainly",
        "türkçe": "kesinlikle"
    }
    , {
        "english": "chair",
        "türkçe": "sandalye"
    }
    , {
        "english": "challenge",
        "türkçe": "	meydan okuma"
    }
    , {
        "english": "chance",
        "türkçe": "şans"
    }
    , {
        "english": "character",
        "türkçe": "karakter"
    }
    , {
        "english": "charge",
        "türkçe": "şarj etmek"
    }
    , {
        "english": "cheap",
        "türkçe": "ucuz"
    }
    , {
        "english": "child",
        "türkçe": "çocuk"
    }
    , {
        "english": "choose",
        "türkçe": "seçmek"
    }
    , {
        "english": "church",
        "türkçe": "kilise"
    }
    , {
        "english": "cigarette",
        "türkçe": "sigara"
    }
    , {
        "english": "cinema",
        "türkçe": "sinema"
    }
    , {
        "english": "citizen",
        "türkçe": "vatandaş"
    }
    , {
        "english": "city",
        "türkçe": "şehir"
    }
    , {
        "english": "class",
        "türkçe": "sınıf"
    }
    , {
        "english": "civil",
        "türkçe": "sivil"
    }
    , {
        "english": "clearly",
        "türkçe": "açıkça"
    }
    , {
        "english": "coach",
        "türkçe": "koç"
    }
    , {
        "english": "coffee",
        "türkçe": "kahve"
    }
    , {
        "english": "cold",
        "türkçe": "soğuk"
    }
    , {
        "english": "colour",
        "türkçe": "renk"
    }
    , {
        "english": "come",
        "türkçe": "gelmek"
    }
    , {
        "english": "common",
        "türkçe": "ortak, yaygın"
    }
    , {
        "english": "company",
        "türkçe": "şirket"
    }
    , {
        "english": "compare",
        "türkçe": "karşılaştırmak"
    }
    , {
        "english": "computer",
        "türkçe": "bilgisayar"
    }
    , {
        "english": "concern",
        "türkçe": "ilgilendirmek"
    }
    , {
        "english": "condition",
        "türkçe": "şart"
    }
    , {
        "english": "conference",
        "türkçe": "konferans"
    }
    , {
        "english": "consider",
        "türkçe": "dikkate almak, göz önüne almak"
    }
    , {
        "english": "crazy",
        "türkçe": "çılgın, deli"
    }
    , {
        "english": "dad	",
        "türkçe": "baba"
    }
    , {
        "english": "dangerous",
        "türkçe": "tehlikeli"
    }
    , {
        "english": "dark",
        "türkçe": "karanlık, koyu"
    }
    , {
        "english": "date",
        "türkçe": "tarih, randevu"
    }
    , {
        "english": "daughter",
        "türkçe": "kız çocuk"
    }
    , {
        "english": "day",
        "türkçe": "gün"
    }
    , {
        "english": "december",
        "türkçe": "aralık"
    }
    , {
        "english": "delicious",
        "türkçe": "lezzetli"
    }
    , {
        "english": "different",
        "türkçe": "değişik"
    }
    , {
        "english": "difficult",
        "türkçe": "zor"
    }
    , {
        "english": "dinner",
        "türkçe": "akşam yemeği"
    }
    , {
        "english": "dirty",
        "türkçe": "kirli"
    }
    , {
        "english": "doctor	",
        "türkçe": "doktor"
    }
    , {
        "english": "double",
        "türkçe": "çift, ikiye katlamak"
    }
    , {
        "english": "down",
        "türkçe": "aşağıya doğru"
    }
    , {
        "english": "each",
        "türkçe": "her, her biri"
    }
    , {
        "english": "early",
        "türkçe": "erken"
    }
    , {
        "english": "easy",
        "türkçe": "kolay, basit"
    }
    , {
        "english": "else",
        "türkçe": "başka"
    }
    , {
        "english": "empty",
        "türkçe": "boş"
    }
    , {
        "english": "enough",
        "türkçe": "yeterli"
    }
    , {
        "english": "even",
        "türkçe": "bile, hatta"
    }
    , {
        "english": "evening",
        "türkçe": "akşam "
    }
    , {
        "english": "ever",
        "türkçe": "daima, hiç"
    }
    , {
        "english": "every",
        "türkçe": "her biri"
    }
    , {
        "english": "exactly",
        "türkçe": "	tam olarak"
    }
    , {
        "english": "except",
        "türkçe": "hariç tutmak, haricinde"
    }
    , {
        "english": "expensive",
        "türkçe": "pahalı"
    }
    , {
        "english": "extra",
        "türkçe": "ekstra"
    }
    , {
        "english": "family",
        "türkçe": "aile"
    }
    , {
        "english": "far",
        "türkçe": "uzak, uzakta"
    }
    , {
        "english": "fast",
        "türkçe": "hızlı"
    }
    , {
        "english": "february",
        "türkçe": "şubat"
    }
    , {
        "english": "few",
        "türkçe": "az"
    }
    , {
        "english": "file",
        "türkçe": "dosya"
    }
    , {
        "english": "fine",
        "türkçe": "güzel, iyi"
    }
    , {
        "english": "first",
        "türkçe": "ilk, öncelikle"
    }
    , {
        "english": "floor",
        "türkçe": "zemin"
    }
    , {
        "english": "food",
        "türkçe": "yiyecek"
    }
    , {
        "english": "for",
        "türkçe": "nedeniyle"
    }
    , {
        "english": "foreign",
        "türkçe": "yabancı"
    }
    , {
        "english": "forward",
        "türkçe": "ileri"
    }
    , {
        "english": "friday",
        "türkçe": "Cuma"
    }
    , {
        "english": "friend",
        "türkçe": "arkadaş"
    }
    , {
        "english": "full",
        "türkçe": "dolu, tam"
    }
    , {
        "english": "fun",
        "türkçe": "eğlence"
    }
    , {
        "english": "funny",
        "türkçe": "komik"
    }
    , {
        "english": "game",
        "türkçe": "oyun"
    }
    , {
        "english": "gas",
        "türkçe": "gaz"
    }
    , {
        "english": "general",
        "türkçe": "genel"
    }
    , {
        "english": "gentleman",
        "türkçe": "centilmen"
    }
    , {
        "english": "get permission",
        "türkçe": "	izin almak"
    }
    , {
        "english": "girl",
        "türkçe": "kız çocuk"
    }
    , {
        "english": "god",
        "türkçe": "tanrı"
    }
    , {
        "english": "good",
        "türkçe": "iyi"
    }
    , {
        "english": "goverment",
        "türkçe": "hükümet"
    }
    , {
        "english": "great",
        "türkçe": "harika"
    }
    , {
        "english": "green",
        "türkçe": "yeşil"
    }
    , {
        "english": "grey",
        "türkçe": "gri"
    }
    , {
        "english": "half",
        "türkçe": "yarım"
    }
    , {
        "english": "hand",
        "türkçe": "el"
    }
    , {
        "english": "handbag",
        "türkçe": "el çantası"
    }
    , {
        "english": "happy",
        "türkçe": "mutlu"
    }
    , {
        "english": "hard",
        "türkçe": "zor, sert"
    }
    , {
        "english": "healthy",
        "türkçe": "sağlıklı"
    }
    , {
        "english": "heart",
        "türkçe": "	kalp, gönül"
    }
    , {
        "english": "help",
        "türkçe": "yardım etmek"
    }
    , {
        "english": "here",
        "türkçe": "burada"
    }
    , {
        "english": "high",
        "türkçe": "	yüksek"
    }
    , {
        "english": "holiday",
        "türkçe": "tatil"
    }
    , {
        "english": "home",
        "türkçe": "ev"
    }
    , {
        "english": "hospital",
        "türkçe": "hastane"
    }
    , {
        "english": "hot",
        "türkçe": "sıcak"
    }
    , {
        "english": "hotel",
        "türkçe": "otel"
    }
    , {
        "english": "hour",
        "türkçe": "saat"
    }
    , {
        "english": "house",
        "türkçe": "ev"
    }
    , {
        "english": "how",
        "türkçe": "nasıl"
    }
    , {
        "english": "however",
        "türkçe": "	ama, oysa"
    }
    , {
        "english": "hungry",
        "türkçe": "aç"
    }
    , {
        "english": "husband",
        "türkçe": "koca"
    }
    , {
        "english": "idea",
        "türkçe": "fikir"
    }
    , {
        "english": "if",
        "türkçe": "eğer, ise"
    }
    , {
        "english": "important",
        "türkçe": "önemli"
    }
    , {
        "english": "in",
        "türkçe": "içinde"
    }
    , {
        "english": "incredible",
        "türkçe": "inanılmaz"
    }
    , {
        "english": "information",
        "türkçe": "bilgi"
    }
    , {
        "english": "inside",
        "türkçe": "iç, içteki"
    }
    , {
        "english": "instead of",
        "türkçe": "	yerine"
    }
    , {
        "english": "interesting",
        "türkçe": "ilginç"
    }
    , {
        "english": "international",
        "türkçe": "uluslararası"
    }
    , {
        "english": "into",
        "türkçe": "	içine, içeriye"
    }
    , {
        "english": "it",
        "türkçe": "o"
    }
    , {
        "english": "january",
        "türkçe": "ocak"
    }
    , {
        "english": "job	",
        "türkçe": "	iş, meslek"
    }
    , {
        "english": "joke",
        "türkçe": "şaka, şaka yapmak"
    }
    , {
        "english": "july",
        "türkçe": "temmuz"
    }
    , {
        "english": "june",
        "türkçe": "haziran"
    }
    , {
        "english": "just",
        "türkçe": "sadece"
    }
    , {
        "english": "key",
        "türkçe": "anahtar"
    }
    , {
        "english": "kind",
        "türkçe": "çeşit, nazik"
    }
    , {
        "english": "kitchen",
        "türkçe": "mutfak"
    }
    , {
        "english": "lady",
        "türkçe": "kadın, hanımefendi"
    }
    , {
        "english": "large",
        "türkçe": "geniş, büyük"
    }
    , {
        "english": "late",
        "türkçe": "geç"
    }
    , {
        "english": "least",
        "türkçe": "az miktar"
    }
    , {
        "english": "less",
        "türkçe": "daha az"
    }
    , {
        "english": "life",
        "türkçe": "hayat, ömür"
    }
    , {
        "english": "light",
        "türkçe": "ışık"
    }
    , {
        "english": "list",
        "türkçe": "liste, listelemek"
    }
    , {
        "english": "little",
        "türkçe": "az miktar"
    }
    , {
        "english": "long",
        "türkçe": "uzun"
    }
    , {
        "english": "lot",
        "türkçe": "çok, hisse"
    }
    , {
        "english": "luck",
        "türkçe": "şans"
    }
    , {
        "english": "lunch",
        "türkçe": "öğle yemeği"
    }
    , {
        "english": "main",
        "türkçe": "ana, esas, başlıca"
    }
    , {
        "english": "man",
        "türkçe": "adam"
    }
    , {
        "english": "manager",
        "türkçe": "yönetici, müdür"
    }
    , {
        "english": "many",
        "türkçe": "bir hayli, çok"
    }
    , {
        "english": "march",
        "türkçe": "mart, marş"
    }
    , {
        "english": "market",
        "türkçe": "pazarlama"
    }
    , {
        "english": "may",
        "türkçe": "mümkün olmak, mayıs"
    }
    , {
        "english": "me",
        "türkçe": "	bana, beni"
    }
    , {
        "english": "meat",
        "türkçe": "et"
    }
    , {
        "english": "meet",
        "türkçe": "görüşme yapmak"
    }
    , {
        "english": "meeting",
        "türkçe": "toplantı"
    }
    , {
        "english": "men",
        "türkçe": "adam"
    }
    , {
        "english": "message",
        "türkçe": "mesaj"
    }
    , {
        "english": "metre",
        "türkçe": "metre"
    }
    , {
        "english": "mine",
        "türkçe": "kazmak"
    }
    , {
        "english": "minute",
        "türkçe": "dakika"
    }
    , {
        "english": "mistake	",
        "türkçe": "yanlış, hata"
    }
    , {
        "english": "monday",
        "türkçe": "Pazartesi"
    }
    , {
        "english": "money",
        "türkçe": "para"
    }
    , {
        "english": "month",
        "türkçe": "ay"
    }
    , {
        "english": "more",
        "türkçe": "çok"
    }
    , {
        "english": "morning",
        "türkçe": "sabah"
    }
    , {
        "english": "most",
        "türkçe": "en fazla miktar"
    }
    , {
        "english": "mother",
        "türkçe": "anne"
    }
    , {
        "english": "much",
        "türkçe": "çok şey"
    }
    , {
        "english": "music",
        "türkçe": "müzik"
    }
    , {
        "english": "must",
        "türkçe": "meli, malı"
    }
    , {
        "english": "my",
        "türkçe": "benim"
    }
    , {
        "english": "name",
        "türkçe": "isim"
    }
    , {
        "english": "necessary",
        "türkçe": "gerekli"
    }
    , {
        "english": "never",
        "türkçe": "asla"
    }
    , {
        "english": "new",
        "türkçe": "yeni"
    }
    , {
        "english": "news",
        "türkçe": "haber"
    }
    , {
        "english": "newspaper",
        "türkçe": "gazete"
    }
    , {
        "english": "next",
        "türkçe": "sonraki"
    }
    , {
        "english": "nice",
        "türkçe": "hoş"
    }
    , {
        "english": "night",
        "türkçe": "gece"
    }
    , {
        "english": "no",
        "türkçe": "hayır"
    }
    , {
        "english": "nobody",
        "türkçe": "hiç kimse "
    }
    , {
        "english": "normal",
        "türkçe": "normal"
    }
    , {
        "english": "not",
        "türkçe": "	yok, değil"
    }
    , {
        "english": "nothing",
        "türkçe": "hiç"
    }
    , {
        "english": "november",
        "türkçe": "kasım"
    }
    , {
        "english": "now",
        "türkçe": "şimdi"
    }
    , {
        "english": "nowhere",
        "türkçe": "hiçbir yerde"
    }
    , {
        "english": "number",
        "türkçe": "sayı, rakam"
    }
    , {
        "english": "october",
        "türkçe": "ekim"
    }
    , {
        "english": "off",
        "türkçe": "den, dan, dışında"
    }
    , {
        "english": "office",
        "türkçe": "büro, ofis"
    }
    , {
        "english": "official meeting",
        "türkçe": "resmi toplantı"
    }
    , {
        "english": "often",
        "türkçe": "sık sık"
    }
    , {
        "english": "on",
        "türkçe": "	üstünde, üzerinde"
    }
    , {
        "english": "once",
        "türkçe": "	bir zamanlar"
    }
    , {
        "english": "one",
        "türkçe": "bir tane, tek"
    }
    , {
        "english": "only",
        "türkçe": "yalnız, sadece"
    }
    , {
        "english": "opposite",
        "türkçe": "zıt, karşı"
    }
    , {
        "english": "other",
        "türkçe": "diğer, başka"
    }
    , {
        "english": "our",
        "türkçe": "bizim"
    }
    , {
        "english": "out",
        "türkçe": "dış"
    }
    , {
        "english": "outside",
        "türkçe": "dışarı"
    }
    , {
        "english": "over",
        "türkçe": "sona ermiş, üstünde"
    }
    , {
        "english": "paper",
        "türkçe": "kağıt"
    }
    , {
        "english": "part",
        "türkçe": "ayırmak, kısmen"
    }
    , {
        "english": "party",
        "türkçe": "parti"
    }, {
        "english": "past",
        "türkçe": "geçmiş"
    }
    , {
        "english": "pen",
        "türkçe": "tükenmez kalem"
    }
    , {
        "english": "people",
        "türkçe": "insan"
    }
    , {
        "english": "perfect",
        "türkçe": "mükemmel, kusursuz"
    }
    , {
        "english": "phone",
        "türkçe": "telefon, telefon etmek"
    }
    , {
        "english": "picture",
        "türkçe": "resim"
    }
    , {
        "english": "pink",
        "türkçe": "pembe"
    }
    , {
        "english": "place",
        "türkçe": "yer, mekan"
    }
    , {
        "english": "plus",
        "türkçe": "artı, potizif"
    }
    , {
        "english": "police",
        "türkçe": "polis"
    }
    , {
        "english": "poor",
        "türkçe": "zavallı, sefil"
    }
    , {
        "english": "possible",
        "türkçe": "mümkün, olası"
    }
    , {
        "english": "power",
        "türkçe": "güç, enerji"
    }
    , {
        "english": "problem",
        "türkçe": "sorun, problem"
    }
    , {
        "english": "programme",
        "türkçe": "program, yayın"
    }
    , {
        "english": "quarter",
        "türkçe": "çeyrek"
    }
    , {
        "english": "quick",
        "türkçe": "hızlı, çabuk"
    }
    , {
        "english": "ready",
        "türkçe": "hazır"
    }
    , {
        "english": "really",
        "türkçe": "gerçekten"
    }
    , {
        "english": "relationship",
        "türkçe": "ilişki"
    }
    , {
        "english": "restaurant",
        "türkçe": "restoran, lokanta"
    }
    , {
        "english": "right",
        "türkçe": "gerçek, sağ"
    }
    , {
        "english": "room",
        "türkçe": "oda"
    }
    , {
        "english": "rude",
        "türkçe": "kaba"
    }
    , {
        "english": "rule",
        "türkçe": "	kural, talimat"
    }
    , {
        "english": "sad",
        "türkçe": "üzgün"
    }
    , {
        "english": "salt",
        "türkçe": "tuz"
    }
    , {
        "english": "same",
        "türkçe": "aynı"
    }
    , {
        "english": "sandwich",
        "türkçe": "sandviç"
    }
    , {
        "english": "saturday",
        "türkçe": "cumartesi"
    }
    , {
        "english": "school",
        "türkçe": "okul"
    }
    , {
        "english": "sea	",
        "türkçe": "deniz"
    }
    , {
        "english": "september",
        "türkçe": "eylül"
    }
    , {
        "english": "serious	",
        "türkçe": "ciddi"
    }
    , {
        "english": "several",
        "türkçe": "birkaç"
    }
    , {
        "english": "shoe",
        "türkçe": "ayakkabı"
    }
    , {
        "english": "short",
        "türkçe": "kısa"
    }
    , {
        "english": "shower",
        "türkçe": "duş"
    }
    , {
        "english": "since",
        "türkçe": "den beri"
    }
    , {
        "english": "sir",
        "türkçe": "sör, beyefendi"
    }
    , {
        "english": "sister",
        "türkçe": "	kız kardeş"
    }
    , {
        "english": "slow",
        "türkçe": "yavaş"
    }
    , {
        "english": "small",
        "türkçe": "küçük"
    }
    , {
        "english": "so",
        "türkçe": "yani"
    }
    , {
        "english": "some",
        "türkçe": "bazı"
    }
    , {
        "english": "somebody",
        "türkçe": "birisi"
    }
    , {
        "english": "someone",
        "türkçe": "	biri, birisi"
    }
    , {
        "english": "sometimes",
        "türkçe": "bazen"
    }
    , {
        "english": "somewhere",
        "türkçe": "bir yerde"
    }
    , {
        "english": "son",
        "türkçe": "erkek çocuk, oğul"
    }
    , {
        "english": "sorry",
        "türkçe": "üzgün, özür"
    }
    , {
        "english": "spoon",
        "türkçe": "kaşık"
    }
    , {
        "english": "street",
        "türkçe": "cadde"
    }
    , {
        "english": "stupid",
        "türkçe": "aptal"
    }
    , {
        "english": "such",
        "türkçe": "bu gibi"
    }
    , {
        "english": "sugar",
        "türkçe": "şeker"
    }
    , {
        "english": "summer",
        "türkçe": "yaz"
    }
    , {
        "english": "sun",
        "türkçe": "güneş"
    }
    , {
        "english": "sunday",
        "türkçe": "pazar"
    }
    , {
        "english": "sure",
        "türkçe": "kesin, emin"
    }
    , {
        "english": "surname",
        "türkçe": "	soyadı"
    }
    , {
        "english": "sweet",
        "türkçe": "tatlı"
    }
    , {
        "english": "taxi",
        "türkçe": "taksi"
    }
    , {
        "english": "tea",
        "türkçe": "çay"
    }
    , {
        "english": "teacher",
        "türkçe": "öğretmen"
    }
    , {
        "english": "team",
        "türkçe": "takım"
    }
    , {
        "english": "telephone	",
        "türkçe": "telefon"
    }
    , {
        "english": "television",
        "türkçe": "televizyon"
    }
    , {
        "english": "than",
        "türkçe": "göre"
    }
    , {
        "english": "that",
        "türkçe": "şu, öteki"
    }
    , {
        "english": "their",
        "türkçe": "onların"
    }
    , {
        "english": "them",
        "türkçe": "onları, onlara"
    }
    , {
        "english": "then",
        "türkçe": "	o zaman, öyleyse"
    }
    , {
        "english": "there",
        "türkçe": "şuradaki"
    }
    , {
        "english": "these",
        "türkçe": "bunlar"
    }
    , {
        "english": "they",
        "türkçe": "onlar"
    }
    , {
        "english": "thing",
        "türkçe": "şey"
    }
    , {
        "english": "this",
        "türkçe": "bu"
    }
    , {
        "english": "those",
        "türkçe": "şunlar"
    }
    , {
        "english": "thursday",
        "türkçe": "Perşembe"
    }
    , {
        "english": "ticket",
        "türkçe": "bilet, etiket"
    }
    , {
        "english": "time",
        "türkçe": "zaman"
    }
    , {
        "english": "to",
        "türkçe": "e doğru, göre"
    }
    , {
        "english": "today",
        "türkçe": "bugün"
    }
    , {
        "english": "together",
        "türkçe": "beraber"
    }
    , {
        "english": "tomorrow",
        "türkçe": "yarın"
    }
    , {
        "english": "tonight",
        "türkçe": "bu gece"
    }
    , {
        "english": "too",
        "türkçe": "dahi, çok"
    }
    , {
        "english": "top",
        "türkçe": "en yüksek, en iyi"
    }
    , {
        "english": "total",
        "türkçe": "	toplam, bütün"
    }
    , {
        "english": "town",
        "türkçe": "kent, ilçe, kasaba"
    }
    , {
        "english": "traffic",
        "türkçe": "trafik"
    }
    , {
        "english": "tuesday",
        "türkçe": "salı"
    }
    , {
        "english": "twice",
        "türkçe": "	iki kere"
    }
    , {
        "english": "under",
        "türkçe": "alt, altında"
    }
    , {
        "english": "unless",
        "türkçe": "olmadıkça"
    }
    , {
        "english": "until",
        "türkçe": "inceye kadar"
    }
    , {
        "english": "up",
        "türkçe": "yukarı"
    }
    , {
        "english": "upstairs",
        "türkçe": "yukarıdaki"
    }
    , {
        "english": "urgent",
        "türkçe": "acil"
    }
    , {
        "english": "us",
        "türkçe": "	bizi, bize"
    }
    , {
        "english": "useful",
        "türkçe": "kullanışlı, işe yarar"
    }
    , {
        "english": "usual",
        "türkçe": "olağan"
    }
    , {
        "english": "very",
        "türkçe": "çok"
    }
    , {
        "english": "warm",
        "türkçe": "	ısınma, ılık"
    }
    , {
        "english": "water",
        "türkçe": "su"
    }
    , {
        "english": "way",
        "türkçe": "yol"
    }
    , {
        "english": "we",
        "türkçe": "biz"
    }
    , {
        "english": "weak",
        "türkçe": "zayıf, kuvvetsiz"
    }
    , {
        "english": "weather",
        "türkçe": "	hava, hava durumu"
    }
    , {
        "english": "wednesday",
        "türkçe": "çarşamba"
    }
    , {
        "english": "week",
        "türkçe": "hafta"
    }
    , {
        "english": "well",
        "türkçe": "iyi, hoş, iyi durum"
    }
    , {
        "english": "what",
        "türkçe": "ne"
    }
    , {
        "english": "whatever",
        "türkçe": "her ne"
    }
    , {
        "english": "when",
        "türkçe": "	ne zaman"
    }
    , {
        "english": "whenever",
        "türkçe": "	dığında, diğinde"
    }
    , {
        "english": "where",
        "türkçe": "nere, nerede"
    }
    , {
        "english": "while",
        "türkçe": "iken"
    }
    , {
        "english": "white",
        "türkçe": "beyaz"
    }
    , {
        "english": "who",
        "türkçe": "kim"
    }
    , {
        "english": "whoever",
        "türkçe": "	her kim"
    }
    , {
        "english": "whole",
        "türkçe": "bütün"
    }
    , {
        "english": "whose",
        "türkçe": "kimin"
    }
    , {
        "english": "why",
        "türkçe": "	neden, niçin"
    }
    , {
        "english": "wife",
        "türkçe": "	eş, hanım"
    }
    , {
        "english": "will",
        "türkçe": "istek"
    }
    , {
        "english": "window",
        "türkçe": "pencere"
    }
    , {
        "english": "with",
        "türkçe": "ile, birlikte"
    }
    , {
        "english": "within",
        "türkçe": "iç, içinde"
    }
    , {
        "english": "without",
        "türkçe": "olmadan, medikçe, maksızın"
    }
    , {
        "english": "woman",
        "türkçe": "kadın"
    }
    , {
        "english": "wonderful",
        "türkçe": "harika"
    }
    , {
        "english": "word",
        "türkçe": "kelime"
    }
    , {
        "english": "world",
        "türkçe": "dünya"
    }
    , {
        "english": "worse",
        "türkçe": "daha kötü"
    }
    , {
        "english": "worst",
        "türkçe": "en kötüsü"
    }
    , {
        "english": "wrong",
        "türkçe": "yanlış"
    }
    , {
        "english": "year",
        "türkçe": "sene"
    }
    , {
        "english": "yellow",
        "türkçe": "sarı"
    }
    , {
        "english": "yes",
        "türkçe": "evet"
    }, { "english": "yesterday", "türkçe": "dün" }, { "english": "yet", "türkçe": "hala, henüz" }, { "english": "young", "türkçe": "küçük, genç" }, { "english": "your", "türkçe": "	senin, sizin" }, { "english": "zero", "türkçe": "yapasıfırbilen" }
]


const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    let random = Math.floor(Math.random() * words.length);
    e.preventDefault();
    word.innerText = words[random].english
    meaning.innerText = words[random].türkçe
})
