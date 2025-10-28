 # Chef's Menu App
     
   A simple mobile application for managing and displaying a restaurant's menu items.
     This app allows chefs or staff to add new dishes
      with details like name, description, course, and price, and view them in a list.
   ## **Features:**
   **View Menu Items:** See a list of all added dishes.
     **Add New Items:** Easily add new dishes with a dedicated form.
    **Dish Details:** Each menu item includes a dish name, description, 
    course (e.g., Starters, Mains, Desserts), and price.
    **Simple Navigation:** Seamlessly switch between viewing the menu and adding new items.
    
   ##**How to Run:**
    
   **This project is built with React Native and Expo.**
   
   1.  **Clone the repository:**
      git clone <repository-url>
      cd Mast-main
    2.  **Install dependencies:**
      npm install
  
    3.  **Start the Expo development server:**
      npm start
  or
      yarn start
This will open a new tab in your browser with the Expo Dev Tools. You can then:
Scan the QR code with the Expo Go app on your phone (iOS or Android).
Run on an Android emulator.
Run on an iOS simulator (macOS only).
Run in a web browser (limited functionality for some native modules).


##**Github link:**
https://github.com/VCCT-MAST5112-2025-G2/Mast

##**Youtube Link:**
https://youtube.be/Y7bnVplmPcs?feature=shared


   
## **Soft Ware Used:**
   React Native: For building native mobile applications using JavaScript and React.
    Expo: A framework and platform for universal React applications.
      TypeScript: For type-safe JavaScript.
      `@react-native-picker/picker`: For dropdown selection in forms.

    **How to operate the Chef's Menu App:**

   1. **Launch the App:**
       * The app will start on the Home Screen, displaying "Chef's Menu" and the current number of items (initially zero).

   2. **Add a New Menu Item:**
        On the Home Screen, tap the "+ Add Menu Item" button.
        You will be taken to the Add Menu Item Screen.
        Fill in the details for the new dish:
            Dish Name: Enter the name of the dish (e.g., "Grilled Salmon").
            Description: Provide a short description (e.g., "Fresh salmon with seasonal vegetables").
            Course: Select the course from the dropdown (Starters, Mains, Desserts).
            Price (R): Enter the price (e.g., "120.00").
            Tap the "Add Dish" button to save. If any fields are empty, an alert will prompt you to fill them.
            After adding, you'll return to the Home Screen, and your new dish will appear.
            To go back without adding, tap "Cancel" or the "🏠 Home" button.

   3. **View Menu Items:**
        On the Home Screen, all added menu items are displayed as cards, showing their name, description, course, and price.
