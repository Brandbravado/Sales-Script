// Data and Configuration File
const customerData = {
    name: "John Smith",
    company: "Tech Innovators",
    website: "techinnovators.com",
    email: "john@techinnovators.com",
    phone: "555-0123",
    startDate: "Dec 20, 2024",
    budget: "$15,000-20,000",
    package: "Premium QuickStart",
    goals: [
        {
            id: 1,
            text: "Increase conversion rate by 40%",
            priority: "high",
            metrics: {
                current: "2.3%",
                target: "3.2%",
                timeline: "90 days"
            }
        },
        {
            id: 2,
            text: "Improve mobile responsiveness",
            priority: "high",
            metrics: {
                current: "Mobile bounce rate 65%",
                target: "Reduce to 40%",
                timeline: "60 days"
            }
        },
        {
            id: 3,
            text: "Launch new product pages",
            priority: "medium",
            metrics: {
                current: "5 products",
                target: "15 products",
                timeline: "45 days"
            }
        }
    ],
    painPoints: [
        {
            id: 1,
            text: "Losing customers to competitors",
            impact: "high",
            details: "Estimated $50k monthly revenue loss"
        },
        {
            id: 2,
            text: "Poor mobile experience",
            impact: "high",
            details: "60% of traffic is mobile, high bounce rate"
        },
        {
            id: 3,
            text: "Low conversion rates",
            impact: "high",
            details: "Currently at 2.3% vs industry average 3.1%"
        }
    ]
};

const scriptSections = {
    intro: {
        title: "Introduction",
        content: `Hi ${customerData.name}, this is [Your Name] from Brand Bravado. I've reviewed your submission for the ${customerData.package} package and spent time analyzing ${customerData.website}. I noticed several opportunities that align perfectly with your goals. How has your day been so far?`,
        tips: [
            {
                icon: "lightbulb",
                text: "Build rapport but keep it brief. Listen for energy level and adjust your tone accordingly."
            },
            {
                icon: "alert-circle",
                text: "Note their tone and energy - this will guide your approach."
            }
        ],
        conditionalFlows: {
            positive: {
                response: "Great to hear! Let's dive into how we can help you achieve those impressive goals you've set.",
                nextStep: "discovery"
            },
            neutral: {
                response: "I understand how busy things can get. I'll make sure we cover everything efficiently today.",
                nextStep: "discovery"
            },
            negative: {
                response: "I appreciate you making time despite the challenges. Let's focus on how we can make things better for your business.",
                nextStep: "empathy"
            }
        }
    },
    discovery: {
        title: "Discovery",
        content: `I see you're looking to start by ${customerData.startDate}. What's driving that timeline?`,
        questions: [
            {
                text: "When you mentioned losing customers to competitors, how is that specifically impacting your revenue?",
                followUp: "What would it mean for your business if we could solve that in the next 90 days?",
                tip: "Quantify the pain in dollars whenever possible",
                valueProposition: "Our solutions typically reduce competitor loss by 35% within 90 days"
            },
            {
                text: "You mentioned mobile responsiveness - what percentage of your traffic is mobile currently?",
                followUp: "How is the poor mobile experience affecting your conversion rates?",
                tip: "Connect technical issues to business impact",
                valueProposition: "Our mobile-first approach typically increases mobile conversions by 50%"
            },
            {
                text: "What specific metrics would indicate success for you in the first 90 days?",
                followUp: "How would achieving these metrics impact your business goals?",
                tip: "Use these metrics in your solution presentation",
                valueProposition: "We'll establish clear KPIs and tracking from day one"
            }
        ],
        tips: [
            {
                icon: "alert-circle",
                text: "Listen for emotional triggers and pain points. Note key phrases for later use."
            },
            {
                icon: "dollar-sign",
                text: "Calculate potential ROI based on their answers."
            }
        ]
    },
    solution: {
        title: "Solution Presentation",
        content: "Based on what you've shared, I'd like to show you how our solution addresses each of your key challenges...",
        keyPoints: [
            {
                title: "Conversion Optimization",
                detail: "Our proven process has increased conversion rates by an average of 45% for similar businesses",
                proof: "Case study: [Similar Client] saw 52% increase in 90 days",
                implementation: "Custom optimization strategy targeting your specific audience",
                timeline: "First optimizations live within 2 weeks"
            },
            {
                title: "Mobile-First Design",
                detail: "Complete mobile optimization with responsive design and accelerated loading",
                proof: "Average mobile conversion increase of 65%",
                implementation: "Responsive redesign with AMP implementation",
                timeline: "Mobile optimization completed within 45 days"
            },
            {
                title: "Product Page Optimization",
                detail: "Conversion-focused product page templates with A/B testing",
                proof: "Average product page conversion increase of 32%",
                implementation: "Custom templates with your branding",
                timeline: "New product pages launched within 30 days"
            }
        ],
        tips: [
            {
                icon: "trending-up",
                text: "Always tie solutions back to their specific goals and pain points"
            },
            {
                icon: "clock",
                text: "Emphasize quick wins and long-term value"
            }
        ]
    },
    proposal: {
        title: "Proposal Review",
        content: "Let's review the custom proposal I've prepared based on your needs...",
        sections: [
            {
                title: "Project Scope",
                key: "Comprehensive solution addressing all identified challenges",
                points: [
                    "Mobile-first redesign",
                    "Conversion optimization",
                    "Product page templates",
                    "Ongoing optimization"
                ]
            },
            {
                title: "Timeline",
                key: "Strategic implementation with quick wins",
                points: [
                    "Week 1-2: Initial optimizations",
                    "Week 3-6: Mobile redesign",
                    "Week 7-8: Product pages",
                    "Week 9+: Ongoing optimization"
                ]
            },
            {
                title: "Investment",
                key: "Value-based pricing with clear ROI",
                points: [
                    "Premium QuickStart Package",
                    "Implementation fee",
                    "Monthly optimization",
                    "ROI tracking"
                ]
            }
        ],
        tips: [
            {
                icon: "file-text",
                text: "Walk through key points, not every detail. Focus on ROI and value."
            }
        ]
    },
    closing: {
        title: "Closing",
        content: "Based on everything we've discussed, especially your goals for increased conversions and mobile optimization, I'm confident we can deliver exceptional results. What questions do you have about moving forward?",
        nextSteps: [
            {
                text: "When would you like to schedule our kickoff call?",
                tip: "Assume the sale, focus on implementation"
            },
            {
                text: "Who else needs to be involved in the kickoff meeting?",
                tip: "Ensure all stakeholders are aligned"
            },
            {
                text: "What's the best way to handle the paperwork - would you prefer DocuSign or PDF?",
                tip: "Make signing as easy as possible"
            }
        ],
        fallbackQuestions: [
            {
                text: "What's preventing us from moving forward today?",
                tip: "Identify and address final objections"
            },
            {
                text: "What would make this an absolute 'yes' for you right now?",
                tip: "Find the final piece needed to close"
            }
        ],
        tips: [
            {
                icon: "check-circle",
                text: "Use assumptive closing. Don't ask if they want to proceed - ask how they'd like to proceed."
            }
        ]
    }
};

const objections = [
    {
        id: 1,
        category: "price",
        title: "Your prices are too high compared to competitors",
        response: "I understand cost is a significant factor. Let's look at the ROI our clients typically see within the first 6 months. When we helped [reference client] with similar goals to yours, they saw a 300% return on their investment. What kind of ROI would make this investment make sense for you?",
        followUp: "What specific elements of our solution are you comparing with competitors?",
        quickTips: [
            "Focus on value, not cost",
            "Use specific ROI examples",
            "Compare total cost of ownership"
        ]
    },
    {
        id: 2,
        category: "timing",
        title: "We need to wait until next quarter",
        response: "I understand timing is important. Let's look at the potential cost of waiting. Based on your current conversion rate of 2.3%, waiting another quarter could mean missing out on approximately $150,000 in potential revenue. What's driving the decision to wait?",
        followUp: "What would need to happen to make starting sooner possible?",
        quickTips: [
            "Calculate cost of delay",
            "Offer phased implementation",
            "Discuss payment terms"
        ]
    },
    {
        id: 3,
        category: "authority",
        title: "I need to get approval from my team/boss",
        response: "That makes sense - it's important to have all stakeholders aligned. What specific concerns do you think they'll have? I can provide detailed ROI calculations and case studies that address those concerns directly. Would it be helpful to schedule a brief call with the other decision-makers?",
        followUp: "What information would be most valuable for you to present to them?",
        quickTips: [
            "Offer to join stakeholder call",
            "Provide supporting materials",
            "Set clear next steps"
        ]
    },
    {
        id: 4,
        category: "competition",
        title: "We're considering other agencies",
        response: "I appreciate your due diligence in evaluating options. Could you share what specific criteria you're using to make your decision? This will help me understand if there are any gaps in how I've presented our solution and what makes us unique in addressing your specific challenges.",
        followUp: "What aspects of our solution stand out compared to others you're considering?",
        quickTips: [
            "Focus on unique value",
            "Highlight experience",
            "Emphasize results"
        ]
    },
    {
        id: 5,
        category: "implementation",
        title: "Concerned about implementation time",
        response: "I understand the need for quick results. Our implementation plan includes quick wins within the first two weeks, while we work on the larger optimizations. For example, we can implement initial conversion optimization changes while working on the larger mobile redesign. What specific timeline concerns do you have?",
        followUp: "Which aspects of the implementation are most critical for your business?",
        quickTips: [
            "Highlight quick wins",
            "Explain parallel processes",
            "Discuss priorities"
        ]
    }
];

// Export all data for use in main script
export { customerData, scriptSections, objections };
