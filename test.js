import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 100,
    rps: 1000,
    stages: [
      { duration: '30s', target: 50 },
      { duration: '30s', target: 100 },
      { duration: '30s', target: 150 },
      { duration: '30s', target: 200 },
      { duration: '30s', target: 250 },
      { duration: '30s', target: 300 },
      { duration: '30s', target: 350 },
      { duration: '30s', target: 400 },
      { duration: '30s', target: 450 },
      { duration: '30s', target: 500 },
    ],
    thresholds: {
      // 90% of requests must finish within 400ms.
      http_req_duration: ['p(90) < 400'],
    },
  };
export default function () {
  http.get('http://54.254.35.182/short_videos/all_videos');
  sleep(1)
}