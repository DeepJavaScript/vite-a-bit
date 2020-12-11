import './style/style.css';

// Babel
import "core-js";
import "regenerator-runtime/runtime";

// Prettier
const prettier = require("prettier/standalone");
const plugins = [require("prettier/parser-graphql")];
prettier.format("query { }", { parser: "graphql", plugins });

// My Scripts
import './script/script.js';
