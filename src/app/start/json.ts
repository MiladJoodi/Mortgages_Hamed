export const json = {
    "title": "Personal Form",
    "description": "My Privacy Policy provides a detailed explanation of how I handle customer data.",
    "logo": "https://api.surveyjs.io/private/Surveys/files?name=ee96dc76-ecfb-4b17-8589-493015f1132a",
    "logoWidth": "auto",
    "logoHeight": "40",
    "completedHtml": "<div style=\"max-width:640px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Check-in complete.</h4>\n<p>Thank you for checking in. Your journey with us is all set. Have a great flight.</p>\n</div>\n\n</div>\n",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "passengers",
            "width": "100%",
            "minWidth": "256px",
            "titleLocation": "hidden",
            "templateElements": [
              {
                "type": "text",
                "name": "first-name",
                "width": "35%",
                "minWidth": "208px",
                "title": "PASSENGER #{panelIndex} INFO",
                "titleLocation": "top",
                "placeholder": "First name"
              },
              {
                "type": "text",
                "name": "last-name",
                "width": "30%",
                "minWidth": "172px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "placeholder": "Last name"
              },
              {
                "type": "dropdown",
                "name": "prefix",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "choices": [
                  "Mr.",
                  "Mrs.",
                  "Ms."
                ],
                "choicesOrder": "random",
                "placeholder": "Prefix",
                "allowClear": false
              },
              {
                "type": "multipletext",
                "name": "birthdate",
                "width": "65%",
                "minWidth": "256px",
                "items": [
                  {
                    "name": "date",
                    "inputType": "date",
                    "title": "Date of birth"
                  }
                ]
              },
              {
                "type": "text",
                "name": "nationality",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "placeholder": "Nationality"
              },
              {
                "type": "text",
                "name": "passport-number",
                "width": "100%",
                "minWidth": "256px",
                "title": "PASSENGER #{panelIndex} ID",
                "titleLocation": "top",
                "placeholder": "Passport #"
              },
              {
                "type": "dropdown",
                "name": "passport-issue-country",
                "width": "35%",
                "minWidth": "208px",
                "choicesByUrl": {
                  "url": "https://surveyjs.io/api/CountriesExample",
                  "valueName": "name"
                },
                "placeholder": "Country of issue",
                "allowClear": false
              },
              {
                "type": "multipletext",
                "name": "passport-exp-date",
                "width": "65%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "items": [
                  {
                    "name": "date",
                    "inputType": "date",
                    "title": "Exp. date"
                  }
                ]
              }
            ],
            "panelCount": 1,
            "minPanelCount": 1,
            "confirmDeleteText": "Do you want to delete the passenger?",
            "panelAddText": "ADD PASSENGER",
            "panelRemoveText": "REMOVE",
            "showRangeInProgress": false,
            "showProgressBar": false
          },
          {
            "type": "panel",
            "name": "person-to-notify",
            "questionTitleLocation": "hidden",
            "width": "100%",
            "minWidth": "256px",
            "elements": [
              {
                "type": "text",
                "name": "person-to-notify-first-name",
                "width": "35%",
                "minWidth": "208px",
                "title": "PERSON TO NOTIFY",
                "titleLocation": "top",
                "setValueIf": "{passengers[0].first-name} notempty",
                "setValueExpression": "{passengers[0].first-name}",
                "placeholder": "First name"
              },
              {
                "type": "text",
                "name": "person-to-notify-last-name",
                "width": "30%",
                "minWidth": "172px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "setValueIf": "{passengers[0].last-name} notempty",
                "setValueExpression": "{passengers[0].last-name}",
                "placeholder": "Last name"
              },
              {
                "type": "dropdown",
                "name": "person-to-notify-prefix",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "setValueIf": "{passengers[0].prefix} notempty",
                "setValueExpression": "{passengers[0].prefix}",
                "choices": [
                  "Mr.",
                  "Mrs.",
                  "Ms."
                ],
                "choicesOrder": "random",
                "placeholder": "Prefix",
                "allowClear": false
              },
              {
                "type": "text",
                "name": "person-to-notify-email",
                "width": "65%",
                "minWidth": "256px",
                "inputType": "email",
                "placeholder": "Email"
              },
              {
                "type": "text",
                "name": "person-to-notify-phone",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "placeholder": "Phone"
              },
              {
                "type": "text",
                "name": "person-to-notify-address",
                "width": "100%",
                "minWidth": "256px",
                "title": "ADDRESS",
                "titleLocation": "top",
                "placeholder": "Address line 1"
              },
              {
                "type": "text",
                "name": "person-to-notify-city",
                "width": "35%",
                "minWidth": "208px",
                "placeholder": "City"
              },
              {
                "type": "text",
                "name": "person-to-notify-state",
                "width": "30%",
                "minWidth": "172px",
                "startWithNewLine": false,
                "placeholder": "State"
              },
              {
                "type": "text",
                "name": "person-to-notify-zip",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "placeholder": "Zip Code"
              },
              {
                "type": "dropdown",
                "name": "person-to-notify-country",
                "width": "100%",
                "minWidth": "256px",
                "choicesByUrl": {
                  "url": "https://surveyjs.io/api/CountriesExample",
                  "valueName": "name"
                },
                "placeholder": "Country",
                "allowClear": false
              }
            ]
          },
          {
            "type": "panel",
            "name": "flight",
            "questionTitleLocation": "hidden",
            "width": "100%",
            "minWidth": "256px",
            "elements": [
              {
                "type": "text",
                "name": "departure-booking-number",
                "width": "65%",
                "minWidth": "256px",
                "title": "DEPARTURE",
                "titleLocation": "top",
                "validators": [
                  {
                    "type": "regex",
                    "text": "Your booking number must consist of exactly 6 digits.",
                    "regex": "^\\d{6}$"
                  }
                ],
                "maxLength": 6,
                "placeholder": "Please enter your 6-digit booking number"
              },
              {
                "type": "text",
                "name": "departure-flight-number",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "placeholder": "Flight #"
              },
              {
                "type": "multipletext",
                "name": "departure-date",
                "width": "65%",
                "minWidth": "256px",
                "items": [
                  {
                    "name": "date",
                    "inputType": "date",
                    "title": "Date"
                  }
                ]
              },
              {
                "type": "multipletext",
                "name": "departure-time",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "items": [
                  {
                    "name": "time",
                    "inputType": "time",
                    "title": "Time"
                  }
                ]
              },
              {
                "type": "dropdown",
                "name": "departure-country",
                "width": "65%",
                "minWidth": "256px",
                "title": "DEPARTING FROM",
                "choicesByUrl": {
                  "url": "https://surveyjs.io/api/CountriesExample"
                },
                "placeholder": "Country",
                "allowClear": false
              },
              {
                "type": "text",
                "name": "departure-city",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "title": " ",
                "placeholder": "City"
              },
              {
                "type": "dropdown",
                "name": "destination-country",
                "width": "65%",
                "minWidth": "256px",
                "title": "DESTINATION",
                "titleLocation": "top",
                "choicesByUrl": {
                  "url": "https://surveyjs.io/api/CountriesExample"
                },
                "placeholder": "Country",
                "allowClear": false
              },
              {
                "type": "text",
                "name": "destination-city",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "title": " ",
                "titleLocation": "top",
                "placeholder": "City"
              },
              {
                "type": "checkbox",
                "name": "connecting-flight",
                "width": "100%",
                "minWidth": "256px",
                "choices": [
                  {
                    "value": "true",
                    "text": "I have a connecting flight"
                  }
                ]
              },
              {
                "type": "multipletext",
                "name": "connecting-flight-date",
                "visibleIf": "{connecting-flight} = ['true']",
                "width": "65%",
                "minWidth": "256px",
                "items": [
                  {
                    "name": "date",
                    "inputType": "date",
                    "title": "Date"
                  }
                ]
              },
              {
                "type": "multipletext",
                "name": "connecting-flight-time",
                "visibleIf": "{connecting-flight} = ['true']",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "items": [
                  {
                    "name": "time",
                    "inputType": "time",
                    "title": "Time"
                  }
                ]
              },
              {
                "type": "text",
                "name": "connecting-flight-booking-number",
                "visibleIf": "{connecting-flight} = ['true']",
                "width": "65%",
                "minWidth": "256px",
                "title": "DEPARTURE",
                "validators": [
                  {
                    "type": "regex",
                    "text": "Your booking number must consist of exactly 6 digits.",
                    "regex": "^\\d{6}$"
                  }
                ],
                "maxLength": 6,
                "placeholder": "Please enter your 6-digit booking number"
              },
              {
                "type": "text",
                "name": "connecting-flight-number",
                "visibleIf": "{connecting-flight} = ['true']",
                "width": "35%",
                "minWidth": "208px",
                "startWithNewLine": false,
                "placeholder": "Flight #"
              }
            ]
          }
        ]
      }
    ],
    "showQuestionNumbers": "off",
    "questionDescriptionLocation": "underInput",
    "questionErrorLocation": "bottom",
    "completeText": "Check In",
    "widthMode": "static",
    "width": "860"
  }