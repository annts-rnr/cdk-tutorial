import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class DemoS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     new cdk.aws_s3.Bucket(this, 'demoBucket', {
      bucketName: 'cdk-demo-bucket-20221129',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
