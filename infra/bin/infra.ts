#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ControlTowerControlsStack } from "../lib/infra-stack";

const app = new cdk.App();
new ControlTowerControlsStack(app, "ControlTower-Controls", {
  orgId: "ou/o-EXAMPLE/ou-zzxx-zzx0zzz2",
});
