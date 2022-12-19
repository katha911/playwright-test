import { PlaywrightTestConfig } from '@playwright/test';

import * as mochawesome from 'mochawesome';
import * as mochawesomeReporter from 'mochawesome-report-generator';

export const startVideoRecording = async (videoFileName: string) => {
  const { video } = await setupPlaywright();
  await video.start(videoFileName);
};

export const stopVideoRecording = async () => {
  const { video } = await setupPlaywright();
  await video.stop();
};

const setupPlaywright = async (): Promise<PlaywrightTestConfig> => {
    const generateReport = async (videoFileName: string) => {
        const report = await mochawesome.createReport({
          reportDir: 'mochawesome-report',
          inline: true,
          video: true,
          videoOptions: {
            useFFmpeg: true,
            fileName: videoFileName,
          },
        });
      
        await mochawesomeReporter.create(report);
      };
      
      describe('My test', () => {
        beforeAll(async () => {
          await startVideoRecording('test.mp4');
        });
      
        afterAll(async () => {
          await stopVideoRecording();
          await generateReport('test.mp4');
        });
};