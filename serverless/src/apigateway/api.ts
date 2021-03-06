import { RestApi, EndpointType, MethodLoggingLevel } from '@aws-cdk/aws-apigateway';
import { Construct } from '@aws-cdk/cdk';
import { getResourceName } from '@const';

export default (parent: Construct) => new RestApi(
  parent,
  'RestApiResource',
  {
    restApiName: getResourceName('api'),
    // endpointTypes
    endpointTypes: [
      EndpointType.Regional,
    ],
    deploy: true,
    deployOptions: {
      loggingLevel: MethodLoggingLevel.Info,
      stageName: 'v1',
    },
    // IP制限
    // policy: (() => {
    //   const policy = new PolicyDocument();

    //   policy.addStatement(
    //     new PolicyStatement(PolicyStatementEffect.Allow)
    //       .addAction('execute-api:Invoke')
    //       .addResource(`arn:aws:execute-api:${new AwsRegion()}:${new AwsAccountId()}:*`),
    //   );

    //   return policy;
    // })(),
  },
);
