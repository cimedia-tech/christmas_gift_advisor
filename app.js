// --- Sparkling Particles Generator ---
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        
        // Randomize particle styles
        const size = Math.random() * 5 + 2; // 2px to 7px
        const left = Math.random() * 100; // 0% to 100%
        const duration = Math.random() * 8 + 8; // 8s to 16s
        const delay = Math.random() * -10;
        const opacity = Math.random() * 0.4 + 0.2;

        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${left}%`;
        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        p.style.opacity = opacity;

        container.appendChild(p);
    }
}

// --- Gift Database ---
// Occasions map: 'birthday', 'anniversary', 'holiday', 'graduation', 'housewarming', 'generic'
const giftDatabase = [
    {
        id: "gt-01",
        name: "Retro Handheld Game Console",
        desc: "Preloaded with classic games. Compact, nostalgic, and perfect for gaming on the go.",
        price: "$45",
        recipients: ["partner", "friend", "child"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["funny", "practical"],
        budget: "moderate"
    },
    {
        id: "gt-02",
        name: "Smart Reusable Notebook",
        desc: "Digitize handwritten notes to cloud services while offering a classic pen-and-paper writing experience.",
        price: "$30",
        recipients: ["partner", "parent", "friend", "colleague"],
        occasions: ["birthday", "graduation", "holiday", "generic"],
        interests: ["tech", "books"],
        tones: ["practical"],
        budget: "moderate"
    },
    {
        id: "gt-03",
        name: "Noise-Cancelling Over-Ear Headphones",
        desc: "Premium active noise cancellation, custom audio tunings, and ultra-comfortable earcups.",
        price: "$220",
        recipients: ["partner", "friend", "colleague"],
        occasions: ["birthday", "anniversary", "graduation", "holiday"],
        interests: ["tech"],
        tones: ["luxury", "practical"],
        budget: "luxury"
    },
    {
        id: "gt-04",
        name: "Keychron Mechanical Keyboard",
        desc: "Sleek wireless mechanical keyboard with customizable RGB backlights and tactile switches.",
        price: "$90",
        recipients: ["partner", "friend", "colleague"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["practical", "luxury"],
        budget: "premium"
    },
    {
        id: "gb-01",
        name: "Luxurious Leather Bookmark",
        desc: "Custom engraved full-grain leather bookmark with a gold foil holiday imprint.",
        price: "$18",
        recipients: ["parent", "friend", "colleague"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["heartfelt", "practical"],
        budget: "budget"
    },
    {
        id: "gb-02",
        name: "Cozy Book Lover's Reading Light",
        desc: "Rechargeable, neck-worn amber reading light that prevents eye strain during late-night reads.",
        price: "$20",
        recipients: ["partner", "parent", "friend", "child"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["practical"],
        budget: "budget"
    },
    {
        id: "gb-03",
        name: "Premium Book Subscription Box",
        desc: "A curated monthly box delivering a new release book, specialty tea, and custom reading accessories.",
        price: "$110",
        recipients: ["partner", "parent", "friend"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["books"],
        tones: ["luxury", "heartfelt"],
        budget: "premium"
    },
    {
        id: "gf-01",
        name: "Alpaca Wool Throw Scarf",
        desc: "Handcrafted, ethically sourced wool scarf that offers unparalleled softness and winter warmth.",
        price: "$65",
        recipients: ["partner", "parent", "friend"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["luxury", "heartfelt"],
        budget: "moderate"
    },
    {
        id: "gf-02",
        name: "Designer Leather Minimalist Wallet",
        desc: "Sleek cardholder wallet crafted from premium full-grain Italian leather.",
        price: "$85",
        recipients: ["partner", "colleague", "friend"],
        occasions: ["birthday", "graduation", "holiday"],
        interests: ["fashion"],
        tones: ["luxury", "practical"],
        budget: "premium"
    },
    {
        id: "gf-03",
        name: "Novelty Socks Pack",
        desc: "A pack of 5 ridiculously cozy, funny custom socks featuring whimsical sketches and patterns.",
        price: "$15",
        recipients: ["child", "friend", "colleague"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["funny"],
        budget: "budget"
    },
    {
        id: "gc-01",
        name: "Cold Brew Maker & Carafe",
        desc: "Heavy-duty borosilicate glass coffee maker that brews smooth, low-acid cold brew right at home.",
        price: "$35",
        recipients: ["partner", "parent", "colleague", "friend"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["practical"],
        budget: "moderate"
    },
    {
        id: "gc-02",
        name: "Hot Sauce Making Kit",
        desc: "Complete DIY kit with heirloom peppers, custom bottles, and gourmet spices to craft unique hot sauces.",
        price: "$40",
        recipients: ["partner", "friend", "colleague"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["funny", "practical"],
        budget: "moderate"
    },
    {
        id: "gc-03",
        name: "Signature Cast Iron Dutch Oven",
        desc: "Enameled cast iron masterpiece for baking bread, simmering stews, and roasting savory dinners.",
        price: "$160",
        recipients: ["partner", "parent"],
        occasions: ["birthday", "anniversary", "housewarming", "holiday"],
        interests: ["cooking"],
        tones: ["luxury", "practical"],
        budget: "luxury"
    },
    {
        id: "go-01",
        name: "Double-Nest Hammock",
        desc: "Lightweight, parachute nylon camping hammock that fits easily into a compact travel pack.",
        price: "$55",
        recipients: ["partner", "friend", "child"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical", "funny"],
        budget: "moderate"
    },
    {
        id: "go-02",
        name: "Gourmet S'mores Campfire Kit",
        desc: "Includes artisanal graham crackers, premium dark chocolates, and handmade marshmallows.",
        price: "$24",
        recipients: ["child", "friend", "parent"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "cooking"],
        tones: ["heartfelt", "funny"],
        budget: "budget"
    },
    {
        id: "go-03",
        name: "Solar Powered Charger & Power Bank",
        desc: "Rugged, waterproof external power bank for charging smartphones during outdoor adventures.",
        price: "$45",
        recipients: ["partner", "friend", "colleague"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "tech"],
        tones: ["practical"],
        budget: "moderate"
    },
    {
        id: "gw-01",
        name: "Organic Essential Oil Diffuser",
        desc: "Whisper-quiet ceramic ultrasonic diffuser with ambient wood grain finish and soft night lights.",
        price: "$38",
        recipients: ["partner", "parent", "friend", "colleague"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate"
    },
    {
        id: "gw-02",
        name: "Luxurious Weighted Blanket",
        desc: "Offers soothing sensory pressure to induce deeper sleep and relieve anxiety after long days.",
        price: "$80",
        recipients: ["partner", "parent", "friend"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "luxury"],
        budget: "premium"
    },
    {
        id: "gw-03",
        name: "Gourmet Herbal Tea Collection",
        desc: "Beautiful wooden box filled with 48 premium herbal tea bags sourced from organic farms worldwide.",
        price: "$25",
        recipients: ["parent", "colleague", "friend"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness", "cooking"],
        tones: ["heartfelt", "practical"],
        budget: "moderate"
    }
];

// --- Application State ---
const userSelections = {
    recipient: null,
    occasion: null,
    interest: null,
    tone: null,
    budget: null
};

let currentStep = 1;
const totalSteps = 5;
let savedWishlist = JSON.parse(localStorage.getItem('merrygift_wishlist')) || [];

// --- DOM References ---
const stepPanels = document.querySelectorAll('.step-panel');
const progressIndicator = document.getElementById('progress-indicator');
const stepCounter = document.getElementById('step-counter');
const btnBack = document.getElementById('btn-wizard-back');
const wizardCard = document.getElementById('gift-wizard-card');
const recommendationsView = document.getElementById('recommendations-view');
const recommendationsGrid = document.getElementById('recommendations-grid');
const btnRestart = document.getElementById('btn-restart-wizard');

// Wishlist Elements
const wishlistDrawer = document.getElementById('wishlist-drawer');
const btnToggleWishlist = document.getElementById('btn-toggle-wishlist');
const btnCloseWishlist = document.getElementById('btn-close-wishlist');
const wishlistItemsContainer = document.getElementById('wishlist-items');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistEmptyMsg = document.getElementById('wishlist-empty-msg');
const wishlistActionsPanel = document.getElementById('wishlist-actions-panel');
const btnPrintWishlist = document.getElementById('btn-print-wishlist');
const btnShareWishlist = document.getElementById('btn-share-wishlist');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupEventListeners();
    updateWishlistUI();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Option Button Clicks
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const val = button.getAttribute('data-val');
            
            // Clear selection in current step grid
            const currentGrid = button.parentElement;
            currentGrid.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            
            // Highlight clicked
            button.classList.add('selected');
            
            // Record selection
            userSelections[category] = val;
            
            // Delay slightly to show selection before transition
            setTimeout(() => {
                advanceStep();
            }, 250);
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
        const wishlistNames = savedWishlist.map(item => `${item.name} (${item.price})`).join('\n');
        const shareText = `Check out my Wishlist generated on GiftSpire:\n\n${wishlistNames}\n\nPlan yours at https://christmasgiftadvisor.vercel.app`;
        
        navigator.clipboard.writeText(shareText).then(() => {
            const oldText = btnShareWishlist.textContent;
            btnShareWishlist.textContent = "Copied to Clipboard! 🎉";
            btnShareWishlist.style.borderColor = "var(--gold)";
            btnShareWishlist.style.color = "var(--gold)";
            setTimeout(() => {
                btnShareWishlist.textContent = oldText;
                btnShareWishlist.style.borderColor = "";
                btnShareWishlist.style.color = "";
            }, 2000);
        });
    });
}

// --- Navigation Logic ---
function advanceStep() {
    if (currentStep < totalSteps) {
        // Deactivate current panel
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        currentStep++;
        
        // Activate next panel
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update header & back button
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        btnBack.removeAttribute('disabled');
    } else {
        // Reached end, display recommendations
        generateRecommendations();
    }
}

function regressStep() {
    if (currentStep > 1) {
        // Deactivate current panel
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        currentStep--;
        
        // Activate previous panel
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update header & back button
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        
        if (currentStep === 1) {
            btnBack.setAttribute('disabled', 'true');
        }
    }
}

function restartWizard() {
    // Reset state
    userSelections.recipient = null;
    userSelections.occasion = null;
    userSelections.interest = null;
    userSelections.tone = null;
    userSelections.budget = null;
    
    // Clear selections class
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    
    // Reset step
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 1;
    document.getElementById(`step-1`).classList.add('active');
    
    stepCounter.textContent = `Step 1 of ${totalSteps}`;
    progressIndicator.style.width = `20%`;
    btnBack.setAttribute('disabled', 'true');
    
    // Switch views
    recommendationsView.classList.add('hidden');
    wizardCard.classList.remove('hidden');
    document.getElementById('main-heading').parentElement.classList.remove('hidden');
}

// --- Recommendation Core Logic ---
function generateRecommendations() {
    // Hide wizard and header hero
    wizardCard.classList.add('hidden');
    document.getElementById('main-heading').parentElement.classList.add('hidden');
    recommendationsView.classList.remove('hidden');
    
    // Filter logic
    const matchedGifts = giftDatabase.filter(gift => {
        // Match Recipient
        const recipientMatch = gift.recipients.includes(userSelections.recipient);
        
        // Match Occasion (supports generic or specific occasion match)
        const occasionMatch = gift.occasions.includes(userSelections.occasion) || gift.occasions.includes('generic');
        
        // Match Interest
        const interestMatch = gift.interests.includes(userSelections.interest);
        
        // Match Budget
        const budgetMatch = gift.budget === userSelections.budget;
        
        // Include if it matches the main interests + has recipient/occasion affinity
        return interestMatch || (recipientMatch && occasionMatch && budgetMatch);
    });

    // Render matches
    renderRecommendations(matchedGifts.slice(0, 6));
}

function renderRecommendations(gifts) {
    recommendationsGrid.innerHTML = '';
    
    if (gifts.length === 0) {
        recommendationsGrid.innerHTML = `
            <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.6;">
                    ✨ No direct matches found for that specific combination. Let's try starting over with slightly broader preferences.
                </p>
            </div>
        `;
        return;
    }

    gifts.forEach(gift => {
        const isSaved = savedWishlist.some(item => item.id === gift.id);
        const card = document.createElement('div');
        card.classList.add('gift-card');
        card.innerHTML = `
            <div class="gift-header">
                <span class="gift-badge">${gift.budget.toUpperCase()}</span>
                <button class="btn-save-gift" data-id="${gift.id}" aria-label="Save to Wishlist">
                    ${isSaved ? '⭐️' : '☆'}
                </button>
            </div>
            <h3 class="gift-title">${gift.name}</h3>
            <p class="gift-desc">${gift.desc}</p>
            <div class="gift-footer">
                <span class="gift-price">${gift.price}</span>
                <a href="https://www.amazon.com/s?k=${encodeURIComponent(gift.name)}" target="_blank" class="btn-shop">Shop Now</a>
            </div>
        `;
        
        // Save handler
        const saveBtn = card.querySelector('.btn-save-gift');
        saveBtn.addEventListener('click', () => toggleSaveGift(gift, saveBtn));
        
        recommendationsGrid.appendChild(card);
    });
}

// --- Wishlist Management ---
function toggleSaveGift(gift, buttonEl) {
    const index = savedWishlist.findIndex(item => item.id === gift.id);
    if (index === -1) {
        savedWishlist.push(gift);
        buttonEl.textContent = '⭐️';
        buttonEl.style.transform = 'scale(1.3)';
        setTimeout(() => buttonEl.style.transform = '', 200);
    } else {
        savedWishlist.splice(index, 1);
        buttonEl.textContent = '☆';
    }
    
    localStorage.setItem('merrygift_wishlist', JSON.stringify(savedWishlist));
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
                    <span class="saved-item-price">${item.price}</span>
                </div>
                <button class="btn-remove-saved" data-id="${item.id}" aria-label="Remove item">&times;</button>
            `;
            
            itemEl.querySelector('.btn-remove-saved').addEventListener('click', () => {
                savedWishlist = savedWishlist.filter(saved => saved.id !== item.id);
                localStorage.setItem('merrygift_wishlist', JSON.stringify(savedWishlist));
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
