// --- Gift Database ---
// Genders: 'male', 'female', 'unisex'
// Occasions: 'birthday', 'anniversary', 'holiday', 'graduation', 'housewarming', 'generic'
const giftDatabase = [
    {
        id: "gt-01",
        name: "Retro Handheld Game Console",
        desc: "Preloaded with classic games. Compact, nostalgic, and perfect for gaming on the go.",
        price: "45.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=retro+handheld+game+console" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=retro+handheld+console" }
        ]
    },
    {
        id: "gt-02",
        name: "Smart Reusable Notebook",
        desc: "Digitize handwritten notes to cloud services while offering a classic writing experience.",
        price: "32.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "graduation", "holiday", "generic"],
        interests: ["tech", "books"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=rocketbook+smart+reusable+notebook" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smart+notebook" }
        ]
    },
    {
        id: "gt-03",
        name: "Noise-Cancelling Headphones",
        desc: "Premium active noise cancellation, custom audio tunings, and ultra-comfortable earcups.",
        price: "249.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "graduation", "holiday"],
        interests: ["tech"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=sony+noise+cancelling+headphones" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=noise+cancelling+headphones" }
        ]
    },
    {
        id: "gt-04",
        name: "Keychron Mechanical Keyboard",
        desc: "Sleek wireless mechanical keyboard with customizable backlights and tactile switches.",
        price: "85.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=keychron+mechanical+keyboard" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=custom+mechanical+keyboard" }
        ]
    },
    {
        id: "gb-01",
        name: "Luxurious Leather Bookmark",
        desc: "Custom engraved full-grain leather bookmark with a gold foil holiday imprint.",
        price: "16.00",
        recipients: ["parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["heartfelt", "practical"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=leather+engraved+bookmark" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=leather+bookmark" }
        ]
    },
    {
        id: "gb-02",
        name: "Cozy Book Lover's Reading Light",
        desc: "Rechargeable, neck-worn amber reading light that prevents eye strain during late-night reads.",
        price: "19.99",
        recipients: ["partner", "parent", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=neck+reading+light" }
        ]
    },
    {
        id: "gb-03",
        name: "Premium Book Subscription Box",
        desc: "A curated monthly box delivering a new release book, specialty tea, and custom reading accessories.",
        price: "110.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["books"],
        tones: ["luxury", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "Cratejoy", url: "https://www.cratejoy.com/search?q=book+box" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=book+gift+box" }
        ]
    },
    {
        id: "gf-01",
        name: "Alpaca Wool Throw Scarf",
        desc: "Handcrafted, ethically sourced wool scarf that offers unparalleled softness and winter warmth.",
        price: "60.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["luxury", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=alpaca+wool+scarf" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=wool+scarf" }
        ]
    },
    {
        id: "gf-02",
        name: "Designer Leather Minimalist Wallet",
        desc: "Sleek cardholder wallet crafted from premium full-grain Italian leather.",
        price: "75.00",
        recipients: ["partner", "colleague", "friend"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "graduation", "holiday"],
        interests: ["fashion"],
        tones: ["luxury", "practical"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=minimalist+leather+wallet" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=handmade+leather+wallet" }
        ]
    },
    {
        id: "gf-03",
        name: "Novelty Cozy Socks Pack",
        desc: "A pack of 5 ridiculously soft custom socks featuring whimsical sketches and winter patterns.",
        price: "14.99",
        recipients: ["child", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["funny"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=funny+socks" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=cozy+novelty+socks" }
        ]
    },
    {
        id: "gc-01",
        name: "Cold Brew Maker & Carafe",
        desc: "Heavy-duty borosilicate glass coffee maker that brews smooth, low-acid cold brew right at home.",
        price: "34.00",
        recipients: ["partner", "parent", "colleague", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cold+brew+coffee+maker" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=cold+brew+maker" }
        ]
    },
    {
        id: "gc-02",
        name: "Hot Sauce Making Kit",
        desc: "Complete DIY kit with heirloom peppers, custom bottles, and gourmet spices to craft unique hot sauces.",
        price: "39.95",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=hot+sauce+kit" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=diy+hot+sauce+kit" }
        ]
    },
    {
        id: "gc-03",
        name: "Signature Cast Iron Dutch Oven",
        desc: "Enameled cast iron masterpiece for baking bread, simmering stews, and roasting savory dinners.",
        price: "155.00",
        recipients: ["partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "anniversary", "housewarming", "holiday"],
        interests: ["cooking"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=lodge+cast+iron+dutch+oven" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=dutch+oven" }
        ]
    },
    {
        id: "go-01",
        name: "Double-Nest Camping Hammock",
        desc: "Lightweight, parachute nylon camping hammock that fits easily into a compact travel pack.",
        price: "50.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=camping+hammock+double" },
            { name: "REI", url: "https://www.rei.com/search?q=hammock" }
        ]
    },
    {
        id: "go-02",
        name: "Gourmet S'mores Campfire Kit",
        desc: "Includes artisanal graham crackers, premium dark chocolates, and handmade marshmallows.",
        price: "22.50",
        recipients: ["child", "friend", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "cooking"],
        tones: ["heartfelt", "funny"],
        budget: "budget",
        sellers: [
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=smores+kit" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=smores+gift+box" }
        ]
    },
    {
        id: "go-03",
        name: "Waterproof Solar Powered Charger",
        desc: "Rugged, solar-assisted external power bank for charging smartphones during outdoor adventures.",
        price: "42.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=solar+charger+waterproof" }
        ]
    },
    {
        id: "gw-01",
        name: "Organic Essential Oil Diffuser",
        desc: "Whisper-quiet ceramic ultrasonic diffuser with ambient wood grain finish and soft night lights.",
        price: "35.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=ceramic+essential+oil+diffuser" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=oil+diffuser" }
        ]
    },
    {
        id: "gw-02",
        name: "Luxurious Weighted Blanket",
        desc: "Offers soothing sensory pressure to induce deeper sleep and relieve anxiety after long days.",
        price: "79.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=weighted+blanket" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=weighted+blanket" }
        ]
    },
    {
        id: "gw-03",
        name: "Gourmet Organic Tea Collection",
        desc: "Beautiful wooden box filled with 48 premium tea bags sourced from organic farms worldwide.",
        price: "24.95",
        recipients: ["parent", "colleague", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness", "cooking"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=organic+tea+gift+box" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=herbal+tea+gift+set" }
        ]
    }
];

// --- State Variables ---
const userSelections = {
    recipient: null,
    gender: null,
    occasion: null,
    interest: null,
    tone: null,
    budget: null
};

let currentStep = 1;
const totalSteps = 6;
let savedWishlist = JSON.parse(localStorage.getItem('presentperfect_wishlist')) || [];
let trackedGifts = JSON.parse(localStorage.getItem('presentperfect_tracked_gifts')) || [];
let campaignBudget = parseFloat(localStorage.getItem('presentperfect_campaign_budget')) || 1000;

// --- DOM References ---
const stepPanels = document.querySelectorAll('.step-panel');
const progressIndicator = document.getElementById('progress-indicator');
const stepCounter = document.getElementById('step-counter');
const btnBack = document.getElementById('btn-wizard-back');
const wizardCard = document.getElementById('gift-wizard-card');
const recommendationsView = document.getElementById('recommendations-view');
const recommendationsGrid = document.getElementById('recommendations-grid');
const btnRestart = document.getElementById('btn-restart-wizard');
const toastEl = document.getElementById('toast-el');

// Tabs
const tabButtons = document.querySelectorAll('.nav-tab');
const tabSections = document.querySelectorAll('.tab-section');

// Wishlist
const wishlistDrawer = document.getElementById('wishlist-drawer');
const btnToggleWishlist = document.getElementById('btn-toggle-wishlist');
const btnCloseWishlist = document.getElementById('btn-close-wishlist');
const wishlistItemsContainer = document.getElementById('wishlist-items');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistEmptyMsg = document.getElementById('wishlist-empty-msg');
const wishlistActionsPanel = document.getElementById('wishlist-actions-panel');
const btnPrintWishlist = document.getElementById('btn-print-wishlist');
const btnShareWishlist = document.getElementById('btn-share-wishlist');

// Tracker Elements
const inputCampaignBudget = document.getElementById('input-campaign-budget');
const trackerTotalSpent = document.getElementById('tracker-total-spent');
const trackerRemainingBudget = document.getElementById('tracker-remaining-budget');
const trackerWrappedCount = document.getElementById('tracker-wrapped-count');
const trackerTableBody = document.getElementById('tracker-table-body');
const trackerEmptyState = document.getElementById('tracker-empty-state');
const btnOpenAddManualTracker = document.getElementById('btn-open-add-tracker');
const btnExportCSV = document.getElementById('btn-export-csv');

// Modal Elements
const modalAddTracker = document.getElementById('modal-add-tracker');
const btnCloseTrackerModal = document.getElementById('btn-close-tracker-modal');
const trackerManualForm = document.getElementById('tracker-manual-form');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateWishlistUI();
    
    // Set budget value on input
    inputCampaignBudget.value = campaignBudget;
    updateTrackerUI();
    loadSharedWishlistFromURL();
    createParticles();
});

// --- Sparkling Particles Background (Linen Style) ---
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        
        const size = Math.random() * 5 + 1.5;
        const left = Math.random() * 100;
        const duration = Math.random() * 6 + 10;
        const delay = Math.random() * -10;
        
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${left}%`;
        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        p.style.opacity = Math.random() * 0.3 + 0.15;
        
        container.appendChild(p);
    }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Tabs Navigation
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabSections.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Option Button Clicks
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const val = button.getAttribute('data-val');
            
            const currentGrid = button.parentElement;
            currentGrid.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            
            button.classList.add('selected');
            userSelections[category] = val;
            
            setTimeout(() => {
                advanceStep();
            }, 200);
        });
    });

    // Back Button Click
    btnBack.addEventListener('click', () => {
        if (currentStep > 1) {
            regressStep();
        }
    });

    // Restart Button Click
    btnRestart.addEventListener('click', restartWizard);

    // Wishlist Toggle
    btnToggleWishlist.addEventListener('click', () => {
        wishlistDrawer.classList.toggle('open');
    });
    btnCloseWishlist.addEventListener('click', () => {
        wishlistDrawer.classList.remove('open');
    });

    // Print Wishlist
    btnPrintWishlist.addEventListener('click', () => {
        window.print();
    });

    // Share Wishlist
    btnShareWishlist.addEventListener('click', () => {
        const wishlistNames = savedWishlist.map(item => `${item.name} ($${item.price})`).join('\n');
        const shareText = `Check out my Wishlist generated on PresentPerfect:\n\n${wishlistNames}\n\nPlan yours at https://christmasgiftadvisor.vercel.app`;
        
        navigator.clipboard.writeText(shareText).then(() => {
            showToast("Copied to Clipboard! 📋");
        });
    });

    // Campaign Budget Input Change
    inputCampaignBudget.addEventListener('input', () => {
        const val = parseFloat(inputCampaignBudget.value) || 0;
        campaignBudget = val;
        localStorage.setItem('presentperfect_campaign_budget', campaignBudget);
        updateTrackerUI();
    });

    // Modal Control
    btnOpenAddManualTracker.addEventListener('click', () => {
        // Clear manual form input values
        trackerManualForm.reset();
        document.getElementById('track-gift-title').value = '';
        document.getElementById('track-price').value = '';
        document.getElementById('track-seller').value = 'Amazon';
        
        modalAddTracker.classList.remove('hidden');
    });

    btnCloseTrackerModal.addEventListener('click', () => {
        modalAddTracker.classList.add('hidden');
    });

    // Manual Log Submit
    trackerManualForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newTrackedItem = {
            id: 'tr-' + Date.now(),
            recipient: document.getElementById('track-recipient-name').value,
            occasion: document.getElementById('track-occasion').value,
            title: document.getElementById('track-gift-title').value,
            price: parseFloat(document.getElementById('track-price').value) || 0,
            seller: document.getElementById('track-seller').value || 'Amazon',
            status: document.getElementById('track-status').value || 'Planned'
        };
        
        trackedGifts.push(newTrackedItem);
        localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
        
        modalAddTracker.classList.add('hidden');
        updateTrackerUI();
        showToast("Gift logged to campaign dashboard! 🎄");
    });

    // CSV Export Triggers
    btnExportCSV.addEventListener('click', exportTrackerToCSV);
}

// --- Navigation Logic ---
function advanceStep() {
    if (currentStep < totalSteps) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        btnBack.removeAttribute('disabled');
    } else {
        generateRecommendations();
    }
}

function regressStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        
        if (currentStep === 1) {
            btnBack.setAttribute('disabled', 'true');
        }
    }
}

function restartWizard() {
    Object.keys(userSelections).forEach(k => userSelections[k] = null);
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 1;
    document.getElementById(`step-1`).classList.add('active');
    
    stepCounter.textContent = `Step 1 of ${totalSteps}`;
    progressIndicator.style.width = `16.66%`;
    btnBack.setAttribute('disabled', 'true');
    
    recommendationsView.classList.add('hidden');
    wizardCard.classList.remove('hidden');
    document.getElementById('main-heading').parentElement.classList.remove('hidden');
}

// --- Recommendations Generation ---
function generateRecommendations() {
    wizardCard.classList.add('hidden');
    document.getElementById('main-heading').parentElement.classList.add('hidden');
    recommendationsView.classList.remove('hidden');
    
    const matchedGifts = giftDatabase.filter(gift => {
        // Recipient check
        const recipientMatch = gift.recipients.includes(userSelections.recipient);
        
        // Gender preference check
        const genderMatch = gift.genders.includes(userSelections.gender) || gift.genders.includes('unisex');
        
        // Occasion check
        const occasionMatch = gift.occasions.includes(userSelections.occasion) || gift.occasions.includes('generic');
        
        // Interest check
        const interestMatch = gift.interests.includes(userSelections.interest);
        
        // Budget check
        const budgetMatch = gift.budget === userSelections.budget;
        
        return interestMatch && genderMatch && (recipientMatch || occasionMatch || budgetMatch);
    });

    renderRecommendations(matchedGifts.slice(0, 6));
}

function renderRecommendations(gifts) {
    recommendationsGrid.innerHTML = '';
    
    if (gifts.length === 0) {
        recommendationsGrid.innerHTML = `
            <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 48px;">
                <p style="font-size: 1.1rem; color: var(--charcoal-light); line-height: 1.6; font-style: italic;">
                    ✦ No direct matches found. Please try starting over with slightly broader filters.
                </p>
            </div>
        `;
        return;
    }

    gifts.forEach(gift => {
        const isSaved = savedWishlist.some(item => item.id === gift.id);
        const card = document.createElement('div');
        card.classList.add('gift-card');
        
        // Create sellers links HTML
        let sellersHTML = '';
        gift.sellers.forEach(seller => {
            sellersHTML += `<a href="${seller.url}" target="_blank" class="btn-shop-option">${seller.name}</a>`;
        });

        card.innerHTML = `
            <div class="gift-header">
                <span class="gift-badge">${gift.budget}</span>
                <button class="btn-save-gift" data-id="${gift.id}" aria-label="Save to Wishlist">
                    ${isSaved ? '⭐️' : '☆'}
                </button>
            </div>
            <h3 class="gift-title">${gift.name}</h3>
            <p class="gift-desc">${gift.desc}</p>
            <div class="gift-footer">
                <div class="gift-footer-row">
                    <span class="gift-price">$${gift.price}</span>
                    <button class="btn-track-action" data-id="${gift.id}">Log & Track</button>
                </div>
                <div class="seller-buttons-tray">
                    ${sellersHTML}
                </div>
            </div>
        `;
        
        // Wishlist button listener
        const saveBtn = card.querySelector('.btn-save-gift');
        saveBtn.addEventListener('click', () => toggleSaveGift(gift, saveBtn));
        
        // Log Tracker listener
        const trackBtn = card.querySelector('.btn-track-action');
        trackBtn.addEventListener('click', () => {
            // Pre-fill manual form and open modal
            document.getElementById('track-gift-title').value = gift.name;
            document.getElementById('track-price').value = gift.price;
            document.getElementById('track-seller').value = gift.sellers[0].name;
            
            // Map occasion parameter
            const selectOccasion = document.getElementById('track-occasion');
            const occasionVal = userSelections.occasion;
            if (occasionVal === 'birthday') selectOccasion.value = "Birthday";
            else if (occasionVal === 'anniversary') selectOccasion.value = "Anniversary";
            else if (occasionVal === 'holiday') selectOccasion.value = "Holiday";
            else if (occasionVal === 'graduation') selectOccasion.value = "Graduation";
            else if (occasionVal === 'housewarming') selectOccasion.value = "Housewarming";
            else selectOccasion.value = "Other";

            modalAddTracker.classList.remove('hidden');
        });

        recommendationsGrid.appendChild(card);
    });
}

// --- Wishlist Management ---
function toggleSaveGift(gift, buttonEl) {
    const index = savedWishlist.findIndex(item => item.id === gift.id);
    if (index === -1) {
        savedWishlist.push(gift);
        buttonEl.textContent = '⭐️';
    } else {
        savedWishlist.splice(index, 1);
        buttonEl.textContent = '☆';
    }
    
    localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    wishlistCountBadge.textContent = savedWishlist.length;
    wishlistItemsContainer.innerHTML = '';
    
    if (savedWishlist.length === 0) {
        wishlistItemsContainer.appendChild(wishlistEmptyMsg);
        wishlistActionsPanel.classList.add('hidden');
    } else {
        wishlistEmptyMsg.remove();
        wishlistActionsPanel.classList.remove('hidden');
        
        savedWishlist.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('saved-item');
            itemEl.innerHTML = `
                <div class="saved-item-info">
                    <span class="saved-item-title">${item.name}</span>
                    <span class="saved-item-price">$${item.price}</span>
                </div>
                <button class="btn-remove-saved" data-id="${item.id}" aria-label="Remove item">&times;</button>
            `;
            
            itemEl.querySelector('.btn-remove-saved').addEventListener('click', () => {
                savedWishlist = savedWishlist.filter(saved => saved.id !== item.id);
                localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
                updateWishlistUI();
                
                const starBtn = recommendationsGrid.querySelector(`.btn-save-gift[data-id="${item.id}"]`);
                if (starBtn) {
                    starBtn.textContent = '☆';
                }
            });
            
            wishlistItemsContainer.appendChild(itemEl);
        });
    }
}

// --- Gifting Tracker Engine ---
function updateTrackerUI() {
    // Calculate total spent
    const totalSpent = trackedGifts.reduce((sum, item) => sum + item.price, 0);
    const remainingBudget = campaignBudget - totalSpent;
    const wrappedCount = trackedGifts.filter(item => item.status === 'Wrapped' || item.status === 'Delivered').length;
    
    // Update summary labels
    trackerTotalSpent.textContent = `$${totalSpent.toFixed(2)}`;
    trackerRemainingBudget.textContent = `$${remainingBudget.toFixed(2)}`;
    
    // Change remaining budget text color if over budget
    if (remainingBudget < 0) {
        trackerRemainingBudget.style.color = 'var(--terracotta)';
    } else {
        trackerRemainingBudget.style.color = '';
    }

    trackerWrappedCount.textContent = `${wrappedCount} / ${trackedGifts.length} Items`;
    
    // Clear and draw table
    trackerTableBody.innerHTML = '';
    
    if (trackedGifts.length === 0) {
        trackerEmptyState.classList.remove('hidden');
        trackerTableBody.appendChild(trackerEmptyState);
        btnExportCSV.setAttribute('disabled', 'true');
    } else {
        trackerEmptyState.classList.add('hidden');
        btnExportCSV.removeAttribute('disabled');
        
        trackedGifts.forEach((item, index) => {
            const row = document.createElement('tr');
            
            // Map status CSS class
            let statusClass = 'status-planned';
            if (item.status === 'Ordered') statusClass = 'status-ordered';
            else if (item.status === 'Wrapped') statusClass = 'status-wrapped';
            else if (item.status === 'Delivered') statusClass = 'status-delivered';

            row.innerHTML = `
                <td><strong>${escapeHTML(item.recipient)}</strong></td>
                <td>${escapeHTML(item.occasion)}</td>
                <td>${escapeHTML(item.title)}</td>
                <td><strong>$${item.price.toFixed(2)}</strong></td>
                <td>${escapeHTML(item.seller)}</td>
                <td>
                    <select class="status-select ${statusClass}" data-id="${item.id}">
                        <option value="Planned" ${item.status === 'Planned' ? 'selected' : ''}>Planned</option>
                        <option value="Ordered" ${item.status === 'Ordered' ? 'selected' : ''}>Ordered / Shipped</option>
                        <option value="Wrapped" ${item.status === 'Wrapped' ? 'selected' : ''}>Wrapped & Ready</option>
                        <option value="Delivered" ${item.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </td>
                <td style="text-align: right;">
                    <button class="btn-delete-row" data-id="${item.id}" aria-label="Delete log">&times;</button>
                </td>
            `;
            
            // Inline status change listener
            const selectEl = row.querySelector('.status-select');
            selectEl.addEventListener('change', (e) => {
                const newStatus = e.target.value;
                item.status = newStatus;
                
                // Save and recalculate
                localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
                updateTrackerUI();
                showToast(`Status updated to: ${newStatus}`);
            });

            // Delete action
            row.querySelector('.btn-delete-row').addEventListener('click', () => {
                trackedGifts = trackedGifts.filter(g => g.id !== item.id);
                localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
                updateTrackerUI();
                showToast("Item deleted from dashboard.");
            });

            trackerTableBody.appendChild(row);
        });
    }
}

// --- CSV Exporter ---
function exportTrackerToCSV() {
    if (trackedGifts.length === 0) return;
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Recipient,Occasion,Gift Item,Price Paid,Seller,Status\n";
    
    trackedGifts.forEach(item => {
        const row = [
            `"${item.recipient.replace(/"/g, '""')}"`,
            `"${item.occasion.replace(/"/g, '""')}"`,
            `"${item.title.replace(/"/g, '""')}"`,
            `"${item.price.toFixed(2)}"`,
            `"${item.seller.replace(/"/g, '""')}"`,
            `"${item.status.replace(/"/g, '""')}"`
        ].join(',');
        csvContent += row + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PresentPerfect_Gifting_Tracker_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CSV file downloaded! 📊");
}

// --- Toast and Notifications ---
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove('hidden');
    
    setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 2000);
}

// --- Shared Wishlist Links import ---
function loadSharedWishlistFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedIds = urlParams.get('wishlist');
    
    if (sharedIds) {
        const idsArray = sharedIds.split(',');
        const matchedItems = giftDatabase.filter(gift => idsArray.includes(gift.id));
        
        if (matchedItems.length > 0) {
            matchedItems.forEach(item => {
                if (!savedWishlist.some(saved => saved.id === item.id)) {
                    savedWishlist.push(item);
                }
            });
            
            localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
            updateWishlistUI();
            
            wishlistDrawer.classList.add('open');
            window.history.replaceState({}, document.title, window.location.pathname);
            showToast(`Imported ${matchedItems.length} items to your wishlist! ✨`);
        }
    }
}

// Helper utility
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
