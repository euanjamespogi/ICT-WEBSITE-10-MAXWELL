document.addEventListener('DOMContentLoaded', () => {

    /**
     * Action A: Read System Clock to alter Hero welcome context strings
     */
    const handleSystemGreeting = () => {
        const hookElement = document.getElementById('greeting-target');
        const systemHour = new Date().getHours();
        let textOutput = "Mabuhay, Southian!";

        if (systemHour < 12) {
            textOutput = "Good Morning, Southian!";
        } else if (systemHour < 18) {
            textOutput = "Good Afternoon, Southian!";
        } else {
            textOutput = "Good Evening, Southian!";
        }

        if (hookElement) {
            hookElement.textContent = textOutput;
        }
    };

    /**
     * Action B: Listen for element button taps to toggle layout states
     */
    const handleAccordionInteractions = () => {
        const clickableTriggers = document.querySelectorAll('.accordion-trigger');

        clickableTriggers.forEach(btn => {
            btn.addEventListener('click', function() {
                const structuralParent = this.parentElement;
                const isActiveState = structuralParent.classList.contains('active');

                // Step 1: Wipe "active" classes clear off all cards
                document.querySelectorAll('.accordion-item').forEach(card => {
                    card.classList.remove('active');
                });

                // Step 2: Toggle state flag on target component
                if (!isActiveState) {
                    structuralParent.classList.add('active');
                }
            });
        });
    };

    handleSystemGreeting();
    handleAccordionInteractions();

});
