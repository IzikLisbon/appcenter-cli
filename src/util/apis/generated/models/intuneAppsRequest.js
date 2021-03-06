/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the IntuneAppsRequest class.
 * @constructor
 * IntuneAppsRequest
 *
 * @member {string} [createdMonth] PartitionKey year-month
 * 
 */
function IntuneAppsRequest() {
}

/**
 * Defines the metadata of IntuneAppsRequest
 *
 * @returns {object} metadata of IntuneAppsRequest
 *
 */
IntuneAppsRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IntuneAppsRequest',
    type: {
      name: 'Composite',
      className: 'IntuneAppsRequest',
      modelProperties: {
        createdMonth: {
          required: false,
          serializedName: 'created_month',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = IntuneAppsRequest;
