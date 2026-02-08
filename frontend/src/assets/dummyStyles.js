// assets/dummyStyles.js

export const bannerHomeStyles = {
  // Layout styles (Original)
  container: "relative overflow-x-hidden min-h-[90vh] flex flex-col",
  navbarWrapper: "absolute top-0 pt-10 left-0 w-full z-20",
  videoContainer: "absolute inset-0 z-0",
  contentContainer: "container mx-auto px-4 py-24 z-10 pt-40 relative flex flex-col items-center text-center",

  // Minimalistic Layout Styles (New)
  minimalContainer: "relative overflow-x-hidden min-h-[45vh] md:min-h-[50vh] flex flex-col justify-center bg-gray-100",
  minimalNavbarWrapper: "absolute top-0 left-0 w-full z-20",
  minimalContentContainer: "container mx-auto px-6 md:px-12 z-10 relative flex flex-col items-start text-left",

  // Typography (Original)
  h1Container: "mb-12 md:mb-16",
  h1Text: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 leading-tight",
  h1SpanGray: "inline text-gray-100",
  h1SpanYellow: "text-yellow-500 font-[pacifico] inline-block ml-2 sm:ml-4",
  subtext: "text-white font-[pacifico] max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light",

  // Minimalistic Typography (New)
  minimalH1Text: "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl font-sans tracking-tight",
  minimalSubtext: "text-gray-600 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-sans tracking-normal",

  // Button (New)
  button: "bg-gray-900 text-white px-8 py-3.5 rounded-md font-medium hover:bg-black transition-all duration-300 flex items-center gap-2 group shadow-sm hover:shadow-md",
  buttonArrow: "w-4 h-4 transform group-hover:translate-x-1 transition-transform",

  // Cards section (Original)
  cardsContainer: "relative w-full max-w-6xl mx-auto",
  grid: "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 items-end",

  // Individual cards (Original)
  cardWrapper: "flex flex-col items-center",
  cardBase: "bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl border border-gray-800 w-full",
  cardMiddle: "bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl border border-yellow-600/30 w-full",

  // Card images (Original)
  cardImage: "w-full object-cover rounded-lg",
  leftCardImage: "h-44 sm:h-56 md:h-64 lg:h-64",
  middleCardImage: "h-52 sm:h-64 md:h-72 lg:h-72",
  rightCardImage: "h-44 sm:h-56 md:h-64 lg:h-64",

  // Card labels (Original)
  cardLabel: "mt-3 font-light text-sm sm:text-base",
  cardLabelGray: "text-gray-300",
  cardLabelYellow: "text-yellow-500",

  // Transforms (Original)
  leftCardTransform: "transform rotate-0 sm:-rotate-12 md:-rotate-2 lg:-rotate-2 xl:-rotate-6 transition-all duration-500 xl:hover:rotate-0 xl:hover:scale-110",
  middleCardTransform: "transform translate-y-0 sm:-translate-y-8 md:-translate-y-16 transition-all duration-500 pt-3 hover:translate-y-0 hover:scale-110",
  rightCardTransform: "transform rotate-0 sm:rotate-12 md:rotate-1 xl:rotate-6 transition-all duration-500 xl:hover:rotate-0 xl:hover:scale-110 lg:rotate-2",

  // Padding variations (Original)
  cardPadding: "p-4 md:p-2 lg:p-2 sm:p-4",

  // Video styles (Original)
  video: "absolute inset-0 w-full h-full object-cover pointer-events-none",

  // Font family (Original)
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

export const brandPageStyles = {
  // Layout styles
  container: "min-h-screen flex items-center justify-center p-6 bg-gray-50",
  notFoundCard: "max-w-lg text-center bg-white rounded-2xl shadow-lg p-8 border border-amber-200",
  notFoundTitle: "text-2xl font-semibold mb-4 text-gray-800",
  notFoundText: "text-gray-600 mb-6",
  goBackButton: "px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-amber-600 transition-all flex items-center justify-center gap-2 mx-auto",

  // Main container
  mainContainer: "min-h-screen bg-cover bg-fixed opacity-100 bg-center py-8 px-4 sm:px-6 md:px-8 lg:px-12",

  // Header
  headerContainer: "flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8 gap-6",
  backButtonContainer: "flex items-center z-10",
  backButton: "flex items-center gap-2 text-gray-800 cursor-pointer transition-colors group",
  backIcon: "p-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-md transition-all",
  backText: "font-medium hidden sm:inline",

  // Title
  titleContainer: "flex-1 flex flex-col items-center justify-center z-10",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold bg-white text-black rounded-full border border-gray-400 px-6 py-2 font-[pacifico] capitalize drop-shadow-md w-fit text-center",

  // Watch Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 relative z-10",

  // Watch Card
  card: "bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group",

  // Image Container
  imageContainer: "relative h-48 md:h-56 lg:h-64 xl:h-55 overflow-hidden flex items-center justify-center p-4",
  image: "h-full w-full object-cover transition-transform duration-500",

  // Details Container
  detailsContainer: "p-4",
  watchName: "font-semibold text-gray-800 text-lg sm:text-xl mb-1 font-[pacifico] truncate",
  watchDesc: "text-gray-600 text-sm mb-3 line-clamp-2 h-10",

  // Price and Controls
  priceAndControls: "flex items-center justify-between",
  price: "text-lg font-semibold text-gray-600",

  // Quantity Controls
  quantityContainer: "flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1",
  quantityButton: "p-1 rounded-full cursor-pointer transition",
  quantityCount: "px-3 text-sm font-medium w-10 text-center",

  // Add Button
  addButton: "flex items-center cursor-pointer bg-gray-300 gap-1 hover:bg-gradient-to-r from-gray-300 to-gray-500 text-black px-3 py-1.5 rounded-xl transition-all duration-200 text-sm"
};

// For other components, you can add more style objects
export const sharedStyles = {
  // Common button styles that might be reused
  buttonPrimary: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
  buttonSecondary: "px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300",
};

// src/assets/dummyStyles.js


// Add these styles to your existing dummyStyles.js file

export const categoriesHomeStyles = {
  // Layout
  section: "min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4",
  container: "max-w-7xl mx-auto",

  // Header
  header: "text-center mb-12",
  h1: "font-light text-gray-900 mb-4 leading-tight",
  h1SpanRegular: "inline",
  h1SpanAccent: "text-amber-600 ml-3 font-medium",
  underline: "w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full",
  subtext: "text-gray-600 max-w-2xl mx-auto text-base md:text-lg",

  // Grid
  grid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8",

  // Cards
  cardLink: "group block focus:outline-none",
  cardWrapper: "relative overflow-hidden rounded-xl border transition-shadow duration-300 bg-white shadow-sm hover:shadow-lg focus:shadow-lg border-gray-200",
  imageContainer: "w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden",
  image: "w-full h-full object-cover transform transition-transform duration-500",

  // Card content
  cardContent: "p-3 md:p-4 text-center",
  cardTitleBase: "text-sm md:text-base font-medium truncate transition-colors duration-300",
  cardTitleHover: "text-amber-600",
  cardTitleNormal: "text-gray-800",
  cardTagline: "text-xs text-gray-500 mt-1 hidden md:block",

  // Focus ring
  focusRing: "absolute inset-0 pointer-events-none ring-0 focus:ring-4 focus:ring-amber-200",

  // Inline styles
  h1FontSize: { fontSize: "clamp(1.6rem, 3.8vw, 2.75rem)" },
  playfairFont: { fontFamily: "'Playfair Display', serif" },

  // Media queries (for style tag)
  styleString: `
    @media (max-height: 500px) {
      .aspect-square { min-height: 120px; }
    }
    @media (max-width: 360px) {
      .gap-4 { gap: 10px; }
    }
  `
};

// Add to existing dummyStyles.js
export const comingSoonStyles = {
  // Section styles
  section: "bg-white text-gray-900 py-12",
  container: "max-w-7xl mx-auto px-6 lg:px-12",

  // Header
  headerContainer: "flex items-center justify-between mb-8",
  titleContainer: "",
  title: "text-2xl md:text-3xl tracking-wide uppercase",
  titleStyle: { fontFamily: "'Playfair Display', serif" },
  subtitle: "text-sm text-gray-500 mt-1 uppercase tracking-wider",
  viewAllLink: "text-sm text-gray-600 hover:text-gray-900 uppercase tracking-wide",

  // Watches Container
  watchesContainer: "w-full overflow-x-auto",
  watchesRow: "flex gap-8 items-start min-w-[1100px] lg:min-w-full justify-between",

  // Watch Item
  watchItem: "flex-1 max-w-xs flex flex-col items-center",
  imageContainer: "w-full flex justify-center",
  image: "object-contain h-56 md:h-64 lg:h-72 xl:h-80 transition-transform transform",

  // Figcaption
  figcaption: "mt-6 text-center",
  watchName: "text-xs md:text-sm uppercase tracking-widest text-gray-700 font-semibold",
  price: "mt-3 text-sm text-gray-600",

  // Function for formatting (keep as helper)
  formatINR: (n) => `₹ ${n.toLocaleString("en-IN")}`
};

// Add to existing src/assets/dummyStyles.js

const contactPageStyles = {
  // Page layout
  pageContainer: "min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12",
  innerContainer: "max-w-7xl mx-auto",

  // Header section
  pageHeader: "text-center mb-8 sm:mb-10 md:mb-10",
  pageTitle: "text-3xl sm:text-4xl md:text-5xl font-medium",
  pageSubtitle: "mt-2 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base",

  // Main grid
  mainGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-start",

  // Left column - Form
  leftColumn: "lg:col-span-7 order-1 lg:order-1",
  formCard: "bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-8 lg:p-8",
  form: "space-y-5",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",

  // Input styles
  inputLabel: "text-sm text-gray-600",
  requiredStar: "text-red-500",
  inputContainer: "mt-2 relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputBase: "w-full rounded-xl border px-4 py-3 pl-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",
  inputNormal: "border-gray-200",
  inputError: "border-rose-400",
  errorMessage: "text-rose-500 text-xs mt-1 flex items-center gap-2",

  // Textarea
  textareaContainer: "mt-2 w-full rounded-xl border px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",

  // Form buttons
  buttonsContainer: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4",
  submitButton: "inline-flex items-center gap-3 bg-gradient-to-r from-gray-300 to-gray-500 text-white px-5 sm:px-6 py-3 rounded-full shadow hover:scale-[1.02] cursor-pointer transition-transform disabled:opacity-60",
  clearButton: "inline-flex items-center cursor-pointer gap-2 border border-gray-200 px-4 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors",

  // Right column
  rightColumn: "lg:col-span-5 order-2 lg:order-2",
  rightColumnGrid: "grid grid-cols-1 gap-4 items-start",

  // Creative card
  creativeCardBase: "rounded-2xl p-4 border border-gray-100 bg-gradient-to-r shadow-lg",
  creativeCardIconContainer: "p-3 rounded-lg bg-white/90 backdrop-blur",
  creativeCardTitle: "font-semibold",
  creativeCardSubtitle: "text-sm text-gray-600 mt-2",
  creativeCardButtonBase: "inline-flex bg-gradient-to-br from-gray-300 to-gray-400 items-center gap-2 px-3 py-2 rounded-lg text-black text-sm font-medium shadow-sm",

  // Toast
  toastBase: "fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg",
  toastError: "bg-rose-500 text-white",
  toastSuccess: "bg-black text-white",

  // Accent backgrounds for creative cards
  accentAmber: "from-gray-300 to-gray-400",
  accentIndigo: "from-indigo-50 to-cyan-50",

  // Button accent classes
  buttonAmber: "bg-amber-50 text-amber-700",
  buttonIndigo: "bg-indigo-600 text-white",
};


export { contactPageStyles };

// Add these styles to your existing dummyStyles.js file

export const watchOfferBannerStyles = {
  // Layout
  container: "min-h-screen -mx-2 xl:-mx-0 md:-mx-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4",
  maxWidthContainer: "max-w-6xl w-full",

  // Banner
  banner: "bg-gradient-to-r from-gray-900 to-navy rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row",

  // Content Section
  contentSection: "flex-1 p-8 md:p-12 flex flex-col justify-center relative",

  // Decorative elements
  decorativeLarge: "absolute w-32 h-32 rounded-full border-4 border-gold/20 -top-8 -left-8",
  decorativeSmall: "absolute w-16 h-16 rounded-full border-4 border-gold/20 bottom-12 -right-8",

  // Offer tag
  offerTag: "bg-gold text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6 self-start animate-pulse",

  // Heading
  heading: "text-4xl md:text-5xl font-heading font-bold text-white mb-4",
  headingAccent: "text-gold",

  // Description
  description: "text-gray-300 font-[pacifico] text-lg mb-8 max-w-md",

  // Countdown Timer
  countdownGrid: "grid grid-cols-4 -mx-6 md:-mx-0 xl:-mx-0 gap-4 mb-8 max-w-md",
  countdownItem: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center",
  countdownValue: "text-2xl md:text-3xl font-bold text-white",
  countdownLabel: "text-xs text-gray-200 mt-1",

  // Features
  featuresContainer: "flex flex-wrap gap-6",
  featureItem: "flex items-center text-gray-300",
  featureIcon: "text-gold mr-2",
  featureText: "text-sm",

  // Image Section
  imageSection: "flex-1 relative",
  imageOverlay: "absolute inset-0 bg-gradient-to-l from-gold/10 to-transparent z-10",
  image: "w-full h-full object-cover transition-transform duration-700 hover:scale-105",

  // Price Tag
  priceTag: "absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center shadow-lg",
  oldPrice: "text-xs text-gray-600 line-through",
  newPrice: "text-2xl font-bold text-navy",
  discount: "text-xs text-gold font-semibold",

  // Inline styles
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

// Add to existing dummyStyles.js
export const footerStyles = {
  // Main container
  footer: "relative bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 overflow-hidden",
  topBorder: "absolute top-0 left-0 w-full h-1 bg-gradient-to-br from-gray-300 to-gray-500",
  patternOverlay: "absolute inset-0 opacity-5",

  // Container
  mainContainer: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10",

  // Newsletter section
  newsletterSection: "py-12 border-b border-gray-200 border-dashed",
  newsletterContent: "text-center",
  newsletterTitle: "text-2xl font-serif font-bold text-gray-900 mb-4",
  newsletterText: "text-gray-600 max-w-2xl mx-auto mb-6",

  // Newsletter form
  formContainer: "flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto",
  emailInput: "px-4 py-3 w-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none rounded-b-lg sm:mb-0 mb-3 border border-gray-300 focus:outline-none",
  subscribeButton: "px-6 py-3 bg-gradient-to-br from-gray-300 to-gray-500 text-white font-medium rounded-b-lg sm:rounded-r-lg sm:rounded-l-none rounded-t-lg transition-colors shadow-md hover:shadow-lg",

  // Main footer grid
  mainGrid: "py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",

  // Brand section
  brandSection: "space-y-4",
  brandContainer: "flex items-center",
  brandIconContainer: "relative",
  brandIconPing: "absolute inset-0 rounded-full bg-amber-200 animate-ping opacity-20",
  brandIcon: "h-10 w-10 text-gray-500 relative z-10",
  brandName: "ml-3 text-2xl font-bold font-serif bg-black bg-clip-text text-transparent",
  brandDescription: "text-sm text-gray-600 max-w-xs leading-relaxed",
  socialIconsContainer: "flex space-x-4 pt-2",
  socialIcon: "h-10 w-10 rounded-full bg-white flex items-center justify-center hover:text-black text-gray-500 transition-all duration-300 shadow-sm hover:shadow-md",
  socialIconInner: "h-5 w-5",

  // Section headings
  sectionHeading: "text-lg font-serif font-semibold text-gray-900 mb-4 flex items-center",
  sectionIcon: "h-5 w-5 text-gray-500 mr-1",

  // Links lists
  linksList: "space-y-3",
  linkItem: "text-sm text-gray-600 hover:text-black transition-colors flex items-center group w-fit",
  linkIcon: "h-4 w-4 text-black opacity-0 group-hover:opacity-100 transition-opacity mr-1",

  // Contact Info
  contactList: "space-y-4",
  contactItem: "flex items-start",
  contactIconContainer: "h-10 w-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center flex-shrink-0 mr-3",
  contactIcon: "h-5 w-5 text-black",
  contactText: "text-sm text-gray-600",

  // Bottom section
  bottomSection: "py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 border-dashed",
  copyright: "text-xs text-gray-500 flex items-center mb-4 md:mb-0",
  heartIcon: "h-3 w-3 mx-1 text-amber-600 fill-current",
  designerLink: "text-xs text-gray-500",
  linkHover: "hover:text-blue-600 transition-colors",

  // Support links
  supportLink: "text-sm text-gray-600 hover:text-black transition-colors flex items-center group",

  // CSS for media queries (keep as object)
  mediaQueries: `
    @media (width: 1024px) {
      .max-w-7xl > .py-12 {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }

    @media (min-width: 640px) {
      input[type="email"] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      button[aria-label="Subscribe"] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    @media (max-width: 640px) {
      footer .opacity-5 { opacity: 0.03 !important; }
    }
  `
};

// Add to existing src/assets/dummyStyles.js

const loginPageStyles = {
  // Page layout
  pageContainer: "relative min-h-screen font-sans",
  toastContainer: "", // Empty since ToastContainer handles its own styles

  // Main content
  mainContent: "relative z-10 flex justify-center items-center min-h-screen p-4",

  // Back button
  backButton: "absolute top-6 cursor-pointer left-6 z-20 bg-gradient-to-r from-gray-300 to-gray-400 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center transition-transform transform hover:-translate-y-0.5",
  backButtonText: "ml-1",

  // Login card
  loginCard: "w-full max-w-md p-8 rounded-2xl bg-white shadow-xl transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden",

  // Decorative elements
  decorativeTopLeft: "absolute -top-10 -left-10 w-20 h-20 bg-black rounded-full opacity-50",
  decorativeBottomRight: "absolute -bottom-10 -right-10 w-24 h-24 bg-gray-400 rounded-full opacity-50",

  // Card content
  cardTitle: "text-3xl font-semibold text-center text-gray-800 mb-2",
  cardSubtitle: "text-center text-gray-500 mb-8",

  // Form
  form: "",

  // Form fields
  formField: "mb-5",
  formLabel: "block text-gray-600 text-sm font-medium mb-2",
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",

  // Input styles
  inputBase: "w-full pl-10 p-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200",
  passwordInputBase: "w-full pl-10 pr-10 p-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200",

  // Password toggle
  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center",

  // Checkbox/Remember me
  rememberMeContainer: "flex items-center mb-6",
  checkboxContainer: "flex items-center h-5",
  checkbox: "h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-400",
  checkboxLabelContainer: "ml-3 text-sm",
  checkboxLabel: "font-medium cursor-pointer text-gray-700",
  requiredStar: "text-red-500",

  // Submit button
  submitButton: "w-full py-3 px-4 cursor-pointer font-[pacifico] text-black bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-md text-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1",

  // Sign up link
  signupContainer: "mt-4 text-center",
  signupText: "text-sm text-gray-500",
  signupLink: "text-sm text-black font-medium",
};


export { loginPageStyles };

// Add these styles to your existing dummyStyles.js file

export const navbarStyles = {
  // Layout
  header: "sticky top-4 z-50 pb-5 flex justify-center overflow-x-hidden",
  nav: "bg-white shadow-lg rounded-lg xl:rounded-full sm:rounded-xl lg:rounded-full md:rounded-full px-4 sm:px-3 md:px-5 py-3 w-[95%] md:w-[90%] max-w-5xl overflow-visible",

  // Container
  container: "flex items-center justify-between",

  // Brand/Logo
  brandContainer: "flex items-center",
  logoContainer: "flex items-center justify-center rounded-full bg-gray-100 p-2 mr-3",
  logoIcon: "h-6 w-6 text-gray-800",
  logoLink: "flex items-baseline gap-2 select-none",
  logoText: "text-lg sm:text-2xl md:text-2xl font-light tracking-wide",

  // Desktop Navigation
  desktopNav: "hidden md:flex items-center space-x-2",
  navItemBase: "relative flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200",
  navItemActive: "text-gray-900 font-semibold",
  navItemInactive: "text-gray-700 hover:text-gray-900",
  activeIndicator: "absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-opacity duration-200",
  activeIndicatorVisible: "opacity-100 bg-gradient-to-r from-gray-600 to-gray-400",
  activeIndicatorHidden: "opacity-0",

  // Right Actions
  rightActions: "flex items-center gap-6",
  cartLink: "text-gray-500 hover:text-gray-700 transition-colors relative",
  cartIcon: "h-5 w-5",
  cartBadge: "absolute top-0 right-0 -translate-x-1/2 sm:-top-4 sm:-right-4 sm:translate-x-0 inline-flex items-center justify-center px-1.5 py-1 text-xs rounded-full bg-gray-500 text-white font-medium",

  // Account Links
  accountLink: "hidden md:flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors",
  accountIcon: "h-5 w-5 mr-1",
  accountText: "text-sm",

  // Mobile Menu
  mobileMenuButton: "md:hidden",
  menuButton: "text-gray-500 hover:text-gray-700",
  menuIcon: "h-6 w-6",

  // Mobile Menu Content
  mobileMenu: "md:hidden mt-4 pb-4 border-t border-gray-200 pt-4",
  mobileMenuContainer: "flex flex-col space-y-2",
  mobileNavItemBase: "flex xl:items-center justify-center lg:items-center md:items-center px-4 py-2 text-sm rounded-lg transition-colors",
  mobileNavItemActive: "bg-gray-200 text-gray-900 font-semibold",
  mobileNavItemInactive: "text-gray-700 hover:bg-gray-50",
  mobileNavItemText: "font-medium",

  // Mobile Account Section
  mobileAccountContainer: "px-4 pt-2",
  mobileAccountLink: "flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountButton: "w-full flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountIcon: "h-4 w-4",

  // Inline styles
  logoTextStyle: {
    fontFamily: "'Playfair Display', serif",
    color: "#0a0a0a"
  },
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

// Add to existing dummyStyles.js
export const signUpStyles = {
  // Main container
  pageContainer: "min-h-screen bg-gradient-to-b from-white to-gray-50 flex pt-20 items-center justify-center p-6",
  pageFontStyle: { fontFamily: "'Poppins', sans-serif" },

  // Back button
  backButton: "absolute top-6 left-6 cursor-pointer z-30 bg-gradient-to-br from-gray-200 to-gray-400 backdrop-blur-sm rounded-full p-2 shadow-sm flex items-center justify-center transition-transform transform",
  backIcon: "h-5 w-5 text-gray-700",
  backText: "ml-1 font-[pacifico]",

  // Form container
  formContainer: "w-full max-w-md",
  card: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 relative overflow-hidden",

  // Decorative elements
  decorativeCircle: "absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full opacity-80 filter blur-sm",

  // Headings
  title: "text-2xl font-semibold text-gray-800 text-center mb-2",
  titleFontStyle: { fontFamily: "'Playfair Display', serif" },
  subtitle: "text-center text-sm text-gray-500 font-[pacifico] mb-6",

  // Form
  form: "space-y-4",
  label: "text-sm text-gray-600 block",

  // Input fields
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",
  inputField: "w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition",
  passwordInputField: "w-full pl-10 pr-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition",

  // Password toggle
  passwordToggleButton: "absolute inset-y-0 right-0 cursor-pointer pr-3 flex items-center",
  passwordToggleIcon: "h-5 w-5 text-gray-400",

  // Remember me checkbox
  checkboxContainer: "flex items-center justify-between",
  checkboxLabel: "flex cursor-pointer items-center text-sm select-none",
  checkboxInput: "h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-gray-400",
  checkboxText: "ml-2 text-gray-700",

  // Submit button
  submitButton: "w-full py-3 rounded-full font-[pacifico] cursor-pointer bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 font-medium shadow-md text-xl hover:-translate-y-0.5 transition-transform",

  // Bottom link
  bottomContainer: "mt-4 text-center",
  bottomText: "text-sm text-gray-500",
  loginLink: "text-sm text-black font-medium"
};

// Add to existing src/assets/dummyStyles.js

const testimonialPageStyles = {
  // Page layout
  pageSection: "py-12 bg-white",
  container: "container mx-auto px-6",

  // Title
  title: "text-3xl md:text-4xl text-center font-extralight text-gray-900 tracking-wide mb-10",

  // Horizontal scroller
  scroller: "flex gap-8 overflow-x-auto xl:overflow-x-container pb-6 px-2 md:px-6  snap-x snap-mandatory cursor-grab",

  // Card styles
  card: "snap-center flex-shrink-2 min-w-[92%] md:min-w-[48%] lg:min-w-[49%] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row",

  // Image block
  imageBlock: "w-full lg:w-5/12 min-h-[220px] md:min-h-[300px] overflow-hidden relative rounded-t-2xl lg:rounded-l-2xl",
  image: "absolute inset-0 w-full h-full object-cover",

  // Content block
  contentBlock: "w-full lg:w-7/12 p-8 flex flex-col justify-between",
  cardTitle: "text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-3",
  cardMeta: "text-sm text-gray-400 mb-6",
  cardExcerpt: "text-gray-600 leading-relaxed",

  // Scrollbar hiding
  scrollbarHide: " .container ::-webkit-scrollbar { display: none; }   .container { -ms-overflow-style: none; scrollbar-width: none; }",
};


export { testimonialPageStyles };

// Add these styles to your existing dummyStyles.js file

export const watchPageStyles = {
  // Layout
  container: "px-6 sm:px-8 md:px-12 lg:px-24 py-12 bg-white min-h-screen",

  // Header Section
  headerContainer: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-6 md:gap-0",
  headerTitle: "text-3xl sm:text-4xl md:text-5xl font-[pacifico] font-extrabold tracking-widest text-gray-500",
  titleAccent: "text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-cyan-500",
  headerDescription: "mt-3 text-sm text-gray-500 max-w-xl",

  // Filter Buttons
  filterContainer: "flex flex-wrap items-center gap-3",
  filterButtonBase: "inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-medium transition",
  filterButtonActive: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
  filterButtonInactive: "bg-white text-gray-700 border hover:shadow-sm",
  filterIcon: "w-4 h-4",

  // Grid
  grid: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-10",

  // Watch Card
  card: "group text-center",
  imageContainer: "relative mx-auto max-w-[240px] w-full h-[320px] md:h-[420px]",
  image: "w-full h-full object-contain",

  // Cart Controls
  cartControlsContainer: "absolute left-1/2 -translate-x-1/2 bottom-2",
  cartQuantityControls: "inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow",
  cartButton: "p-2 rounded cursor-pointer",
  cartQuantity: "px-3 py-1 min-w-[36px] text-center font-medium",
  addToCartButton: "flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white shadow hover:bg-gradient-to-br from-gray-200 to-gray-400",
  addToCartIcon: "w-4 h-4",

  // Product Info
  productInfo: "mt-4",
  productName: "text-sm font-semibold uppercase",
  productDescription: "text-xs text-gray-500",
  productPrice: "mt-2 text-sm font-medium"
};

export const categorySectionStyles = {
  section: "py-24 bg-white",
  container: "container mx-auto px-6 md:px-12",
  header: "flex justify-between items-end mb-12",
  title: "text-3xl font-bold text-gray-900 font-sans tracking-tight",
  viewAll: "text-gray-500 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors uppercase tracking-widest",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",

  // Card
  card: "group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500",
  image: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
  overlay: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity",
  content: "absolute bottom-8 left-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
  categoryName: "text-2xl font-bold mb-2 font-sans",
  itemCount: "text-sm text-gray-300 font-medium tracking-wide flex items-center gap-2 before:content-[''] before:w-8 before:h-[1px] before:bg-white/50"
};

export const featuredSectionStyles = {
  section: "py-24 bg-gray-50",
  container: "container mx-auto px-6 md:px-12",
  header: "flex justify-between items-end mb-12",
  title: "text-3xl font-bold text-gray-900 font-sans tracking-tight",
  viewAll: "text-gray-500 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors uppercase tracking-widest",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",

  // Card
  card: "bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-gray-100 group relative",
  imageContainer: "aspect-square bg-gray-100/50 rounded-xl mb-6 overflow-hidden relative",
  image: "w-full h-full object-contain mix-blend-multiply p-4 transition-transform duration-500 group-hover:scale-110",
  info: "text-center",
  productName: "font-semibold text-gray-900 mb-2 truncate text-base font-sans",
  price: "text-black font-bold text-lg",

  // Add button overlay
  addButton: "absolute bottom-3 right-3 bg-white shadow-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
};

export const minimalNavbarStyles = {
  // Layout
  header: "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100",
  nav: "container mx-auto px-6 md:px-12 py-4",
  container: "flex items-center justify-between h-full",

  // Brand
  brandContainer: "flex items-center gap-2",
  logoText: "text-2xl font-bold text-gray-900 font-sans tracking-tight",

  // Desktop Nav
  desktopNav: "hidden md:flex items-center gap-8",
  navItem: "text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors relative group",
  activeIndicator: "absolute -bottom-6 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
  activeIndicatorVisible: "scale-x-100",

  // Right Actions
  rightActions: "flex items-center gap-6",
  iconButton: "text-gray-500 hover:text-gray-900 transition-colors relative",
  badge: "absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full",

  // Mobile Menu
  mobileMenuButton: "md:hidden text-gray-900",
  mobileMenuOverlay: "fixed inset-0 bg-black/20 z-[60] md:hidden",
  mobileMenuContainer: "fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl p-6 transform transition-transform duration-300 ease-in-out",
  mobileMenuHeader: "flex justify-between items-center mb-8",
  mobileMenuTitle: "text-lg font-bold font-sans",
  mobileCloseButton: "text-gray-500 hover:text-gray-900",
  mobileNavList: "flex flex-col gap-4",
  mobileNavItem: "text-lg font-medium text-gray-600 hover:text-gray-900 py-2 border-b border-gray-50",
  mobileAccountSection: "mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4"
};

export const minimalFooterStyles = {
  section: "py-16 bg-white border-t border-gray-100",
  container: "container mx-auto px-6 md:px-12",
  grid: "grid grid-cols-1 md:grid-cols-4 gap-12",

  // Columns
  brandCol: "col-span-1 md:col-span-1 space-y-4",
  brandTitle: "text-2xl font-bold font-sans tracking-tight",
  brandText: "text-gray-500 text-sm leading-relaxed",

  // Links
  columnHeading: "font-semibold text-gray-900 mb-4",
  linkList: "flex flex-col gap-3",
  link: "text-gray-500 hover:text-gray-900 text-sm transition-colors w-fit",

  // Newsletter
  newsletterText: "text-gray-500 text-sm mb-4",
  inputContainer: "flex gap-2",
  input: "bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all",
  button: "bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors",

  // Bottom
  bottomBar: "mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4",
  copyright: "text-gray-400 text-xs",
  socialFlex: "flex gap-4",
  socialIcon: "text-gray-400 hover:text-black transition-colors"
};

export const shopPageStyles = {
  container: "container mx-auto px-6 md:px-12 pb-24",
  title: "hidden", // Hidden because we use ShopHero now

  // Layout
  layout: "flex flex-col md:flex-row gap-12 items-start",

  // Sidebar
  sidebar: "w-full md:w-64 flex-shrink-0 space-y-10",
  filterGroup: "space-y-4",
  filterTitle: "font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider",
  categoryList: "space-y-3",
  categoryItem: "block text-gray-500 hover:text-black cursor-pointer transition-colors text-sm font-medium",
  categoryItemActive: "text-black underline underline-offset-4 decoration-1",

  // Main Content
  mainContent: "flex-1 w-full",

  // Toolbar
  toolbar: "flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-6",
  searchContainer: "relative w-full sm:max-w-xs",
  searchIcon: "absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4",
  searchInput: "w-full pl-8 pr-4 py-2 border-b border-gray-200 text-sm focus:outline-none focus:border-black transition-colors bg-transparent",
  sortSelect: "border-none text-sm font-medium text-gray-900 focus:outline-none cursor-pointer bg-transparent text-right hover:text-gray-600 transition-colors",

  // Grid
  grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10",

  // Product Card
  card: "group cursor-pointer",
  imageContainer: "aspect-[4/5] bg-gray-100 overflow-hidden relative mb-4",
  productImage: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",
  cardContent: "space-y-1",
  productName: "font-semibold text-gray-900 text-base font-sans",
  productPrice: "text-gray-500 font-medium text-sm",
  productCategory: "text-xs text-gray-400 uppercase tracking-widest hidden"
};

export const shopHeroStyles = {
  section: "relative bg-gray-900 py-32 mb-12",
  backgroundImage: "absolute inset-0 w-full h-full object-cover opacity-60",
  overlay: "absolute inset-0 bg-black/50",
  container: "container mx-auto px-6 md:px-12 text-center relative z-10",
  title: "text-5xl md:text-6xl font-bold font-sans text-white mb-6 tracking-tight",
  subtitle: "text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light",
  breadcrumbs: "flex items-center justify-center gap-2 text-sm text-gray-300 mb-4 uppercase tracking-widest font-medium"
};

export const productDetailsStyles = {
  container: "container mx-auto px-6 md:px-12 py-12",
  wrapper: "flex flex-col lg:flex-row gap-12 lg:gap-20",

  // Gallery
  gallerySection: "w-full lg:w-1/2 flex flex-col gap-4",
  mainImageContainer: "aspect-square bg-gray-100 rounded-2xl overflow-hidden relative",
  mainImage: "w-full h-full object-cover object-center",
  thumbnails: "grid grid-cols-4 gap-4",
  thumbnail: "aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer border-2 transition-all",
  thumbnailActive: "border-black",
  thumbnailInactive: "border-transparent hover:border-gray-200",
  thumbnailImage: "w-full h-full object-cover",

  // Info
  infoSection: "w-full lg:w-1/2 flex flex-col pt-4",
  breadcrumbs: "text-sm text-gray-500 mb-6 font-medium flex gap-2 items-center",
  title: "text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4",
  ratingContainer: "flex items-center gap-2 mb-6",
  stars: "flex text-yellow-400 gap-1",
  reviewCount: "text-gray-500 text-sm",
  price: "text-2xl font-bold text-gray-900 mb-8",
  description: "text-gray-600 leading-relaxed mb-8",

  // Selectors
  selectorGroup: "mb-8",
  selectorTitle: "text-sm font-bold text-gray-900 uppercase tracking-wide mb-3",
  sizeOptions: "flex flex-wrap gap-3",
  sizeButton: "min-w-[48px] h-12 px-4 rounded-lg flex items-center justify-center border text-sm font-medium transition-all",
  sizeActive: "border-black bg-black text-white",
  sizeInactive: "border-gray-200 text-gray-700 hover:border-gray-900",

  colorOptions: "flex gap-4",
  colorButton: "w-8 h-8 rounded-full border border-gray-200 cursor-pointer relative",
  colorSelected: "ring-2 ring-offset-2 ring-black",

  // Actions
  actions: "flex gap-4 mb-12",
  addToCartBtn: "flex-1 bg-black text-white h-14 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2",
  wishlistBtn: "w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors",

  // Tabs
  tabSection: "mt-20 border-t border-gray-100 pt-12",
  tabHeader: "flex gap-8 mb-8 border-b border-gray-200",
  tabButton: "pb-4 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors relative",
  tabActive: "text-black after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-0.5 after:bg-black",

  // Reviews
  reviewsGrid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  reviewCard: "bg-gray-50 p-6 rounded-xl",
  reviewHeader: "flex justify-between items-center mb-4",
  reviewerName: "font-bold text-gray-900",
  reviewDate: "text-sm text-gray-400",
  reviewBody: "text-gray-600 text-sm leading-relaxed"
};

export const aboutPageStyles = {
  container: "container mx-auto px-6 md:px-12 py-16",

  // Header
  headerSection: "text-center max-w-3xl mx-auto mb-20",
  title: "text-4xl md:text-5xl font-bold font-sans text-gray-900 mb-6 tracking-tight",
  subtitle: "text-lg text-gray-500 leading-relaxed",

  // Content Section (Mission)
  section: "mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
  imageContainer: "aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden",
  image: "w-full h-full object-cover",
  contentBlock: "space-y-6",
  sectionTitle: "text-3xl font-bold font-sans text-gray-900",
  paragraph: "text-gray-600 leading-relaxed",

  // Stats
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-gray-50 rounded-2xl p-12",
  statItem: "text-center",
  statValue: "text-4xl font-bold text-gray-900 mb-2 font-sans",
  statLabel: "text-sm text-gray-500 uppercase tracking-wide",

  // Team
  teamGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
  teamCard: "group",
  teamImageContainer: "aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4 relative",
  teamImage: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
  teamName: "text-lg font-bold text-gray-900",
  teamRole: "text-gray-500 text-sm"
};

export const serviceSectionStyles = {
  section: "py-20 bg-gray-50",
  container: "container mx-auto px-6 md:px-12",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12",
  card: "flex flex-col items-center text-center group",
  iconContainer: "w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-110 transition-transform duration-300",
  icon: "text-gray-900 w-8 h-8",
  title: "text-lg font-bold text-gray-900 mb-2 font-sans",
  description: "text-gray-500 text-sm leading-relaxed"
};

export const carouselStyles = {
  section: "relative bg-white pt-12 pb-20",
  container: "container mx-auto px-6 md:px-12",
  overflow: "overflow-hidden rounded-2xl relative shadow-sm",
  wrapper: "flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-[400px] md:h-[500px]",
  slide: "min-w-full relative flex items-center justify-center bg-gray-900 group",
  image: "absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000",
  overlay: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent",
  content: "relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center",
  subtitle: "text-sm md:text-base font-medium tracking-widest uppercase mb-4 text-gray-300",
  title: "text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight leading-tight",
  description: "text-lg md:text-xl font-light mb-8 text-gray-200 max-w-2xl",
  buttonContainer: "absolute bottom-8 right-8 flex gap-3 z-20",
  navButton: "p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all border border-white/20 hover:scale-110 active:scale-95"
};

export const heroSliderStyles = {
  section: "relative h-[80vh] w-full overflow-hidden bg-gray-900",
  wrapper: "relative h-full w-full",
  slide: "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
  slideActive: "opacity-100 z-10",
  slideInactive: "opacity-0 z-0",
  image: "w-full h-full object-cover opacity-70",
  overlay: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent",
  contentContainer: "absolute inset-0 flex items-center justify-start container mx-auto px-6 md:px-12 z-20",
  content: "max-w-2xl text-white",
  subtitle: "text-amber-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base animate-fadeInUp",
  title: "text-5xl md:text-7xl font-bold mb-6 font-sans tracking-tight leading-tight animate-fadeInUp delay-100",
  description: "text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg animate-fadeInUp delay-200",
  button: "bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-amber-400 transition-all duration-300 inline-flex items-center gap-2 group animate-fadeInUp delay-300",
  buttonArrow: "w-4 h-4 transform group-hover:translate-x-1 transition-transform",

  // Navigation
  navContainer: "absolute bottom-10 right-6 md:right-12 z-30 flex gap-4",
  navButton: "p-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
};

// Cart Page Styles
export const cartPageStyles = {
  container: "container mx-auto px-6 md:px-12 py-12 min-h-[60vh]",
  title: "text-3xl font-bold mb-8 font-sans",
  layout: "flex flex-col lg:flex-row gap-12",
  itemsSection: "flex-1",
  summarySection: "w-full lg:w-1/3 bg-gray-50 p-8 rounded-2xl h-fit",

  // Cart Item
  item: "flex items-center gap-6 py-6 border-b border-gray-100 last:border-0",
  itemImage: "w-24 h-24 object-cover rounded-lg bg-gray-100",
  itemInfo: "flex-1",
  itemName: "font-semibold text-gray-900 mb-1",
  itemMeta: "text-sm text-gray-500 mb-2",
  itemPrice: "font-medium text-black",

  // Controls
  quantityControls: "flex items-center gap-3 border border-gray-200 rounded-full px-3 py-1 w-fit",
  quantityBtn: "w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black transition-colors",
  quantityDisplay: "w-4 text-center text-sm font-medium",
  removeBtn: "text-gray-400 hover:text-red-500 transition-colors ml-4",

  // Summary
  summaryTitle: "text-xl font-bold mb-6 font-sans",
  summaryRow: "flex justify-between text-gray-600 mb-4 text-sm",
  totalRow: "flex justify-between text-xl font-bold border-t border-gray-200 pt-6 mt-6 mb-8",
  checkoutBtn: "w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm block text-center"
};

// Checkout Page Styles
export const checkoutPageStyles = {
  container: "container mx-auto px-6 md:px-12 py-12 min-h-screen",
  title: "text-3xl font-bold mb-8 font-sans text-center lg:text-left",
  layout: "flex flex-col lg:flex-row gap-12 lg:gap-24",

  // Form Section
  formSection: "flex-1 order-2 lg:order-1",
  sectionTitle: "text-xl font-bold mb-6 font-sans border-b border-gray-100 pb-4",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
  inputGroup: "space-y-2",
  label: "text-sm font-medium text-gray-700",
  input: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:outline-none transition-colors bg-white",

  // Order Summary Section
  summarySection: "w-full lg:w-96 order-1 lg:order-2",
  summaryCard: "bg-gray-50 p-8 rounded-2xl sticky top-8",
  summaryItem: "flex gap-4 py-4 border-b border-gray-200/60 last:border-0",
  summaryImage: "w-16 h-16 object-cover rounded-md",
  summaryInfo: "flex-1",
  summaryName: "text-sm font-bold text-gray-900 line-clamp-2",
  summaryMeta: "text-xs text-gray-500 mt-1",
  summaryPrice: "text-sm font-medium",

  // Totals
  totals: "mt-6 space-y-3 pt-6 border-t border-gray-200",
  totalRow: "flex justify-between text-sm text-gray-600",
  finalTotal: "flex justify-between text-lg font-bold text-black border-t border-gray-200 pt-4 mt-4",

  // Button
  placeOrderBtn: "w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors mt-8 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
};

// Profile Page Styles
export const profilePageStyles = {
  container: "container mx-auto px-6 md:px-12 py-12 min-h-screen bg-gray-50",
  title: "text-3xl font-bold mb-8 font-sans",
  layout: "flex flex-col lg:flex-row gap-8",

  // Sidebar
  sidebar: "w-full lg:w-1/4 bg-white rounded-2xl shadow-sm p-6 h-fit",
  userProfile: "flex flex-col items-center mb-8 border-b border-gray-100 pb-8",
  userImage: "w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50",
  userName: "text-xl font-bold text-gray-900",
  userEmail: "text-sm text-gray-500",
  nav: "space-y-1",
  navItem: "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
  navItemActive: "bg-black text-white",
  navItemInactive: "text-gray-600 hover:bg-gray-50 hover:text-black",

  // Main Content Area
  content: "flex-1 bg-white rounded-2xl shadow-sm p-8",
  sectionTitle: "text-2xl font-bold mb-6 font-sans border-b border-gray-100 pb-4",

  // Dashboard Overview
  statsGrid: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
  statCard: "bg-gray-50 p-6 rounded-xl flex items-center justify-between",
  statValue: "text-2xl font-bold text-gray-900",
  statLabel: "text-sm text-gray-500 mt-1",
  statIcon: "w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm",

  // Order Card
  orderCard: "border border-gray-100 rounded-xl p-6 mb-6 last:mb-0 hover:shadow-md transition-shadow",
  orderHeader: "flex flex-wrap justify-between items-start gap-4 mb-4 pb-4 border-b border-gray-50",
  orderId: "font-bold text-lg",
  orderDate: "text-sm text-gray-500",
  orderStatus: "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
  statusDelivered: "bg-green-100 text-green-700",
  statusProcessing: "bg-blue-100 text-blue-700",
  statusShipped: "bg-purple-100 text-purple-700",

  // Order Items
  orderItems: "space-y-4 mb-6",
  itemRow: "flex items-center gap-4",
  itemImage: "w-16 h-16 rounded-lg object-cover bg-gray-100",
  itemInfo: "flex-1",
  itemName: "font-medium text-gray-900",
  itemQty: "text-gray-500 text-sm",

  // Progress Bar
  progressContainer: "mt-6",
  progressTrack: "h-2 bg-gray-100 rounded-full overflow-hidden relative",
  progressBar: "h-full bg-black rounded-full transition-all duration-1000",
  progressLabels: "flex justify-between text-xs text-gray-400 mt-2 font-medium bg-transparent",

  // Address Card
  addressGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  addressCard: "border border-gray-200 rounded-xl p-6 relative hover:border-black transition-colors cursor-pointer group",
  addressType: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-2",
  addressName: "font-bold text-gray-900 mb-1",
  addressDetails: "text-gray-600 text-sm leading-relaxed mb-4",
  defaultBadge: "absolute top-4 right-4 bg-black text-white text-[10px] px-2 py-1 rounded",
  editBtn: "text-sm font-medium text-gray-500 group-hover:text-black decoration-underline underline-offset-4"
};