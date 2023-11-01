# Bags Technical Assessment

This app uses mock data to generate a visualization of the financial health of a business. The visualization is created using chat.js and react-chartjs-2.

The data contains the following fields:

- **revenue**: The total amount of money the business has made in a given month.
- **expenses**: The total amount of money the business has spent in a given month.
- **cash_flow**: The total amount of money the business has made minus the total amount of money the business has spent in a given month.
- **projected_revenue**: The total amount of money the business is expected to make in a given month.

The data is displayed in a line chart with the following features:

- ability to zoom in and out of the chart
- ability to pan the chart
- ability to hover over a point to see the exact value using the tooltip
- ability to reset the chart view to the original view

The mock data along with a representation of its schema can be found in the `src/mockData` folder.

### Design Rationale

I chose to use a line chart because it is a simple way to visualize the data. It is easy to see the trends in the data and the relationship between the different data points.

I decided to use chart.js because it is a simple library that is easy to use and has a lot of community support. However, this library required additional plugins for react and zooming features.

Although chartjs is easy to use, the documentation is not very clear. I had to do a lot of research to figure out how to implement the zooming and panning features and make them work adequately.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
