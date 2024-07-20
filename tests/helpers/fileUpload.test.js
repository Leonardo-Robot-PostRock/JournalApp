import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
    })
})