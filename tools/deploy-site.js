/**
 * web 페이지와 루트의 menu 폴더를 한 묶음으로 GitHub Pages에 배포합니다.
 * 프로젝트 루트에서 실행: node tools/deploy-site.js
 */

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { PROJECT, WEB, MENU_DIR } = require("./paths");

const dest = fs.mkdtempSync(path.join(os.tmpdir(), "prakeemo-site-"));
fs.cpSync(WEB, dest, { recursive: true });
fs.cpSync(MENU_DIR, path.join(dest, "menu"), { recursive: true });

const result = spawnSync("npx", ["gh-pages", "-d", dest], {
  cwd: PROJECT,
  stdio: "inherit",
});

process.exit(result.status == null ? 1 : result.status);
