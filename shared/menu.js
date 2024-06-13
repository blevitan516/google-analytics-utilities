/**
 * Copyright 2022 Google LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Google Analytics Utilities')
    .addSubMenu(
      ui.createMenu('Universal Analytics')
      .addItem('List Account Summaries', 'writeAccountSummariesToSheet')
      .addItem('List View Details', 'writeViewDetailsToSheet')
      .addItem('List Events', 'writeEventsToSheet')
      .addItem('List Metrics', 'writeMetricsDataToSheet')
      .addSubMenu(
        ui.createMenu('Custom Dimensions')
        .addItem('List Custom Dimensions', 'writeCustomDimensionsToSheet')
        .addSubMenu(
          ui.createMenu('Modify Custom Dimensions')
          .addItem('List Template Dimensions', 'writeTemplateCustomDimensionsToSheet')
          .addItem('List Destination Properties', 'writeCustomDimensionDestinationPropertiesToSheet')
          .addItem('Modify Custom Dimensions', 'modifyCustomDimensions')))
      .addSubMenu(
        ui.createMenu('Custom Metrics')
        .addItem('List Custom Metrics', 'writeCustomMetricsToSheet')
        .addSubMenu(
          ui.createMenu('Modify Custom Metrics')
          .addItem('List Template Metrics', 'writeTemplateCustomMetricsToSheet')
          .addItem('List Destination Properties', 'writeCustomMetricDestinationPropertiesToSheet')
          .addItem('Modify Custom Metrics', 'modifyCustomMetrics')))
      .addItem('List Filters', 'writeFilterDataToSheet')
      .addSubMenu(
        ui.createMenu('Remarketing Audiences')
        .addItem('List Settings', 'writeAudiencesToSheet')
        .addItem('Delete Audiences', 'deleteUAAudiences')
      )
      .addSubMenu(
        ui.createMenu('Goals')
        .addItem('List Goals', 'writeGoalsToSheet')
        .addItem('Create Goals', 'createGoals'))
      .addSubMenu(
        ui.createMenu('Users')
        .addItem('List Users', 'writeUAUsersToSheet')
      ).addSubMenu(
        ui.createMenu('Auto Config')
        .addItem('List Properties', 'writeUAPropertiesToSheet')
        .addItem('List Opt Out Statuses', 'writeSelectedOptOutStatusesToSheet')
        .addItem('Update Opt Out Statuses', 'updateSelectedOptOutStatuses')
      ).addSubMenu(
        ui.createMenu('Google Ads Links')
        .addItem('List', 'writeUAAdsLinksToSheet')
      ).addSubMenu(
        ui.createMenu('Connected Site Tags')
        .addItem('List', 'writeUAConnectedSiteTagDataToSheet')
        .addItem('Modify', 'modifyConnectedSiteTags')
      ))
    .addSubMenu(
      ui.createMenu('Google Analytics 4')
      // Selectors
      .addItem('List Account Summaries', 'writeGA4AccountSummariesToSheet')
      .addItem('List Data Stream Selection', 'writeDataStreamSelectionToSheet')
      // Links Submenu
      .addSubMenu(
        ui.createMenu('Links')
          .addSubMenu(
          ui.createMenu('Google Ads')
          .addItem('List', 'writeGA4AdsLinksToSheet')
          .addItem('Modify', 'modifyGA4AdsLinks'))
        .addSubMenu(
          ui.createMenu('Firebase')
          .addItem('List', 'writeGA4FirebaseLinksToSheet')
          .addItem('Modify', 'modifyGA4FirebaseLinks'))
        .addSubMenu(
          ui.createMenu('DV360')
          .addItem('List', 'writeGA4DV360LinksToSheet')
          .addItem('Modify', 'modifyGA4DV360Links'))
        .addSubMenu(
          ui.createMenu('SA360')
          .addItem('List', 'writeGA4SA360LinksToSheet')
          .addItem('Modify', 'modifyGA4SA360Links'))
          .addSubMenu(
          ui.createMenu('BigQuery')
          .addItem('List', 'writeGA4BigQueryLinksToSheet'))
        .addSubMenu(
          ui.createMenu('AdSense')
          .addItem('List', 'writeGA4AdSenseLinksToSheet')
          .addItem('Modify', 'modifyAdSenseLinks'))
      )
      .addSubMenu(
        ui.createMenu('Properties')
        .addItem('List', 'writeGA4PropertyDetailsToSheet')
        .addItem('Modify', 'modifyGA4Properties'))
      .addSubMenu(
        ui.createMenu('Data Streams')
        .addItem('List', 'writeGA4StreamsToSheet')
        .addItem('Modify', 'modifyGA4Streams'))
      .addSubMenu(
        ui.createMenu('Custom Dimensions')
        .addItem('List', 'writeGA4CustomDimensionsToSheet')
        .addItem('Modify', 'modifyGA4CustomDimensions'))
     .addSubMenu(
        ui.createMenu('Custom Metrics')
        .addItem('List', 'writeGA4CustomMetricsToSheet')
        .addItem('Modify', 'modifyGA4CustomMetrics'))
      .addSubMenu(
        ui.createMenu('Key Events')
        .addItem('List', 'writeGA4KeyEventsToSheet')
        .addItem('Modify', 'modifyGA4KeyEvents'))
      .addSubMenu(
        ui.createMenu('Audiences')
        .addItem('List', 'writeGA4AudiencesToSheet')
        .addItem('Modify', 'modifyGA4Audiences'))
      .addSubMenu(
        ui.createMenu('Users')
        .addItem('List', 'writeGA4AccessBindingsToSheet')
        .addItem('Modify', 'modifyGA4AccessBindings'))
      .addSubMenu(
        ui.createMenu('Expanded Data Sets')
        .addItem('List', 'writeGA4ExpandedDataSetsToSheet')
        .addItem('Modify', 'modifyGA4ExpandedDataSets'))
      .addSubMenu(
        ui.createMenu('Channel Groups')
        .addItem('List', 'writeGA4ChannelGroupsToSheet')
        .addItem('Modify', 'modifyChannelGroups'))
      .addSubMenu(
        ui.createMenu('Measurement Protocol Secrets')
        .addItem('List', 'writeGA4MeasurementProtocolSecretsToSheet')
        .addItem('Modify', 'modifyMeasurementProtocolSecrets'))
      .addSubMenu(
        ui.createMenu('Event Create Rules')
        .addItem('List', 'writeGA4EventCreateRulesToSheet')
        .addItem('Modify', 'modifyEventCreateRules'))
      .addSubMenu(
        ui.createMenu('Subproperty Event Filters')
        .addItem('List', 'writeGA4SubpropertyEventFiltersToSheet')
        .addItem('Modify', 'modifySubpropertyEventFilters'))
      .addSubMenu(
        ui.createMenu('Rollup Property Source Links')
        .addItem('List', 'writeGA4RollupPropertySourceLinksToSheet')
        .addItem('Modify', 'modifyRollupPropertySourceLinks'))
      .addSeparator()
      .addSubMenu(
        ui.createMenu('Advanced')
        .addSubMenu(
          ui.createMenu('Easy Property Creation')
          .addItem('List Templates', 'writePropertyTemplatesToSheet')
          .addItem('Create Properties', 'createPropertiesFromTemplates')
          .addItem(
            'Resize Row Heights', 'resizeEasyPropertyCreationSheetRowHeights'))
        .addSubMenu(
          ui.createMenu('Health Report')
          .addItem('Create Report', 'createHealthReport'))
        .addSubMenu(
          ui.createMenu('Audience Lists')
          .addItem('List Existing Audiences', 'writeGA4AudiencesToAudiencesListsSheet')
          .addItem('List Audience Lists', 'writeAudienceListsToSheet')
          .addItem('Create Audience Lists', 'createAudienceLists')
          .addItem('Check Audience List States', 'checkAudienceListsState')
          .addItem('Export Audience Lists', 'exportAudienceListsData')))
      .addItem('List All Property Settings', 'listAllGA4PropertyResources')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Show/Hide Sheets')
      .addItem('Hide UA Sheets', 'hideUASheets')
      .addItem('Show UA Sheets', 'showUASheets')
      .addItem('Hide GA4 Sheets', 'hideGA4Sheets')
      .addItem('Show GA4 Sheets', 'showGA4Sheets')
    )
    .addSeparator()
    .addItem('Check for Updates', 'checkRelease')
    .addToUi();
}