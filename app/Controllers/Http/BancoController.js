'use strict'

const Response = require('@adonisjs/framework/src/Response');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Banco = use('App/Models/Banco');

/**
 * Resourceful controller for interacting with Bancos
 */
class BancoController {
  /**
   * Show a list of all Bancos.
   * GET Bancos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const bancos = await Banco.all();
    
    return bancos;

  }

  /**
   * Render a form to be used for creating a new Banco.
   * GET Bancos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Banco.
   * POST Bancos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['content']);
    const banco = await Banco.create({ user_id: auth.user.id, ...data });

    return banco;

  }

  /**
   * Display a single Banco.
   * GET Bancos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const banco = await Banco.findOrFail(params.id);

    return banco;
  }

  /**
   * Render a form to update an existing Banco.
   * GET Bancos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Banco details.
   * PUT or PATCH Bancos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a Banco with id.
   * DELETE Bancos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth , response }) {
    const banco = await Banco.findOrFail(params.id);
    if ( banco.user_id != auth.user_id ) {
      return response.status(401)
    }

    await banco.delete();

  }
}

module.exports = BancoController