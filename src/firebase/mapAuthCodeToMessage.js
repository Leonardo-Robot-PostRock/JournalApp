export function mapAuthCodeToMessage(authCode) {
	switch (authCode) {
		case 'auth/admin-restricted-operation':
			return 'Operación restringida para administradores.';
		case 'auth/argument-error':
			return 'Error de argumento.';
		case 'auth/app-not-authorized':
			return 'Aplicación no autorizada.';
		case 'auth/app-not-installed':
			return 'Aplicación no instalada.';
		case 'auth/captcha-check-failed':
			return 'Error en la verificación CAPTCHA.';
		case 'auth/code-expired':
			return 'Código expirado.';
		case 'auth/cordova-not-ready':
			return 'Cordova no está listo.';
		case 'auth/cors-unsupported':
			return 'CORS no es compatible.';
		case 'auth/credential-already-in-use':
			return 'Las credenciales ya están en uso.';
		case 'auth/custom-token-mismatch':
			return 'El token personalizado no coincide.';
		case 'auth/requires-recent-login':
			return 'Se requiere inicio de sesión reciente.';
		case 'auth/dependent-sdk-initialized-before-auth':
			return 'SDK dependiente inicializado antes de la autenticación.';
		case 'auth/dynamic-link-not-activated':
			return 'El enlace dinámico no está activado.';
		case 'auth/email-change-needs-verification':
			return 'El cambio de correo electrónico requiere verificación.';
		case 'auth/email-already-in-use':
			return 'El correo electrónico ya está en uso.';
		case 'auth/emulator-config-failed':
			return 'Configuración del emulador fallida.';
		case 'auth/expired-action-code':
			return 'Código de acción expirado.';
		case 'auth/cancelled-popup-request':
			return 'Solicitud de ventana emergente cancelada por el usuario.';
		case 'auth/internal-error':
			return 'Error interno.';
		case 'auth/invalid-api-key':
			return 'Clave de API no válida.';
		case 'auth/invalid-app-credential':
			return 'Credencial de aplicación no válida.';
		case 'auth/invalid-app-id':
			return 'ID de aplicación no válido.';
		case 'auth/invalid-user-token':
			return 'Token de usuario no válido.';
		case 'auth/invalid-auth-event':
			return 'Evento de autenticación no válido.';
		case 'auth/invalid-cert-hash':
			return 'Hash de certificado no válido.';
		case 'auth/invalid-verification-code':
			return 'Código de verificación no válido.';
		case 'auth/invalid-continue-uri':
			return 'URI de continuación no válida.';
		case 'auth/invalid-cordova-configuration':
			return 'Configuración de Cordova no válida.';
		case 'auth/invalid-custom-token':
			return 'Token personalizado no válido.';
		case 'auth/invalid-dynamic-link-domain':
			return 'Dominio de enlace dinámico no válido.';
		case 'auth/invalid-email':
			return 'Correo electrónico no válido.';
		case 'auth/invalid-emulator-scheme':
			return 'Esquema de emulador no válido.';
		case 'auth/invalid-credential':
			return 'Credencial no válida.';
		case 'auth/invalid-message-payload':
			return 'Carga útil de mensaje no válida.';
		case 'auth/invalid-multi-factor-session':
			return 'Sesión de autenticación de múltiples factores no válida.';
		case 'auth/invalid-oauth-client-id':
			return 'ID de cliente OAuth no válido.';
		case 'auth/invalid-oauth-provider':
			return 'Proveedor OAuth no válido.';
		case 'auth/invalid-action-code':
			return 'Código de acción no válido.';
		case 'auth/unauthorized-domain':
			return 'Dominio no autorizado.';
		case 'auth/wrong-password':
			return 'Contraseña incorrecta.';
		case 'auth/invalid-persistence-type':
			return 'Tipo de persistencia no válido.';
		case 'auth/invalid-phone-number':
			return 'Número de teléfono no válido.';
		case 'auth/invalid-provider-id':
			return 'ID de proveedor no válido.';
		case 'auth/invalid-recipient-email':
			return 'Correo electrónico de destinatario no válido.';
		case 'auth/invalid-sender':
			return 'Remitente no válido.';
		case 'auth/invalid-verification-id':
			return 'ID de verificación no válido.';
		case 'auth/invalid-tenant-id':
			return 'ID de inquilino no válido.';
		case 'auth/login-blocked':
			return 'Inicio de sesión bloqueado.';
		case 'auth/multi-factor-info-not-found':
			return 'Información de múltiples factores no encontrada.';
		case 'auth/multi-factor-auth-required':
			return 'Se requiere autenticación de múltiples factores.';
		case 'auth/missing-android-pkg-name':
			return 'Falta el nombre del paquete de Android.';
		case 'auth/missing-app-credential':
			return 'Falta la credencial de la aplicación.';
		case 'auth/auth-domain-config-required':
			return 'Se requiere configuración del dominio de autenticación.';
		case 'auth/missing-verification-code':
			return 'Falta el código de verificación.';
		case 'auth/missing-continue-uri':
			return 'Falta el URI de continuación.';
		case 'auth/missing-iframe-start':
			return 'Falta el inicio del iframe.';
		case 'auth/missing-ios-bundle-id':
			return 'Falta el ID de paquete de iOS.';
		case 'auth/missing-or-invalid-nonce':
			return 'Falta o es inválido el nonce.';
		case 'auth/missing-multi-factor-info':
			return 'Falta información de múltiples factores.';
		case 'auth/missing-multi-factor-session':
			return 'Falta la sesión de autenticación de múltiples factores.';
		case 'auth/missing-phone-number':
			return 'Falta el número de teléfono.';
		case 'auth/missing-password':
			return 'Falta la contraseña.';
		case 'auth/missing-verification-id':
			return 'Falta el ID de verificación.';
		case 'auth/app-deleted':
			return 'Aplicación eliminada.';
		case 'auth/account-exists-with-different-credential':
			return 'Ya existe una cuenta con credenciales diferentes.';
		case 'auth/network-request-failed':
			return 'La solicitud de red falló.';
		case 'auth/null-user':
			return 'Usuario nulo.';
		case 'auth/no-auth-event':
			return 'No hay evento de autenticación.';
		case 'auth/no-such-provider':
			return 'Proveedor inexistente.';
		case 'auth/operation-not-allowed':
			return 'Operación no permitida.';
		case 'auth/operation-not-supported-in-this-environment':
			return 'Operación no compatible en este entorno.';
		case 'auth/popup-blocked':
			return 'Ventana emergente bloqueada.';
		case 'auth/popup-closed-by-user':
			return 'Ventana emergente cerrada por el usuario.';
		case 'auth/provider-already-linked':
			return 'El proveedor ya está vinculado.';
		case 'auth/quota-exceeded':
			return 'Cuota excedida.';
		case 'auth/redirect-cancelled-by-user':
			return 'Redireccionamiento cancelado por el usuario.';
		case 'auth/redirect-operation-pending':
			return 'Operación de redireccionamiento pendiente.';
		case 'auth/rejected-credential':
			return 'Credencial rechazada.';
		case 'auth/second-factor-already-in-use':
			return 'Segundo factor ya en uso.';
		case 'auth/maximum-second-factor-count-exceeded':
			return 'Se excedió el recuento máximo de segundo factor.';
		case 'auth/tenant-id-mismatch':
			return 'Inconsistencia en el ID de inquilino.';
		case 'auth/timeout':
			return 'Tiempo de espera agotado.';
		case 'auth/user-token-expired':
			return 'Token de usuario expirado.';
		case 'auth/too-many-requests':
			return 'Demasiadas solicitudes.';
		case 'auth/unauthorized-continue-uri':
			return 'URI de continuación no autorizado.';
		case 'auth/unsupported-first-factor':
			return 'Primer factor no compatible.';
		case 'auth/unsupported-persistence-type':
			return 'Tipo de persistencia no compatible.';
		case 'auth/unsupported-tenant-operation':
			return 'Operación de inquilino no compatible.';
		case 'auth/unverified-email':
			return 'Correo electrónico no verificado.';
		case 'auth/user-cancelled':
			return 'Usuario canceló.';
		case 'auth/user-not-found':
			return 'Usuario no encontrado.';
		case 'auth/user-disabled':
			return 'Usuario deshabilitado.';
		case 'auth/user-mismatch':
			return 'Inconsistencia de usuario.';
		case 'auth/user-signed-out':
			return 'Usuario cerró sesión.';
		case 'auth/weak-password':
			return 'Contraseña débil.';
		case 'auth/web-storage-unsupported':
			return 'Almacenamiento web no compatible.';
		case 'auth/already-initialized':
			return 'Ya inicializado.';
		case 'auth/recaptcha-not-enabled':
			return 'ReCAPTCHA no habilitado.';
		case 'auth/missing-recaptcha-token':
			return 'Falta el token ReCAPTCHA.';
		case 'auth/invalid-recaptcha-token':
			return 'Token ReCAPTCHA no válido.';
		case 'auth/invalid-recaptcha-action':
			return 'Acción ReCAPTCHA no válida.';
		case 'auth/missing-client-type':
			return 'Falta el tipo de cliente.';
		case 'auth/missing-recaptcha-version':
			return 'Falta la versión ReCAPTCHA.';
		case 'auth/invalid-recaptcha-version':
			return 'Versión ReCAPTCHA no válida.';
		case 'auth/invalid-req-type':
			return 'Tipo de solicitud no válido.';
		case 'auth/unsupported-password-policy-schema-version':
			return 'Versión del esquema de política de contraseña no compatible.';
		case 'auth/password-does-not-meet-requirements':
			return 'La contraseña no cumple con los requisitos.';
		default:
			return 'Error de autenticación desconocido.';
	}
}
