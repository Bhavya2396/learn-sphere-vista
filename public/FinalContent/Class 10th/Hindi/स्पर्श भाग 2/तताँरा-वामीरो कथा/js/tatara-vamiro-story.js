/**
 * Story content and functionality for Tatara-Vamiro Katha
 */

// CRITICAL DEBUG: Confirm this file is being loaded
console.log('=== TATARA-VAMIRO-STORY.JS LOADED ===');
console.log('This should appear if tatara-vamiro-story.js is being executed');

// Make sure showStoryPart is available globally
window.showStoryPart = function(partNumber) {
    console.log('=== GLOBAL showStoryPart CALLED ===', partNumber);
    return showStoryPartInternal(partNumber);
};

// Make sure other functions are available globally
window.toggleReadAloud = function() {
    console.log('=== GLOBAL toggleReadAloud CALLED ===');
    return toggleReadAloudInternal();
};

window.highlightVocabulary = function() {
    console.log('=== GLOBAL highlightVocabulary CALLED ===');
    return highlightVocabularyInternal();
};

window.togglePrintMode = function() {
    console.log('=== GLOBAL togglePrintMode CALLED ===');
    return togglePrintModeInternal();
};

// Global variables to track narration state
let autoNarrationEnabled = true; // Set to true to match reference file behavior
let narrationDisabledByUser = false;
let currentStoryPart = 1;

// Track if we're in the story module
let isStoryModuleActive = false;

// Debug flag to enable verbose logging (use global from main.js)
// DEBUG_NARRATION is declared in main.js

// Story parts data
const storyParts = [
    {
        title: "भाग 1",
        content: `
            <div class="story-text">
                <p>अंदमान द्वीपसमूह का अंतिम दक्षिणी द्वीप है <span class="highlight-vocab">लिटिल अंदमान<span class="vocab-tooltip">छोटा अंदमान द्वीप</span></span>। यह पोर्ट ब्लेयर से लगभग सौ किलोमीटर दूर स्थित है। इसके बाद निकोबार द्वीपसमूह की श्रृंखला आरंभ होती है जो निकोबारी जनजाति की आदिम संस्कृति के केंद्र हैं। निकोबार द्वीपसमूह का पहला प्रमुख द्वीप है कार-निकोबार जो लिटिल अंदमान से 96 कि.मी. दूर है। निकोबारियों का विश्वास है कि प्राचीन काल में ये दोनों द्वीप एक ही थे। इनके विभक्त होने की एक लोककथा है जो आज भी दोहराई जाती है।</p>
                
                <div class="vocabulary-note">
                    <div class="word">लिटिल अंदमान</div>
                    <div class="definition">छोटा अंदमान द्वीप</div>
                </div>
                
                <p>सदियों पूर्व, जब लिटिल अंदमान और कार-निकोबार आपस में जुड़े हुए थे तब वहाँ एक सुंदर सा गाँव था। पास में एक सुंदर और शक्तिशाली युवक रहा करता था। उसका नाम था <span class="highlight-vocab">तताँरा<span class="vocab-tooltip">एक सुंदर और शक्तिशाली युवक का नाम</span></span>। निकोबारी उसे बेहद प्रेम करते थे। तताँरा एक नेक और मददगार व्यक्ति था। सदैव दूसरों की सहायता के लिए तत्पर रहता। अपने गाँववालों को ही नहीं, अपितु समूचे द्वीपवासियों की सेवा करना अपना परम कर्तव्य समझता था। उसके इस त्याग की वजह से वह चर्चित था।</p>
                
                <div class="vocabulary-note">
                    <div class="word">तताँरा</div>
                    <div class="definition">एक सुंदर और शक्तिशाली युवक का नाम</div>
                </div>
                
                <p>सभी उसका आदर करते। वक्त मुसीबत में उसे स्मरण करते और वह भागा-भागा वहाँ पहुँच जाता। दूसरे गाँवों में भी पर्व-त्योहारों के समय उसे विशेष रूप से आमंत्रित किया जाता। उसका व्यक्तित्व तो आकर्षक था ही, साथ ही <span class="highlight-vocab">आत्मीय<span class="vocab-tooltip">अपना</span></span> स्वभाव की वजह से लोग उसके करीब रहना चाहते। पारंपरिक पोशाक के साथ वह अपनी कमर में सदैव एक लकड़ी की तलवार बाँधे रहता। लोगों का मत था, बावजूद लकड़ी की होने पर, उस तलवार में अद्भुत दैवीय शक्ति थी। तताँरा अपनी तलवार को कभी अलग न होने देता। उसका दूसरों के सामने उपयोग भी न करता। किंतु उसके चर्चित साहसिक कारनामों के कारण लोग-बाग तलवार में अद्भुत शक्ति का होना मानते थे।</p>
                
                <div class="vocabulary-note">
                    <div class="word">आत्मीय</div>
                    <div class="definition">अपना</div>
                </div>
                
                <p>तताँरा की तलवार एक <span class="highlight-vocab">विलक्षण<span class="vocab-tooltip">असाधारण</span></span> रहस्य थी। एक शाम तताँरा दिनभर के अथक परिश्रम के बाद समुद्र किनारे टहलने निकल पड़ा। सूरज समुद्र से लगे क्षितिज तले डूबने को था। समुद्र से ठंडी बयारें आ रही थीं। पक्षियों की सायंकालीन चहचहाहटें शनैः शनैः क्षीण होने को थीं। उसका मन शांत था। विचारमग्न तताँरा समुद्री बालू पर बैठकर सूरज की अंतिम रंग-बिरंगी किरणों को समुद्र पर निहारने लगा।</p>
                
                <div class="vocabulary-note">
                    <div class="word">विलक्षण</div>
                    <div class="definition">असाधारण</div>
                </div>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. अंदमान द्वीपसमूह का अंतिम दक्षिणी द्वीप कौन सा है?</div>
                <div class="comprehension-question">2. तताँरा कौन था और उसकी क्या विशेषताएँ थीं?</div>
                <div class="comprehension-question">3. तताँरा के पास कौन सी विशेष वस्तु थी जिसे वह हमेशा अपने साथ रखता था?</div>
                <div class="comprehension-question">4. निकोबारियों का क्या विश्वास था?</div>
            </div>
        `
    },
    {
        title: "भाग 2",
        content: `
            <div class="story-text">
                <p>तभी कहीं पास से उसे मधुर गीत गूँजता सुनाई दिया। गीत मानो बहता हुआ उसकी तरफ़ आ रहा हो। बीच-बीच में लहरों का संगीत सुनाई देता। गायन इतना प्रभावी था कि वह अपनी सुध-बुध खोने लगा। लहरों के एक प्रबल वेग ने उसकी <span class="highlight-vocab">तंद्रा<span class="vocab-tooltip">एकाग्रता</span></span> भंग की। <span class="highlight-vocab">चैतन्य<span class="vocab-tooltip">सजग</span></span> होते ही वह उधर बढ़ने को विवश हो उठा जिधर से अब भी गीत के स्वर बह रहे थे। वह <span class="highlight-vocab">विकल<span class="vocab-tooltip">बेचैन/व्याकुल</span></span> सा उस तरफ़ बढ़ता गया। अंततः उसकी नज़र एक युवती पर पड़ी जो ढलती हुई शाम के सौंदर्य में बेसुध, एकटक समुद्र की देह पर डूबते आकर्षक रंगों को निहारते हुए गा रही थी। यह एक श्रृंगार गीत था। उसे ज्ञात ही न हो सका कि कोई अजनबी युवक उसे निःशब्द ताके जा रहा है।</p>
                
                <div class="vocabulary-note">
                    <div class="word">तंद्रा</div>
                    <div class="definition">एकाग्रता</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">चैतन्य</div>
                    <div class="definition">सजग</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">विकल</div>
                    <div class="definition">बेचैन/व्याकुल</div>
                </div>
                
                <p>एकाएक एक ऊँची लहर उठी और उसे भिगो गई। वह हड़बड़ाहट में गाना भूल गई। इसके पहले कि वह सामान्य हो पाती, उसने अपने कानों में गूँजती गंभीर आकर्षक आवाज़ सुनी। "तुमने एकाएक इतना मधुर गाना अधूरा क्यों छोड़ दिया?" तताँरा ने विनम्रतापूर्वक कहा। अपने सामने एक सुंदर युवक को देखकर वह विस्मित हुई। उसके भीतर किसी कोमल भावना का <span class="highlight-vocab">संचार<span class="vocab-tooltip">उत्पन्न होना (भावना का)</span></span> हुआ। किंतु अपने को संयतकर उसने बेरुखी के साथ जवाब दिया।</p>
                
                <div class="vocabulary-note">
                    <div class="word">संचार</div>
                    <div class="definition">उत्पन्न होना (भावना का)</div>
                </div>
                
                <p>"पहले बताओ! तुम कौन हो, इस तरह मुझे घूरने और इस <span class="highlight-vocab">असंगत<span class="vocab-tooltip">अनुचित</span></span> प्रश्न का कारण? अपने गाँव के अलावा किसी और गाँव के युवक के प्रश्नों का उत्तर देने को मैं बाध्य नहीं। यह तुम भी जानते हो"। तताँरा मानो सुध-बुध खोए हुए था। जवाब देने के स्थान पर उसने पुनः अपना प्रश्न दोहराया। "तुमने गाना क्यों रोक दिया? गाओ, गीत पूरा करो। सचमुच तुमने बहुत सुरीला कंठ पाया है"।</p>
                
                <div class="vocabulary-note">
                    <div class="word">असंगत</div>
                    <div class="definition">अनुचित</div>
                </div>
                
                <p>"यह तो मेरे प्रश्न का उत्तर न हुआ?" युवती ने कहा। "सच बताओ तुम कौन हो? लपाती गाँव में तुम्हें कभी देखा नहीं"। तताँरा मानो <span class="highlight-vocab">सम्मोहित<span class="vocab-tooltip">मुग्ध</span></span> था। उसके कानों में युवती की आवाज़ ठीक से पहुँच न सकी। उसने पुनः विनय की, "तुमने गाना क्यों रोक दिया? गाओ न?" युवती <span class="highlight-vocab">झुंझला<span class="vocab-tooltip">चिढ़ना</span></span> उठी। वह कुछ और सोचने लगी। अंततः उसने निश्चयपूर्वक एक बार पुनः लगभग विरोध करते हुए कड़े स्वर में कहा।</p>
                
                <div class="vocabulary-note">
                    <div class="word">सम्मोहित</div>
                    <div class="definition">मुग्ध</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">झुंझला</div>
                    <div class="definition">चिढ़ना</div>
                </div>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. तताँरा का मन किस चीज़ से मोहित हुआ?</div>
                <div class="comprehension-question">2. युवती ने तताँरा को क्या जवाब दिया?</div>
                <div class="comprehension-question">3. युवती कौन से गाँव से थी?</div>
                <div class="comprehension-question">4. तताँरा ने युवती से क्या आग्रह किया?</div>
            </div>
        `
    },
    {
        title: "भाग 3",
        content: `
            <div class="story-text">
                <p>"ढीठता की हद है। मैं जब से परिचय पूछ रही हूँ और तुम बस एक ही राग अलाप रहे हो। गीत गाओ-गीत गाओ, आखिर क्यों? क्या तुम्हें गाँव का नियम नहीं मालूम?" इतना बोलकर वह जाने के लिए तेज़ी से मुड़ी। तताँरा को मानो कुछ होश आया। उसे अपनी गलती का अहसास हुआ। वह उसके सामने रास्ता रोककर, मानो गिड़गिड़ाने लगा।</p>
                
                <p>"मुझे माफ़ कर दो। जीवन में पहली बार मैं इस तरह विचलित हुआ हूँ। तुम्हें देखकर मेरी चेतना लुप्त हो गई थी। मैं तुम्हारा रास्ता छोड़ दूंगा। बस अपना नाम बता दो।" तताँरा ने विवशता में आग्रह किया। उसकी आँखें युवती के चेहरे पर केंद्रित थीं। उसके चेहरे पर सच्ची विनय थी।</p>
                
                <p>"वा... मी... रो..." एक रस घोलती आवाज़ उसके कानों में पहुँची।</p>
                
                <p>"वामीरो... वा... मी... रो... वाह कितना सुंदर नाम है। कल भी आओगी न यहाँ?" तताँरा ने याचना भरे स्वर में कहा।</p>
                
                <p>"नहीं... शायद... कभी नहीं।" वामीरो ने <span class="highlight-vocab">अन्यमनस्कतापूर्वक<span class="vocab-tooltip">जिसका चित्त कहीं और हो</span></span> कहा और झटके से लपाती की तरफ़ बेसुध सी दौड़ पड़ी। पीछे तताँरा के वाक्य गूंज रहे थे। "वामीरो... मेरा नाम तताँरा है। कल मैं इसी चट्टान पर प्रतीक्षा करूँगा... तुम्हारी बाट जोहूँगा... ज़रूर आना..." वामीरो रुकी नहीं, भागती ही गई। तताँरा उसे जाते हुए निहारता रहा।</p>
                
                <div class="vocabulary-note">
                    <div class="word">अन्यमनस्कतापूर्वक</div>
                    <div class="definition">जिसका चित्त कहीं और हो</div>
                </div>
                
                <p>वामीरो घर पहुँचकर भीतर ही भीतर कुछ बेचैनी महसूस करने लगी। उसके भीतर तताँरा से मुक्त होने की एक झूठी छटपटाहट थी। एक झल्लाहट में उसने दरवाज़ा बंद किया और मन को किसी और दिशा में ले जाने का प्रयास किया। बार-बार तताँरा का याचना भरा चेहरा उसकी आँखों में तैर जाता। उसने तताँरा के बारे में कई कहानियाँ सुन रखी थीं। उसकी कल्पना में वह एक अद्भुत साहसी युवक था। किंतु वही तताँरा उसके सम्मुख एक अलग रूप में आया। सुंदर, बलिष्ठ किंतु बेहद शांत, सभ्य और भोला। उसका व्यक्तित्व कदाचित वैसा ही था जैसा वह अपने जीवन-साथी के बारे में सोचती रही थी।</p>
                
                <p>किंतु एक दूसरे गाँव के युवक के साथ यह संबंध परंपरा के विरुद्ध था। अतएव उसने उसे भूल जाना ही श्रेयस्कर समझा। किंतु यह असंभव जान पड़ा। तताँरा बार-बार उसकी आँखों के सामने था। <span class="highlight-vocab">निर्निमेष<span class="vocab-tooltip">बिना पलक झपकाए</span></span> याचक की तरह प्रतीक्षा में डूबा हुआ। किसी तरह रात बीती। दोनों के हृदय व्यथित थे। किसी तरह आँचरहित एक ठंडा और ऊबाऊ दिन गुज़रने लगा। शाम की प्रतीक्षा थी।</p>
                
                <div class="vocabulary-note">
                    <div class="word">निर्निमेष</div>
                    <div class="definition">बिना पलक झपकाए</div>
                </div>
                
                <p>तताँरा के लिए मानो पूरे जीवन की अकेली प्रतीक्षा थी। उसके गंभीर और शांत जीवन में ऐसा पहली बार हुआ था। वह <span class="highlight-vocab">अचंभित<span class="vocab-tooltip">चकित</span></span> था, साथ ही <span class="highlight-vocab">रोमांचित<span class="vocab-tooltip">पुलकित</span></span> भी। दिन ढलने के काफ़ी पहले वह लपाती की उस समुद्री चट्टान पर पहुँच गया। वामीरो की प्रतीक्षा में एक-एक पल पहाड़ की तरह भारी था। उसके भीतर एक <span class="highlight-vocab">आशंका<span class="vocab-tooltip">डर</span></span> भी दौड़ रही थी। अगर वामीरो न आई तो? वह कुछ निर्णय नहीं कर पा रहा था। सिर्फ़ प्रतीक्षारत था।</p>
                
                <div class="vocabulary-note">
                    <div class="word">अचंभित</div>
                    <div class="definition">चकित</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">रोमांचित</div>
                    <div class="definition">पुलकित</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">आशंका</div>
                    <div class="definition">डर</div>
                </div>
                
                <p>बस आस की एक किरण थी जो समुद्र की देह पर डूबती किरणों की तरह कभी भी डूब सकती थी। वह बार-बार लपाती के रास्ते पर नज़रें दौड़ाता। सहसा नारियल के झुरमुटों में उसे एक आकृति कुछ साफ़ हुई... कुछ और... कुछ और। उसकी खुशी का ठिकाना न रहा। सचमुच वह वामीरो थी। लगा जैसे वह घबराहट में थी। वह अपने को छुपाते हुए बढ़ रही थी। बीच-बीच में इधर-उधर दृष्टि दौड़ाना न भूलती। फिर तेज़ कदमों से चलती हुई तताँरा के सामने आकर ठिठक गई।</p>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. वामीरो का नाम जानने के बाद तताँरा ने क्या कहा?</div>
                <div class="comprehension-question">2. वामीरो को तताँरा का व्यक्तित्व कैसा लगा?</div>
                <div class="comprehension-question">3. परंपरा के अनुसार तताँरा और वामीरो का संबंध क्यों संभव नहीं था?</div>
                <div class="comprehension-question">4. तताँरा और वामीरो की कहानी से क्या सीख मिलती है?</div>
            </div>
        `
    },
    {
        title: "भाग 4",
        content: `
            <div class="story-text">
                <p>दोनों शब्दहीन थे। कुछ था जो दोनों के भीतर बह रहा था। एकटक निहारते हुए वे जाने कब तक खड़े रहे। सूरज समुद्र की लहरों में कहीं खो गया था। अँधेरा बढ़ रहा था। अचानक वामीरो कुछ सचेत हुई और घर की तरफ़ दौड़ पड़ी। तताँरा अब भी वहीं खड़ा था... <span class="highlight-vocab">निश्चल<span class="vocab-tooltip">स्थिर</span></span>... शब्दहीन... ।</p>
                
                <div class="vocabulary-note">
                    <div class="word">निश्चल</div>
                    <div class="definition">स्थिर</div>
                </div>
                
                <p>दोनों रोज़ उसी जगह पहुँचते और मूर्तिवत एक-दूसरे को <span class="highlight-vocab">निर्निमेष<span class="vocab-tooltip">बिना पलक झपकाए</span></span> ताकते रहते। बस भीतर समर्पण था जो अनवरत गहरा रहा था। लपाती के कुछ युवकों ने इस मूक प्रेम को भाँप लिया और खबर हवा की तरह बह उठी।</p>
                
                <p>वामीरो लपाती ग्राम की थी और तताँरा पासा का। दोनों का संबंध संभव न था। रीति अनुसार दोनों को एक ही गाँव का होना आवश्यक था। वामीरो और तताँरा को समझाने-बुझाने के कई प्रयास हुए किंतु दोनों अडिग रहे। वे नियमतः लपाती के उसी समुद्री किनारे पर मिलते रहे। <span class="highlight-vocab">अफ़वाहें<span class="vocab-tooltip">उड़ती ख़बर</span></span> फैलती रहीं।</p>
                
                <div class="vocabulary-note">
                    <div class="word">अफ़वाहें</div>
                    <div class="definition">उड़ती ख़बर</div>
                </div>
                
                <p>कुछ समय बाद पासा गाँव में 'पशु-पर्व' का आयोजन हुआ। पशु-पर्व में हृष्ट-पुष्ट पशुओं के प्रदर्शन के अतिरिक्त पशुओं से युवकों की शक्ति परीक्षा प्रतियोगिता भी होती है। वर्ष में एक बार सभी गाँव के लोग हिस्सा लेते हैं। बाद में नृत्य-संगीत और भोजन का भी आयोजन होता है। शाम से सभी लोग पासा में एकत्रित होने लगे। धीरे-धीरे विभिन्न कार्यक्रम शुरू हुए। तताँरा का मन इन कार्यक्रमों में तनिक न था। उसकी व्याकुल आँखें वामीरो को ढूँढ़ने में व्यस्त थीं।</p>
                
                <p>नारियल के झुंड के एक पेड़ के पीछे से उसे जैसे कोई झाँकता दिखा। उसने थोड़ा और करीब जाकर पहचानने की चेष्टा की। वह वामीरो थी जो भयवश सामने आने में झिझक रही थी। उसकी आँखें तरल थीं। होंठ काँप रहे थे। तताँरा को देखते ही वह फूटकर रोने लगी। तताँरा <span class="highlight-vocab">विह्वल<span class="vocab-tooltip">बेचैन</span></span> हुआ। उससे कुछ बोलते ही नहीं बन रहा था। रोने की आवाज़ लगातार ऊँची होती जा रही थी।</p>
                
                <div class="vocabulary-note">
                    <div class="word">विह्वल</div>
                    <div class="definition">बेचैन</div>
                </div>
                
                <p>तताँरा <span class="highlight-vocab">किंकर्तव्यविमूढ़<span class="vocab-tooltip">कर्तव्य के बारे में भ्रमित</span></span> था। वामीरो के रुदन स्वरों को सुनकर उसकी माँ वहाँ पहुँची और दोनों को देखकर आग बबूला हो उठी। सारे गाँववालों की उपस्थिति में यह दृश्य उसे अपमानजनक लगा। इस बीच गाँव के कुछ लोग भी वहाँ पहुँच गए। वामीरो की माँ क्रोध में <span class="highlight-vocab">उफन<span class="vocab-tooltip">उबलना</span></span> उठी। उसने तताँरा को तरह-तरह से अपमानित किया। गाँव के लोग भी तताँरा के विरोध में आवाज़ें उठाने लगे। यह तताँरा के लिए असहनीय था। वामीरो अब भी रोए जा रही थी। तताँरा भी गुस्से से भर उठा। उसे जहाँ विवाह की <span class="highlight-vocab">निषेध परंपरा<span class="vocab-tooltip">वह परंपरा जिस पर रोक लगी हो</span></span> पर क्षोभ था वहीं अपनी असहायता पर खीझ। वामीरो का दुख उसे और गहरा कर रहा था। उसे मालूम न था कि क्या कदम उठाना चाहिए?</p>
                
                <div class="vocabulary-note">
                    <div class="word">किंकर्तव्यविमूढ़</div>
                    <div class="definition">कर्तव्य के बारे में भ्रमित</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">उफन</div>
                    <div class="definition">उबलना</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">निषेध परंपरा</div>
                    <div class="definition">वह परंपरा जिस पर रोक लगी हो</div>
                </div>
                
                <p>अनायास उसका हाथ तलवार की मूठ पर जा टिका। क्रोध में उसने तलवार निकाली और कुछ विचार करता रहा। क्रोध लगातार अग्नि की तरह बढ़ रहा था। लोग सहम उठे। एक सन्नाटा-सा खिंच गया। जब कोई राह न सूझी तो क्रोध का <span class="highlight-vocab">शमन<span class="vocab-tooltip">शांत करना</span></span> करने के लिए उसमें शक्ति भर उसे धरती में <span class="highlight-vocab">घोंप<span class="vocab-tooltip">भोंकना</span></span> दिया और ताकत से उसे खींचने लगा। वह पसीने से नहा उठा। सब घबराए हुए थे। वह तलवार को अपनी तरफ़ खींचते खींचते दूर तक पहुँच गया। वह हाँफ रहा था। अचानक जहाँ तक लकीर खिंच गई थी, वहाँ एक <span class="highlight-vocab">दरार<span class="vocab-tooltip">रेखा की तरह का लंबा छिद्र जो फटने के कारण पड़ जाता है</span></span> होने लगी। मानो धरती दो टुकड़ों में बँटने लगी हो। एक गड़गड़ाहट-सी गूंजने लगी और लकीर की सीध में धरती फटती ही जा रही थी। द्वीप के अंतिम सिरे तक तताँरा धरती को मानो क्रोध में काटता जा रहा था। सभी <span class="highlight-vocab">भयाकुल<span class="vocab-tooltip">डरा हुआ</span></span> हो उठे। लोगों ने ऐसे दृश्य की कल्पना न की थी, वे सिहर उठे। उधर वामीरो फटती हुई धरती के किनारे चीखती हुई दौड़ रही थी-तताँरा... तताँरा... तताँरा। उसकी करुण चीख मानो गड़गड़ाहट में डूब गई। तताँरा दुर्भाग्यवश दूसरी तरफ़ था। द्वीप के अंतिम सिरे तक धरती को चाकता वह जैसे ही अंतिम छोर पर पहुँचा, द्वीप दो टुकड़ों में विभक्त हो चुका था। एक तरफ़ तताँरा था दूसरी तरफ़ वामीरो। तताँरा को जैसे ही होश आया, उसने देखा उसकी तरफ़ का द्वीप समुद्र में धँसने लगा है। वह छटपटाने लगा। उसने छलाँग लगाकर दूसरा सिरा थामना चाहा किंतु पकड़ ढीली पड़ गई। वह नीचे की तरफ़ फिसलने लगा। वह लगातार समुद्र की सतह की तरफ़ फिसल रहा था। उसके मुँह से सिर्फ़ एक ही चीख उभरकर डूब रही थी, "वामीरो... वामीरो... वामीरो... वामीरो..." । उधर वामीरो भी "तताँरा... तताँरा... ता... ताँ... रा" पुकार रही थी।</p>
                
                <div class="vocabulary-note">
                    <div class="word">शमन</div>
                    <div class="definition">शांत करना</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">घोंप</div>
                    <div class="definition">भोंकना</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">दरार</div>
                    <div class="definition">रेखा की तरह का लंबा छिद्र जो फटने के कारण पड़ जाता है</div>
                </div>
                
                <div class="vocabulary-note">
                    <div class="word">भयाकुल</div>
                    <div class="definition">डरा हुआ</div>
                </div>
                
                <p>तताँरा लहूलुहान हो चुका था... वह अचेत होने लगा और कुछ देर बाद उसे कोई होश नहीं रहा। वह कटे हुए द्वीप के अंतिम भूखंड पर पड़ा हुआ था जो कि दूसरे हिस्से से संयोगवश जुड़ा था। बहता हुआ तताँरा कहाँ पहुँचा, बाद में उसका क्या हुआ कोई नहीं जानता। इधर वामीरो पागल हो उठी। वह हर समय तताँरा को खोजती हुई उसी जगह पहुँचती और घंटों बैठी रहती। उसने खाना-पीना छोड़ दिया। परिवार से वह एक तरह विलग हो गई। लोगों ने उसे ढूँढ़ने की बहुत कोशिश की किंतु कोई सुराग न मिल सका।</p>
                
                <p>आज न तताँरा है न वामीरो किंतु उनकी यह प्रेमकथा घर-घर में सुनाई जाती है। निकोबारियों का मत है कि तताँरा की तलवार से कार-निकोबार के जो टुकड़े हुए, उसमें दूसरा लिटिल अंदमान है जो कार-निकोबार से आज 96 कि.मी. दूर स्थित है। निकोबारी इस घटना के बाद दूसरे गाँवों में भी आपसी वैवाहिक संबंध करने लगे। तताँरा-वामीरो की त्यागमयी मृत्यु शायद इसी सुखद परिवर्तन के लिए थी।</p>
            </div>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. तताँरा और वामीरो के मिलने पर क्या हुआ?</div>
                <div class="comprehension-question">2. पशु-पर्व में क्या-क्या होता था?</div>
                <div class="comprehension-question">3. तताँरा ने क्रोध में क्या किया?</div>
                <div class="comprehension-question">4. तताँरा-वामीरो की कहानी का क्या परिणाम हुआ?</div>
            </div>
        `
    }
];

// Show a specific part of the story
function showStoryPartInternal(partNumber) {
    // CRITICAL DEBUG: Confirm this function is being called
    console.log('=== TATARA-VAMIRO showStoryPart CALLED ===');
    console.log(`=== TATARA-VAMIRO showStoryPart(${partNumber}) ===`);
    
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
    
    // CRITICAL: Start narration immediately for this part
    // This is what the reference file does
    console.log(`Setting up narration timeout for part ${partNumber}`);
    setTimeout(() => {
        console.log(`Narration timeout fired for part ${partNumber}, isStoryModuleActive: ${isStoryModuleActive}`);
        if (isStoryModuleActive) {
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
                            
                            // Split the content into manageable chunks
                            const chunks = splitTextIntoChunks(storyTextContent, 200);
                            
                            if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] Split story content into ${chunks.length} chunks`);
                            
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
function highlightVocabularyInternal() {
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
function toggleReadAloudInternal() {
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
function splitTextIntoChunks(text, chunkSize = 200) {
    // Try to split at sentence boundaries
    const sentences = text.match(/[^.!?।]+[.!?।]+/g) || [];
    
    if (sentences.length === 0) {
        return [text];
    }
    
    const chunks = [];
    let currentChunk = '';
    
    sentences.forEach(sentence => {
        // If adding this sentence would make the chunk too long, start a new chunk
        if (currentChunk.length + sentence.length > chunkSize) {
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

// Speak text chunks sequentially
function speakChunksSequentially(chunks, index = 0) {
    if (DEBUG_NARRATION) console.log(`[NARRATION DEBUG] speakChunksSequentially(chunks[${chunks.length}], ${index}) called`);
    
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
            // Speak the next chunk after a small delay
            setTimeout(() => {
                speakChunksSequentially(chunks, index + 1);
            }, 150); // Slightly shorter delay for better continuous narration
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
function togglePrintModeInternal() {
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
