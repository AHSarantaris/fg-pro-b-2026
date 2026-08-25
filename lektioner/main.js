addStudyplanSlides();
addAgendaSlides();

function addStudyplanSlides() {
  var firstHalf = [
    ['F1', '5', 'Introduktion og repetition', 'Introduktion til JavaScript, p5.js og VS Code, og repetition af Programmering C.'],
    ['F2', '2', 'Versionskontrol og Git', 'Introduktion til Git og Github for samarbejde i udviklingsprojekter.'],
    ['F3', '3', 'Udviklingsprocess', 'Hvordan man kan arbejde inkrementelt og systematisk i programmeringsprocessen.'],
    ['F4', '1', 'Programmering i AI-tidsalderen', 'Hvilke måder man kan (og bør) bruge AI i programmeringsprocessen.'],
    ['P','-','Uge 38 - Ikke almindelig undervisning.',''],
    ['F5', '6', 'Afleveringsprojekt 1 - Simpelt spil', 'I skal udvikle et simpelt 2D computerspil ved brug af p5.js og Git.'],
    ['P','-','Uge 42 - Efterårsferie',''],
    ['F6', '3', 'Rekursion og træer', 'Algoritmer og datastrukturer'],
    ['F7', '2', 'Objektorienteret programmering i JavaScript', 'Introduktion til klasser og objekter i JavaScript, herunder JSON-filer.'],
    ['F8', '3', 'Afleveringsprojekt 2 - Vektorbibliotek', 'I skal udvikle et generisk vektorbibliotek ved brug af objektorienteret programmering der kan bruges af andre, samt teste og dokumentere det.'],
    ['F9', '7', 'Afleveringsprojekt 3 - Floksimulering', 'I skal udvikle en interaktiv simulator/spil der simulerer flokadfærd hos dyr, hvor I benytter vektorbiblioteket som I lavede i afleveringsprojekt 2.'],
    ['P','-','Uge 50 - SOP og juleferie','']
  ];
  var secondHalf = [
    ['F10', '2', 'Repetition af første halve år', 'Objektorienteret programmering og JavaScript.'],
    ['F11', '10', 'Webudvikling', 'Udvikling af interaktive hjemmesider med HTML, CSS og JavaScript.'],
    ['F12', '7', 'Afleveringsprojekt 4 - Portfolio hjemmeside', 'I skal udvikle en moderne interaktiv hjemmeside der dokumenterer jeres projekter.'],
    ['F13', '13', 'Eksamensprojekt', 'Her skal I arbejde på jeres eksamensprojekt.'],
    ['E','-','Start maj - Aflevering af eksamensprojekt','Eksamensperioden starter']
  ];
  var sumRow = ['Samlet:', '32', '', ''];

  var anchors = document.querySelectorAll('section[data-insert-studyplan]');
  anchors.forEach(function (anchor) {
    var prefix = anchor.getAttribute('data-insert-studyplan') || '';
    anchor.parentNode.insertBefore(buildStudyplanSlide(prefix, 'første halve år', firstHalf), anchor);
    anchor.parentNode.insertBefore(buildStudyplanSlide(prefix, 'andet halve år', secondHalf), anchor);
  });
}

function buildStudyplanSlide(prefix, halveAar, rows) {
  var thead = '<thead><tr><th>ID</th><th>Antal moduler</th><th>Titel</th><th>Indhold</th></tr></thead>';
  // var thead = '<thead><tr><th>ID</th><th>Uge nr.</th><th>Antal moduler</th><th>Titel</th><th>Indhold</th></tr></thead>';
  var tbody = rows.map(function (r) {
    var rowStr;
    if (r[1] === '-') {
      rowStr = '<tr class="muted">';
    } else {
      rowStr = '<tr>';
    }
    return rowStr + '<td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
    // return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>' + r[4] + '</td></tr>';
  }).join('');
  var section = document.createElement('section');
  section.innerHTML = '<h2>(' + prefix + ') Forløbsplan for ' + halveAar + '</h2>'
    + '<table class="studyplan-table">' + thead + '<tbody>' + tbody + '</tbody></table>';
  return section;
}

function addAgendaSlides() {
  var template = document.getElementById('agenda-template');
  var slides = document.querySelectorAll('section[data-slide-step]');
  var slidesContainer = document.querySelector('.slides');

  slides.forEach(function(slide) {
    var step = slide.getAttribute('data-slide-step');
    var clone = template.content.cloneNode(true);
    var section = clone.querySelector('.agenda');

    // Sæt data-current-step
    section.setAttribute('data-current-step', step);

    // Mute rækker
    var currentStep = parseInt(step, 10);
    section.querySelectorAll('tr[data-step]').forEach(function(row) {
      var rowStep = parseInt(row.getAttribute('data-step'), 10);
      // if (rowStep < currentStep) {
      //   row.classList.add('muted');
      // } else if (rowStep === currentStep) {
      //   row.classList.add('active');
      // }
      if (currentStep !== 0) {
        if (rowStep === currentStep) {
          row.classList.add('active');
        } else {
          row.classList.add('muted')
        }
      }
    });

    // Opdater agenda-header med teksten fra første og tredje celle i den tilsvarende række
    // (undtagen for step 0, som beholder den oprindelige titel)
    if (step !== '0') {
      var header = section.querySelector('.agenda-header');
      var matchingRow = section.querySelector('tr[data-step="' + step + '"]');
      if (header && matchingRow) {
        var cells = matchingRow.querySelectorAll('td');
        var firstCell = cells[0];
        var thirdCell = cells[2];
        if (firstCell && thirdCell) {
          var headerSpace = '&nbsp;';
          if (firstCell.textContent.length === 1) {
            headerSpace = headerSpace + headerSpace;
          }
          header.innerHTML= '(' + firstCell.textContent + ')' + headerSpace + thirdCell.textContent;
        }
      }
    }

    // Indsæt tabel-slidet lige før emne-slidet
    slidesContainer.insertBefore(section, slide);
  });
}


/* Change iframe url on click for phone */
document.addEventListener('click', function(e) {
    var link = e.target.closest('.phone-link');
    if (link) {
    e.preventDefault();
    var iframe = document.getElementById('phone-iframe');
    if (iframe) {
        iframe.src = link.getAttribute('href');
    }
    }
});

/* Change iframe url on click for tablet */
document.addEventListener('click', function(e) {
    var link = e.target.closest('.tablet-link');
    if (link) {
    e.preventDefault();
    var iframe = document.getElementById('tablet-iframe');
    if (iframe) {
        iframe.src = link.getAttribute('href');
    }
    }
});

/* Place*/
class QRCodeElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['url'];
  }

  attributeChangedCallback() {
    this.innerHTML = '';
    this.render();
  }

  render() {
    const url = this.getAttribute('url') || '';
    if (this.querySelector('canvas') || this.querySelector('img')) return; // already rendered
    if (url) {
      new QRCode(this, {
        text: url,
        width: 600,
        height: 600,
      });
    }
  }
}

customElements.define('qr-code', QRCodeElement);

Reveal.initialize({
  // The "normal" size of the presentation, aspect ratio will
  // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width: 1920,
  height: 1080,
  // width: window.innerWidth,
  // height: window.innerHeight,
  // width: "100%",
  // height: "100%",

  // Factor of the display size that should remain empty around
  // the content
  // margin: 0.04,
  margin: 0.11,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.1,
  maxScale: 2.0,
  
    // Display presentation control arrows
    // - true:      Show controls
    // - false:     Hide controls
    // - 'speaker': Show controls only in the speaker view
    controls: false,

    // Help the user learn the controls by providing hints, for example by
    // bouncing the down arrow when they first encounter a vertical slide
    controlsTutorial: true,

    // Determines where controls appear, "edges" or "bottom-right"
    controlsLayout: 'bottom-right',

    // Visibility rule for backwards navigation arrows; "faded", "hidden"
    // or "visible"
    controlsBackArrows: 'faded',

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    // - true:    Show slide number
    // - false:   Hide slide number
    //
    // Can optionally be set as a string that specifies the number formatting:
    // - "h.v":   Horizontal . vertical slide number (default)
    // - "h/v":   Horizontal / vertical slide number
    // - "c":   Flattened slide number
    // - "c/t":   Flattened slide number / total slides
    //
    // Alternatively, you can provide a function that returns the slide
    // number for the current slide. The function should take in a slide
    // object and return an array with one string [slideNumber] or
    // three strings [n1,delimiter,n2]. See #formatSlideNumber().
    slideNumber: "c/t",

    // Can be used to limit the contexts in which the slide number appears
    // - "all":      Always show the slide number
    // - "print":    Only when printing to PDF
    // - "speaker":  Only in the speaker view
    showSlideNumber: 'all',

    // Use 1 based indexing for # links to match slide number (default is zero
    // based)
    hashOneBasedIndex: false,

    // Add the current slide number to the URL hash so that reloading the
    // page/copying the URL will return you to the same slide
    hash: false,

    // Flags if we should monitor the hash and change slides accordingly
    respondToHashChanges: true,

    // Enable support for jump-to-slide navigation shortcuts
    jumpToSlide: true,

    // Push each slide change to the browser history.  Implies `hash: true`
    history: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Optional function that blocks keyboard events when retuning false
    //
    // If you set this to 'focused', we will only capture keyboard events
    // for embedded decks when they are in focus
    keyboardCondition: null,

    // Disables the default reveal.js slide layout (scaling and centering)
    // so that you can use custom CSS layout
    disableLayout: false,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: false,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Changes the behavior of our navigation directions.
    //
    // "default"
    // Left/right arrow keys step between horizontal slides, up/down
    // arrow keys step between vertical slides. Space key steps through
    // all slides (both horizontal and vertical).
    //
    // "linear"
    // Removes the up/down arrows. Left/right arrows step through all
    // slides (both horizontal and vertical).
    //
    // "grid"
    // When this is enabled, stepping left/right from a vertical stack
    // to an adjacent vertical stack will land you at the same vertical
    // index.
    //
    // Consider a deck with six slides ordered in two vertical stacks:
    // 1.1    2.1
    // 1.2    2.2
    // 1.3    2.3
    //
    // If you're on slide 1.3 and navigate right, you will normally move
    // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
    // from 1.3 -> 2.3.
    navigationMode: 'default',

    // Randomizes the order of slides each time the presentation loads
    shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags whether to include the current fragment in the URL,
    // so that reloading brings you to the same fragment position
    fragmentInURL: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Flags if we should show a help overlay when the question-mark
    // key is pressed
    help: true,

    // Flags if it should be possible to pause the presentation (blackout)
    pause: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Global override for autolaying embedded media (video/audio/iframe)
    // - null:   Media will only autoplay if data-autoplay is present
    // - true:   All media will autoplay, regardless of individual setting
    // - false:  No media will autoplay, regardless of individual setting
    autoPlayMedia: null,

    // Global override for preloading lazy-loaded iframes
    // - null:   Iframes with data-src AND data-preload will be loaded when within
    //           the viewDistance, iframes with only data-src will be loaded when visible
    // - true:   All iframes with data-src will be loaded when within the viewDistance
    // - false:  All iframes with data-src will be loaded only when visible
    preloadIframes: null,

    // Prevent iframes from stealing keyboard focus. Set to false to allow
    // embedded iframes to capture keyboard input.
    preventIframeAutoFocus: true,

    // Can be used to globally disable auto-animation
    autoAnimate: true,

    // Optionally provide a custom element matcher that will be
    // used to dictate which elements we can animate between.
    autoAnimateMatcher: null,

    // Default settings for our auto-animate transitions, can be
    // overridden per-slide or per-element via data arguments
    // autoAnimateEasing: 'ease',
    // autoAnimateDuration: 0.2,
    // autoAnimateUnmatched: true,

    // CSS properties that can be auto-animated. Position & scale
    // is matched separately so there's no need to include styles
    // like top/right/bottom/left, width/height or margin.
    autoAnimateStyles: [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset',
    ],

    // Controls automatic progression to the next slide
    // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
    //           is present on the current slide or fragment
    // - 1+:     All slides will progress automatically at the given interval
    // - false:  No auto-sliding, even if data-autoslide is present
    autoSlide: false,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Use this method for navigation when auto-sliding (defaults to navigateNext)
    autoSlideMethod: null,

    // Specify the average time in seconds that you think you will spend
    // presenting each slide. This is used to show a pacing timer in the
    // speaker view
    defaultTiming: null,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Opens links in an iframe preview overlay
    // Add `data-preview-link` and `data-preview-link="false"` to customise each link
    // individually
    previewLinks: false,

    // Exposes the reveal.js API through window.postMessage
    postMessage: true,

    // Dispatches all reveal.js events to the parent window through postMessage
    postMessageEvents: false,

    // Focuses body when page changes visibility to ensure keyboard shortcuts work
    focusBodyOnPageVisibilityChange: true,

    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'fast', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'none', // none/fade/slide/convex/concave/zoom

    // The maximum number of pages a single slide can expand onto when printing
    // to PDF, unlimited by default
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

    // Prints each fragment on a separate slide
    pdfSeparateFragments: false,

    // Offset used to reduce the height of content within exported PDF pages.
    // This exists to account for environment differences based on how you
    // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
    // on precisely the total height of the document whereas in-browser
    // printing has to end one pixel before.
    pdfPageHeightOffset: -1,

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Number of slides away from the current that are visible on mobile
    // devices. It is advisable to set this to a lower number than
    // viewDistance in order to save resources.
    mobileViewDistance: 2,

    // The display mode that will be used to show slides
    display: 'block',

    // Hide cursor if inactive
    hideInactiveCursor: true,

    // Time before the cursor is hidden (in ms)
    hideCursorTime: 5000,

    
    
    multimodal: {
      // background: {
      //   html: "var(--r-background-color)",
      //   iframe: "var(--r-background-color)",
      //   media: "white"
      // },
      // bordercolor: "white",
      borderwidth: "1px",
      // closebuttonhtml: '',
      // cssautoload: true,
      // csspath: '',
      // htmlminwidth: "100px",
      // htmlminheight: "100px",
      // overlaycolor: "rgba(0, 0, 0, 0.30)",
      padding: {
        html: "0",
        iframe: "0",
        media: "0"
      },
      radius: "0",
      // scalecorrection: true,
      // shadow: "0 0.5em 0.75em 0.5em rgba(0, 0, 0, 0.25)",
      // slidemodalevent: "slidetransitionend",
      // speed: 300,
      videoautoplay: true,
      videocontrols: false,
      videoautohide: true
      // zoom: true,
      // zoomfrom: 0.90
    },

  menu: {
    // Specifies which side of the presentation the menu will
    // be shown. Use 'left' or 'right'.
    side: 'left',

    // Specifies the width of the menu.
    // Can be one of the following:
    // 'normal', 'wide', 'third', 'half', 'full', or
    // any valid css length value
    width: 'third',

    // Add slide numbers to the titles in the slide list.
    // Use 'true' or format string (same as reveal.js slide numbers)
    numbers: "c",

    // Specifies which slide elements will be used for generating
    // the slide titles in the menu. The default selects the first
    // heading element found in the slide, but you can specify any
    // valid css selector and the text from the first matching
    // element will be used.
    // Note: that a section data-menu-title attribute or an element
    // with a menu-title class will take precedence over this option
    titleSelector: 'h1, h2, h3, h4, h5, h6',

    // If slides do not have a matching title, attempt to use the
    // start of the text content as the title instead
    useTextContentForMissingTitles: false,

    // Hide slides from the menu that do not have a title.
    // Set to 'true' to only list slides with titles.
    hideMissingTitles: false,

    // Adds markers to the slide titles to indicate the
    // progress through the presentation. Set to 'false'
    // to hide the markers.
    markers: true,

    // Specify custom panels to be included in the menu, by
    // providing an array of objects with 'title', 'icon'
    // properties, and either a 'src' or 'content' property.
    custom: false,

    // Specifies the themes that will be available in the themes
    // menu panel. Set to 'true' to show the themes menu panel
    // with the default themes list. Alternatively, provide an
    // array to specify the themes to make available in the
    // themes menu panel, for example...
    //
    // [
    //     { name: 'Black', theme: 'dist/theme/black.css' },
    //     { name: 'White', theme: 'dist/theme/white.css' },
    //     { name: 'League', theme: 'dist/theme/league.css' },
    //     {
    //       name: 'Dark',
    //       theme: 'lib/reveal.js/dist/theme/black.css',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/monokai.css'
    //     },
    //     {
    //       name: 'Code: Zenburn',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/zenburn.css'
    //     }
    // ]
    //
    // Note: specifying highlightTheme without a theme will
    // change the code highlight theme while leaving the
    // presentation theme unchanged.
    themes: false,

    // Specifies the path to the default theme files. If your
    // presentation uses a different path to the standard reveal
    // layout then you need to provide this option, but only
    // when 'themes' is set to 'true'. If you provide your own
    // list of themes or 'themes' is set to 'false' the
    // 'themesPath' option is ignored.
    themesPath: 'dist/theme/',

    // Specifies if the transitions menu panel will be shown.
    // Set to 'true' to show the transitions menu panel with
    // the default transitions list. Alternatively, provide an
    // array to specify the transitions to make available in
    // the transitions panel, for example...
    // ['None', 'Fade', 'Slide']
    transitions: ['None', 'Fade', 'Slide'],

    // Adds a menu button to the slides to open the menu panel.
    // Set to 'false' to hide the button.
    openButton: true,

    // If 'true' allows the slide number in the presentation to
    // open the menu panel. The reveal.js slideNumber option must
    // be displayed for this to take effect
    openSlideNumber: true,

    // If true allows the user to open and navigate the menu using
    // the keyboard. Standard keyboard interaction with reveal
    // will be disabled while the menu is open.
    keyboard: true,

    // Normally the menu will close on user actions such as
    // selecting a menu item, or clicking the presentation area.
    // If 'true', the sticky option will leave the menu open
    // until it is explicitly closed, that is, using the close
    // button or pressing the ESC or m key (when the keyboard
    // interaction option is enabled).
    sticky: false,

    // If 'true' standard menu items will be automatically opened
    // when navigating using the keyboard. Note: this only takes
    // effect when both the 'keyboard' and 'sticky' options are enabled.
    autoOpen: true,

    // If 'true' the menu will not be created until it is explicitly
    // requested by calling RevealMenu.init(). Note this will delay
    // the creation of all menu panels, including custom panels, and
    // the menu button.
    delayInit: false,

    // If 'true' the menu will be shown when the menu is initialised.
    openOnInit: false,

    // By default the menu will load it's own font-awesome library
    // icons. If your presentation needs to load a different
    // font-awesome library the 'loadIcons' option can be set to false
    // and the menu will not attempt to load the font-awesome library.
    loadIcons: true
  },
  
  // plugins: [ RevealMenu, Multimodal,RevealNotes],
  
  plugins: [ RevealMenu, Multimodal, RevealHighlight, RevealNotes],
});