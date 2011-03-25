
HttpStatus = {};

// Informational 1xx

HttpStatus['100'] = 'Continue';
HttpStatus.Continue = 200;

HttpStatus['101'] = 'Switching Protocols';
HttpStatus.SwitchingProtocols =  101;

// Successful 2xx

HttpStatus['200'] = 'OK';
HttpStatus.OK =  200;

HttpStatus['201'] = 'Created';
HttpStatus.Created =  201;

HttpStatus['202'] = 'Accepted';
HttpStatus.Accepted =  202;

HttpStatus['203'] = 'Non-Authoritative Information';
HttpStatus.NonAuthoritativeInformation =  203;

HttpStatus['204'] = 'No Content';
HttpStatus.NoContent =  204;

HttpStatus['205'] = 'Reset Content';
HttpStatus.ResetContent =  205;

HttpStatus['206'] = 'Partial Content';
HttpStatus.PartialContent =  206;

// Redirection 3xx

HttpStatus['300'] = 'Multiple Choices';
HttpStatus.MultipleChoices =  300;

HttpStatus['301'] = 'Moved Permanently';
HttpStatus.MovedPermanently =  301;

HttpStatus['302'] = 'Found';
HttpStatus.Found =  302;

HttpStatus['303'] = 'See Other';
HttpStatus.SeeOther =  303;

HttpStatus['304'] = 'Not Modified';
HttpStatus.NotModified =  304;

HttpStatus['305'] = 'Use Proxy';
HttpStatus.UseProxy =  305;

HttpStatus['307'] = 'Temporary Redirect';
HttpStatus.TemporaryRedirect =  307;

// Client Error 4xx

HttpStatus['400'] = 'Bad Request';
HttpStatus.BadRequest =  400;

HttpStatus['401'] = 'Unauthorized';
HttpStatus.Unauthorized =  401;

HttpStatus['402'] = 'Payment Required';
HttpStatus.PaymentRequired =  402;

HttpStatus['403'] = 'Forbidden';
HttpStatus.Forbidden =  403;

HttpStatus['404'] = 'Not Found';
HttpStatus.NotFound =  404;

HttpStatus['405'] = 'Method Not Allowed';
HttpStatus.MethodNotAllowed =  405;

HttpStatus['406'] = 'Not Acceptable';
HttpStatus.NotAcceptable =  406;

HttpStatus['407'] = 'Proxy Authentication Required';
HttpStatus.ProxyAuthenticationRequired =  407;

HttpStatus['408'] = 'Request Timeout';
HttpStatus.RequestTimeout =  408;

HttpStatus['409'] = 'Conflict';
HttpStatus.Conflict =  409;

HttpStatus['410'] = 'Gone';
HttpStatus.Gone =  410;

HttpStatus['411'] = 'Length Required';
HttpStatus.LengthRequired =  411;

HttpStatus['412'] = 'Precondition Failed';
HttpStatus.PreconditionFailed =  412;

HttpStatus['413'] = 'Request Entity Too Large';
HttpStatus.RequestEntityTooLarge =  413;

HttpStatus['414'] = 'Request-URI Too Long';
HttpStatus.RequestURITooLong =  414;

HttpStatus['415'] = 'Unsupported Media Type';
HttpStatus.UnsupportedMediaType =  415;

HttpStatus['416'] = 'Requested Range Not Satisfiable';
HttpStatus.RequestedRangeNotSatisfiable =  416;

HttpStatus['417'] = 'Expectation Failed';
HttpStatus.ExpectationFailed =  417;

// 500 Internal Server Error

HttpStatus['500'] = 'Internal Server Error';
HttpStatus.InternalServerError =  500;

HttpStatus['501'] = 'Not Implemented';
HttpStatus.NotImplemented =  501;

HttpStatus['502'] = 'Bad Gateway';
HttpStatus.BadGateway =  502;

HttpStatus['503'] = 'Service Unavailable';
HttpStatus.ServiceUnavailable =  503;

HttpStatus['504'] = 'Gateway Timeout';
HttpStatus.GatewayTimeout =  504;

HttpStatus['505'] = 'HTTP Version Not Supported';
HttpStatus.HTTPVersionNotSupported =  505;

module.exports = HttpStatus;

