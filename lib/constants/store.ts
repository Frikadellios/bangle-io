export const MAIN_STORE_NAME = 'main-store';
export const WORKER_STORE_NAME = 'worker-naukar-store';

export const workerSyncWhiteListedActions: string[] = [
  'action::@bangle.io/slice-notification:',
  'action::@bangle.io/slice-page:',
  'action::@bangle.io/slice-workspace:',
  'action::@bangle.io/slice-editor-sync:',
  'action::@bangle.io/worker-slice-from-naukar:',
  'action::@bangle.io/slice-workspace-opened-doc-info:',
];
