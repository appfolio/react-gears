module.exports = {
  "project_624f2713f64853017660f4a1": {
    "base": {
      "default": {
        "frameName": "[[V]]Undo Toast / State=Default",
        "blocks": {},
        "otherText": {
          "bodyDefault": {
            "text": "{{ActionType}} successfully done.",
            "variables": {
              "ActionType": {
                "example": "Bulk Action",
                "fallback": "Action"
              }
            }
          },
          "undoButton": {
            "text": "Undo"
          }
        }
      },
      "undoing": {
        "frameName": "[[V]]Undo Toast / State=Undoing",
        "blocks": {},
        "otherText": {
          "bodyUndoing": {
            "text": "Reversing {{ActionType}}.",
            "variables": {
              "ActionType": {
                "example": "Bulk Action",
                "fallback": "Action"
              }
            }
          }
        }
      },
      "undone": {
        "frameName": "[[V]]Undo Toast / State=Undone",
        "blocks": {},
        "otherText": {
          "bodyUndone": {
            "text": "{{ActionType}} undone.",
            "variables": {
              "ActionType": {
                "example": "Bulk Action",
                "fallback": "Action"
              }
            }
          }
        }
      }
    }
  }
}