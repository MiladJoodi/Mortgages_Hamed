export const json = {
    "title": "Mortgage Loan Application Form",
    "pages": [{
      "name": "overview",
      "title": "Overview of your Mortgage Application",
      "elements": [{
        "type": "radiogroup",
        "name": "loan-purpose",
        "title": "Is your mortgage application for?",
        "choices": [{
          "value": "remortgage",
          "text": "Remortgage"
        }, {
          "value": "equity-transfer",
          "text": "Transfer of Equity"
        }, {
          "value": "house-purchase",
          "text": "House purchase"
        }, {
          "value": "term-extension",
          "text": "Term Extension"
        }, {
          "value": "further-advance",
          "text": "Further Advance"
        }],
        "colCount": 2
      }, {
        "type": "boolean",
        "name": "guarantor",
        "startWithNewLine": false,
        "title": "Is there a guarantor for this application?"
      }, {
        "type": "radiogroup",
        "name": "property-use",
        "title": "Is this property to be used for?",
        "choices": [{
          "value": "residential",
          "text": "Residential"
        }, {
          "value": "buy-to-let",
          "text": "Buy to let"
        }, {
          "value": "holiday-let",
          "text": "Holiday let"
        }]
      }, {
        "type": "boolean",
        "name": "holiday-let-time-period",
        "visibleIf": "{property-use} = 'holiday-let'",
        "startWithNewLine": false,
        "title": "If this is an application for a holiday let, do you intend to personally use the property for more than 60 days per annum?"
      }]
    }, {
      "name": "property-details",
      "title": "Property to be mortgaged",
      "elements": [{
        "type": "text",
        "name": "street-address",
        "title": "Street address"
      }, {
        "type": "text",
        "name": "city",
        "title": "City/Town"
      }, {
        "type": "text",
        "name": "zip",
        "startWithNewLine": false,
        "title": "Zip Code"
      }, {
        "type": "dropdown",
        "name": "country",
        "startWithNewLine": false,
        "title": "Country",
        "choicesByUrl": {
          "url": "https://surveyjs.io/api/CountriesExample"
        }
      }, {
        "type": "boolean",
        "name": "used-as-main-residence",
        "title": "Is this property to be used as your main residence?"
      }, {
        "type": "boolean",
        "name": "is-already-mortgaged",
        "visibleIf": "({loan-purpose} = 'house-purchase') and ('property-use'=='residental')",
        "startWithNewLine": false,
        "title": "Is there a mortgage on this property?"
      }, {
        "type": "boolean",
        "name": "used-for-business",
        "startWithNewLine": false,
        "title": "Will any part of the property be used for business purposes?"
      }]
    }, {
      "name": "personal-info",
      "title": "Personal Information",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "applicant-info",
          "titleLocation": "hidden",
          "defaultValue": [
            {}
          ],
          "templateTitle": "Applicant #{panelIndex}",
          "panelAddText": "Add an applicant",
          "templateElements": [
            {
              "type": "multipletext",
              "name": "full-name",
              "items": [
                {
                  "name": "first-name",
                  "title": "First name"
                },
                {
                  "name": "last-name",
                  "title": "Last name"
                }
              ]
            },
            {
              "type": "multipletext",
              "name": "birth-info",
              "startWithNewLine": false,
              "items": [
                {
                  "name": "birthplace",
                  "title": "Place of birth"
                },
                {
                  "name": "birthdate",
                  "inputType": "date",
                  "title": "Date of birth"
                }
              ]
            },
            {
              "type": "text",
              "name": "phone",
              "title": "Phone number",
              "titleLocation": "top",
              "maskType": "pattern",
              "maskSettings": {
                "saveMaskedValue": true,
                "pattern": "+9 (999) 999-99-99"
              }
            },
            {
              "type": "text",
              "name": "street-address",
              "startWithNewLine": false,
              "title": "Street address",
              "titleLocation": "top"
            },
            {
              "type": "text",
              "name": "city",
              "title": "City/Town",
              "titleLocation": "top"
            },
            {
              "type": "text",
              "name": "zip",
              "startWithNewLine": false,
              "title": "Zip Code",
              "titleLocation": "top"
            },
            {
              "type": "dropdown",
              "name": "country",
              "startWithNewLine": false,
              "title": "Country",
              "titleLocation": "top",
              "choicesByUrl": {
                "url": "https://surveyjs.io/api/CountriesExample"
              }
            }
          ]
        },
        {
          "name": "documents",
          "title": "Documents",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "ids",
              "title": "Select two documents verifying your identity and upload their scan copies in PDF format.",
              "titleLocation": "top",
              "columns": [
                {
                  "name": "id-type",
                  "title": "ID type",
                  "cellType": "dropdown",
                  "choices": [
                    "State identification (ID) card",
                    "Driver license",
                    "US passport or passport card",
                    "US military card (front and back)",
                    "Military dependent's ID card (front and back)",
                    "Permanent Resident Card",
                    "Certificate of Citizenship",
                    "Certificate of Naturalization"
                  ]
                },
                {
                  "name": "expiration-date",
                  "title": "Expiration date",
                  "cellType": "text",
                  "inputType": "date"
                }
              ],
              "rows": [
                {
                  "value": "first-id-info",
                  "text": "#1"
                },
                {
                  "value": "second-id-info",
                  "text": "#2"
                }
              ],
              "rowTitleWidth": "0px"
            },
            {
              "type": "file",
              "name": "first-id",
              "titleLocation": "hidden",
              "acceptedTypes": "application/pdf"
            },
            {
              "type": "file",
              "name": "second-id",
              "startWithNewLine": false,
              "titleLocation": "hidden",
              "acceptedTypes": "application/pdf"
            }
          ]
        }
      ]
    }, {
      "name": "employment-details",
      "title": "Employment details",
      "elements": [{
        "type": "paneldynamic",
        "name": "employer",
        "startWithNewLine": false,
        "titleLocation": "hidden",
        "panelAddText": "Add an employer",
        "defaultValue": [
          {}
        ],
        "templateElements": [{
          "type": "comment",
          "name": "organization",
          "title": "Name of Organization",
          "titleLocation": "top",
          "placeholder": "Enter the name of your current employer"
        }, {
          "type": "multipletext",
          "name": "occupation",
          "items": [{
            "name": "position",
            "placeholder": "Enter your current position in the company",
            "title": "Occupation"
          }, {
            "name": "employment-date",
            "inputType": "date",
            "title": "Employed since"
          }]
        }, {
          "type": "panel",
          "name": "income-panel",
          "elements": [{
            "type": "multipletext",
            "name": "income",
            "title": "Monthly Income in USD",
            "titleLocation": "top",
            "items": [{
              "name": "basic-salary",
              "title": "Basic salary"
            }, {
              "name": "guaranteed-bonus",
              "title": "Guaranteed bonus"
            }, {
              "name": "nonguaranteed-bonus",
              "title": "Non-guaranteed bonus"
            }]
          }]
        }, {
          "type": "panel",
          "name": "other-income-panel",
          "elements": [{
            "type": "boolean",
            "name": "have-other-income-sources",
            "title": "Any other regular income?",
            "titleLocation": "top"
          }, {
            "type": "text",
            "name": "other-income-sources",
            "placeholder": "Please specify..."
          }],
          "startWithNewLine": false
        }, {
          "type": "file",
          "name": "employment-verification-letter",
          "title": "Letter of Employment Verification",
          "description": "Please upload a letter of employment verification signed by your current employer.",
          "titleLocation": "top"
        }]
      }]
    }, {
      "name": "loan-details",
      "title": "Requested Loan Details",
      "elements": [{
        "type": "text",
        "name": "loan-amount",
        "title": "Requested loan amount in USD",
        "maskType": "currency",
        "maskSettings": {
          "prefix": "$"
        },
        "placeholder": "$1,000,000"
      }, {
        "type": "text",
        "name": "loan-tenure",
        "startWithNewLine": false,
        "title": "Loan tenure in years",
        "inputType": "number",
        "min": 1,
        "max": 25
      }]
    }],
    "showQuestionNumbers": false,
    "completeText": "Submit",
    "widthMode": "static",
    "width": "1200px"
  };