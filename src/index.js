'use strict'
var Alexa = require('alexa-sdk')

var APP_ID = undefined; // OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"
var SKILL_NAME = 'Singapore Facts'

/**
 * Array containing Singapore facts.
 */
var FACTS = [
  "Although Singapore is called the Lion City, it doesn't have any lions native to the land.",
  'Singapore is one of only three city-states in the world.',
  'Since 1905, Singapore has had time zones changed 6 times.',
  'On average, Singaporeans walk 18 metres in 10.55 seconds making them the fastest walkers in the world.',
  "Did you know the youngest person to pass the GCE 'O' Level Chemistry paper is a Singaporean?",
  "There's a Singapore in Michigan.",
  'Caning is a form of corporal punishment still practiced in Singapore.',
  'Singapore is just 719.1 kilometers square',
  'There are more than 5.5 million people in Singapore as of 2015.',
  "Of Singapore's 5.5 million residents, 38% of them are permanent residents and other foreign nationals.",
  'According to the World Bank, Singapore is easiest place to do business.',
  'Singapore lies only one degree north of the equator.',
  'Singapore is so developed that it has an Urban Redevelopment Authority.',
  'Singapore is ranked 153rd out of 180 nations in its Press Freedom Index.',
  'There are 3.4 million users of the internet in Singapore, one of the highest internet penetration rates in the world.'
]

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.APP_ID = APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

var handlers = {
  'LaunchRequest': function () {
    this.emit('GetFact')
  },
  'GetNewFactIntent': function () {
    this.emit('GetFact')
  },
  'GetFact': function () {
    // Get a random fact from the facts list
    var factIndex = Math.floor(Math.random() * FACTS.length)
    var randomFact = FACTS[factIndex]

    // Create speech output
    var speechOutput = "Here's your fact: " + randomFact

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
  },
  'AMAZON.HelpIntent': function () {
    var speechOutput = 'You can say tell me a Singapore fact, or, you can say exit... What can I help you with?'
    var reprompt = 'What can I help you with?'
    this.emit(':ask', speechOutput, reprompt)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', 'Goodbye!')
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', 'Goodbye!')
  }
}
