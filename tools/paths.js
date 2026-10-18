const path = require("path");

const PROJECT = path.resolve(__dirname, "..");
const WEB = path.join(PROJECT, "web");
const MENU_DIR = path.join(PROJECT, "menu");
const WORK_DIR = path.join(MENU_DIR, "Work");
const ABOUT_DIR = path.join(MENU_DIR, "About");
const WORK_URL = "menu/Work";
const ABOUT_URL = "menu/about";

module.exports = { PROJECT, WEB, MENU_DIR, WORK_DIR, ABOUT_DIR, WORK_URL, ABOUT_URL };
