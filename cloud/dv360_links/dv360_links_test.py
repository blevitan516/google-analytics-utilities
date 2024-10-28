# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either expressed or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tests for the Google Ads Links cloud function.

Tests various functions for the Google Ads Links cloud function.
"""

import base64
import json
import unittest

from absl.testing import absltest
from cloudevents.http import CloudEvent
import dv360_links


class DV360LinksTest(absltest.TestCase):

  def setUp(self):
    super(DV360LinksTest, self).setUp()
    self.attributes = {
        'source': 'test',
        'type': 'test',
    }
    self.data = {
        'client_id': '123',
        'client_secret': 'ABC',
        'refresh_token': '123ABC',
        'token_uri': 'google.com',
        'scopes': ['https://www.googleapis.com/auth/analytics.edit'],
        'enable_logging': True,
        'advertiser_id': '123',
        'action': 'create',
        'campaign_data_sharing_enabled': True,
        'cost_data_sharing_enabled': True,
        'ads_personalization_enabled': True,
        'property_id': '1234567',
        'name': 'properties/1234567/displayVideo360Link/abcdefg',
    }

    self.enter_context(
        unittest.mock.patch.object(
            dv360_links.google.cloud.logging, 'Client', autospec=True
        )
    )

  def test_main_missing_data_raises_error(self):
    missing_data = CloudEvent(self.attributes, {'message': {}})
    error_message = 'Invalid message. Missing "data" key.'
    self.assertEqual(error_message, dv360_links.main(missing_data))

  def test_main_missing_required_key_raises_errors(self):
    del self.data['client_id']
    del self.data['action']
    encoded_data = base64.b64encode(json.dumps(self.data).encode('utf-8'))
    missing_keys = CloudEvent(
        self.attributes, {'message': {'data': encoded_data}}
    )
    error_message = 'Missing keys: client_id,action'
    self.assertEqual(error_message, dv360_links.main(missing_keys))

  @unittest.mock.patch('dv360_links.AnalyticsAdminServiceClient')
  def test_get_ga_client_creates_admin_client(self, mock_analytics_client):
    dv360_links.get_ga_client(
        self.data['refresh_token'],
        self.data['token_uri'],
        self.data['client_id'],
        self.data['client_secret'],
        self.data['scopes'],
    )
    mock_analytics_client.assert_called()

  @unittest.mock.patch('dv360_links.get_ga_client')
  def test_main_calls_create_dv360_link(self, mock_ga_client):
    encoded_data = base64.b64encode(json.dumps(self.data).encode('utf-8'))
    cloud_event = CloudEvent(
        self.attributes, {'message': {'data': encoded_data}}
    )
    result = 'created'
    mock_ga_client().create_display_video_360_advertiser_link.return_value = (
        result
    )
    self.assertEqual(result, dv360_links.main(cloud_event))

  @unittest.mock.patch('dv360_links.get_ga_client')
  def test_main_calls_update_dv360_link(self, mock_ga_client):
    self.data['action'] = 'update'
    encoded_data = base64.b64encode(json.dumps(self.data).encode('utf-8'))
    cloud_event = CloudEvent(
        self.attributes, {'message': {'data': encoded_data}}
    )
    result = 'updated'
    mock_ga_client().update_display_video_360_advertiser_link.return_value = (
        result
    )
    self.assertEqual(result, dv360_links.main(cloud_event))

  @unittest.mock.patch('dv360_links.get_ga_client')
  def test_main_calls_delete_dv360_link(self, mock_ga_client):
    self.data['action'] = 'delete'
    encoded_data = base64.b64encode(json.dumps(self.data).encode('utf-8'))
    cloud_event = CloudEvent(
        self.attributes, {'message': {'data': encoded_data}}
    )
    result = 'deleted'
    mock_ga_client().delete_display_video_360_advertiser_link.return_value = (
        result
    )
    self.assertEqual(result, dv360_links.main(cloud_event))

  @unittest.mock.patch('dv360_links.get_ga_client')
  def test_main_calls_list_dv360_links(self, mock_ga_client):
    self.data['action'] = 'list'
    encoded_data = base64.b64encode(json.dumps(self.data).encode('utf-8'))
    cloud_event = CloudEvent(
        self.attributes, {'message': {'data': encoded_data}}
    )
    result = 'listed'
    mock_ga_client().list_display_video_360_advertiser_links.return_value = (
        result
    )
    self.assertEqual(result, dv360_links.main(cloud_event))


if __name__ == '__main__':
  absltest.main()
