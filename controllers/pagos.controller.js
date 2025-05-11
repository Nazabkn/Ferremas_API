const axios = require('axios');

const iniciarPago = async (req, res) => {
  try {
    const body = {
      buy_order: 'orden123',  // puedes generar uno dinámico
      session_id: 'sesion456',
      amount: 10000,
      return_url: 'http://localhost:8000/webpay/retorno/'
    };

    const response = await axios.post('http://localhost:8000/api/webpay/iniciar/', body);
    res.json(response.data);
  } catch (error) {
    console.error('Error al iniciar pago:', error.response?.data || error.message);
    res.status(500).json({ error: 'No se pudo iniciar el pago' });
  }
};

module.exports = { iniciarPago };
