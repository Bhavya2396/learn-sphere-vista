/**
 * Answer display functionality for गतिविधियाँ tab
 */

// Define the answer content for the speaking activity
const speakingActivityAnswer = {
    title: "पंक्तियों का विश्लेषण",
    content: `
        <p>इन पंक्तियों में प्रकृति की निम्नलिखित विशेषताओं का वर्णन किया गया है:</p>
        <ul>
            <li><span class="term">परिवर्तनशीलता:</span> "पल-पल परिवर्तित प्रकृति-वेश" - प्रकृति का रूप पल-पल बदलता रहता है, विशेषकर वर्षा ऋतु में।</li>
            <li><span class="term">विशालता:</span> "मेखलाकार पर्वत अपार" - पर्वतों की विशालता और विस्तार का वर्णन है।</li>
            <li><span class="term">सजीवता:</span> पर्वतों को मानवीय विशेषताओं से युक्त दिखाया गया है, जैसे वे अपनी आँखें खोलकर देख रहे हैं।</li>
        </ul>
        
        <p>कवि ने प्रकृति के चित्रण के लिए निम्नलिखित बिंब और अलंकार का प्रयोग किया है:</p>
        <ul>
            <li><span class="term">मानवीकरण अलंकार:</span> पर्वत को मानवीय विशेषताओं से युक्त दिखाया गया है - "अपने सहस्र दृग-सुमन फाड़"। यहाँ पर्वत आँखें खोलकर देख रहा है।</li>
            <li><span class="term">उपमा अलंकार:</span> "दृग-सुमन" में आँखों की तुलना फूलों से की गई है।</li>
            <li><span class="term">रूपक अलंकार:</span> "प्रकृति-वेश" में प्रकृति के परिवर्तनशील रूप को वस्त्र के समान दर्शाया गया है।</li>
            <li><span class="term">दृश्य बिंब:</span> "मेखलाकार पर्वत" पर्वतों की श्रृंखला का दृश्य प्रस्तुत करता है।</li>
        </ul>
        
        <p>इन पंक्तियों में कवि ने वर्षा ऋतु में पर्वतीय प्रदेश के सौंदर्य का सजीव चित्रण किया है, जहाँ प्रकृति का रूप निरंतर बदल रहा है और पर्वत मानो जीवंत होकर अपनी आँखें खोलकर इस परिवर्तन को देख रहे हैं।</p>
    `
};

// Initialize the answer display functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in the activities module
    const activitiesModule = document.getElementById('activities');
    if (!activitiesModule) return;
    
    // Find the speaking activity section
    const speakingActivity = activitiesModule.querySelector('.speaking-activity');
    if (!speakingActivity) return;
    
    // Find the record button that needs to be replaced
    const recordButton = speakingActivity.querySelector('.interactive-btn');
    if (!recordButton) return;
    
    // Create the answer container
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    answerContainer.innerHTML = `
        <div class="answer-title">
            <span class="answer-title-icon">💡</span>
            ${speakingActivityAnswer.title}
        </div>
        <div class="answer-content">
            ${speakingActivityAnswer.content}
        </div>
    `;
    
    // Replace the record button with the answer container
    recordButton.parentNode.replaceChild(answerContainer, recordButton);
});
