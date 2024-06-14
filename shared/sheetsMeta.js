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

const sheetsMeta = {
  ua: {
    viewDetailsList: {
      sheetName: 'UA View Details List',
      read: {},
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 22
      }
    },
    customDimensions: {
      sheetName: 'UA Custom Dimensions',
      read: {},
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      }
    },
    customMetrics: {
      sheetName: 'UA Custom Metrics',
      read: {},
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 9
      }
    },
    events: {
      sheetName: 'UA Events',
      read: {},
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      }
    },
    accountSummaries: {
      sheetName: 'UA Account Summaries',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 8
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      }
    },
    filters: {
      sheetName: 'UA Filters',
      read: {},
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 26
      }
    },
    audiences: {
      sheetName: 'UA Audiences',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 18
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 20
      }
    },
    goals: {
      sheetName: 'UA Goal Settings',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 25
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 24
      }
    },
    settings: {
      sheetName: 'UA Settings',
      read: {
        row: 2,
        column: 2,
        numRows: 3,
        numColumns: 1
      }
    },
    modifyCdsTemplateDimensions: {
      sheetName: 'UA Custom Dimensions - Modify',
      write: {
        row: 12,
        column: 1,
        numRows: 1,
        numColumns: 4
      },
      read: {
        row: 12,
        column: 1,
        numRows: 1,
        numColumns: 5
      }
    },
    modifyCdsTemplateProperty: {
      sheetName: 'UA Custom Dimensions - Modify',
      write: {},
      read: {
        row: 3,
        column: 1,
        numRows: 1,
        numColumns: 4
      }
    },
    modifyCdsSettings: {
      sheetName: 'UA Custom Dimensions - Modify',
      write: {},
      read: {
        row: 5,
        column: 3,
        numRows: 4,
        numColumns: 1
      }
    },
    modifyCdsResults: {
      sheetName: 'UA Custom Dimensions - Modify - Results',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 8
      },
      read: {}
    },
    modifyCdsDestinationProperties: {
      sheetName: 'UA Custom Dimensions - Modify',
      write: {
        row: 3,
        column: 7,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 3,
        column: 7,
        numRows: 1,
        numColumns: 6
      }
    },
    modifyCmsTemplateMetrics: {
      sheetName: 'UA Custom Metrics - Modify',
      write: {
        row: 14,
        column: 1,
        numRows: 1,
        numColumns: 7
      },
      read: {
        row: 14,
        column: 1,
        numRows: 1,
        numColumns: 8
      }
    },
    modifyCmsTemplateProperty: {
      sheetName: 'UA Custom Metrics - Modify',
      write: {},
      read: {
        row: 3,
        column: 3,
        numRows: 1,
        numColumns: 4
      }
    },
    modifyCmsSettings: {
      sheetName: 'UA Custom Metrics - Modify',
      write: {},
      read: {
        row: 5,
        column: 5,
        numRows: 7,
        numColumns: 1
      }
    },
    modifyCmsResults: {
      sheetName: 'UA Custom Metrics - Modify - Results',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      },
      read: {}
    },
    modifyCmsDestinationProperties: {
      sheetName: 'UA Custom Metrics - Modify',
      write: {
        row: 3,
        column: 10,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 3,
        column: 10,
        numRows: 1,
        numColumns: 6
      }
    },
    metricsRequest: {
      sheetName: 'UA Metrics Request',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 16
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 16
      }
    },
    users: {
      sheetName: 'UA Users',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 14
      }
    },
    optOut: {
      sheetName: 'UA Auto Config Opt Out',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 8
      }
    },
    adsLinks: {
      sheetName: 'UA Google Ads Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      }
    }
  },
  ga4: {
    accountSummaries: {
      sheetName: 'GA4 Account Summaries',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 4
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 5
      }
    },
    streams: {
      sheetName: 'GA4 Data Streams',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 24
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 28
      }
    },
    customDimensions: {
      sheetName: 'GA4 Custom Dimensions',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 14
      }
    },
    customMetrics: {
      sheetName: 'GA4 Custom Metrics',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 15
      }
    },
    keyEvents: {
      sheetName: 'GA4 Key Events',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 12
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 16
      }
    },
    googleAdsLinks: {
      sheetName: 'GA4 Google Ads Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 15
      }
    },
    firebaseLinks: {
      sheetName: 'GA4 Firebase Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      }
    },
    displayVideo360AdvertiserLinks: {
      sheetName: 'GA4 DV360 Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 14
      }
    },
    copyProperties: {
      sheetName: 'GA4 Copy Properties',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 21
      }
    },
    properties: {
      sheetName: 'GA4 Property Details',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 21
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 25
      }
    },
    audiences: {
      sheetName: 'GA4 Audiences',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 13
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 17
      }
    },
    accessBindings: {
      sheetName: 'GA4 Users',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 9
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 13
      }
    },
    healthReport: {
      sheetName: 'GA4 Report Settings',
      read: {
        row: 4,
        column: 1,
        numRows: 1,
        numColumns: 4
      }
    },
    bigqueryLinks: {
      sheetName: 'GA4 BigQuery Links',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 13
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 13
      }
    },
    sa360Links: {
      sheetName: 'GA4 SA360 Links',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 14
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      }
    },
    expandedDataSets: {
      sheetName: 'GA4 Expanded Data Sets',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 15
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      }
    },
    fullPropertyDeployment: {
      sheetName: 'GA4 Easy Property Creation',
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 25
      },
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 20
      }
    },
    connectedSiteTags: {
      sheetName: 'UA Connected Site Tags',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      }
    },
    channelGroups: {
      sheetName: 'GA4 Channel Groups',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 14
      }
    },
    dataStreamSelection: {
      sheetName: 'GA4 Data Stream Selection',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      }
    },
    measurementProtocolSecrets: {
      sheetName: 'GA4 Measurement Protocol Secrets',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 9
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 13
      }
    },
    adSenseLinks: {
      sheetName: 'GA4 AdSense Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      }
    },
    eventCreateRules: {
      sheetName: 'GA4 Event Create Rules',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 15
      }
    },
    audienceLists: {
      sheetName: 'GA4 Audience Lists',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 21
      }
    },
    rollupPropertySourceLinks: {
      sheetName: 'GA4 Rollup Property Source Links',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 6
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 10
      }  
    },
    subpropertyEventFilters: {
      sheetName: 'GA4 Subproperty Event Filters',
      write: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 7
      },
      read: {
        row: 2,
        column: 1,
        numRows: 1,
        numColumns: 11
      }  
    }
  }
};