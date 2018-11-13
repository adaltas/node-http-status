

export = httpStatus;

declare const httpStatus: httpStatus.HttpStatus;

declare namespace httpStatus {
	
	interface HttpStatus {
		
	  readonly '100': string;
	  readonly '100_NAME': string;
	  readonly '100_MESSAGE': string;
	  readonly 'CONTINUE': number;

	  readonly '101': string;
	  readonly '101_NAME': string;
	  readonly '101_MESSAGE': string;
	  readonly 'SWITCHING_PROTOCOLS': number;

	  readonly '200': string;
	  readonly '200_NAME': string;
	  readonly '200_MESSAGE': string;
	  readonly 'OK': number;

	  readonly '201': string;
	  readonly '201_NAME': string;
	  readonly '201_MESSAGE': string;
	  readonly 'CREATED': number;

	  readonly '202': string;
	  readonly '202_NAME': string;
	  readonly '202_MESSAGE': string;
	  readonly 'ACCEPTED': number;

	  readonly '203': string;
	  readonly '203_NAME': string;
	  readonly '203_MESSAGE': string;
	  readonly 'NON_AUTHORITATIVE_INFORMATION': number;

	  readonly '204': string;
	  readonly '204_NAME': string;
	  readonly '204_MESSAGE': string;
	  readonly 'NO_CONTENT': number;

	  readonly '205': string;
	  readonly '205_NAME': string;
	  readonly '205_MESSAGE': string;
	  readonly 'RESET_CONTENT': number;

	  readonly '206': string;
	  readonly '206_NAME': string;
	  readonly '206_MESSAGE': string;
	  readonly 'PARTIAL_CONTENT': number;

	  readonly '207': string;
	  readonly '207_NAME': string;
	  readonly '207_MESSAGE': string;
	  readonly 'MULTI_STATUS': number;

	  readonly '208': string;
	  readonly '208_NAME': string;
	  readonly '208_MESSAGE': string;
	  readonly 'ALREADY_REPORTED': number;

	  readonly '226': string;
	  readonly '226_NAME': string;
	  readonly '226_MESSAGE': string;
	  readonly 'IM_USED': number;

	  readonly '300': string;
	  readonly '300_NAME': string;
	  readonly '300_MESSAGE': string;
	  readonly 'MULTIPLE_CHOICES': number;

	  readonly '301': string;
	  readonly '301_NAME': string;
	  readonly '301_MESSAGE': string;
	  readonly 'MOVED_PERMANENTLY': number;

	  readonly '302': string;
	  readonly '302_NAME': string;
	  readonly '302_MESSAGE': string;
	  readonly 'FOUND': number;

	  readonly '303': string;
	  readonly '303_NAME': string;
	  readonly '303_MESSAGE': string;
	  readonly 'SEE_OTHER': number;

	  readonly '304': string;
	  readonly '304_NAME': string;
	  readonly '304_MESSAGE': string;
	  readonly 'NOT_MODIFIED': number;

	  readonly '305': string;
	  readonly '305_NAME': string;
	  readonly '305_MESSAGE': string;
	  readonly 'USE_PROXY': number;

	  readonly '306': string;
	  readonly '306_NAME': string;
	  readonly '306_MESSAGE': string;
	  readonly 'SWITCH_PROXY': number;

	  readonly '307': string;
	  readonly '307_NAME': string;
	  readonly '307_MESSAGE': string;
	  readonly 'TEMPORARY_REDIRECT': number;

	  readonly '308': string;
	  readonly '308_NAME': string;
	  readonly '308_MESSAGE': string;
	  readonly 'PERMANENT_REDIRECT': number;

	  readonly '400': string;
	  readonly '400_NAME': string;
	  readonly '400_MESSAGE': string;
	  readonly 'BAD_REQUEST': number;

	  readonly '401': string;
	  readonly '401_NAME': string;
	  readonly '401_MESSAGE': string;
	  readonly 'UNAUTHORIZED': number;

	  readonly '402': string;
	  readonly '402_NAME': string;
	  readonly '402_MESSAGE': string;
	  readonly 'PAYMENT_REQUIRED': number;

	  readonly '403': string;
	  readonly '403_NAME': string;
	  readonly '403_MESSAGE': string;
	  readonly 'FORBIDDEN': number;

	  readonly '404': string;
	  readonly '404_NAME': string;
	  readonly '404_MESSAGE': string;
	  readonly 'NOT_FOUND': number;

	  readonly '405': string;
	  readonly '405_NAME': string;
	  readonly '405_MESSAGE': string;
	  readonly 'METHOD_NOT_ALLOWED': number;

	  readonly '406': string;
	  readonly '406_NAME': string;
	  readonly '406_MESSAGE': string;
	  readonly 'NOT_ACCEPTABLE': number;

	  readonly '407': string;
	  readonly '407_NAME': string;
	  readonly '407_MESSAGE': string;
	  readonly 'PROXY_AUTHENTICATION_REQUIRED': number;

	  readonly '408': string;
	  readonly '408_NAME': string;
	  readonly '408_MESSAGE': string;
	  readonly 'REQUEST_TIMEOUT': number;

	  readonly '409': string;
	  readonly '409_NAME': string;
	  readonly '409_MESSAGE': string;
	  readonly 'CONFLICT': number;

	  readonly '410': string;
	  readonly '410_NAME': string;
	  readonly '410_MESSAGE': string;
	  readonly 'GONE': number;

	  readonly '411': string;
	  readonly '411_NAME': string;
	  readonly '411_MESSAGE': string;
	  readonly 'LENGTH_REQUIRED': number;

	  readonly '412': string;
	  readonly '412_NAME': string;
	  readonly '412_MESSAGE': string;
	  readonly 'PRECONDITION_FAILED': number;

	  readonly '413': string;
	  readonly '413_NAME': string;
	  readonly '413_MESSAGE': string;
	  readonly 'REQUEST_ENTITY_TOO_LARGE': number;

	  readonly '414': string;
	  readonly '414_NAME': string;
	  readonly '414_MESSAGE': string;
	  readonly 'REQUEST_URI_TOO_LONG': number;

	  readonly '415': string;
	  readonly '415_NAME': string;
	  readonly '415_MESSAGE': string;
	  readonly 'UNSUPPORTED_MEDIA_TYPE': number;

	  readonly '416': string;
	  readonly '416_NAME': string;
	  readonly '416_MESSAGE': string;
	  readonly 'REQUESTED_RANGE_NOT_SATISFIABLE': number;

	  readonly '417': string;
	  readonly '417_NAME': string;
	  readonly '417_MESSAGE': string;
	  readonly 'EXPECTATION_FAILED': number;

	  readonly '418': string;
	  readonly '418_NAME': string;
	  readonly '418_MESSAGE': string;
	  readonly 'IM_A_TEAPOT': number;

	  readonly '421': string;
	  readonly '421_NAME': string;
	  readonly '421_MESSAGE': string;
	  readonly 'MISDIRECTED_REQUEST': number;

	  readonly '422': string;
	  readonly '422_NAME': string;
	  readonly '422_MESSAGE': string;
	  readonly 'UNPROCESSABLE_ENTITY': number;

	  readonly '423': string;
	  readonly '423_NAME': string;
	  readonly '423_MESSAGE': string;
	  readonly 'LOCKED': number;

	  readonly '424': string;
	  readonly '424_NAME': string;
	  readonly '424_MESSAGE': string;
	  readonly 'FAILED_DEPENDENCY': number;

	  readonly '426': string;
	  readonly '426_NAME': string;
	  readonly '426_MESSAGE': string;
	  readonly 'UPGRADE_REQUIRED': number;

	  readonly '428': string;
	  readonly '428_NAME': string;
	  readonly '428_MESSAGE': string;
	  readonly 'PRECONDITION_REQUIRED': number;

	  readonly '429': string;
	  readonly '429_NAME': string;
	  readonly '429_MESSAGE': string;
	  readonly 'TOO_MANY_REQUESTS': number;

	  readonly '431': string;
	  readonly '431_NAME': string;
	  readonly '431_MESSAGE': string;
	  readonly 'REQUEST_HEADER_FIELDS_TOO_LARGE': number;

	  readonly '451': string;
	  readonly '451_NAME': string;
	  readonly '451_MESSAGE': string;
	  readonly 'UNAVAILABLE_FOR_LEGAL_REASONS': number;

	  readonly '500': string;
	  readonly '500_NAME': string;
	  readonly '500_MESSAGE': string;
	  readonly 'INTERNAL_SERVER_ERROR': number;

	  readonly '501': string;
	  readonly '501_NAME': string;
	  readonly '501_MESSAGE': string;
	  readonly 'NOT_IMPLEMENTED': number;

	  readonly '502': string;
	  readonly '_NAME': string;
	  readonly '_MESSAGE': string;
	  readonly 'BAD_GATEWAY': number;

	  readonly '503': string;
	  readonly '503_NAME': string;
	  readonly '503_MESSAGE': string;
	  readonly 'SERVICE_UNAVAILABLE': number;

	  readonly '504': string;
	  readonly '504_NAME': string;
	  readonly '504_MESSAGE': string;
	  readonly 'GATEWAY_TIMEOUT': number;

	  readonly '505': string;
	  readonly '505_NAME': string;
	  readonly '505_MESSAGE': string;
	  readonly 'HTTP_VERSION_NOT_SUPPORTED': number;

	  readonly '506': string;
	  readonly '506_NAME': string;
	  readonly '506_MESSAGE': string;
	  readonly 'VARIANT_ALSO_NEGOTIATES': number;

	  readonly '507': string;
	  readonly '507_NAME': string;
	  readonly '507_MESSAGE': string;
	  readonly 'INSUFFICIENT_STORAGE': number;

	  readonly '508': string;
	  readonly '508_NAME': string;
	  readonly '508_MESSAGE': string;
	  readonly 'LOOP_DETECTED': number;

	  readonly '510': string;
	  readonly '510_NAME': string;
	  readonly '510_MESSAGE': string;
	  readonly 'NOT_EXTENDED': number;

	  readonly '511': string;
	  readonly '511_NAME': string;
	  readonly '511_MESSAGE': string;
	  readonly 'NETWORK_AUTHENTICATION_REQUIRED': number;
		
		extra: {
			
			unofficial: HttpStatusUnofficial;
			
			iis: HttpStatusIis;
			
			nginx: HttpStatusNginx;
			
			cloudflare: HttpStatusCloudfare;
			
		}

	}

	interface HttpStatusUnofficial {
		
	  readonly '103': string;
	  readonly '103_NAME': string;
	  readonly '103_MESSAGE': string;
	  readonly 'CHECKPOINT': number;
		
	  readonly '420': string;
	  readonly '420_NAME': string;
	  readonly '420_MESSAGE': string;
	  readonly 'ENHANCE_YOUR_CALM': number;
		
	  readonly '450': string;
	  readonly '450_NAME': string;
	  readonly '450_MESSAGE': string;
	  readonly 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS': number;
		
	  readonly '498': string;
	  readonly '498_NAME': string;
	  readonly '498_MESSAGE': string;
	  readonly 'INVALID_TOKEN': number;
		
	  readonly '499': string;
	  readonly '499_NAME': string;
	  readonly '499_MESSAGE': string;
	  readonly 'TOKEN_REQUIRED': number;
		
	  readonly '509': string;
	  readonly '509_NAME': string;
	  readonly '509_MESSAGE': string;
	  readonly 'BANDWIDTH_LIMIT_EXCEEDED': number;
		
	  readonly '530': string;
	  readonly '530_NAME': string;
	  readonly '530_MESSAGE': string;
	  readonly 'SITE_IS_FROZEN': number;
		
	  readonly '598': string;
	  readonly '598_NAME': string;
	  readonly '598_MESSAGE': string;
	  readonly 'NETWORK_READ_TIMEOUT_ERROR': number;
		
	}

	interface HttpStatusIis {
		
	  readonly '440': string;
	  readonly '440_NAME': string;
	  readonly '440_MESSAGE': string;
	  readonly 'LOGIN_TIME_OUT': number;
		
	  readonly '449': string;
	  readonly '449_NAME': string;
	  readonly '449_MESSAGE': string;
	  readonly 'RETRY_WITH': number;
		
	  readonly '451': string;
	  readonly '451_NAME': string;
	  readonly '451_MESSAGE': string;
	  readonly 'REDIRECT': number;
		
	}

	interface HttpStatusNginx {

	  readonly '444': string;
	  readonly '444_NAME': string;
	  readonly '444_MESSAGE': string;
	  readonly 'NO_RESPONSE': number;

	  readonly '494': string;
	  readonly '494_NAME': string;
	  readonly '494_MESSAGE': string;
	  readonly 'REQUEST_HEADER_TOO_LARGE': number;

	  readonly '495': string;
	  readonly '495_NAME': string;
	  readonly '495_MESSAGE': string;
	  readonly 'SSL_CERTIFICATE_ERROR': number;

	  readonly '496': string;
	  readonly '496_NAME': string;
	  readonly '496_MESSAGE': string;
	  readonly 'SSL_CERTIFICATE_REQUIRED': number;

	  readonly '497': string;
	  readonly '497_NAME': string;
	  readonly '497_MESSAGE': string;
	  readonly 'HTTP_REQUEST_SENT_TO_HTTPS_PORT': number;

	  readonly '499': string;
	  readonly '499_NAME': string;
	  readonly '499_MESSAGE': string;
	  readonly 'CLIENT_CLOSED_REQUEST': number;
		
	}

	interface HttpStatusCloudfare {

	  readonly '520': string;
	  readonly '520_NAME': string;
	  readonly '520_MESSAGE': string;
	  readonly 'UNKNOWN_ERROR': number;

	  readonly '521': string;
	  readonly '521_NAME': string;
	  readonly '521_MESSAGE': string;
	  readonly 'WEB_SERVER_IS_DOWN': number;

	  readonly '522': string;
	  readonly '522_NAME': string;
	  readonly '522_MESSAGE': string;
	  readonly 'CONNECTION_TIMED_OUT': number;

	  readonly '523': string;
	  readonly '523_NAME': string;
	  readonly '523_MESSAGE': string;
	  readonly 'ORIGIN_IS_UNREACHABLE': number;

	  readonly '524': string;
	  readonly '524_NAME': string;
	  readonly '524_MESSAGE': string;
	  readonly 'A_TIMEOUT_OCCURRED': number;

	  readonly '525': string;
	  readonly '525_NAME': string;
	  readonly '525_MESSAGE': string;
	  readonly 'SSL_HANDSHAKE_FAILED': number;

	  readonly '526': string;
	  readonly '526_NAME': string;
	  readonly '526_MESSAGE': string;
	  readonly 'INVALID_SSL_CERTIFICATE': number;

	  readonly '527': string;
	  readonly '527_NAME': string;
	  readonly '527_MESSAGE': string;
	  readonly 'RAILGUN_ERROR': number;
		
	}

}
