const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const routerSnacks = jsonServer.router("snacks.json");
const routerTayNinh = jsonServer.router("tayninhfoods.json");
const routerCereals = jsonServer.router("cereals.json");
const routerCombo = jsonServer.router("combo.json");
const routerBest = jsonServer.router("bestseller.json");

const middlewares = jsonServer.defaults();
const queryString = require("query-string");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === "PATCH") {
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
router.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

routerSnacks.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

routerTayNinh.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

routerCereals.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

routerCombo.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

routerBest.render = (req, res) => {
  // check GET with pagination
  // if yes, custom output

  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  console.log("header :", totalCountHeader);
  if (req.method === "GET" && totalCountHeader) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    console.log("query : ", queryParam);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};

// Start server
server.use("/fastfoods", router);
server.use("/snacks", routerSnacks);
server.use("/tayninh", routerTayNinh);
server.use("/cereals", routerCereals);
server.use("/combo", routerCombo);
server.use("/bestseller", routerBest);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("JSON Server is running");
});
