import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const name = core.getInput("name");
  console.log(`Hello ${name} from Custom`);
  core.setOutput("greeting", output_value);
} catch (error) {
  core.setFailed(error.message);
}
