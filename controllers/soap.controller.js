const soap = require('soap');

const obtenerMonedaPorPais = async (req, res) => {
  const codigo = req.query.codigo || 'CL'; // Código ISO del país

  const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

  try {
    const client = await soap.createClientAsync(url);

    const [result] = await client.CountryCurrencyAsync({ sCountryISOCode: codigo });

    res.json({
      codigo,
      moneda: result.CountryCurrencyResult.sName // Nombre de la moneda
    });
  } catch (error) {
    console.error('Error al consumir el Webservice SOAP:', error.message);
    res.status(500).json({ error: 'No se pudo obtener la moneda del país' });
  }
};

module.exports = { obtenerMonedaPorPais };


const obtenerCapitalPorPais = async (req, res) => {
  const codigo = req.query.codigo || 'CL';
  const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

  try {
    const client = await soap.createClientAsync(url);
    const [result] = await client.CapitalCityAsync({ sCountryISOCode: codigo });

    res.json({
      codigo,
      capital: result.CapitalCityResult
    });
  } catch (error) {
    console.error('Error al obtener capital:', error.message);
    res.status(500).json({ error: 'No se pudo obtener la capital del país' });
  }
};

// Función 3: Obtener info completa del país
const obtenerInfoPaisCompleta = async (req, res) => {
  const codigo = req.query.codigo || 'CL';
  const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

  try {
    const client = await soap.createClientAsync(url);
    const [result] = await client.FullCountryInfoAsync({ sCountryISOCode: codigo });

    res.json({
      pais: result.FullCountryInfoResult.sName,
      capital: result.FullCountryInfoResult.sCapitalCity,
      moneda: result.FullCountryInfoResult.sCurrency.sName,
      idiomas: result.FullCountryInfoResult.Languages.tLanguage.map(lang => lang.sName),
      regiones: [`Código Telefónico: ${result.FullCountryInfoResult.sPhoneCode}`]
    });
  } catch (error) {
    console.error('Error al obtener info completa del país:', error.message);
    res.status(500).json({ error: 'No se pudo obtener la información del país' });
  }
};

// Exportar todas las funciones
module.exports = {
  obtenerMonedaPorPais,
  obtenerCapitalPorPais,
  obtenerInfoPaisCompleta
};