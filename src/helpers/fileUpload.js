
const baseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL;

export const fileUpload = async (file) => {
	if (!file) return null;
	const cloudUrl = `${baseUrl}/upload`;

	const formData = new FormData();
	formData.append('upload_preset', 'journal');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		if (!resp.ok) throw new Error('No se pudo subir imagen');
		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch (error) {
		// throw new Error(error);
		return null;
	}
};