import { cdk8s, kplus } from './imports'

export const createBaseNode = (app: cdk8s.App) => {
  const chart = new cdk8s.Chart(app, 'base')

  const configMap = new kplus.ConfigMap(chart, 'node-config', {
    data: {
      'config.json': JSON.stringify({
        // Example configuration
        network: 'mainnet',
        // Add other necessary configurations
      }),
    },
  })

  // Define a Deployment for the base-mainnet node

  const deployment = new kplus.Deployment(chart, 'deployment', {
    metadata: {
      name: 'base-node',
    },
  })

  deployment.addContainer({
    image: '',
  })

  // Define a Service to expose the Deployment
  const service = new Service(chart, 'BaseNodeService', {
    spec: {
      type: 'LoadBalancer', // Use LoadBalancer to expose the service externally
      ports: [{ port: 80, targetPort: 30303 }], // Map external port to container port
      selector: {
        app: 'base-mainnet-node',
      },
    },
  })
}
