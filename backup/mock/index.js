const Mock = require("mockjs");
Mock.mock("/books", "get", require("./json/books.json"))
Mock.mock("/faxianhaodianying", "get", require("./json/faxianhaodianying.json"))
Mock.mock("/goodBook", "get", require("./json/goodBook.json"))
Mock.mock("/movie", "get", require("./json/movie.json"))
Mock.mock("/shouye", "get", require("./json/shouye.json"))
Mock.mock("/xiaozua", "get", require("./json/xiaozua.json"))
Mock.mock("/xiaozub", "get", require("./json/xiaozub.json"))
Mock.mock("/xiaozuc", "get", require("./json/xiaozuc.json"))
Mock.mock("/searchClass", "get", require("./json/searchClass.json"))
