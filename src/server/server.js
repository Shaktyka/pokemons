import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import HapiInert from "@hapi/inert";

import React from "react";
import Hapi from "@hapi/hapi";
import ReactDom from "react-dom/server";
import { setPath } from "hookrouter";
// const hookrouter = require('../../dist');

// import {NotFoundPage} from '../pages';
import { App } from "../components";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register(HapiInert);

  server.route({
    method: "GET",
    path: "/main.js",
    handler: (request, h) =>
      h.file(path.join(process.cwd(), "dist", "main.js")),
  });

  server.route({
    method: "GET",
    path: "/{any*}",
    handler: (request) => {
      setPath(request.path);
      const pathInnerHTML = path.join(process.cwd(), "dist", "index.html");
      const template = handlebars.compile(
        fs.readFileSync(pathInnerHTML, "utf8")
      );
      const result = ReactDom.renderToString(<App />);
      const page = template({
        content: result,
      });
      return page;
    },
  });

  await server.start();
  // console.log('Server running on %s', server.info.uri);
};

process.on("unhandledRejection", () => {
  // console.log(err);
  process.exit(1);
});

init();
