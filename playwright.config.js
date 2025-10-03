import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries : 0,
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  fullyParallel: true,
  reporter: 'html',

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: 'only-on-failure',
        trace: "retain-on-failure"
      }
    // },
    // {
    //   name: 'Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     headless: false,
    //     screenshot: 'only-on-failure',
    //     trace: 'retain-on-failure',
    //   },
    // },
    // {
    //   name: 'Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     headless: false,
    //     screenshot: 'only-on-failure',
    //     trace: 'retain-on-failure',
    //   },
    // },
    // {
    //   name: 'AzureCloud',
    //   use: {
    //     serviceUrl: process.env.PLAYWRIGHT_SERVICE_URL,
    //     workspaceId: '60c042c2-be95-4cb3-bbc8-f871e6ca7719',
    //     projectSlug: 'pwtest-cloud',
    //     trace: 'retain-on-failure',
    //     screenshot: 'only-on-failure',
    //   },
     }
  ],
});