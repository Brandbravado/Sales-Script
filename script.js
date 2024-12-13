// Import data from data.js
import { customerData, scriptSections, objections } from './data.js';

// State management
let currentSection = 'intro';
let activeObjection = null;
let notesHistory = [];

// Initialize everything when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();
    
    // Initialize the application
    initializeApp();
    
    // Set up event listeners
    setupEventListeners();
});

function initializeApp() {
    populateCustomerData();
    populateScriptSections();
    populateObjections();
    initializeModals();
    
    // Show initial section
    showSection('intro');
}

function populateCustomerData() {
    // Set basic customer info
    document.getElementById('customer-name').textContent = customerData.name;
    document.getElementById('company-name').textContent = customerData.company;
    document.getElementById('website').textContent = customerData.website;
    document.getElementById('email').textContent = customerData.email;
    document.getElementById('phone').textContent = customerData.phone;
    document.getElementById('start-date').textContent = `Start: ${customerData.startDate}`;
    document.getElementById('budget').textContent = `Budget: ${customerData.budget}`;
    document.getElementById('package').textContent = customerData.package;

    // Populate goals
    const goalsContainer = document.getElementById('goals-container');
    goalsContainer.innerHTML = ''; // Clear existing content
    
    customerData.goals.forEach(goal => {
        const goalElement = document.createElement('div');
        goalElement.className = 'goal-item';
        goalElement.innerHTML = `
            <i data-feather="target" class="priority-${goal.priority}"></i>
            <div class="goal-content">
                <span>${goal.text}</span>
                <div class="goal-metrics">
                    <small>Current: ${goal.metrics.current}</small>
                    <small>Target: ${goal.metrics.target}</small>
                    <small>Timeline: ${goal.metrics.timeline}</small>
                </div>
            </div>
        `;
        goalsContainer.appendChild(goalElement);
    });

    // Populate pain points
    const painPointsContainer = document.getElementById('pain-points-container');
    painPointsContainer.innerHTML = ''; // Clear existing content
    
    customerData.painPoints.forEach(pain => {
        const painElement = document.createElement('div');
        painElement.className = 'pain-item';
        painElement.innerHTML = `
            <i data-feather="alert-triangle" class="impact-${pain.impact}"></i>
            <div class="pain-content">
                <span>${pain.text}</span>
                <small class="pain-details">${pain.details}</small>
            </div>
        `;
        painPointsContainer.appendChild(painElement);
    });

    // Refresh Feather Icons
    feather.replace();
}

function populateScriptSections() {
    const container = document.getElementById('script-container');
    container.innerHTML = ''; // Clear existing content
    
    Object.entries(scriptSections).forEach(([key, section]) => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'script-section';
        sectionElement.dataset.section = key;
        sectionElement.style.display = key === currentSection ? 'block' : 'none';
        
        let sectionContent = `
            <div class="section-header">
                <h3>${section.title}</h3>
                ${section.tips ? `<i data-feather="help-circle" class="tip-trigger"></i>` : ''}
            </div>
            <div class="script-text">${section.content}</div>
        `;

        // Add tips if they exist
        if (section.tips) {
            sectionContent += `
                <div class="tip-box">
                    ${section.tips.map(tip => `
                        <div class="tip-item">
                            <i data-feather="${tip.icon}"></i>
                            <span>${tip.text}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Add conditional flows if they exist
        if (section.conditionalFlows) {
            sectionContent += `
                <div class="conditional-flows">
                    ${Object.entries(section.conditionalFlows).map(([mood, flow]) => `
                        <div class="flow-item ${mood}">
                            <div class="flow-header">
                                <i data-feather="${getMoodIcon(mood)}"></i>
                                <span>If ${mood}:</span>
                            </div>
                            <div class="flow-response">${flow.response}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Add questions if they exist
        if (section.questions) {
            sectionContent += `
                <div class="questions-container">
                    ${section.questions.map((q, index) => `
                        <div class="question-card">
                            <div class="question-text">
                                <span>${index + 1}. ${q.text}</span>
                            </div>
                            <div class="question-followup">
                                <i data-feather="corner-down-right"></i>
                                <span>${q.followUp}</span>
                            </div>
                            <div class="question-tip">
                                <i data-feather="lightbulb"></i>
                                <span>${q.tip}</span>
                            </div>
                            ${q.valueProposition ? `
                                <div class="value-proposition">
                                    <i data-feather="trending-up"></i>
                                    <span>${q.valueProposition}</span>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Add key points if they exist
        if (section.keyPoints) {
            sectionContent += `
                <div class="key-points">
                    ${section.keyPoints.map(point => `
                        <div class="key-point-card">
                            <h4>${point.title}</h4>
                            <p>${point.detail}</p>
                            <div class="proof-point">
                                <i data-feather="check-circle"></i>
                                <span>${point.proof}</span>
                            </div>
                            <div class="implementation-details">
                                <div class="impl-item">
                                    <i data-feather="settings"></i>
                                    <span>${point.implementation}</span>
                                </div>
                                <div class="impl-item">
                                    <i data-feather="clock"></i>
                                    <span>${point.timeline}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        sectionElement.innerHTML = sectionContent;
        container.appendChild(sectionElement);
    });

    // Refresh Feather Icons
    feather.replace();
}

function populateObjections() {
    const container = document.getElementById('objections-container');
    container.innerHTML = ''; // Clear existing content
    
    objections.forEach(obj => {
        const objElement = document.createElement('div');
        objElement.className = 'objection-card';
        objElement.dataset.category = obj.category;
        objElement.dataset.id = obj.id;
        
        objElement.innerHTML = `
            <div class="objection-title">
                <i data-feather="message-square"></i>
                <span>${obj.title}</span>
            </div>
            <div class="objection-response" style="display: none;">
                <p>${obj.response}</p>
                <div class="follow-up">
                    <i data-feather="corner-down-right"></i>
                    <span>${obj.followUp}</span>
                </div>
                <div class="quick-tips">
                    ${obj.quickTips.map(tip => `
                        <span class="tip-tag">
                            <i data-feather="check"></i>
                            ${tip}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.appendChild(objElement);
    });

    // Refresh Feather Icons
    feather.replace();
}

function setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);
        });
    });

    // Objection cards
    document.querySelectorAll('.objection-card').forEach(card => {
        card.addEventListener('click', () => {
            toggleObjectionResponse(card);
        });
    });

    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterObjections(category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('objection-search');
    searchInput.addEventListener('input', (e) => {
        searchObjections(e.target.value);
    });

    // Close buttons for modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
}

function showSection(sectionId) {
    currentSection = sectionId;
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    // Show selected section
    document.querySelectorAll('.script-section').forEach(section => {
        section.style.display = section.dataset.section === sectionId ? 'block' : 'none';
    });
}

function toggleObjectionResponse(card) {
    const response = card.querySelector('.objection-response');
    const isVisible = response.style.display === 'block';
    
    // Hide all other responses
    document.querySelectorAll('.objection-response').forEach(r => {
        r.style.display = 'none';
    });

    // Show/hide clicked response
    response.style.display = isVisible ? 'none' : 'block';
    
    // Update active objection
    activeObjection = isVisible ? null : card.dataset.id;
}

function filterObjections(category) {
    document.querySelectorAll('.objection-card').forEach(card => {
        const shouldShow = category === 'all' || card.dataset.category === category;
        card.style.display = shouldShow ? 'block' : 'none';
    });

    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function searchObjections(term) {
    const searchTerm = term.toLowerCase();
    
    document.querySelectorAll('.objection-card').forEach(card => {
        const title = card.querySelector('.objection-title').textContent.toLowerCase();
        const response = card.querySelector('.objection-response').textContent.toLowerCase();
        const shouldShow = title.includes(searchTerm) || response.includes(searchTerm);
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

function showModal(type) {
    const modal = document.getElementById('documentModal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    switch(type) {
        case 'proposal':
            title.textContent = 'Custom Proposal';
            content.innerHTML = `
                <div class="document-preview">
                    <iframe src="/api/placeholder/800/600" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
            `;
            break;
            
        case 'brand':
            title.textContent = 'Brand Plan';
            content.innerHTML = `
                <div class="document-preview">
                    <iframe src="/api/placeholder/800/600" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
            `;
            break;
            
        case 'notes':
            showNotesModal();
            return;
    }
    
    modal.classList.add('active');
}

function showNotesModal() {
    const modal = document.getElementById('notesModal');
    modal.classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function saveNotes() {
    const noteText = document.getElementById('meeting-notes').value.trim();
    if (!noteText) return;
    
    const timestamp = new Date().toLocaleString();
    const noteObj = {
        id: Date.now(),
        text: noteText,
        timestamp: timestamp
    };
    
    notesHistory.unshift(noteObj);
    updateNotesHistory();
    
    // Clear input
    document.getElementById('meeting-notes').value = '';
}

function updateNotesHistory() {
    const container = document.getElementById('notes-history');
    container.innerHTML = notesHistory.map(note => `
        <div class="note-item" data-id="${note.id}">
            <div class="note-header">
                <span>${note.timestamp}</span>
                <i data-feather="trash-2" onclick="deleteNote(${note.id})"></i>
            </div>
            <div class="note-content">${note.text}</div>
        </div>
    `).join('');
    
    feather.replace();
}

function deleteNote(noteId) {
    notesHistory = notesHistory.filter(note => note.id !== noteId);
    updateNotesHistory();
}

function getMoodIcon(mood) {
    switch(mood) {
        case 'positive':
            return 'smile';
        case 'neutral':
            return 'meh';
        case 'negative':
            return 'frown';
        default:
            return 'help-circle';
    }
}

// Export key functions for external use
export {
    showSection,
    showModal,
    closeModal,
    saveNotes,
    deleteNote
};
