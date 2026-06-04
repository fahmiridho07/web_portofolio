export type ImageMeta = {
  width: number;
  height: number;
};

const imageMeta: Record<string, ImageMeta> = {
  "/assets/profile/profile_avatar-96.webp": { width: 96, height: 96 },
  "/assets/profile/profile_avatar-160.webp": { width: 160, height: 160 },
  "/assets/profile/profile_photo-640.webp": { width: 640, height: 853 },
  "/assets/profile/profile_photo-960.webp": { width: 960, height: 1280 },
  "/assets/profile/profile_photo.webp": { width: 1200, height: 1600 },
  "/assets/projects/bank-jatim-performance-dashboard/screenshots/Dashboard_Bank_Jatim_Pusat_page-0001.webp": {
    width: 1400,
    height: 810,
  },
  "/assets/projects/bank-jatim-performance-dashboard/screenshots/Dashboard_Bank_Jatim_Pusat_page-0002.webp": {
    width: 1400,
    height: 810,
  },
  "/assets/projects/bank-jatim-performance-dashboard/screenshots/Dashboard_Bank_Jatim_Pusat_page-0003.webp": {
    width: 1400,
    height: 810,
  },
  "/assets/projects/bank-jatim-performance-dashboard/screenshots/Dashboard_Bank_Jatim_Pusat_page-0004.webp": {
    width: 1400,
    height: 810,
  },
  "/assets/projects/devops-tasktracker/screenshots/github-repository.webp": { width: 1400, height: 894 },
  "/assets/projects/juanda-airport-visitor-forecasting/juanda_airport_forecasting_dashboard.svg": {
    width: 1440,
    height: 920,
  },
  "/assets/projects/juanda-airport-visitor-forecasting/juanda_model_comparison.svg": {
    width: 1440,
    height: 900,
  },
  "/assets/projects/kpc-ideku-v3-dotnet-stabilization/screenshots/01-help-hub.webp": {
    width: 1386,
    height: 665,
  },
  "/assets/projects/kpc-ideku-v3-dotnet-stabilization/screenshots/02-guided-tour.webp": {
    width: 1244,
    height: 597,
  },
  "/assets/projects/kpc-ideku-v3-dotnet-stabilization/screenshots/03-resend-approval.webp": {
    width: 1400,
    height: 673,
  },
  "/assets/projects/kpc-ideku-v3-dotnet-stabilization/screenshots/04-power-bi-report.webp": {
    width: 1257,
    height: 604,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/01-microsoft-forms-po-request.webp": {
    width: 830,
    height: 466,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/02-sharepoint-list-po-database.webp": {
    width: 1400,
    height: 669,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/02-sharepoint-list-po-database-home.webp": {
    width: 1080,
    height: 516,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/03-b-simpel-document-distribution.webp": {
    width: 1105,
    height: 525,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/04-power-automate-intake-document-check-flow.webp": {
    width: 356,
    height: 773,
  },
  "/assets/projects/kpc-power-automate-po-automation/screenshots/05-power-automate-hse-approval-b-simpel-flow.webp": {
    width: 352,
    height: 785,
  },
  "/assets/projects/la-crime-type-prediction/la_crime_prediction_dashboard.svg": {
    width: 1440,
    height: 960,
  },
  "/assets/projects/la-crime-type-prediction/la_model_comparison.svg": { width: 1440, height: 900 },
  "/assets/projects/la-crime-type-prediction/ml_workflow_diagram.svg": { width: 1440, height: 760 },
  "/assets/projects/medimate-medicine-reminder-app/screenshots/01-home.webp": { width: 390, height: 844 },
  "/assets/projects/medimate-medicine-reminder-app/screenshots/02-add-medicine.webp": {
    width: 390,
    height: 844,
  },
  "/assets/projects/medimate-medicine-reminder-app/screenshots/03-detail-medicine.webp": {
    width: 390,
    height: 844,
  },
  "/assets/projects/orphanage-inspection-route-optimization/screenshots/public-project-link.webp": {
    width: 1400,
    height: 894,
  },
  "/assets/projects/scent2me-perfume-recommendation/screenshots/01-home.webp": { width: 1400, height: 826 },
  "/assets/projects/scent2me-perfume-recommendation/screenshots/02-preferences.webp": {
    width: 1400,
    height: 826,
  },
  "/assets/projects/scent2me-perfume-recommendation/screenshots/03-results.webp": { width: 1400, height: 826 },
  "/assets/projects/scent2me-perfume-recommendation/screenshots/04-explore-results.webp": {
    width: 1400,
    height: 826,
  },
  "/assets/projects/scent2me-perfume-recommendation/screenshots/04-explore.webp": { width: 1400, height: 826 },
};

export function getImageMeta(src: string) {
  return imageMeta[src];
}
