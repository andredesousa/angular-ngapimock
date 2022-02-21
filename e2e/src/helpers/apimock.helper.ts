import { Client } from '@ng-apimock/protractor-plugin';

declare const ngApimock: Client;

/**
 * Select a scenario in the mock service.
 *
 * @param name The name of the mock service (e.g. 'users', or 'endpoint').
 * @param scenario The name of the scenario (e.g. 'ok', or 'error').
 */
export function selectScenario(name: string, scenario: string): Promise<void> {
  return ngApimock.selectScenario(name, scenario);
}

/**
 * Select the default scenarios for all service endpoints.
 * It should be used after each test case in which #selectScenario may have changed the current scenario.
 */
export function resetToDefaultScenarios(): Promise<void> {
  return ngApimock.resetMocksToDefault();
}

/**
 * Adds delay to a scenario.
 * Delay gets reset when calling #resetMocksToDefault is called.
 *
 * @param name The name of the mock service (e.g. 'users', or 'endpoint').
 * @param delay The time to delay the mock service (e.g. 1000 ms).
 */
export function delayScenarioBy(name: string, delay: number): Promise<void> {
  return ngApimock.delayResponse(name, delay);
}
