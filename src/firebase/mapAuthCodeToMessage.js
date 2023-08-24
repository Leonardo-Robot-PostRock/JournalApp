export function mapAuthCodeToMessage(authCode) {
	switch (authCode) {
		case 'auth/claims-too-large':
			return 'Los reclamos son demasiado grandes.';
			break;
		case 'auth/email-already-exists':
			return 'El correo electrónico ya está registrado.';
			break;
		case 'auth/email-already-in-use':
			return 'El correo electrónico ya está registrado.';
			break;
		case 'auth/id-token-expired':
			return 'El token de identificación ha caducado.';
			break;
		case 'auth/id-token-revoked':
			return 'El token de identificación ha sido revocado.';
			break;
		case 'auth/insufficient-permission':
			return 'Permiso insuficiente para completar la acción.';
			break;
		case 'auth/internal-error':
			return 'Error interno.';
			break;
		case 'auth/invalid-argument':
			return 'Argumento inválido.';
			break;
		case 'auth/invalid-claims':
			return 'Reclamos inválidos.';
			break;
		case 'auth/invalid-continue-uri':
			return 'URI de continuación inválido.';
			break;
		case 'auth/invalid-creation-time':
			return 'Hora de creación inválida.';
			break;
		case 'auth/invalid-credential':
			return 'Credencial inválida.';
			break;
		case 'auth/invalid-disabled-field':
			return 'Campo de inhabilitación inválido.';
			break;
		case 'auth/invalid-display-name':
			return 'Nombre para mostrar inválido.';
			break;
		case 'auth/invalid-dynamic-link-domain':
			return 'Dominio de enlace dinámico inválido.';
			break;
		case 'auth/invalid-email':
			return 'Correo electrónico inválido.';
			break;
		case 'auth/invalid-email-verified':
			return 'Correo electrónico verificado inválido.';
			break;
		case 'auth/invalid-hash-algorithm':
			return 'Algoritmo de hash inválido.';
			break;
		case 'auth/invalid-hash-block-size':
			return 'Tamaño de bloque de hash inválido.';
			break;
		case 'auth/invalid-hash-derived-key-length':
			return 'Longitud de clave derivada de hash inválida.';
			break;
		case 'auth/invalid-hash-key':
			return 'Clave de hash inválida.';
			break;
		case 'auth/invalid-hash-memory-cost':
			return 'Costo de memoria de hash inválido.';
			break;
		case 'auth/invalid-hash-parallelization':
			return 'Paralelización de hash inválida.';
			break;
		case 'auth/invalid-hash-rounds':
			return 'Rondas de hash inválidas.';
			break;
		case 'auth/invalid-hash-salt-separator':
			return 'Separador de sal de hash inválido.';
			break;
		case 'auth/invalid-id-token':
			return 'Token de identificación inválido.';
			break;
		case 'auth/invalid-last-sign-in-time':
			return 'Hora de última sesión inválida.';
			break;
		case 'auth/invalid-page-token':
			return 'Token de página inválido.';
			break;
		case 'auth/invalid-password':
			return 'Contraseña inválida.';
			break;
		case 'auth/wrong-password':
			return 'Contraseña inválida.';
			break;
		case 'auth/invalid-password-hash':
			return 'Hash de contraseña inválido.';
			break;
		case 'auth/invalid-password-salt':
			return 'Sal de contraseña inválida.';
			break;
		case 'auth/invalid-photo-url':
			return 'URL de foto inválido.';
			break;
		case 'auth/invalid-phone-number':
			return 'Número de teléfono inválido.';
			break;
		case 'auth/invalid-provider-data':
			return 'Datos de proveedor inválidos.';
			break;
		case 'auth/invalid-provider-id':
			return 'ID de proveedor inválido.';
			break;
		case 'auth/invalid-oauth-responsetype':
			return 'Tipo de respuesta de OAuth inválido.';
			break;
		case 'auth/invalid-session-cookie-duration':
			return 'Duración de la cookie de sesión inválida.';
			break;
		case 'auth/invalid-uid':
			return 'UID inválido.';
			break;
		case 'auth/invalid-user-import':
			return 'Importación de usuario inválida.';
			break;
		case 'auth/maximum-user-count-exceeded':
			return 'Se ha superado el número máximo de usuarios.';
			break;
		case 'auth/missing-android-pkg-name':
			return 'Falta el nombre del paquete de Android.';
			break;
		case 'auth/missing-continue-uri':
			return 'Falta el URI de continuación.';
			break;
		case 'auth/missing-hash-algorithm':
			return 'Falta el algoritmo de hash.';
			break;
		case 'auth/missing-ios-bundle-id':
			return 'Falta el ID de paquete de iOS.';
			break;
		case 'auth/missing-uid':
			return 'Falta el UID.';
			break;
		case 'auth/missing-oauth-client-secret':
			return 'Falta el secreto del cliente OAuth.';
			break;
		case 'auth/operation-not-allowed':
			return 'Operación no permitida.';
			break;
		case 'auth/phone-number-already-exists':
			return 'El número de teléfono ya está registrado.';
			break;
		case 'auth/project-not-found':
			return 'Proyecto no encontrado.';
			break;
		case 'auth/reserved-claims':
			return 'Reclamos reservados.';
			break;
		case 'auth/session-cookie-expired':
			return 'La cookie de sesión ha caducado.';
			break;
		case 'auth/session-cookie-revoked':
			return 'La cookie de sesión ha sido revocada.';
			break;
		case 'auth/too-many-requests':
			return 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.';
			break;
		case 'auth/uid-already-exists':
			return 'El UID ya está en uso.';
			break;
		case 'auth/unauthorized-continue-uri':
			return 'URI de continuación no autorizado.';
			break;
		case 'auth/user-not-found':
			return 'Usuario no encontrado.';
			break;
		default:
			return 'Error de autenticación desconocido.';
			break;
	}
}
