import JiraClient from 'jira-connector';
import { PluginConfig, PluginContext } from './types';

export function makeClient(
  config: PluginConfig,
  context: PluginContext
): JiraClient {
  const client = new JiraClient({
    host: config.jiraHost,
    basic_auth: {
      base64: context.env.JIRA_AUTH
    }
  });

  console.log(client);

  return client;
}
