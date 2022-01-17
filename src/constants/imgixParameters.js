
const imgixCategories = [{ label:"Adjustment",selected:true},{ label:"Rotation",selected:false}]
const imgixRotation = 
[
      // {
      //     "label":"flip",
      //     "display_name": "flip axis",
      //     "category": "rotation",
      //     "available_in": [
      //       "url",
      //       "graph"
      //     ],
      //     "expects": [
      //       {
      //         "type": "string",
      //         "possible_values": [
      //           "h",
      //           "v",
      //           "hv"
      //         ]
      //       }
      //     ],
      //     "url": "https://docs.imgix.com/apis/url/rotation/flip",
      //     "short_description": "Flips an image on a specified axis."
      //   },
    
        {
          "label":"rot",
          "display_name": "rotation",
          "category": "rotation",
          "available_in": [
            "url",
            "graph"
          ],
          "expects": [
            {
              "type": "number",
              "suggested_range": {
                "min": 0,
                "max": 359
              }
            }
          ],
          "default": 0,
          "url": "https://docs.imgix.com/apis/url/rotation/rot",
          "short_description": "Rotates an image by a specified number of degrees."
        },
  ]

const imgixRotationFlip = [
  {
    "label":"flip",
    "display_name": "flip Vert-Hori",
    "value":"none"
  },
  {
    "label":"flip",
    "display_name": "flip None",
    "value":"h"
  },
  {
    "label":"flip",
    "display_name": "flip Horizontal",
    "value":"v"
  },
  {
    "label":"flip",
    "display_name": "flip Vertical",
    "value":"vh"
  }

]
    
    
const imgixAdjustments =
  [
    
       {
        "label":"bri",
        "display_name": "brightness",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/bri",
        "short_description": "Adjusts the brightness of the source image."
      },
      
  
    {
       "label":"con",
        "display_name": "contrast",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/con",
        "short_description": "Adjusts the contrast of the source image."
      },
  
    {
        "label":"exp",
        "display_name": "exposure",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/exp",
        "short_description": "Adjusts the exposure of the output image."
      },

    {
      
        "label":"gam",
        "display_name": "gamma",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/gam",
        "short_description": "Adjusts the gamma of the source image."
      },

    {
        "label":"high",
        "display_name": "highlight",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 0
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/high",
        "short_description": "Adjusts the highlights of the source image."
      },
 
    {
        "label":"hue",
        "display_name": "hue shift",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": 0,
              "max": 360
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/hue",
        "short_description": "Adjusts the hue of the source image."
      },
  
    {
        "label":"sat",
        "display_name": "saturation",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/sat",
        "short_description": "Adjusts the saturation of an image."
      },
    {
        "label":"shad",
        "display_name": "shadow",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "number",
            "suggested_range": {
              "min": 0,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/shad",
        "short_description": "Adjusts the highlights of the source image."
      },

    {
       "label":"sharp",
        "display_name": "sharpen",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "number",
            "suggested_range": {
              "min": 0,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/sharp",
        "short_description": "Adjusts the sharpness of the source image."
      },
    {
       "label":"usm",
        "display_name": "unsharp mask",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/usm",
        "short_description": "Sharpens the source image using an unsharp mask."
      },
    {
        "label":"vib",
        "display_name": "vibrance",
        "category": "adjustment",
        "available_in": [
          "url",
          "graph"
        ],
        "expects": [
          {
            "type": "integer",
            "suggested_range": {
              "min": -100,
              "max": 100
            }
          }
        ],
        "default": 0,
        "url": "https://docs.imgix.com/apis/url/adjustment/vib",
        "short_description": "Adjusts the vibrance of an image."
      },
  ]

export { imgixCategories, imgixRotation, imgixAdjustments, imgixRotationFlip };