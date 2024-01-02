import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-apigee-integration',
  templateUrl: './apigee-integration.component.html',
  styleUrls: ['./apigee-integration.component.css']
})
export class ApigeeIntegrationComponent implements OnInit {
  public authToken: string | undefined;

  ngOnInit() {
    this.getAuthToken();
  }

  async getAuthToken() {
    try {
      // Set your Apigee endpoint for token authentication
      const apigeeEndpoint = 'YOUR_APIGEE_TOKEN_ENDPOINT';
  
      // Set your Azure Active Directory credentials
      const clientId = 'YOUR_AZURE_AD_CLIENT_ID';
      const clientSecret = 'YOUR_AZURE_AD_CLIENT_SECRET';
      const scope = 'openid YOUR_OTHER_SCOPES';
  
      // Set the data for the POST request (no longer in the request body)
      const data = {
        grant_type: 'client_credentials',
        scope: scope
      };
  
      // Set the headers for the POST request
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        // Add any additional headers if needed
      };
  
      // Make a POST request to Apigee for token authentication
      const response = await axios.post(apigeeEndpoint, new URLSearchParams(data).toString(), {
        headers: headers
      });
  
      // Store the obtained token in the authToken variable
      this.authToken = response.data.access_token;
  
      // Log the token to the console
      console.log('Authentication Token:', this.authToken);
    } catch (error) {
      console.error('Error obtaining authentication token:', error);
    }
  }  
}