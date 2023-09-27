import * as cdk from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import * as Infra from "../lib/infra-stack";

test("Control tower control created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Infra.ControlTowerControlsStack(app, "MyTestStack", {
    orgId: "test",
  });
  // THEN

  const template = Template.fromStack(stack);

  template.hasResource("AWS::ControlTower::EnabledControl", {});
});
