// ==========================================
// 1. DYNAMIC PROJECTS RENDERING
// ==========================================
// Edit this array to add, remove, or update projects.
const projectsArray = [
    {
        title: "Amazon Product Sales Data Analysis",
        description: "An interactive Power BI dashboard analyzing sales performance, product categories, customer reviews and product-level performance to surface actionable business insights.",
        insights: [
            "YTD Sales: $2.18M across 27.75K products sold",
            "Men's Shoes is the top category at 43.18% of YTD sales",
            "Sales climb sharply in November and December"
        ],
        tags: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
        // Replace with your real GitHub repo URL
        github: "https://github.com/snigdhasikdar90-arch/AMAZON-PRODUCTS-SALES-DATA-ANALYSIS-"
    },
    {
        title: "Credit Card Customer & Transaction Analysis",
        description: "A Power BI dashboard exploring credit card revenue, transaction volume, customer demographics, card categories and spending behaviour to support data-driven decisions.",
        insights: [
            "Total revenue of 55M+, led by the Blue Card at ~46M",
            "Swipe transactions generate the highest revenue, ~35M",
            "Q3 is the strongest quarter at ~14.2M in revenue"
        ],
        tags: ["Power BI", "DAX", "Data Cleaning", "KPI Analysis"],
        // Replace with your real GitHub repo URL
        github: "https://github.com/snigdhasikdar90-arch/CREDIT-CARD-TRANSACTION-AND-CREDIT-CARD-CUSTOMER-REPORT-DATA-ANALYSIS"
    }
];

const projectsContainer = document.getElementById('projects-container');

function renderProjects() {
    if (!projectsContainer) return;

    projectsArray.forEach(project => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const insightsHTML = project.insights.map(point => `<li>${point}</li>`).join('');

        const cardHTML = `
            <div class="project-card">
                <div class="project-content">
                    <h3 class="project-title"><a href="${project.github}" target="_blank" rel="noopener">${project.title}</a></h3>
                    <p class="project-desc">${project.description}</p>
                    <ul class="project-insights">
                        ${insightsHTML}
                    </ul>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;

        projectsContainer.innerHTML += cardHTML;
    });
}

// ==========================================
// 2. MOBILE NAV TOGGLE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleNav() {
    if (!hamburger || !navLinks) return;
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleNav);
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
