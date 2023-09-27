import { Stack, StackProps } from "aws-cdk-lib";
import { aws_controltower as controltower } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as fs from "fs";
import controlmetadata from "./control-meta-data.json";

interface ControlTowerControlsStackProperties extends StackProps {
  orgId: string;
}

export class ControlTowerControlsStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: ControlTowerControlsStackProperties
  ) {
    super(scope, id, props);
    const controlIdentifierPrefix =
      "arn:aws:controltower:" + process.env.CDK_DEFAULT_REGION + "::control/";
    const ouConst =
      "arn:aws:organizations::" +
      process.env.CDK_DEFAULT_ACCOUNT +
      ":" +
      props.orgId;
    for (var i = 0; i < controlmetadata.controls.length; i++) {
      //console.log(controlmetadata.controls[i]);
      if (controlmetadata.controls[i].enabled) {
        new controltower.CfnEnabledControl(
          this,
          controlmetadata.controls[i].name + "_" + props.orgId,
          {
            controlIdentifier:
              controlIdentifierPrefix + controlmetadata.controls[i].name,
            targetIdentifier: ouConst,
          }
        );
      }
    }
  }
}
