const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { stdout } = require("process");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath,Testcases) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.out`);
 const child = execSync (
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${jobId}.out`,
      { input:Testcases },
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
      }
 );
return child.toString();
 };
module.exports = {
  executeCpp,
};