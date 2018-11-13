

export = httpStatus;

declare const httpStatus: httpStatus.HttpStatus;

declare namespace httpStatus {
	
	interface HttpStatus {
		
	  '100': string;
	  '100_NAME': string;
	  '100_MESSAGE': string;
	  'CONTINUE': number;

	  '101': string;
	  '101_NAME': string;
	  '101_MESSAGE': string;
	  'SWITCHING_PROTOCOLS': number;

	  '200': string;
	  '200_NAME': string;
	  '200_MESSAGE': string;
	  'OK': number;

	  '201': string;
	  '201_NAME': string;
	  '201_MESSAGE': string;
	  'CREATED': number;

	  '202': string;
	  '202_NAME': string;
	  '202_MESSAGE': string;
	  'ACCEPTED': number;

	  '203': string;
	  '203_NAME': string;
	  '203_MESSAGE': string;
	  'NON_AUTHORITATIVE_INFORMATION': number;

	  '204': string;
	  '204_NAME': string;
	  '204_MESSAGE': string;
	  'NO_CONTENT': number;

	  '205': string;
	  '205_NAME': string;
	  '205_MESSAGE': string;
	  'RESET_CONTENT': number;

	  '206': string;
	  '206_NAME': string;
	  '206_MESSAGE': string;
	  'PARTIAL_CONTENT': number;

	  '207': string;
	  '207_NAME': string;
	  '207_MESSAGE': string;
	  'MULTI_STATUS': number;

	  '208': string;
	  '208_NAME': string;
	  '208_MESSAGE': string;
	  'ALREADY_REPORTED': number;

	  '226': string;
	  '226_NAME': string;
	  '226_MESSAGE': string;
	  'IM_USED': number;

	  '300': string;
	  '300_NAME': string;
	  '300_MESSAGE': string;
	  'MULTIPLE_CHOICES': number;

	  '301': string;
	  '301_NAME': string;
	  '301_MESSAGE': string;
	  'MOVED_PERMANENTLY': number;

	  '302': string;
	  '302_NAME': string;
	  '302_MESSAGE': string;
	  'FOUND': number;

	  '303': string;
	  '303_NAME': string;
	  '303_MESSAGE': string;
	  'SEE_OTHER': number;

	  '304': string;
	  '304_NAME': string;
	  '304_MESSAGE': string;
	  'NOT_MODIFIED': number;

	  '305': string;
	  '305_NAME': string;
	  '305_MESSAGE': string;
	  'USE_PROXY': number;

	  '306': string;
	  '306_NAME': string;
	  '306_MESSAGE': string;
	  'SWITCH_PROXY': number;

	  '307': string;
	  '307_NAME': string;
	  '307_MESSAGE': string;
	  'TEMPORARY_REDIRECT': number;

	  '308': string;
	  '308_NAME': string;
	  '308_MESSAGE': string;
	  'PERMANENT_REDIRECT': number;

	  '400': string;
	  '400_NAME': string;
	  '400_MESSAGE': string;
	  'BAD_REQUEST': number;

	  '401': string;
	  '401_NAME': string;
	  '401_MESSAGE': string;
	  'UNAUTHORIZED': number;

	  '402': string;
	  '402_NAME': string;
	  '402_MESSAGE': string;
	  'PAYMENT_REQUIRED': number;

	  '403': string;
	  '403_NAME': string;
	  '403_MESSAGE': string;
	  'FORBIDDEN': number;

	  '404': string;
	  '404_NAME': string;
	  '404_MESSAGE': string;
	  'NOT_FOUND': number;

	  '405': string;
	  '405_NAME': string;
	  '405_MESSAGE': string;
	  'METHOD_NOT_ALLOWED': number;

	  '406': string;
	  '406_NAME': string;
	  '406_MESSAGE': string;
	  'NOT_ACCEPTABLE': number;

	  '407': string;
	  '407_NAME': string;
	  '407_MESSAGE': string;
	  'PROXY_AUTHENTICATION_REQUIRED': number;

	  '408': string;
	  '408_NAME': string;
	  '408_MESSAGE': string;
	  'REQUEST_TIMEOUT': number;

	  '409': string;
	  '409_NAME': string;
	  '409_MESSAGE': string;
	  'CONFLICT': number;

	  '410': string;
	  '410_NAME': string;
	  '410_MESSAGE': string;
	  'GONE': number;

	  '411': string;
	  '411_NAME': string;
	  '411_MESSAGE': string;
	  'LENGTH_REQUIRED': number;

	  '412': string;
	  '412_NAME': string;
	  '412_MESSAGE': string;
	  'PRECONDITION_FAILED': number;

	  '413': string;
	  '413_NAME': string;
	  '413_MESSAGE': string;
	  'REQUEST_ENTITY_TOO_LARGE': number;

	  '414': string;
	  '414_NAME': string;
	  '414_MESSAGE': string;
	  'REQUEST_URI_TOO_LONG': number;

	  '415': string;
	  '415_NAME': string;
	  '415_MESSAGE': string;
	  'UNSUPPORTED_MEDIA_TYPE': number;

	  '416': string;
	  '416_NAME': string;
	  '416_MESSAGE': string;
	  'REQUESTED_RANGE_NOT_SATISFIABLE': number;

	  '417': string;
	  '417_NAME': string;
	  '417_MESSAGE': string;
	  'EXPECTATION_FAILED': number;

	  '418': string;
	  '418_NAME': string;
	  '418_MESSAGE': string;
	  'IM_A_TEAPOT': number;

	  '421': string;
	  '421_NAME': string;
	  '421_MESSAGE': string;
	  'MISDIRECTED_REQUEST': number;

	  '422': string;
	  '422_NAME': string;
	  '422_MESSAGE': string;
	  'UNPROCESSABLE_ENTITY': number;

	  '423': string;
	  '423_NAME': string;
	  '423_MESSAGE': string;
	  'LOCKED': number;

	  '424': string;
	  '424_NAME': string;
	  '424_MESSAGE': string;
	  'FAILED_DEPENDENCY': number;

	  '426': string;
	  '426_NAME': string;
	  '426_MESSAGE': string;
	  'UPGRADE_REQUIRED': number;

	  '428': string;
	  '428_NAME': string;
	  '428_MESSAGE': string;
	  'PRECONDITION_REQUIRED': number;

	  '429': string;
	  '429_NAME': string;
	  '429_MESSAGE': string;
	  'TOO_MANY_REQUESTS': number;

	  '431': string;
	  '431_NAME': string;
	  '431_MESSAGE': string;
	  'REQUEST_HEADER_FIELDS_TOO_LARGE': number;

	  '451': string;
	  '451_NAME': string;
	  '451_MESSAGE': string;
	  'UNAVAILABLE_FOR_LEGAL_REASONS': number;

	  '500': string;
	  '500_NAME': string;
	  '500_MESSAGE': string;
	  'INTERNAL_SERVER_ERROR': number;

	  '501': string;
	  '501_NAME': string;
	  '501_MESSAGE': string;
	  'NOT_IMPLEMENTED': number;

	  '502': string;
	  '_NAME': string;
	  '_MESSAGE': string;
	  'BAD_GATEWAY': number;

	  '503': string;
	  '503_NAME': string;
	  '503_MESSAGE': string;
	  'SERVICE_UNAVAILABLE': number;

	  '504': string;
	  '504_NAME': string;
	  '504_MESSAGE': string;
	  'GATEWAY_TIMEOUT': number;

	  '505': string;
	  '505_NAME': string;
	  '505_MESSAGE': string;
	  'HTTP_VERSION_NOT_SUPPORTED': number;

	  '506': string;
	  '506_NAME': string;
	  '506_MESSAGE': string;
	  'VARIANT_ALSO_NEGOTIATES': number;

	  '507': string;
	  '507_NAME': string;
	  '507_MESSAGE': string;
	  'INSUFFICIENT_STORAGE': number;

	  '508': string;
	  '508_NAME': string;
	  '508_MESSAGE': string;
	  'LOOP_DETECTED': number;

	  '510': string;
	  '510_NAME': string;
	  '510_MESSAGE': string;
	  'NOT_EXTENDED': number;

	  '511': string;
	  '511_NAME': string;
	  '511_MESSAGE': string;
	  'NETWORK_AUTHENTICATION_REQUIRED': number;
		
		extra: {
			
			unofficial: HttpStatusUnofficial;
			
			iis: HttpStatusIis;
			
			nginx: HttpStatusNginx;
			
			cloudflare: HttpStatusCloudfare;
			
		}

	}

	interface HttpStatusUnofficial {
		
		'103': string;
		'103_NAME': string;
		'103_MESSAGE': string;
		'CHECKPOINT': number;
		
		'420': string;
		'420_NAME': string;
		'420_MESSAGE': string;
		'ENHANCE_YOUR_CALM': number;
		
		'450': string;
		'450_NAME': string;
		'450_MESSAGE': string;
		'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS': number;
		
		'498': string;
		'498_NAME': string;
		'498_MESSAGE': string;
		'INVALID_TOKEN': number;
		
		'499': string;
		'499_NAME': string;
		'499_MESSAGE': string;
		'TOKEN_REQUIRED': number;
		
		'509': string;
		'509_NAME': string;
		'509_MESSAGE': string;
		'BANDWIDTH_LIMIT_EXCEEDED': number;
		
		'530': string;
		'530_NAME': string;
		'530_MESSAGE': string;
		'SITE_IS_FROZEN': number;
		
		'598': string;
		'598_NAME': string;
		'598_MESSAGE': string;
		'NETWORK_READ_TIMEOUT_ERROR': number;
		
	}

	interface HttpStatusIis {
		
		'440': string;
		'440_NAME': string;
		'440_MESSAGE': string;
		'LOGIN_TIME_OUT': number;
		
		'449': string;
		'449_NAME': string;
		'449_MESSAGE': string;
		'RETRY_WITH': number;
		
		'451': string;
		'451_NAME': string;
		'451_MESSAGE': string;
		'REDIRECT': number;
		
	}

	interface HttpStatusNginx {

		'444': string;
		'444_NAME': string;
		'444_MESSAGE': string;
		'NO_RESPONSE': number;

		'494': string;
		'494_NAME': string;
		'494_MESSAGE': string;
		'REQUEST_HEADER_TOO_LARGE': number;

		'495': string;
		'495_NAME': string;
		'495_MESSAGE': string;
		'SSL_CERTIFICATE_ERROR': number;

		'496': string;
		'496_NAME': string;
		'496_MESSAGE': string;
		'SSL_CERTIFICATE_REQUIRED': number;

		'497': string;
		'497_NAME': string;
		'497_MESSAGE': string;
		'HTTP_REQUEST_SENT_TO_HTTPS_PORT': number;

		'499': string;
		'499_NAME': string;
		'499_MESSAGE': string;
		'CLIENT_CLOSED_REQUEST': number;
		
	}

	interface HttpStatusCloudfare {

		'520': string;
		'520_NAME': string;
		'520_MESSAGE': string;
		'UNKNOWN_ERROR': number;

		'521': string;
		'521_NAME': string;
		'521_MESSAGE': string;
		'WEB_SERVER_IS_DOWN': number;

		'522': string;
		'522_NAME': string;
		'522_MESSAGE': string;
		'CONNECTION_TIMED_OUT': number;

		'523': string;
		'523_NAME': string;
		'523_MESSAGE': string;
		'ORIGIN_IS_UNREACHABLE': number;

		'524': string;
		'524_NAME': string;
		'524_MESSAGE': string;
		'A_TIMEOUT_OCCURRED': number;

		'525': string;
		'525_NAME': string;
		'525_MESSAGE': string;
		'SSL_HANDSHAKE_FAILED': number;

		'526': string;
		'526_NAME': string;
		'526_MESSAGE': string;
		'INVALID_SSL_CERTIFICATE': number;

		'527': string;
		'527_NAME': string;
		'527_MESSAGE': string;
		'RAILGUN_ERROR': number;
		
	}

}
