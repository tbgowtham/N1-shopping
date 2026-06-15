# N1shop - Premium Electronics E-Commerce 🛒

Hello nanba/nanbi! Welcome to **N1shop**, oru simple aana romba powerful aana static e-commerce website. Idhu epdi build pannom, idhoda workflow enna nu indha README la theliva pakalam. Neenga oru beginner or student ah irundha, idhu oru perfect learning resource!

## 🌟 Project Enna Idhu? (What is this project?)
N1shop oru tech products vikkira website. Ingaye products list aagum, add to cart pannalam, total price calculate aagum, innum detailed product views pakalam. Idhu ellame backend illama ***HTML, CSS, JavaScript** vechu create pannadhu. Single Page Application (SPA) maari irukkum, but lightweight!

## 🚀 Features (Ennenna irukku idhula?)
* **Product Grid:** 20+ tech products azhaga list aagi irukku.
* **Category Filtering:** "Mobiles", "Computers", "Audio" nu category select panna, adhu mattum filter aagi varum.
* **Shopping Cart Drawer:** Cart button ah click panna, oru side drawer open aagum. Idhula items add/remove pannalam, quantity adjust pannalam, total price paakalam.
* **Product Modal:** Oru product mela click panna, adhoda detailed specs oru popup modal la varum.
* **Responsive Design:** Mobile, Tablet, Desktop nu ellathulayum semmaya work aagum (Fully responsive!).

## 🏗️ Architecture - Idhu Epdi Build Pannom? (How is it built?)
Idhoda folder structure romba simple:
* `index.html` - Main structure.
* `style.css` - UI Design and styling (CSS Variables, Flexbox, Grid use pannirukkom).
* `app.js` - Logic and functionality.
* `images/` - Products oda photos.

### 1. The Structure (HTML) - Building the Skeleton
HTML la `index.html` la verum `<div id="root"></div>` mattum dhan irukkum (React maari!). Matha ellame JavaScript mooliyama **dynamically inject** pannirukkom. Idhu romba modern aana approach.

### 2. The Looks (CSS) - Painting the UI
CSS la **CSS Variables (Custom Properties)** use pannirukkom colors and fonts ku (`:root`). Adhanala theme maatharathu romba easy. 
- Grid layout use panni products ah line aah list pannirukkom.
- Hover effects, animations, overlay (Cart and Modal ku blur effects) ellam idhula dhan irukku.

### 3. The Brains (JavaScript) - Making it Work
Idhu dhan project oda idhayam (heart)!
- **Data:** `PRODUCTS` nu oru array of objects la ellam details um store aagi irukku (Name, Price, Category, Image, etc).
- **State Management:** `cart`, `isCartOpen`, `activeCategory` nu simple variables use panni app oda state ah maintain pannrom.
- **Rendering:** `renderApp()`, `renderProducts()`, `renderFilters()` nu functions eludhirukkom. Ivainga dhan DOM (HTML) ah update pannuvanga state marumpodhu.
- **Cart Logic:** `addToCart()`, `removeFromCart()`, `updateQuantity()` functions mooliyama array values change aagum, udane `updateCartUI()` call aagi UI refresh aagidum.
- **Event Listeners:** Buttons ah click pannum podhu enna nadakanum nu idhula dhan bind pannirukkom.

## 🛠️ Eppadi Setup Pandrathu? (How to run it locally?)
Idhuku complex setup edhuvum theva illa!
1. Indha folder ah open pannunga.
2. `index.html` file ah double click panni unga browser (Chrome/Firefox/Edge/Brave) la open pannunga.
3. Avlodhan! N1shop unga browser la work aagum.
(Tip: VS Code irundha **Live Server** extension use pannunga, romba easy aah irukkum).

**Happy Coding! Keep Learning! 💻✨**
# N1Shop
