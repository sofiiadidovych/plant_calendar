const express = require("express");

const router = express.Router();
const path = require("path");

const app = express();

const PORT = 3001;

const plantsRouter = require("./api/plants");

router.use("/plants", plantsRouter);

app.use('/api', router);

const cors = require("cors");
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.text());

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});