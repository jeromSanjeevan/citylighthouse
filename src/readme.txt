# 1. Switch directly to your project root folder
cd "C:\File_Directory\JEROM\CITY_Light_House_church-Website\my-angular-app"

# 2. Stage the newly updated address coordinates
git add .

# 3. Create a save point commit 
git commit -m "content: update contact details to Jubilee Cres and assign official domain email channels"

# 4. Push code blueprint changes to main repository 
git push origin main

# 5. Recompile your website layout for the subfolder route
npx ng build --configuration production --base-href "/citylighthouse/"

# 6. Upload the built static pages onto the live gh-pages web branch
npx ngh --dir=dist/my-angular-app/browser