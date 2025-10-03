// import { defineConfig } from '@playwright/test';
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//   use: {
//     trace: 'retain-on-failure',
//   },
//   workers: 20,
//   projects: [
//     {
//       name: 'AzureCloud',
//       use: {
//         serviceUrl: process.env.PLAYWRIGHT_SERVICE_URL,
//         workspaceId: '60c042c2-be95-4cb3-bbc8-f871e6ca7719',
//         projectSlug: 'pwtest-cloud',
//       },
//     },
//   ],
// });