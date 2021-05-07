const express =  require('express')

module.exports = function(server){

    //Definir todas as rotas da URL
    const router = express.Router()
    server.use('/api', router)

    //Rotas do Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}