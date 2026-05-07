if (window.darkSparxLoaded) {
    console.log("DarkSparx already loaded, skipping re-injection");
} else {
    window.darkSparxLoaded = true;
    (function () {
        const STYLE_ID = 'dark-sparx-styles';

        const darkCSS = `
:root {
    --bg-base: #1e1e1e;
    --bg-content: #222222;
    --bg-nav: #1a1a1a;
    --bg-interactive: #3a3a3a;
    --bg-elements: #444444;
    --bg-hover: #2d2d2d;
    --bg-disabled: #333333;
    --text-main: #ffffff;
}

/* --- GLOBAL TEXT OVERRIDE --- */
/* This ensures all standard text, headers, and labels are white */
* {
color: var(--text-main) !important;
box-shadow: none !important;
border: none !important;
}

a {
    color: inherit !important;
    text-decoration: none !important;
}

/* --- TEXT HIGHLIGHT REMOVAL --- */
span, p, h1, h2, h3, h4, h5, h6, label, b, i, strong, em,
[class*="Text"], [class*="Label"], [class*="Title"], [class*="Message"], [class*="Value"], [class*="Count"], [class*="CompletedText"], [class*="CompletionStatus"], [class*="WithStatus"], [class*="PackageStatus"], [class*="PackageChip"],
[class*="Content_"]:not([class*="DialogContent"]):not([class*="MainContent"]):not([class*="CardContent"]),
[class*="InlineSlotOutline"],
[class*="InlineSlotFocus"],
[style*="background-color: #eef4fe"],
[style*="background: #eef4fe"],
[style*="background-color: rgb(238, 244, 254)"] {
    background-color: transparent !important;
    background: transparent !important;
    background-image: none !important;
    text-shadow: none !important;
    outline: none !important;
}

/* Remove Blue Selections and Focus Rings */
::selection {
    background-color: var(--bg-content) !important;
    color: var(--text-main) !important;
}

/* --- SCROLLBAR REMOVAL --- */
* {
    scrollbar-width: none !important; /* Firefox */
    -ms-overflow-style: none !important;  /* IE/Edge */
}

::-webkit-scrollbar {
    display: none !important; /* Chrome/Safari/Edge */
}

* {
    -webkit-tap-highlight-color: transparent !important;
    outline: none !important;
}

/* Redefining 'Selected' states from blue to dark grey */
[class*="Selected"],
[class*="active"],
[class*="TileSelected"],
[data-state*="open"] {
    background-color: var(--bg-elements) !important;
}

/* --- 1.5 SUB-ITEM TRANSPARENCY --- */
/* Force all nested divs inside themed containers to be transparent */
/* This kills stubborn highlights in Tasks, Activities, and Filters */
[class*="Activity"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Task"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Accordion"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Collapsible"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="SearchResult"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Topic_"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Strand"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="Filters"] div:not([class*="Chip"]):not([class*="Button"]):not([class*="TextField"]):not([class*="SelectTrigger"]),
[class*="MenuItem"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="NotificationList"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="FeedbackCard"] div:not([class*="Chip"]):not([class*="Button"]):not([class*="Sentiment"]),
[class*="TablesHomework"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="TokenProgressBanner"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="GameButton"] div:not([class*="Chip"]):not([class*="Button"]),
[class*="GameTypeSelectBanner"] div:not([class*="Chip"]):not([class*="Button"]) {
    background-color: transparent !important;
    background: transparent !important;
}



/* --- 1. BASE PAGE LAYER (#1e1e1e) --- */
body, html, 
[class*="LQDContainer"],
[class*="TransitionPage"],
[class*="TransitionContainer"],
[class*="MainContent"],
[class*="MaxWidth"],
[class*="Root"],
[class*="PageGradient"],
[class*="PageBackground"],
[class*="WelcomeBanner"],
[class*="BottomBar"],
[class*="QuestionContainer"],
[class*="SummaryContainer"],
[class*="Container_hgytc"],
[class*="RewardsPlaque"],
[class*="RewardsPlaqueContainer"],
[class*="ProgressBarAndLeaderboardsButton"],
[class*="ProgressBarContainer"],
[class*="PackageTypeDescription"] * {
    background-color: var(--bg-base) !important;
    background: var(--bg-base) !important;
}

/* Hide the large light-blue background SVG and white overlays */
[class*="PageBackgroundImage"],
[class*="ColourOverlay"] {
    display: none !important;
    opacity: 0 !important;
}

/* --- 2. CONTENT SECTIONS & ITEMS (#222222) --- */
[class*="TaskItemLink"],
[class*="Activity"],
[class*="AccordionItem"],
[class*="AccordionContent"],
[class*="CollapsibleContent"],
[class*="Task"],
[class*="SearchResult"],
[class*="SearchResults"],
[class*="StrandButton"],
[class*="InfoPanel"],
[class*="Topic_"],
[class*="SelectContent"],
[role="option"],
[role="listbox"],
[class*="Filters"],
[class*="NotificationList"],
[class*="MenuItem"],
[class*="DialogContent"],
[class*="FeedbackCard"],
[class*="TablesHomework"],
[class*="SupportTips"],
[class*="LinkContainer"],
[class*="ChoiceWACOptions"],
[class*="Zoom"],
[class*="Expanded"],
[class*="FAQs"],
[class*="FAQItem"],
[class*="Topic_"],
[class*="Question_"],
#cookiescript_injected,
[class*="OverlaySettings"],
[class*="PreviewContainer"],
[class*="SectionContainer"],
[class*="Leaderboard"],
[class*="NameChooser"],
[class*="NameRandomiserBar"],
[class*="PercentileBar"],
[class*="MilestoneBar"],
[class*="RecentLevelUpDateContainer"],
[class*="TokenProgressBanner"],
[class*="GameButton"],
[class*="GameTypeSelectBanner"] {
    background-color: var(--bg-content) !important;
    background: var(--bg-content) !important;
    background-image: none !important;
    border-radius: 4px !important;
    transition: all 0.2s ease !important;
}

/* Hover states for content items */
[class*="TaskItemLink"]:hover,
[class*="StrandButton"]:hover,
[class*="Topic_"]:hover {
    background-color: var(--bg-hover) !important;
}

/* Restore border for specific task items */
[class*="TaskItemLink"] {
    border: 2px solid var(--bg-interactive) !important;
}

/* --- 3. NAVIGATION BARS (#1a1a1a) --- */
[class*="TopBanner"],
[class*="Sidebar"],
[class*="ResultFullWidth"],
[id="RESULT_POPOVER"] {
    background: var(--bg-nav) !important;
    background-color: var(--bg-nav) !important;
    border-radius: 0px !important;
}

/* --- 4. INTERACTIVE ELEMENTS (#3a3a3a) --- */
[class*="AccordionTrigger"],
[class*="Package"],
[class*="Chip"],
[class*="Button"]:not([class*="ProgressBar"]),
[class*="ButtonGhost"],
[class*="NavButton"],
[class*="SelectTrigger"],
[class*="SelectShared"],
[class*="Trigger_"],
[class*="Tabs"] button,
input[class*="Search"],
[class*="XPCount"],
[class*="MenuButton"],
[class*="LevelBadge"],
[class*="TextField"],
[class*="SummaryProgress"],
[class*="SentimentButton"],
[class*="Textarea"],
[class*="CarouselButton"],
[class*="ColorOption"],
[class*="WACOption"],
[class*="Tile_"],
[class*="CardSlot"],
[class*="InlineSlot"],
[class*="InlineSlotWrapper"],
[class*="TileSelected"],
[class*="CardContent_"],
[class*="EmptySlotContent"] {
    background: var(--bg-elements) !important;
    background-color: var(--bg-elements) !important;
}

[class*="WACOption"][class*="Selected"] {
}

/* Progress Bars (Rewards/Milestones) */
[class*="ProgressBar"]:not([class*="ProgressBarAchieved"]) {
    background-color: var(--bg-base) !important;
    background: var(--bg-base) !important;
    border-radius: 10px !important;
    overflow: hidden !important;
}

[class*="ProgressBarAchieved"] {
    /* Keep original color but ensure it's visible */
    border-radius: 10px !important;
}

/* Leaderboard Rows & Hovers */
[class*="RowInformation"] {
    background-color: transparent !important;
}

[class*="Row"]:hover {
    background-color: var(--bg-hover) !important;
}

[class*="RowYou"] {
    background-color: var(--bg-interactive) !important;
    border-radius: 8px !important;
}

/* Disabled/Unavailable States */
[disabled],
[aria-disabled="true"],
[class*="disabled"],
[class*="Locked"],
[class*="Completed"]:not(span),
[class*="Complete"]:not(span),
[class*="Finished"]:not(span),
[class*="Achieved"]:not([class*="ProgressBarAchieved"]),
[class*="Unattempted"] {
    opacity: 1 !important;
    background-color: var(--bg-disabled) !important;
    background: var(--bg-disabled) !important;
    filter: grayscale(1) brightness(0.8) !important;
}

/* Force Task containers to look disabled if they are complete */
[class*="Task"]:has([class*="Complete"]),
[class*="Task"]:has([class*="Completed"]) {
    background-color: var(--bg-disabled) !important;
}

/* --- 5. PROGRESS WHEEL FIXES --- */
[class*="CircleOuter"],
[class*="CircleInner"] {
    fill: var(--bg-base) !important;
}

/* Specific fix for data-URI icons like Bookwork Accuracy */
img[class*="BookworkAccuracyIcon"] {
    filter: none !important;
}

/* SVG Path Overrides */
path[fill="#EEF4FE"],
path[fill="#eef4fe"] {
    fill: var(--bg-interactive) !important;
}

/* Result Icons (Cross/Tick) */
[class*="ResultImage"] {
    background-color: var(--bg-interactive) !important;
    border-radius: 50% !important;
    padding: 4px !important;
}

[class*="ResultImage"] path {
    stroke: var(--text-main) !important;
}

[class*="Expanded"] * {
    color: var(--text-main) !important;
}

[class*="Question_"] {
    --question-text-colour: var(--text-main) !important;
}

[class*="Question_"] *,
[class*="Tile_"] *,
[class*="CardSlot"] *,
[class*="InlineSlot"] * {
    color: var(--text-main) !important;
}

/* Sentiment Icons (Feedback) */
circle[class*="bg-fill"],
ellipse[class*="bg-fill"] {
    fill: var(--bg-interactive) !important;
}

.detail-stroke {
    stroke: var(--text-main) !important;
}

.detail-fill {
    fill: var(--text-main) !important;
}

[class*="SentimentIcon"] [fill="#f0f4f5"] {
    fill: var(--bg-interactive) !important;
}

[class*="SentimentIcon"] [fill="#c4c6c7"] {
    fill: var(--text-main) !important;
}

[class*="SentimentIcon"] [stroke="#c4c6c7"] {
    stroke: var(--text-main) !important;
}
`;

        function applyDarkMode() {
            if (!document.getElementById(STYLE_ID)) {
                const style = document.createElement('style');
                style.id = STYLE_ID;
                style.innerHTML = darkCSS;

                const target = document.head || document.documentElement;
                if (target) {
                    target.appendChild(style);
                    console.log("%c🌑 Sparx Dark Mode: All Text Set to White", "color: #ffffff; font-weight: bold;");
                } else {
                    console.error("DarkSparx: Could not find target to append styles");
                }
            }
        }

        function removeDarkMode() {
            const style = document.getElementById(STYLE_ID);
            if (style) {
                style.remove();
                console.log("%c☀️ DarkSparx: Deactivated", "color: #ff9d00; font-weight: bold;");
            }
        }

        console.log("🌑 DarkSparx content script loaded");

        // Listen for messages from popup
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            console.log("Message received in content script:", request);
            if (request.action === 'toggleDarkMode') {
                if (request.enabled) {
                    applyDarkMode();
                } else {
                    removeDarkMode();
                }
                sendResponse({ status: "success", enabled: request.enabled });
            }
        });
    })();
}
