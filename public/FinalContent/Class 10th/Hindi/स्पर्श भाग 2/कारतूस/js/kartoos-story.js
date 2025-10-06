/**
 * Story content and functionality for Kartoos
 */

// Global variables to track narration state
let autoNarrationEnabled = false;
let narrationDisabledByUser = false;
let currentDialogueIndex = 0;
let dialogueElements = [];
let currentDialogueGroup = 0;

// Show next dialogue group
function showNextDialogueGroup(groupNumber) {
    // Hide all dialogue groups
    document.querySelectorAll('.play-scene[id^="dialogue-group-"]').forEach(group => {
        group.style.display = 'none';
    });
    
    // Show the selected dialogue group
    const dialogueGroup = document.getElementById(`dialogue-group-${groupNumber}`);
    if (dialogueGroup) {
        dialogueGroup.style.display = 'block';
        currentDialogueGroup = groupNumber;
        
        // Scroll to the dialogue group
        dialogueGroup.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Collect all dialogues in the current group for narration
        dialogueElements = Array.from(dialogueGroup.querySelectorAll('.play-dialogue, .play-direction'));
        currentDialogueIndex = 0;
        
        // Start narration if auto-narration is enabled
        if (autoNarrationEnabled && !narrationDisabledByUser) {
            readCurrentDialogue();
        }
    }
}

// Read the current dialogue
function readCurrentDialogue() {
    if (!dialogueElements || dialogueElements.length === 0) {
        return;
    }
    
    if (currentDialogueIndex >= dialogueElements.length) {
        currentDialogueIndex = 0;
    }
    
    const dialogueElement = dialogueElements[currentDialogueIndex];
    
    // Remove previous highlight
    document.querySelectorAll('.dialogue-highlight').forEach(element => {
        element.classList.remove('dialogue-highlight');
    });
    
    // Add highlight to current dialogue
    dialogueElement.classList.add('dialogue-highlight');
    
    // Scroll to the current dialogue
    dialogueElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Get the text to narrate
    let textToNarrate = '';
    
    if (dialogueElement.classList.contains('play-dialogue')) {
        const character = dialogueElement.getAttribute('data-character');
        const dialogueText = dialogueElement.querySelector('.play-character').nextSibling.textContent.trim();
        textToNarrate = `${character}: ${dialogueText}`;
    } else if (dialogueElement.classList.contains('play-direction')) {
        textToNarrate = dialogueElement.textContent.trim();
    }
    
    // Narrate the text
    if (window.narrator) {
        window.narrator.speak(textToNarrate);
        
        // Set callback to read the next dialogue when this one ends
        window.narrator.onEndCallback = () => {
            currentDialogueIndex++;
            if (currentDialogueIndex < dialogueElements.length) {
                setTimeout(() => {
                    readCurrentDialogue();
                }, 500);
            } else {
                // End of the current dialogue group
                console.log('End of dialogue group');
            }
        };
    }
}

// Toggle read aloud for the current part
function readCurrentStoryPartAloud() {
    // Initialize dialogue elements if not done already
    const activeStoryPart = document.querySelector('.story-part.active');
    if (activeStoryPart) {
        // Always collect ALL dialogue elements from the entire play
        // This ensures we can narrate the entire play regardless of visibility
        dialogueElements = Array.from(activeStoryPart.querySelectorAll('.play-dialogue, .play-direction'));
        currentDialogueIndex = 0;
        
        console.log(`Found ${dialogueElements.length} dialogue elements for narration`);
    } else {
        console.error('No active story part found');
        return;
    }
    
    // Start narration
    autoNarrationEnabled = true;
    narrationDisabledByUser = false;
    readCurrentDialogue();
}

// Toggle read aloud functionality
function toggleReadAloud() {
    if (window.narrator) {
        if (window.narrator.currentUtterance) {
            // Stop current narration
            window.narrator.stop();
            narrationDisabledByUser = true;
            autoNarrationEnabled = false;
        } else {
            // Start narration
            autoNarrationEnabled = true;
            narrationDisabledByUser = false;
            readCurrentStoryPartAloud();
        }
    }
}

// Story parts data
const storyParts = [
    {
        title: "लेखक परिचय",
        content: `
            <p>हबीब तनवीर का जन्म 1923 में छत्तीसगढ़ के रायपुर में हुआ था। उन्होंने 1944 में नागपुर से स्नातक की उपाधि प्राप्त की और फिर ब्रिटेन की नाटक अकादमी से नाट्य-लेखन का अध्ययन किया।</p>
            
            <p>हबीब तनवीर ने नाटककार, कवि, पत्रकार, नाट्य निर्देशक, अभिनेता जैसे कई रूपों में ख्याति प्राप्त की और <span class="highlight-vocab">लोकनाट्य<span class="vocab-tooltip">जनसामान्य के बीच लोकप्रिय नाटक</span></span> के क्षेत्र में भी महत्त्वपूर्ण कार्य किया।</p>
            
            <div class="vocabulary-note">
                <div class="word">लोकनाट्य</div>
                <div class="definition">जनसामान्य के बीच लोकप्रिय नाटक</div>
            </div>
            
            <p>दिल्ली लौटकर उन्होंने पेशेवर नाट्यमंच की स्थापना की। उनके प्रमुख नाटकों में आगरा बाज़ार, चरनदास चोर, देख रहे हैं नैन, हिरमा की अमर कहानी शामिल हैं। इसके अतिरिक्त उन्होंने बसंत ऋतु का सपना, शाजापुर की शांति बाई, मिट्टी की गाड़ी और मुद्राराक्षस जैसे नाटकों का आधुनिक <span class="highlight-vocab">रूपांतर<span class="vocab-tooltip">किसी रचना का नया स्वरूप देना</span></span> भी किया।</p>
            
            <div class="vocabulary-note">
                <div class="word">रूपांतर</div>
                <div class="definition">किसी रचना का नया स्वरूप देना</div>
            </div>
            
            <p>हबीब तनवीर को कई पुरस्कारों, फेलोशिप और पद्मश्री से सम्मानित किया गया। उनका निधन 2009 में हुआ।</p>
            
            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. हबीब तनवीर का जन्म कब और कहाँ हुआ था?</div>
                <div class="comprehension-question">2. हबीब तनवीर ने किस-किस रूप में ख्याति प्राप्त की?</div>
                <div class="comprehension-question">3. हबीब तनवीर के प्रमुख नाटकों के नाम क्या हैं?</div>
                <div class="comprehension-question">4. हबीब तनवीर ने किन नाटकों का आधुनिक रूपांतर किया?</div>
            </div>
        `
    },
    {
        title: "नाटक परिचय",
        content: `
            <div class="play-metadata">
                <div class="metadata-item">
                    <div class="metadata-label">पात्र</div>
                    <div class="metadata-value">कर्नल, लेफ्टीनेंट, सिपाही, सवार</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">अवधि</div>
                    <div class="metadata-value">5 मिनट</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">ज़माना</div>
                    <div class="metadata-value">सन् 1799</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">समय</div>
                    <div class="metadata-value">रात्रि का</div>
                </div>
                <div class="metadata-item">
                    <div class="metadata-label">स्थान</div>
                    <div class="metadata-value">गोरखपुर के जंगल में कर्नल कालिंज के खेमे का अंदरूनी हिस्सा</div>
                </div>
            </div>

            <div class="play-scene">
                <p class="play-direction">दो अंग्रेज़ बैठे बातें कर रहे हैं, कर्नल कालिंज और एक लेफ्टीनेंट खेमे के बाहर हैं। चाँदनी छिटकी हुई है, अंदर लैंप जल रहा है।</p>
                
                <p>इस नाटक में कर्नल कालिंज और उनके लेफ्टीनेंट वज़ीर अली के बारे में बात कर रहे हैं, जो अंग्रेज़ों के खिलाफ़ लड़ रहा है। वज़ीर अली जाँबाज़ और निडर है, जिसका एकमात्र लक्ष्य अंग्रेज़ों को हिंदुस्तान से निकालना है।</p>
                
                <p>वज़ीर अली मूल रूप से अवध का शासक था, जिसे अंग्रेज़ों द्वारा हटा दिया गया और उसकी जगह सआदत अली को बिठाया गया। वज़ीर अली ने कंपनी के वकील की हत्या कर दी और वह अब जंगलों में भटक रहा है।</p>
                
                <p>कर्नल वज़ीर अली का पीछा कर रहे हैं और उसे गिरफ़्तार करना चाहते हैं। नाटक के अंत में, एक सवार कर्नल से कारतूस माँगता है और बाद में खुद को वज़ीर अली के रूप में प्रकट करता है। वज़ीर अली की यह निडरता और साहस दिखाता है कि वह अपने दुश्मन के खेमे में जाकर उसी से कारतूस ले जाता है।</p>
            </div>

            <div class="comprehension-check">
                <h3>📝 बोध प्रश्न</h3>
                <div class="comprehension-question">1. कर्नल कालिंज का खेमा कहाँ है?</div>
                <div class="comprehension-question">2. वज़ीर अली कौन था?</div>
                <div class="comprehension-question">3. वज़ीर अली को क्यों हटाया गया था?</div>
                <div class="comprehension-question">4. कर्नल वज़ीर अली का पीछा क्यों कर रहे थे?</div>
            </div>
        `
    },
    {
        title: "नाटक",
        content: `
            <div class="play-scene">
                <p class="play-direction">दो अंग्रेज़ बैठे बातें कर रहे हैं, कर्नल कालिंज और एक लेफ्टीनेंट खेमे के बाहर हैं। चाँदनी छिटकी हुई है, अंदर लैंप जल रहा है।</p>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> जंगल की जिंदगी बड़ी खतरनाक होती है।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> हफ़्तों हो गए यहाँ खेमा डाले हुए। सिपाही भी तंग आ गए हैं। ये वज़ीर अली आदमी है या भूत, हाथ ही नहीं लगता।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> उसके अफ़साने सुनकर रॉबिनहुड के कारनामे याद आ जाते हैं। अंग्रेज़ों के खिलाफ़ उसके दिल में किस कदर नफ़रत है। कोई पाँच महीने हुकूमत की होगी मगर इस पाँच महीने में वो अवध के दरबार को अंग्रेज़ी असर से बिलकुल पाक कर देने में तकरीबन कामयाब हो गया था।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> ये सआदत अली कौन है?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> आसिफ़उद्दौला का भाई है। वज़ीर अली का और उसका दुश्मन। असल में नवाब आसिफ़उद्दौला के यहाँ लड़के की कोई उम्मीद नहीं थी। वज़ीर अली की पैदाइश को सआदत अली ने अपनी मौत खयाल किया।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> मगर सआदत अली को अवध के तख्त पर बिठाने में क्या मसलेहत थी?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> सआदत अली हमारा दोस्त है और बहुत ऐश पसंद आदमी है। इसलिए हमें अपनी आधी मुमलिकत दे दी और दस लाख रुपये नगद। अब वो भी मज़े करता है और हम भी।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> सुना है ये वज़ीर अली अफ़गानिस्तान के बादशाह शाहे-जमा को हिंदुस्तान पर हमला करने की दावत दे रहा है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> अफ़गानिस्तान को हमले की दावत सबसे पहले असल में टीपू सुल्तान ने दी फिर वज़ीर अली ने भी उसे दिल्ली बुलाया और फिर शमसुद्दौला ने भी।
                </div>
            </div>
            
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(1)">अगला संवाद</button>
                </div>
            
            <div class="play-scene" id="dialogue-group-1">
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> कौन शमसुद्दौला?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> नवाब बंगाल का निस्बती भाई। बहुत ही खतरनाक आदमी है।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> इसका तो मतलब ये हुआ कि कंपनी के खिलाफ़ सारे हिंदुस्तान में एक लहर दौड़ गई है।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(2)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-2">
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> जी हाँ, और अगर ये कामयाब हो गई तो बक्सर और प्लासी के कारनामे धरे रह जाएँगे और कंपनी जो कुछ लॉर्ड क्लाइव के हाथों हासिल कर चुकी है, लॉर्ड वेल्जली के हाथों सब खो बैठेगी।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> वज़ीर अली की आज़ादी बहुत खतरनाक है। हमें किसी न किसी तरह इस शख्स को गिरफ़्तार कर ही लेना चाहिए।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> पूरी एक फ़ौज लिए उसका पीछा कर रहा हूँ और बरसों से वो हमारी आँखों में धूल झोंक रहा है और इन्हीं जंगलों में फिर रहा है और हाथ नहीं आता। उसके साथ चंद जाँबाज़ हैं। मुट्ठी भर आदमी मगर ये दमखम है।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(3)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-3">
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> सुना है वज़ीर अली जाती तौर से भी बहुत बहादुर आदमी है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> बहादुर न होता तो यूँ कंपनी के वकील को कत्ल कर देता?
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> ये कत्ल का क्या किस्सा हुआ था कर्नल?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> किस्सा क्या हुआ था उसको उसके पद से हटाने के बाद हमने वज़ीर अली को बनारस पहुँचा दिया और तीन लाख रुपया सालाना वजीफ़ा मुकर्रर कर दिया। कुछ महीने बाद गवर्नर जनरल ने उसे कलकत्ता तलब किया। वज़ीर अली कंपनी के वकील के पास गया जो बनारस में रहता था और उससे शिकायत की कि गवर्नर जनरल उसे कलकत्ता में क्यूँ तलब करता है। वकील ने शिकायत की परवाह नहीं की उलटा उसे बुरा-भला सुना दिया। वज़ीर अली के तो दिल में यूँ भी अंग्रेज़ों के खिलाफ़ नफ़रत कूट-कूटकर भरी है उसने खंजर से वकील का काम तमाम कर दिया।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(4)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-4">
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> और भाग गया?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> अपने जानिसारों समेत आज़मगढ़ की तरफ़ भाग गया। आज़मगढ़ के हुक्मरां ने उन लोगों को अपनी हिफ़ाज़त में घागरा तक पहुँचा दिया। अब ये कारवाँ इन जंगलों में कई साल से भटक रहा है।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> मगर वज़ीर अली की स्कीम क्या है?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> स्कीम ये है कि किसी तरह नेपाल पहुँच जाए। अफ़गानी हमले का इंतेज़ार करे, अपनी ताकत बढ़ाए, सआदत अली को उसके पद से हटाकर खुद अवध पर कब्ज़ा करे और अंग्रेज़ों को हिंदुस्तान से निकाल दे।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> नेपाल पहुँचना तो कोई ऐसा मुश्किल नहीं, मुमकिन है कि पहुँच गया हो।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> हमारी फ़ौजें और नवाब सआदत अली खाँ के सिपाही बड़ी सख्ती से उसका पीछा कर रहे हैं। हमें अच्छी तरह मालूम है कि वो इन्हीं जंगलों में है।
                </div>
                
                <div class="play-direction">(एक सिपाही तेज़ी से दाखिल होता है)</div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(5)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-5">
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> (उठकर) क्या बात है?
                </div>
                
                <div class="play-dialogue" data-character="सिपाही">
                    <span class="play-character">सिपाही (गोरा):</span> दूर से गर्द उठती दिखाई दे रही है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> सिपाहियों से कह दो कि तैयार रहें (सिपाही सलाम करके चला जाता है)।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> (जो खिड़की से बाहर देखने में मसरूफ़ था) गर्द तो ऐसी उड़ रही है जैसे कि पूरा एक काफ़िला चला आ रहा हो मगर मुझे तो एक ही सवार नज़र आता है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> (खिड़की के पास जाकर) हाँ एक ही सवार है। सरपट घोड़ा दौड़ाए चला आ रहा है।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> और सीधा हमारी तरफ़ आता मालूम होता है (कर्नल ताली बजाकर सिपाही को बुलाता है)।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> (सिपाही से) सिपाहियों से कहो, इस सवार पर नज़र रखें कि ये किस तरफ़ जा रहा है (सिपाही सलाम करके चला जाता है)।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(6)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-6">
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> शुब्हे की तो कोई गुंजाइश ही नहीं तेजी से इसी तरफ़ आ रहा है (टापों की आवाज़ बहुत करीब आकर रुक जाती है)।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> (बाहर से) मुझे कर्नल से मिलना है।
                </div>
                
                <div class="play-dialogue" data-character="सिपाही">
                    <span class="play-character">सिपाही (गोरा):</span> (चिल्लाकर) बहुत खूब।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> (बाहर से) जी।
                </div>
                
                <div class="play-dialogue" data-character="सिपाही">
                    <span class="play-character">सिपाही (गोरा):</span> (अंदर आकर) हुजूर सवार आपसे मिलना चाहता है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> भेज दो।
                </div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> वज़ीर अली का कोई आदमी होगा हमसे मिलकर उसे गिरफ़्तार करवाना चाहता होगा।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> खामोश रहो (सवार सिपाही के साथ अंदर आता है)।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(7)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-7">
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> (आते ही पुकार उठता है) तन्हाई! तन्हाई!
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> साहब यहाँ कोई गैर आदमी नहीं है आप राज़ेदिल कह दें।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> दीवार हमगोश दारद, तन्हाई।
                </div>
                
                <div class="play-direction">(कर्नल, लेफ्टीनेंट और सिपाही को इशारा करता है। दोनों बाहर चले जाते हैं। जब कर्नल और सवार खेमे में तन्हा रह जाते हैं तो जरा वक्फ़े के बाद चारों तरफ़ देखकर सवार कहता है)</div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> आपने इस मुकाम पर क्यों खेमा डाला है?
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(8)">अगला संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-8">
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> कंपनी का हुक्म है कि वज़ीर अली को गिरफ़्तार किया जाए।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> लेकिन इतना लावलश्कर क्या मायने?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> गिरफ़्तारी में मदद देने के लिए।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> वज़ीर अली की गिरफ़्तारी बहुत मुश्किल है साहब।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> क्यों?
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> वो एक जाँबाज़ सिपाही है।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> मैंने भी यह सुन रखा है। आप क्या चाहते हैं?
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> चंद कारतूस।
                </div>
                
                <div class="next-dialogue-container" style="display:none;">
                    <button class="next-dialogue-btn" onclick="showNextDialogueGroup(9)">अंतिम संवाद</button>
                </div>
            </div>
            
            <div class="play-scene" id="dialogue-group-9">
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> किसलिए?
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> वज़ीर अली को गिरफ़्तार करने के लिए।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> ये लो दस कारतूस।
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> (मुसकराते हुए) शुक्रिया।
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> आपका नाम?
                </div>
                
                <div class="play-dialogue" data-character="सवार">
                    <span class="play-character">सवार:</span> वज़ीर अली। आपने मुझे कारतूस दिए इसलिए आपकी जान बख्शी करता हूँ।
                </div>
                
                <div class="play-direction">(ये कहकर बाहर चला जाता है, टापों का शोर सुनाई देता है। कर्नल एक सन्नाटे में है। हक्का-बक्का खड़ा है कि लेफ्टीनेंट अंदर आता है)</div>
                
                <div class="play-dialogue" data-character="लेफ्टीनेंट">
                    <span class="play-character">लेफ्टीनेंट:</span> कौन था?
                </div>
                
                <div class="play-dialogue" data-character="कर्नल">
                    <span class="play-character">कर्नल:</span> (दबी ज़बान से अपने आप से कहता है) एक जाँबाज़ सिपाही।
                </div>
                
                <div class="play-direction" style="text-align:center; margin-top:30px; font-weight:bold;">- समाप्त -</div>
            </div>
            
            <div class="glossary">
                <h3 class="glossary-title">शब्दार्थ और टिप्पणियाँ</h3>
                <table class="glossary-table">
                    <tr>
                        <th>शब्द</th>
                        <th>अर्थ</th>
                    </tr>
                    <tr>
                        <td>खेमा</td>
                        <td>तंबू</td>
                    </tr>
                    <tr>
                        <td>अफ़साने (अफ़साना)</td>
                        <td>कहानियाँ</td>
                    </tr>
                    <tr>
                        <td>कारनामे (कारनामा)</td>
                        <td>अच्छे या बुरे काम</td>
                    </tr>
                    <tr>
                        <td>हुकूमत</td>
                        <td>शासन</td>
                    </tr>
                    <tr>
                        <td>पैदाइश</td>
                        <td>जन्म</td>
                    </tr>
                    <tr>
                        <td>तख्त</td>
                        <td>सिंहासन</td>
                    </tr>
                    <tr>
                        <td>मसलेहत</td>
                        <td>दूरदर्शिता, बुद्धिमानी</td>
                    </tr>
                    <tr>
                        <td>ऐश-पसंद</td>
                        <td>भोग-विलास पसंद करने वाला</td>
                    </tr>
                    <tr>
                        <td>जाँबाज़</td>
                        <td>जान की बाज़ी लगाने वाला</td>
                    </tr>
                    <tr>
                        <td>दमखम</td>
                        <td>शक्ति और दृढ़ता</td>
                    </tr>
                    <tr>
                        <td>जाती तौर से</td>
                        <td>व्यक्तिगत रूप से</td>
                    </tr>
                    <tr>
                        <td>वज़ीफ़ा</td>
                        <td>परवरिश के लिए दी जाने वाली राशि</td>
                    </tr>
                    <tr>
                        <td>मुकर्रर</td>
                        <td>तय करना</td>
                    </tr>
                    <tr>
                        <td>तलब किया</td>
                        <td>याद किया</td>
                    </tr>
                    <tr>
                        <td>हुकमरां</td>
                        <td>शासक</td>
                    </tr>
                    <tr>
                        <td>हिफ़ाज़त</td>
                        <td>सुरक्षा</td>
                    </tr>
                    <tr>
                        <td>गर्द</td>
                        <td>धूल</td>
                    </tr>
                    <tr>
                        <td>काफ़िला</td>
                        <td>एक क्षेत्र से दूसरे क्षेत्र में जाने वाले यात्रियों का समूह</td>
                    </tr>
                    <tr>
                        <td>शुब्हे</td>
                        <td>संदेह</td>
                    </tr>
                    <tr>
                        <td>गुंजाइश</td>
                        <td>संभावना</td>
                    </tr>
                    <tr>
                        <td>तन्हाई</td>
                        <td>एकांत</td>
                    </tr>
                    <tr>
                        <td>दीवार हमगोश दारद</td>
                        <td>दीवारों के भी कान होते हैं</td>
                    </tr>
                    <tr>
                        <td>मुकाम</td>
                        <td>पड़ाव</td>
                    </tr>
                    <tr>
                        <td>लावलश्कर</td>
                        <td>सेना का बड़ा समूह और युद्ध-सामग्री</td>
                    </tr>
                    <tr>
                        <td>कारतूस</td>
                        <td>पीतल और दफ़्ती आदि की एक नली जिसमें गोली तथा बारूद भरी रहती है</td>
                    </tr>
                </table>
            </div>
        `
    }
];

// Show a specific part of the story
function showStoryPart(partNumber) {
    if (partNumber < 1 || partNumber > storyParts.length) return;
    
    console.log(`Loading story part ${partNumber}`);
    
    // Update navigation buttons
    document.querySelectorAll('.story-nav-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === partNumber);
        btn.setAttribute('aria-pressed', index + 1 === partNumber ? 'true' : 'false');
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
        
        // If it's the play part (part 3), don't add the read-aloud button as we'll use dialogue narration instead
        if (partNumber !== 3) {
            // Add button to the end of the part
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            buttonContainer.appendChild(readAloudBtn);
            partContainer.appendChild(buttonContainer);
        }
        
        // For the play part (part 3), initialize and make all dialogue groups visible
        if (partNumber === 3) {
            // Make all dialogue groups visible by default
            partContainer.querySelectorAll('.play-scene[id^="dialogue-group-"]').forEach(group => {
                group.style.display = 'block';
            });
            
            // Hide next dialogue buttons since all content is visible
            partContainer.querySelectorAll('.next-dialogue-btn').forEach(btn => {
                btn.style.display = 'none';
            });
            
            // Give a small delay to make sure all elements are rendered
            setTimeout(() => {
                // Collect all dialogues in the main part for narration
                dialogueElements = Array.from(partContainer.querySelectorAll('.play-dialogue, .play-direction'));
                currentDialogueIndex = 0;
                
                // Start narration automatically for the play
                readCurrentStoryPartAloud();
            }, 500);
        }
    }
    
    // Scroll to top of story
    storyContent.scrollTop = 0;
    
    // Stop any ongoing narration when switching parts
    if (window.narrator && window.narrator.currentUtterance) {
        console.log('Stopping ongoing narration due to part switch');
        window.narrator.stop();
        
        // Clear any reading indicators from previous parts
        document.querySelectorAll('.reading-indicator').forEach(indicator => {
            indicator.classList.add('fade-out');
            setTimeout(() => {
                if (indicator.parentNode) indicator.remove();
            }, 500);
        });
        
        // Clear any paragraph highlights from previous parts
        document.querySelectorAll('.paragraph-highlight, .dialogue-highlight').forEach(p => {
            p.classList.remove('paragraph-highlight', 'dialogue-highlight');
        });
    }
    
    // Announce part change with narrator if available
    if (window.narrator) {
        // Small delay to ensure the previous narration has stopped
        setTimeout(() => {
            if (partNumber === 3) {
                // For play part, don't automatically start narration
                console.log('Play part loaded, but auto-narration is disabled for this part');
            } else {
                // Automatically start reading the new part when switching within story module
                console.log(`Auto-starting narration for story part ${partNumber}`);
                readStoryPartAloud(partNumber, false); // false = automatic call
            }
        }, 100);
    }
}

// Read a specific story part aloud
function readStoryPartAloud(partNumber, isManualCall = true) {
    console.log(`Reading story part ${partNumber} aloud (manual: ${isManualCall})`);
    
    // Enable auto-narration only when user manually starts reading
    if (isManualCall) {
        autoNarrationEnabled = true;
        narrationDisabledByUser = false; // Re-enable auto-narration when user manually starts
    }
    
    // Track user interaction for speech synthesis
    if (typeof trackUserInteraction === 'function') {
        trackUserInteraction();
    }
    
    // Stop any ongoing narration first to avoid interruption errors
    if (window.narrator && window.narrator.currentUtterance) {
        console.log('Stopping ongoing narration before starting new one');
        window.narrator.stop();
    }
    
    if (partNumber < 1 || partNumber > storyParts.length) {
        console.error(`Invalid part number: ${partNumber}`);
        return;
    }
    
    const part = storyParts[partNumber - 1];
    if (!part) {
        console.error(`Story part ${partNumber} not found`);
        return;
    }
    
    // For play part (part 3), use dialogue narration
    if (partNumber === 3) {
        readCurrentStoryPartAloud();
        return;
    }
    
    // Extract plain text from the story part
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = part.content;
    
    // Get all paragraphs and remove vocabulary notes
    const paragraphs = tempDiv.querySelectorAll('p');
    
    // Filter out empty paragraphs and those that are part of vocabulary notes
    const validParagraphs = Array.from(paragraphs).filter(p => {
        // Skip if it's empty
        if (p.textContent.trim().length === 0) return false;
        
        // Skip if it's inside a vocabulary note
        if (p.closest('.vocabulary-note')) return false;
        
        // Skip if it's inside a comprehension check
        if (p.closest('.comprehension-check')) return false;
        
        // Skip if it's a button or interactive element
        if (p.closest('button') || p.tagName === 'BUTTON') return false;
        
        return true;
    });
    
    // Extract text content to read
    let storyText = '';
    
    // Add title
    storyText += `${part.title}. `;
    
    // Add paragraph content
    if (validParagraphs.length > 0) {
        storyText += validParagraphs
            .map(p => {
                // Create a clone of the paragraph to work with
                const pClone = p.cloneNode(true);
                
                // Remove vocabulary tooltips from the clone
                pClone.querySelectorAll('.vocab-tooltip').forEach(tooltip => {
                    tooltip.remove();
                });
                
                // Get clean text without tooltips
                let text = pClone.textContent.trim();
                text = text.replace(/\s+/g, ' '); // Normalize whitespace
                return text;
            })
            .filter(text => text.length > 0) // Remove empty strings
            .join(' ');
    }
    
    console.log(`Prepared text for narration (${storyText.length} characters)`);
    
    // Read the text aloud
    if (window.narrator && window.narrator.enabled) {
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
                }, Math.min(storyText.length * 100, 60000)); // Dynamic timeout based on text length, max 1 minute
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
            window.narrator.speak(storyText);
            console.log('Narration started');
            
            // Highlight paragraphs as they are being read
            highlightParagraphsSequentially(validParagraphs);
            
        } catch (error) {
            console.error('Error starting narration:', error);
            alert('क्षमा करें, वाचन शुरू करने में त्रुटि हुई। कृपया पुनः प्रयास करें।');
        }
    } else {
        console.error('Narrator not available');
        alert('आपके ब्राउज़र में स्पीच सिंथेसिस उपलब्ध नहीं है।');
    }
}

// Stop ongoing narration
function stopNarration() {
    if (window.narrator) {
        window.narrator.stop();
        console.log('Narration stopped');
        
        // Disable auto-narration when user manually stops
        autoNarrationEnabled = false;
        narrationDisabledByUser = true; // Mark that user has disabled narration
        
        // Remove all reading indicators
        document.querySelectorAll('.reading-indicator').forEach(indicator => {
            indicator.classList.add('fade-out');
            setTimeout(() => {
                if (indicator.parentNode) indicator.remove();
            }, 500);
        });
        
        // Remove all paragraph highlights
        document.querySelectorAll('.paragraph-highlight, .dialogue-highlight').forEach(p => {
            p.classList.remove('paragraph-highlight', 'dialogue-highlight');
        });
        
        // Clear any timeouts
        if (window.readingTimeout && typeof clearTimeout === 'function') {
            clearTimeout(window.readingTimeout);
        }
        
        if (window.highlightTimeouts && typeof clearTimeout === 'function') {
            window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
            window.highlightTimeouts = [];
        }
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
    
    // Estimate total reading time (about 15 characters per second)
    const totalReadingTime = totalTextLength / 15 * 1000;
    
    // Highlight each paragraph at the appropriate time
    paragraphs.forEach((paragraph, index) => {
        const textLength = paragraph.textContent.length;
        const startPercentage = cumulativeLength / totalTextLength;
        cumulativeLength += textLength;
        
        // Calculate when to highlight this paragraph
        const highlightTime = startPercentage * totalReadingTime;
        
        // Set timeout to add highlight
        const highlightTimeout = setTimeout(() => {
            // Remove highlight from previous paragraphs
            if (index > 0) {
                paragraphs[index - 1].classList.remove('paragraph-highlight');
            }
            
            // Add highlight to current paragraph
            paragraph.classList.add('paragraph-highlight');
            
            // Scroll to the paragraph
            paragraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

// Function for the "Next Dialogue" button
function nextDialogue() {
    // Always reinitialize dialogue elements to ensure we have all of them
    const activeStoryPart = document.querySelector('.story-part.active');
    if (activeStoryPart) {
        dialogueElements = Array.from(activeStoryPart.querySelectorAll('.play-dialogue, .play-direction'));
        
        // If this is the first time, start from the beginning
        if (currentDialogueIndex < 0 || currentDialogueIndex >= dialogueElements.length) {
            currentDialogueIndex = 0;
        }
    }
    
    if (!dialogueElements || dialogueElements.length === 0) {
        console.error('No dialogue elements found');
        return;
    }
    
    // Stop any ongoing narration
    if (window.narrator && window.narrator.currentUtterance) {
        window.narrator.stop();
    }
    
    // Increment dialogue index
    currentDialogueIndex++;
    if (currentDialogueIndex >= dialogueElements.length) {
        // We've reached the end, loop back to the beginning
        currentDialogueIndex = 0;
        
        // Show a message that we're starting over
        const storyContent = document.getElementById('storyContent');
        if (storyContent) {
            const loopMessage = document.createElement('div');
            loopMessage.className = 'feedback-message info show';
            loopMessage.textContent = 'नाटक का अंत। फिर से शुरू से सुनने के लिए बटन दबाएँ।';
            storyContent.appendChild(loopMessage);
            
            // Remove the message after a few seconds
            setTimeout(() => {
                loopMessage.classList.remove('show');
                setTimeout(() => loopMessage.remove(), 500);
            }, 3000);
            
            return;
        }
    }
    
    // Read the current dialogue
    readCurrentDialogue();
}
