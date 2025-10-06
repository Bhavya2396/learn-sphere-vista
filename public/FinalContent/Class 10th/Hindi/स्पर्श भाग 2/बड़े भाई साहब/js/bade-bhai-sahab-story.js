/**
 * Story content and functionality for Bade Bhai Sahab
 */

// CRITICAL DEBUG: Confirm this file is being loaded
console.log('=== BADE-BHAI-SAHAB-STORY.JS LOADED ===');
console.log('This should appear if bade-bhai-sahab-story.js is being executed');

// Global variables to track narration state
let autoNarrationEnabled = true; // Set to true to match reference file behavior
let narrationDisabledByUser = false;
let currentStoryPart = 1;

// Track if we're in the story module
let isStoryModuleActive = false;

// Flag to track if initial narration has been triggered by main.js
window.initialStoryNarrationDone = false;

// Debug flag to enable verbose logging
const DEBUG_NARRATION = true;

// Story parts data
const storyParts = [
    {
        title: "खंड 4: कहानी (बड़े भाई साहब)",
        content: `
            <div class="story-text">
                <p>(1)</p>
                <p>"मेरे भाई साहब मुझसे पाँच साल बड़े, लेकिन केवल तीन दरजे आगे। उन्होंने भी उसी उम्र में पढ़ना शुरू किया था, जब मैंने शुरू किया लेकिन तालीम जैसे महत्त्व के मामले में वह जल्दबाजी से काम लेना पसंद न करते थे। इस भवन की बुनियाद खूब मज़बूत डालना चाहते थे, जिस पर आलीशान महल बन सके। एक साल का काम दो साल में करते थे। कभी-कभी तीन साल भी लग जाते थे। बुनियाद ही पुख्ता न हो, तो मकान कैसे पायेदार बने।</p>
                
                <p>मैं छोटा था, वह बड़े थे। मेरी उम्र नौ साल की थी, वह चौदह साल के थे। उन्हें मेरी तम्बीह और निगरानी का पूरा और जन्मसिद्ध अधिकार था और मेरी शालीनता इसी में थी कि उनके हुक्म को कानून समझें।</p>
                
                <p>वह स्वभाव से बड़े अध्ययनशील थे। हरदम किताब खोले बैठे रहते और शायद दिमाग को आराम देने के लिए कभी कॉपी पर, किताब के हाशियों पर चिड़ियों, कुत्तों, बिल्लियों की तसवीरें बनाया करते थे। कभी-कभी एक ही नाम या शब्द या वाक्य दस-बीस बार लिख डालते। कभी एक शेर को बार-बार सुंदर अक्षरों में नकल करते। कभी ऐसी शब्द-रचना करते, जिसमें न कोई अर्थ होता, न कोई सामंजस्य। मसलन एक बार उनकी कॉपी पर मैंने यह इबारत देखी-
स्पेशल, अमीना, भाइयों-भाइयों, दरअसल, भाई-भाई। राधेश्याम, श्रीयुत राधेश्याम, एक घंटे तक
इसके बाद एक आदमी का चेहरा बना हुआ था। मैंने बहुत चेष्टा की कि इस पहेली का कोई अर्थ निकालूँ, लेकिन असफल रहा। और उनसे पूछने का साहस न हुआ। वह
नौवीं जमात में थे, मैं पाँचवीं में। उनकी रचनाओं को समझना मेरे लिए छोटा मुँह बड़ी बात थी।</p>
                
                <p>मेरा जी पढ़ने में बिलकुल न लगता था। एक घंटा भी किताब लेकर बैठना
पहाड़ था। मौका पाते ही होस्टल से निकलकर मैदान में आ जाता और कभी कंकरियाँ उछालता, कभी कागज़ की तितलियाँ उड़ाता और कहीं कोई साथी मिल गया, तो पूछना ही क्या। कभी चारदीवारी पर चढ़कर नीचे कूद रहे हैं। कभी फाटक पर सवार, उसे आगे-पीछे चलाते हुए मोटरकार का आनंद उठा रहे हैं, लेकिन कमरे में आते ही भाई साहब का वह
रुद्र-रूप देखकर प्राण सूख जाते। उनका पहला सवाल यह होता-</p>
                
                <p>'कहाँ थे'? हमेशा यही सवाल, इसी ध्वनि में हमेशा पूछा जाता था और इसका जवाब मेरे पास केवल मौन था। मेरा मौन कह देता था कि मुझे अपना अपराध स्वीकार है और भाई साहब के लिए उसके सिवा और कोई इलाज न था कि स्नेह और रोष से मिले हुए शब्दों में मेरा सत्कार करें।</p>
                
                <p>"इस तरह अंग्रेज़ी पढ़ोगे, तो जिंदगी भर पढ़ते रहोगे और एक हर्फ़ न आएगा। अंग्रेज़ी पढ़ना कोई हँसी-खेल नहीं है कि जो चाहे, पढ़ ले, नहीं ऐरा-गैरा नत्थू-खैरा सभी अंग्रेज़ी के विद्वान हो जाते। यहाँ रात-दिन आँखें फोड़नी पड़ती हैं और खून जलाना पड़ता है, तब कहीं यह विद्या आती है। और आती क्या है, हाँ कहने को आ जाती है। बड़े-बड़े विद्वान भी शुद्ध अंग्रेज़ी नहीं लिख सकते, बोलना तो दूर रहा। और मैं कहता हूँ, तुम कितने
घोंघा हो कि मुझे देखकर भी सबक नहीं लेते। मैं कितनी मिहनत करता हूँ, यह तुम अपनी आँखों से देखते हो, अगर नहीं देखते, तो यह तुम्हारी आँखों का कसूर है, तुम्हारी बुद्धि का कसूर है। इतने मेले-तमाशे होते हैं, मुझे तुमने कभी देखने जाते देखा है? रोज़ ही क्रिकेट और हॉकी मैच होते हैं। मैं पास नहीं फटकता। हमेशा पढ़ता रहता हूँ। उस पर भी एक-एक दरजे में दो-दो, तीन-तीन साल पड़ा रहता हूँ, फिर भी तुम कैसे आशा करते हो कि तुम यों खेल-कूद में वक्त गँवाकर पास हो जाओगे? मुझे तो दो ही तीन साल लगते हैं, तुम उम्र-भर इसी दरजे में पड़े सड़ते रहोगे? अगर तुम्हें इस तरह उम्र गँवानी है, तो बेहतर है, घर चले जाओ और मज़े से गुल्ली-डंडा खेलो। दादा की गाढ़ी कमाई के रुपये क्यों बरबाद करते हो?"</p>
                
                <p>मैं यह लताड़ सुनकर आँसू बहाने लगता। जवाब ही क्या था। अपराध तो मैंने किया, लताड़ कौन सहे? भाई साहब उपदेश की कला में निपुण थे। ऐसी-ऐसी लगती बातें कहते, ऐसे-ऐसे
सूक्ति-बाण चलाते कि मेरे जिगर के टुकड़े-टुकड़े हो जाते और हिम्मत टूट जाती। इस तरह जान तोड़कर मेहनत करने की शक्ति मैं अपने में न पाता था और उस निराशा में ज़रा देर के लिए मैं सोचने लगता- 'क्यों न घर चला जाऊँ। जो काम मेरे बूते के बाहर है, उसमें हाथ डालकर क्यों अपनी जिंदगी खराब करूँ।' मुझे अपना मूर्ख रहना मंजूर था, लेकिन उतनी मेहनत से मुझे तो चक्कर आ जाता था।</p>
                
                
                <div class="vocabulary-note">
                    <div class="word">बुनियाद</div>
                    <div class="definition">नींव/आधार</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">पुख्ता</div>
                    <div class="definition">मज़बूत</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">पायेदार</div>
                    <div class="definition">टिकाऊ</div>
                </div>
                
                <p>लेकिन घंटे-दो घंटे के बाद निराशा के बादल फट जाते और मैं इरादा करता कि आगे से खूब जी लगाकर पढूँगा। चटपट एक टाइम-टेबिल बना डालता।</p>

                <p>टाइम-टेबिल में खेलकूद की मद बिलकुल उड़ जाती।</p>

                <p>* प्रातःकाल छः बजे उठना, मुँह-हाथ धो, नाश्ता कर, पढ़ने बैठ जाना।</p>

                <p>* छः से आठ तक अंग्रेज़ी, आठ से नौ तक हिसाब, नौ से साढ़े नौ तक इतिहास, फिर भोजन और स्कूल।</p>

                <p>* साढ़े तीन बजे स्कूल से वापिस होकर आधा घंटा आराम, चार से पाँच तक भूगोल, पाँच से छः तक ग्रामर, आधा घंटा होस्टल के सामने ही टहलना, साढ़े छः से सात तक अंग्रेज़ी कंपोजीशन, फिर भोजन करके आठ से नौ तक अनुवाद, नौ से दस तक हिंदी, दस से ग्यारह तक विविध विषय, फिर विश्राम।</p>

                <p>मगर टाइम-टेबिल बना लेना एक बात है, उस पर अमल करना दूसरी बात। पहले ही दिन उसकी अवहेलना शुरू हो जाती। मैदान की वह सुखद हरियाली, हवा के हलके हलके झोंके, फुटबाल की वह उछल-कूद, कबड्डी के वह दाँव-घात, वॉलीबाल की वह तेज़ी और फुरती, मुझे अज्ञात और अनिवार्य शक्ति से खींच ले जाती थी।</p>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. बड़े भाई साहब छोटे भाई से कितने साल बड़े थे?</div>
                <div class="comprehension-question">2. बड़े भाई साहब की पढ़ाई के संबंध में क्या विशेषता थी?</div>
                <div class="comprehension-question">3. बड़े भाई साहब कितनी कक्षा में थे और छोटे भाई कितनी में?</div>
                <div class="comprehension-question">4. बड़े भाई साहब आराम के लिए क्या करते थे?</div>
            </div>
        `
    },
    {
        title: "भाग 2",
        content: `
            <div class="story-text">
                <p>(2)</p>
                <p>सालाना इम्तिहान हुआ।</p>
                
                <p>भाई साहब फ़ेल हो गए, मैं पास हो गया और दरजे में प्रथम आया। मेरे और उनके बीच में केवल दो साल का अंतर रह गया। जी में आया, भाई साहब को आड़े हाथों लूँ- 'आपकी वह घोर तपस्या कहाँ गई? मुझे देखिए, मजे से खेलता भी रहा और दरजे में अव्वल भी हूँ।'</p>
                
                <p>लेकिन वह इतने दुखी और उदास थे कि मुझे उनसे दिली हमदर्दी हुई और उनके घाव पर नमक छिड़कने का विचार ही लज्जास्पद जान पड़ा। हाँ, अब मुझे अपने ऊपर कुछ
अभिमान हुआ और आत्मसम्मान भी बढ़ा। भाई साहब का वह रौब मुझ पर न रहा। आजादी से खेलकूद में शरीक होने लगा। दिल मज़बूत था। अगर उन्होंने फिर मेरी फ़जीहत की, तो साफ़ कह दूँगा- 'आपने अपना खून जलाकर कौन-सा तीर मार लिया। मैं तो खेलते-कूदते दरजे में अव्वल आ गया।' ज़बान से यह हेकड़ी जताने का साहस न होने पर भी मेरे रंग-ढंग से साफ़ ज़ाहिर होता था कि भाई साहब का वह आतंक मुझ पर नहीं था।</p>
                
                <p>भाई साहब ने इसे भाँप लिया-उनकी सहज बुद्धि बड़ी तीव्र थी और एक दिन जब मैं भोर का सारा समय गुल्ली-डंडे की भेंट करके ठीक भोजन के समय लौटा, तो भाई साहब ने मानो तलवार खींच ली और मुझ पर टूट पड़े- "देखता हूँ, इस साल पास हो गए और दरजे में अव्वल आ गए, तो तुम्हें दिमाग हो गया है, मगर भाईजान, घमंड तो बड़े-बड़े का नहीं रहा, तुम्हारी क्या हस्ती है? इतिहास में
रावण का हाल तो पढ़ा ही होगा। उसके चरित्र से तुमने कौन-सा उपदेश लिया? या यों ही पढ़ गए? महज़ इम्तिहान पास कर लेना कोई चीज़ नहीं, असल चीज़ है बुद्धि का विकास। जो कुछ पढ़ो, उसका अभिप्राय समझो।</p>
                
                <p>रावण भूमंडल का स्वामी था। ऐसे राजाओं को चक्रवर्ती कहते हैं। आजकल अंग्रेज़ों के राज्य का विस्तार बहुत बढ़ा हुआ है, पर इन्हें चक्रवर्ती नहीं कह सकते। संसार में अनेक राष्ट्र अंग्रेज़ों का आधिपत्य स्वीकार नहीं करते, बिलकुल स्वाधीन हैं। रावण चक्रवर्ती राजा था, संसार के सभी महीप उसे कर देते थे। बड़े-बड़े देवता उसकी गुलामी करते थे। आग और पानी के देवता भी उसके दास थे, मगर उसका अंत क्या हुआ? घमंड ने उसका नाम-निशान तक मिटा दिया, कोई उसे एक चुल्लू पानी देने वाला भी न बचा। आदमी और जो कुकर्म चाहे करे, पर अभिमान न करे, इतराये नहीं। अभिमान किया और दीन-दुनिया दोनों से गया।</p>
                
                <p>शैतान का हाल भी पढ़ा ही होगा। उसे यह अभिमान हुआ था कि ईश्वर का उससे बढ़कर सच्चा भक्त कोई है ही नहीं। अंत में यह हुआ कि स्वर्ग से नरक में ढकेल दिया गया। शाहेरूम ने भी एक बार अहंकार किया था। भीख माँग-माँगकर मर गया।</p>
                
                <p>तुमने तो अभी केवल एक दरजा पास किया है और अभी से तुम्हारा सिर फिर गया, तब तो तुम आगे पढ़ चुके। यह समझ लो कि तुम अपनी मेहनत से नहीं पास हुए, अंधे के हाथ बटेर लग गई। मगर बटेर केवल एक बार हाथ लग सकती है, बार-बार नहीं लग सकती। कभी-कभी गुल्ली-डंडे में भी अंधा-चोट निशाना पड़ जाता है। इससे कोई सफल खिलाड़ी नहीं हो जाता। सफल खिलाड़ी वह है, जिसका कोई निशाना खाली न जाए।</p>
                
                <p>मेरे फेल होने पर मत जाओ। मेरे दरजे में आओगे, तो
दाँतों पसीना आ जाएगा, जब अलजबरा और जामेट्री के लोहे के चने चबाने पड़ेंगे और इंगलिस्तान का इतिहास पढ़ना पड़ेगा। बादशाहों के नाम याद रखना आसान नहीं। आठ-आठ हेनरी हो गुज़रे हैं। कौन-सा कांड किस हेनरी के समय में हुआ, क्या यह याद कर लेना आसान समझते हो? हेनरी सातवें की जगह हेनरी आठवाँ लिखा और सब नंबर गायब। सफ़ाचट। सिफ़र भी न मिलेगा, सिफ़र भी। हो किस खयाल में। दरजनों तो जेम्स हुए हैं, दरजनों विलियम, कोड़ियों चार्ल्स। दिमाग चक्कर खाने लगता है। आंधी रोग हो जाता है। इन अभागों को नाम भी न जुड़ते थे। एक ही नाम के पीछे दोयम, सोयम, चहारूम, पंचुम लगाते चले गए। मुझसे पूछते, तो दस लाख नाम बता देता।</p>
                
                <p>और जामेट्री तो बस, खुदा ही पनाह।
अ ब ज की जगह अजब लिख दिया और सारे नंबर कट गए। कोई इन निर्दयी मुमतहिनों से नहीं पूछता कि आखिर अ ब ज और अजब में क्या फ़र्क है, और व्यर्थ की बात के लिए क्यों छात्रों का खून करते हो। दाल-भात-रोटी खाई या भात-दाल-रोटी खाई, इसमें क्या रखा है, मगर इन परीक्षकों को क्या परवाह। वह तो वही देखते हैं जो पुस्तक में लिखा है। चाहते हैं कि लड़के अक्षर-अक्षर रट डालें। और इसी
रटंत का नाम शिक्षा रख छोड़ा है। और आखिर इन बे-सिर-पैर की बातों के पढ़ने से फ़ायदा? इस रेखा पर वह लंब गिरा दो, तो आधार लंब से दुगुना होगा। पूछिए, इससे प्रयोजन? दुगुना नहीं, चौगुना हो जाए, या आधा ही रहे, मेरी बला से, लेकिन परीक्षा में पास होना है, तो यह सब
खुराफ़ात याद करनी पड़ेगी।</p>
                
                <p>कह दिया-
'समय की पाबंदी' पर एक निबंध लिखो, जो चार पन्नों से कम न हो। अब आप कॉपी सामने खोले, कलम हाथ में लिए उसके नाम को रोइए। कौन नहीं जानता कि समय की पाबंदी बहुत अच्छी बात है। इससे आदमी के जीवन में संयम आ जाता है, दूसरों का उस पर स्नेह होने लगता है और उसके कारोबार में उन्नति होती है, लेकिन इस जरा-सी बात पर चार पन्ने कैसे लिखें? जो बात एक वाक्य में कही जा सके, उसे चार पन्नों में लिखने की ज़रूरत ? मैं तो इसे
हिमाकत कहता हूँ। यह तो समय की किफ़ायत नहीं, बल्कि उसका दुरुपयोग है कि व्यर्थ में किसी बात को ठूंस दिया जाए। हम चाहते हैं, आदमी को जो कुछ कहना हो, चटपट कह दे और अपनी राह ले। मगर नहीं, आपको चार पन्ने रँगने पड़ेंगे, चाहे जैसे लिखिए और पन्ने भी पूरे फुलस्केप आकार के। यह छात्रों पर
अत्याचार नहीं, तो और क्या है? अनर्थ तो यह है कि कहा जाता है,
संक्षेप में लिखो। समय की पाबंदी पर संक्षेप में एक निबंध लिखो, जो चार पन्नों से कम न हो। ठीक। संक्षेप में तो चार पन्ने हुए, नहीं शायद सौ-दो सौ पन्ने लिखवाते। तेज़ भी दौड़िए और धीरे-धीरे भी। है उलटी बात, है या नहीं? बालक भी इतनी-सी बात समझ सकता है, लेकिन इन अध्यापकों को इतनी तमीज़ भी नहीं। उस पर दावा है कि हम अध्यापक हैं। मेरे दरजे में आओगे लाला, तो ये सारे
पापड़ बेलने पड़ेंगे और तब आटे-दाल का भाव मालूम होगा। इस दरजे में अव्वल आ गए हो, तो
ज़मीन पर पाँव नहीं रखते। इसलिए मेरा कहना मानिए। लाख फ़ेल हो गया हूँ, लेकिन तुमसे बड़ा हूँ, संसार का मुझे तुमसे कहीं ज़्यादा अनुभव है। जो कुछ कहता हूँ उसे
गिरह बाँधिए, नहीं पछताइएगा।</p>
                
                <p>स्कूल का समय निकट था, नहीं ईश्वर जाने यह उपदेश-माला कब समाप्त होती। भोजन आज मुझे निःस्वाद-सा लग रहा था। जब पास होने पर यह तिरस्कार हो रहा है, तो फ़ेल हो जाने पर तो शायद प्राण ही ले लिए जाएँ। भाई साहब ने अपने दरजे की पढ़ाई का जो भयंकर चित्र खींचा था, उसने मुझे भयभीत कर दिया। स्कूल छोड़कर घर नहीं भागा, यही ताज्जुब है, लेकिन इतने तिरस्कार पर भी पुस्तकों में मेरी अरुचि ज्यों-की-त्यों बनी रही। खेल-कूद का कोई अवसर हाथ से न जाने देता। पढ़ता भी, मगर बहुत कम। बस, इतना कि रोज़ टास्क पूरा हो जाए और दरजे में जलील न होना पड़े। अपने ऊपर जो विश्वास पैदा हुआ था, वह फिर लुप्त हो गया और फिर चोरों का-सा जीवन कटने लगा।</p>
                <p>'कहाँ थे'? हमेशा यही सवाल, इसी ध्वनि में हमेशा पूछा जाता था और इसका जवाब मेरे पास केवल मौन था। मेरा मौन कह देता था कि मुझे अपना अपराध स्वीकार है और भाई साहब के लिए उसके सिवा और कोई इलाज न था कि स्नेह और <span class="highlight-vocab">रोष<span class="vocab-tooltip">क्रोध/गुस्सा</span></span> से मिले हुए शब्दों में मेरा सत्कार करें।</p>
                
                <div class="vocabulary-note">
                    <div class="word">रोष</div>
                    <div class="definition">क्रोध/गुस्सा</div>
                </div>
                
                <p>"इस तरह अंग्रेज़ी पढ़ोगे, तो जिंदगी भर पढ़ते रहोगे और एक <span class="highlight-vocab">हर्फ़<span class="vocab-tooltip">अक्षर</span></span> न आएगा। अंग्रेज़ी पढ़ना कोई हँसी-खेल नहीं है कि जो चाहे, पढ़ ले, नहीं <span class="highlight-vocab">ऐरा-गैरा नत्थू-खैरा<span class="vocab-tooltip">हर कोई</span></span> सभी अंग्रेज़ी के विद्वान हो जाते। यहाँ रात-दिन आँखें फोड़नी पड़ती हैं और खून जलाना पड़ता है, तब कहीं यह विद्या आती है। और आती क्या है, हाँ कहने को आ जाती है। बड़े-बड़े विद्वान भी शुद्ध अंग्रेज़ी नहीं लिख सकते, बोलना तो दूर रहा। और मैं कहता हूँ, तुम कितने <span class="highlight-vocab">घोंघा<span class="vocab-tooltip">मूर्ख</span></span> हो कि मुझे देखकर भी सबक नहीं लेते। मैं कितनी <span class="highlight-vocab">मिहनत<span class="vocab-tooltip">मेहनत/परिश्रम</span></span> करता हूँ, यह तुम अपनी आँखों से देखते हो, अगर नहीं देखते, तो यह तुम्हारी आँखों का कसूर है, तुम्हारी बुद्धि का कसूर है।"</p>
                
                <div class="vocabulary-note">
                    <div class="word">हर्फ़</div>
                    <div class="definition">अक्षर</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">ऐरा-गैरा नत्थू-खैरा</div>
                    <div class="definition">हर कोई</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">घोंघा</div>
                    <div class="definition">मूर्ख</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">मिहनत</div>
                    <div class="definition">मेहनत/परिश्रम</div>
                </div>
                
                <p>"इतने मेले-तमाशे होते हैं, मुझे तुमने कभी देखने जाते देखा है? रोज़ ही क्रिकेट और हॉकी मैच होते हैं। मैं पास नहीं फटकता। हमेशा पढ़ता रहता हूँ। उस पर भी एक-एक दरजे में दो-दो, तीन-तीन साल पड़ा रहता हूँ, फिर भी तुम कैसे आशा करते हो कि तुम यों खेल-कूद में वक्त गँवाकर पास हो जाओगे? मुझे तो दो ही तीन साल लगते हैं, तुम उम्र-भर इसी दरजे में पड़े सड़ते रहोगे? अगर तुम्हें इस तरह उम्र गँवानी है, तो बेहतर है, घर चले जाओ और मज़े से गुल्ली-डंडा खेलो। दादा की गाढ़ी कमाई के रुपये क्यों बरबाद करते हो?"</p>
                
                <p>मैं यह <span class="highlight-vocab">लताड़<span class="vocab-tooltip">डाँट-डपट</span></span> सुनकर आँसू बहाने लगता। जवाब ही क्या था। अपराध तो मैंने किया, लताड़ कौन सहे? भाई साहब उपदेश की कला में निपुण थे। ऐसी-ऐसी लगती बातें कहते, ऐसे-ऐसे <span class="highlight-vocab">सूक्ति-बाण<span class="vocab-tooltip">सुंदर और प्रभावशाली वाक्य</span></span> चलाते कि मेरे जिगर के टुकड़े-टुकड़े हो जाते और हिम्मत टूट जाती। इस तरह जान तोड़कर मेहनत करने की शक्ति मैं अपने में न पाता था और उस निराशा में ज़रा देर के लिए मैं सोचने लगता- 'क्यों न घर चला जाऊँ। जो काम मेरे बूते के बाहर है, उसमें हाथ डालकर क्यों अपनी जिंदगी खराब करूँ।' मुझे अपना मूर्ख रहना मंजूर था, लेकिन उतनी मेहनत से मुझे तो चक्कर आ जाता था।</p>
                
                <div class="vocabulary-note">
                    <div class="word">लताड़</div>
                    <div class="definition">डाँट-डपट</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">सूक्ति-बाण</div>
                    <div class="definition">सुंदर और प्रभावशाली वाक्य</div>
                </div>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. छोटे भाई का पढ़ाई के प्रति क्या रवैया था?</div>
                <div class="comprehension-question">2. कमरे में आने पर बड़े भाई साहब छोटे भाई से क्या पूछते थे?</div>
                <div class="comprehension-question">3. बड़े भाई साहब के अनुसार अंग्रेज़ी पढ़ने के लिए क्या करना पड़ता है?</div>
                <div class="comprehension-question">4. बड़े भाई साहब किस कला में निपुण थे?</div>
            </div>
        `
    },
    {
        title: "आत्मगौरव और अनुभव का महत्व",
        content: `
            <div class="story-text">
                <p>(3)</p>
                <p>"फिर सालाना इम्तिहान हुआ और कुछ ऐसा संयोग हुआ कि
मैं फिर पास हुआ और भाई साहब फिर फ़ेल हो गए। मैंने बहुत मेहनत नहीं की, पर न जाने कैसे दरजे में अव्वल आ गया। मुझे खुद अचरज हुआ। भाई साहब ने प्राणांतक परिश्रम किया। कोर्स का एक-एक शब्द चाट गए थे, दस बजे रात तक इधर, चार बजे भोर से उधर, छः से साढ़े नौ तक स्कूल जाने के पहले। मुद्रा कांतिहीन हो गई थी, मगर बेचारे फ़ेल हो गए। मुझे उन पर दया आती थी। नतीजा सुनाया गया, तो वह रो पड़े और मैं भी रोने लगा। अपने पास होने की खुशी आधी हो गई। मैं भी फेल हो गया होता, तो भाई साहब को इतना दुःख न होता, लेकिन विधि की बात कौन टाले !</p>
                
                <p>मेरे और भाई साहब के बीच में अब केवल
एक दरजे का अंतर और रह गया। मेरे मन में एक कुटिल भावना उदय हुई कि कहीं भाई साहब एक साल और फ़ेल हो जाएँ, तो मैं उनके बराबर हो जाऊँ, फिर वह किस आधार पर मेरी फ़जीहत कर सकेंगे, लेकिन मैंने इस विचार को दिल से बलपूर्वक निकाल डाला। आखिर वह मुझे मेरे हित के विचार से ही तो डाँटते हैं। मुझे इस वक्त अप्रिय लगता है अवश्य, मगर यह शायद उनके उपदेशों का ही असर है कि मैं दनादन पास हो जाता हूँ और इतने अच्छे नंबरों से।</p>
                
                <p>अब भाई साहब बहुत कुछ नरम पड़ गए थे। कई बार मुझे डाँटने का अवसर पाकर भी उन्होंने धीरज से काम लिया। शायद अब वह खुद समझने लगे थे कि मुझे डाँटने का अधिकार उन्हें नहीं रहा, या रहा भी, तो बहुत कम। मेरी स्वच्छंदता भी बढ़ी। मैं उनकी सहिष्णुता का अनुचित लाभ उठाने लगा। मुझे कुछ ऐसी धारणा हुई कि मैं पास ही हो जाऊँगा, पढूँ या न पढूँ, मेरी तकदीर बलवान है, इसलिए भाई साहब के डर से जो थोड़ा-बहुत पढ़ लिया करता था, वह भी बंद हुआ। मुझे
कनकौए उड़ाने का नया शौक पैदा हो गया था और अब सारा समय पतंगबाज़ी की ही भेंट होता था, फिर भी मैं भाई साहब का अदब करता था और उनकी नज़र बचाकर कनकौए उड़ाता था। मांझा देना, कन्ने बाँधना, पतंग टूर्नामेंट की तैयारियाँ आदि समस्याएँ सब गुप्त रूप से हल की जाती थीं। मैं भाई साहब को यह संदेह न करने देना चाहता था कि उनका सम्मान और लिहाज़ मेरी नज़रों में कम हो गया है।</p>
                
                <p>एक दिन संध्या समय, होस्टल से दूर मैं एक
कनकौआ लूटने बेतहाशा दौड़ा जा रहा था। आँखें आसमान की ओर थीं और मन उस आकाशगामी पथिक की ओर, जो मंद गति से झूमता पतन की ओर चला आ रहा था, मानो कोई आत्मा स्वर्ग से निकलकर विरक्त मन से नए संस्कार ग्रहण करने जा रही हो। बालकों की पूरी सेना लग्गे और झाड़दार बाँस लिए इनका स्वागत करने को दौड़ी आ रही थी। किसी को अपने आगे-पीछे की खबर न थी। सभी मानो उस पतंग के साथ ही आकाश में उड़ रहे थे, जहाँ सब कुछ समतल है, न मोटरकारें हैं, न ट्राम, न गाड़ियाँ।</p>
                
                <p>सहसा भाई साहब से मेरी मुठभेड़ हो गई, जो शायद बाज़ार से लौट रहे थे। उन्होंने वहीं हाथ पकड़ लिया और उग्र भाव से बोले- "इन बाज़ारी लौंडों के साथ धेले के कनकौए के लिए दौड़ते तुम्हें शर्म नहीं आती? तुम्हें इसका भी कुछ लिहाज़ नहीं कि अब नीची जमात में नहीं हो, बल्कि
आठवीं जमात में आ गए हो और मुझसे केवल एक दरजा नीचे हो। आख़िर आदमी को कुछ तो अपनी पोज़ीशन का खयाल रखना चाहिए।</p>
                
                <p>एक ज़माना था कि लोग आठवाँ दरजा पास करके नायब तहसीलदार हो जाते थे। मैं कितने ही मिडिलचियों को जानता हूँ, जो आज अव्वल दरजे के डिप्टी मैजिस्ट्रेट या सुपरिंटेंडेंट हैं। कितने ही आठवीं जमात वाले हमारे लीडर और समाचारपत्रों के संपादक हैं। बड़े-बड़े विद्वान उनकी मातहती में काम करते हैं और तुम उसी आठवें दरजे में आकर बाज़ारी लौंडों के साथ कनकौए के लिए दौड़ रहे हो। मुझे तुम्हारी इस कम अकली पर दुःख होता है। तुम ज़हीन हो, इसमें शक नहीं, लेकिन वह ज़ेहन किस काम का जो हमारे आत्मगौरव की हत्या कर डाले। तुम अपने दिल में समझते होगे, मैं भाई साहब से महज़ एक दरजा नीचे हूँ और अब उन्हें मुझको कुछ कहने का हक़ नहीं है, लेकिन यह तुम्हारी गलती है। मैं तुमसे पाँच साल बड़ा हूँ और चाहो आज तुम मेरी ही ज़मात में आ जाओ...
...और परीक्षकों का यही हाल है, तो निस्संदेह अगले साल तुम मेरे समकक्ष हो जाओगे और शायद एक साल बाद मुझसे आगे भी निकल जाओ, लेकिन मुझमें और तुममें जो पाँच साल का अंतर है, उसे तुम क्या, खुदा भी नहीं मिटा सकता। मैं तुमसे पाँच साल बड़ा हूँ और हमेशा रहूँगा। मुझे दुनिया का और ज़िंदगी का जो तजुर्बा है, तुम उसकी बराबरी नहीं कर सकते, चाहे तुम एम.ए. और डी. फ़िल. और डी. लिट्. ही क्यों न हो जाओ।</p>
                
                <p>समझ किताबें पढ़ने से नहीं आती, दुनिया देखने से आती है।
हमारी अम्माँ ने कोई दरजा नहीं पास किया और दादा भी शायद पाँचवीं-छठी ज़मात के आगे नहीं गए, लेकिन हम दोनों चाहे सारी दुनिया की विद्या पढ़ लें, अम्माँ और दादा को हमें समझाने और सुधारने का अधिकार हमेशा रहेगा। केवल इसलिए नहीं कि वे हमारे जनमदाता हैं, बल्कि इसलिए कि उन्हें दुनिया का हमसे ज़्यादा तजुर्बा है और रहेगा।</p>
                
                <p>अमरीका में किस तरह की राज-व्यवस्था है, और आठवें हेनरी ने कितने ब्याह किए और आकाश में कितने नक्षत्र हैं, ये बातें चाहे उन्हें न मालूम हों, लेकिन हज़ारों ऐसी बातें हैं, जिनका ज्ञान उन्हें हमसे और तुमसे ज़्यादा है।</p>
                
                <p>देव न करे, आज मैं बीमार हो जाऊँ, तो तुम्हारे हाथ-पाँव फूल जाएँगे। दादा को तार देने के सिवा तुम्हें और कुछ न सूझेगा, लेकिन तुम्हारी जगह दादा हों, तो किसी को तार न दें, न घबराएँ, न बदहवास हों। पहले खुद मर्ज़ पहचानकर इलाज करेंगे, उसमें सफल न हुए, तो किसी डॉक्टर को बुलाएँगे। बीमारी तो खैर बड़ी चीज़ है। हम-तुम तो इतना भी नहीं जानते कि महीने-भर का ख़र्च महीना-भर कैसे चले। जो कुछ दादा भेजते हैं, उसे हम बीस-बाईस तक ख़र्च कर डालते हैं और फिर पैसे-पैसे को मुहताज हो जाते हैं। नाश्ता बंद हो जाता है, धोबी और नाई से मुँह चुराने लगते हैं।</p>
                
                <p>लेकिन जितना आज हम और तुम ख़र्च कर रहे हैं, उसके आधे में दादा ने अपनी उम्र का बड़ा भाग इज़्ज़त और नेकनामी के साथ निभाया है और कुटुम्ब का पालन किया है जिसमें सब मिलकर
नौ आदमी थे।</p>
                
                <p>अपने हेडमास्टर साहब ही को देखो। एम.ए. हैं कि नहीं और यहाँ के एम.ए. नहीं, ऑक्सफ़ोर्ड के। एक हज़ार रुपये पाते हैं; लेकिन उनके घर का इंतिज़ाम कौन करता है? उनकी बूढ़ी माँ। हेडमास्टर साहब की डिग्री यहाँ बेकार हो गई। पहले खुद घर का इंतिज़ाम करते थे। ख़र्च पूरा न पड़ता था। क़र्ज़दार रहते थे। जब से उनकी माता जी ने प्रबंध अपने हाथ में ले लिया है, जैसे घर में
लक्ष्मी आ गई है।</p>
                
                <p>तो भाईजान, यह गुरूर दिल से निकाल डालो कि तुम मेरे समीप आ गए हो और अब स्वतंत्र हो। मेरे देखते तुम बेराह न चलने पाओगे। अगर तुम यों न मानोगे तो मैं (थप्पड़ दिखाकर) इसका प्रयोग भी कर सकता हूँ। मैं जानता हूँ, तुम्हें मेरी बातें ज़हर लग रही हैं...."</p>
                
                <p>मैं उनकी इस नई युक्ति से नत-मस्तक हो गया। मुझे आज सचमुच अपनी लघुता का अनुभव हुआ और भाई साहब के प्रति मेरे मन में श्रद्धा उत्पन्न हुई। मैंने सजल आँखों से कहा- "हरगिज़ नहीं। आप जो कुछ फ़र्मा रहे हैं, वह बिलकुल सच है और आपको उसके कहने का अधिकार है।"</p>
                
                <p>भाई साहब ने मुझे गले से लगा लिया और बोले- "मैं कनकौए उड़ाने को मना नहीं करता। मेरा भी जी ललचाता है; लेकिन करूँ क्या, खुद बेराह चलूँ, तो तुम्हारी रक्षा कैसे करूँ? यह
कर्तव्य भी तो मेरे सिर है।"</p>
                
                <p>संयोग से उसी वक्त एक कटा हुआ कनकौआ हमारे ऊपर से गुज़रा। उसकी डोर लटक रही थी। लड़कों का एक गोल पीछे-पीछे दौड़ा चला आता था। भाई साहब लंबे हैं ही। उछलकर उसकी डोर पकड़ ली और बेतहाशा होस्टल की तरफ़ दौड़े। मैं पीछे-पीछे दौड़ रहा था।"</p>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. छोटे भाई ने पढ़ाई के लिए क्या प्रयास किया?</div>
                <div class="comprehension-question">2. टाइम-टेबिल बनाने के बाद भी वह उस पर अमल क्यों नहीं कर पाया?</div>
                <div class="comprehension-question">3. इम्तिहान के बाद उसके और बड़े भाई के बीच कितने साल का अंतर रह गया?</div>
                <div class="comprehension-question">4. भाई साहब ने छोटे भाई के व्यवहार के बारे में क्या टिप्पणी की?</div>
            </div>
        `
    }
];

// Show a specific part of the story
function showStoryPart(partNumber) {
    // CRITICAL DEBUG: Confirm this function is being called
    console.log('=== BADE-BHAI-SAHAB showStoryPart CALLED ===');
    console.log(`=== BADE-BHAI-SAHAB showStoryPart(${partNumber}) ===`);
    
    // Simplified implementation to match reference file behavior
    console.log(`[DEBUG] showStoryPart(${partNumber}) called`);
    
    // Validate part number
    if (partNumber < 1 || partNumber > storyParts.length) {
        console.error(`Invalid part number: ${partNumber}`);
        return;
    }
    
    // Get part title
    const partTitle = storyParts[partNumber-1].title;
    
    // Log part switch (matching reference file)
    console.log(`Switched to part ${partNumber}: ${partTitle}`);
    
    // Set story module as active
    isStoryModuleActive = true;
    currentStoryPart = partNumber;
    console.log(`Active tab part: ${currentStoryPart}, requested part: ${partNumber}`);
    
    console.log(`[DEBUG] Story module state: isStoryModuleActive=${isStoryModuleActive}, currentStoryPart=${currentStoryPart}`);
    
    // Update global narration state
    if (window.globalNarrationState) {
        window.globalNarrationState.currentModule = 'story';
        window.globalNarrationState.currentPart = partNumber;
    }
    
    // Update navigation buttons
    document.querySelectorAll('.story-nav-btn').forEach((btn, index) => {
        if (index === partNumber - 1) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
    
    // Get the story content container
    const storyContent = document.getElementById('storyContent');
    if (!storyContent) {
        console.error('Story content container not found');
        return;
    }
    
    // Create a container for this part if it doesn't exist
    let partContainer = document.getElementById(`storyPart${partNumber}`);
    if (!partContainer) {
        partContainer = document.createElement('div');
        partContainer.id = `storyPart${partNumber}`;
        partContainer.className = 'story-part';
        storyContent.appendChild(partContainer);
    }
    
    // Hide all parts and show the selected one
    document.querySelectorAll('.story-part').forEach(part => {
        part.classList.remove('active');
    });
    partContainer.classList.add('active');
    
    // Load content if not already loaded
    if (!partContainer.innerHTML.trim()) {
        const part = storyParts[partNumber - 1];
        if (!part) {
            console.error(`Story part ${partNumber} not found`);
            return;
        }
        
        partContainer.innerHTML = `
            <h3 class="story-part-title">${part.title}</h3>
            ${part.content}
        `;
        
        // Add event listeners to vocabulary terms
        partContainer.querySelectorAll('.highlight-vocab').forEach(term => {
            term.addEventListener('click', function() {
                const word = this.textContent.split('\n')[0].trim();
                const definition = this.querySelector('.vocab-tooltip').textContent;
                
                if (window.narrator) {
                    window.narrator.speak(`${word}: ${definition}`);
                }
            });
        });
        
        // Add read aloud button for this part
        const readAloudBtn = document.createElement('button');
        readAloudBtn.className = 'interactive-btn read-part-btn';
        readAloudBtn.innerHTML = '🔊 पढ़कर सुनाएँ';
        readAloudBtn.setAttribute('aria-label', `भाग ${partNumber} पढ़कर सुनाएँ`);
        readAloudBtn.onclick = function() { readStoryPartAloud(partNumber, true); }; // true = manual call
        
        // Add button to the end of the part
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        buttonContainer.appendChild(readAloudBtn);
        partContainer.appendChild(buttonContainer);
    }
    
    // Scroll to top of story
    storyContent.scrollTop = 0;
    
    // Stop any ongoing narration immediately
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    if (window.narrator) {
        window.narrator.stop();
        
        // Clear any reading indicators
        document.querySelectorAll('.reading-indicator').forEach(indicator => {
            if (indicator.parentNode) indicator.remove();
        });
        
        // Clear any paragraph highlights
        document.querySelectorAll('.paragraph-highlight').forEach(p => {
            p.classList.remove('paragraph-highlight');
        });
    }
    
    // Clear any timeouts
    if (window.readingTimeout) clearTimeout(window.readingTimeout);
    if (window.highlightTimeouts) {
        window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
        window.highlightTimeouts = [];
    }
    
    // Only start narration if this is not an automatic module switch
    // This prevents double narration when the module is first loaded
    console.log(`Setting up narration timeout for part ${partNumber}`);
    setTimeout(() => {
        console.log(`Narration timeout fired for part ${partNumber}, isStoryModuleActive: ${isStoryModuleActive}`);
        
        // Check if this is a manual part change (not the initial module load)
        // We'll use a global flag to track if narration has already been triggered by main.js
        if (isStoryModuleActive && !window.initialStoryNarrationDone && partNumber === 1) {
            // For part 1, let main.js handle the initial narration
            console.log(`Skipping auto-narration for initial story load of part ${partNumber}`);
            window.initialStoryNarrationDone = true;
        } else if (isStoryModuleActive && partNumber > 1) {
            // For other parts, always narrate when changed
            console.log(`Auto-starting narration for story part ${partNumber}`);
            readStoryPartAloud(partNumber, false);
        } else {
            console.log(`Story module not active, skipping narration for part ${partNumber}`);
        }
    }, 100);
}

// Read a specific story part aloud
function readStoryPartAloud(partNumber, isManualCall = true) {
    // Simplified implementation to match reference file behavior
    console.log(`[DEBUG] readStoryPartAloud(${partNumber}, ${isManualCall}) called`);
    console.log(`Starting narration for part ${partNumber}`);
    
    // Set the flag to prevent duplicate narration
    if (partNumber === 1) {
        window.initialStoryNarrationDone = true;
    }
    
    // Check if we're still in the story module
    if (!isStoryModuleActive) {
        console.log('Narration skipped - no longer in story module');
        return;
    }
    
    console.log(`[DEBUG] Proceeding with narration for part ${partNumber}`);
    
    // Enable auto-narration when user manually starts reading
    if (isManualCall) {
        autoNarrationEnabled = true;
        narrationDisabledByUser = false;
    }
    
    // Track user interaction for speech synthesis
    if (typeof trackUserInteraction === 'function') {
        trackUserInteraction();
    }
    
    if (partNumber < 1 || partNumber > storyParts.length) {
        console.error(`Invalid part number: ${partNumber}`);
        return;
    }
    
    // Stop any ongoing narration immediately
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    if (window.narrator) {
        window.narrator.stop();
    }
    
    // Process the story part immediately
    console.log(`[DEBUG] Calling readStoryPartAloudInternal for part ${partNumber}`);
    readStoryPartAloudInternal(partNumber, isManualCall);
}

// Internal function to handle the actual narration
function readStoryPartAloudInternal(partNumber, isManualCall = true) {
    console.log(`[DEBUG] readStoryPartAloudInternal(${partNumber}, ${isManualCall}) called`);
    
    const part = storyParts[partNumber - 1];
    if (!part) {
        console.error(`Story part ${partNumber} not found`);
        return;
    }
    
    // Double-check we're still in story module
    if (!isStoryModuleActive) {
        console.log('Story module no longer active, skipping narration');
        return;
    }
    
    console.log(`[DEBUG] Processing story part ${partNumber}: ${part.title}`);
    
    // Extract plain text from the story part
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = part.content;
    
    // Get all paragraphs and remove vocabulary notes
    const paragraphs = tempDiv.querySelectorAll('p');
    
    // Get story text if it exists
    const storyText = tempDiv.querySelector('.story-text');
    
    // Filter out empty paragraphs and those that are part of vocabulary notes
    const validParagraphs = Array.from(paragraphs).filter(p => {
        // Skip if it's empty
        if (p.textContent.trim().length === 0) {
            return false;
        }
        
        // Skip if it's inside a vocabulary note
        if (p.closest('.vocabulary-note')) {
            return false;
        }
        
        // Skip if it's inside a comprehension check
        if (p.closest('.comprehension-check')) {
            return false;
        }
        
        // Skip if it's a button or interactive element
        if (p.closest('button') || p.tagName === 'BUTTON') {
            return false;
        }
        
        return true;
    });
    
    // Log paragraph processing (matching reference file)
    console.log(`[DEBUG] Found ${validParagraphs.length} valid paragraphs for part ${partNumber}`);
    console.log(`Processing ${validParagraphs.length} paragraphs for part ${partNumber}`);
    
    // Extract text content to read
    let storyTextContent = '';
    
    // Add title
    storyTextContent += `${part.title}. `;
    
    // Add paragraph content
    if (validParagraphs.length > 0) {
        const paragraphTexts = validParagraphs
            .map(p => {
                // Create a clone of the paragraph to work with
                const pClone = p.cloneNode(true);
                
                // Remove all vocabulary tooltips from the clone
                const tooltips = pClone.querySelectorAll('.vocab-tooltip');
                tooltips.forEach(tooltip => tooltip.remove());
                
                // Get the text without tooltips
                let text = pClone.textContent.trim();
                
                // Normalize whitespace
                text = text.replace(/\s+/g, ' ');
                return text;
            })
            .filter(text => text.length > 0); // Remove empty strings
        
        storyTextContent += paragraphTexts.join(' ');
    }
    
    // Read the text aloud
    if (window.narrator && window.narrator.enabled) {
        // Make sure user interaction is tracked
        if (typeof trackUserInteraction === 'function') {
            const interacted = trackUserInteraction();
            
            // Force user interaction to true if it's not already set
            if (!interacted && window.userInteracted !== undefined) {
                window.userInteracted = true;
            }
        }
        
        try {
            // Show reading indicator
            const partContainer = document.getElementById(`storyPart${partNumber}`);
            if (partContainer) {
                // Remove any existing reading indicators
                const existingIndicators = partContainer.querySelectorAll('.reading-indicator');
                existingIndicators.forEach(indicator => indicator.remove());
                
                // Create new reading indicator
                const readingIndicator = document.createElement('div');
                readingIndicator.className = 'reading-indicator';
                readingIndicator.id = `reading-indicator-${partNumber}`;
                readingIndicator.innerHTML = '<div class="reading-spinner"></div> पढ़ा जा रहा है...';
                
                // Find button container or create one if it doesn't exist
                let buttonContainer = partContainer.querySelector('.button-container');
                if (!buttonContainer) {
                    buttonContainer = document.createElement('div');
                    buttonContainer.className = 'button-container';
                    partContainer.appendChild(buttonContainer);
                }
                
                buttonContainer.appendChild(readingIndicator);
                
                // Add stop button
                const stopButton = document.createElement('button');
                stopButton.className = 'interactive-btn stop-narration-btn';
                stopButton.innerHTML = '⏹️ पढ़ना रोकें';
                stopButton.onclick = stopNarration;
                readingIndicator.appendChild(stopButton);
                
                // Remove indicator when narration ends or after timeout
                window.readingTimeout = setTimeout(() => {
                    if (readingIndicator.parentNode) {
                        readingIndicator.classList.add('fade-out');
                        setTimeout(() => readingIndicator.remove(), 500);
                    }
                }, Math.min(storyTextContent.length * 100, 60000)); // Dynamic timeout based on text length, max 1 minute
            }
            
            // Register narration end event
            if (window.narrator.onEndCallback) {
                window.narrator.onEndCallback = null;
            }
            
            window.narrator.onEndCallback = function() {
                const indicator = document.getElementById(`reading-indicator-${partNumber}`);
                if (indicator) {
                    indicator.classList.add('fade-out');
                    setTimeout(() => {
                        if (indicator.parentNode) indicator.remove();
                    }, 500);
                }
                
                if (window.readingTimeout && typeof clearTimeout === 'function') {
                    clearTimeout(window.readingTimeout);
                }
            };
            
            // Start narration
            try {
                // Ensure speech synthesis is available and ready
                if (window.speechSynthesis) {
                    if (DEBUG_NARRATION) {
                        console.log(`[NARRATION DEBUG] Starting narration in readStoryPartAloudInternal for part ${partNumber}`);
                        console.log(`[NARRATION DEBUG] Speech synthesis state before cancel:`, {
                            speaking: window.speechSynthesis.speaking,
                            pending: window.speechSynthesis.pending,
                            paused: window.speechSynthesis.paused
                        });
                        
                        // Log full debug state
                        if (typeof window.debugNarration === 'function') {
                            window.debugNarration();
                        }
                    }
                    
                    // Reset the speech synthesis if it's in a bad state
                    window.speechSynthesis.cancel();
                    
                    if (DEBUG_NARRATION) {
                        console.log(`[NARRATION DEBUG] Speech synthesis state after cancel:`, {
                            speaking: window.speechSynthesis.speaking,
                            pending: window.speechSynthesis.pending,
                            paused: window.speechSynthesis.paused
                        });
                    }
                    
                    // Small pause to ensure the reset is complete
                    setTimeout(() => {
                        try {
                            // Check if we're still in the story module
                            if (!isStoryModuleActive) {
                                if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Story module no longer active before starting chunks, aborting narration`);
                                return;
                            }
                            
                            // Split the content into manageable chunks for better narration of large text
                            const chunks = splitTextIntoChunks(storyTextContent, 150);
                            
                            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Split story content into ${chunks.length} chunks`);
                            console.log(`Story text split into ${chunks.length} chunks for narration`);
                            
                            // Speak each chunk sequentially
                            speakChunksSequentially(chunks);
                        } catch (innerError) {
                            // Handle error silently
                            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Error in narration timeout:`, innerError);
                        }
                    }, 100);
                }
            } catch (e) {
                // Handle error silently
                if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Error in narration start:`, e);
            }
            
            // Highlight paragraphs as they are being read
            const elementsToHighlight = [...validParagraphs];
            if (storyText) {
                elementsToHighlight.push(storyText);
            }
            highlightParagraphsSequentially(elementsToHighlight);
            
        } catch (error) {
            alert('क्षमा करें, वाचन शुरू करने में त्रुटि हुई। कृपया पुनः प्रयास करें।');
        }
    } else {
        alert('आपके ब्राउज़र में स्पीच सिंथेसिस उपलब्ध नहीं है।');
    }
}

// Stop ongoing narration
function stopNarration() {
    if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] stopNarration() called`);
    
    if (window.narrator) {
        // First cancel speech synthesis directly
        if (window.speechSynthesis) {
            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Speech synthesis state before cancel in stopNarration:`, {
                speaking: window.speechSynthesis.speaking,
                pending: window.speechSynthesis.pending,
                paused: window.speechSynthesis.paused
            });
            
            console.log('Canceling speech synthesis directly from stopNarration');
            window.speechSynthesis.cancel();
            
            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Speech synthesis state after cancel in stopNarration:`, {
                speaking: window.speechSynthesis.speaking,
                pending: window.speechSynthesis.pending,
                paused: window.speechSynthesis.paused
            });
        }
        
        // Then use narrator's stop method
        if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Calling narrator.stop() in stopNarration`);
        window.narrator.stop();
        
        // Disable auto-narration when user manually stops
        autoNarrationEnabled = false;
        narrationDisabledByUser = true; // Mark that user has disabled narration
        
        // Update global narration state
        if (window.globalNarrationState) {
            window.globalNarrationState.disabledByUser = true;
        }
        
        // Remove all reading indicators
        document.querySelectorAll('.reading-indicator').forEach(indicator => {
            indicator.classList.add('fade-out');
            setTimeout(() => {
                if (indicator.parentNode) indicator.remove();
            }, 500);
        });
        
        // Remove all paragraph highlights
        document.querySelectorAll('.paragraph-highlight').forEach(p => {
            p.classList.remove('paragraph-highlight');
        });
        
        // Clear any timeouts
        if (window.readingTimeout && typeof clearTimeout === 'function') {
            clearTimeout(window.readingTimeout);
            window.readingTimeout = null;
        }
        
        if (window.highlightTimeouts && typeof clearTimeout === 'function') {
            window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
            window.highlightTimeouts = [];
        }
        
        console.log('Narration stopped by user');
    }
}

// Highlight paragraphs sequentially as they are being read
function highlightParagraphsSequentially(paragraphs) {
    // Clear any existing highlight timeouts
    if (window.highlightTimeouts && typeof clearTimeout === 'function') {
        window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
    }
    
    window.highlightTimeouts = [];
    
    // Remove any existing highlights
    document.querySelectorAll('.paragraph-highlight').forEach(p => {
        p.classList.remove('paragraph-highlight');
    });
    
    // Calculate approximate time per paragraph based on length
    const totalTextLength = paragraphs.reduce((sum, p) => sum + p.textContent.length, 0);
    let cumulativeLength = 0;
    
    // Estimate total reading time (about 12 characters per second - slightly slower for better sync)
    const totalReadingTime = totalTextLength / 12 * 1000;
    
    // Highlight each paragraph at the appropriate time
    paragraphs.forEach((paragraph, index) => {
        const textLength = paragraph.textContent.length;
        const startPercentage = cumulativeLength / totalTextLength;
        cumulativeLength += textLength;
        
        // Calculate when to highlight this paragraph
        const highlightTime = startPercentage * totalReadingTime;
        
        // Set timeout to add highlight
        const highlightTimeout = setTimeout(() => {
            // Only proceed if narration is still active (check for reading indicator)
            if (document.querySelector('.reading-indicator')) {
                // Remove highlight from previous paragraphs
                if (index > 0) {
                    paragraphs[index - 1].classList.remove('paragraph-highlight');
                }
                
                // Add highlight to current paragraph
                paragraph.classList.add('paragraph-highlight');
                
                // Scroll to the paragraph with proper container reference
                const container = document.querySelector('.story-content');
                if (container) {
                    // Calculate if paragraph is visible
                    const paragraphRect = paragraph.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    
                    // If paragraph is not fully visible, scroll to it
                    if (paragraphRect.top < containerRect.top || 
                        paragraphRect.bottom > containerRect.bottom) {
                        container.scrollTop = paragraph.offsetTop - container.offsetTop - 100;
                    }
                } else {
                    // Fallback if container not found
                    paragraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }, highlightTime);
        
        window.highlightTimeouts.push(highlightTimeout);
    });
    
    // Clear highlights when done
    const clearHighlightsTimeout = setTimeout(() => {
        paragraphs.forEach(p => p.classList.remove('paragraph-highlight'));
    }, totalReadingTime + 1000);
    
    window.highlightTimeouts.push(clearHighlightsTimeout);
}

// Highlight vocabulary words in the text
function highlightVocabulary() {
    const vocabTerms = document.querySelectorAll('.highlight-vocab');
    
    vocabTerms.forEach(term => {
        term.classList.toggle('active-highlight');
    });
    
    // Show a message that vocabulary highlighting is toggled
    const feedbackMsg = document.createElement('div');
    feedbackMsg.className = 'feedback-message success show';
    feedbackMsg.textContent = 'शब्दार्थ हाइलाइट किए गए हैं। अर्थ सुनने के लिए हाइलाइट किए गए शब्दों पर क्लिक करें।';
    
    // Find the story content container
    const storyContent = document.getElementById('storyContent');
    if (storyContent) {
        storyContent.appendChild(feedbackMsg);
        
        // Remove the message after a few seconds
        setTimeout(() => {
            feedbackMsg.classList.remove('show');
            setTimeout(() => feedbackMsg.remove(), 500);
        }, 3000);
    }
}

// Toggle read aloud functionality
function toggleReadAloud() {
    // Force user interaction flag
    if (window.userInteracted !== undefined) {
        window.userInteracted = true;
    }
    
    // Cancel any ongoing speech
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    // Get the currently active story part
    const activeBtn = document.querySelector('.story-nav-btn.active');
    if (activeBtn) {
        try {
            // Extract the part number from the onclick attribute
            const onclickAttr = activeBtn.getAttribute('onclick');
            const match = onclickAttr.match(/showStoryPart\((\d+)\)/);
            if (match && match[1]) {
                const partNumber = parseInt(match[1]);
                
                // Cancel any ongoing narration first
                if (window.narrator && window.narrator.currentUtterance) {
                    window.narrator.stop();
                }
                
                // Wait a moment to ensure any previous narration has stopped
                setTimeout(() => {
                    // Call the read aloud function with the current part number
                    readStoryPartAloud(partNumber, true); // true means it's a manual call
                }, 100);
            }
        } catch (e) {
            // Handle error silently
        }
    } else {
        // If no active button is found, default to part 1
        setTimeout(() => {
            readStoryPartAloud(1, true);
        }, 100);
    }
}

// Split text into manageable chunks for narration
function splitTextIntoChunks(text, chunkSize = 150) { // Reduced chunk size for better handling
    // Try to split at sentence boundaries (including Hindi danda)
    const sentences = text.match(/[^.!?\u0964]+[.!?\u0964]+/g) || [];
    
    if (sentences.length === 0) {
        // If no sentence boundaries found, split by commas or other punctuation
        const fragments = text.match(/[^,;:\u0964]+[,;:\u0964]*/g) || [];
        if (fragments.length > 1) {
            return splitFragmentsIntoChunks(fragments, chunkSize);
        }
        return [text];
    }
    
    const chunks = [];
    let currentChunk = '';
    
    sentences.forEach(sentence => {
        // If the sentence itself is very long, split it further
        if (sentence.length > chunkSize * 1.5) {
            if (currentChunk) {
                chunks.push(currentChunk);
                currentChunk = '';
            }
            
            // Split long sentence by commas or other punctuation
            const fragments = sentence.match(/[^,;:\u0964]+[,;:\u0964]*/g) || [sentence];
            if (fragments.length > 1) {
                const sentenceChunks = splitFragmentsIntoChunks(fragments, chunkSize);
                chunks.push(...sentenceChunks);
            } else {
                // If no punctuation to split by, just add as is
                chunks.push(sentence);
            }
        }
        // If adding this sentence would make the chunk too long, start a new chunk
        else if (currentChunk.length + sentence.length > chunkSize) {
            if (currentChunk) {
                chunks.push(currentChunk);
            }
            currentChunk = sentence;
        } else {
            currentChunk += sentence;
        }
    });
    
    // Add the last chunk if it's not empty
    if (currentChunk) {
        chunks.push(currentChunk);
    }
    
    return chunks.length ? chunks : [text];
}

// Helper function to split text fragments into chunks
function splitFragmentsIntoChunks(fragments, chunkSize) {
    const chunks = [];
    let currentChunk = '';
    
    fragments.forEach(fragment => {
        if (currentChunk.length + fragment.length > chunkSize) {
            if (currentChunk) {
                chunks.push(currentChunk);
            }
            currentChunk = fragment;
        } else {
            currentChunk += fragment;
        }
    });
    
    if (currentChunk) {
        chunks.push(currentChunk);
    }
    
    return chunks;
}

// Speak text chunks sequentially
function speakChunksSequentially(chunks, index = 0) {
    if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] speakChunksSequentially(chunks[${chunks.length}], ${index}) called`);
    
    // Process chunks sequentially to handle large text better
    
    if (index >= chunks.length) {
        if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] All chunks processed, ending sequence`);
        return;
    }
    
    // Check if narration should continue
    if (window.narrator && !window.narrator.enabled) {
        if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Narration stopped - narrator disabled`);
        console.log('Narration stopped - narrator disabled');
        return;
    }
    
    // CRITICAL CHECK: Check if we're still in story module
    if (!isStoryModuleActive) {
        if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Story module no longer active in speakChunksSequentially, stopping narration`);
        // Force immediate speech synthesis cancellation
        if (window.speechSynthesis) {
            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Force canceling speech synthesis in speakChunksSequentially`);
            window.speechSynthesis.cancel();
        }
        return;
    }
    
    try {
        const utterance = new SpeechSynthesisUtterance(chunks[index]);
        
        // Add debug logging
        console.log(`Speaking chunk ${index+1} of ${chunks.length}, length: ${chunks[index].length}`);
        
        // Apply voice settings if available
        if (window.narrator && window.narrator.voice) {
            utterance.voice = window.narrator.voice;
            
            // Apply the same optimization parameters as in the narrator
            if (window.narrator.optimizeVoiceParameters) {
                window.narrator.optimizeVoiceParameters(utterance);
            }
        }
        
        // Set event handlers
        utterance.onend = () => {
            // Speak the next chunk with minimal delay for smoother narration
            setTimeout(() => {
                speakChunksSequentially(chunks, index + 1);
            }, 50); // Very short delay for smoother transitions between chunks
        };
        utterance.onerror = (event) => {
            console.error("Error speaking chunk:", event);
            // If error is interrupted, it's likely due to tab switching, so stop
            if (event.error === 'interrupted') {
                console.log('Narration interrupted - stopping sequence');
                return;
            }
            // Try to continue with the next chunk even if there's an error
            setTimeout(() => {
                speakChunksSequentially(chunks, index + 1);
            }, 500);
        };
        
        // Store current utterance in narrator for tracking
        if (window.narrator) {
            window.narrator.currentUtterance = utterance;
        }
        
        // Speak the chunk
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.error("Error in speakChunksSequentially:", e);
        // Try to continue with the next chunk
        setTimeout(() => {
            speakChunksSequentially(chunks, index + 1);
        }, 500);
    }
}

// Toggle print-friendly mode
function togglePrintMode() {
    document.body.classList.toggle('print-mode');
    
    // Show a message that print mode is toggled
    const isPrintMode = document.body.classList.contains('print-mode');
    const feedbackMsg = document.createElement('div');
    feedbackMsg.className = 'feedback-message success show';
    feedbackMsg.textContent = isPrintMode ? 
        'प्रिंट मोड सक्रिय। प्रिंट करने के लिए अपने ब्राउज़र का प्रिंट फ़ंक्शन उपयोग करें।' : 
        'प्रिंट मोड निष्क्रिय।';
    
    // Find the story content container
    const storyContent = document.getElementById('storyContent');
    if (storyContent) {
        storyContent.appendChild(feedbackMsg);
        
        // Remove the message after a few seconds
        setTimeout(() => {
            feedbackMsg.classList.remove('show');
            setTimeout(() => feedbackMsg.remove(), 500);
        }, 3000);
    }
}