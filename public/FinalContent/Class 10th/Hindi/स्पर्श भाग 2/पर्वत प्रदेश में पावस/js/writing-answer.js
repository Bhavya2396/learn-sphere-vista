/**
 * Writing activity answer display functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find the writing activity section
    const writingActivity = document.querySelector('.writing-activity');
    if (!writingActivity) return;
    
    // Define the model answer content
    const modelAnswer = {
        title: "प्रकृति का सौंदर्य",
        content: `
            <p><strong>प्रकृति में ऋतुओं का महत्व:</strong> प्रकृति में विभिन्न ऋतुएँ अपना विशेष महत्व रखती हैं। प्रत्येक ऋतु प्रकृति को एक नया रूप प्रदान करती है। वसंत में जहाँ प्रकृति नवजीवन से भर जाती है, वहीं गर्मियों में सूरज की तपिश से प्रकृति तपती है। वर्षा ऋतु में प्रकृति हरियाली से भर जाती है और शरद ऋतु में प्रकृति शांत और स्वच्छ हो जाती है। शीत ऋतु में प्रकृति सुप्त अवस्था में चली जाती है। इस प्रकार, ऋतुएँ प्रकृति को निरंतर परिवर्तित करती रहती हैं और इसी परिवर्तन में प्रकृति का सौंदर्य निहित है।</p>
            
            <p><strong>वर्षा ऋतु का सौंदर्य:</strong> वर्षा ऋतु प्रकृति को नया जीवन प्रदान करती है। इस ऋतु में आकाश में काले-काले बादल छा जाते हैं, जिनसे रिमझिम वर्षा होती है। पेड़-पौधे हरे-भरे हो जाते हैं और धरती हरियाली से ढक जाती है। वर्षा की बूँदों से नहाकर पत्ते चमकने लगते हैं और फूल खिल उठते हैं। पहाड़ी क्षेत्रों में वर्षा का दृश्य और भी मनोहारी होता है। पहाड़ों से झरने बहने लगते हैं, नदियाँ उफान पर आ जाती हैं, और पर्वतों पर बादल मंडराते हैं। सुमित्रानंदन पंत ने अपनी कविता "पर्वत प्रदेश में पावस" में इसी सौंदर्य का चित्रण किया है।</p>
            
            <p><strong>प्रकृति और मनुष्य का संबंध:</strong> प्रकृति और मनुष्य का संबंध अत्यंत गहरा और अटूट है। प्रकृति मनुष्य को जीवन के लिए आवश्यक सभी संसाधन प्रदान करती है - हवा, पानी, भोजन, आश्रय आदि। इसके अलावा, प्रकृति मनुष्य के मन को शांति और आनंद भी प्रदान करती है। प्राचीन काल से ही मनुष्य प्रकृति की सुंदरता से प्रभावित होता आया है और उसने अपनी कलाओं में प्रकृति को स्थान दिया है। कवियों ने अपनी कविताओं में प्रकृति के विभिन्न रूपों का वर्णन किया है। आधुनिक युग में, जब मनुष्य प्रकृति से दूर होता जा रहा है, तब भी प्रकृति की ओर लौटने की चाह उसके मन में बनी रहती है।</p>
            
            <p><strong>प्रकृति का मानवीकरण:</strong> कविता में प्रकृति के मानवीकरण की परंपरा बहुत पुरानी है। कवि प्रकृति के विभिन्न तत्वों - पेड़-पौधों, नदियों, पहाड़ों, आकाश, बादलों आदि को मानवीय भावनाओं और क्रियाओं से युक्त दिखाते हैं। उदाहरण के लिए, "पर्वत प्रदेश में पावस" कविता में पंत जी ने पर्वतों को मानवीय विशेषताओं से युक्त दिखाया है - "अपने सहस्र दृग-सुमन फाड़"। यहाँ पर्वतों को आँखें खोलकर देखते हुए दिखाया गया है। इसी प्रकार, "मेघ आए बड़े बन-ठन के" में निराला जी ने बादलों को मानवीय वेशभूषा में आते हुए दिखाया है। प्रकृति का मानवीकरण कविता को अधिक सजीव और प्रभावशाली बनाता है और पाठक को प्रकृति के करीब लाता है।</p>
            
            <p>निष्कर्षतः, प्रकृति का सौंदर्य अनंत और अपार है। ऋतुओं के परिवर्तन से प्रकृति निरंतर नए रूप धारण करती रहती है। वर्षा ऋतु में प्रकृति का सौंदर्य अपने चरम पर होता है। प्रकृति और मनुष्य का संबंध अटूट है, और कवि प्रकृति के मानवीकरण के माध्यम से इस संबंध को और गहरा बनाते हैं। हमें प्रकृति के इस अनमोल खजाने की रक्षा करनी चाहिए और उसके साथ सामंजस्य बनाकर रहना चाहिए।</p>
        `
    };
    
    // Find the writing pad and replace it
    const writingPad = writingActivity.querySelector('.writing-pad');
    if (writingPad) {
        // Create the answer container
        const answerContainer = document.createElement('div');
        answerContainer.className = 'answer-container writing-answer';
        answerContainer.innerHTML = `
            <div class="answer-title">
                <span class="answer-title-icon">📝</span>
                ${modelAnswer.title}
            </div>
            <div class="answer-content">
                ${modelAnswer.content}
            </div>
        `;
        
        // Replace the writing pad with the answer container
        writingPad.parentNode.replaceChild(answerContainer, writingPad);
        
        // Update the button text to indicate it shows the answer
        const writingButton = writingActivity.querySelector('.interactive-btn');
        if (writingButton) {
            writingButton.textContent = '📄 उत्तर देखें';
            // The button will now just scroll to the answer when clicked
            // The actual functionality is handled in activities.js
        }
    }
});
