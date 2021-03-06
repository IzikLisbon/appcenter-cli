/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NewAppReleaseAlertingEventAppReleaseProperties class.
 * @constructor
 * Properties of new application release
 *
 * @member {string} [appName]
 * 
 * @member {string} [appDisplayName]
 * 
 * @member {string} [releaseId]
 * 
 * @member {string} [platform]
 * 
 * @member {string} [uploadedAt] Date and time in ISO 8601 format
 * 
 * @member {string} [fingerprint]
 * 
 * @member {string} [releaseNotes]
 * 
 * @member {string} [version]
 * 
 * @member {string} [shortVersion]
 * 
 * @member {string} [minOs]
 * 
 * @member {boolean} [mandatoryUpdate]
 * 
 * @member {number} [size]
 * 
 * @member {string} [provisioningProfileName]
 * 
 * @member {string} [provisioningProfileType]
 * 
 * @member {string} [bundleIdentifier]
 * 
 * @member {string} [installLink]
 * 
 * @member {string} [iconLink]
 * 
 * @member {string} [distributionGroupId]
 * 
 */
function NewAppReleaseAlertingEventAppReleaseProperties() {
}

/**
 * Defines the metadata of NewAppReleaseAlertingEventAppReleaseProperties
 *
 * @returns {object} metadata of NewAppReleaseAlertingEventAppReleaseProperties
 *
 */
NewAppReleaseAlertingEventAppReleaseProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NewAppReleaseAlertingEvent_app_release_properties',
    type: {
      name: 'Composite',
      className: 'NewAppReleaseAlertingEventAppReleaseProperties',
      modelProperties: {
        appName: {
          required: false,
          serializedName: 'app_name',
          type: {
            name: 'String'
          }
        },
        appDisplayName: {
          required: false,
          serializedName: 'app_display_name',
          type: {
            name: 'String'
          }
        },
        releaseId: {
          required: false,
          serializedName: 'release_id',
          type: {
            name: 'String'
          }
        },
        platform: {
          required: false,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        },
        uploadedAt: {
          required: false,
          serializedName: 'uploaded_at',
          type: {
            name: 'String'
          }
        },
        fingerprint: {
          required: false,
          serializedName: 'fingerprint',
          type: {
            name: 'String'
          }
        },
        releaseNotes: {
          required: false,
          serializedName: 'release_notes',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        shortVersion: {
          required: false,
          serializedName: 'short_version',
          type: {
            name: 'String'
          }
        },
        minOs: {
          required: false,
          serializedName: 'min_os',
          type: {
            name: 'String'
          }
        },
        mandatoryUpdate: {
          required: false,
          serializedName: 'mandatory_update',
          type: {
            name: 'Boolean'
          }
        },
        size: {
          required: false,
          serializedName: 'size',
          type: {
            name: 'Number'
          }
        },
        provisioningProfileName: {
          required: false,
          serializedName: 'provisioning_profile_name',
          type: {
            name: 'String'
          }
        },
        provisioningProfileType: {
          required: false,
          serializedName: 'provisioning_profile_type',
          type: {
            name: 'String'
          }
        },
        bundleIdentifier: {
          required: false,
          serializedName: 'bundle_identifier',
          type: {
            name: 'String'
          }
        },
        installLink: {
          required: false,
          serializedName: 'install_link',
          type: {
            name: 'String'
          }
        },
        iconLink: {
          required: false,
          serializedName: 'icon_link',
          type: {
            name: 'String'
          }
        },
        distributionGroupId: {
          required: false,
          serializedName: 'distribution_group_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NewAppReleaseAlertingEventAppReleaseProperties;
