#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoS3Stack } from '../lib/demo-s3-stack';

const app = new cdk.App();
new DemoS3Stack(app, 'DemoS3Stack');
