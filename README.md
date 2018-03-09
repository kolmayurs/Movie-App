# Movie App

![Demo](https://movieappproject.herokuapp.com/)

## Folder Structure

After creation, your project should look like this:

```
Movie-App/
build/
node_modules/
README.md
package-lock.json
package.json
public/
	index.html
	favicon.ico
src/
	index.js
	store.js
	actions/
		dataActions.js
	components/
		App.js
		Favorite.js
		Filter.js
		Header.js
		Logo.js
		MovieCard.js
		MovieCardBox.js
		Nav.js
		NoMatch.js
		NoMatchMovies.js
	css/
		styles.css
	img/
		logo.png
	reducers/
		index.js

```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


