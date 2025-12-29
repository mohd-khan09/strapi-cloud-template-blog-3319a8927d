'use strict';

/**
 * home-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-landing.home-landing');
