// script.js
// Fetches GPT definitions from gpts.json and renders them as cards

// Instead of fetching a separate JSON file (which isn't allowed when the page is
// opened locally via the file protocol), embed the GPT definitions directly in
// this script. You can update this array with your own GPT data. Each entry
// should have a `title`, `description`, `link`, `features` array and an
// associated Bootstrap icon class.
const gpts = [
    {
        title: 'Travel Planner GPT',
        description: 'A custom GPT that helps you plan itineraries and provides suggestions for flights, accommodations, and attractions based on your preferences.',
        link: '#', // Replace with your custom GPT link
        features: [
            'Personalized travel recommendations',
            'Budget planning support',
            'Real‑time updates'
        ],
        icon: 'bi-globe'
    },
    {
        title: 'Recipe Assistant GPT',
        description: 'A GPT specialized in culinary assistance. It suggests recipes, helps with ingredient substitutions, and guides you through cooking techniques.',
        link: '#', // Replace with your custom GPT link
        features: [
            'Recipe suggestions',
            'Ingredient substitutions',
            'Step‑by‑step cooking guidance'
        ],
        icon: 'bi-egg-fried'
    },
    {
        title: 'Study Buddy GPT',
        description: 'This GPT acts as a study partner that answers questions, quizzes you, and provides summaries of topics to support your learning process.',
        link: '#', // Replace with your custom GPT link
        features: [
            'Question & answer support',
            'Interactive quizzes',
            'Topic summaries'
        ],
        icon: 'bi-book'
    }
];

// Function to render cards from the embedded GPT definitions
function renderGptCards() {
    const container = document.getElementById('gpt-cards');
    if (!container) return;
    gpts.forEach(gpt => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        const featuresHtml = gpt.features.map(feature => {
            return `<li><i class="bi bi-check-circle-fill"></i>${feature}</li>`;
        }).join('');
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <div class="mb-3 d-flex align-items-center">
                        <i class="bi ${gpt.icon} fs-3 me-2"></i>
                        <h5 class="card-title mb-0">${gpt.title}</h5>
                    </div>
                    <p class="card-text">${gpt.description}</p>
                    <ul class="list-unstyled flex-grow-1">${featuresHtml}</ul>
                    <div class="mt-auto text-center">
                        <a href="${gpt.link}" class="btn btn-outline-primary" target="_blank" rel="noopener">Open GPT</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// When the document is ready, populate the GPT cards
document.addEventListener('DOMContentLoaded', () => {
    renderGptCards();
});